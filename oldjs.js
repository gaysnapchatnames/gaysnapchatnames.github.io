// Hides the new post buttons when clicked
$(document).ready(function() {
    $("#submitButton").click(function(){
        var newPostStart =   "<tbody><tr id='postBox'><td id='userInfo'>";
        var newPostInner =   "</td><td id='postContent'><div id='timeCounter'>";
        var newPostComment = "</div><div id='postMessage'>"
        var newPostOuter =   "</div> </td></tr></tbody>"
        var username = $("#usernameBox").val();
        var comment = $("#messageBox").val();
        var currentDate = new Date();            
        var timeSent = "Posted on " + currentDate.getDay() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear() + " at " + currentDate.getHours() + ":" + currentDate.getMinutes() ;
        var newtbody = newPostStart + username + newPostInner + timeSent + newPostComment + comment + newPostOuter;
        
//        if (username.length == 0 || comment.length == 0) {
//            alert("You need to fill in the username and comment!");
//            return;
//        }
                        
        $(".postsTable").append(newtbody)

    });
});

