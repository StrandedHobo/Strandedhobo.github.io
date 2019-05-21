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
  $submitted = $('.submitted');
  $submitbutton = $('.submitbutton');

  $a.click(function(){
    $home.fadeIn    ();
    $aboutme.fadeOut();
    $gallery.fadeOut();
    $contact.fadeOut();
    $submitted.fadeOut();
  });
  $b.click(function(){
    $aboutme.fadeIn ();
    $home.fadeOut   ();
    $gallery.fadeOut();
    $contact.fadeOut();
    $submitted.fadeOut();
  });
  $c.click(function(){
    $gallery.fadeIn ();
    $home.fadeOut   ();
    $aboutme.fadeOut();
    $contact.fadeOut();
    $submitted.fadeOut();
  });
  $d.click(function(){
    $contact. fadeIn();
    $aboutme.fadeOut();
    $home.fadeOut   ();
    $gallery.fadeOut();
    $submitted.fadeOut();
  });
  $submitbutton.click(function(){
    $contact.fadeOut();
    $submitted.fadeIn();
  });
});
