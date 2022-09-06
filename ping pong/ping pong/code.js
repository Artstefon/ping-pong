var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b86b2769-133f-4534-ac83-9e6bcacd75a3","7948bff8-8a9f-43f3-85f1-7a0d9710574e","2e17f1cf-5c31-4a68-95cf-14b13c14acc9","d264ac0f-3fd0-47b9-9cbe-c2224bda5dcd","8a14a079-185a-4d6a-b4b4-a79135dc72b7","9049f48f-6a2b-4986-876b-f7ebf89cb3c4"],"propsByKey":{"b86b2769-133f-4534-ac83-9e6bcacd75a3":{"name":"nave jugador","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"XEOwRpNm_zazwASJShSazJjzL9G2L3qz","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/b86b2769-133f-4534-ac83-9e6bcacd75a3.png"},"7948bff8-8a9f-43f3-85f1-7a0d9710574e":{"name":"nave maquina","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":3,"looping":true,"frameDelay":12,"version":"Z.eiB7wFeD_DM7imA61TJD81bQunr6cE","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":760,"y":796},"rootRelativePath":"assets/7948bff8-8a9f-43f3-85f1-7a0d9710574e.png"},"2e17f1cf-5c31-4a68-95cf-14b13c14acc9":{"name":"alien","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"5Z2htZUNmkzGQEHWHKKAMlW4mfyFixPN","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":730},"rootRelativePath":"assets/2e17f1cf-5c31-4a68-95cf-14b13c14acc9.png"},"d264ac0f-3fd0-47b9-9cbe-c2224bda5dcd":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"8a14a079-185a-4d6a-b4b4-a79135dc72b7":{"name":"nave jugador arriba","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"EB0ZGHuFnAGjKwlkDR5mjuWUvUMz6SaR","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/8a14a079-185a-4d6a-b4b4-a79135dc72b7.png"},"9049f48f-6a2b-4986-876b-f7ebf89cb3c4":{"name":"nave jugador abajo","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"MrDLrKHc_sREa_SXms7m65poPIheOGJd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/9049f48f-6a2b-4986-876b-f7ebf89cb3c4.png"}}};
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

var fondo = createSprite(200, 200);
fondo.setAnimation("space");
var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
ball.setAnimation("alien");
ball.scale = 0.15;
playerPaddle.setAnimation("nave jugador");
playerPaddle.scale = 0.28;
computerPaddle.setAnimation("nave maquina");
computerPaddle.scale = 0.25;
var num;

function draw() {
  background(220);
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=2;
     ball.velocityY=5;
  } 
  //no
  computerPaddle.y=ball.y;

    
  //creando una línea.
  // line(200,0,       200, 10)
  // line(200,0+20,    200, 0+10+20)
  // line(200,0+20+20 ,200, 0+10+20+20)

lineas();
  createEdgeSprites();
  if (ball.bounceOff(topEdge) || ball.bounceOff(bottomEdge)) {
    playSound("assets/category_hits/retro_game_hit_block_4.mp3", false);
  }
  if (ball.bounceOff(computerPaddle) || ball.bounceOff(playerPaddle)) {
    playSound("assets/category_hits/retro_game_weapon_-_gauntlet_punch_1.mp3", false);
  }
  if (keyDown("up")) {
    playerPaddle.setAnimation("nave jugador arriba");
  }
  if (keyWentUp("up") || keyWentUp("down")) {
    playerPaddle.setAnimation("nave jugador");
  }
  if (keyDown("down")) {
    playerPaddle.setAnimation("nave jugador abajo");
  }
    
  
  
  drawSprites();
    textSize(30);    
   text("are you redy?", 120, 100);
        textSize(30);
    text("press space",120,130);
}
function lineas(){
  for (num = 0; num < 400; num= num +20) {
     line(200, num, 200, num+10);}
  
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
