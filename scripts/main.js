(function() {
    var canvas,
        ctx,
		spriteSheet,
        sprites = [],
        fps = 60,
		step = 1/fps,
        frameCount = 0,
        background;

    /* Polyfills for requestAnimationFrame */
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    }

    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    background = new Image();
    background.onload = function() { Game.render() };
    background.src = "./assets/images/race_background.jpg";

    var Util = {
        timestamp: function() { return new Date().getTime() }
    };

    var Game = {
        render() {
            ctx.drawImage(background, 0, 19882 - canvas.height, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
            setTimeout(Game.run, 2000);
        },
        run: function(options) {
            console.log("running");
            var vx = 0;
            function moveBike() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(background, 0, 19882 - (canvas.height + vx), canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                requestAnimationFrame(moveBike);
            };
            requestAnimationFrame(moveBike);
        },
        moveBike() {

        }
    };

	function drawImage() {
        // var 
		context.clearRect(0, 0, canvas.width, canvas.height);
		var dimensions = sprites[frame % frames.length];
		context.drawImage(
			spriteSheet,
			dimensions.x,
			dimensions.y,
			dimensions.w,
			dimensions.h,
			60 + dimensions.cx,
			80 + dimensions.cy,
			dimensions.w,
			dimensions.h
		);
        frame++;
        requestAnimationFrame(drawImage);
	}

	function defineSprites() {
		for (var i = 0; i < frames.length; i++) {
			var spriteRaw = frames[i];
			var framesRaw = spriteRaw.frame;
			var cx, cy;
			var trimmed = frames[i].trimmed;

			if (trimmed) {
				cx =
					spriteRaw.spriteSourceSize.x - spriteRaw.sourceSize.w * 0.5;
				cy =
					spriteRaw.spriteSourceSize.y - spriteRaw.sourceSize.h * 0.5;
			} else {
				cx = -spriteRaw.w * 0.5;
				cy = -spriteRaw.h * 0.5;
			}

			var sprite = {
				name: spriteRaw.filename,
				x: framesRaw.x,
				y: framesRaw.y,
				w: framesRaw.w,
				h: framesRaw.h,
				cx: cx,
				cy: cy
			};
			sprites.push(sprite);
		}
		animate();
	}

	function animate() {
		requestAnimationFrame(drawImage);
    }
    
    //Game.render();
})();
