class Particle {
    constructor(x, y, r) { 
    var options ={
     restitution:0.4 
    }
 

    if (frameCount % 60 === 0) {
        particles.push( Particle(random(width/2-10, width/2+10), 10,10)); 
      }

        this.r=r; 
        this.body = Bodies.circle(x, y, this.r,options); 
        this.color=color(random(0, 255), random(0, 255), random(0, 255)); 
        World.add(world, this.body); 


        for (var j = 0; j< particles.length; j++) {

            particles[j].display();
        }
        for (var k = 0; k < divisions.length; k++){
            divisions[k].display();
        }
    }
        display() {
    var pos = this.body.position; 
    var angle = this.body.angle; 
    
    push(); 
    translate (pos.x, pos.y); 
    rotate(angle); 
    //imageMode(CENTER); 
    noStroke();
    fill(this.color)
     ellipseMode(RADIUS); 
    ellipse(0, 0, this.r,this.r); 
    pop(); 
   }


};








