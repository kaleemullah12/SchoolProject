
$(document).ready(function () {
    clearform();
});


function clearform() {
    $('#D_Name').val('');
    



}

function AddDesignation() {
    debugger;
    //preventDefault();

    var Des = $('#D_Name').val();
    


    if (Des == "") {
        ShowError("Please Enter Designation");
        return;
    }
    


    $.ajax({
        url: "/Staff/AddDesignation",
        type: "Post",

        data: {
            Name: Des,
            


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