<script>
    import { fade } from 'svelte/transition';
    import Toast from 'svelte-toast'
    import Select from 'svelte-select';
    import { get, post } from "../../lib/_apiv1";
    import { onMount, afterUpdate } from "svelte";
    
    let inProgress = false;
    let stage = 1;

    let talent_bg = '#ffeaea';
    let scout_bg = '#e6fae6';
    let coach_bg = '#fff5dc';

    let hovering;
    let centerPageInfo = `We are currently in Beta Test and can't wait to have you on-board. Be the first to know when we roll-out.`
    let centerPageWarning = `By completing the short form below, you agree to receive electronic notifications from AMPZ.`
    let sports;


    const toast = new Toast()

    let form = {
        profile: '',
        full_name : '' ,
        contact_email: '',
        phone_number: '',
        selected_sport_type: null,
        associated_organisation: '',
    }

    let error = {
        full_name:  {
            message: 'Enter your full name'
        },
        contact_email :  {
            message: 'Enter your contact email'
        },
        phone_number:  {
            message: 'Enter your phone number'
        },
        associated_organisation:  {
            message: 'Enter your associated organisation e.g  Academy/Club'
        },
        selected_sport_type: {
                 message: 'Enter your sport of interest'
        },
        message: ''
    }

    function handleSelect(e) {
        if(e.target){
            if(e.target.id == 'talent') { form.profile = 'talent'}
            if(e.target.id == 'scout') { form.profile  ='scout'}
            if(e.target.id == 'coach') { form.profile ='coach'}
            stage = 2
        }
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

    function handleBack () {
        stage -= 1;
        form.profile = '';
   }

	onMount(async () => {
  
		inProgress = true;
        const SportsRes =  await post("defaultskills", null, null)
   
        if(SportsRes) {
               inProgress = false;
            sports = SportsRes;
            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})
        }
        inProgress = false;
    })
    
    afterUpdate(() => {
        // scrollToTopPage()
    });

   async function submitNewMember() {
        error.message = ''
        let errorState;
        if(stage === 2){
            for(var key in form) {
                if(form[key] === "" ||form[key] == null) { 
                  let talent = (key == 'associated_organisation' && form.profile == 'talent');
                    if(!talent) {
                        error.message = error[key].message
                        errorState = true;
                    }
                 }
            }
        }
    
    if(!errorState){error.message = ''}
    if(!errorState){
        inProgress = true
        let opts = {position: 'top-center', duration: 3000}
        const res =  await post("waitlist", form, null)
        if(res.success) {
            inProgress = false
            toast.success('Successfull !',opts)
            setTimeout(function(){location.href='waitlist'} , 4000); 
        }else {
            inProgress = false
            toast.error('Error adding' ,opts)
         }
        }
    
   }

</script>


<style>
   .pb_bx {
        border-radius: 4px;
        margin: 10px 0px;
        border: 0.3px solid #DB9A02;   
   } 

   img {
       background-color: var(--box-color);
   }

.center-page-info{
  text-align: center;
    font-size: 14px;
    font-weight: 500;
     margin: 20px 20%;
    word-spacing: 2px;
    color: #565F62
}

.center-page-warning-x2 {
        color: #DB9A02;
        font-size: 12px;
        margin: 40px 20%;
        font-weight: 400;
        text-align: center;
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
</style>

<main>
   <div class="wrapper new-opportunity">
                <div class="nav">
                    <a href="go" class="brand-logo">
                    <img src="img/logo.png" alt="AMPZ">
                    </a>
                    <ul class="nav-items">
                        <li><a href="about-ampz">About Us</a></li>
                        <li><a href="product">Products</a></li>
                        <li><a href="opportunities">Opportunities</a></li>
                     
                        <!-- <li><a href="go">Contact</a></li> -->
         
                        <li><a href="waitlist" class="btn">Get Started</a></li>
                    </ul>
                    <i class="material-icons menu-btn">menu</i>
                </div>

                <div class="content">
                    <div class="form">
                         
          {#if stage == 1}
      
                        <h3 style="margin-top: -5px;" class="title">Select Profile</h3>
                        <div class="center-page-info"> Carefully pick the Profile that best matches you below. </div>
                        
                        <div on:mouseenter={enter} on:mouseleave={leave} id="grp_talent" style="text-align: center;"> <img on:click={handleSelect} id="talent" style="--box-color: {talent_bg}" class="profile_image pb_bx" src="img/Group_Talent_Signup.png" alt="">  </div>
                        <div on:mouseenter={enter} on:mouseleave={leave}  id="grp_scout" style="text-align: center "> <img on:click={handleSelect} id="scout"  style="--box-color: {scout_bg}" class="profile_image pb_bx" src="img/Group_Scout_Signup.png" alt=""> </div>
                        <div  on:mouseenter={enter} on:mouseleave={leave} id="grp_coach" style="text-align: center;"> <img on:click={handleSelect} id="coach" style="--box-color: {coach_bg}" class="profile_image pb_bx" src="img/Group_Coach_Signup.png" alt="">  </div>
              
                    <!-- <button class="btn right">Continue</button> -->
                    <div class="clearfix"></div>
         {/if}

      {#if stage === 2  && form.profile == "talent"}
            <h3 class="title">Hey Champ!</h3>
            <div class="center-page-info"> {centerPageInfo} </div>
            <div class="center-page-warning-x2"> <span>  <img style="height:10px" src="img/warning.png" alt=""> </span> <span> {centerPageWarning} </span> </div>

            {#if error.message}
             <div transition:fade class="errMsg"> {error.message}</div> 
            {/if}
          
            <input type="text" bind:value={form.full_name}  placeholder="Fullname" class="input">
            <input type="text" bind:value={form.contact_email } placeholder="Contact Email" class="input">
            <input type="number"  bind:value={form.phone_number } placeholder="Phone Number" class="input">
            <div class="gold-theme mg-10">
                <Select items={sports}  bind:selectedValue={form.selected_sport_type} placeholder="Sport category" > </Select>
            </div>
            <button on:click={handleBack} class="back-btn btn left">Back</button>
             { #if inProgress}
             <span class="right"> <img style='height:70px' src="loading-giph.gif" alt="loading-giph"> </span>
         {/if}
        <button on:click={submitNewMember} class="btn right"> Submit</button>
      <div class="clearfix"></div>
    {/if}

    {#if stage === 2 && form.profile == "coach"}
            
            <h3 class="title">Thank you for your interest!</h3>
            <div class="center-page-info"> {centerPageInfo} </div>
             <div class="center-page-warning-x2"> <span>  <img style="height:10px" src="img/warning.png" alt=""> </span> <span> {centerPageWarning} </span> </div>

            {#if error.message}
             <div transition:fade class="errMsg"> {error.message}</div> 
            {/if}

            <input type="text" bind:value={form.full_name}  placeholder="Fullname" class="input">
            <input type="text" bind:value={form.contact_email } placeholder="Contact Email" class="input">
            <input type="number"  bind:value={form.phone_number } placeholder="Phone Number" class="input">
            <div class="gold-theme mg-10">
                <Select items={sports}  bind:selectedValue={form.selected_sport_type} placeholder="Sport category" > </Select>
            </div>
            <input type="text" bind:value={form.associated_organisation } placeholder="Academy" class="input">
            <button on:click={handleBack} class="back-btn btn left">Back</button>
        
                { #if inProgress}
             <span class="right"> <img style='height:70px' src="loading-giph.gif" alt="loading-giph"> </span>
         {/if}
        <button on:click={submitNewMember} class="btn right"> Submit</button>
      <div class="clearfix"></div>

        {/if}
        
        {#if stage === 2 && form.profile == "scout"}
            <h3 class="title">Thank you for your interest!</h3>
             <div class="center-page-info"> {centerPageInfo} </div>
            <div class="center-page-warning-x2"> <span>  <img style="height:10px" src="img/warning.png" alt=""> </span> <span> {centerPageWarning} </span> </div>

           
            {#if error.message}
             <div transition:fade class="errMsg"> {error.message}</div> 
            {/if}

            <input type="text" bind:value={form.full_name}  placeholder="Fullname" class="input">
            <input type="text" bind:value={form.contact_email } placeholder="Contact Email" class="input">
            <input type="number"  bind:value={form.phone_number } placeholder="Phone Number" class="input">
            <div class="gold-theme mg-10">
                <Select items={sports}  bind:selectedValue={form.selected_sport_type} placeholder="Sport category" > </Select>
            </div>
            <input type="text" bind:value={form.associated_organisation } placeholder="Club" class="input">
            <button on:click={handleBack} class="back-btn btn left">Back</button>

          { #if inProgress}
             <span class="right"> <img style='height:70px' src="loading-giph.gif" alt="loading-giph"> </span>
         {/if}
             <button on:click={submitNewMember} class="btn right"> Submit</button>
         <div class="clearfix"></div>
        {/if}

            </div>
       </div>

      <!-- </div> -->
    <!-- </div> -->
</main>
