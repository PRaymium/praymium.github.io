var preview_logo = document.getElementsByClassName('pre-logo');
var preview_logo_bg = document.getElementsByClassName('pre-logo-container');

var contact_email = document.getElementsByClassName('email');
var contact_phone = document.getElementsByClassName('contact-phone');

window.onload = function()
{
    preview_logo[0].classList.add('active');
    preview_logo_bg[0].classList.add('active');
}

contact_email[0].onclick = function()
{
    contact_email[0].select();
    document.execCommand('copy');
}