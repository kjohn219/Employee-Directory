(function(){
    $('.form1').hide();
    $('.form2').hide();
    $('.form3').hide();
    $('.form4').hide();
})();

const showIndex = function(){
    $('h1').hide();
    $('.form1').hide();
    $('.form2').hide();
    $('.form3').hide();
    $('.form4').hide();
}
$('.btn1').on(`click`, showIndex);

const showAdd = function(){
    $('h1').hide();
    $('.form1').show();
    $('.form2').hide();
    $('.form3').hide();
    $('.form4').hide();
}
$('.btn2').on('click', showAdd);

const showVerify = function(){
    $('h1').hide();
    $('.form1').hide();
    $('.form2').show();
    $('.form3').hide();
    $('.form4').hide();
}
$('.btn3').on('click', showIVerify);

const showUpdate = function(){
    $('h1').hide();
    $('.form1').hide();
    $('.form2').hide();
    $('.form3').show();
    $('.form4').hide();
}
$('.btn4').on('click', showUpdate);

const showDelete = function(){
    $('h1').hide();
    $('.form1').hide();
    $('.form2').hide();
    $('.form3').hide();
    $('.form4').show();
}
$('.btn5').on('click', showDelete);