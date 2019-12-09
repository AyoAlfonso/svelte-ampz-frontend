

<script>
    import { fade } from 'svelte/transition';
    import Toast from 'svelte-toast'
    import Select from 'svelte-select';
    import { get, post } from "../../lib/_apiv1";
    // import { distanceInWordsToNow } from 'date-fn
    import { onMount, afterUpdate } from "svelte";
    
    let inProgress = false;
    const toast = new Toast()
    let opportunities = [];

    let form = {
        search: '',
        location : '' ,
        sport: '',
    }

    function handleSelect(e) {
        if(e.target){
            // if(e.target.id == 'talent') { form.profile = 'talent'}
            // if(e.target.id == 'scout') { form.profile  ='scout'}
            // if(e.target.id == 'coach') { form.profile ='coach'}
            // stage = 2
        }
    }


  	function enter(e) {
        console.log(e.target.id)
        // hovering = true;
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ef7f7f"}
            if(e.target.id == 'grp_scout') { scout_bg ='#9fef9f'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fbd87f'}
        }
	}

	function leave(e) {
        hovering = false;
             console.log(form.profile)
        if(!form.profile){
            if(e.target.id == 'grp_talent') { talent_bg =  "#ffeaea"}
            if(e.target.id == 'grp_scout') { scout_bg ='#e6fae6'}
            if(e.target.id == 'grp_coach') { coach_bg ='#fff5dc'}
        }
 
    }

    function simpleDate(ISOdateTime){
    //     let date = new Date(ISOdateTime);
    //    return date.toISOString().substring(0, 10);
       return ISOdateTime.split("T")[0]
    }

	onMount(async () => {
  
		inProgress = true;
        const opportunitiesRes =  await get("opportunity/list", form , null)
        console.log(opportunitiesRes)
   
        if(opportunitiesRes) {
            inProgress = false;
            opportunities = opportunitiesRes.data;
              console.log(opportunities)
          opportunities =  opportunities.length > 0 ? opportunities.map(opp=>{
               opp.program_date = simpleDate(opp.program_date) 
            return opp
            }) : []
            // console.log(opportunities)
            // sports.map((sportsObj) => {sportsObj.label = sportsObj.name})
        }
        inProgress = false;
    })
    
    afterUpdate(() => {
        scrollToTopPage()
    });


    function scrollToTopPage(){
          window.scrollTo({ top: 0, behavior: 'smooth' })
              setTimeout(function() {
                //  error.message = '';
              }, 1500);
    }

   async function submitSearch() {
    
        inProgress = true
        let opts = {position: 'top-center', duration: 3000}
        const res =  await get("opportunity/list", form, null)
        if(res.success) {
            inProgress = false
            opportunities = res.data 
          
            opportunities.length > 0 ? opportunities.map(opp=>{
             opp.program_date = simpleDate(opp.program_date) 
            }) : []

        }else {
            inProgress = false
            toast.error('Error adding' ,opts)
         }
   }

</script>


<main>
    <div class="wrapper opportunities">
        <div class="header">
            <div class="overlay">
                <div class="nav">
                    <a href="/go" class="brand-logo">
                        <img alt="image6" src="img/logo.png">
                    </a>
                    <ul class="nav-items">
                        <li><a href="/go">About</a></li>
                        <li><a href="/go">Products</a></li>
                        <li class="active"><a href="/go">Opportunities</a></li>
                        <li><a href="/go">Contact</a></li>
                        <li><a href="/go">Blog</a></li>
                        <li><a href="/go" class="btn">Get Started</a></li>
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
                    <input type="text" placeholder="Search for anything">
                </div>
                <div class="cover">
                    <select>
                        <option value="" selected>All Locations</option>
                    </select>
                </div>
                <div class="cover">
                    <select class="no-border">
                        <option value="" selected>Sport</option>
                    </select>
                </div>
                <button class="btn">Search</button>
            </div>
        </div>
        <div class="grid-container">
       {#if opportunities}
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
            {/if}
        

        </div>
        <div class="pagination">
            <img alt="image7" src="img/arrow_right.png">
            <p>Previous</p>
            <p class="active">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>Next</p>
            <img alt="image1" src="img/arrow_left.png">
        </div>
        <div class="create">
            <div class="overlay">
                <h3>Create Opportunities.</h3>
                <h5>Are you scouting or running a development programme? Reach more talents by sharing your opportunities with us.</h5>
                <a href="/go" class="btn">Create</a>
            </div>
        </div>
    </div>
</main>