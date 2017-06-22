$(document).ready(() => {
  $('body').on('click','img',function(){
      var imgsrc=$(this).attr('src');
      window.open(imgsrc);
  });
});
