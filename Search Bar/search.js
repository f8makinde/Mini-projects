 let searchEl = document.getElementById("searchInput");
 let allNamesDOMCollection = "";
searchEl.addEventListener("keyup", function(event){
    let username = event.target.value.toLowerCase();
    allNamesDOMCollection = document.getElementsByClassName("name");
    for(let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentName = allNamesDOMCollection[counter].textContent;
        console.log(currentName.toLowerCase())
    }
    // console.log(allNamesDOMCollection[5].textContent)
 })
