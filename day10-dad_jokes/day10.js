const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    jokes = {
        1: "Why don't scientists trust atoms? Because they make up everything.",
        2: "Why don't eggs tell jokes? They'd crack each other up.",
        3: "Why did the tomato turn red? Because it saw the salad dressing.",
        4: "What do you call a fake noodle? An impasta.",
        5: "Why did the scarecrow win an award? Because he was outstanding in his field.",
        6: "What do you call a group of cows playing instruments? A moo-sical band.",
        7: "Why did the bicycle fall over? Because it was two-tired.",
        8: "What do you call a bear with no socks on? Barefoot.",
        9: "Why did the banana go to the doctor? He wasn't peeling well",
        10: "Why did the astronaut break up with his girlfriend? Because he needed space.",
        11: "What do you call a can opener that doesn't work? A can't opener.",
        12: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        13: "Why don't lobsters share? Because they're shellfish.",
        14: "What do you call a dog that does magic tricks? A labracad",
        15: "Why did the baker go to the bank? He needed dough.",
        16: "Why did the mushroom go to the party? Because he was a fun-gi.",
        17: "Why did the cat join a band? Because he wanted to be the purcussionist.",
        18: "What do you call a dog that does magic tricks? A labracad",
        19: "Why did the chicken go to the doctor? He had fowl breath",
        20: "Why did the rabbit go to the doctor? He had hare-loss",
    }

    selectJoke = Math.floor(Math.random() * 20) + 1;
    jokeEl.textContent = jokes[selectJoke];
}




// USING ASYNC/AWAIT
/* Oh no the https://icanhazdadjoke.com blocked their resources from outsider
thus no way to work with this method */
// async function generateJoke() {
//   const config = {
//     method: 'GET',
//     headers: {
//         'Content-Type' : 'application/json'
//     }
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }