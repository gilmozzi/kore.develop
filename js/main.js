const spyEls = document.querySelectorAll('div.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 스크롤 내릴때에 트리거의 시작 지점
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, 
    random(0, 1.5), 
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 10);
