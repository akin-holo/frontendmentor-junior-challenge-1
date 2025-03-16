const shareButton = document.getElementById("shareIcon");
const shareOption = document.getElementById("shareOption");

let click = 1;

shareButton.onclick = function() {
   if(click == 1) {
   shareOption.style.display = "block";
   click = 0;
   } else {
      shareOption.style.display = "none";
      click = 1;
   }
};

