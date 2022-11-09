/**
 * 카테고리 리스트 상품 정렬
 */
var aUrl = location.href.split('?');
var sQueryString = aUrl[1];
var orgHeaderHeight = 0;
var selAdd = 0;
var maxTime = 5;

/**
 * 파라미터가 있을경우에만 처리
 */
$(document).ready(function(){
    if (sQueryString && sQueryString.indexOf('sort_method') > -1) {
        for (var i=0; i<$('#selArray option').length; i++) {
            if ($('#selArray option:eq('+i+')').val().indexOf(sQueryString) > -1) {
                $('#selArray option:eq('+i+')').attr("selected", true);

                orgHeaderHeight = $('#header').outerHeight(true);
                fixedClassCheck();
            }
        }
    }
});

$('#selArray').change(function() {
    if ($('#selArray').val()) {
        location.href=$('#selArray').val();
    }
});

function goThumg(url) {
    location.href = url+'?'+sQueryString;
}

function fixedClassCheck(){
    var fixedBol = $('#header').hasClass('fixed');
    if(!fixedBol){
        if(selAdd < maxTime){ setTimeout(fixedClassCheck,100); }
        selAdd++;
    }else{
        var fixedHeader = $('#header').find('.navigation').outerHeight(true),
            scrollValue = $(document).scrollTop(),
            scrollTop = scrollValue - (orgHeaderHeight+fixedHeader);

        if(scrollTop > 0){ $(document).scrollTop(scrollTop); }
    }
}

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

// 소분류페이지 이동시 해당 소분류 카테고리 강조 -- 포트폴리오

if (window.location.href.indexOf('cate_no=84') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
  }

if (window.location.href.indexOf('cate_no=126') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=122') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=123') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=124') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=114') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=115') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=120') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=121') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}

/* ================================================================================================== */

// 소분류페이지 이동시 해당 소분류 카테고리 강조 -- 제작가능상품
if (window.location.href.indexOf('cate_no=356') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=357') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=86') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}
if (window.location.href.indexOf('cate_no=87') > -1) {
    $('.portpolio__title--clothes:nth-child(18)').addClass('active');
}
if (window.location.href.indexOf('cate_no=88') > -1) {
    $('.portpolio__title--clothes:nth-child(19)').addClass('active');
}
if (window.location.href.indexOf('cate_no=89') > -1) {
    $('.portpolio__title--clothes:nth-child(20)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=90') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=91') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=92') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=358') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=93') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=371') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=94') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}
if (window.location.href.indexOf('cate_no=370') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=95') > -1) {
    $('.portpolio__title--clothes:nth-child(18)').addClass('active');
}
if (window.location.href.indexOf('cate_no=96') > -1) {
    $('.portpolio__title--clothes:nth-child(19)').addClass('active');
}
if (window.location.href.indexOf('cate_no=97') > -1) {
    $('.portpolio__title--clothes:nth-child(20)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=98') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=359') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=99') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=100') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=360') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=101') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */
if (window.location.href.indexOf('cate_no=102') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=361') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=103') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=369') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=368') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=104') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}
if (window.location.href.indexOf('cate_no=367') > -1) {
    $('.portpolio__title--clothes:nth-child(18)').addClass('active');
}
if (window.location.href.indexOf('cate_no=366') > -1) {
    $('.portpolio__title--clothes:nth-child(19)').addClass('active');
}
if (window.location.href.indexOf('cate_no=105') > -1) {
    $('.portpolio__title--clothes:nth-child(20)').addClass('active');
}

/* ================================================================================================== */
if (window.location.href.indexOf('cate_no=106') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=362') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=107') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}
/* ================================================================================================== */
if (window.location.href.indexOf('cate_no=108') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=363') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=109') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=110') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=364') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=111') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

/* ================================================================================================== */

if (window.location.href.indexOf('cate_no=112') > -1) {
    $('.portpolio__title--clothes:nth-child(15)').addClass('active');
}
if (window.location.href.indexOf('cate_no=365') > -1) {
    $('.portpolio__title--clothes:nth-child(16)').addClass('active');
}
if (window.location.href.indexOf('cate_no=113') > -1) {
    $('.portpolio__title--clothes:nth-child(17)').addClass('active');
}

// /* ================================================================================================== */

// FAQ 작성자 및 아이콘 , 위에 카테고리 제목 제거
if (window.location.href.indexOf('board_no=3') > -1) {
    $('.list__html--display-none').addClass('active');
    $('.list__html--visibility-hidden').addClass('active');
}

// 공지사항,상품후기,FAQ 자물쇠 제거
for (i = 1; i <= 5; i++) {
    if (window.location.href.indexOf('board_no=' + i ) > -1) {
        $('.subject i').addClass('active');
    };
}
/* ================================================================================================== */

$(function() {
    // Board Category, 해당 위치 표시 >>
    let category_item = $('.community_category .category_item a')
    let itemLength = category_item.length;
    let thisBoardNo = $('#board_no').val();
    // console.log('this board no = ', thisBoardNo)
    let activeIndex;
    for(let i=0; i<itemLength; i++) {
        if(category_item[i].href.split('board_no=')[1]===thisBoardNo) {
            activeIndex = i;
        }
    }
    $('.community_category .category_item').eq(activeIndex).addClass('active');
    // << Board Category, 해당 위치 표시
});