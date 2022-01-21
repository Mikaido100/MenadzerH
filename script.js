function init() {
    load()
}
function save() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("passwd").value;
    var site = document.getElementById("site").value;
    var data = [login, password, site];

    var oldData = JSON.parse(localStorage.getItem('data'));
    if (oldData == null)
        oldData = Array();
    oldData.push(data);
    localStorage.setItem('data', JSON.stringify(oldData));
    load();
}
function load() {
    let tableDiv = document.getElementById('table');
    let dataArray = JSON.parse(window.localStorage.getItem('data'));
    let buffer = "";
    buffer += "<ul>";
    for (let i = 0; i < dataArray.length; i++) {
        buffer += "<li>login: " +
            dataArray[i][0] +
            " Hasło: " +
            dataArray[i][1] +
            " Strona: " +
            dataArray[i][2] +
            "<button onclick=\"del(" + i + ")\">Usuń</button>" +
            "<button onclick=\"edit(" + i + ")\">Edytuj</button>" +
            "</li>";
    }
    buffer += "</ul>";
    tableDiv.innerHTML = buffer;
}
function del(i) {
    let dataArray = JSON.parse(window.localStorage.getItem('data'));
    dataArray.splice(i, 1);
    window.localStorage.setItem('data', JSON.stringify(dataArray));
    load();
}
function edit(i) {

}