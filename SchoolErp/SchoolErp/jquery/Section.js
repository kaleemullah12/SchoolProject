
$(document).ready(function () {
    clearform();
});


function clearform() {
    $('#S_Name').val('');
   
    $("#S_Class").val('');
    $('#S_Class').trigger('change');
    $("#S_Staff").val('');
    $('#S_Staff').trigger('change');
   


}

function AddSection() {
    debugger;
    //preventDefault();

    var name = $('#S_Name').val();
   
    
    var cl = $('#S_Class option:selected').val();
    var st = $('#S_Staff option:selected').val();
    

    if (name == "") {
        ShowError("Please Enter  Name");
        return;
    }
    if (cl == "") {
        ShowError("Please Enter Class");
        return;
    }
    if (st == "") {
        ShowError("Please Enter Incharge name");
        return;
    }
      
   

    $.ajax({
        url: "/Class/AddSection",
        type: "Post",

        data: {
            Name: name,
            Class_Id: cl,
            Staff_Id: st,
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