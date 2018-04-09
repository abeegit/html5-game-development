(function() {
	var canvas,
		spriteSheet,
		sprites = [],
		frameRate = 1000 / 30,
		frameCount = 0;
	(assets = [
		"./assets/images/robowalk/robowalk00.png",
		"./assets/images/robowalk/robowalk01.png",
		"./assets/images/robowalk/robowalk02.png",
		"./assets/images/robowalk/robowalk03.png",
		"./assets/images/robowalk/robowalk04.png",
		"./assets/images/robowalk/robowalk05.png",
		"./assets/images/robowalk/robowalk06.png",
		"./assets/images/robowalk/robowalk07.png",
		"./assets/images/robowalk/robowalk08.png",
		"./assets/images/robowalk/robowalk09.png",
		"./assets/images/robowalk/robowalk10.png",
		"./assets/images/robowalk/robowalk11.png",
		"./assets/images/robowalk/robowalk12.png",
		"./assets/images/robowalk/robowalk13.png",
		"./assets/images/robowalk/robowalk14.png",
		"./assets/images/robowalk/robowalk15.png",
		"./assets/images/robowalk/robowalk16.png",
		"./assets/images/robowalk/robowalk17.png",
		"./assets/images/robowalk/robowalk18.png"
	]),
		(frame = 0),
		(frames = [
			{
				filename: "robowalk00.png",
				frame: { x: 0, y: 0, w: 69, h: 68 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 8, y: 6, w: 69, h: 68 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk01.png",
				frame: { x: 0, y: 68, w: 69, h: 68 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 8, y: 6, w: 69, h: 68 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk02.png",
				frame: { x: 0, y: 136, w: 68, h: 69 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 10, y: 7, w: 68, h: 69 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk03.png",
				frame: { x: 0, y: 205, w: 63, h: 73 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 13, y: 8, w: 63, h: 73 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk04.png",
				frame: { x: 63, y: 205, w: 62, h: 73 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 13, y: 9, w: 62, h: 73 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk05.png",
				frame: { x: 0, y: 278, w: 62, h: 71 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 11, y: 11, w: 62, h: 71 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk06.png",
				frame: { x: 62, y: 278, w: 63, h: 69 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 10, y: 12, w: 63, h: 69 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk07.png",
				frame: { x: 0, y: 349, w: 62, h: 67 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 10, y: 12, w: 62, h: 67 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk08.png",
				frame: { x: 62, y: 349, w: 62, h: 64 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 10, y: 12, w: 62, h: 64 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk09.png",
				frame: { x: 0, y: 416, w: 62, h: 66 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 8, y: 9, w: 62, h: 66 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk10.png",
				frame: { x: 62, y: 416, w: 60, h: 67 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 8, y: 8, w: 60, h: 67 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk11.png",
				frame: { x: 0, y: 483, w: 59, h: 72 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 8, y: 7, w: 59, h: 72 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk12.png",
				frame: { x: 59, y: 483, w: 56, h: 74 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 11, y: 6, w: 56, h: 74 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk13.png",
				frame: { x: 0, y: 557, w: 53, h: 79 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 14, y: 1, w: 53, h: 79 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk14.png",
				frame: { x: 53, y: 557, w: 55, h: 80 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 12, y: 0, w: 55, h: 80 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk15.png",
				frame: { x: 0, y: 637, w: 61, h: 76 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 10, y: 0, w: 61, h: 76 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk16.png",
				frame: { x: 61, y: 637, w: 64, h: 72 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 11, y: 2, w: 64, h: 72 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk17.png",
				frame: { x: 0, y: 713, w: 68, h: 69 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 11, y: 2, w: 68, h: 69 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			},
			{
				filename: "robowalk18.png",
				frame: { x: 0, y: 782, w: 69, h: 70 },
				rotated: false,
				trimmed: true,
				spriteSourceSize: { x: 9, y: 2, w: 69, h: 70 },
				sourceSize: { w: 83, h: 83 },
				pivot: { x: 0.5, y: 0.5 }
			}
		]);

	function drawImage() {
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
	}

	function defineSprites() {
		for (var i = 0; i < frames.length; i++) {
            var spriteRaw = frames[i];
            var framesRaw = spriteRaw.frame;
            var cx, cy;
            var trimmed = frames[i].trimmed;

            if ( trimmed ) {
                cx = spriteRaw.spriteSourceSize.x - ( spriteRaw.sourceSize.w * 0.5 );
                cy = spriteRaw.spriteSourceSize.y - ( spriteRaw.sourceSize.h * 0.5 );
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
		setInterval(drawImage, frameRate);
	}

	function setup() {
		canvas = document.getElementById("my-canvas");
		context = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		spriteSheet = new Image();
		spriteSheet.onload = defineSprites;
		spriteSheet.src = "./assets/images/robowalk-sprite.png";
	}

	setup();
})();
