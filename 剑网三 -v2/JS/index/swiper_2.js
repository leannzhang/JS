let next_btn = document.getElementById("next");
let pre_btn = document.getElementById("pre");
let list = document.getElementById("list");
let container = document.getElementById("container");
let dots = document.getElementById("dot").getElementsByTagName("span");
let left = 0;
let auto = null;
let index = 0;                                      // 当前显示图片的下标
let status = false;                                 // 当前轮播图动画是否在执行

// 绑定下一个图片的按钮事件
next_btn.onclick = () => {
    if (status) {
        return false;
    }

    // status = true;
    left = parseInt(list.style.left);      // 现在起点的位置
    let new_left = left - 820;           // 终点的位置

    if (new_left < -3280) {
        new_left = 0;
    }
    console.log(left);
    // list.style.left = new_left+"px";

    index = ++index > 4 ? 0 : index;
    console.log(index);
    // let offset = -1000;
    animate(new_left);
}

// 绑定上一个图片的按钮事件
pre_btn.onclick = () => {
    // 检查当前轮播图是否在执行动画中
    if (status) {
        return false;
    }
    // status = true;

    left = parseInt(list.style.left);      // 现在起点的位置
    let new_left = left + 820;           // 终点的位置

    if (new_left > 0) {
        new_left = -3280;
    }
    console.log(left);
    // list.style.left = new_left+"px";

    index = --index < 0 ? 4 : index;
    console.log(index);
    animate(new_left)
}

// 绑定鼠标移动进轮播图时，自动轮播停止
container.onmouseover = () => {
    clearInterval(auto);
}

// 绑定鼠标移动出轮播图时，自动轮播重新开启
container.onmouseout = () => {
    autoPlay();
}

// 绑定点击焦点图标的事件
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        // alert(dots[i].getAttribute("data-index"))
        if (index == i || status) {
            return false;
        }

        // status = true;      // 把动画执行状态设为true
        let new_index = i;
        new_left = i * -820;

        index = new_index;
        animate(new_left);
    }
}


// 轮播动画的方法
function animate(new_left) {
    // function animate (offset){
    // let int = setInterval(()=>{
    //     left = parseInt(list.style.left);      // 现在起点的位置
    //     let new_left = left-10;           // 终点的位置
    //     list.style.left = new_left+"px";
    //     if(new_left < -1000){
    //         clearInterval(int)
    //     }
    // },10);

    status = true;      // 把动画执行状态设为true
    let left = parseInt(list.style.left);
    // let new_left = left+offset;             // 计算出终点位置
    let offset = new_left - left;           // 总移动距离
    let interval = 10;                      // 速度的单位时间
    let speed = offset / (1000 / interval);    // 在总移动距离下每个单位时间内移动的距离，也就是速度


    function go() {
        left = parseInt(list.style.left);      // 当前位置
        let next_left = left + speed;           // 当前加上速度就是下一个单位时间所在位置
        list.style.left = next_left + "px";

        if (speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
            setTimeout(() => {
                go();
            }, interval)
        } else {
            list.style.left = new_left + "px";        // 由于移动可能会有一部偏差，所以最后时把list的位置强制放到终点上
            changeDot();
            status = false;         // 动画结束，并且把动画状态设置为false
        }
    }

    go();
}

// 自动轮播图片的方法
function autoPlay() {
    auto = setInterval(() => {
        next_btn.onclick();         // 每三秒触发下一个的按钮的事件
    }, 1000);
}

// 检查并显示对应片图焦点图标签的方法
function changeDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = "";
    }
    dots[index].className = "on";
}

autoPlay();