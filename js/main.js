
function showMoreAboutDetails() {
    alert('under construction')
}

const btn = document.getElementById("memberLoginBtnTop");
const icon = btn.querySelector("i.fas");

btn.addEventListener("mouseenter", () => {
  icon.classList.add("fa-unlock");
});

btn.addEventListener("mouseleave", () => {
  icon.classList.remove("fa-unlock");
});


function goToOkulProErp() {
  const host = window.location.hostname; 
  window.location.href = "http://okulpro." + host;
}