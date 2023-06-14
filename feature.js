

function accesibility() {
  var x = document.querySelector(".accessibilityFeatures");

  if (x.classList.contains("hide")) {
    x.classList.remove("hide");
  }else {
    x.classList.add("hide");
  }
}

function closeFeatures(){
  var x = document.querySelector(".accessibilityFeatures");
  if (x.classList.contains("hide")) {
    x.classList.remove("hide");
  }else {
    x.classList.add("hide");
  }
}

function bigtext() {
  var x = document.querySelectorAll(".bigTextFeature");
  x.forEach (function (element){
    if (element.classList.contains("fs-2")) {
      element.classList.remove("fs-2");
    }else {
      element.classList.add("fs-2");
    }
  });
}

function letterSpacing() {
  var x = document.querySelectorAll(".letterSpacingFeature");
  x.forEach (function (element){
    if (element.style.letterSpacing === "2px") {
      element.style.letterSpacing = "0";
    }else {
      element.style.letterSpacing = "2px";
    }
  });
}

function textHiglight(){
  var x = document.querySelectorAll(".textHighlight");
  var y = document.querySelector(".jacquiEmailRef");
  var z = document.querySelectorAll(".pressLinks");
  x.forEach (function (element){
    if (element.style.color === "yellow") {
      element.style.color=("black");
      element.style.backgroundColor=("#f8f9fa");
      element.style.textDecoration=("none");
      y.style.color=("red");
    }else {
      element.style.color=("yellow");
      element.style.backgroundColor=("black");
      element.style.textDecoration=("underline");
      y.style.color=("yellow");
    }
  });
  z.forEach(function(element){
    if (element.style.color === "yellow") {
      element.style.color=("black");
      element.style.backgroundColor=("#f8f9fa");
    }else {
      element.style.color=("yellow");
      element.style.backgroundColor=("black");
    }
  });
}

function textAlignments(){
  var x = document.querySelectorAll(".textAlign");
  x.forEach (function (element){
    if (element.style.textAlign === "right") {
      element.style.textAlign = "center";
    } else if (element.style.textAlign === "left") {
      element.style.textAlign = "right";
    }
    else {
      element.style.textAlign = "left";
    }
  });
}

function displayImage(){
  var x = document.querySelectorAll(".removePictures");
  x.forEach (function (element){
    if (element.style.visibility==="hidden") {
      element.style.visibility="visible";
    }else {
      element.style.visibility="hidden";
    }
  });
}

function lineHeight(){
  var x = document.querySelectorAll(".textHeight");
  x.forEach(function(element){
    if (element.style.lineHeight==="2") {
      element.style.lineHeight="1.5";
    }else {
      element.style.lineHeight="2";
    }
  });
}
