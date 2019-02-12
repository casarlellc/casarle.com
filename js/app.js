$(function() {
  $('.hide').hide().removeClass('hide');

  $('a[href^="mailto:"]').each(function() {
    var element = $(this);
    var decoded = decodeURIComponent(element.attr('data-email'));
    element.html(element.html().replace(/{email}/, decoded));
    element.attr('href', element.attr('href').replace(/{email}/, decoded));
  });

  $('#languages li a').click(function(e) {
    var language = $(this).parent().attr('class').split(' ').shift();
    $('#languages li').removeClass('active');
    $('.body').hide();
    $('.' + language).addClass('active').show();
    return false;
  });

  $('#sidebar-en li a').click(function(e) {
    var id = $(this).attr('href').substr(1);
    $('.en-page').hide();
    $('#en-' + id).show();
    return true;
  });
});
