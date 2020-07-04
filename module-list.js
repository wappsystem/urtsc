(function(){
    var modules={
        "panel-main-urtsc":    	            {url:"$H/m/panel-main.html",router:1},
        "panel-child-urtsc":                {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"urtsc-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-urtsc",
                                                questionnaire_setup:"online-questionnaire-setup-urtsc",
                                                online_questionnaire:"online-questionnaire-app-urtsc",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"urtsc-participant"},

        "online-questionnaire-setup-urtsc": {url:"$H/m/oq-setup.html",Table:"urtsc-participant"},
        "online-questionnaire-app-urtsc":   {url:"$H/oq.html"},

        "notes":  		  	  			    {url:"$H/m/library/notes.html"},
        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"urtsc-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"urtsc-notes"},

        "urtsc-date-data":		            {url:"$H/m/library/date-data.html",Table:"urtsc-date",form_module:"urtsc-date-form",task_name:"Visit Date"},
        "urtsc-date-form":		            {url:"$H/m/library/date-form.html",Table:"urtsc-date"},
        "urtsc-anthropometry-data":		    {url:"$H/m/library/anthropometry-data.html",Table:"urtsc-anthropometry",form_module:"urtsc-anthropometry-form",task_name:"Anthropometry"},
        "urtsc-anthropometry-form":		    {url:"$H/m/library/anthropometry-form.html",Table:"urtsc-anthropometry"},
        "urtsc-ethnicity-data":		        {url:"$H/m/library/ethnicity-data.html",Table:"urtsc-ethnicity",form_module:"urtsc-ethnicity-form",task_name:"Ethnicity"},
        "urtsc-ethnicity-form":		        {url:"$H/m/library/ethnicity-form.html",Table:"urtsc-ethnicity",task_name:"Ethnicity"},
        "urtsc-lifestyle-data":		        {url:"$H/m/library/lifestyle-data.html",Table:"urtsc-lifestyle",form_module:"urtsc-lifestyle-form",task_name:"Lifestyle"},
        "urtsc-lifestyle-form":		        {url:"$H/m/library/lifestyle-form.html",Table:"urtsc-lifestyle",task_name:"Lifestyle"},
        "urtsc-education-data":		        {url:"$H/m/library/education-data.html",Table:"urtsc-education",form_module:"urtsc-education-form",task_name:"Education"},
        "urtsc-education-form":		        {url:"$H/m/library/education-form.html",Table:"urtsc-education",task_name:"Education"},
        "urtsc-medical-history-data":		{url:"$H/m/library/medical-history-data.html",Table:"urtsc-medical-history",form_module:"urtsc-medical-history-form",task_name:"Medical History"},
        "urtsc-medical-history-form":		{url:"$H/m/library/medical-history-form.html",Table:"urtsc-medical-history",task_name:"Medical History"},
        "urtsc-ess-data":		            {url:"$H/m/library/ess-data.html",Table:"urtsc-ess",form_module:"urtsc-ess-form",task_name:"Epworth Sleepiness Scale"},
        "urtsc-ess-form":		            {url:"$H/m/library/ess-form.html",Table:"urtsc-ess",task_name:"Epworth Sleepiness Scale"},
        "urtsc-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"urtsc-isi",form_module:"urtsc-isi-form",task_name:"Insomnia Severity Index (ISI)"},
        "urtsc-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"urtsc-isi",task_name:"Insomnia Severity Index (ISI)"},
        "urtsc-hads-data":		            {url:"$H/m/library/hads-data.html",Table:"urtsc-hads",form_module:"urtsc-hads-form",task_name:"Hospital Anxiety and Depression Questionnaire (HADS)"},
        "urtsc-hads-form":		            {url:"$H/m/library/hads-form.html",Table:"urtsc-hads",task_name:"Hospital Anxiety and Depression Questionnaire (HADS)"},
        "urtsc-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"urtsc-psqi",form_module:"urtsc-psqi-form",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        "urtsc-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"urtsc-psqi",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        
        "urtsc-file-notes-data":		    {url:"$H/m/library/file-notes-data.html",Table:"urtsc-file-notes",form_module:"urtsc-file-notes-form",task_name:"File Notes"},
        "urtsc-file-notes-form":		    {url:"$H/m/library/file-notes-form.html",Table:"urtsc-file-notes"},
        "urtsc-concom-medication-data":		{url:"$H/m/library/concom-medication-data.html",Table:"urtsc-concom-medication",form_module:"urtsc-concom-medication-form",task_name:"Concomitant Medication Form"},
        "urtsc-concom-medication-form":		{url:"$H/m/library/concom-medication-form.html",Table:"urtsc-concom-medication"},

        "urtsc-stroop-data":		        {url:"$H/m/library/stroop-data.html",Table:"urtsc-stroop",form_module:"urtsc-stroop-form",task_name:"Stroop Colour and Text Test"},
        "urtsc-stroop-form":		        {url:"$H/m/library/stroop-form.html",Table:"urtsc-stroop"},
        "urtsc-ravlt-data":		            {url:"$H/m/library/ravlt-data.html",Table:"urtsc-ravlt",form_module:"urtsc-ravlt-form",task_name:"Rey Auditory Verbal Learning Test (RAVLT)"},
        "urtsc-ravlt-form":		            {url:"$H/m/library/ravlt-form.html",Table:"urtsc-ravlt"},
        "urtsc-tmt-data":		            {url:"$H/m/library/tmt-data.html",Table:"urtsc-tmt",form_module:"urtsc-tmt-form",task_name:"Trail Making Test"},
        "urtsc-tmt-form":		            {url:"$H/m/library/tmt-form.html",Table:"urtsc-tmt"},
        "urtsc-moca-data":		            {url:"$H/m/library/moca-data.html",Table:"urtsc-moca",form_module:"urtsc-moca-form",task_name:"Montreal Cognitive Assessment (MoCA)"},
        "urtsc-moca-form":		            {url:"$H/m/library/moca-form.html",Table:"urtsc-moca"},

        "urtsc-psggrr-data":		        {url:"$H/m/library/psggrr-data.html",Table:"urtsc-psggrr",form_module:"urtsc-psggrr-form",task_name:"Grael Research PSG Report"},
        "urtsc-psggrr-form":		        {url:"$H/m/library/psggrr-form.html",Table:"urtsc-psggrr",task_name:"Grael Research PSG Report"},
        "urtsc-actigraphy-data":		    {url:"$H/m/library/actigraphy-data.html",Table:"urtsc-actigraphy",form_module:"urtsc-actigraphy-form",task_name:"Actigraphy"},
        "urtsc-actigraphy-form":		    {url:"$H/m/library/actigraphy-form.html",Table:"urtsc-actigraphy"},
        "urtsc-earlysense-data":		    {url:"$H/m/library/earlysense-data.html",Table:"urtsc-earlysense",form_module:"urtsc-earlysense-form",task_name:"EarlySense"},
        "urtsc-earlysense-form":		    {url:"$H/m/library/earlysense-form.html",Table:"urtsc-earlysense"},
        "urtsc-wristox-data":		        {url:"$H/m/library/wristox-data.html",Table:"urtsc-wristox",form_module:"urtsc-wristox-form",task_name:"WristOx"},
        "urtsc-wristox-form":		        {url:"$H/m/library/wristox-form.html",Table:"urtsc-wristox"},
   }
   for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}
})();
