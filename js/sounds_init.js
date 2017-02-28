/**
 * Created by zhihe on 2017/2/27.
 */

//初始化
(function init() {
    console.log('init success')
    if (!createjs.Sound.initializeDefaultPlugins()) {
        // document.getElementById("error").style.display = "block";
        // document.getElementById("content").style.display = "none";
        return;
    }

    //examples.showDistractor("content");
    var assetsPath = "./sounds/";
    var sounds = [
        {src: "momo.mp3", id: 1},
        {src: "mail.mp3", id: 2},
        {src: "open.mp3", id: 3},
        {src: "get.mp3", id: 4},
        {src: "put.mp3", id: 5},
        {src: "close.mp3", id: 6},
        {src: "replay.mp3", id: 7}
        //OJR would prefer a new sound rather than a copy
    ];

    createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
    createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
    createjs.Sound.registerSounds(sounds, assetsPath);
})();

function soundLoaded(event) {
    console.info(event);
    console.log('soundLoaded......');
}

function playSound(type) {
    var id;
    switch (type){
        case 'momo':
            id = 1;
            break;
        case 'mail':
            id = 2;
            break;
        case 'open':
            id = 3;
            break;
        case 'get':
            id = 4;
            break;
        case 'put':
            id = 5;
            break;
        case 'close':
            id = 6;
            break;
        case 'replay':
            id = 7;
            break;
        default:
            console.log('err');
            break;

    }

    //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
    var instance = createjs.Sound.play(id);
    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
        return;
    }
    instance.addEventListener("complete", function (instance) {
        console.log(instance)
    });
}

