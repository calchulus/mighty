//// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyB2MVaewZFZQFZBDuf1ab2zeH8kxRwS6vs",
//    authDomain: "mightydeposits.firebaseapp.com",
//    databaseURL: "https://mightydeposits.firebaseio.com",
//    projectId: "mightydeposits",
//    storageBucket: "mightydeposits.appspot.com",
//    messagingSenderId: "475267345622"
//  };
//  firebase.initializeApp(config);
//
//// New Firebase
//var userDB = firebase.database().ref('users');
//
//  // Add a New Item
//  $("#userInfo").submit(function(event) {
//      event.preventDefault();
//    // Get the form data
//      
//    userDB.push({
//        'firstname': $('text#firstname').val(),
//        'lastname': $('text#lastname').val(),
//        'email': $('text#email').val(),
//        'gender':$('dropdown#gender').val(),
//           'state':$('dropdown#state').val(),
//         'zipcode': $('text#zipcode').val(),
//        'frequency': $('radio#requency').val(),
//      'category': $('select#category').val()
//    });
//    console.log("sent");
//    resourceformTip.reset();
////      resourceDB = firebase.database().ref('resource-tip');
////      resourceRef = resourceDB.orderByChild('tipTime');
//
//  });
//
////$('.ui.dropdown').dropdown({
////  allowAdditions: true,
////}); 
//
//$('.ui.dropdown')
//  .dropdown();