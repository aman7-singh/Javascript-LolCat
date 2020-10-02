

var elTime = document.getElementById("timeH1");
var currentDateTime = new Date();
var currentTime = currentDateTime.toLocaleTimeString();
elTime.textContent = "Time : " + currentTime;

var refDateTime = new Date();


var elGirlImg;

if (currentDateTime < refDateTime.setHours(12, 00, 00, 0)) {
    elGirlImg = document.getElementById("girlImg");
}
else if (currentDateTime < refDateTime.setHours(17, 00, 00, 0)) {
    elGirlImg = document.getElementById("hrithikImg");
}
else if (currentDateTime < refDateTime.setHours(22, 00, 00, 0)) {
    elGirlImg = document.getElementById("hrithikImg");
}

elGirlImg.classList.remove("hide");

function dateCompare(time1, time2) {
    var t1 = new Date();
    var parts = time1.split(":");
    t1.setHours(parts[0], parts[1], parts[2], 0);
    var t2 = new Date();
    parts = time2.split(":");
    t2.setHours(parts[0], parts[1], parts[2], 0);

    // returns 1 if greater, -1 if less and 0 if the same
    if (t1.getTime() > t2.getTime()) return 1;
    if (t1.getTime() < t2.getTime()) return -1;
    return 0;
}

var wake_up_TimeDrpDwnlist = document.getElementById("wake_up_TimeDrpDwn");
var Lunch_TimeDrpDwnlist = document.getElementById("Lunch_TimeDrpDwn");
var sleep_TimeDrpDwnlist = document.getElementById("sleep_TimeDrpDwn");

for (var i = 0; i < 12; i++) {
    var opt = i+1;
    var li = document.createElement("option");
    var text = document.createTextNode(i + ' - '+ opt);
    li.appendChild(text);
    wake_up_TimeDrpDwnlist.appendChild(li);
}
for (var i = 12; i < 17; i++) {
    var opt = i + 1;
    var li = document.createElement("option");
    var text = document.createTextNode(i + ' - ' + opt);
    li.appendChild(text);
    Lunch_TimeDrpDwnlist.appendChild(li);
}
for (var i = 17; i < 24; i++) {
    var opt = i + 1;
    var li = document.createElement("option");
    var text = document.createTextNode(i + ' - ' + opt);
    li.appendChild(text);
    sleep_TimeDrpDwnlist.appendChild(li);
}

var setupLable = document.getElementById("setUplbl");
function wake_up_TimeDrpDwnChange(sel) {
    setUplbl.textContent = "Good Morning !!!";//sel.options[sel.selectedIndex].text;
    setupLable.classList.remove("text-warning");
    setupLable.classList.remove("text-primary");
    setupLable.classList.remove("text-danger");
    setupLable.classList.add("text-success");

    elGirlImg.classList.add("hide");
    elGirlImg = document.getElementById("girlImg");
    elGirlImg.classList.remove("hide");
}
function Lunch_TimeDrpDwnChange(sel) {
    setUplbl.textContent = "Good Afternoon !!!";//sel.options[sel.selectedIndex].text;
    setupLable.classList.remove("text-primary");
    setupLable.classList.remove("text-success");
    setupLable.classList.remove("text-danger");
    setupLable.classList.add("text-warning");

    elGirlImg.classList.add("hide");
    elGirlImg = document.getElementById("hrithikImg");
    elGirlImg.classList.remove("hide");
}
function sleep_TimeDrpDwnChange(sel) {
    setUplbl.textContent = "Good Night !!!";//sel.options[sel.selectedIndex].text;
    setupLable.classList.remove("text-warning");
    setupLable.classList.remove("text-success");
    setupLable.classList.remove("text-danger");
    setupLable.classList.add("text-primary");

    elGirlImg.classList.add("hide");
    elGirlImg = document.getElementById("jhonSnowImg");
    elGirlImg.classList.remove("hide");
}

function Party_TimeClicked(sel) {
    setUplbl.textContent = "!!! Party Time !!!";//sel.options[sel.selectedIndex].text;
    setupLable.classList.remove("text-warning");
    setupLable.classList.remove("text-success");
    setupLable.classList.remove("text-primary");
    setupLable.classList.add("text-danger");
    elGirlImg.classList.add("hide");
    elGirlImg = document.getElementById("ranbirImg");
    elGirlImg.classList.remove("hide");

}




