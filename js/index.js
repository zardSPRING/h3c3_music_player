window.addEventListener('DOMContentLoaded', function() {
    var lyricWordsBlock = document.querySelector(".lyric_words_block");
    var wordsProcess = document.querySelector(".words_process");
    var playBtn = document.querySelector(".play_btn");
    var musicAudio = document.querySelector("#music_audio");
    var muteBtn = document.querySelector(".mute_btn");
    var musicCurrentTime = document.querySelector(".music_current_time");
    var prograssDot = document.querySelector(".prograssDot");
    var prograssLine = document.querySelector(".prograssLine");
    var prograssContent = document.querySelector(".prograssContent");
    var modeBtn = document.querySelector(".mode_btn");
    var musicMode = 0; /* 0:顺序循环，1：单曲循环，2：乱序循环 */
    var nextBtn = document.querySelector(".next_btn");
    var prevBtn = document.querySelector(".prev_btn");
    var source = document.querySelector("#source");
    var musicLibrary = ["../media/1.别看我只是一只羊.mp3", "../media/2.周杰伦 - 等你下课 (with 杨瑞代).mp3"];
    var userCommentTextarea = document.querySelector("#user_comment_textarea");
    var greatCommentsBlock = document.querySelector(".great_comments_block");
    var commentWords = document.querySelector(".comment_words");
    var commentSubmitBtn = document.querySelector("#comment_submit_btn");
    var firstPage = document.querySelector(".first_page");
    var secondPage = document.querySelector(".second_page");
    var thirdPage = document.querySelector(".third_page");
    var lastPage = document.querySelector(".last_page");
    var prevPageBtn = document.querySelector(".prev_page_btn");
    var nextPageBtn = document.querySelector(".next_page_btn");

    function nowTime() {
        var currentTime = musicAudio.currentTime;
        var currentMin = parseInt(currentTime / 60);
        currentMin = currentMin < 10 ? "0" + currentMin : currentMin;
        var currentSec = parseInt(currentTime % 60);
        currentSec = currentSec < 10 ? "0" + currentSec : currentSec;
        musicCurrentTime.innerHTML = musicAudio.currentTime;
        musicCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }


    playBtn.addEventListener("mouseover", function() {
        if (musicAudio.paused) {
            playBtn.style.backgroundPosition = "-137px -153px";
        } else {
            playBtn.style.backgroundPosition = "-179px -194px";
        }
    })

    playBtn.addEventListener("mouseleave", function() {
        if (musicAudio.paused) {
            playBtn.style.backgroundPosition = "-137px -113px";
        } else {
            playBtn.style.backgroundPosition = "-138px -194px";
        }
    })

    playBtn.addEventListener("click", function() {
        if (musicAudio.paused) {
            musicAudio.play();
            playBtn.style.backgroundPosition = "-179px -194px";
            timer = setInterval(function(e) {
                nowTime();
                var currentTimePercent = musicAudio.currentTime / musicAudio.duration;
                prograssDot.style.left = currentTimePercent * 250 + "px";
                prograssLine.style.width = currentTimePercent * 250 + 'px';
            }, 500)
        } else {
            musicAudio.pause();
            clearInterval(timer);
            playBtn.style.backgroundPosition = "-137px -153px";
        }
    })

    prograssContent.addEventListener("click", function(e) {
        prograssDot.style.left = e.offsetX + "px";
        prograssLine.style.width = e.offsetX + 'px';
        musicAudio.currentTime = (e.offsetX / 250) * musicAudio.duration;
        nowTime();
    })

    muteBtn.addEventListener("mouseover", function() {
        if (musicAudio.muted) {
            muteBtn.style.backgroundPosition = "-308px -110px";
        } else {
            muteBtn.style.backgroundPosition = "-262px -126.5px";
        }
    })

    muteBtn.addEventListener("mouseleave", function() {
        if (musicAudio.muted) {
            muteBtn.style.backgroundPosition = "-307px -127px";
        } else {
            muteBtn.style.backgroundPosition = "-262px -111px";
        }
    })

    muteBtn.addEventListener("click", function() {
        if (musicAudio.muted) {
            musicAudio.muted = false;
            muteBtn.style.backgroundPosition = "-262px -126.5px";
        } else {
            musicAudio.muted = true;
            muteBtn.style.backgroundPosition = "-308px -110px";
        }
    })

    modeBtn.addEventListener("click", function() {
        if (musicMode === 0) {
            musicMode = 1;
            modeBtn.style.backgroundPosition = "-45px -135px";
        } else if (musicMode === 1) {
            musicMode = 2;
            modeBtn.style.backgroundPosition = "-45px -195px";
        } else if (musicMode === 2) {
            musicMode = 0;
            modeBtn.style.backgroundPosition = "-45px -165px";
        }
    })

    modeBtn.addEventListener("mouseover", function() {
        if (musicMode === 0) {
            modeBtn.style.backgroundPosition = "-45px -165px";
        } else if (musicMode === 1) {
            modeBtn.style.backgroundPosition = "-45px -135px";
        } else if (musicMode === 2) {
            modeBtn.style.backgroundPosition = "-45px -195px";
        }
    })

    modeBtn.addEventListener("mouseleave", function() {
        if (musicMode === 0) {
            modeBtn.style.backgroundPosition = "-15px -165px";
        } else if (musicMode === 1) {
            modeBtn.style.backgroundPosition = "-15px -135px";
        } else if (musicMode === 2) {
            modeBtn.style.backgroundPosition = "-15px -195px";
        }
    })


    document.addEventListener("keyup", function() {
        commentWords.innerHTML = "已输入" + userCommentTextarea.value.length + "个字";
    })

    var commentDatas = [{
        userName: "王健宇",
        commentWords: "Too",
        commentTime: "2017-05-20 07:00:42",
        thumbsUpCount: 165
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "陶爷爷二代",
        commentWords: "古古怪界大作战和羊羊运动会都是不错",
        commentTime: "2015-5-08 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "病名为理想",
        commentWords: "我居然在网易听吸氧羊",
        commentTime: "2015-06-03 18:58:02",
        thumbsUpCount: 524
    }, {
        userName: "贰号",
        commentWords: "95的表示05年出的喜羊羊也算童年回忆了",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "名字是八个字的哦",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "豆一样sang",
        commentWords: "还有谁记得灰红如何结为夫妻的，那是一个有蛋炒饭引发的血案……",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "蔷薇丶纷飞向北",
        commentWords: "今天，我侄子家煮了羊肉，我侄子吃的很开心，我对侄子嘴贱了一句：喜洋洋的肉好吃吧！然后他吧肉吐了，哭了一下午,我也被我嫂子拿着擀面杖追了一下午。",
        commentTime: "2016-08-14 08:24:35",
        thumbsUpCount: 149
    }];

    function saveCommentDatas() {
        if (!window.localStorage) {
            alert("请更换支持localstorage的浏览器！");
        } else {
            if (localStorage.getItem("commentsDatasStr") === null) {
                console.log(localStorage.getItem("commentsDatasStr") === null);
                var commentsDatasStr = JSON.stringify(commentDatas);
                localStorage.setItem("commentsDatasStr", commentsDatasStr);
            }
        }
    }

    function readCommentDatas() {

        var json = localStorage.getItem("commentsDatasStr");
        var commentsDatasObj = JSON.parse(json);
        for (var i = 3 * Number(firstPage.innerHTML) - 3; i <= 3 * Number(firstPage.innerHTML) - 1 && i < commentsDatasObj.length; i++) {

            var liNode = document.createElement("li");
            greatCommentsBlock.appendChild(liNode)

            var greatCommentsUserPicture = document.createElement("div");
            liNode.appendChild(greatCommentsUserPicture);
            greatCommentsUserPicture.classList.add("great_comments_user_picture");

            var liCommentsRightBlock = document.createElement("div");
            liNode.appendChild(liCommentsRightBlock);
            liCommentsRightBlock.classList.add("li_comments_right_block");

            var h1Node = document.createElement("h1");
            liCommentsRightBlock.appendChild(h1Node);
            h1Node.innerHTML = commentsDatasObj[i].userName;

            var h1SpanNode = document.createElement("span");
            h1Node.appendChild(h1SpanNode);
            h1SpanNode.innerHTML = "分享";

            var h2Node = document.createElement("h2");
            liCommentsRightBlock.appendChild(h2Node);
            h2Node.innerHTML = commentsDatasObj[i].commentWords;

            var h3Node = document.createElement("h3");
            liCommentsRightBlock.appendChild(h3Node);
            h3Node.innerHTML = commentsDatasObj[i].commentTime;

            var h3SpanNode = document.createElement("span");
            h3Node.appendChild(h3SpanNode);
            h3SpanNode.innerHTML = "回复";

            var deleteCommentSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(deleteCommentSpan);
            deleteCommentSpan.classList.add("delete_comment");

            var thumbsUpCountSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(thumbsUpCountSpan);
            thumbsUpCountSpan.classList.add("thumbs_up_count");
            thumbsUpCountSpan.innerHTML = commentsDatasObj[i].thumbsUpCount;

            var thumbsUpPictureSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(thumbsUpPictureSpan);
            thumbsUpPictureSpan.classList.add("thumbs_up_picture");

            if (commentsDatasObj[i].userName === "王健宇") {
                greatCommentsUserPicture.classList.add("great_comments_host_picture");
                deleteCommentSpan.innerHTML = "删除";
            }
        }
        lastPage.innerHTML = Math.ceil(commentsDatasObj.length / 3);
    }

    saveCommentDatas();
    readCommentDatas();

    commentSubmitBtn.addEventListener("click", function() {
        if (userCommentTextarea.value === '') {
            alert("提交的评论不能为空");
        } else {
            var hostCommentWords = userCommentTextarea.value;
            userCommentTextarea.value = "";
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = month < 10 ? "0" + month : month;
            var d = date.getDate();
            d = d < 10 ? "0" + d : d;
            var hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            var min = date.getMinutes();
            min = min < 10 ? "0" + min : min;
            var sec = date.getSeconds();
            sec = sec < 10 ? "0" + sec : sec;
            var hostCommentTime = year + "-" + month + "-" + d + " " + hour + ":" + min + ":" + sec;
            var hostObj = {
                userName: "王健宇",
                commentWords: hostCommentWords,
                commentTime: hostCommentTime,
                thumbsUpCount: 0
            }
            var json = localStorage.getItem("commentsDatasStr");
            var commentsDatasObj = JSON.parse(json);
            commentsDatasObj.unshift(hostObj);
            json = JSON.stringify(commentsDatasObj);
            localStorage["commentsDatasStr"] = json;
            greatCommentsBlock.innerHTML = "";
            readCommentDatas();
        }
    })

    secondPage.addEventListener("click", function() {
        firstPage.innerHTML = secondPage.innerHTML;
        secondPage.innerHTML = Number(secondPage.innerHTML) + 1;
        if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
            secondPage.innerHTML = lastPage.innerHTML;
        }
        thirdPage.innerHTML = Number(secondPage.innerHTML) + 1;
        if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
            thirdPage.innerHTML = lastPage.innerHTML;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })

    thirdPage.addEventListener("click", function() {
        firstPage.innerHTML = thirdPage.innerHTML;
        secondPage.innerHTML = Number(thirdPage.innerHTML) + 1;
        if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
            secondPage.innerHTML = lastPage.innerHTML;
        }
        thirdPage.innerHTML = Number(thirdPage.innerHTML) + 2;
        if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
            thirdPage.innerHTML = lastPage.innerHTML;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })

    prevPageBtn.addEventListener("click", function() {
        if (Number(firstPage.innerHTML) > 1) {
            firstPage.innerHTML = Number(firstPage.innerHTML) - 1;
            secondPage.innerHTML = Number(firstPage.innerHTML) + 1;
            thirdPage.innerHTML = Number(firstPage.innerHTML) + 2;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })
    nextPageBtn.addEventListener("click", function() {
        if (Number(firstPage.innerHTML) < Number(lastPage.innerHTML)) {
            firstPage.innerHTML = Number(firstPage.innerHTML) + 1;
            secondPage.innerHTML = Number(firstPage.innerHTML) + 1;
            if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
                secondPage.innerHTML = lastPage.innerHTML;
            }
            thirdPage.innerHTML = Number(firstPage.innerHTML) + 2;
            if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
                thirdPage.innerHTML = lastPage.innerHTML;
            }
            greatCommentsBlock.innerHTML = "";
            readCommentDatas();
        }
    })

    lastPage.addEventListener("click", function() {
        firstPage.innerHTML = lastPage.innerHTML;
        secondPage.innerHTML = lastPage.innerHTML;
        thirdPage.innerHTML = lastPage.innerHTML;
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })



})