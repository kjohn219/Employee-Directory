const addContact = function() {
    const nameVal = $('#addName').val();
    const officeVal = $('#addON').val();
    const numVal = $('#Number').val();
    const objNewEmpl = {
        name: nameVal,
        officeNum: officeVal,
        phoneNum: numVal
    };
    employeeList.push(objNewEmpl);

   

}

$('#btnAdd').on('click',addContact);


// onClick add the contact to array, clear html list, redraw list
$('#btnAdd').on('click', function(){
    addContact();
    $('.List').empty();

    for(let i = 0; i < employeeList.length; i++) {
        $('.List').append(`<li>${employeeList[i].name},${employeeList[i].officeNum},${employeeList[i].phoneNum}</li>`);
    };
});

//runtime
addContact();