//common js
// 1. nav>gnb
//2. 복제대상을 변수저장 
//3.m_nav_wrap 위 변수 붙여넣기  
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
m_wrap.appendChild(gnbClone)