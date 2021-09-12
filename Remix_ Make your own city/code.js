var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b1= createSprite(30,400,25,250);
b1.shapeColor="white";
var b2= createSprite(76,400,25,300);
b2.shapeColor="white";
var b3= createSprite(114,400,25,275);
b3.shapeColor="white";
var b4= createSprite(152,400,25,325);
b4.shapeColor="white";
var b5= createSprite(190,400,25,250);
b5.shapeColor="white";
var b6= createSprite(228,400,25,200);
b6.shapeColor="white";
var b7= createSprite(266,400,25,275);
b7.shapeColor="white";
var b8= createSprite(304,400,25,300);
b8.shapeColor="white";
var b9= createSprite(342,400,25,350);
b9.shapeColor="white";
var b10= createSprite(380,400,25,275);
b10.shapeColor="white";


function draw() {
  background("black");
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
