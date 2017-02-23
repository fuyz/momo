/**
 * Created by zhihe on 2017/2/23.
 */

var j = 2;
var set1 = setInterval(function () {
    $('.newsList li').eq(j).slideDown(1000);
    if(j==2){
        play_sound('./sounds/momo.mp3');
    }else {
        // play_sound('./sounds/mail/.mp3');
    }
    j--;
    if (j == -1) {
        clearInterval(set1);
        changePages();
    }
}, 1000);
function play_sound(url) {
    createjs.Sound.on("fileload", handleLoadComplete);
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src: url, id:"sound"});
    function handleLoadComplete(event) {
        createjs.Sound.play("sound");
    }
}
function changePages() {
    $('.page1').click(function () {
        $(this).css({'display': 'none'});
        $('.page2').css({'display': 'block'});
        animate1();
    })
}
//
function animate1() {
    var animate1_arr = [[3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [4, 1], [3, 1], [2, 1], [1, 1], [5, 3], [4, 3], [2, 3], [1, 3], [4, 2], [4, 2]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set2 = setInterval(function () {
        if (j < animate1_arr.length) {
            row = animate1_arr[j][1];
            col = animate1_arr[j][0];
            console.log(row, col);
            page2.style = 'background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
            j++;
        }
        if (j == animate1_arr.length) {
            clearInterval(set2);
            animate2();
        }

    }, 200)
}

function animate2() {
    var animate2_arr = [[3, 4], [2, 4], [1, 4], [7, 3], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set3 = setInterval(function () {
        if (j < animate2_arr.length) {
            row = animate2_arr[j][1];
            col = animate2_arr[j][0];
            console.log(row, col);
            page2.style = ' background-image:url("animate_img/bingxiang2.jpg");background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
            j++;
        }
        if (j == animate2_arr.length) {
            clearInterval(set3);
            animate3();
        }

    }, 200)
}

function animate3() {
    var animate3_arr = [[2, 4], [1, 4], [7, 3], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set4 = setInterval(function () {
        if (j < animate3_arr.length) {
            row = animate3_arr[j][1];
            col = animate3_arr[j][0];
            console.log(row, col);
            page2.style = ' background-image:url("animate_img/bingxiang3.jpg");background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
            j++;
        }
        if (j == animate3_arr.length) {
            clearInterval(set4);
            //添加圈圈
            $('.page2').append('<div id="sauce"></div><div id="rice"></div><div id="beer"></div>');
            //使圈圈动起来
            var i = 0;
            setInterval(function () {
                i++;
                $('#sauce').attr({'class': 'hint' + i});
                $('#rice').attr({'class': 'hint' + (4 - i)});
                $('#beer').attr({'class': 'hint' + i});
                if (i == 3) {
                    i = 0;
                }
            }, 100);
            //    绑定事件
            $('#sauce').click(sauce_animate_get);
            $('#rice').click(rice_animate_get);
            $('#beer').click(beer_animate_get);

        }
    }, 200)
}
function sauce_animate_get() {
    var animate2_arr = [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set5 = setInterval(function () {
        if (j < animate2_arr.length) {
            row = animate2_arr[j][1];
            col = animate2_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*6)  calc(100%*3); background-image:url("animate_img/sauce.jpg");background-position: calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate2_arr.length) {
            clearInterval(set5);
            $('#sauce').css({'display': 'none'});
            $('#rice').css({'display': 'none'});
            $('#beer').css({'display': 'none'});
            $('.page2').append('<img class="sauce-text" src="./img/sauce-text.png">');
            $('.sauce-text').click(function () {
                sauce_animate_pull();
            })
        }

    }, 200)
}
function sauce_animate_pull() {
    var animate2_arr = [[5, 3], [4, 3], [3, 3], [2, 3], [1, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set6 = setInterval(function () {
        if (j < animate2_arr.length) {
            row = animate2_arr[j][1];
            col = animate2_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*6)  calc(100%*3);  background-image:url("animate_img/sauce.jpg");background-position: calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate2_arr.length) {
            clearInterval(set6);
            $('.sauce-text').css({'display': 'none'});
            // $('#sauce').css({'display': 'none'});
            $('#rice').css({'display': 'block'});
            $('#beer').css({'display': 'block'});
            // animate3();
            // $('.page2').append('<img class="sauce-text" src="../img/sauce-text.png">')
        }

    }, 200)
}

function rice_animate_get() {
    var animate_arr = [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set = setInterval(function () {
        if (j < animate_arr.length) {
            row = animate_arr[j][1];
            col = animate_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*7)  calc(100%*3);  background-image:url("animate_img/rice.jpg");background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate_arr.length) {
            clearInterval(set);
            $('#sauce').css({'display': 'none'});
            $('#rice').css({'display': 'none'});
            $('#beer').css({'display': 'none'});
            $('.page2').append('<img class="sauce-text" src="./img/rice-text.png">');
            $('.sauce-text').click(function () {
                rice_animate_pull();
            })
        }
    },200)
}
function rice_animate_pull() {
    var animate2_arr =  [[6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set = setInterval(function () {
        if (j < animate2_arr.length) {
            row = animate2_arr[j][1];
            col = animate2_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*7)  calc(100%*3);  background-image:url("animate_img/rice.jpg");background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate2_arr.length) {
            clearInterval(set);
            $('.sauce-text').css({'display': 'none'});
            // $('#sauce').css({'display': 'block'});
            // $('#rice').css({'display': 'block'});
            $('#beer').css({'display': 'block'});
        }

    }, 200)
}


function beer_animate_get() {
    var animate_arr = [[5, 2], [4, 2], [3, 2], [2, 2], [1, 2], [4, 1],[3,1]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set = setInterval(function () {
        if (j < animate_arr.length) {
            row = animate_arr[j][1];
            col = animate_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*6)  calc(100%*3);  background-image:url("animate_img/beer.jpg");background-position: calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate_arr.length) {
            clearInterval(set);
            $('#sauce').css({'display': 'none'});
            $('#rice').css({'display': 'none'});
            $('#beer').css({'display': 'none'});
            $('.page2').append('<img class="sauce-text" src="./img/rice-text.png">');
            $('.sauce-text').click(function () {
                beer_animate_pull();
            })
        }
    },200)
}
function beer_animate_pull() {
    var animate_arr = [[3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],[5,2]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set = setInterval(function () {
        if (j < animate_arr.length) {
            row = animate_arr[j][1];
            col = animate_arr[j][0];
            console.log(row, col);
            page2.style = ' background-size: calc(100%*6)  calc(100%*3);  background-image:url("animate_img/beer.jpg");background-position: calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
            j++;
        }
        if (j == animate_arr.length) {
            clearInterval(set);
            $('.sauce-text').css({'display': 'none'});
            // $('#sauce').css({'display': 'block'});
            // $('#rice').css({'display': 'block'});
            // $('#beer').css({'display': 'block'});
            close_bx();
        }
    },200)
}


function close_bx() {
    var animate3_arr = [[2, 4], [1, 4], [7, 3], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3]];
    var row = col = j = 0;
    var page2 = document.querySelector('.page2');
    var set4 = setInterval(function () {
        if (j < animate3_arr.length) {
            row = animate3_arr[j][1];
            col = animate3_arr[j][0];
            console.log(row, col);
            page2.style = ' background-image:url("animate_img/bingxiang3.jpg");background-position: calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
            j++;
        }
        if (j == animate3_arr.length) {
            clearInterval(set4);
        }
    })
}

