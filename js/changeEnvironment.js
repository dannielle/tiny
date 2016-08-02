var sceneEl = document.getElementsByTagName('a-scene')[0];

sceneEl.addEventListener('loaded', function() {
  var sky = document.querySelector("#sky");
  var buttonToSkyA = document.querySelector("button#buttonToSkyA");
  var buttonToSkyB = document.querySelector("button#buttonToSkyB");
  var buttonToSkyC = document.querySelector("button#buttonToSkyC");
  var buttonToSkyD = document.querySelector("button#buttonToSkyD");
  var buttonToGroundAndSky = document.querySelector("button#buttonToGroundAndSky");
  var model = document.querySelector("#model-house");
  var modelVisibility = true;
  var buttonToToggleModel = document.querySelector("button#buttonToToggleModel");

  buttonToSkyA.addEventListener("click", function() {
    console.log("click")
    sky.emit("sky-a");
  });
  sky.addEventListener("sky-a", function() {
    sky.setAttribute("src", "#image-a");
    document.querySelector("#ground").setAttribute("visible", "false");
  });


  buttonToSkyB.addEventListener("click", function() {
    console.log("click")
    sky.emit("sky-b");
  });
  sky.addEventListener("sky-b", function() {
    sky.setAttribute("src", "#image-b");
    document.querySelector("#ground").setAttribute("visible", "false");
  });

  buttonToSkyC.addEventListener("click", function() {
    console.log("click")
    sky.emit("sky-c");
  });
  sky.addEventListener("sky-c", function() {
    sky.setAttribute("src", "#image-c");
    document.querySelector("#ground").setAttribute("visible", "false");
  });

  buttonToSkyD.addEventListener("click", function() {
    console.log("click")
    sky.emit("sky-d");
  });
  sky.addEventListener("sky-d", function() {
    sky.setAttribute("src", "#image-d");
    document.querySelector("#ground").setAttribute("visible", "false");
  });


  buttonToGroundAndSky.addEventListener("click", function() {
    sky.emit("ground-and-sky");
  });
  sky.addEventListener("ground-and-sky", function() {
    sky.setAttribute("src", "#image-sky");
    document.querySelector("#ground").setAttribute("visible", "true");
  });

  buttonToToggleModel.addEventListener("click", function() {
    model.emit("toggle-model");
  });
  model.addEventListener("toggle-model", function() {
    if (modelVisibility) {
      model.setAttribute("visible", "false");
      modelVisibility = false;
    }
    else {
      model.setAttribute("visible", "true");
      modelVisibility = true;
    }
  });



});