
$(document).ready(function () {
    clearform();
});


function clearform() {
   
    $("#E_Roll").val('');
    $('#E_Roll').trigger('change');
    $("#E_Class").val('');
    $('#E_Class').trigger('change');
    $("#E_Section").val('');
    $('#E_Section').trigger('change');
    $("#E_Staff").val('');
    $('#E_Staff').trigger('change');
    $('#E_Startdate').val('');
    $('#E_Enddate').val('');


}

function Student_Enrolment() {
    debugger;
    //preventDefault();

    
    var rl = $('#E_Roll option:selected').val();
    var cl = $('#E_Class option:selected').val();
    var sec = $('#E_Section option:selected').val();
    var st = $('#E_Staff option:selected').val();
    var date1 = $('#E_Startdate').val();
    var date2 = $('#E_Enddate').val();

    if (rl == "") {
        ShowError("Please Enter  Roll Number");
        return;
    }
    if (cl == "") {
        ShowError("Please Enter Class");
        return;
    }
    if (sec == "") {
        ShowError("Please Enter Section");
        return;
    }
    if (st == "") {
        ShowError("Please Enter Incharge Name");
        return;
    }
    if (date1 == "") {
        ShowError("Please Enter StartDate ");
        return;
    }

    if (date2 == "") {
        ShowError("Please Enter Enddate");
        return;
    }
   

    $.ajax({
        url: "/Students/Student_Enrolment",
        type: "Post",

        data: {
            Stud_Id: rl,
            Class_Id: cl,
            Section_Id: sec,
            Staff_Id: st,
            Session_Start: date1,
            Session_End: date2,
            

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