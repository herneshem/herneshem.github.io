
const URL = 'https://github.com/herneshem/herneshem.github.io/blob/master/movies-250.json';

function processMovie(data) {
    console.log(data);
}

doGetRequest(URL, processMovie);