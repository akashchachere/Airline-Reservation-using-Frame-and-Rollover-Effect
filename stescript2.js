const mail=document.getElementById('mail')
const mob=document.getElementById("mob")
const form1=document.getElementById('form1')
const error1=document.getElementById('error')

form1.addEventListener('submit' ,(e) =>{

    let mess=[]

    if(mob.value.length<=0)
    {
        alert("Please input mobile number")
    }

    if (mob.value.length>=16) 
    {
        mess.push("Maximum mobile length is 15 numbers")    
    }

    if (
    mail.value !=="" && mob.value !== ""
    )
    {
        mess.push("Password sent successfully")
    }

    if(mess.length >= 0){
        e.preventDefault(e)
        error1.innerText = mess.join(' , ')
    }


})

function numberonly(input)
{
    var n = /[^0-9]/gi
    input.value = input.value.replace(n,"")
}

//function s()
{
    if(
        mail.value !=="" && mob.value !== ""
    )
    confirm("Your password will be sent to your mobile no. you just entered")
}
