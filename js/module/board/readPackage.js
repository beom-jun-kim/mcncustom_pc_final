$(document).ready(function(){
    $('[id^="replyArea_"]').each(function(e) {
        $(this).hide();
    });
});

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

    // 업무 제휴 문의 add link to image banner >>
    if(thisBoardNo==5){
        $('#Resize_imgArea img').css('cursor', 'pointer');
        $('#Resize_imgArea img').click(function() {
            window.open("https://mcnorder.com");
        })
    }
    // << 업무 제휴 문의 add link to image banner 
});

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