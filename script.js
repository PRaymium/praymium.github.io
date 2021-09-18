var preview_logo = document.getElementsByClassName('pre-logo');
var preview_logo_bg = document.getElementsByClassName('pre-logo-container');

window.onload = function()
{
    preview_logo[0].classList.add('active');
    preview_logo_bg[0].classList.add('active');
}

function phoneCopy()
{
    navigator.clipboard.writeText("+7 920 243 90 97");
}

function emailCopy()
{
    navigator.clipboard.writeText("Jokersli@mail.ru");
}

