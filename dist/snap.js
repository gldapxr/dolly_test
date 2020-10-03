AFRAME.registerComponent("snap",{init:function(){var e=document.querySelector("#selfie"),n=document.querySelector("a-scene"),t=!1;e.addEventListener("click",(e=>{if(!t){t=!0,console.log("hehe");n.components.screenshot.getCanvas("perspective");n.components.screenshot.capture("perspective")}}))}});
//# sourceMappingURL=snap.js.map
