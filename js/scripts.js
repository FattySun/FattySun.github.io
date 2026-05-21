$(document).ready(function () {
    var videoCodeBG = 'kMi38Bck6jM';;
    var videoCodeFull = 'Ia0bzFz7V_E';
    if ($('body').hasClass('fr')) {

    } else {
        videoCodeBG = 'kMi38Bck6jM';
        videoCodeFull = 'laWxlZiTIzs';
    }
    // Funktionen fuer das Anzeigen des Contents im ersten Content Menu
    $('.click.kachel').click(function () {
        // Prüfung ob geklickte Kachel inaktiv ist
        if (!$(this).hasClass('active')) {
            var clickedObj = $(this); // Speichern des geklickten Objekts in "clickedObj"
            var toShow = $(this).attr('data-target'); // Anzuzeigenenden Content ermitteln auf Basis des "data-target" Werts des geklickten Elements wird

            $('.kachel-content.active').fadeOut(function () { // aktives Element ausblenden
                $('.kachel-content.active').removeClass('active'); // "active"-Klasse wegnehmen
                $('.kachel.click.active').removeClass('active'); // "active"-Klasse wegnehmen
                $(clickedObj).addClass('active'); // geklicktem Element Klasse "active" geben
                $('[data-content=' + toShow + ']').fadeIn().addClass('active'); // Content anzeigen und Klasse "active" geben
            });
        }
    });

    // Berechnung der Breiten für default, aktiv und inaktiv anhand der Anzahl von Saeulen
    var countColumnsSM2 = $('.kachel-acco').length;
    var defWidth = 100 / countColumnsSM2 + '%';
    var activeWidth;
    var deactWidth;
    switch (countColumnsSM2) {
        case 1:
            activeWidth = '100%';
            deactWidth = '0%';
            break;
        case 2:
            activeWidth = '75%';
            deactWidth = '25%';
            break;
        case 3:
            activeWidth = '66%';
            deactWidth = '17%';
            break;
        case 4:
            activeWidth = '48%';
            deactWidth = '13%';
            break;
    }

    // Funktion fuer das Anzeigen des Contents im zweiten Content Menu
    var windowWidth = $(window).width();
    if (windowWidth <= 768) {

    } else {
        $('.kachel-acco').css('width', defWidth);
        $('.kachel-acco-nav').click(function () {
            var clickedIndex = $(this).attr('data-nav'); // Index ermitteln anhand des "data-nav" Attributs
            var clicked = $('[data-nav="' + clickedIndex + '"]'); // Speichern des geklickten Elements in 'clicked'
            if (!$(clicked).hasClass('active')) { // Prüfung ob geklicktes Element inaktiv ist
                $(clicked).addClass('active');
                $(this).parent().addClass('active'); // Setzen der Klasse "active" auf Eltern-Element, wichtig für spätere Logikprüfung

                $('.kachel-acco').each(function () {
                    // itterieren durch alle "Säulen"
                    // 11 <- clickedIndex
                    if ($(this).attr('data-kachel') !== clickedIndex.substr(0, 1)) { // Prüfung anhand der data-kachel ID ob Element nicht in geklickter Säule liegt
                        $(this).find('.kachel-acco-nav').removeClass('active'); // Klasse "active" allen Schaltflächen in der Säule wegnehmen
                        $(this).css('width', deactWidth); // Säulenbreite verkleiner auf 25%
                        $(this).find('.kachel-acco-body').slideUp();
                    }
                });
                $('[data-kachel="' + clickedIndex.substr(0, 1) + '"]').css('width', activeWidth); // Säule des geklickten Elements vergrößern
                $('[data-target="' + clickedIndex + '"]').slideDown(); // Content anzeigen

            } else { // wenn geklicktes Element aktiv ist -> schließen des Elements
                var countActives = 0; // Variable um zu zählen ob in der Säule des geklickten Elements weitere aktive Elemente sind
                $(this).parent().children().each(function () {
                    if ($(this).hasClass('active')) {
                        countActives++; // Hochzählen wenn in Säule aktive Elemente sind
                    }
                });
                if (countActives > 1) { // Wenn mehr wie ein Element aktiv ist, nur das geklickte Element verstecken
                    $('[data-target="' + clickedIndex + '"]').slideUp();
                    $(clicked).removeClass('active');
                } else { // Wenn nur ein Element aktiv ist muss das Content Menu in den Urpsrungs Zustand
                    $('.kachel-acco').each(function () { // Jede Säule wieder auf Ursprungsbreite setzen
                        if ($(this).attr('data-nav') !== clickedIndex) $(this).css('width', defWidth);
                    });
                    $('[data-kachel="' + clickedIndex.substr(0, 1) + '"]').css('width', defWidth); // Aktive Säule auf Ursprungsbreite setzen
                    $(clicked).removeClass('active');
                    $('[data-target="' + clickedIndex + '"]').slideUp();
                }
            }


        });
    }

    resizeVideoContainer();
    if ($(window).width() > 991) {
        initVideoClick(videoCodeFull);
    }
    // Initialisierung des Hintergrund Videos (https://github.com/pupunzi/jquery.mb.YTPlayer/blob/master/README.md)
    setTimeout(function () {
        //$("#controller").YTPlayer({
        //    // URL of the YouTube video
        //    videoURL:'http://youtu.be/' + videoCodeBG, // Youtube Video URL
        //    containment: "#video-container", // Container für Hintergrund Video
        //    autoPlay: true,
        //    showControls: false,
        //    mute: true
        //});

        $('#video-container').html('');
        new YKU.Player('video-container', {
            styleid: '7',
            client_id: '09be00e495029108',
            vid: 'XNTA0NzQ2OTg5Mg',
            newPlayer: true,
            autoplay: true,
            events: {
                onPlayerReady: videoTipsSize,
            }
        });

        $('#carouselSlider').carousel({
            touch: true
        });
    }, 2000);

    $('.show-details').click(function (e) {
        e.preventDefault();
        var ElemToShow = $('#' + $(this).attr('data-target'));
        $(ElemToShow).show();
        $('.details-wrap').fadeIn();
    });
    if ($(window).width() <= 991) {
        $('#playVideo').unbind();
        //$('#playVideo').attr('href', 'https://www.youtube.com/embed/laWxlZiTIzs');
        $('#playVideo').attr('href', 'https://v.youku.com/v_show/id_XNTA0NzQ2OTg5Mg==.html?spm=a2hzp.8244740.0.0');
        $('#playVideo').addClass('html5lightbox');
        $('#playVideo').attr('data-width', '800');
        $('#playVideo').attr('data-height', '450');
        $("#playVideo").html5lightbox();
    }
    getParams();
    setParams();

    $('.langswitcher > span').click(function () {
        if ($(this).hasClass('active')) {
            $('.ddcontent').hide();
            $(this).removeClass('active');
        } else {
            $('.ddcontent').show();
            $(this).addClass('active');
        }
    });
    resizePreLoadIMG();
});

function videoTipsSize() {
    console.log('onPlayerReady');

    var videoH = 320 / 180;

    $('#video-container').css({
        'width': $('.full-width-img').width(),
        'height': $('.full-width-img').width() / videoH
    });
}



function resizePreLoadIMG() {
    $('#video-preload-wrapper > img').width($(window).width() * 1.117);
    $('#video-preload-wrapper > img').height($('#video-preload-wrapper > img').width() * 0.5627);
    var vpw_ml = $('#video-preload-wrapper > img').css('margin-left');
    $('#video-preload-wrapper > img').css('margin-left', '-' + $(window).width() * 0.058499 + 'px');
}


function resizeVideoContainer() {
    $('#video-container').width($(window).width() + 'px');
    $('#video-container').height($('#video-container').width() * 0.39 + 'px');
    if ($(window).width() > 991) {
        initVideoClick();
    }
}
var paramsURL = window.location.href.substr(window.location.href.indexOf('?'), window.location.href.length);
paramsURL = paramsURL.substr(paramsURL.indexOf('?') + 1, paramsURL.length);
var paramSets;
var paramName = [];
var paramVal = [];

function getParams() {
    paramSets = paramsURL.split('&');
    for (var i = 0; i < paramSets.length; i++) {
        paramName[i] = paramSets[i].substr(0, paramSets[i].indexOf('='));
        paramVal[i] = paramSets[i].substr(paramSets[i].indexOf('=') + 1, paramSets[i].length);
    }

}

function setParams() {
    var URLExtension = '';
    var currentHREF = '';
    for (var i = 0; i < paramVal.length; i++) {
        if (i === 0) {
            URLExtension = URLExtension + '?' + paramName[i] + '=' + paramVal[i];
        } else {
            if (paramName[i] === 'utm_medium') {
                URLExtension = URLExtension + '&' + paramName[i] + '=content-hub';
            } else {
                URLExtension = URLExtension + '&' + paramName[i] + '=' + paramVal[i];
            }
        }

    }
    $('[data-params="setParams"]').each(function () {
        currentHREF = $(this).attr('href');
        if (currentHREF.indexOf('?') >= 0) {
            $(this).attr('href', currentHREF + '&' + URLExtension.substr(1, URLExtension.length));
        } else {
            $(this).attr('href', currentHREF + URLExtension);
        }

        $(this).attr('data-params', 'paramsSet');
    });
}


function initVideoClick(vCf) {

    $('#playVideo, #video-container').click(function () {
        //var vidWidth = $('.full-width-img').width(); // Breite des Containers holen
        //var vidHeight = $('.full-width-img').height(); // Hoehe des Containers holen
        ////var youtubeURL = 'https://www.youtube.com/embed/' + vCf + '?rel=0&autoplay=1'; // Youtube Video URL
        //var youtubeURL = 'https://v.youku.com/v_show/id_XNTA0NzQ2OTg5Mg==.html?spm=a2hzp.8244740.0.0'; // Youtube Video URL
        //// HTML für neuen Content in "youtubeIframe" speichern mit variabler Breite und Hoehe
        //var youtubeIframe = '<iframe width="'+ vidWidth +'" height="'+ vidHeight +'" src="'+ youtubeURL +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        //$('#video-container').remove(); // Background Video löschen
        //$('.teaser.hidden-sm').fadeOut();
        //$('#videoHeader .full-width-img').html(youtubeIframe); // Youtube IFrame einsetzen in Container
        //$('#videoHeader .full-width-img').fadeIn();

        $('#videotips_lg').remove();
        $('#video-container').html('');
        new YKU.Player('video-container', {
            styleid: '7',
            client_id: '09be00e495029108',
            vid: 'XNTA0NzQ2OTg5Mg',
            newPlayer: true,
            autoplay: true,
            events: {
                onPlayerReady: videoTipsSize,
            }
        });

    });
}