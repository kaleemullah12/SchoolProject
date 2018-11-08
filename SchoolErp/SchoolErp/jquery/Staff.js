
$(document).ready(function () {
    clearform();
});


function clearform() {
    $('#S_Name').val('');
    $('#S_CNIC').val('');
    $('#S_DOB').val('');
    $('#S_Cellnumb').val('');
    $('#S_Salary').val('');
    $('#gender').val('');
    $("#S_Designation").val('');
    $('#S_Designation').trigger('change');
    $("#S_Qualification").val('');
    $('#S_Qualification').trigger('change');
    $('#S_Detail').val('');
    $('#S_Address').val('');


}

function AddStaff() {
    debugger;
    //preventDefault();

    var name = $('#S_Name').val();
    var cnic = $('#S_CNIC').val();
    var dob = $('#S_DOB').val();
    var cellnumb = $('#S_Cellnumb').val();
    var salary = $('#S_Salary').val();
    var gender = $("input[name='Gender']:checked").val();
    var Des = $('#S_Designation option:selected').val();
    var Qualif = $('#S_Qualification option:selected').val();
    var Det = $('#S_Detail').val();
    var address = $('#S_Address').val();

    if (name == "") {
        ShowError("Please Enter  Name");
        return;
    }
    if (cnic == "") {
        ShowError("Please Enter CNIC");
        return;
    }
    if (dob == "") {
        ShowError("Please Enter DOB");
        return;
    }
    if (cellnumb == "") {
        ShowError("Please Enter CELL NUMBER");
        return;
    }
    if (salary == "") {
        ShowError("Please Enter Salary");
        return;
    }

    if (Des == "") {
        ShowError("Please Enter Designation");
        return;
    }
    if (gender == "") {
        ShowError("Please Enter Gender");
        return;
    }
    if (Qualif == "") {
        ShowError("Please Enter Qualification");
        return;
    }
    if (address == "") {
        ShowError("Please Enter Address");
        return;
    }
    if (Det == "") {
        ShowError("Please Enter Detail");
        return;
    }

   



    $.ajax({
        url: "/Staff/AddStaff",
        type: "Post",

        data: {
            Name: name,
            CNIC: cnic,
            DOB: dob,
            Address: address,
            Cell_Number: cellnumb,
            Salary: salary,
            Qualification_Id: Qualif,
            Designation_Id: Des,
            Detail: Det,
            Gender: gender,

        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        datatype: "json",
        success: function (data) {
            if (data.msg == "save") {
                ShowSuccess('Save SuccessFully');
                clearform();
            }
        },
        error: function (error) {
            ShowError('Error in saving');
        },

    });
}
