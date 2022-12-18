// https://rapidapi.com/matchilling/api/chuck-norris
// https://rapidapi.com/guides/fetch-api-async-await
async function getResponse() {
  try {
    const response = await fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-RapidAPI-Key": process.env.KEY,
          "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`getResponse threw new Error`);
    }

    const data = await response.json();
    document.getElementById("facts").textContent = data.value;
  } catch (error) {
    console.error(
      error + " because Chuck Norris facts are OP and broke the website!"
    );
  }
}

getResponse();
