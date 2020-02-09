function showOrHideMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}





let button = document.getElementById('joke-button');


async function fetchJoke(){
    const url = "https://api.chucknorris.io/jokes/random";
    // const options = { method: "GET", headers: { "Content-type": "application/JSON" }};
    await fetch(url) //, options
        .then(response => {
          return response.json();
        })
        .then((responseData) =>{
          return responseData;
        })
        .catch("Fetch failed");
}

// let jokeString = document.getElementById('joke-content');
function renderJoke(){
  let result = fetchJoke();
  console.log(result);
    // .then(data => {
    //   console.log(data.value);
    //   // jokeString.innerText = data;
    //   })
}