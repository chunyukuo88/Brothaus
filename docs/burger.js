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

let jokeData;

async function fetchJoke(){
    const url = "https://api.chucknorris.io/jokes/random";
    const options = { method: "GET", headers: { "Content-type": "application/JSON" }};
    await fetch(url, options)
        .then(res => res.json())
        .then(data => {
          jokeData = data.value;
        })
        .catch(()=>{'Fetch failed'});
}

function renderJoke(){
  let jokeString = document.getElementById('joke-content');
  fetchJoke()
    .then(
      jokeString.innerText = jokeData
  );
}