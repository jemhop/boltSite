var count = 1;

var visits = parseInt(localStorage.getItem("boltVisits"));
console.log(visits);

if (visits === null) {
    localStorage.setItem("boltVisits", 1);
}
else {
    localStorage.setItem("boltVisits", (visits += 1));
    console.log(localStorage.getItem("boltVisits"));
    count = localStorage.getItem("boltVisits");
}

document.getElementById("visits").innerHTML = count.toString();

document.getElementById("music").volume = 0.3;
document.getElementById("music").playbackRate = 2.5;

console.log("JS loaded");
