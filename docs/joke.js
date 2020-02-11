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