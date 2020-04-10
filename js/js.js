//mai
function saveUpdatedData(i) {
    sitesList[i].name = siteName.value;
    sitesList[i].url =  siteURL.value;
    localStorage.setItem("Details",  JSON.stringify(sitesList));
    document.getElementById('btn').innerHTML = `<button class="btn btn-info my-3" onclick="submit()">Submit</button>`;
clear();
show();

}

function clear() {
    siteName.value = "";
    siteURL.value = "";
}

