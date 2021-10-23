
 firebase.auth().onAuthStateChanged((user) => {
    var doc=firebase.firestore().collection("users").doc(user.uid)
    doc.get().then((userdata) => {
           if(userdata.exists) {
               console.log(userdata.data().name)
           }
           else {
               console.log("data does not exist")
           }
           console.log(user.uid)
           firebase.firestore().collection("requestsMade").where('userId','==',user.uid).get().then((querySnapshot) => {
            console.log(querySnapshot.docs)
            querySnapshot.docs.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
            })
            .catch((error) => {
                console.log(error)
            })
        });
           
    })
    .catch((error) => {
        console.log(error)
    });

});

const logoutfunc= document.getElementById('logoutButton');
logoutfunc.addEventListener('click', logout);

function logout(){
    firebase.auth().signOut()
    location.replace("index.html")
}
