const loginfunc= document.getElementById('loginButton');
loginfunc.addEventListener('click', login);

async function login(e){
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( () => {
        location.replace("../userProfile.html")
    })
    .catch((error)=>{
        console.log(error)
    });
}