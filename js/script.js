var userAgent = function(){ //检测浏览器
    let ua = navigator.userAgent.toLowerCase();
    return {
        isWebkit: /webkit|khtml/.test(ua),
        isOpera: ua.indexOf('opera') > -1,
        isFirefox: ua.indexOf('firefox') > -1,
        isIE6: ua.indexOf('msie 6') > -1,
        isIE7: ua.indexOf('msie 7') > -1,
        isIE8: ua.indexOf('msie 8') > -1,
        isIE9: ua.indexOf('msie 9') > -1
    }
}
var mw = (function () {
    let mousewheel = function(){}
    mousewheel.prototype.init=function(el, fn, capture){
        var type = (userAgent().isFirefox) ? "DOMMouseScroll" : "mousewheel";
        if(window.addEventListener){
            return function(){
                el.addEventListener(type,fn,capture);
            }
        }else if(window.attachEvent){
            return function(){
                el.attachEvent("on" + type, fn);
            }
        }
    }
    mousewheel.prototype.stopEvent=function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
        if(event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    }
    mousewheel.prototype.wheelevent=function(ele,fn){
        var ev,_this = this,delta = 0;
        _this.init(ele,function(e){
            ev = window.event || e;
            _this.stopEvent(ev);
            delta = ev.wheelDelta ? (ev.wheelDelta / 120) : (- ev.detail / 3);
            try{
                fn(delta);
            }catch(er){
                return;
            }
        },false)();
    }
    mousewheel.prototype.zoomIn=function(ele,fn){
        this.wheelevent(ele,function(value){
            if(value > 0){fn(value);return;}
        });
    }
    mousewheel.prototype.zoomOut=function(ele,fn){
        this.wheelevent(ele,function(value){
            if(value < 0){fn(value);return;}
        });
    }
    return function () {
        return new mousewheel();
    }
})();
(function () {
    var hashArray = [{
        hash: "0FDCF4BFC05BAE2642BB04EE63D3FB1E",
        album_id: "42382026"
    }, {
        hash: "D933554D46F08A59EB7961CF3160BD04",
        album_id: "43287006"
    }, {
        hash: "E2B856A0B7EC0D077663618E9B3E8A3F",
        album_id: "4011672"
    }, {
        hash: "A35D4B31FA86896F3FD55941D1EC1C4E",
        album_id: "547706"
    }, {
        hash: "A1633088C6DFB1252FB742533357DA55",
        album_id: "37381533"
    }, {
        hash: "02680A6BE748445FF7B72176BEFBDCCA",
        album_id: "37381533"
    }, {
        hash: "3D8B43295563D03798AED866DB89C60D",
        album_id: "502506"
    }, {
        hash: "E156C472DDBA29823F2954AC1BA8F44A",
        album_id: "974086"
    }, {
        hash: "9335F2CF99AF6F43170BF4F7BC88F843",
        album_id: "542774"
    }, {
        hash: "C0E681AD93F5F2556E13F88C840F5A82",
        album_id: "970369"
    }];
    let config = {
        audio: document.createElement("audio"),
        lyrics: "",
        intemIndex: 0,
        mouse: false,
        clicked: false,
        lrc_txt: [],
        lrc_time: [],
    };
    let kg = {
        createEle:function(){
            config.audio.autoplay = true;
            config.audio.controls = true;
            document.querySelector(".main-audio").appendChild(config.audio);
            kg.init(hashArray[0]);
        },
        init:function (ob) {
            $.ajax({
                type: "get",
                url: "https://wwwapi.kugou.com/yy/index.php?r=play/getdata&dfid=3L1ohu2LTuxm40GcPn067YsP&mid=24b248dc04a81b61bd00da425d7bbf65&platid=4&_=1629899045374",
                data:{hash:ob.hash,album_id:ob.album_id},
                dataType: "jsonp",
                beforeSend:function(){
                    $(".lrc-panel").html("");
                    $(".loading").fadeIn();
                },
                success: function(d){
                    if(d.status == 1){
                        $(".song-name").text(d.data.audio_name);
                        setTimeout(function () {
                            config.lyrics = d.data.lyrics;
                            config.audio.src = d.data.play_url;
                            $(".loading").hide();
                            kg.play();
                        },400);
                    }else{
                        layer.msg('数据出错！', {icon: 2});
                    }
                },
                error:function (data) {
                    layer.msg('请求失败！', {icon: 2});
                },
            });
        },
        time_to_sec : function(time){
            let s = '';
            let min = time.split(':')[0];
            let sec = time.split(':')[1];
            s = Number(min*60) + Number(sec);
            return s;
        },
        removeEmpty : function(arr){
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == "" || typeof(arr[i]) == "undefined") {
                    arr.splice(i,1);
                    i = i - 1;
                }
            }
            return arr;
        },
        play:function () {
            this.designLrc();
            config.audio.play();
        },
        designLrc:function () {
            let lrcTxt = config.lyrics.split("\r\n");
            let lrc = this.removeEmpty(lrcTxt.splice(10,lrcTxt.length))
            let arrTxt = [];
            config.lrc_time.splice(0, config.lrc_time.length);
            config.lrc_txt.splice(0, config.lrc_txt.length);
            for (let  i=0;i<lrc.length;i++){
                arrTxt = lrc[i].split("]");
                config.lrc_time.push(arrTxt[0].split("[")[1]);
                config.lrc_txt.push(arrTxt[1]);
            }
            let  a = [];
            for (let i = 0 ;i<config.lrc_txt.length;i++){
                a.push("<p class='ie'>"+config.lrc_txt[i]+"</p>");
            }
            document.querySelector(".lrc-panel").innerHTML = a.join("");
        },
        changeLrc:function(y){
            let bar = parseFloat(y/313).toFixed(2);
            let totalBar = document.querySelector(".lrc-panel").clientHeight-204;
            let realitHeight = (parseFloat(totalBar)*bar).toFixed(0);
            document.querySelector(".lrc-panel").style.top = "-"+ realitHeight + "px";
        },
        events:function () {
            let y = 0,t = 0;
            //鼠标按下时
            document.querySelector(".scroll-drag").addEventListener('mousedown', (e) => {
                //鼠标按下时的y坐标
                y = e.clientY;
                //已经向下移动了几个像素
                t = document.querySelector(".scroll-drag").offsetTop;
                config.mouse = true;
            });
            window.addEventListener('mousemove', (e) => {
                if(config.mouse === false){
                    return;
                }
                //鼠标移动时的y坐标
                let my = e.clientY;
                let finalY = my - (y - t);
                //固定移动多少个像素
                finalY = finalY >= 313 ? 313 : finalY;
                finalY = finalY <= 1 ? 1 : finalY;
                document.querySelector(".scroll-drag").style.top = finalY+"px";
                kg.changeLrc(finalY);
            });
            //鼠标点击松开的时候
            window.addEventListener('mouseup', (e) => {
                config.mouse = false;
            });
            //监听鼠标滚轮事件
            let wheelObj = mw ();
            let wmEle = document.querySelector(".main")
            wheelObj.zoomIn(wmEle,function(value){
                let y = document.querySelector(".scroll-drag").offsetTop;
                y -= (value*25);
                y = y <= 1 ? 1 : y;
                document.querySelector(".scroll-drag").style.top = y+"px";
                kg.changeLrc(y);
            },false);
            wheelObj.zoomOut(wmEle,function(value){
                let y = document.querySelector(".scroll-drag").offsetTop;
                y += (value*(-25));
                y = y >= 313 ? 313 : y;
                document.querySelector(".scroll-drag").style.top = y+"px";
                kg.changeLrc(y);
            },false);

            document.querySelector(".main-search").onclick = function () {
                layer.prompt({title:"请输入歌曲名称"},function(val, index){
                    $.ajax({
                        type: "get",
                        url: "https://songsearch.kugou.com/song_search_v2?clientver=&platform=WebFilter&tag=em",
                        dataType: "jsonp",
                        data:{"page":1,"pagesize":1,"keyword":val},
                        success: function(d){
                            if(d.status == 1){
                                if(d.data.lists.length == undefined){
                                    layer.msg('暂无数据！');
                                }else{
                                    let tempData = d.data.lists[0];
                                    kg.init({"hash": tempData.FileHash, "album_id":tempData.AlbumID});
                                }
                            }
                            layer.close(index);
                        },
                        error:function (data) {
                            layer.msg('请求失败！');
                        },
                    });

                });
            }
        }
    }
    config.audio.addEventListener("playing",function () {
        config.clicked = true;
    });
    config.audio.addEventListener("ended", function() {
        let randNum = Math.floor(Math.random()*hashArray.length);
        kg.init(hashArray[randNum]);
    });
    config.audio.addEventListener('timeupdate', function(){
        //中途改变播放进度时找出对应歌词时间
        if(config.clicked) {
            let i = 0;
            config.intemIndex = 0;
            config.clicked = false;
            while (i < config.lrc_time.length) {
                if((i+1) >= config.lrc_time.length){
                    break;
                }else if(config.audio.currentTime <= kg.time_to_sec(config.lrc_time[i+1])){
                    break;
                }
                i++;
                config.intemIndex = i;
            }
        }else{
            let i = config.intemIndex;
            if(i < config.lrc_time.length){
                if (config.audio.currentTime >= kg.time_to_sec(config.lrc_time[i])) {
                    let list = document.getElementsByClassName("ie");
                    if (!list[i]){
                        return
                    }
                    $(".ie").removeClass("current-play");
                    list[i].classList.add("current-play");
                    if ( i < 5) {
                        document.querySelector(".lrc-panel").style.top = "0px";
                    }else {
                        document.querySelector(".lrc-panel").style.top = "-"+(34*(i - 5))+"px";
                    }
                    let lrcPanelEle = document.querySelector(".lrc-panel");
                    let  current = -parseInt(lrcPanelEle.style.top);
                    let  total = parseInt(lrcPanelEle.offsetHeight -204);
                    let  finalpercent = (current/total).toFixed(2);
                    /*console.log(current+" / "+total+"  =  " +finalpercent);*/
                    document.querySelector(".scroll-drag").style.top = parseInt(finalpercent*313)+"px";
                    i++;
                    config.intemIndex = i;
                }
            }
        }
    });
    kg.createEle();
    kg.events();
})();
