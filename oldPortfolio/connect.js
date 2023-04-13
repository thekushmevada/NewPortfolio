var firebaseConfig = {
    apiKey: "AIzaSyCKyBcPMs6YULA_iDDxUxvqbTvSSF5Fp30",
    authDomain: "mevada-kush.firebaseapp.com",
    databaseURL: "https://mevada-kush-default-rtdb.firebaseio.com",
    projectId: "mevada-kush",
    storageBucket: "mevada-kush.appspot.com",
    messagingSenderId: "889025734578",
    appId: "1:889025734578:web:45b7a1e3d1dd434f34a6ab",
    measurementId: "G-BRW3ZE0EPX"
  };
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}