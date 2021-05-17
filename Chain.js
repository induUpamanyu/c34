class Chain{
    constructor( bodyA , bodyB ){
      var options ={ 
      bodyA:bodyA,
      bodyB:bodyB,
      stiffness:0.5    
    
    }
      
      this.chain =  Constraint.create(options)
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        var pos1 = this.chain.bodyA.position
        var pos2 = this.chain.bodyB.position

        stroke(0);
        strokeWieght(5);
        

        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
  }