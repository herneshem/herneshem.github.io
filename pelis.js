
const URL = 'https://herneshem.github.io/movies-250.json';

function processMovie(data) {
    console.log(data);
}

doGetRequest(URL, processMovie);