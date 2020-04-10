function deleteSite(item) {
sitesList.splice(item, 1);
localStorage.setItem("Details",  JSON.stringify(sitesList));
=======
function show() {
    var content = "";
    for (var i = 0; i < sitesList.length; i++) {
        content+= `        <div class="d-flex row align-items-center px-0 py-2 shadow mb-4">
        <h4 class="mr-5 col-sm-6">` + sitesList[i].name + `</h4>
        <a href="https://` + sitesList[i].url +`" class="bg-info text-white p-2 rounded ml-5 mr-3" target="_blank">Visit</a>
        <button type="button" class=" btn btn-warning mr-2" onclick="updateDetails(`+i+`);">Update</button>
        <button type="button" class=" btn btn-danger mr-2" onclick="deleteSite(`+i+`);">
            Delete
        </button>
      </div>`
    }
    document.getElementById("result").innerHTML = content;
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

function updateDetails(i) {
document.getElementById('btn').innerHTML = `<button class="btn btn-info my-3" onclick="saveUpdatedData(`+i+`)">Update</button>
`;
var siteName = document.getElementById("siteName");
siteName.value = sitesList[i].name;
siteURL.value = sitesList[i].url;

}
=======
function clear() {
    siteName.value = "";
    siteURL.value = "";
}


