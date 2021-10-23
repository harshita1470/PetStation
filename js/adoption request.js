const database = firebase.firestore()
function adoptionRequest(pet) {
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }else{
            database.collection("requestsMade").add({
                  userId:user.uid,
                  petId:pet.uid
            })
            .then(() => {
                location.replace("petsearh.html")
            })
            .catch((error) => {
               console.log(error)
            });
        }
    });
}
