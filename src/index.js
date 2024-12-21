function displayQuote(response) {
  console.log("poem generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "10tc88b5de8d7eoa39c8f2ea84faadb2";
  let context =
    "You are a inspirational quote expert and you love to provide short inspirational quotes. Your mission is to generate short quotes in basic HTML and separate each line of the quote with a <br />. Do not include a title. Sign the quote with 'Your AI Assistant' inside a <strong> element at the end of the quote. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
