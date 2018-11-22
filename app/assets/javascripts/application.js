// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
$(document).ready(function(){
  $('.container ul:first > li').next().hide();
  $('.container ul > li:first').addClass('active').next().show();
  $('.container ul:first > li').click(function(){
    $('.container ul:first > li').removeClass('active').next().hide();
    $(this).addClass('active').next().show();

});
$('.email_hide').siblings().fadeOut(0);
  $('#img_avatar').hover(
    function() {
      $('.list-nav').stop().slideDown(200);
    },
    function() {
      $('.list-nav').stop().delay(4000).slideUp(200);
    })

});
function revele (id) {
   var email_id = id
   $('#email_' + email_id).children().fadeIn(500);
   $('#email_' + email_id).children().first().children().css("fontSize", 25);
   $('#email_' + email_id).children().first().children().attr('class', "btn btn-primary");
 }
