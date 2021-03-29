$("#banner").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});

var arrow = $("#arrow");
arrow.fadeOut();

// 箭頭隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    // console.log("視窗的上方:" + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime);

    // console.log("箭頭要出現的位置：" +  arrowTop);
    // console.log("箭頭特效的時間　：" + arrowTime);

    // 如果 視窗位置 大於等於 箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    // 否則 就 淡出
    else arrow.stop().fadeOut(arrowTimeInt)
});