(function() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var backgroundSource = {
        name: "./assets/images/race_background.jpg",
        width: 1024,
        height: 16384
    };

    /** Creates a canvas with `vw` width and `vh` height and appends to the body */
    var App = new PIXI.Application(vw, vh),
        loader = PIXI.loader,
        resouces = PIXI.resources,
        Sprite = PIXI.Sprite; 
    document.body.appendChild(App.view);

    loader
        .add("bg", backgroundSource.name)
        .on("progress", loadProgressHandler)
        .load(setup);

    function setup() {
        var background = new Sprite(PIXI.loader.resources.bg.texture);
        background.x = 0;
        background.y = backgroundSource.height - vh;
        background.width = 1024;
        background.height = 16384;
        App.stage
            .addChild(background);
    };

    function loadProgressHandler(loader) {
        console.log("progress" + loader.progress + "%");
    }
})();
