for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     }
      for (var j = 75; j <=width; j=j+50) {
           plinkos.push(new Plinko(j,75));
         }
          for (var j = 50; j <=width-10; j=j+50) {
               plinkos.push(new Plinko(j,175)); 
            }
             for (var j = 75; j <=width; j=j+50) { 
                 plinkos.push(new Plinko(j,275)); 
                }

                for (var j=40; j <=width; j=j+50) 


this.width = width;
this.height = height;