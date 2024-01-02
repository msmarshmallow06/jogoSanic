var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c9dc0399-bdea-40cb-9219-b5a327bd430c","aaf71731-4288-4be2-9cd2-6b58cd894b02","9f876b15-4ab5-4d4f-8466-fbb5022ee05f"],"propsByKey":{"c9dc0399-bdea-40cb-9219-b5a327bd430c":{"name":"green_hill","sourceUrl":"assets/v3/animations/u39yEU5-PpFbpIumNdo2QhKEYGG_3CZE_TOBS6f4FwE/c9dc0399-bdea-40cb-9219-b5a327bd430c.png","frameSize":{"x":320,"y":224},"frameCount":1,"looping":true,"frameDelay":4,"version":"tVklG7l5sA9Ee8WWBcQ83s796jgM9Cp4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":224},"rootRelativePath":"assets/v3/animations/u39yEU5-PpFbpIumNdo2QhKEYGG_3CZE_TOBS6f4FwE/c9dc0399-bdea-40cb-9219-b5a327bd430c.png"},"aaf71731-4288-4be2-9cd2-6b58cd894b02":{"name":"sonic","sourceUrl":null,"frameSize":{"x":34,"y":40},"frameCount":13,"looping":true,"frameDelay":12,"version":"DonovOdeVemTib7ES5S1iI0eBMvZioC5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":160},"rootRelativePath":"assets/aaf71731-4288-4be2-9cd2-6b58cd894b02.png"},"9f876b15-4ab5-4d4f-8466-fbb5022ee05f":{"name":"pomni","sourceUrl":null,"frameSize":{"x":190,"y":161},"frameCount":1,"looping":true,"frameDelay":12,"version":"weg8ESikEC0kXuspJh9Z9Om6pbCSFSTU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":161},"rootRelativePath":"assets/9f876b15-4ab5-4d4f-8466-fbb5022ee05f.png"}}};
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

var hill;
hill = createSprite(200,200,400,400);
hill.setAnimation("green_hill");
hill.scale = 2.0;

var tails;
tails = createSprite(200,200,20,20);
tails.shapeColor = 'gold';

var sonic;
sonic = createSprite(10 ,200,14,120);
sonic.shapeColor = 'blue';
sonic.scale = 2.4;
sonic.setAnimation("sonic");

var knukcles;
knukcles = createSprite (390,200,14,120);
var pomni = createSprite(200, 200);
pomni.setAnimation("pomni");
pomni.visible = false;
  
var estado = "inicio";

var pontos_sonic = 0;

var pontos_knukcles = 0;

createEdgeSprites();

function draw() {
  
stroke  ("black");
  
strokeWeight(5)  ;
  
background ("green_hill");




drawSprites();
 if (estado == "inicio") {
text("clique para começar", 150, 200);

if(keyDown("space"))   {
  
tails.velocityY = 7;

tails.velocityX = 8;

knukcles.velocityY = 6;

estado = "fase1";
}
  }
  if (estado == "fase1") {
   text(pontos_knukcles, 200, 350);
   text(pontos_sonic, 200,50 );
   if (tails.isTouching(rightEdge)) {
 pontos_sonic++;
  
 tails.y = 200;

 tails.x = 200;
  }
  if (tails.isTouching(leftEdge)) {
    
 pontos_knukcles++;
  
 tails.x = 200;
 tails.y = 200;
}
if(keyDown("up")) 

sonic.y = sonic.y - 18 ;

if(keyDown("down"))

sonic.y = sonic.y  +18;

if(keyDown("left"))

sonic.x = sonic.x  -10;

if(keyDown("right"))

sonic.x = sonic.x  +10;


   //PROF DUDA: Condição para terminar jogo
   if (pontos_sonic>=10) {
     estado = "final";
   }
   if (pontos_knukcles>=10) {
     estado = "final";
   }

  }
  if (estado == "final") {
  pomni.visible = true;
  tails.velocityX = 0;
  tails.velocityY = 0;
  tails.x = 200;
  tails.y = 200;
  pontos_sonic = 0;
  pontos_knukcles = 0;
  if (mousePressedOver(pomni)) {
    pomni.visible = false;
    estado = "inicio";
  }
  
  }
 
  tails.bounceOff(topEdge);

tails.bounceOff(bottomEdge);

tails.bounceOff(sonic);

tails.bounceOff(knukcles);

knukcles.bounceOff(edges);
 
 












  

  
}
//tem (), tem ação
// rect e elipse são respectivamente quadrados e circulos 
// a function draw realiza comandos
// var = nomes
// Ctrl + ; = // 
// parâmetro = 
//function = ação

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
