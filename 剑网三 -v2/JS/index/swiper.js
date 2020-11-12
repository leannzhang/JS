/*==================================JS代码=========================== */
window.onload = () => {
    /*=========================获取document节点分界线========================================*/
    let pre = document.getElementById("pre");         //获取document节点为pre的元素
    let next = document.getElementById("next");       //获取document节点为next的元素
    let list = document.getElementById("list");       //获取document节点为list的元素
    let dotsList = document.getElementById("dot").getElementsByTagName("span");   //获取document节点为dotsList的元素
    let container = document.getElementById("container");                         //获取document节点为container的元素
    /*=========================定义变量分界线==============================================*/
    let position = 0;                               //定义图片位置变量
    let old_position;                              //定义上一次图片位置变量
    let distance;
    let stopPlay;                                  //定时器函数返回的值，通过这个停止定时器
    /*===========================函数定义分界线=============================================*/
    //鼠标移入触动的事件
    container.onmouseover = () => {
        clearInterval(stopPlay);
    }
    //鼠标移出触动的事件
    container.onmouseleave = () => {
        autoPlay();
    }
    //前一张点击事件触动函数
    pre.onclick = () => {

        position = --position < 0 ? 4 : position;
        // showImg(position);
        let left = parseInt(list.style.left);
        let new_left = (left + 820) > 0 ? -3280 : (left + 820);
        animation(new_left);
    }
    //后一张点击事件触动函数
    next.onclick = () => {

        position = ++position > 4 ? 0 : position;
        // showImg(position);
        let left = parseInt(list.style.left);
        let new_left = (left - 820) < -3280 ? 0 : (left - 820);
        animation(new_left);
    }
    //显示所要显示的图片，并且改变dot背景色
    function showImg(position) {
        list.style.left = -820 * position + "px";
        changeDot();
    }
    //改变dots属性值的函数
    function changeDot() {
        for (let i = 0; i < dotsList.length; i++) {
            if (i == position) {
                dotsList[i].className = "on";
            }
            else {
                dotsList[i].className = "";
            }
        }
    }
    //自动播放图片的函数
    function autoPlay() {
        stopPlay = setInterval(() => {
            next.onclick();
        }, 1500)
    }

    //给dots绑定事件
    for (let i = 0; i < dotsList.length; i++) {

        dotsList[i].onclick = () => {
            position = i;
            showImg(position);
        }
    }
    //动画效果
    function animation(new_left) {
        //进行轮播的时候，当前的元素位置会变。所以要获取当前的元素位置
        let left = parseInt(list.style.left);
        let distance = new_left - left;
        let interval = 10;
        let speed = distance / (1000 / interval);
        function run() {
            left = list.style.left;
            let next_left = left + speed;
            list.style.left = next_left + 'px';
            if (speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
                setTimeout(() => {
                    run();
                }, interval)
            }
            else {
                list.style.left = new_left + 'px';
                changeDot();
            }
        }
        run();
        console.log(left);
    }
    /*==================调用函数分界线===================================*/
    autoPlay();
}