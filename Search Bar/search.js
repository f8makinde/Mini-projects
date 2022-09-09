 let inputEl = document.getElementById("usernameInput")
inputEl.addEventListener("keyup", function(event){
    let username = event.target.value.toLowerCase();
    console.log(username)
 })
