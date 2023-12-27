var firebaseConfig = {
  apiKey: "AIzaSyDAbtE8J-6xqiv_Ow5Bn1-pBIzCInqhnPw",
  authDomain: "no-c-bcaac.firebaseapp.com",
  databaseURL: "https://no-c-bcaac-default-rtdb.firebaseio.com",
  projectId: "no-c-bcaac",
  storageBucket: "no-c-bcaac.appspot.com",
  messagingSenderId: "526845918135",
  appId: "1:526845918135:web:935631678af9125e618632",
  measurementId: "G-X1BX4S1C83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="H O L A "+user_name;
  function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "m.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="m.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }
  function salir()
  {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
  }
