(function(){
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
})();

const showIndex = function(){
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
    buildlist(employeeList);
}
$('.btn1').on(`click`, showIndex);

const showAdd = function(){
    $('h1').addClass("d-none");
    $('#form1').removeClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
}
$('.btn2').on('click', showAdd);

const showVerify = function(){
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').removeClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
}
$('.btn3').on('click', showVerify);

const showUpdate = function(){
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').removeClass("d-none");
    $('#form4').addClass("d-none");
}
$('.btn4').on('click', showUpdate);

const showDelete = function(){
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').removeClass("d-none");
}
$('.btn5').on('click', showDelete);

const buildlist = function(arrayName){
    for (let i = 0; i < arrayName.length; i++) {
    $(".List").append(`<li>${arrayName[i].name}, ${arrayName[i].officeNum}, ${arrayName[i].phoneNum}</li>`);    
}
}