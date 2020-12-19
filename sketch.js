var bullet, wall;
var speed, weight, thickness;

function setup(){
    createCanvas(1600, 400);

    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22, 83);
    

    bullet = createSprite(50, 200, 80, 7);
    bullet.shapeColor = "white";

    wall = createSprite(1200, 200, thickness, height/2);

    bullet.velocityX = speed;
}

function draw(){
    background("grey");

    if(bullet.collide(wall)){
        bullet.velocityX = 0;
        var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

            if(damage > 10){
                wall.shapeColor = "red";

            }
            if(damage < 10){
                wall.shapeColor = "lime";

            }

            
    }

    drawSprites();
}