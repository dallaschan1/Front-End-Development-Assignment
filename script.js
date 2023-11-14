var naLink = document.getElementById("n-a");
var saLink = document.getElementById("s-a");
var eurLink = document.getElementById("eur");
var afrLink = document.getElementById("afr");
var asiLink = document.getElementById("asi");
var ausLink = document.getElementById("aus");
var naAbout = document.getElementById("north-america");
var saAbout = document.getElementById("south-america");
var eurAbout = document.getElementById("europe");
var afrAbout = document.getElementById("africa");
var asiAbout = document.getElementById("asia");
var ausAbout = document.getElementById("australia");

var link = [naLink, saLink, eurLink, afrLink, asiLink, ausLink];
var about = [naAbout, saAbout, eurAbout, afrAbout, asiAbout, ausAbout];

link.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        about[index].style.display = "block";
    });
    element.addEventListener("mouseleave", () => {
        about[index].style.display = "none";
    });
});
