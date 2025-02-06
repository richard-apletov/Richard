var updates = [
    {message: "Welcome to the 1st official release of iii_dev headquarters! https://guns.lol/iii_dev"}
];
var updatespage = document.getElementById("updatespage");
for(let item of updates) {
    let a = document.createElement("updatespage");
    a.className = "updatespage";
    var title = document.createElement("message");
    title.textContent = item.message;
    a.appendChild(title);
    updatespage.appendChild(a);
}
