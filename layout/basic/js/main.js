
// ======= wheel 이벤트 ======= 
var $html = jQuery3_6_0("html");
var page = 1;

if (window.sessionStorage) {
    if (sessionStorage.getItem("pageA.page") != undefined)
    page = sessionStorage.getItem("pageA.page");
    }

    var lastPage = jQuery3_6_0("section").length;

    $html.animate({ scrollTop: 0 }, 10);
    
    jQuery3_6_0(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (page == lastPage) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
        }
    if (window.sessionStorage)
    sessionStorage.setItem("pageA.page", page);

    var posTop = (page - 1) * jQuery3_6_0(window).height();
    $html.animate({ scrollTop: posTop });
    
});

/* ======== index-first-tabs ======== */
$(document).ready(function(){

    jQuery3_6_0('.custom__slide--autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        pauseOnFocus: false,
    });

});
 
$(window).load(function(){ 
    jQuery3_6_0('.newTab__loading--page').delay(600).fadeOut(700);
});

/* ======== index-first-tabs end ======== */


/* ======== index-second-tabs ======== */
$(function(){
    jQuery3_6_0('#product__slide--tabs .product__slide--tabs-title:first-child').addClass('active');
    jQuery3_6_0('.product__slide--content').hide();
    jQuery3_6_0('.product__slide--content:first').show();
    jQuery3_6_0('#product__slide--tabs .product__slide--tabs-title').mouseenter(function(){
    jQuery3_6_0('#product__slide--tabs .product__slide--tabs-title').removeClass('active');
    jQuery3_6_0('.product__slide--content').hide();
    
    var activeTab = jQuery3_6_0(this).find('a').attr('href');
    jQuery3_6_0(activeTab).show();
    return false;
    });
});
/* ======== index-second-tabs end ======== */



 
/* ======== index-third-tabs ======== */
(function($) {
  
    var hasTouchEvents = 'ontouchstart' in window;
    var eventType = hasTouchEvents ? 'touchstart' : 'mouseenter';
  
    function q(a) {
      return Array.prototype.concat.call(a || '').join(',');
    }
  
    $.fn.tabhover = function(options) {
      var that = this,
          opts = $.extend({}, options || {}),
          triggers = $(q(opts.triggers)),
          contents = $(q(opts.contents)),
          defaultIndex = opts.defaultIndex || 0,
          activeClass = opts.activeClass || 'jq-tab-active',
          activeBodyClass = opts.activeBodyClass || 'tab-body-active',
          keyName = opts.keyName || 'jqtab';
  
      return this.each(function() {
        var i, el, len = triggers.length,
            query = location.search.substring(1).split('&');
  
        $(triggers, that).each(function(i) {
          $(this).on(eventType, function() {
            for (var index = 0; index < len; index++) {
              $('body').removeClass(activeBodyClass + '-' + index);
            }
            $('body').addClass(activeBodyClass + '-' + i);
            $(triggers, that).removeClass(activeClass).eq(i).addClass(activeClass);
            $(contents, that).hide().eq(i).show();
            return false;
          });
        });
  
        $.each(query, function(i, val) {
          var pairs = val.split('='),
              k = decodeURIComponent(pairs[0]);
  
          if (k === keyName) {
            el = $(triggers, that).eq(decodeURIComponent(pairs[1]) - 0);
            return false;
          }
        });
  
        if (!el || !el.length) {
          el = $(triggers, that).eq(defaultIndex);
        }
        el.trigger(eventType);
      });
    };
  })(jQuery3_6_0);
  
  jQuery3_6_0('div#portpolio__tabs').tabhover({
    triggers: ['#portpolio__tabs--button1', '#portpolio__tabs--button2', '#portpolio__tabs--button3' , '#portpolio__tabs--button4' , '#portpolio__tabs--button5'],
    contents: ['#protpolio__content1', '#protpolio__content2', '#protpolio__content3', '#protpolio__content4' , '#protpolio__content5'],
    defaultIndex: 0,
    activeClass: 'tab-active',
    activeBodyClass: 'tab-body-active',
    keyName: 'portpolio__tabs'
  });
/* ======== index-third-tabs end ======== */

// 스크롤 헤더 이벤트
var $SecondHeader = $('.topArea');

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var SecondHeaderHeight = $('#topBanner').outerHeight();    
    
    if( scrollTop >= SecondHeaderHeight ){
        $SecondHeader.addClass('fixed');
    }else{
        $SecondHeader.removeClass('fixed');
    }
});