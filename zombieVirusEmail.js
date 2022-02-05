var receivingEmail = document.getElementById('receivingEmail').value;
var subjectInput = document.getElementById('subjectInput').value;
var bodyInput = document.getElementById('bodyInput').value;
var userEmail = document.getElementById('userEmail').value;
var userPassword = document.getElementById('userPassword').value;

var emailSentMessage = document.createElement('h2');
emailSentMessage.className = 'emailSentMessage';
emailSentMessage.innerHTML = 'Your message has been sent.'

function sendToEmail(){
    if (receivingEmail != '' && bodyInput != '' && userEmail != '' && userPassword != ''){
        Email.send({
        SecureToken: "ad206cc5-43b4-4b33-b9b0-495ed8bbd949",
        To: receivingEmail,
        From: userEmail,
        Subject: subjectInput,
        Body: bodyInput
        })
    } else if (receivingEmail === '' || bodyInput === '' || userEmail === '' || userPassword === ''){
        let emailEmptyMessage = document.createElement('h2');
        emailEmptyMessage.className = "emailError";
        emailEmptyMessage.innerHTML = 'Either an email, password, or body field have been left empty';
        document.getElementById('submitEmail').appendChild(emailEmptyMessage);
    } else {
        let emailErrorMessage = document.createElement('h2');
        emailErrorMessage.className = "emailError";
        emailErrorMessage.innerHTML = "There has been an unknown error";
        div.getElementById('submitEmail').appendChild(emailErrorMessage);
    }
}

/*  Reference code from a personal project:  
    var addedSong = document.createElement('h3')
    addedSong.className = "addedSong";
    addedSong.innerHTML = `${songName} ${songDuration}`;
    document.getElementById('yourSongsList').appendChild(addedSong);  */

/*security token: ad206cc5-43b4-4b33-b9b0-495ed8bbd949
server: smtp.elasticemail.com
Port: 2525*/