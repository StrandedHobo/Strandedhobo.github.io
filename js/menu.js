$(document).ready(function(){
  $('a').click(function(){
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active')
  });

  var $a = $('.a'),
  $b = $('.b'),
  $c = $('.c'),
  $d = $('.d'),
  $home = $('.home'),
  $aboutme = $('.about-me');
  $gallery = $('.gallery');
  $contact = $('.contact');

  $a.click(function(){
    $home.fadeIn    ();
    $aboutme.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
  });
  $b.click(function(){
    $aboutme.fadeIn ();
    $home.fadeOut   ();
    $gallery.fadeOut();
    $contact.fadeOut();
  });
  $c.click(function(){
    $gallery.fadeIn ();
    $home.fadeOut   ();
    $aboutme.fadeOut();
    $contact.fadeOut();
  });
  $d.click(function(){
    $contact. fadeIn();
    $aboutme.fadeOut();
    $home.fadeOut   ();
    $gallery.fadeOut();
  });
});
