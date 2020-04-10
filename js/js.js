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