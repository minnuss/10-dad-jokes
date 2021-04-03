const btn = document.querySelector('.jokes__content--btn');
const joke = document.querySelector('.jokes__content--joke');
const url = "https://icanhazdadjoke.com";
// for this API it states on their website that it needs fetch with "Accept: application/json", so headers are put in and variable
let config = {
    headers: {
        Accept: "application/json"
    },
}

// FETCH METOD
// function getJoke() {
//     fetch(url, config)
//         .then((res) => res.json())
//         .then((data) => {
//             joke.innerHTML = data.joke;
//         })
// }
// getJoke()
// btn.addEventListener('click', getJoke);


// ASYNC METHOD
async function getJokeAsync() {
    const res = await fetch(url, config);
    const data = await res.json();
    joke.innerHTML = data.joke;
}
btn.addEventListener('click', getJokeAsync);
getJokeAsync()