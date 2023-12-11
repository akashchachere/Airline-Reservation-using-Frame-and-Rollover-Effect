const name = document.getElementById('name')
const password = document.getElementById("password")
const form = document.getElementById("form")
const error= document.getElementById('error')


form.addEventListener('submit' , (e) => {

    let message =[]

    if (name.value != 'akash' && password.value != 'aka@as'||
        name.value != 'candidate1' && password.value != '123@as' ||
        name.value != 'candidate2' && password.value != '456@as'||
        name.value != 'candidate3' && password.value != '789@as')
        {
            alert("Invalid Login")
        }

    

    if(message.length >= 0)
    {
        e.preventDefault(e)
        error.innerText = message.join(',')
    }
})

function login (r) 
{
    if (name.value === 'akash' && password.value === 'aka@as')
    {   
        alert("login successful")
        window.open("Emreserve.html")
    }

    if (name.value == 'cadidate1' && password.value == '123@as')
    {
        alert('login successful')
        window.open("lureserve.html")
    }

    if (name.value == 'candidate2' && password.value == '456@as')
    {
        alert('login successful')
        window.open("Etreserve.html")
    }

    if (name.value == 'candidate3' && password.value == '789@as')
    {
        alert('login successful')
        window.open("Qareserve.html")
    }
}

//function num(input)
{
    var n = /[^a-z]/gi 
    input.value = input.value.replace(n,"")
}
