const shareButton = document.getElementById("shareIcon");
const shareOption = document.getElementById("shareOption");

let click = 1;

shareButton.onclick = function() {
   if(click == 1) {
      shareButton.style.cssText = ("color: white; background-color: var(--dark-blue)")
      shareOption.style.display = "block";
      click = 0;
   } else {
      shareButton.style.cssText = ("color: initial; background-color: var(--light-grayish-blue)")
      shareOption.style.display = "none";
      click = 1;
   }
};

