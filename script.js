document.getElementById('cv').onclick = function(){
    document.getElementById('cv').innerHTML = "Thank you"
};

const btn = document.getElementById('description');
const targetDiv = document.getElementById('more-about')

btn.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
};

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "freecodecamp.jpg") {
    myImage.setAttribute("src", "freecodecamp2.jpg");
  } else {
    myImage.setAttribute("src", "freecodecamp.jpg");
  }
};
