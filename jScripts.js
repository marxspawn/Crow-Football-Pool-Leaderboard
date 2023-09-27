function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}


const stars = 150;

function genStars() {
  var setX = 2000;
  var newX = Math.floor(Math.random() * setX);
  var setY = 2000;
  var newY = Math.floor(Math.random() * setY);
  return [newX, newY];
}

for (i = 0; i < stars; i++) {
  var placeStars = genStars();
  var placeStars2 = genStars();
  var placeStars3 = genStars();
  var theseStars = document.createElement("nav");
  theseStars.style.top = placeStars[0] + "px";
  theseStars.style.left = placeStars[1] + "px";
  theseStars.className = "star";
  document.body.append(theseStars);
  var theseStars2 = document.createElement("nav");
  theseStars2.style.top = placeStars2[0] + "px";
  theseStars2.style.left = placeStars2[1] + "px";
  theseStars2.className = "star2";
  document.body.append(theseStars2);
  var theseStars3 = document.createElement("nav");
  theseStars3.style.top = placeStars3[0] + "px";
  theseStars3.style.left = placeStars3[1] + "px";
  theseStars3.className = "star3";
  document.body.append(theseStars3);
}

