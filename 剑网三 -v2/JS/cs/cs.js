//存游戏列表数据的数组
let gameList_arr = [
    { imgUrl: "../../asstes/cs/15990309686914.jpg", title: "剑侠情缘网络版叁", phone: "028-85309911" },
    { imgUrl: "../../asstes/cs/15396546019063.jpg", title: "剑侠世界-剑世区", phone: "028-85437733-4-1" },
    { imgUrl: "../../asstes/cs/20170527160349.jpg", title: "剑侠世界-绿色区", phone: "028-85437733-4-2" },
    { imgUrl: "../../asstes/cs/jxjd20170224151017.jpg", title: "剑网1经典版", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/15119252413244.jpg", title: "剑网1免费区", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/15119252562797.jpg", title: "剑网1收费区", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/20161121100448.jpg", title: "剑网2新传", phone: "028-85309959" },
    { imgUrl: "../../asstes/cs/15119253142573.jpg", title: "剑网2免费区", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/15119253253163.jpg", title: "剑网2收费区", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/15119253389801.jpg", title: "剑网2外传", phone: "028-85437733-1" },
    { imgUrl: "../../asstes/cs/15119254818228.jpg", title: "反恐行动", phone: "028-85437733-3" },
    { imgUrl: "../../asstes/cs/15119254068734.jpg", title: "封神榜【玄幻】", phone: "028-85437733-2" },
    { imgUrl: "../../asstes/cs/15119254691974.jpg", title: "春秋Q传【Q版】", phone: "028-85437733-5" },
    { imgUrl: "../../asstes/cs/mobile_bg.jpg", title: "剑侠世界2【手游】", phone: null }
]
//仙剑区
let dumaScrollAreaId_Area = document.getElementsByClassName("dumaScrollAreaId_Area")[0];
let dumaScrollAreaId_Areahtml = '';
for (let i = 0; i < 10; i++) {
    console.log(gameList_arr[i].title);
    dumaScrollAreaId_Areahtml += '<p >' + gameList_arr[i].title + '</p>';
}
dumaScrollAreaId_Area.innerHTML = dumaScrollAreaId_Areahtml;

//FPS游戏区域
let dumaScrollAreaId_Area1 = document.getElementsByClassName("dumaScrollAreaId_Area")[1];
let dumaScrollAreaId_Areahtml_1 = '';
for (let i = 10; i < 11; i++) {
    console.log(gameList_arr[i].title);
    dumaScrollAreaId_Areahtml_1 += '<p >' + gameList_arr[i].title + '</p>';
}
dumaScrollAreaId_Area1.innerHTML = dumaScrollAreaId_Areahtml_1;

//玄幻Q版
let dumaScrollAreaId_Area2 = document.getElementsByClassName("dumaScrollAreaId_Area")[2];
let dumaScrollAreaId_Areahtml_2 = '';
for (let i = 11; i < 13; i++) {
    console.log(gameList_arr[i].title);
    dumaScrollAreaId_Areahtml_2 += '<p >' + gameList_arr[i].title + '</p>';
}
dumaScrollAreaId_Area2.innerHTML = dumaScrollAreaId_Areahtml_2;
//手游系列
let dumaScrollAreaId_Area3 = document.getElementsByClassName("dumaScrollAreaId_Area")[3];
let dumaScrollAreaId_Areahtml_3 = '';
for (let i = 13; i < 14; i++) {
    console.log(gameList_arr[i].title);
    dumaScrollAreaId_Areahtml_3 += '<p >' + gameList_arr[i].title + '</p>';
}
// dumaScrollAreaId_Area3.innerHTML=dumaScrollAreaId_Areahtml_3;
function showImg(p) {
    alert(123);
}

//获取所有p元素
let All_p = document.getElementsByTagName("p");
//给P元素添加样式，点击的时候样式改变
function clear_p(index) {
    for (let i = 0; i < All_p.length; i++) {
        All_p[i].className = "";
    }
    All_p[index].className = "cur";
}
let gamelist_zone = document.getElementsByClassName("gamelist_zone")[0];
for (let i = 0; i < All_p.length; i++) {
    All_p[i].onclick = onclick => {
        gamelist_zone.innerHTML = '<img src=' + gameList_arr[i].imgUrl + '>';
        clear_p(i);
        console.log(gamelist_zone.innerHTML = '<img src=' + gameList_arr[i].imgUrl + '>');
    }
}
//点击最后一个盒子，改变图片
let kind_head4 = document.getElementsByClassName("kind_head")[3];
kind_head4.onclick = () => {
    gamelist_zone.innerHTML = '<img src=' + gameList_arr[gameList_arr.length - 1].imgUrl + '>';
}
/*=================获取所有的kind_head元素并添加方法===========================*/
let kind_head = document.getElementsByClassName("kind_head");
let dumascroll = document.getElementsByClassName("dumascroll");
let kind_cont = document.getElementsByClassName("kind_cont");
for (let i = 0; i < kind_head.length - 1; i++) {
    kind_head[i].onclick = () => {
        onclick_handle();
    }
    function onclick_handle() {
        console.log(i);
        showList();
        kind_cont_handle(i);
        switch (i) {
            case 0: document.getElementById("dumaScrollAreaId_Area1").className = "dpblock"; break;
            case 1: document.getElementById("dumaScrollAreaId_Area2").className = "dpblock"; break;
            case 2: document.getElementById("dumaScrollAreaId_Area3").className = "dpblock"; break;
            case 3: document.getElementById("dumaScrollAreaId_Area4").className = "dpblock"; break;
        }
    }
}
function kind_cont_handle(index) {
    for (let i = 0; i < kind_cont.length; i++) {
        kind_cont[i].style.display = "none";
    }
    kind_cont[index].style.display = "block";
}
function showList() {
    document.getElementById("dumaScrollAreaId_Area1").className = "dpnone";
    document.getElementById("dumaScrollAreaId_Area2").className = "dpnone";
    document.getElementById("dumaScrollAreaId_Area3").className = "dpnone";
    document.getElementById("dumaScrollAreaId_Area4").className = "dpnone";
}
// All_p[0].style.color="#ffed8c";
document.getElementById("dumaScrollAreaId_Area1").className = "dpblock";
kind_cont_handle(0);
All_p[0].className = "cur";
