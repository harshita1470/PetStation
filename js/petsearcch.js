
var pets = [
];

let userid;

firebase.auth().onAuthStateChanged((user) => {
    if(!user){
        location.replace("index.html")
    }
    else {
        userid=user.uid
        firebase.firestore().collection("pets").get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                var value = {
                    name : doc.data().name,
                    breed : doc.data().breed,
                    description : doc.data().description,
                    age : doc.data().age,
                    weight : doc.data().weight,
                    petId : doc.id,
                    ownerId : doc.data().ownerId
                }
                pets.push(value)
            })
            .catch((error) => {
                console.log(error)
            });
        })
        .catch((error) => {
            console.log(error)
            console.log(pets)
            mapping()
        });
    }
});


const petCardsContainer = document.getElementById('petCardsContainer');


function mapping() {
    pets.map(pet => {
        const cardTemplate = `<div class="col-12 col-md-4 petCardContainer p-2 mb-3">
        <!-- pet card -->
        <div class="card petCard">
            <img src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class=" petImg card-img-top img-fluid" alt="dog image">
            
            <div class="card-body">
                <h5 class="card-title">${pet.name.toUpperCase()}</h5>
                <p class="card-text">${pet.description}</p>
                <button type="submit" id=${pet.petId} class="btn btn-outline-success" name="requestBuuton" onClick="adoptionRequest(this)" >Adopt Me</button>
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


// const requestfunc= document.getElementById('loginButton');
// requestfunc.addEventListener('click', adoptionRequest(requestfunc.id));


function adoptionRequest(petId) {
    firebase.firestore().collection("requestsMade").add({
        userId:userid,
        petId:petId.id
     })
     .catch((error) => {
        console.log(error)
    }); 
    alert("Request Made")
    console.log(petId)
  }


