$(document).ready(function () {
        var sliderHTML = '<div id="carouselSlider" class="carousel slide" data-ride="carousel">' +
            '<div class="carousel-inner"  role="listbox"></div>' +
            '</div>';
        var slideContent = $('.slider-contents');
        var slideControls = '<a class="left carousel-control  vertical-center" href="#carouselSlider" role="button" data-slide="prev"><span class="slidecontrols"><img src="https://media.item24.com/Eloqua/Landingpages/custom/public/icons/Item_arrow_gray.svg" alt="left" class="rotate180"></span></span><span class="sr-only">Previous</span></a>' +
            '<a class="right carousel-control  vertical-center" href="#carouselSlider" role="button" data-slide="next"><span class="" aria-hidden="true"><span class="slidecontrols"><img src="https://media.item24.com/Eloqua/Landingpages/custom/public/icons/Item_arrow_gray.svg" alt="right" class=""></span></span><span class="sr-only">Next</span></a>';

        $('.slider-custom-container').html(sliderHTML);
        var itemHTML = '';
        var firstSlide = true;
        var eachDone = $('[data-class]').length;
        $('[data-class]').each(function () {
            var classToAdd = $(this).attr('data-class');
            $(this).addClass(classToAdd);
            eachDone--;
            if (eachDone === 0) buildSlider();
        });

        function buildSlider() {
            $('.slider-contents .carousel-item-t').each(function () {

                var itemIMG = $(this).find('img');
                console.log(itemIMG)
                var itemCaption = $(this).find('.carousel-cpt');
                if (firstSlide) {
                    firstSlide = false
                    itemHTML += '<div class="item active">' +
                        '<img src="' + $(itemIMG[0]).attr('src') + '" class="hide-small hidden-xs hidden-sm">' +
                        '<img src="' + $(itemIMG[1]).attr('src') + '" class="hide-large hidden-lg hidden-md">' +
                        '<div class="carousel-caption-1">' + $(itemCaption).html() + '</div>' +
                        '</div>';
                } else {
                    itemHTML += '<div class="item">' +
                        '<img src="' + $(itemIMG[0]).attr('src') + '" class="hide-small hidden-xs hidden-sm">' +
                        '<img src="' + $(itemIMG[1]).attr('src') + '" class="hide-large hidden-lg hidden-md">' +
                        '<div class="carousel-caption-1">' + $(itemCaption).html() + '</div>' +
                        '</div>';
                }
            });
        }

        $('.slider-custom-container .carousel-inner').html(itemHTML);
        $('#carouselSlider').append(slideControls);

        $('.slider-contents').remove();
        $('#carouselSlider').carousel()
    });


    $(document).ready(function () {
        $('.masthead').find('img').addClass('img-responsive');
        $('.masthead #img-circle').find('img').removeClass('img-responsive');
        //for Header Company Logo
        $('.masthead #item-logo').find('img').removeClass('img-responsive');
        //for Partner Company Logo area (Column)
        $('.logo .inner-wrap').find('img').css('display', 'unset');
        $('.acco-title').addClass('collapsed');
        if ($('#collapse-cnt1').length > 0) {
            $('#collapse-cnt1').removeClass('in');
        }
        if ($('#collapse-cnt2').length > 0) {
            $('#collapse-cnt2').removeClass('in');
        }
    });

    /*  Video container - iframe    */
    // var iframeHeight;
    // $(".small-video div.image-wrap > img").click(function () {

    //     $('.small-video .text-wrap').remove();
    //     var $img = $(".small-video .image-wrap > img");
    //     var $imageWrap = $(".small-video .image-wrap");
    //     var videoHeight = $imageWrap.height(); 
    //     var containerId = $img.attr("data-container-id");
    //     var videoId = $img.attr("data-video-url");
    //     $img.hide();
    //     $imageWrap.css({
    //         height: videoHeight + "px",
    //         position: "relative"
    //     });
    //     buildVideo(containerId, videoId, videoHeight);
    // });

    // $("div.video-teaser-inner.small-video  > div.text-wrap").click(function () {

    //     $('.small-video .text-wrap').remove();
    //     var $img = $(".small-video .image-wrap > img");
    //     var $imageWrap = $(".small-video .image-wrap");
    //     var videoHeight = $imageWrap.height(); 
    //     var containerId = $img.attr("data-container-id");
    //     var videoId = $img.attr("data-video-url");
    //     $img.hide();
    //     $imageWrap.css({
    //         height: videoHeight + "px",
    //         position: "relative"
    //     });
    //     buildVideo(containerId, videoId, videoHeight);
    // });


/*  Video container - iframe    */
// 使用事件委托，兼容Eloqua动态DOM渲染
$(document).on('click', ".small-video div.image-wrap > img", function () {
    // 向上查找，只获取【当前被点击】的视频模块，不碰其他模块
    const $currentSmallVideo = $(this).closest(".small-video");
    playSingleVideo($currentSmallVideo);
});

$(document).on('click', "div.video-teaser-inner.small-video > div.text-wrap", function () {
    const $currentSmallVideo = $(this).closest(".small-video");
    playSingleVideo($currentSmallVideo);
});

/**
 * 只处理某一个视频实例
 * @param {jQuery} $wrap 当前 .small-video 的jquery对象
 */
function playSingleVideo($wrap) {
    // 仅移除当前模块内的播放按钮层
    $wrap.find('.text-wrap').remove();

    // 全部查找操作都限定在当前模块内部，不会选中第二个视频
    const $img = $wrap.find(".image-wrap > img");
    const $imageWrap = $wrap.find(".image-wrap");

    const videoHeight = $imageWrap.height();
    const containerId = $img.attr("data-container-id");
    const videoId = $img.attr("data-video-url");

    $img.hide();
    $imageWrap.css({
        height: videoHeight + "px",
        position: "relative"
    });
    // 沿用你原来的buildVideo，逻辑完全不变
    buildVideo(containerId, videoId, videoHeight);
}




    // $(".full-width-video div.image-wrap > img").click(function () {
    //     // iframeHeight = $('.video-teaser-inner.full-width-video  > .image-wrap > img').height();
    //     // video = '<iframe width="100%" height="' + iframeHeight + '" src="' + $(this).attr('data-video-url') + '"></iframe>';
    //     // $('.text-wrap').remove();
    //     // buildVideo($(this).attr('data-container-id'),$(this).attr('data-video-url'), iframeHeight);

    //   $('.full-width-video .text-wrap').remove();
    //     var $img = $(".full-width-video .image-wrap > img");
    //     var $imageWrap = $(".full-width-video .image-wrap");
    //     var videoHeight = $imageWrap.height(); 
    //     var containerId = $img.attr("data-container-id");
    //     var videoId = $img.attr("data-video-url");
    //     $img.hide();
    //     $imageWrap.css({
    //         height: videoHeight + "px",
    //         position: "relative"
    //     });
    //     buildVideo(containerId, videoId, videoHeight);
    // });

    // $("div.video-teaser-inner.full-width-video  > div.text-wrap").click(function () {
    //     //$('.full-width-video .text-wrap').remove();
    //     // $(".full-width-video div.image-wrap > img").html(function () {
    //     //     iframeHeight = $('.video-teaser-inner.full-width-video > .image-wrap > img').height();
    //     //     buildVideo($(this).attr('data-container-id'),$(this).attr('data-video-url') , iframeHeight);
    //     // })
        
    //     $('.full-width-video .text-wrap').remove();
    //     var $img = $(".full-width-video .image-wrap > img");
    //     var $imageWrap = $(".full-width-video .image-wrap");
    //     var videoHeight = $imageWrap.height(); 
    //     var containerId = $img.attr("data-container-id");
    //     var videoId = $img.attr("data-video-url");
    //     $img.hide();
    //     $imageWrap.css({
    //         height: videoHeight + "px",
    //         position: "relative"
    //     });
    //     buildVideo(containerId, videoId, videoHeight);
    // });
    function buildVideo(id, embbedCode, vHeight) {
        //embbedCode = 'XNTA0NzQ2OTg5Mg';
        new YKU.Player(id, {
            client_id: '09be00e495029108', // 必须填！
            vid: embbedCode,
            width: '100%',
            height: vHeight,
            autoplay: true, // 自动播放
            show_related: false // 关闭相关视频推荐
        });
    }

    // $(document).ready(function () {
    //     var sliderHTML = '<div id="carouselSlider-mobile" class="carousel slide" data-ride="carousel">' +
    //         '<div class="carousel-inner"  role="listbox"></div>' +
    //         '</div>';
    //     var slideContent = $('.slider-contents');
    //     var slideControls = '<a class="left carousel-control  vertical-center" href="#carouselSlider-mobile" role="button" data-slide="prev"><span class="slidecontrols"><img src="https://media.item24.com/Eloqua/Landingpages/custom/public/icons/Item_arrow_gray.svg" alt="left" class="rotate180"></span></span><span class="sr-only">Previous</span></a>' +
    //         '<a class="right carousel-control  vertical-center" href="#carouselSlider-mobile" role="button" data-slide="next"><span class="" aria-hidden="true"><span class="slidecontrols"><img src="https://media.item24.com/Eloqua/Landingpages/custom/public/icons/Item_arrow_gray.svg" alt="right" class=""></span></span><span class="sr-only">Next</span></a>';

    //     $('.slider-custom-container-mobile').html(sliderHTML);
    //     var itemHTML = '';
    //     var firstSlide = true;
    //     var eachDone = $('[data-class]').length;
    //     $('[data-class]').each(function () {
    //         var classToAdd = $(this).attr('data-class');
    //         $(this).addClass(classToAdd);
    //         eachDone--;
    //         if (eachDone === 0) buildSlider();
    //     });

    //     function buildSlider() {
    //         $('.slider-contents-mobile .carousel-item-t-mobile').each(function () {

    //             var itemIMG = $(this).find('img');
    //             var itemCaption = $(this).find('.carousel-cpt');
    //             if (firstSlide) {
    //                 firstSlide = false
    //                 itemHTML += '<div class="item active">' +
    //                     '<img src="' + $(itemIMG).attr('src') + '">' +
    //                     '<div class="carousel-caption-1-mobile">' + $(itemCaption).html() + '</div>' +
    //                     '</div>';
    //             } else {
    //                 itemHTML += '<div class="item">' +
    //                     '<img src="' + $(itemIMG).attr('src') + '">' +
    //                     '<div class="carousel-caption-1-mobile">' + $(itemCaption).html() + '</div>' +
    //                     '</div>';
    //             }
    //         });
    //     }

    //     $('.slider-custom-container-mobile .carousel-inner').html(itemHTML);
    //     $('#carouselSlider-mobile').append(slideControls);

    //     $('.slider-contents-mobile').remove();
    //     $('#carouselSlider-mobile').carousel();
    //     function onYouTubeIframeAPIReady() {

    //     }

    //     function onPlayerReady(event) {
    //         event.target.playVideo();
    //     }

    //     function onPlayerStateChange(event) {

    //     }
    // });