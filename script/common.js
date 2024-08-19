//common js
// 1. nav>gnb
//2. 복제대상을 변수저장 
//3.m_nav_wrap 위 변수 붙여넣기  
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
m_wrap.appendChild(gnbClone)

//main nav jquery 
// sub, sub bg 숨기기
$('nav .sub').hide()
$('nav .sub_bg').hide()
// 2. nav 마우스 호버시 sub 보이기 
$('nav').on('mouseover',function(){
    $('nav .sub').stop(true).slideDown(300);
    $('nav .sub_bg').stop(true).slideDown(300);
    //show
})
$('nav').on('mouseout',function(){
    $('nav .sub').stop(true).slideUp(300);
    $('nav .sub_bg').stop(true).slideUp(300);
    //hide
})
var m_nav_state = false;
console.log(`현재상태는 : ${m_nav_state}`)
//1. 모바일 메뉴 숨기기 
$('.m_nav_wrap .gnb').hide();
//2.1 숨겨진상태면 보이기
$('.m_nav').on('click',function(){
    m_nav_state =!m_nav_state
if(m_nav_state == false){
    $('.m_nav_wrap .gnb').show();
    /* m_nav_state = true */
}else{$('.m_nav_wrap .gnb').hide();
    /* m_nav_state = false */
}
})
//2-2 보이는 상태면 숨기기 