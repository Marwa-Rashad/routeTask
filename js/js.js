
var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");

var siteError = `<div class="alert alert-danger" role="alert">
Name is required!
</div>`;

var URLerror = `<div class="alert alert-danger" role="alert">
URL Field is required!
</div>`;

var sitesList;
if (localStorage.getItem("Details") == null) {
sitesList = [];
} else {
    sitesList = JSON.parse(localStorage.getItem("Details"));
    show();
}
=======
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
