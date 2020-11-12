
/*===============================================首页到热门活动板块====================================================*/
let cn_navul = ""
let h_ul = "";
let swiper_html = '';
let active_list_html = '';
let active_list = [
    { imgUrl: "../../asstes/index/20200929103456598.png", title: "预约活动开启", time: "09-29" },
    { imgUrl: "../../asstes/index/20200929101656516.png", title: "赛季末加速", time: "09-29" },
    { imgUrl: "../../asstes/index/20200917023604355.png", title: "中秋盛典开幕", time: "09-17" },
    { imgUrl: "../../asstes/index/20200904011844728.png", title: "JPL职业联赛", time: "09-04" }
]
let cn_nav = [
    { title: "官网首页", url: "#" },
    { title: "游戏特色", url: "#" },
    { title: "新闻/活动", url: "#" },
    { title: "视频/直播", url: "#" },
    { title: "同人站", url: "#" },
    { title: "下载游戏", url: "#" },
    { title: "剑网3推栏", url: "#" },
    { title: "玲珑密保锁", url: "#" },
    { title: "万宝楼", url: "#" },
    { title: "论坛", url: "#" },
    { title: "客服", url: "#" }
]
let h_nav = [
    { title: "登录", url: "login.html" },
    { title: "注册", url: "login.html" },
    { title: "充值", url: "login.html" },
    { title: "老玩家回归指南", url: "login.html" },
    { title: "客服", url: "../Customer_service/cs.html" },
    { title: "增值服务", url: "../increase_service/signin.html" },
]
let swiper_arr = [
    { title: "校服同人征集", src: "../../Img/index/lunbo/1.jpg" },
    { title: "校服同人征集", src: "../../Img/index/lunbo/1.jpg" },
    { title: "衍天宗门派揭秘", src: "../../Img/index/lunbo/2.jpg" },
    { title: "国庆、中秋快乐", src: "../../Img/index/lunbo/3.jpg" },
    { title: "剧情品鉴问答", src: "../../Img/index/lunbo/4.jpg" },
    { title: "全民预约", src: "../../Img/index/lunbo/5.jpg" },
    { title: "校服同人征集", src: "../../Img/index/lunbo/1.jpg" },
]
// let cn_nav_arr=[
// ];
for (let i = 0; i < h_nav.length; i++) {
    h_ul += '<li>' + '<a href=' + h_nav[i].url + '>' + h_nav[i].title + '</a>' + '</li>';
}
for (let i = 0; i < cn_nav.length; i++) {
    if (i == 1 || i == 2 || i == 3 || i == 6 || i == 7 || i == 10) {
        cn_navul += '<li class="show_arr">' + '<a href=' + cn_nav[i].url + '>' + cn_nav[i].title + '</a>';
        cn_navul += '<div class="cn_nav_arr">';
        if (i == 1) {
            cn_navul += '<p>' + "国风大世界" + '</p>';
            cn_navul += '<p>' + "门派" + '</p>';
            cn_navul += '<p>' + "轻功" + '</p>';
            cn_navul += '<p>' + "玩法" + '</p>';
            cn_navul += '<p>' + "圈子" + '</p>';
        }
        else if (i == 2) {
            cn_navul += '<p>' + "最新" + '</p>';
            cn_navul += '<p>' + "活动" + '</p>';
            cn_navul += '<p>' + "新闻" + '</p>';
            cn_navul += '<p>' + "公告" + '</p>';
        }
        else if (i == 3) {
            cn_navul += '<p>' + "推荐" + '</p>';
            cn_navul += '<p>' + "剧情" + '</p>';
            cn_navul += '<p>' + "赛事" + '</p>';
            cn_navul += '<p>' + "研发小剧场" + '</p>';
            cn_navul += '<p>' + "精彩直播" + '</p>';
        }
        else if (i == 6) {
            cn_navul += '<p>' + "随时随地" + '</p>';
            cn_navul += '<p>' + "密聊亲友" + '</p>';
            cn_navul += '<img src="../../asstes/index/jh_d_qr.jpg">';
        }
        else if (i == 7) {
            cn_navul += '<p>' + "随时随地守护" + '</p>';
            cn_navul += '<p>' + "您的账号安全" + '</p>';
            cn_navul += '<img src="../../asstes/index/ll_qrcode.jpg">';
        }
        else {
            cn_navul += '<p>' + "客服中心" + '</p>';
            cn_navul += '<p>' + "在线客服" + '</p>';
            cn_navul += '<p>' + "客服热线" + '</p>';
            cn_navul += '<p>' + "客服微信" + '</p>';
        }

        cn_navul += '</div>';
        cn_navul += '</li>';
    }
    else {
        cn_navul += '<li>' + '<a href=' + cn_nav[i].url + '>' + cn_nav[i].title + '</a>' + '</li>';
    }

}
/* 轮播图板块 */
// let cn_bglflag_html='';
// for (let i = 0; i < swiper_arr.length; i++) {
//     cn_bglflag_html +='<li class="swiper_li" value='+i+'>';
//     cn_bglflag_html += swiper_arr[i].title;
//     cn_bglflag_html +=  '</li>';
// }
// for (let i = 0; i < swiper_arr.length; i++) {
//     swiper_html +=  '<li>';
//     swiper_html +=  '<img src=' + swiper_arr[i].src +  '>';
//     swiper_html +=  '</li>';
// }
// swiper_html+= '<div class="pre_img">'+"<"+'</div>';
// swiper_html+= '<div class="next_img">'+">"+'</div>';
// document.getElementsByClassName("cn_bglflag")[0].innerHTML=cn_bglflag_html;
for (let i = 0; i < active_list.length; i++) {
    active_list_html += '<li class="al_box">';
    active_list_html += '<div class="img_box">';
    active_list_html += '<img src=' + active_list[i].imgUrl + '>';
    active_list_html += '</div>';
    active_list_html += '<h6>' + active_list[i].title + '</h6>'
    active_list_html += '<span>' + active_list[i].time + '</span>'
    active_list_html += '</li>';
}
/*===新闻板块===*/
let news_tab_bar = document.getElementsByClassName("news_tab_bar")[0].getElementsByTagName("li");
let newList = {
    title: "《剑网3》新资料片预约活动开启",
    data: [
        { tip: "【新闻】", title: "《剑网3》110级校服“星演”套放送第四弹", time: "10-07" },
        { tip: "【新闻】", title: "《剑网3》110级校服“星演”套放送第三弹", time: "10-06" },
        { tip: "【新闻】", title: "《剑网3》110级校服“星演”套放送第二弹", time: "10-05" },
        { tip: "【活动】", title: "《剑网3》新资料片“奉天证道”预约活动开启", time: "09-28" },
        { tip: "【公告】", title: "10月5日1.0.0.3954版本更新内容公告", time: "10-05" }
    ]
}
let newsList = {
    title: "《剑网3》中秋活动经典回归",
    data: [
        { tip: "【新闻】", title: "全新阵营日常揭晓 《剑网3》“奉天证道”四轮测试将至 ", time: "10-07" },
        { tip: "【新闻】", title: "那个男人回来了 《剑网3·侠肝义胆沈剑心之长漂》OP首曝  ", time: "10-06" },
        { tip: "【新闻】", title: "旷世神兵横空出世 《剑网3》110级大橙武曝光 ", time: "10-05" },
        { tip: "【新闻】", title: "《剑网3》110级校服“星演”套全门派放送", time: "09-28" },
        { tip: "【新闻】", title: "两万名测试资格今日发放 《剑网3》“星演”套放送第五弹", time: "10-05" }
    ]
}
let news_tab_info = '<h2>' + newList.title + '</h2>';
let news_tab_info2 = '<h2>' + newsList.title + '</h2>';

for (let i = 0; i < newList.data.length; i++) {
    news_tab_info += '<li>';
    news_tab_info += '<span>' + newList.data[i].tip + '</span>';
    news_tab_info += '<a href=' + '#>' + newList.data[i].title + '</a>';
    news_tab_info += '<span>' + newList.data[i].time + '</span>';
    news_tab_info += '</li>';
}
for (let i = 0; i < newsList.data.length; i++) {
    news_tab_info2 += '<li>';
    news_tab_info2 += '<span>' + newsList.data[i].tip + '</span>';
    news_tab_info2 += '<a href=' + '#>' + newsList.data[i].title + '</a>';
    news_tab_info2 += '<span>' + newsList.data[i].time + '</span>';
    news_tab_info2 += '</li>';
}
document.getElementsByClassName("news_tab_info")[0].innerHTML = news_tab_info;
for (let i = 0; i < news_tab_bar.length; i++) {
    news_tab_bar[i].className = "active";
    news_tab_bar[i].onclick = changeTab => {
        switch (i) {
            case 0:
                //alert("最新"); 
                document.getElementsByClassName("news_tab_info")[0].innerHTML = news_tab_info;
                break;
            case 1:
                //alert("新闻"); 
                document.getElementsByClassName("news_tab_info")[0].innerHTML = news_tab_info2;
                break;
            case 2: alert("活动"); break;
            case 3: alert("公告"); break;
        }
    };
}

/*===精彩视频板块=== */



document.getElementsByTagName("ul")[0].innerHTML = h_ul;
document.getElementsByClassName("cn_navul")[0].innerHTML = cn_navul;
// document.getElementsByClassName("cn_bgleft")[0].innerHTML=swiper_html;
document.getElementsByClassName("active_list")[0].innerHTML = active_list_html;


/*============================================================================== */

/*===视频播放按钮=== */
let index_video_btn = document.getElementsByClassName("index_video_btn")[0];
let index_video = document.getElementsByClassName("index_video")[0];
function playvideo() {
    document.getElementsByClassName("index_video")[0].style.display = "block";
    // document.getElementsByClassName("cn_bgabove").getElementsByTagName("img")[0].style.display="block";
    document.getElementsByClassName("cn_bgimg")[0].style.display = "block";
}
function videoclose() {
    document.getElementsByClassName("index_video")[0].style.display = "none";
    document.getElementsByClassName("cn_bgimg")[0].style.display = "none";
    document.getElementsByClassName("index_video")[0].getElementsByTagName("video")[0].pause();

    // document.getElementsByClassName("cn_bgabove").getElementsByTagName("img")[0].style.display="none";
}

let show_arr = document.getElementsByClassName("show_arr");
for (let i = 0; i < show_arr.length; i++) {
    show_arr[i].onclick = () => {
        cn_navul.zIndex = "13";
    }
}

/*精彩视频板块*/
let hotList_arr = [
    { imgUrl: "../../asstes/index/hot_video/20200915024040424.png", title: "剑网3九月主题大片《人间入味清风调》" },
    { imgUrl: "../../asstes/index/hot_video/20200903050936951.png", title: "剑网3第十六个门派登场！新门派衍天宗概念CG" },
    { imgUrl: "../../asstes/index/hot_video/20200903041532301.png", title: "《剑网3》十一周年纪念视频山海相逢" },
    { imgUrl: "../../asstes/index/hot_video/20200821073505298.png", title: "鲛人上岸！剑网3八月剧情视频《沧澜·沉歌》" },
    { imgUrl: "../../asstes/index/hot_video/20200722021520170.png", title: "拜托了！蝴蝶仙男！" },
    { imgUrl: "../../asstes/index/hot_video/20200717024755603.png", title: "夏日庆典豪礼不断！剑网3七月剧情大片《落子成花》上映" },
    { imgUrl: "../../asstes/index/hot_video/20200617110238567.png", title: "《少年有梦》热映" },
    { imgUrl: "../../asstes/index/hot_video/20200529104753827.png", title: "剑网3儿童节趣味礼盒上架 俏子鼠跟宠萌动童心" },
    { imgUrl: "../../asstes/index/hot_video/20200915024040424.png", title: "剑网3九月主题大片《人间入味清风调》" },
    { imgUrl: "../../asstes/index/hot_video/20200903050936951.png", title: "剑网3第十六个门派登场！新门派衍天宗概念CG" },
    { imgUrl: "../../asstes/index/hot_video/20200903041532301.png", title: "《剑网3》十一周年纪念视频山海相逢" },
    { imgUrl: "../../asstes/index/hot_video/20200821073505298.png", title: "鲛人上岸！剑网3八月剧情视频《沧澜·沉歌》" },
    { imgUrl: "../../asstes/index/hot_video/20200722021520170.png", title: "拜托了！蝴蝶仙男！" },
    { imgUrl: "../../asstes/index/hot_video/20200717024755603.png", title: "夏日庆典豪礼不断！剑网3七月剧情大片《落子成花》上映" },
    { imgUrl: "../../asstes/index/hot_video/20200617110238567.png", title: "《少年有梦》热映" },
    { imgUrl: "../../asstes/index/hot_video/20200529104814392.png", title: "剑网3儿童节趣味礼盒上架 俏子鼠跟宠萌动童心" },
    { imgUrl: "../../asstes/index/hot_video/20200324024105708.png", title: "第五届《剑网3》大师赛战歌燃情开唱 同名MV首映" },
    { imgUrl: "../../asstes/index/hot_video/20200324024706959.jpg", title: "《剑网3》第五届竞技大师赛先导节目-大师情报站" },
    { imgUrl: "../../asstes/index/hot_video/20200324024914942.png", title: "《剑网3》俱乐部争锋赛-每日TOP天秀时刻（3.18-3.19）" },
    { imgUrl: "../../asstes/index/hot_video/20200324025601371.png", title: "《剑网3》俱乐部争锋赛-每日TOP天秀时刻（3.16-3.17）" },
    { imgUrl: "../../asstes/index/hot_video/20200324025747161.png", title: "《剑网3》俱乐部争锋赛-每日TOP天秀时刻（3.14-3.15）" },
    { imgUrl: "../../asstes/index/hot_video/20200324025857803.png", title: "《剑网3》俱乐部争锋赛-每日TOP天秀时刻（3.12-3.13）" },
    { imgUrl: "../../asstes/index/hot_video/20200324030013771.png", title: "《剑网3》俱乐部争锋赛-每日TOP天秀时刻（3.10-3.11）" },
    { imgUrl: "../../asstes/index/hot_video/20200324030134539.jpg", title: "少年狂想录-第五届《剑网3》大师赛战歌预告片曝光" },
    { imgUrl: "../../asstes/index/hot_video/20200323045950363.png", title: "疫情期间在家办公和老板视频会议究竟有多难？" },
    { imgUrl: "../../asstes/index/hot_video/20181130112813318.jpg", title: "剑网3， 听见江湖的声音" },
    { imgUrl: "../../asstes/index/hot_video/20181126080921597.jpg", title: "《剑网3》逗比艺术家合集" },
    { imgUrl: "../../asstes/index/hot_video/20181126080842480.jpg", title: "正经游戏公司就是这么耿直！剑网3发年终奖啦" },
    { imgUrl: "../../asstes/index/hot_video/20181126080801418.jpg", title: "剑网3逗比艺术家<(￣ˇ￣)/正经游戏公司打副本" },
    { imgUrl: "../../asstes/index/hot_video/20181126080714336.jpg", title: "震惊！《剑网3》老板竟逼迫员工做这种事......" },
    { imgUrl: "../../asstes/index/hot_video/20181126080622475.jpg", title: "《剑网3》逗比艺术家4首映，你不笑算我输" },
    { imgUrl: "../../asstes/index/hot_video/20181126080542402.jpg", title: "剑网3逗比艺术家《大师的足迹》" }
]
// //推荐
// let hotList = document.getElementsByClassName("hotvideo_list")[0];
// let hotList_html = '';
// for (let i = 0; i < 8; i++) {
//     hotList_html += '<li>';
//     hotList_html += '<div class="htl_li">';
//     hotList_html += '<div class="video_img_box">';
//     hotList_html += '<img src=' + hotList_arr[i].imgUrl + '>';
//     hotList_html += '</div>';
//     hotList_html += '<div class="video_text">'+hotList_arr[i].title+'</div>'
//     hotList_html += '</li>';

// }
// hotList.innerHTML=hotList_html;
// //剧情
// let juqList = document.getElementsByClassName("juq")[0];
// let juqList_html = '';
// for (let i = 8; i < 16; i++) {
//     juqList_html += '<li>';
//     juqList_html += '<div class="htl_li">';
//     juqList_html += '<div class="video_img_box">';
//     juqList_html += '<img src=' + hotList_arr[i].imgUrl + '>';
//     juqList_html += '</div>';
//     juqList_html += '<div class="video_text">'+hotList_arr[i].title+'</div>'
//     juqList_html += '</li>';
// }
// // hotList.innerHTML=juqList_html;
// //赛事
// let saishiList = document.getElementsByClassName("saishi")[0];
// let saishiList_html = '';
// for (let i = 16; i < 24; i++) {
//     saishiList_html += '<li>';
//     saishiList_html += '<div class="htl_li">';
//     saishiList_html += '<div class="video_img_box">';
//     saishiList_html += '<img src=' + hotList_arr[i].imgUrl + '>';
//     saishiList_html += '</div>';
//     saishiList_html += '<div class="video_text">'+hotList_arr[i].title+'</div>'
//     saishiList_html += '</li>';
// }
// // hotList.innerHTML=saishiList_html;

// //研发小剧场
// let yanfaList = document.getElementsByClassName("yanfa")[0];
// let yanfaList_html = '';
// for (let i = 24; i < 32; i++) {
//     yanfaList_html += '<li>';
//     yanfaList_html += '<div class="htl_li">';
//     yanfaList_html += '<div class="video_img_box">';
//     yanfaList_html += '<img src=' + hotList_arr[i].imgUrl + '>';
//     yanfaList_html += '</div>';
//     yanfaList_html += '<div class="video_text">'+hotList_arr[i].title+'</div>'
//     yanfaList_html += '</li>';
// }
// // hotList.innerHTML=yanfaList_html;
// //获取video_tab_bar
// let video_tab_bar=document.getElementsByClassName("video_tab_bar")[0].getElementsByTagName("li");
// for(let i=0;i<video_tab_bar.length;i++)
// {
//     video_tab_bar[i].onclick=()=>{
//         // alert(i);
//         switch(i){
//             case 0:hotList.innerHTML=hotList_html;break;
//             case 1:hotList.innerHTML=juqList_html;break;
//             case 2:hotList.innerHTML=saishiList_html;break;
//             case 3:hotList.innerHTML=yanfaList_html;break;
//         }
//     }
// }

//关于精彩视频板块事件处理优化
let hotList = document.getElementsByClassName("hotvideo_list")[0];
let video_tab_bar = document.getElementsByClassName("video_tab_bar")[0].getElementsByTagName("li");
let hotList_html = '';
let hot_head = 0;
let hot_rear = 8;
function video_tab_bar_handle() {
    hotList_html = '';
    for (let i = hot_head; i < hot_rear; i++) {
        hotList_html += '<li>';
        hotList_html += '<div class="htl_li">';
        hotList_html += '<div class="video_img_box">';
        hotList_html += '<img src=' + hotList_arr[i].imgUrl + '>';
        hotList_html += '</div>';
        hotList_html += '<div class="video_text">' + hotList_arr[i].title + '</div>'
        hotList_html += '</li>';
    }
    hotList.innerHTML = hotList_html;
}

for (let i = 0; i < video_tab_bar.length; i++) {
    video_tab_bar[i].onclick = () => {
        switch (i) {
            case 0: hot_head = 0; hot_rear = 8; break;
            case 1: hot_head = 8; hot_rear = 16; break;
            case 2: hot_head = 16; hot_rear = 24;; break;
            case 3: hot_head = 24; hot_rear = 32;; break;
        }
        video_tab_bar_handle();
    }
}
video_tab_bar_handle();
/*=============================================================同人作品板块=================================================== */
let tr_arr = [
    { imgUrl: "../../asstes/index/tongren/thumb_f72a0994b8512b70631c86d973793890.jpg", title: "感染者", auth: "二花-HAIMA" },
    { imgUrl: "../../asstes/index/tongren/thumb_47dafeca12ef824ea2e0e63eec57b051.jpg", title: "逆生", auth: "田螺打奶组" },
    { imgUrl: "../../asstes/index/tongren/thumb_a4df7b65dc7eb9e8d2440aa79f1d5463.jpg", title: "Youth of JW3", auth: "千凝垚垚酱" },
    { imgUrl: "../../asstes/index/tongren/thumb_595cf20e66632c2a7f3fa735013202e4.jpg", title: "青山如梦", auth: "思堂" },
    { imgUrl: "../../asstes/index/tongren/thumb_1a44566c813ee43bc01816312345b2a1.jpg", title: "毒姐", auth: "大葱君" },
    { imgUrl: "../../asstes/index/tongren/thumb_4a5375e73924348536ce595dd5e92180.jpg", title: "往事一杯酒", auth: "异新音乐工作室" },
    { imgUrl: "../../asstes/index/tongren/thumb_48e9cb5f57895e249e056eebe89489ed.jpg", title: "有莲", auth: "辰小弦" },
    { imgUrl: "../../asstes/index/tongren/thumb_7d759d3485b6ff064b1605ddf85f3b36.jpg", title: "把酒问春", auth: "H6音乐" },
    { imgUrl: "../../asstes/index/tongren/thumb_cca98bb9697d83717739e9210fb59649.jpg", title: "蓬蒿行", auth: "此间不语制作组" },
    { imgUrl: "../../asstes/index/tongren/thumb_c9dd093e231d75bf17a7664e15de5b7e.jpg", title: "幽月流光", auth: "华夜音乐工作室" },
    { imgUrl: "../../asstes/index/tongren/thumb_dd8f544c5ee4cdf6fde76fa80376121b.jpg", title: "玩伴", auth: "戈桉木" },
    { imgUrl: "../../asstes/index/tongren/thumb_da6a40e5b2117edca4cec030254e38b5.jpg", title: "全门派方言招生宣传片", auth: "紫倾儿" },
    { imgUrl: "../../asstes/index/tongren/thumb_6e46e0e9c7d7799712f6bc01eadd2131.jpg", title: "岁虹", auth: "四格呀格" },
    { imgUrl: "../../asstes/index/tongren/thumb_1aac100f07230938a5dbe3561428e3df.jpg", title: "忠骨", auth: "三个糙汉一个软妹组" },
    { imgUrl: "../../asstes/index/tongren/thumb_b975b05c14d7846af3215f58c43fd56e.jpg", title: "隐元会（第一集）", auth: "只愿醉红尘" },
    { imgUrl: "../../asstes/index/tongren/thumb_171290a6ab00aa36d95e58fd06ea8170.jpg", title: "纯阳万花", auth: "304茨木GLVCK/千指大人" },
    { imgUrl: "../../asstes/index/tongren/thumb_c2ab5bb49046497e3e67da9678207e20.jpg", title: "风骨霸刀官方cos", auth: "剑网3官方" },
    { imgUrl: "../../asstes/index/tongren/thumb_6296346f639cf70b704703d4f864eb7b.jpg", title: "儒风七秀", auth: "啊啊啊啊啊阿shi" },
    { imgUrl: "../../asstes/index/tongren/thumb_9c86787c3e83d634ff8cb9563cf8ff39.jpg", title: "山河人间", auth: "黑天视觉工作室" },
    { imgUrl: "../../asstes/index/tongren/thumb_b3ce8f17b8210389fea28a20c883e7af.jpg", title: "佛秀", auth: "司音儿/青暮从山" },
]
//获取节点
// let tr_tab_bar=document.getElementsByClassName("tr_tab_bar")[0].getElementsByTagName("li");
// let trList = document.getElementsByClassName("tr_list")[0];
// //漫画处理
// let manhua_html = '';
// for (let i = 0; i < 5; i++) {
//     manhua_html += '<li>';
//     manhua_html += '<div class="tr_li">';
//     manhua_html += '<div class="tr_img_box">';
//     manhua_html += '<img src=' + tr_arr[i].imgUrl + '>';
//     manhua_html += '</div>';
//     manhua_html += '<div class="tr_text">'+tr_arr[i].title+'</div>'
//     manhua_html += '</li>';

// }
// // trList.innerHTML=trList_html;

// //音乐
// let music_html = '';
// for (let i = 5; i < 10; i++) {
//     music_html += '<li>';
//     music_html += '<div class="tr_li">';
//     music_html += '<div class="tr_img_box">';
//     music_html += '<img src=' + tr_arr[i].imgUrl + '>';
//     music_html += '</div>';
//     music_html += '<div class="tr_text">'+tr_arr[i].title+'</div>'
//     music_html += '</li>';

// }

// //视频
// let video_html = '';
// for (let i = 10; i < 15; i++) {
//     video_html += '<li>';
//     video_html += '<div class="tr_li">';
//     video_html += '<div class="tr_img_box">';
//     video_html += '<img src=' + tr_arr[i].imgUrl + '>';
//     video_html += '</div>';
//     video_html += '<div class="tr_text">'+tr_arr[i].title+'</div>'
//     video_html += '</li>';

// }
// manhua_html.innerHTML=manhua_html;
// //COSPLAY
// let COSPLAY_html = '';
// for (let i = 15; i < 20; i++) {
//     COSPLAY_html += '<li>';
//     COSPLAY_html += '<div class="tr_li">';
//     COSPLAY_html += '<div class="tr_img_box">';
//     COSPLAY_html += '<img src=' + tr_arr[i].imgUrl + '>';
//     COSPLAY_html += '</div>';
//     COSPLAY_html += '<div class="tr_text">'+tr_arr[i].title+'</div>'
//     COSPLAY_html += '</li>';

// }
// //点击事件处理
// for(let i=0;i<tr_tab_bar.length;i++)
// {
//     tr_tab_bar[i].onclick=()=>{
//         switch(i){
//             case 0:trList.innerHTML=manhua_html;break;
//             case 1:trList.innerHTML=music_html;break;
//             case 2:trList.innerHTML=video_html;break;
//             case 3:trList.innerHTML=COSPLAY_html;break;
//         }  
//     }
// }

//关于同人板块事件处理优化
let tr_tab_bar = document.getElementsByClassName("tr_tab_bar")[0].getElementsByTagName("li");
let trList = document.getElementsByClassName("tr_list")[0];
let trList_html = '';
// trList.innerHTML=trList_html;
let head = 0;
let rear = 5;
function tr_tab_bar_handle() {
    trList_html = '';
    for (let i = head; i < rear; i++) {
        trList_html += '<li>';
        trList_html += '<div class="tr_li">';
        trList_html += '<div class="tr_img_box">';
        trList_html += '<img src=' + tr_arr[i].imgUrl + '>';
        trList_html += '</div>';
        trList_html += '<div class="tr_text">' + tr_arr[i].title + '</div>'
        trList_html += '</li>';
    }
    trList.innerHTML = trList_html;
}

for (let i = 0; i < tr_tab_bar.length; i++) {
    tr_tab_bar[i].onclick = () => {
        switch (i) {
            case 0: head = 0; rear = 5; break;
            case 1: head = 5; rear = 10; break;
            case 2: head = 10; rear = 15; break;
            case 3: head = 15; rear = 20; break;
        }
        tr_tab_bar_handle();
    }
}
tr_tab_bar_handle();



