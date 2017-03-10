/**
 * Created by Administrator on 2017/1/26.
 */

window.onload = function () {
    search();
    secondKill();
    scrollBanner();
};


/**
 * 头部搜索
 */
var search = function () {
//    搜索对象
    var search = document.getElementsByClassName('jd-header-box')[0];
//    banner  对象
    var banner = document.getElementsByClassName('jd-banner')[0];
//    banner 高度
    var height = banner.offsetHeight;
    window.onscroll = function () {
        //获取 滚动的高度
        var top = document.body.scrollTop;
        if(top > height){
            search.style.background = "rgba(201,21,35,0.85)";
        }else{
            var opacity = top/height * 0.85;
            search.style.background = "rgba(201,21,35,"+opacity+")";
        }
    }

}

/**
 * 秒杀倒计时
 */
var secondKill = function () {
    //父盒子
    var prentTime = document.getElementsByClassName('sk-time')[0];
    //span 时间
    var timeList = prentTime.getElementsByClassName('num');
    var times = 5 * 60 * 60;
    var timer;
    timer = setInterval(function () {
        times--;
        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = Math.floor(times%60);

        //时
        timeList[0].innerHTML = h > 10 ? Math.floor(h / 10) : 0;
        timeList[1].innerHTML = h % 10;
        //分
        timeList[2].innerHTML = m > 10 ? Math.floor(m / 10) : 0;
        timeList[3].innerHTML = m % 10;
        //秒
        timeList[4].innerHTML = s > 10 ? Math.floor(s / 10) : 0;
        timeList[5].innerHTML = s % 10;

        if(times <= 0){
            clearInterval(timer);
        }
    },1000);
}

/**
 * 轮播图
 */
var scrollBanner = function () {
    //banner 元素
    var banner = document.getElementsByClassName('jd-banner')[0];
    //获取装图片的盒子
    var imgBox = banner.getElementsByTagName('ul')[0];
    //获取圆点
    var pointBox = banner.getElementsByTagName('ul')[1];
    //获取圆点数组
    var pointList = pointBox.getElementsByTagName('li');

    //图片宽度
    var width = banner.offsetWidth;
    //图片索引号
    var index = 1;
    var timer;

    //添加过渡
    var addTransition = function () {
        console.log("过渡")
        imgBox.style.transition = "all 0.3s ease 0s";
        imgBox.style.webkitTransition = "all 0.3s ease 0s";
    }

    //删除过渡
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }

    //改变位置
    var setTransform = function (distance) {
        imgBox.style.transform = 'translateX('+distance+'px)';
        imgBox.style.webkitTransform = 'translateX('+distance+'px)';
    }

    timer = setInterval(function () {
        index++;
        addTransition();
        setTransform(-index * width);
    },1000);


    //第三个参数是从里面往外面冒泡
    //transitionEnd:过渡完成后的事件
    imgBox.addEventListener('TransitionEnd', function () {
        console.log("niahaodsfasdfasdfsaf")
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        console.log("asjdfasdfsadfasdfas");

        removeTransition();
        setTransform(-index * width);
    },false);

    imgBox.addEventListener('webkitTransitionEnd', function () {
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        console.log("asjdfasdfsadfasdfas");
        removeTransition();
        setTransform(-index * width);
    },false);
    
    
    
    //触摸滑动事件
    //imgBox.addEventListener('touchmove', function (e) {
    //    clearInterval(timer);
    //    //清除默认的滚动事件
    //    e.preventDefault();
    //    console.log('move');
    //
    //    //记录结束的位置
    //    endX = e.touches[0].clientX;
    //    //记录移动的距离
    //    moveX = startX - endX;
    //});
}