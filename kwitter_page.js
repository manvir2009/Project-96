//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDdH0Ob2lcvFqdoCc2Uiiwx7qBzTmgIouc",
      authDomain: "kwitter-ead55.firebaseapp.com",
      databaseURL: "https://kwitter-ead55-default-rtdb.firebaseio.com",
      projectId: "kwitter-ead55",
      storageBucket: "kwitter-ead55.appspot.com",
      messagingSenderId: "322735934530",
      appId: "1:322735934530:web:b4f8a253885bef957e31db"
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
