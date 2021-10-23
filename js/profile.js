
 
 var requestsMade = [];
 var userPets = [];
//  var requestsForUser = [];
 
 
 firebase.auth().onAuthStateChanged((user) => {
     if(user) {
        var doc=firebase.firestore().collection("users").doc(user.uid)
        doc.get().then((userdata) => {        
               // for retreiving all the requests made by current user
               firebase.firestore().collection("requestsMade").where('userId','==',user.uid).get().then((querySnapshot) => {
                querySnapshot.docs.forEach((doc) => {
                    requestsMade.push(doc.data())
                    console.log(doc.data());
                })

                firebase.firestore().collection("pets").where('ownerId','==',user.uid).get().then((querySnapshot) => {
                    querySnapshot.docs.forEach((doc) => {
                        console.log(doc.data());
                        userPets.push(doc.data())
                    })

                    renderData()

                   });

               });
    
    
               // for retreiving all the pets registered by current user
        
    
    
               // for retreiving all the requests for current user's pets
            //    firebase.firestore().collection("requestsMade").get().then((querySnapshot) => {
            //     querySnapshot.docs.forEach((doc) => {
            //         var pet=doc.data().petId
            //         var owner=firebase.firestore().collection("Pets").doc(pet)
            //         owner.get().then((pet) => {
            //            if(user.uid==pet.ownerId) {
            //                console.log(doc.data())
    
            //            }
            //            else {
    
            //            }
            //         })
            //         .catch((error) => {
            //             console.log(error)
            //         });
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
            //    });
               
        })
        .catch((error) => {
            console.log(error)
        });

     }
     else {
        console.log("data does not exist")
        location.replace("index.html")
    }
});

function logout(){
    firebase.auth().signOut()
    location.replace("index.html")
}

function renderData() {
    // yahan code likh do
    // sirf userPets ka data show karna
    
}
