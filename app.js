document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const xhr = new XMLHttpRequest;
    const numJokes = document.querySelector('#number').value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true);

    let output;

    xhr.onload = function() {
        if (this.status === 200) {
            output = JSON.parse(xhr.responseText);
            console.log(output);
            output.value.forEach(function(joke) {
                console.log(joke);
                const li = document.createElement('li');
                li.textContent = joke.joke;
                li.className = 'list-group-item';
                document.querySelector('#jokes').appendChild(li);
            })
        }
    }

    xhr.send();
    e.preventDefault();
    document.querySelector('#number').value = '';

}


//     // Ready state values
//     // 0: request not initialized
//     // 1: server connection established
//     // 2: request received
//     // 3: processing request
//     // 4: request finished and response is ready

//     // HTTP statuses
//     // 200: OK
//     // 403: Forbidden
//     // 404: Not found