var firebaseConfig = {
    apiKey: "AIzaSyCwH62PnK49guL6CC_GmhpljmhoU5w8WkU",
    authDomain: "practice-c94-14d63.firebaseapp.com",
    databaseURL: "https://practice-c94-14d63-default-rtdb.firebaseio.com",
    projectId: "practice-c94-14d63",
    storageBucket: "practice-c94-14d63.appspot.com",
    messagingSenderId: "263654234550",
    appId: "1:263654234550:web:c2f0d4beea288617068917"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");  


 function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html"; 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
