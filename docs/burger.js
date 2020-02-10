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
    const url = "https://icanhazdadjoke.com/";
    const options = { method: "GET", 
                      headers: { "Accept": "application/JSON" }};
    await fetch(url, options)
        .then(res => res.json())
        .then(data => {
          jokeData = data.joke;
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
