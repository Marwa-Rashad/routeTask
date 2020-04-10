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
