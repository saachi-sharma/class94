var firebaseConfig = {
  apiKey: "AIzaSyDZGGiLuUF6H_Vb6Kq9zEXFnkQ7P8kbHCY",
  authDomain: "kwitter-app-6fd14.firebaseapp.com",
  databaseURL: "https://kwitter-app-6fd14-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-6fd14",
  storageBucket: "kwitter-app-6fd14.appspot.com",
  messagingSenderId: "457930501354",
  appId: "1:457930501354:web:80d52f2fdb83cbd3f8fb93",
  measurementId: "G-3ND8FE1F5L"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    
}
