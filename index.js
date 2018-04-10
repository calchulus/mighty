  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2MVaewZFZQFZBDuf1ab2zeH8kxRwS6vs",
    authDomain: "mightydeposits.firebaseapp.com",
    databaseURL: "https://mightydeposits.firebaseio.com",
    projectId: "mightydeposits",
    storageBucket: "mightydeposits.appspot.com",
    messagingSenderId: "475267345622"
  };
  firebase.initializeApp(config);
$('.ui.dropdown')
  .dropdown();
//$('.ui.radio.checkbox')
//  .checkbox();

// New Firebase
var resourceDB = firebase.database().ref('resource-tip');
var userDB = firebase.database().ref('userInfo');
//var userDB = firebase.database().ref('users');
  // Add a New Item
  $("#userInfo").submit(function(event) {
      event.preventDefault();
    // Get the form data
      console.log("hello")
    userDB.push({
//        'firstname': $('#firstname').val(),
       'firstname': document.getElementById('firstname').value,
        'lastname': document.getElementById('lastname').value,
        'email': document.getElementById('email').value,
        'bank': document.getElementById('bank').value,
        'gender':document.getElementById('gender').value,
           'state':document.getElementById('state').value,
         'zipcode': document.getElementById('zipcode').value,
        'frequency': document.getElementById('frequency').value,
      'causes': document.getElementById('causes').value,
        'comments': document.getElementById('comments').value,
            'tipTime': Date.now()
    }); 
    console.log("sent");
    userInfo.reset();
  });



