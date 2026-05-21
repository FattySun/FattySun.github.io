var players = Array();
var playerID, bfurl, playerEvt, eml;

$(function(){
    var videoPreloadWrapper = $('#video-preload-wrapper');
    if (videoPreloadWrapper.length > 0) {
        buildContentSmall();
        resizeVideoContainer();
        var vidURL = $('#video-container').attr('data-video');
        onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
            // jQuery("#bgndVideo").YTPlayer({
            //     videoURL: 'http://youtu.be/' + vidURL, // Youtube Video URL
            //     autoPlay: true,
            //     containment: "#video-container",
            //     showControls: false,
            //     mute: true,
            //     useNoCookie: true,
            //     onReady: function () {
            //         $('#iframe_bgndVideo').css('margin-top', $('#video-container').attr('data-mtop') + '!important');
            //         removeImage();
            //     }
            // });

            $('#video-container').html('');
            new YKU.Player('video-container', {
                styleid: '7',
                client_id: '09be00e495029108',
                vid: 'XNTA0NzQ2OTg5Mg',
                //newPlayer: true,
                autoplay: true, // 自动播放
                show_related: false, // 关闭相关视频推荐
                events: {
                    onPlayerReady: videoTipsSize,
                }
            });
        }
		var videoHeader = $('#video-container');
    }
});

$(window).resize(function(){
	resizeVideoContainer();
});

function removeImage() {
    var videoPreloadWrapper = $('#video-preload-wrapper');
    if (videoPreloadWrapper.length > 0) {
        videoPreloadWrapper.fadeOut();
    }
}

function resizeVideoContainer() {
    var videoContainer = $('#video-container');
    videoContainer.width($(window).width() + 'px');
    videoContainer.height(videoContainer.width() * 0.39 + 'px');
    if ($(window).width() > 970) {
		// 
    } else {
        $('#video-container').remove();
    }
}

function buildContentSmall() {
    var clickVidURL = $('#playVideo').attr('data-video');
    var cntH2 = $('.teaser-big h2').html();
    var cntPar = $('.teaser-big article p').html();
    var cntCTA = $('.teaser-big article #playVideo').html();
    var smallHTML = '<div class="teaser-small hidden-lg hidden-md">\n' +
        '                <h2>'+ cntH2 +'</h2>\n' +
        '                <div>\n' +
        '                    <hr class="item-hr" style="text-align:left;">\n' +
        '                </div>\n' +
        '                <article class="article">\n' +
        '                    <p>'+ cntPar +'</p>\n' +
        // '                    <a class="cta-main html5lightbox" href="https://www.youtube.com/embed/'+ clickVidURL +'" data-width="800" data-height="450">'+ cntCTA +'</a>\n' +
         '                    <a class="cta-main html5lightbox" href="https://v.youku.com/v_show/id_XNTA0NzQ2OTg5Mg==.html?spm=a2hzp.8244740.0.0?elqTrackId=6ca173cacb6a4f1ea7a3d2ca23a7a1eb&elqaid=4878&elqat=2 data-width="800" data-height="450">'+ cntCTA +'</a>\n' +
        '                </article>\n' +
        '            </div>';
    $('#videoHeader').append(smallHTML);
    initVideoClick(clickVidURL);
	$('.html5lightbox').html5lightbox();
}

function onYouTubeIframeAPIReady() {

}

function onPlayerReady(event) {
    var iframeID = 'player' + players.length;
    $(event.target.getIframe()).attr('id',iframeID);
    event.target.playVideo();
    players.push(event.target);
}

var done = false;

function onPlayerStateChange(event) {
    //var playerTarget = event.target;
    var playerStatus = event.data;
    var nframeID = $(event.target.getIframe()).attr('id').split('player');
    var n = nframeID[1];
    var frameID = players[n];

    if (playerStatus == 0) {
        playerEvt = 'finished';
        trackYt(frameID, playerEvt);

    } else if (playerStatus == 1) {
        playerEvt = 'started';
        trackYt(frameID, playerEvt);

    } else if (playerStatus == 2) {
        playerEvt = 'stopped';
        trackYt(frameID, playerEvt);

    } else if (playerStatus == 3) {
        // buffering

    } else if (playerStatus == 5) {
        // video cued

    }

    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function trackYt(frameID, action) {
    // get Video title
    var x = frameID.getVideoData();
    var title = x.title;

    // get video ID
    var vid = x.video_id;


    // time in seconds
    var timePositionSS = frameID.getCurrentTime();
    var cleanSecs = timePositionSS.toFixed(2);
    //console.log('timePositionSS '+timePositionSS+' Secs:'+cleanSecs);


    // vid duration
    var durationSS = frameID.getDuration(),
        percentPosition = (timePositionSS / durationSS).toFixed(2) * 100;

    if ( eml !== '' ) {
        var date = new Date();
        var timecode = date.getTime();
        var uuid = eml+'_'+timecode;
        bfurl = 'https://s1173830714.t.eloqua.com/e/f2?elqSiteID=1173830714&elqFormName=yt-form&emailAddress='+eml+'&v-title='+title+'&v-id='+vid+'&v-percent='+percentPosition+'&v-secs='+cleanSecs+'&overallLength='+durationSS+'&playerEvt='+playerEvt+'&uuid='+uuid;

        $('#bform').remove();
        $('body').append('<iframe id="bform" scrolling="no" width="1" height="1" border="0"></iframe>');
        $('#bform').attr('src', bfurl);
    }

    // pageview
    if (action == 'stopped') {
        var tim = encodeURIComponent(' at '+percentPosition+'%');
        var tUrl = window.location.protocol+'//'+window.location.hostname+window.location.pathname
            +'/'+action+'-video/'+encodeURIComponent(title)+tim;
    }
    else {
        var tUrl = window.location.protocol+'//'+window.location.hostname+window.location.pathname
            +'/'+action+'-video/'+encodeURIComponent(title);
    }

    _elqQ.push(['elqTrackPageView', tUrl]);

}

function videoTipsSize() {
    var videoH = 320 / 180;

    $('#video-container').css({
        'width': $('.full-width-img').width(),
        'height': $('.full-width-img').width() / videoH
    });
}

function initVideoClick(vCf) {
    $('#playVideo, #video-container').click(function(){
        // var fullWidthImg = $('.full-width-img');
        // var vidWidth = fullWidthImg.width();
        // var vidHeight = fullWidthImg.height();
        // var youtubeURL = 'https://www.youtube.com/embed/' + vCf;
        // $('#video-container').remove();
        // $('.teaser-big.hidden-sm').fadeOut();
        // var player = new YT.Player('video-wrap', {
        //     height: vidHeight,
        //     width: vidWidth,
        //     videoId: vCf,
		// 	playerVars: { rel: 0 },
        //     enablejsapi: 1,
        //     origin: window.location.host,
        //     useNoCookie: true,
        //     events: {
        //         'onReady': onPlayerReady,
        //         'onStateChange': onPlayerStateChange
        //     }
        // });
        // $('#videoHeader .full-width-img').fadeIn();

        $('#video-container').html('');
        new YKU.Player('video-container', {
            styleid: '7',
            client_id: '09be00e495029108',
            vid: 'XNTA0NzQ2OTg5Mg',
            //newPlayer: true,
            autoplay: true, // 自动播放
            show_related: false, // 关闭相关视频推荐
            events: {
                onPlayerReady: videoTipsSize,
            }
        });

    });
}

