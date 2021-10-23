// document.getElementById("loginForm").addEventListener("submit",(event)=>{
//     event.preventDefault()
// });

// firebase.auth().onAuthStateChanged((user) => {
//     if(!user){
//         location.replace("index.html")
//     }
//     else {
//         firebase.firestore()
//     }
// });


const petCardsContainer = document.getElementById('petCardsContainer');

// pets object
const pets = [
    {
        petName : 'Tom',
        breed : 'Husky',
        description : 'Playful dog',
        age : '3',
        weight : '200'
    },
    {
        petName : 'Buck',
        breed : 'Husky',
        description : 'Playful dog',
        age : '3',
        weight : '200'
    },
];

pets.map(pet => {
    const cardTemplate = `<div class="col-12 col-md-4 petCardContainer p-2 mb-3">
    <!-- pet card -->
    <div class="card petCard">
        <img src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class=" petImg card-img-top img-fluid" alt="dog image">
        
        <div class="card-body">
            <h5 class="card-title">${pet.petName}</h5>
            <p class="card-text">${pet.description}</p>

            <!-- Modal starts here  -->

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                More Info
            </button>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                    ...
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
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

