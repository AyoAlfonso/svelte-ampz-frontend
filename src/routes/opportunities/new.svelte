<script>

    import Datepicker from 'svelte-calendar';
    import { fade } from 'svelte/transition';
    import Toast from 'svelte-toast'
	import Select from 'svelte-select';
    import { get, post } from "../../lib/_apiv1";
    import { onMount, afterUpdate } from "svelte";
    import sha1 from 'sha1';

    let cloudinary = {}
    cloudinary.cloudName = "powell-and-moss-traders";
    cloudinary.api_key = "281493236699572";
    cloudinary.api_secret = "68T8akHD3X54Zw6rdbC3WE5UAMA";
    cloudinary.upload_preset = "ampz_stable_resize"


    let inProgress;
    let cloudinaryImgURL;
    let error = {
        selectedDeadlineDate:  {
            message: 'Enter the deadline date'
        },
        dDayDate :  {
            message: 'Enter the programme date'
        },
        description:  {
            message: 'Enter the description'
        },
        title:  {
            message: 'Enter the title'
        },
        location:  {
            message: 'Enter the location'
        },
        venue_address: {
            message: 'Enter the venue address'
         },
        selected_opportunity_type: {
             message: 'Select an opportunity type'
        },
        price: {
              message: 'Enter the price'
        },
        age: {
              message: 'Enter the age requirement'
        },
        application_link: {
              message: 'Enter your application link'
        },
        selected_sport_type: {
            message: 'Select the sport type'
        },
        selected_profile_type:{
            message: 'Select the profile type'
        },
        registered_name_of_organiser: {
                message: 'Enter name of the organiser'
        },
        registration_type_and_number: {
            message: 'Enter the registration number'
        },
        contact_email: {
            message: 'Enter your contact email'
        },
        phone_number: {
            message: 'Enter your phone Number'
        },
        message : '',
        Filesrc: {
            message : "Upload an image",
            img_too_big_message :  "Image too big (max 3000kb)"
        }

    }


    let opportunities;
    let sports;
    let nigerianStates;
    let form_a = {
        selectedDeadlineDate: '',
        dDayDate: '',
        description: '',
        title: '',
        location: null,
        venue_address: '',
        Filesrc: ''
    }

    let form_b = {
        selected_opportunity_type: null,
        selected_sport_type: null,
        price: '',
        age: '',
        application_link: '',
    }

    let form_c = {
        selected_profile_type: null,
        registered_name_of_organiser: '',
        registration_type_and_number: '',
        contact_email: '',
        phone_number: ''
    }
    /*Page Data */
	const profiles = [
        {value: '5b6712255078132ea9f49b84', label: 'Scout/Agent'},
        {value: '5b67121b5078132ea9f49b83', label: 'Coach/Academy '}
    ];

    let stage = 1;
    let loader_progress = "33.333%"

    let deadlineDateChosen = false;
    let dDayDateChosen = false;
    let opp_deadline_err = '';
    $: deadlineInputText = deadlineDateChosen ? form_a.selectedDeadlineDate : '';
    $: dDayInputText = dDayDateChosen ? form_a.dDayDate : ''; 
    
    let today =  new Date();
    let start =  new Date();
    
    let tomorrow;
	$: {
	  const date = new Date(today);
	  date.setDate(date.getDate() + 1);
	  tomorrow = date;
	}
	let in100Days;
	$: {
	  const date = new Date(start);
	  date.setDate(date.getDate() + 100);
	  in100Days = date;
    }

	onMount(async () => {
		inProgress = true;
        const OppTypeRes =  await get("opportunityType", null, null)
        const SportsRes =  await post("defaultskills", null, null)
        const NigerianStatesRes =  await get("utils/nigerian_states", null, null)
        
		if (OppTypeRes.opportunityTypes) {
            opportunities = OppTypeRes.opportunityTypes;
            opportunities.map((opportunitiesObj) => {opportunitiesObj.label = opportunitiesObj.name})
            // opportunities.push({value: '', label: 'Opportunity Type'})
        }
        if(SportsRes) {
            sports = SportsRes;
            sports.map((sportsObj) => {sportsObj.label = sportsObj.name})
            // sports.push({value: '', label: 'Sports Type'})
        }

        if(NigerianStatesRes) {
            nigerianStates = NigerianStatesRes
        }
        inProgress = false;
    })
    
    afterUpdate(() => {
        scrollToTopPage()
    });


    function checkDate (deadlineDate, dDayDate)  {
        var deadlineDate = new Date(deadlineDate)
        var dDayDate = new Date(dDayDate)

        var deadlineDate_ms = deadlineDate.getTime();
        var dDayDate_ms = dDayDate.getTime();

        if( deadlineDate_ms >= dDayDate_ms) {
         return false;
        }else {
             return true;
        }
     }
    $: {
        loader_progress = stage == 1 ? '' : stage == 2 ? 'loader_2' : stage == 3 ? 'loader_3': null;
    }

    function scrollToTopPage(){
      if(error.message) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
              setTimeout(function() {
                 error.message = '';
              }, 1500);
          };
    }

   function handleContinue() {
        error.message = ''
        let errorState;
        if(stage === 1 ){
            for(var key in form_a) {
                if(form_a[key] === "" ||form_a[key] == null) { 
                    error.message = error[key].message 
                    errorState = true;
                    // scrollToTopPage()
                 }
            }
        }
        
     if(stage === 2){
           for(var key in form_b) {
                if(form_b[key] === "" || form_b[key] == null) { 
                    error.message = error[key].message 
                     errorState = true;
                    //  scrollToTopPage()
                 }
            }
        }
        
    if(!errorState){error.message = ''}
       if(!error.message){
           let allowDate = checkDate(form_a.selectedDeadlineDate, form_a.dDayDate);
           if(!allowDate){scrollToTopPage(); error.message = 'Deadline cannot be later than programme date'}
         }
        if(!error.message){stage += 1}
   }
   
   function handleBack () {
        stage -= 1
   }

    async function submitOpportunity() {
        error.message = ''
        let errorState;
        if(stage===3){
            for(var key in form_c) {
                if(form_c[key] === "" ||form_c[key] == null) { 
                    error.message = error[key].message
                    errorState = true;
                  
                 }
            }
        }
    
    if(!errorState){error.message = ''}

    if(!errorState){
        let oppObject = {}
        inProgress = true
        let resp = await uploadImage(form_a.Filesrc);
        
      // Save that url in the database

        const toast = new Toast()
        let opts = {position: 'top-center', duration: 3000}
        oppObject = Object.assign(form_a, form_b, form_c)
        oppObject.cloudinaryImgURL = resp.secure_url;
        const res =  await post("opportunity", oppObject, null)
        if(res.success) {
            inProgress = false
            toast.success('Successfully created opportunity',opts)
            setTimeout(function(){location.href='opportunities/new'} , 4000); 
        }else {
            inProgress = false
            toast.error('Error creating opportunity',opts)
         }
        }

   }

   const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

   /*file uploading*/

async function loadFile(e) {
      if(e.target.files[0].size > 4002400) {
        error.message =   error.Filesrc.img_too_big_message 
        return;
    }else {
        error.message = ''
        form_a.Filesrc = await toBase64(e.target.files[0]);
     }
    }


  async function uploadImage(file){
    const image = file;


    const url = `https://api.cloudinary.com/v1_1/${cloudinary.cloudName}/image/upload`;
    const timeStamp = Date.now() / 1000;
    const STR = `eager=w_400,h_300,c_pad|w_260,h_200,c_crop&timestamp=${timeStamp}${cloudinary.api_secret}`;
    const signature = sha1(STR);


    const params = {
      'api_key': cloudinary.api_key,
      'timestamp': timeStamp,
    //   'upload_preset': cloudinary.upload_preset,
      'signature': signature,
      'file': image,
      'eager': 'w_400,h_300,c_pad|w_260,h_200,c_crop'
    }
  
     const OppTypeRes = await post(null, params, null, url)
    // Make request to cloudinary !!!
    // const req = superagent.post(url)

    return OppTypeRes;
  }

  
</script>

<style>

 .loader_2:after {
 width: 66.66% !important;
 }

 .loader_3:after {
      width: 100% !important;
 }
 .back-btn{
    border-color: #DB9A02 !important;
    color: #DB9A02 !important;
    background-color: #fff0cb !important;
 }

.txt-ph{
    color: #32313c;
}
.txt-green {
    color: green !important;
    font-weight: 800;
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

<main >
<div class="wrapper new-opportunity">
    <div class="nav">
        <a href="/" class="brand-logo">
            <img src="img/logo.png" alt="AMPZ">
        </a>
        <ul class="nav-items">
           <li><a href="about-ampz">About Us</a></li>
            <li><a href="product">Products</a></li>
            <li><a href="opportunities">Opportunities</a></li>
            <li class="active" ><a href="opportunities/new">Add Opportunity</a></li>
            <!-- <li><a href="go">Contact</a></li> -->
            <li><a href="waitlist">Waitlist</a></li>
            <li><a href="waitlist" class="btn">Get Started</a></li>
        </ul>
        <i class="material-icons menu-btn">menu</i>
    </div>
    <div class="content">
        <div class="form">
            <span class="close">&times;</span>
            <h3 class="title">Create an opportunity.</h3>
            <div class="loader {loader_progress}"></div>

            {#if error.message}
             <div transition:fade class="errMsg"> {error.message}</div> 
            {/if}
       

       {#if stage === 1}
            <div class="upload input">
                <input on:change={loadFile} type="file" accept="image/*">
                <div class="description">
                <img src="img/upload.png" alt="">
          
                {#if form_a.Filesrc }
                       <h5 transition:fade class="txt-green">File Uploaded ! </h5>
                {:else}
                    <h5> Upload File </h5>
                 {/if}
                <p>Drag and drop to upload pictures in JPG or PNG</p>
              
                </div>
            </div>
            <input type="text" bind:value={form_a.title} placeholder="Title" class="input">

            <div class="gold-theme">
              <Select items={nigerianStates} bind:selectedValue={form_a.location} placeholder="State of your venue ..." ></Select>
            </div>

          {#if form_a.location}
              <input type="text" bind:value={form_a.venue_address} placeholder="Venue Address" class="input">
          {/if}
            
            <textarea class="input textarea" bind:value={form_a.description} placeholder="Description"></textarea>
    

        <div class="input">
        <span  class="txt-ph"> Programme date </span>
             <Datepicker
                bind:formattedSelected={form_a.dDayDate} 
                bind:dateChosen={dDayDateChosen}
                start={tomorrow}
                end={in100Days}
            >

         <input  class="txt-ph gold-theme" type="text" value={dDayInputText}  placeholder="Pick a Date" required/>
            
            </Datepicker>
            </div>

            <div class="input">
            <span class="txt-ph"> Application Deadline... </span>
             <Datepicker 
                bind:formattedSelected={form_a.selectedDeadlineDate} 
                bind:dateChosen={deadlineDateChosen}
                start={tomorrow}
                end={in100Days}
            >

          <input  class="txt-ph" id="opp_deadline" type="text" value={deadlineInputText}  placeholder="Pick a Date"  required/>
                    
            </Datepicker>
            </div>
            
            <button on:click={handleContinue} class="btn right">
            Continue</button>
            <div class="clearfix"></div>
        {/if}

           {#if stage === 2}
         
            <div class="gold-theme mg-10">
                <Select items={opportunities}  bind:selectedValue={form_b.selected_opportunity_type} placeholder="What kind of Opportunity ?" > </Select>
            </div>

           <div class="gold-theme mg-10">
                <Select items={sports}  bind:selectedValue={form_b.selected_sport_type} placeholder="Sport category" > </Select>
            </div>
        
            <input type="number" bind:value={form_b.price }  placeholder="Price (NGN)" class="input">
            <input type="number" bind:value={form_b.age }  placeholder="Age" class="input" min="1" max="100">
            <input type="text"  bind:value={form_b.application_link } placeholder="Application Link" class="input">
            <button on:click={handleBack} class="back-btn btn left">Back</button>
            <button disabled={form_b.selected} on:click={handleContinue} class="btn right">Continue</button>
            <div class="clearfix"></div>
        {/if}


        {#if stage === 3}
            <div class="gold-theme">
                <Select items={profiles}  bind:selectedValue={form_c.selected_profile_type}  placeholder="What do you do?"  > </Select>
            </div>
         
            <input type="text" bind:value={form_c.registered_name_of_organiser }  placeholder="Registered name of organiser" class="input">
            <input type="text" bind:value={form_c.registration_type_and_number }  placeholder="Registration type and Number" class="input" min="1" max="100">
            <input type="text"  bind:value={form_c.contact_email } placeholder="Contact Email" class="input">
            <input type="number"  bind:value={form_c.phone_number } placeholder="Phone Number" class="input">

            <button on:click={handleBack} class="back-btn btn left">Back</button>
           
            {#if inProgress}
            <span class="right"> <img style='height:70px' src="loading-giph.gif" alt="loading-giph"> </span>
            {/if}
            <button on:click={submitOpportunity} class="btn right">
            Finish</button>
            <div class="clearfix"></div>
        {/if}

        </div>
    </div>
 
</div>
</main>