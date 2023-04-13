const firebaseConfig = {
    apiKey: "AIzaSyDSOvNqv_VcmdwjgJkoxGAJfs4NmYcreOY",
    authDomain: "product-details-1.firebaseapp.com",
    databaseURL: "https://product-details-1-default-rtdb.firebaseio.com",
    projectId: "product-details-1",
    storageBucket: "product-details-1.appspot.com",
    messagingSenderId: "1083750878949",
    appId: "1:1083750878949:web:a0bf81ba15a7dfa5fa4e0c",
    measurementId: "G-WDZPS9JXCD"
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
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}


