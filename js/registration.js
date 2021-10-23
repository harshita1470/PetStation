let userid;

firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            console.log(user.uid)
            userid=user.uid
        }
        else {
            location.replace("index.html")
            console.log("logged out")
        }
    });

const registrationfunc= document.getElementById('submitButton');
registrationfunc.addEventListener('click', register);

function register(e) {
    e.preventDefault()
    const name=document.getElementById('name').value
    const age=document.getElementById("age").value
    const breed=document.getElementById("breed").value
    const weight=document.getElementById("weight").value
    const description=document.getElementById("description").value
    firebase.firestore().collection("pets").add({
        name:name,
        description:description,
        ownerId:userid,
        age:age,
        breed:breed,
        weight:weight
    })
    .then(() => {
        alert("Your pet has been registered for adoption. Interested users will be sending the request.")
        location.replace("userProfile.html")
    })
    .catch((error) => {
        console.log(error)
   });
}
