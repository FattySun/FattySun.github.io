/***************************
 *** PILLAR INFO GRAPHIC ***
 ***************************/
/********
 * INIT *
 ********/
//// INIT DATA - PILLARS \\\\
function Pillar(num,id,textID,img,title,text,x,y,parent,format,mobImg){
    this.num = num;
    this.id = id;
    this.textID = textID;
    this.img = img;
    this.title = title,
        this.text = text;
    this.x = x;
    this.y = y;
    this.width = 48;
    this.parent = parent;
    this.format = format;
    this.mobImg = mobImg;
}

function PillarMap(num, id, img, imgID, imgWidth, imgHeight, pilList, pilInfo, pilInfoImg, pilInfoTitle, pilInfoText){
    this.num = num,
    this.id = id;
    this.img = img;
    this.imgID = imgID;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.pilList = pilList;
    this.pilInfo = pilInfo;
    this.pilInfoImg = pilInfoImg;
    this.pilInfoTitle = pilInfoTitle;
    this.pilInfoText = pilInfoText

}


var pillarListMain = [

    new Pillar(1,"#pillarInfo_one",
        "#pillarText_one",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-installationssauele-redendering-detailgrafik-710x300px-01.jpg",
        "为工业、制造和研究提供最佳供应点 ",
        "为工业和物流车间供应压缩空气和电力；通过特殊的附加元件为显示信息的显示器提供数据；通过集成其他元件提高安全性。无论您有怎样的需求，item 的安装柱都能为您量身定制中央供应点，并与 MB 工业铝型材装配系统完全兼容，还能根据使用需求进一步扩展。\n <br><a href='https://product.item-china.cn/zh/mulu/products/%E5%AE%89%E8%A3%85%E6%9F%B1-1001296567' target='_blank' data-params='setParams' class='cta-main'>更多信息，请访问：</a>",
        195, 152, 0, 5050,
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-installationssauele-redendering-detailgrafik-710x300px-01_mob.jpg"
    ),
    new Pillar(2,"#pillarInfo_two",
        "#pillarText_two",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-fifo-regal-redendering-detailgrafik-710x300px-02.jpg",
        "通过 FIFO （先进先出）优化内部物流 ",
        "采用 FIFO 系统，材料从存储系统中卸货的顺序与装货的顺序保持一致。精益生产装配系统可用于搭建移动式 FIFO 支架，支架上的料盒根据流动式料架原理从装货侧滑动到卸货侧。当一个料盒取出后，下一个料盒就会滑动到相应的位置。 item 精益生产装配系统中的所有组件都非常适用于精益生产。位于内卡苏尔姆(Neckarsulm)的奥迪生产基地就采用了 item 的精益生产装配系统。\n <br><a href='https://www.item-china.cn/zh/chanpinshijie/jingyishengchan/' target='_blank'  data-params='setParams' class='cta-main'>欢迎了解更多信息</a>&nbsp; &nbsp; &nbsp;<a class=\"html5lightbox cta-main\" data-width=\"800\" data-height=\"450\" href=\"https://www.youtube.com/embed/2S34stOlkLI\">观看视频</a>",
        325, 92, 0, 100
    ),
    new Pillar(3,"#pillarInfo_three",
        "#pillarText_three",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-ergonomischer-arbeitsplatz-redendering-detailgrafik-710x300px-03.jpg",
        "将人体工学融入内部物流——这是一个双赢的局面  ",
        "人体工学工作台系统可以提高生产效率，并减轻员工的工作压力。但是，传统的工作台系统往往忽略材料供应需求，而item ergologistic<sup>®</sup> 则恰恰相反。顾名思义，item ergologistic® 是将人体工学工作台设计与高效的内部物流相结合，从而实现最佳的生产效率，让您从中受益。 \n<br><a href='http://welcome.item-china.cn/wbs/' data-params='setParams' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        398, 153, 0, 100
    ),
    new Pillar(4,"#pillarInfo_four",
        "#pillarText_four",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-xms-maschinenkabine-redendering-detailgrafik-710x300px-04.jpg",
        "适用于敏感制造工艺的完美解决方案",
        "XMS 系列可用于搭建功能强大的机柜，而所需的工作量和成本却大幅降低。这主要得益于它拥有一系列专用组件和功能，比如集成电缆线槽和密封槽。通过集成在型材中的电缆线槽，电缆和软管可以安全布线，不但能确保线材使用方便，还能隐藏线材，避免杂乱。\n <br><a href='https://www.item-china.cn/zh/chanpinshijie/jiqihuzhaoxitong/' data-params='setParams' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        458, 242,0, 5050,
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-xms-maschinenkabine-redendering-detailgrafik-710x300px-04_mob.jpg"
    ),
    new Pillar(5,"#pillarInfo_five",
        "#pillarText_five",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-lineareinheit-redendering-detailgrafik-710x300px-05_2.jpg",
        "线性技术使自动化更高效",
        "得益于一系列先进的传动技术以及高精度和高品质，线性技术使自动化流程更加高效。凭借广泛的产品组合和即装型线性模组，您总能找到应对挑战的最佳解决方案。\n <br><a href='https://www.item-china.cn/zh/chanpinshijie/zidonghua/' target='_blank' data-params='setParams' class='cta-main'>欢迎了解更多信息</a>&nbsp; &nbsp; &nbsp;<a href='https://welcome.item-china.cn/automation_factsheet' data-params='setParams' class='cta-main' target='_blank'>查看数据表</a>",
        552, 193,0, 5050,
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-lineareinheit-redendering-detailgrafik-710x300px-05_02_mob.jpg"
    ),
    new Pillar(6,"#pillarInfo_six",
        "#pillarText_six",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-esd-schutz-redendering-detailgrafik-710x300px-06.jpg",
        "有效防止静电释放(ESD)",
        "静电释放(ESD)会在不经意间给电子元件造成巨大的损害——当潜在的严重后果出现时，一切为时已晚。 item 拥有 200 多位经过专业培训的员工和 1400 多种防静电产品，无论您是需要单个组件还是整个静电保护区(EPA)， item 都是帮助您打造防静电工作台的最佳合作伙伴。<br><a data-params='setParams' href='https://blog.item24.com/montagearbeitsplatz/esd-schutz-grundlagen-einfach-erklaert/' target='_blank' class='cta-main'>欢迎了解更多信息</a>&nbsp; &nbsp; &nbsp;<a href='https://welcome.item-china.cn/esd-whitepaper' data-params='setParams' class='cta-main' target='_blank'>查看白皮书</a>",
        455, 344,0, 100
    ),
    new Pillar(7,"#pillarInfo_seven",
        "#pillarText_seven",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-schutzwand-redendering-detailgrafik-710x300px-07.jpg",
        "确保工业环境中的机器安全",
        "item 的围栏和护罩系统可用于搭建符合机械指令 2006/42/EC 的保护性设施，包括框架、护罩、门到完整的机器围栏和机柜。您还可以添加 MB 工业铝型材装配系统中的其他元件，比如防篡改悬杆和其他安全夹具。 <br><a data-params='setParams' href='https://www.item-china.cn/zh/chanpinshijie/weilanhehuzhaoxitong/' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        555, 337,0, 100
    ),
    new Pillar(8,"#pillarInfo_eight",
        "#pillarText_eight",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-regale-redendering-detailgrafik-710x300px-08.jpg",
        "功能强大的 MB 工业铝型材装配系统 ",
        "无论是简单的货架还是更为复杂的专业机械围栏，MB 工业铝型材装配系统都可以确保您快速高效地工作。所有型材都经过阳极氧化处理，并有针对特定产品系列的模块化型材尺寸，从而确保完美的相互兼容性。采用与之配套的紧固件可以加快组装速度，还可以确保您在短时间内添加或重新配置各个元件。<br><a data-params='setParams' href='https://www.item-china.cn/zh/chanpinshijie/gongyeluxingcaizhuangpeixitong/' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        665, 269,0, 100
    ),
    new Pillar(9,"#pillarInfo_nine",
        "#pillarText_nine",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-routenzug-redendering-detailgrafik-710x300px-09.jpg",
        "满足循环取货的需求 ",
        "我们可以为您的内部物流过程提供完美的解决方案——通过一种灵活的、量身定制的方法来设计牵引推车，可以满足不同的负载需求。定制推车的上层结构时，您可以采用 MB 工业铝型材装配系统中的坚固型材，也可以采用精益生产装配系统中的轻质、免加工型材。与此同时， item 提供的牵引杆套件可以确保推车通过脚踏板连接和断开，并且整个过程符合人体工学原则。<br> <a class=\"html5lightbox cta-main\" data-width=\"800\" data-height=\"450\" href=\"https://www.item-china.cn/zh/chanpinshijie/jingyishengchan/\">欢迎了解更多信息</a>",
        762, 300,0, 100
    ),
    new Pillar(10,"#pillarInfo_ten",
        "#pillarText_ten",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-treppen-und-podeste-redendering-detailgrafik-710x300px-10.jpg",
        "“脚踏实地” 的安全性 ",
        "在为机器系统建造楼梯、舷梯、工作平台和护栏时，首先要考虑的因素是最大的灵活性和绝对的安全性。 item 的楼梯平台系统可以为您提供定制化解决方案，并确保外观整齐统一。所有的零部件都满足现行标准和安全要求。由于楼梯平台系统采用模块化设计，因此整个结构可通过相关配件轻松地修改或扩展。<br> <a data-params='setParams' href='https://www.item-china.cn/zh/chanpinshijie/loutihepingtaixitong/' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        908, 151,0, 100
    ),
    new Pillar(11,"#pillarInfo_elven",
        "#pillarText_eleven",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-engineeringtool-redendering-detailgrafik-710x300px-11.jpg",
        "轻松完成在线工程设计，无需安装其他软件",
        "在线工程设计——无需其他软件的快速解决方案 <br><a href='https://item.engineering/CNzh/tools/engineeringtool/' data-params='setParams' target='_blank' class='cta-main'>立即使用</a>",
        865, 302,0, 100
    ),
    new Pillar(12,"#pillarInfo_twelve",
        "#pillarText_twelve",
        "https://media.item24.com/Eloqua/Landingpages/custom/2020/content-hub/img/item-digitale-fabrik-academy-redendering-detailgrafik-710x300px-12.jpg",
        "随时随地培训 ",
        "在现在的信息社会，终身学习变得愈发重要。当数字培训不再局限于特定的时间和地点时，就能取得最好的效果。说到机械工程培训， item 在线培训平台无疑是不可忽略的培训中心。它不但包括一般性介绍和精益生产、静电安全等主题讨论，还涵盖 item 各种产品的指导视频和安装指南。用户甚至可以参加测试，并取得相关的证书。<br><a href='https://www.item-china.cn/zh/fuwu/peixunkecheng/' data-params='setParams' target='_blank' class='cta-main'>欢迎了解更多信息</a>",
        800, 365,0, 100
    )
];

var pillarMap = [
    new PillarMap(1, '#digitaleFabrik', 'assets/img/digitale-fabrik.jpg', '#main-pillar-img',1140, 614, pillarListMain, '#pillar-info', '#pillar-img', '#pillar-title', '#pillar-text')

];

//current pillar
var currentPillar = 0;
var showingPillar = false;

//// INIT FUNC - IMAGE \\\\
function initPillarImg(){
    for (var i=0; i<pillarMap.length; i++) {
        _.each(pillarMap[i].pilList,function(pill){
            $(pill.id).css('left',pill.x);
            $(pill.id).css('top',pill.y);
        });
    }
    resizeHandler();
}
var $info;
var $img;
var $title;
var $text;
//// INIT FUNC - INFOS \\\\
$(document).ready(function(){

    //INIT OPEN AND CLOSE HANDLER
    $info = $(pillarMap[0].pilInfo);
    $img = $(pillarMap[0].pilInfoImg);
    $title = $(pillarMap[0].pilInfoTitle);
    $text = $(pillarMap[0].pilInfoText);

    for (var i=0; i<pillarMap.length; i++) {
        _.each(pillarMap[i].pilList,function(pill){
            $(pill.id).on('click',function(e){
                showInfo(pillarMap[pill.parent], pill,e, pill.format);
                $('.pillar-info-icon.active').removeClass('active');
                $(pill.id).addClass('active');
            });
            $(pill.textID).on('click',function(e){

                $('.pillar-info-icon.active').removeClass('active');
                $(pill.id).addClass('active');
                showInfo(pillarMap[pill.parent], pill,e, pill.format);
                e.preventDefault();
            });
            $(pill.textID).mouseenter(function(e){
                $(pill.id).addClass('hover');
                $(this).addClass('hover');
            });
            $(pill.textID).mouseleave(function(e){
                 $(pill.id).removeClass('hover');
                $(this).removeClass('hover');
            });
            $(pill.id).mouseenter(function(e){
                $(pill.textID).addClass('hover');
            });
            $(pill.id).mouseleave(function(e){
                $(pill.textID).removeClass('hover');
            });
        });
    }

    waitForBG();
    var rtime;
    var timeout = false;
    var delta = 200;
    /*$(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            resizeHandler();
        }
    }*/
	$(window).resize(function(){
        resizeHandler();
    });
    // var indexInit = 0;
    var initOnce = true;
    if (initOnce) {
        if($(window).width() < 1200){
            showMobileContent(0);
            mobileNav(0);
            initOnce = false;
        }
    }
    $('#main-pillar-img').click(function(){
        $('.pillar-info-icon.active').removeClass('active');
        $("#pillar-info").fadeOut('fast').addClass('hidden');
    });
    $('#closeInfo').click(function(){
        $('.pillar-info-icon.active').removeClass('active');
        $("#pillar-info").fadeOut('fast').addClass('hidden');
    });
});

function mobileNav(index) {
    var rightIndex;
    var leftIndex;
    if (index === 0) {
        leftIndex = 11;
    } else {
        leftIndex = index - 1;
    }
    if (index === 11) {
        rightIndex = 0;
    } else {
        rightIndex = index + 1;
    }
    $('.pillar-mobile-navigation .left').unbind();
    $('.pillar-mobile-navigation .left').click(function(){
        $('.pillar-mobile-content').fadeOut(function(){
            showMobileContent(leftIndex);
            $('.pillar-mobile-content').fadeIn();
        });
        index = leftIndex;
        mobileNav(index);
    });/*
    $('.pillar-mobile-wrap').on('swiperight',function() {
        $('.pillar-mobile-content').fadeOut(function(){
            showMobileContent(leftIndex);
            $('.pillar-mobile-content').fadeIn();
        });
        index = leftIndex;
        mobileNav(index);
    });*/
    $('.pillar-mobile-navigation .right').unbind();
    $('.pillar-mobile-navigation .right').click(function(){
        $('.pillar-mobile-content').fadeOut(function() {
            showMobileContent(rightIndex);
            $('.pillar-mobile-content').fadeIn();
        });
        index = rightIndex;
        mobileNav(index);
    });/*
    $('.pillar-mobile-wrap').on('swipeleft',function() {
        $('.pillar-mobile-content').fadeOut(function(){
            showMobileContent(leftIndex);
            $('.pillar-mobile-content').fadeIn();
        });
        index = leftIndex;
        mobileNav(index);
    });*/
}

function showMobileContent(index) {
    $('.pillar-info-icon.active').removeClass('active');
    $img.attr('src', pillarListMain[index].img);
    $title.html(pillarListMain[index].title);
    $text.html(pillarListMain[index].text);

    $('.pillar-mobile-content').html('');
    if (pillarListMain[index].format === 5050) {
        // $('.pillar-mobile-content').append('<div class="row"><div class="col-md-4 col-sm-4 col-xs-4"></div><div class="col-md-8 col-sm-8 col-xs-8"></div></div>');
        $('.pillar-mobile-content').append($title);
        $img.attr('src', pillarListMain[index].mobImg);
        $('.pillar-mobile-content').append($img);
        $('.pillar-mobile-content').append($text);
    } else {
        $('.pillar-mobile-content').append($title);
        $('.pillar-mobile-content').append($img);
        $('.pillar-mobile-content').append($text);
    }
    $(pillarListMain[index].id).addClass('active');
    $(".html5lightbox.cta-main").html5lightbox();
    setParams();
}

function waitForBG() {
    if ($('#main-pillar-img').width() > 0 && $('#main-pillar-img').height() > 0) {
        
        initPillarImg();
        resizeHandler();
    } else {
        setTimeout(function(){
            waitForBG();
        }, 200);
    }
}
//close gobaly


$(document).click(function(event){
    /* if ($(event.target).hasClass('cta-main') || $(event.target).hasClass('right') || $(event.target).hasClass('left') || $(event.target).hasClass('pillar-info-icon') || $(event.target).hasClass('main-nav-text') || $(event.target).parent().hasClass('main-nav-text') ||$(event.target).attr('id') === 'html5-close' ||$(event.target).parent().attr('id') === 'html5-close') {
        console.log('dont close');
    } else {
        $('.pillar-info-icon.active').removeClass('active');
        $("#pillar-info").fadeOut('fast').addClass('hidden');
    } */
});

/**********
 * HELPER *
 **********/
//SHOW INFO

function showInfo(pillMap, pillar, e, format){
    var pillarHTML;
    if (format === 5050) {
        pillarHTML = '<div class="col-lg-6 col-md-5"><div class="info-modal-img"></div></div><div class="col-lg-6 col-md-7"><div class="info-modal-text"></div></div>';


    } else if ( format === 100) {
        pillarHTML = '<div class="col-lg-12"><div class="info-modal-img"></div></div><div class="col-lg-12"><div class="info-modal-text"></div></div>';

    }
    $('#pillar-info .info-modal-right').html(pillarHTML);
    $('#pillar-info .info-modal-img').append($img);
    $('#pillar-info .info-modal-text').append($title);
    $('#pillar-info .info-modal-text').append($text);
    var windowWidth = $(window).width();
    var breakpoint = windowWidth / 2;
    var clickedPos = $(pillar.id).offset().left;
    if($(window).width() < 1200){
        $('.pillar-mobile-content').append($title);
        $('.pillar-mobile-content').append($img);
        $('.pillar-mobile-content').append($text);

    }
    //open to the right
    else if(clickedPos < breakpoint){
        $info.css('max-width','none');
        var maxWidthModal = $(window).width() - clickedPos - 84;
        $('.info-modal-right').css('max-width',maxWidthModal + 'px');
        $info.css('left',$(pillar.id).offset().left + $(pillar.id).width() - 15);
        $info.css('top',$(pillar.id).offset().top - 40 + ($(pillar.id).height() + parseInt($(pillar.id).css('padding-top'), 10)) / 2);
        $('#pillar-info').removeClass('hidden');
        $info.removeClass('hidden').removeClass('left-open').removeClass('just-open').addClass('right-open');
        $("#pillar-info").addClass('visible-modal');
    }
    //open to the left
    else{
        $info.css('max-width','none');
        $('.info-modal-right').css('max-width',clickedPos - 54 + 'px');
        $info.css('left',$(pillar.id).offset().left + $(pillar.id).width() + 8);
        $info.css('top',$(pillar.id).offset().top - 40 + ($(pillar.id).height() + parseInt($(pillar.id).css('padding-top'), 10)) / 2);
        $info.removeClass('hidden').removeClass('just-open').removeClass('right-open').addClass('left-open');
        var modalWidth = $('.info-modal-left').width() + $('.info-modal-right').width() + 90;
        $info.css('left',parseFloat($info.css('left')) - parseFloat(modalWidth));
        $("#pillar-info").addClass('visible-modal');
    }
    $img.attr('src', pillar.img);
    $title.text(pillar.title);
    $text.html(pillar.text);
    if ($('#pillar-info').find('a[data-target]').length >= 1) {
        $('#pillar-info').find('a[data-target]').each(function(){
            $(this).click(function(e){
                var target = $(this).attr('data-target');
                e.preventDefault();
                $("#pillar-info").fadeOut('fast').addClass('hidden');
                $('#digitaleFabrik').fadeOut(function(){
                    $($(target)).fadeIn().css('display','inline-block');
                });
                detailInfoBack(target);
                $(target + ' a.next[data-target]').click(function(e){
                    e.preventDefault();
                    var next = $('.next[data-target]').attr('data-target');
                    $("#pillar-info").fadeOut('fast').addClass('hidden');
                    $(target).fadeOut(function(){
                       $(next).fadeIn().css('display','inline-block');
                        detailInfoBack(next);
                        $('html, body').animate({
                            scrollTop: $("#chapter_key-pager_2").offset().top
                        }, 500);
                    });
                });
            });
        });

    }
    //scroll for medium
    var target = undefined;
    if(e !== undefined){
        target = e.currentTarget.nodeName;
    }
    if(target === "LI"){
        var dest = 0;
        setTimeout(function(){
            if ($("#pillar-info").offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $("#pillar-info").offset().top-30;
            }
        },10);

    }
    if(windowWidth < 578){
        var dest = 0;
        setTimeout(function(){
            dest = $('#chapter_key-pager_2').offset().top-30;;
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1000, 'swing');
        },10);

    }
    //fade In for mobile
    if(windowWidth >= 578)
        $info.hide().removeClass('hidden').fadeIn('fast');
    if(windowWidth > 991){
        //correct width (balken=10px ; bild = 175px)
        setTimeout(function(){
            var $textWrap = $("#pillar-info .info-modal-right");
            var newWidth = $textWrap.innerWidth();
            var minus = $('.info-modal-img > img').innerWidth() + 10 + 47;
            newWidth -= minus;
            // $("#pillar-text").width(newWidth);
            
        },10);
    }
    // initDetailsCTA();
    showingPillar = true;
    $(".html5lightbox.cta-main").html5lightbox();
    setParams();
}
var imgTrueWidth = pillarMap[0].imgWidth;
var imgTrueHeight = pillarMap[0].imgHeight;
function resizeHandler(){
    var imgNew = pillarMap[0].imgID;
    var newImgWidth = $(imgNew).width();
    var newImgHeight = $(imgNew).height();
    //did the image-size change?

    if(newImgWidth != imgTrueWidth){
        var widthQuot = newImgWidth / imgTrueWidth;
        var heightQuot = newImgHeight / imgTrueHeight;
        

        _.each(pillarListMain,function(pillar){
            var newX = pillar.x * widthQuot;
            pillar.x = Math.round(newX);
            var newY = pillar.y * heightQuot;
            pillar.y = Math.round(newY);

            $(pillar.id).css('left',pillar.x);
            $(pillar.id).css('top',pillar.y);
        });
    }
    imgTrueWidth = $(imgNew).width();
    imgTrueHeight = $(imgNew).height();
    /*var index = 0;
    if($(window).width() < 1200){
        showMobileContent(0);
        mobileNav(index);
    }*/
}

function detailInfoBack(target) {
    $(target + ' a[data-target="backToDF"').click(function(e){
        e.preventDefault();
        $("#pillar-info").fadeOut('fast').addClass('hidden');
        $(target).fadeOut(function(){
            $('#digitaleFabrik').fadeIn().css('display','inline-block');
            $('html, body').animate({
                scrollTop: $("#chapter_key-pager_2").offset().top
            }, 500);
        });
    });
}
