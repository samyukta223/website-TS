const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const ANBtn = document.getElementById("ANBtn");
const AYBtn = document.getElementById("AYBtn");

const yesPage = document.getElementById("yesPage");
const AYPage = document.getElementById("AYPage");
const ANPage = document.getElementById("ANPage");

const video = document.getElementById("as");
const image = document.getElementById("an");



noBtn.addEventListener("mouseover", () => {

    const newX = Math.floor(
        Math.random() * window.innerWidth
    );

    const newY = Math.floor(
        Math.random() * window.innerHeight
    );

    noBtn.style.position = "absolute";

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

});



function hideAllPages() {
    yesPage.style.display = "none";
    AYPage.style.display = "none";
    ANPage.style.display = "none";

}
// YES button
yesBtn.addEventListener("click", () => {

    hideAllPages();

    yesPage.style.display = "block";


});

// ABSOLUTELY YES button
AYBtn.addEventListener("click", () => {

    hideAllPages();
    AYPage.style.display = "block";

});


// ABSOLUTELY NOT button
ANBtn.addEventListener("click", () => {

    hideAllPages();

    ANPage.style.display = "block";

});


