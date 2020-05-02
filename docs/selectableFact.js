async function selectableFact(factId){
    const url = `https://k4kkzsszr5.execute-api.us-east-1.amazonaws.com/dev/get-fact/${factId}`;
    const options = { method: "GET",
                      headers: { "Content-type": "application/JSON" }
                    };
    let fact;
    await fetch(url, options)
          .then(res => res.json())
          .then(data => {
              fact = data.fact;
          });
    console.log(fact);
    return fact;
};