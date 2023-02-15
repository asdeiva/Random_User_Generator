const url = "https://randomuser.me/api/";

let info = document.getElementById('useradinfo')
let usrImg = document.getElementById('usrImg')
let username = document.getElementById('username')
let age =  document.getElementById('age')
let phone = document.getElementById('phone')
let email =  document.getElementById('email')

let getUser = document.getElementById('getUser')

getUser.addEventListener('click',async ()=>{
  let response = await fetch(url);
  let data = await response.json();
  let user = data.results[0]
  console.log(user);
  info.innerHTML = ""

  usrImg.innerHTML = `<img src="${user.picture.large}"/>`
  username.innerHTML = `<strong>${user.name.first} ${user.name.last}</strong>`

  age.addEventListener("click",()=>{
    info.innerHTML = `<b>Age:</b> ${user.dob.age}`
  })
  email.addEventListener("click",()=>{
    info.innerHTML = `<b>Email:</b> ${user.email}`
  })
  phone.addEventListener("click",()=>{
    info.innerHTML = `<b>Phone:</b> ${user.phone}`
  })
  }
)

getUser.click()


