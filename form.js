// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD__0sfP-c4tCStFArKsl3MyR2Y8WjRFP8",
    authDomain: "fantasy-crypto.firebaseapp.com",
    databaseURL: "https://fantasy-crypto.firebaseio.com",
    projectId: "fantasy-crypto",
    storageBucket: "fantasy-crypto.appspot.com",
    messagingSenderId: "1066538764682"
  };
firebase.initializeApp(config);

// New Firebase
var resourceDB = firebase.database().ref('userInfo');
var userDB = firebase.database().ref('users');


//var chatref = chatDB.limitToLast(2000);
//var resourceRef = resourceDB.orderByChild('tipTime');//limit to last

//// Form as a JSON
//$(document).ready(function() {
//  var count = 0;
//   // Check for change & list Items
//resourceRef.once("value")
//  .then(function(snapshot) {
//    snapshot.forEach(function(childSnapshot) {
//      // Get the Key & Child Data
//    var key = childSnapshot.key;
//    var tipsArray = childSnapshot.val();
//      var $container = $('#container');
//      for (var prop in tipsArray){
//        var str = '';
//        
//        var tipTime = moment.utc(tipsArray.tiptime).local().startOf('hour').fromNow();
//          count = count + 1; 
//              str += '<li style="padding-bottom: 14px"><a style=" display:block; text-decoration: none;" href=' + tipsArray.url +
//    '<div class="ui card"> <div class="content"> <div class="header" style="font-weight: bold; font-size: 1.28571429em; margin-top: -0.21Z425em; margin-bottom: 0.1em; line-height: 1.28571429em; color: rgba(0, 0, 0, 0.85) !important" >' +
//      tipsArray.tip + ' </div> <p style="font-size: 0.6em;" class="ui  blue  basic label">' + tipsArray.category + '</p> <p style="font-size: 0.6em;" class="ui  blue  basic label">' + tipTime + '</p> <div class="meta"> <p class="description">' + tipsArray.description + '</p></div></div></div></a></li>';  
////    
////              str.attr('link': tipsArray.url, 'title': tipsArray.tip, 'category': tipsArray.url, 'description': tipsArray.description);
//        }
//    
//      // Create the list in HTML
//      $('.list').append(str);
//    });
//        var display = count/5 + 1;
//         document.getElementById("demo").innerHTML=display + " results";
//  });
////var codepenList = new List('test-list', { 
////  valueNames: ['name', 'attr']
////});
////    
//    
//      var aList = new List('origlist', { 
//  valueNames: ['name', 'attr']
//});
//  var monkeyList = new List('mylist', { 
//  valueNames: ['content', 'header', 'label', 'description']
//});
    
  // Add a New Item
  $("#resourceformTip").submit(function(event) {
      event.preventDefault();
    // Get the form data
      
     if ($('textarea#url').val())  {
    resourceDB.push({
        'firstname': $('text#firstname').val(),
        'lastname': $('text#lastname').val(),
        'email': $('text#email').val(),
        'gender':$('dropdown#gender').val(),
           'state':$('dropdown#state').val(),
         'zipcode': $('text#zipcode').val(),
        'frequency': $('radio#requency').val()
      'category': $('select#category').val(),
      'tip': $('textarea#tip').val(),
      'url' : $('textarea#url').val(),
      'description' : $('textarea#description').val(),
      'tiptime': Date.now()
    });
     }
      else {
          chatDB.push({
             'message' : $('textarea#description').val(), 
                 'tiptime': Date.now()
          });
      }
      

    console.log("sent");
    resourceformTip.reset();
      resourceDB = firebase.database().ref('resource-tip');
      resourceRef = resourceDB.orderByChild('tipTime');

  });
});



//$('.ui.dropdown').dropdown({
//  allowAdditions: true,
//}); 



//    trying to do sorting by A-Z
//     writer choice, number of likes 
//    ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
//  console.log(snapshot.key);
//});
//});

//$.expr[':'].info = function(a,i,m){  
//  return (a.getAttribute('data-icon')
//};

$('.ui.dropdown')
  .dropdown()
;


var $search = $('#search');
$search.on('keyup', function () {
  var filter = $(this).val();  
  if (filter) {
    var $matches = $($container).find('li:icon(' + filter + ')');    
    $('ul', $container).not($matches).hide();
    $matches.show(); 
        	 
  }
  else {
        	var size = $('ul').find('li').length;    
    $('li', $container).show();
  }  
  

    
    
  return false;
});