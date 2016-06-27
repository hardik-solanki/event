// (function() {
//   var rotate, timeline;

//   rotate = function() {
//     return $('.s_card:first-child').fadeOut(400, 'swing', function() {
//       return $('.s_card:first-child').appendTo('.s_container').hide();
//     }).fadeIn(400, 'swing');
//   };

//   timeline = setInterval(rotate, 1200);

//   $('body').hover(function() {
//     return clearInterval(timeline);
//   });

//   $('.s_card').click(function() {
//     return rotate();
//   });

// }).call(this);
