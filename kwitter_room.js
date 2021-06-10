
var firebaseConfig = {
      apiKey: "AIzaSyDQrmC6-As1xs9ym7SBL7jPxEp0m3NNrEs",
      authDomain: "kwitter-bc57d.firebaseapp.com",
      databaseURL: "https://kwitter-bc57d-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc57d",
      storageBucket: "kwitter-bc57d.appspot.com",
      messagingSenderId: "934073008975",
      appId: "1:934073008975:web:36882f8486e09d419d3b3a",
      measurementId: "G-7E69RSF13X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name'  id = "+Room_names+ " onclick = 'redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 

    //End code
      });});}
getData();





    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function  addRoom()
    {
        room_name = document.getElementById("room_name").value

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"

          });

          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";

    }

    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name" , name);
          window.location = "kwitter_page.html";
    }

    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

   
    