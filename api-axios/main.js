const url = "http://localhost:5500/api"


function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data) 
    } )

    .catch(error => console.error(error))

}

function addNewUser(){
    axios.post(url, newUser )
    .then(response =>{
        console.log(response)

    })
    .catch(error => console.error(error))
}


function getUser(id){
    axios.get(`${url}/${id}`)
    .then( response => {
        
        userName.textContent = response.data.name

        userCity.textContent = response.data.city

        userID.textContent = response.data.id

        userAvatar.src = response.data.avatar

    })
    .catch(error => console.error(error))
}

function updateUser(id, userUptaded){
    axios.put(`${url}/${id}`, userUptaded)
    .then(response => console.log(response))
    .catch(error => console.error(error))

}

const userUptaded ={
    name: "layse",
    avatar: "https://picsum.photos/200/300",
    city: "turiaçu"
}

updateUser(3, userUptaded)

getUsers()
getUser(1)

getUser(3)


const newUser = {
    name: "italo",
    avatar: "https://picsum.photos/200/300",
    city: "São Luis"
}    
addNewUser()