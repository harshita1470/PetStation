
 
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

const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', logout);

function renderData() {
    // yahan code likh do
    // sirf userPets ka data show karna
    
}

console.log(userPets);

function renderData() {
    userPets.map(pet => {
        const cardTemplate = `<div class="col-12 col-md-4 petCardContainer p-2 mb-3">
        <!-- pet card -->
        <div class="card petCard">
            <img src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class=" petImg card-img-top img-fluid" alt="dog image">
            
            <div class="card-body">
                <h5 class="card-title">${pet.name.toUpperCase()}</h5>
                <p class="card-text">${pet.description}</p>
                <!-- Modal starts here  -->
    
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pet-${pet.petId}">
                    More Info
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="pet-${pet.petId}" tabindex="-1" aria-labelledby="pet Modal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${pet.name.toUpperCase()}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
        
                            <div class="modal-body">
                                <div class='row mb-2'>
                                    <div class='col-6'><strong>BREED</strong></div>
                                    <div class='col-6'>${pet.breed.toUpperCase()}</div>
                                </div>

                                <div class='row mb-2'>
                                    <div class='col-6'><strong>AGE</strong></div>
                                    <div class='col-6'>${pet.age} yrs</div>
                                </div>

                                <div class='row mb-2'>
                                    <div class='col-6'><strong>WEIGHT</strong></div>
                                    <div class='col-6'>${pet.weight} lbs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- modal ends here -->
    
            </div>
            </div>
        </div>`;
    
    petCardsContainer.innerHTML += cardTemplate;
    });
}
