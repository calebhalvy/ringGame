
    var canvas = this.document.getElementById("game");
    var ctx = canvas.getContext("2d");

    var width = 800,
	    height = 800;


    // CIRCLE ONE
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.fill();

