$(document).ready(function() {

  $('a.more').click(function(){
    console.log(this);
    console.log($(this).siblings('.additional'));
    $($(this).parents('.float-box')).toggleClass('expanded');
    return false;
  });
});
