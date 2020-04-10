function submit() {

    if (siteName.value == "") {
    document.getElementById("siteError").innerHTML = siteError;
    } else {
        document.getElementById("siteError").innerHTML = "";  
    }
    
    if (siteURL.value == "") {
        document.getElementById("URLError").innerHTML = URLerror;
    } else {
        document.getElementById("URLError").innerHTML = "";  
    }
    
    if (siteName.value && siteURL.value) {
    
        var siteDetails = {
            name : siteName.value,
            url : siteURL.value
        }
    
        sitesList.push(siteDetails);
    
        localStorage.setItem("Details",  JSON.stringify(sitesList));
    }
    show();
    clear();
    
    }