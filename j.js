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
  room_name=localStorage.getItem("room_name");
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 //Inicia código
    console.log(firebase_message_id);
    console.log(message_data);
    names = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + names + "<img class='user_tick' src='https://th.bing.com/th/id/OIP.IvrhFPyK8vh_wdsfG7E3FgHaHa?rs=1&pid=ImgDetMain' width='30'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML +=row;
    //Finaliza código
 } });  }); }
getData();
function send()
{  msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name: user_name,
       message: msg,
       like: 0
 });
 document.getElementById("msg").value="";
}
function r()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="html.html";
  }
  function updateLike(message_id)
  {
button_id=message_id;
like=document.getElementById(button_id).value;
update_like=Number(like)+1;
console.log(update_like);
firebase.database().ref(room_name).child(message_id).update({
   like:update_like
});
  }