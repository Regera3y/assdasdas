
const firebaseConfig = {
    apiKey: "AIzaSyBQJyC5LGdbd-_wav4ahHCVGRiOfQwiUX8",
    authDomain: "turtle-17f20.firebaseapp.com",
    databaseURL: "https://turtle-17f20-default-rtdb.firebaseio.com",
    projectId: "turtle-17f20",
    storageBucket: "turtle-17f20.appspot.com",
    messagingSenderId: "936957448523",
    appId: "1:936957448523:web:36aa483c554df6164d18ce",
    measurementId: "G-6MY0F5J8HX"
  };

  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}