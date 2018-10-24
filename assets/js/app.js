//Initially hides all the forms
(function () {
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
})();

//Hides necessary forms and once onclick is 
//initiated it shows the employee list 
const showIndex = function () {
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
    buildlist(employeeList);
}

//Hides all the forms exept the add form, once onclick is
//initiated it should show list with added name 
const showAdd = function () {
    $('h1').addClass("d-none");
    $('#form1').removeClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
}

//Hides all the forms except to remove a name
const showVerify = function () {
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').removeClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').addClass("d-none");
}

// //Hides all the forms except to update a name 
const showUpdate = function () {
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').removeClass("d-none");
    $('#form4').addClass("d-none");
}

// //Hides all forms except to remove someone
const showDelete = function () {
    $('h1').addClass("d-none");
    $('#form1').addClass("d-none");
    $('#form2').addClass("d-none");
    $('#form3').addClass("d-none");
    $('#form4').removeClass("d-none");

}
//builds the list for the view
const buildlist = function (arrayName) {
    let newList = ''
    for (let i = 0; i < arrayName.length; i++) {
        newList += `<li>${arrayName[i].name}, ${arrayName[i].officeNum}, ${arrayName[i].phoneNum}</li>`;
    }

    $(".List").append(newList);
}

const addList = function () {
    const nameVal = $('#addName').val();
    const officeVal = $('#addON').val();
    const numVal = $('#Number').val();
    const newInfo = {
        name: nameVal,
        officeNum: officeVal,
        phoneNum: numVal
    };
    employeeList.push(newInfo);
}
// onClick add the contact to array, clear html list, redraw list
$('#btnAdd').on('click', function () {
    addList();
    $('.List').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.List').append(`<li>${employeeList[i].name},${employeeList[i].officeNum},${employeeList[i].phoneNum}</li>`);
    };
});


//onClick verify name

function findObjectByName(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

const verifyList = function () {
    const searchVal = $('#searchName').val();
    const results = findObjectByName(employeeList, "name", searchVal)

    if (results) {
        $('.List').text('Yes')
    }
    else {
        $('.List').text('No')
    }
}
$('#btnSearch').on('click', verifyList)




//onClick update name
const updateList = function () {
    const searchUpdateVal = $('#updateName').val();
    const resultsUpdates = findObjectByName(employeeList, "name", searchUpdateVal)
    if (resultsUpdate) {
        $('.List').text('Yes')
    }
    else {
        $('.List').text('There is no person by that name')
    }
}
$('#btnSearch').on('click', updateList)


//onClick delete name
const deleteList = function () {
    const searchDeleteVal = $('#deleteName').val();
    const resultsDelete = findObjectByName(employeeList, "name", searchDeleteVal)
    if (resultsDelete) {
        $('.List').text('Yes')
    }
    else {
        $('.List').text('There is no person by that name')
    }
}
$('#btnSearch').on('click', deleteList)


//Buttons for view
$('.btn1').on(`click`, showIndex);

// //Button for add
$('.btn2').on('click', showAdd);

// //Button for verify
$('.btn3').on('click', showVerify);

// //Button for update
$('.btn4').on('click', showUpdate);

// //Button for delete
$('.btn5').on('click', showDelete);

//Button once in add to actualy add a name and ifo
$('.btn6').on('click', addList);

//Button once in search to actualy search a name and ifo
$('.btn7').on('click', verifyList);

//Button once in update to actualy update a name and ifo
$('.btn8').on('click', updateList);

//Button once in delete to actualy delet name and ifo
$('.btn9').on('click', deleteList);

