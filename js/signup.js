
const signupp= document.getElementById('signupButton');
signupp.addEventListener('click', signUp);

async function signUp(e) {
    console.log("entered")
    e.preventDefault()
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
   // const repassword = document.getElementById("repassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
        console.log(email)
        return firebase.firestore().collection("users").doc(cred.user.uid).set({
            email:email,
            password:password,
            name:name,
            // address:address,
            // phone:phone
        })
        .then((docRef) => {
            alert("Signup successful")
        })
        .then(()=>{
            location.replace("userProfile.html")
        })
        .catch((error) => {
            alert("data not saved")
        });
    })
    .catch((error) => {
        console.log(error)
    });
}


// function signup() {
//     const code = document.getElementById("code");
//     confirmationR.confirm(code).then((result) => {
//     // User signed in successfully.
//     const user = result.user;
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     // const confpassword=document.getElementById("confpassword").value
//     // const name=document.getElementById("name").value
//     // const address=document.getElementById("address").value

//     if(password!=confpassword) {
//         document.getElementById("error").innerHTML=`<div>Passworf and Confrim Password are different. Kindly enter same Password!</div>`
//         return
//     }
//     firebase.auth().createUserWithEmailAndPassword(email, password). then((cred) => {
//         return firebase.firestore().collection("users").doc(cred.user.uid).set({
//             email:email,
//             password:password,
//             // name:name,
//             // address:address,
//             // phone:phone
//         })
//         .then((docRef) => {
//             alert("Signup successful")
//         })
//     })
//     .catch((error) => {
//         alert("signup unsuccessful")
//     });
//     })
//     .then(() => {
//         location.replace("home.html")
//     })
//     .catch((error) => {
//        alert("wrong code")
//     });
// }
