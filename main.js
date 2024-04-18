// 最大の高さを計算
function setEqualHeight(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;

  elements.forEach((element) => {
    const height = element.clientHeight;
    maxHeight = Math.max(maxHeight, height);
  });

  elements.forEach((element) => {
    element.style.height = `${maxHeight}px`;
  });
}

// ウィンドウ幅が480px以下の場合には実行しない
if (window.innerWidth > 481) {
  setEqualHeight('.flow-wrap__con__block');
}


//スムーススクロール
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top - 50;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 400); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

/*ハンバーガーメニュー*/
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 1025) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
}); 
$('a[href^="#"]').on('click', function() {
  $('.drawer').click(); 
})


