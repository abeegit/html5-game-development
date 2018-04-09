(function() {
    var canvas,
        frameRate = (1000 / 60),
        frameCount = 0;
        assets = [
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
        ],
        frame = 0,
        frames = [];

    function drawImage() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(frames[frame % frames.length], 20, 20);
        frame++;
    }

    function setup() {
        canvas = document.getElementById("my-canvas");
        context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for ( var i = 0; i < assets.length; i++ ) {
            var image = new Image();
            image.onload = function(event) { 
                frameCount++;

                if ( (frameCount + 1) === assets.length ) {
                    console.log(frames);
                    setInterval(drawImage, frameRate);
                }
            };
            image.src = assets[i];
            frames.push(image);
        }

    }

    setup();
})();