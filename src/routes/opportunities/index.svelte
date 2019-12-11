

<script>
    import { fade } from 'svelte/transition';
    import Toast from 'svelte-toast'
    import Select from 'svelte-select';
    import { get, post } from "../../lib/_apiv1";
    // import { distanceInWordsToNow } from 'date-fn
    import { onMount, afterUpdate } from "svelte";
    
    let inProgress = false;
    let nigerianStates;
    let opportunities_status;
    let sports;
    const toast = new Toast()
    let opportunities = [];

    let form = {
        search: '',
        location : '' ,
        sport: '',
    }

  	function enter(e) {
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ef7f7f"}
            if(e.target.id == 'grp_scout') { scout_bg ='#9fef9f'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fbd87f'}
        }
	}

	function leave(e) {
        hovering = false;
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ffeaea"}
            if(e.target.id == 'grp_scout') { scout_bg ='#e6fae6'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fff5dc'}
        }
    }

    function simpleDate(ISOdateTime){
       return ISOdateTime.split("T")[0];
    }

	onMount(async () => {

        inProgress = true;
        opportunities_status = 'Loading ...'
        const opportunitiesRes =  await get("opportunity/list", form , null)
        const NigerianStatesRes =  await get("utils/nigerian_states", null, null)
        const SportsRes =  await post("defaultskills", null, null)
        if(opportunitiesRes) {


            opportunities = opportunitiesRes.data;
          opportunities =  opportunities.length > 0 ? opportunities.map(opp=>{
               opp.program_date = simpleDate(opp.program_date) 
            return opp
            }) : []
         opportunities_status = 'No opportunities found'
        }
        if(NigerianStatesRes) {
            console.log(NigerianStatesRes)
            nigerianStates = NigerianStatesRes
        }
        if(SportsRes) {
            sports = SportsRes;
            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})
        }
        inProgress = false;
    })
    
    afterUpdate(() => {
        // scrollToTopPage()
    });

    function scrollToTopPage(){
          window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(function() { }, 1500);
    }

   async function submitSearch() {
        inProgress = true
        let opts = {position: 'top-center', duration: 3000}
        console.log(form)
        const res =  await get("opportunity/list", form, null)
        if(res.success) {
            inProgress = false
            opportunities = res.data 
          
            opportunities.length > 0 ? opportunities.map(opp=>{
             opp.program_date = simpleDate(opp.program_date) 
            }) : []

        } else {
            inProgress = false
            toast.error('Error adding' ,opts)
         }
   }

</script>
<style>
.white-bg-8 {
   background-color: #fff;
}

.nav-items li a {
    color: #fff;
    font-size: 15px;
    padding: 10px 5px;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    line-height: 15px;
    position: relative;
    z-index: 1;
}
.nav-items li a.btn {
  
}

.no-opportunity {
    text-align: center;
    margin: 150px;
    color: #db9a03;
    font-size: 18px;
    font-weight: 800;
}

</style>
<main class="white-bg-8">
    <div class="wrapper opportunities">
        <div class="header">
            <div class="overlay">
                <div class="nav">
                    <a href="/" class="brand-logo">
                        <img alt="image6" src="img/logo.png">
                    </a>
                    <ul class="nav-items">
                     <li><a href="about-ampz">About Us</a></li>
                         <li><a href="product">Products</a></li>
                        <li class="active"><a href="opportunities">Opportunities</a></li>
                        <li><a href="opportunities/new">Add Opportunity</a></li>
                        <!-- <li><a href="go">Contact</a></li> -->
                        <li><a href="waitlist">Waitlist</a></li>
                        <li><a href="waitlist" class="btn">Get Started</a></li>
                    </ul>
                    <i class="material-icons menu-btn">menu</i>
                </div>
                <div class="header-content">
                    <p>verified opportunities</p>
                    <h3>Opportunity Portal</h3>
                    <h5 style="margin-bottom: 5%;">
                        &ldquo;Ability is nothing without opportunity&ldquor;<br>
                        - Napoleon Bonaparte
                    </h5>
                </div>
                <div class="empty"></div>
            </div>
        </div>
        <div class="search-form-container">
            <div class="search-form">
                <div class="cover">
                    <input type="text" bind:value={form.search} placeholder="Search for anything">
                </div>
                <div class="cover">
                
                 <select  bind:value={form.location}>
                 {#if nigerianStates}
                   <option value=""> Select State </option>
                    {#each nigerianStates as nigerianState}
                       <option value={nigerianState.state}> {nigerianState.label} </option>
                    {/each}
                 {/if}
                	</select>

                </div>

                <div class="cover">
                
                  <select  bind:value={form.sport} class="no-border">
                    {#if sports}
                      <option value=""> Select Sport </option>
                        {#each sports as sport}
                        <option value={sport.name}> {sport.name} </option>
                        {/each}
                    {/if}
                	</select>
                </div>
                <button on:click={submitSearch} class="btn">Search</button>
            </div>
        </div>
      
     {#if opportunities.length > 0 }
         <div class="grid-container">
        {#each opportunities as opportunity}
            <div class="item">
                <div class="item-content">
                    <div class="img img1"></div>
                    <div class="text">
                        <h4 class="title open-sans"> {opportunity.title}</h4>
                        <h5 class="subtitle">{opportunity.sport} | {opportunity.location} </h5>
                        <p class="main-text">
                            {opportunity.description} 
                        </p>
                        <div class="main-text">
                            <span class="left small"> Programme Date: {opportunity.program_date}</span>
                            <a href={`/opportunities/`+ opportunity._id} class="right">Read More</a>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                   </div>
                 </div>
                {/each}
                </div>
       
        {:else}
	         <div class="no-opportunity"> {opportunities_status} </div>
        {/if}

   
        <div class="create">
            <div class="overlay">
                <h3>Create Opportunities.</h3>
                <h5>Are you scouting or running a development programme? Reach more talents by sharing your opportunities with us.</h5>
                <a href="/opportunities/new" class="btn">Create</a>
            </div>
        </div>
    </div>
</main>