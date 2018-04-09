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

$('.ui.radio.checkbox')
  .checkbox();

// New Firebase
var resourceDB = firebase.database().ref('resource-tip');
var userDB = firebase.database().ref('userInfo');
//var userDB = firebase.database().ref('users');
  // Add a New Item
  $("#userInfo").submit(function(event) {
//      event.preventDefault();
    // Get the form data
      console.log(document.getElementById('firstname').value)
      console.log("hello")
    userDB.push({
        'firstname': $('#firstname').val(),
        'lastname': $('#lastname').val(),
        'lastname': document.getElementById('lastname').val(),
        'email': document.getElementById('email').val(),
        'bank': document.getElementById('bank').val(),
        'gender':document.getElementById('gender').val(),
           'state':document.getElementById('state').val(),
         'zipcode': document.getElementById('zipcode').val(),
        'frequency': document.getElementById('frequency').val(),
      'causes': document.getElementById('causes').val(),
        'comments': document.getElementById('comments').val(),
            'tipTime': Date.now()
    }); 
    console.log("sent");
    userInfo.reset();
//      resourceDB = firebase.database().ref('userInfo');
//      resourceRef = resourceDB.orderByChild('tipTime');

  });



