AFRAME.registerComponent("snap", {
init: function () {
  var selfie = document.querySelector("#selfie")
  var scene = document.querySelector("a-scene")
  var clicked = false;
  selfie.addEventListener("click", (e) => {
    if(!clicked) {
      clicked = true;
     console.log("hehe");
     const canvas = scene.components.screenshot.getCanvas('perspective');
     scene.components.screenshot.capture('perspective');
   }
  });
}
});
