function deleteSite(item) {
sitesList.splice(item, 1);
localStorage.setItem("Details",  JSON.stringify(sitesList));
show();

}

function updateDetails(i) {
document.getElementById('btn').innerHTML = `<button class="btn btn-info my-3" onclick="saveUpdatedData(`+i+`)">Update</button>
`;
var siteName = document.getElementById("siteName");
siteName.value = sitesList[i].name;
siteURL.value = sitesList[i].url;

}
