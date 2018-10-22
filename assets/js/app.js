(function(){
    $(`.form1`).hide;
    $(`.form2`).hide;
    $(`.form3`).hide;
    $(`.form4`).hide;
})();

const showIndex = function(){
    $(`h1`).hide;
    $(`.form1`).hide;
    $(`.form2`).hide;
    $(`.form3`).hide;
    $(`.form4`).hide;
}

const showAdd = function(){
    $(`h1`).hide;
    $(`.form1`).show;
    $(`.form2`).hide;
    $(`.form3`).hide;
    $(`.form4`).hide;
}

const showVerify = function(){
    $(`h1`).hide;
    $(`.form1`).hide;
    $(`.form2`).show;
    $(`.form3`).hide;
    $(`.form4`).hide;
}

const showUpdate = function(){
    $(`h1`).hide;
    $(`.form1`).hide;
    $(`.form2`).hide;
    $(`.form3`).show;
    $(`.form4`).hide;
}

const showDelete = function(){
    $(`h1`).hide;
    $(`.form1`).hide;
    $(`.form2`).hide;
    $(`.form3`).hide;
    $(`.form4`).show;
}