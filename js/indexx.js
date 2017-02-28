/**
 * Created by zhihe on 2017/2/23.
 */
$(function () {

    var j = 2;
    var set1 = setInterval(function () {
        $('.newsList li').eq(j).slideDown(1000);
        if (j == 2) {
            playSound('momo');
        } else {
            playSound('mail');
        }
        j--;
        if (j == -1) {
            clearInterval(set1);
            changePages();
        }
    }, 1000);

    function changePages() {
        $('.page1').append('<img class="up" src="img/up.png">');
        $('.up').click(function () {
            $('.page1').css({'display': 'none'});
            $('.page2').css({'display': 'block'});
            $('.up').css({'display': 'none'});
            animate1();
        })
    }

// close_bx()
    var page2 = document.querySelector('.page2');
//放下手机
    function animate1() {
        playSound('open');
        var animate1_arr = [[3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [4, 1], [3, 1], [2, 1], [1, 1], [5, 3], [4, 3], [2, 3], [1, 3], [4, 2]];
        var row = col = j = 0;
        var set2 = setInterval(function () {
            if (j < animate1_arr.length) {
                row = animate1_arr[j][1];
                col = animate1_arr[j][0];
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
                j++;
            }
            if (j == animate1_arr.length) {
                clearInterval(set2);
                animate2();
            }
        }, 100)
    }

//走向冰箱
    function animate2() {
        var animate2_arr = [[3, 4], [2, 4], [1, 4], [7, 3], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1]];
        var row = col = j = 0;
        var set3 = setInterval(function () {
            if (j < animate2_arr.length) {
                row = animate2_arr[j][1];
                col = animate2_arr[j][0];
                page2.style.backgroundImage = 'url("animate_img/bingxiang2.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
                j++;
            }
            if (j == animate2_arr.length) {
                clearInterval(set3);
                animate3();
            }

        }, 200)
    }

//打开冰箱
    function animate3() {
        var animate3_arr = [[2, 4], [1, 4], [7, 3], [6, 3], [5, 3]];
        var row = col = j = 0;

        var set4 = setInterval(function () {
            if (j < animate3_arr.length) {
                row = animate3_arr[j][1];
                col = animate3_arr[j][0];
                page2.style.backgroundImage = 'url("animate_img/bingxiang3.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
                j++;
            }
            if (j == animate3_arr.length) {
                clearInterval(set4);
                //添加圈圈
                $('.page2').html('<div id="sauce"></div><div id="rice"></div><div id="beer"></div>');
                //使圈圈动起来
                hing_move();
                //    绑定事件
                $('#sauce').click(sauce_animate_get);
                $('#rice').click(rice_animate_get);
                $('#beer').click(beer_animate_get);

            }
        }, 200)
    }

//使圈圈动起来
    var set_hing;

    function hing_move() {
        var i = 0;
        set_hing = setInterval(function () {
            i++;
            $('#sauce').attr({'class': 'hint' + i});
            $('#rice').attr({'class': 'hint' + (4 - i)});
            $('#beer').attr({'class': 'hint' + i});
            // clearInterval(set_hing)
            if (i == 3) {
                i = 0;
            }
        }, 100);
    }

//添加jump不看了按钮
    var has_jump = false;

    function jump_out() {
        $('.page2').append('<div class="jump" ></div>');
        //添加点击事件,关闭冰箱
        $('.jump').click(function () {
            close_bx();
        });
        //动起来
        var i = 0;
        var set_jump = setInterval(function () {
            i++;
            $('.jump').attr({'class': 'jump jump' + i});
            $('.jump').attr({'class': 'jump jump' + (4 - i)});
            $('.jump').attr({'class': 'jump jump' + i});
            // clearInterval(set_jump)
            if (i == 3) {
                i = 0;
            }
        }, 150);
    }

//拿老干妈
    function sauce_animate_get() {
        playSound('get');
        var animate2_arr = [[5, 2], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]];
        var row = col = j = 0;
        //隐藏按钮
        $('#sauce').css({'display': 'none'});
        $('#rice').css({'display': 'none'});
        $('#beer').css({'display': 'none'});
        $('.jump').css({'display': 'none'});

        var set5 = setInterval(function () {
            if (j < animate2_arr.length) {
                row = animate2_arr[j][1];
                col = animate2_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*6) calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/sauce.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate2_arr.length) {
                clearInterval(set5);
                //显示文本
                $('.page2').append('<img class="sauce-text" src="./img/sauce-text.png">');
                $('.sauce-text').click(function () {
                    sauce_animate_pull();
                    //隐藏文本
                    $('.sauce-text').css({'display': 'none'});
                })
            }

        }, 200)
    }

//放老干妈
    function sauce_animate_pull() {
        playSound('put');
        var animate2_arr = [[5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 1]];
        var row = col = j = 0;

        var set6 = setInterval(function () {
            if (j < animate2_arr.length) {
                row = animate2_arr[j][1];
                col = animate2_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*6)  calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/sauce.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate2_arr.length) {
                clearInterval(set6);
                //显示按钮
                $('#sauce').css({'display': 'block'});
                $('#rice').css({'display': 'block'});
                $('#beer').css({'display': 'block'});
                $('.jump').css({'display': 'block'});

                //判断是否有退出按钮，并添加
                if (!has_jump) {
                    jump_out();
                    has_jump = true;
                }
            }

        }, 200)
    }

//拿米饭
    function rice_animate_get() {
        playSound('get');
        var animate_arr = [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3]];
        var row = col = j = 0;
        //隐藏按钮
        $('#sauce').css({'display': 'none'});
        $('#rice').css({'display': 'none'});
        $('#beer').css({'display': 'none'});
        $('.jump').css({'display': 'none'});

        var set = setInterval(function () {
            if (j < animate_arr.length) {
                row = animate_arr[j][1];
                col = animate_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*7)  calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/rice.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate_arr.length) {
                clearInterval(set);
                //显示文本
                $('.page2').append('<img class="sauce-text" src="./img/rice-text.png">');
                $('.sauce-text').click(function () {
                    rice_animate_pull();
                    //隐藏文本
                    $('.sauce-text').css({'display': 'none'});
                })
            }
        }, 200)
    }

//放米饭
    function rice_animate_pull() {
        playSound('put');
        var animate2_arr = [[6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 1]];
        var row = col = j = 0;

        var set = setInterval(function () {
            if (j < animate2_arr.length) {
                row = animate2_arr[j][1];
                col = animate2_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*7)  calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/rice.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate2_arr.length) {
                clearInterval(set);
                //显示按钮
                $('#sauce').css({'display': 'block'});
                $('#rice').css({'display': 'block'});
                $('#beer').css({'display': 'block'});
                $('.jump').css({'display': 'block'});

                //判断是否有退出按钮，并添加
                if (!has_jump) {
                    jump_out();
                    has_jump = true;
                }
            }

        }, 200)
    }

//拿啤酒
    function beer_animate_get() {
        playSound('get');
        var animate_arr = [[5, 2], [4, 2], [3, 2], [2, 2], [1, 2], [4, 1], [3, 1]];
        var row = col = j = 0;
        //隐藏按钮
        $('#sauce').css({'display': 'none'});
        $('#rice').css({'display': 'none'});
        $('#beer').css({'display': 'none'});
        $('.jump').css({'display': 'none'});

        var set = setInterval(function () {
            if (j < animate_arr.length) {
                row = animate_arr[j][1];
                col = animate_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*6)  calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/beer.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate_arr.length) {
                clearInterval(set);
                //显示文本
                $('.page2').append('<img class="sauce-text" src="./img/beer-text.png">');
                $('.sauce-text').click(function () {
                    beer_animate_pull();
                    //隐藏文本
                    $('.sauce-text').css({'display': 'none'});
                })
            }
        }, 200)
    }

//放啤酒
    function beer_animate_pull() {
        playSound('put');
        var animate_arr = [[3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]];
        var row = col = j = 0;

        var set = setInterval(function () {
            if (j < animate_arr.length) {
                row = animate_arr[j][1];
                col = animate_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*6)  calc(100%*3)';
                page2.style.backgroundImage = 'url("animate_img/beer.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (7 - col) + ') calc(100%*' + (4 - row) + ')';
                j++;
            }
            if (j == animate_arr.length) {
                clearInterval(set);
                // 显示按钮
                $('#sauce').css({'display': 'block'});
                $('#rice').css({'display': 'block'});
                $('#beer').css({'display': 'block'});
                $('.jump').css({'display': 'block'});

                //判断是否有退出按钮，并添加
                if (!has_jump) {
                    jump_out();
                    has_jump = true;
                }
            }
        }, 200)
    }

//关冰箱
    function close_bx() {
        playSound('close');
        var animate3_arr = [[5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 2], [4, 2], [3, 2], [2, 2], [1, 2], [4, 1], [3, 1], [2, 1], [1, 1]];
        var row = col = j = 0;
        //停止圈圈动画

        clearInterval(set_hing);
        //隐藏按钮
        $('#sauce').css({'display': 'none'});
        $('#rice').css({'display': 'none'});
        $('#beer').css({'display': 'none'});
        $('.jump').css({'display': 'none'});

        var set4 = setInterval(function () {
            if (j < animate3_arr.length) {
                row = animate3_arr[j][1];
                col = animate3_arr[j][0];
                page2.style.backgroundSize = 'calc(100%*7)  calc(100%*4)';
                page2.style.backgroundImage = 'url("animate_img/bingxiang3.jpg")';
                page2.style.backgroundPosition = 'calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
                j++;
            }
            if (j == animate3_arr.length) {
                clearInterval(set4);
                reChoice()
            }
        }, 200)
    }

//重新选择按钮
    function reChoice() {
        $('.page2').append('<img class="fridge" src="img/fridge-text.png"><div class="choice_btn"></div>');
        $('.choice_btn').click(function () {
            $(this).css("background-image", 'url("./img/choice-close-on.png")');
            setTimeout(function () {
                $('.fridge').remove();
                $('.choice_btn').remove();
                //
                reback_animate()
            }, 500);
        });
    }

//时间倒流
    function reback_animate() {
        playSound('replay');

        //离开冰箱
        var animate2_arr = [[3, 4], [2, 4], [1, 4], [7, 3], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1]];
        //拿起手机
        var animate1_arr = [[3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [4, 1], [3, 1], [2, 1], [1, 1], [5, 3], [4, 3], [2, 3], [1, 3], [4, 2]];
        reback(animate2_arr, 'bingxiang2');

        var isFirst = true;

        function reback(animate_arr, img) {
            var row = col = j = animate_arr.length - 1;
            var set3 = setInterval(function () {
                if (j >= 0) {
                    row = animate_arr[j][1];
                    col = animate_arr[j][0];
                    page2.style.backgroundImage = 'url("animate_img/' + img + '.jpg")';
                    page2.style.backgroundPosition =  'calc(100%*' + (8 - col) + ') calc(100%*' + (5 - row) + ')';
                    j--;
                } else {
                    clearInterval(set3);
                    if (isFirst) {
                        isFirst = false;
                        reback(animate1_arr, 'bingxiang1');
                    } else {
                        $('.page2').css('display', 'none');
                        $('.page1').css('display', 'block');
                        $('.newsList li').eq(2).addClass('move_momo').click(function () {
                            location.href = 'http://192.168.0.104/mainSite/';
                        });
                        playSound('momo');
                    }
                }
            }, 100)
        }

    }


})
