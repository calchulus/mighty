$('.ui.dropdown')
  .dropdown();
$('.ui.radio.checkbox')
  .checkbox()
;
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

// New Firebase
var resourceDB = firebase.database().ref('userInfo');
var userDB = firebase.database().ref('users');
var first =  
  // Add a New Item
  $("#userInfo").submit(function(event) {
      event.preventDefault();
    // Get the form data
      console.log(document.getElementById('firstname').value)
    resourceDB.push({

        'firstname': $('#firstname').val(),
        'lastname': $('#lastname').val()
////        document.getElementById('firstname').value,
//        'lastname': document.getElementById('lastname').value,
//        'email': document.getElementById('email').value,
//        'bank': document.getElementById('bank').value,
//        'gender':document.getElementById('gender').value,
//           'state':document.getElementById('state').value,
//         'zipcode': document.getElementById('zipcode').value,
//        'frequency': document.getElementById('frequency').value,
//      'causes': document.getElementById('causes').value,
//        'comments': document.getElementById('comments').value
            'tipTime': Date.now(),  
    }); 
    console.log("sent");
    resourceformTip.reset();
      resourceDB = firebase.database().ref('userInfo');
      resourceRef = resourceDB.orderByChild('tipTime');

  });


