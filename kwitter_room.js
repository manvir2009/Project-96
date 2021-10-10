
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
    document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function addroom(){

room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(user_name).update({
      purpose:"adding room name"
      });
localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("Room Name " + Room_names)
row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}