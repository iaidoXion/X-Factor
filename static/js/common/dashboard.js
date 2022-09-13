
$(document).ready(function(){
//map chart display from setting.json
    if (mapUse.WorldUse == 'block'){
        $('#korea-map, #seoul-map, #seongnam-map').hide();
        $('#world-map').show();
        }
    else if (mapUse.KoreaUse == 'block'){
        $('#world-map, #seoul-map').hide();
        $('#korea-map').show();
        }
    else if (mapUse.AreaUse == 'block'){
        if (mapUse.AreaType == 'seoul-map'){
        $('#world-map, #korea-map, #seongnam-map').hide();
        $('#seoul-map').show();
        }
        else if (mapUse.AreaType == 'seongnam-map'){
        $('#world-map, #korea-map, #seoul-map').hide();
        $('#seongnam-map').show();
        }
    };

//map chart 버튼
    $('#worldBtn').click(function() {
        $('#world-map').show();
        $('#korea-map, #seoul-map, #seongnam-map').hide();
    });

    $('#koreaBtn').click(function() {
        $('#korea-map').show();
        $('#world-map, #seoul-map, #seongnam-map').hide();
    });

    $('#areaBtn').click(function() {
        if (mapUse.AreaType == 'seoul-map'){
        $('#world-map, #korea-map, #seongnam-map').hide();
        $('#seoul-map').show();
        }
        else if (mapUse.AreaType == 'seongnam-map'){
        $('#world-map, #korea-map, #seoul-map').hide();
        $('#seongnam-map').show();
        }
    });

});


// swiper 배너
$(document).ready(function () {

  var mySwifer = new Swiper('.swiper-container', {
      slidesPerView: 8,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      loop: true,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          520: {
              slidesPerView: 2,
          },
          950: {
              slidesPerView: 3,
          },
          1000: {
              slidesPerView: 4,
          },
          1700: {
              slidesPerView: 6,
          },
          1920: {
            slidesPerView: 8,
          },
      },
  })
    $('.swiper-slide').hover(function(){
        mySwifer.autoplay.stop();
     }, function(){
        mySwifer.autoplay.start();
    });
});


