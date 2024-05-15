console.log('client.js is sourced!');

axios.get('/calculations')
.then(
    function(response) {
        console.log('the response object is:', response);

        let data = response.data;
        console.log('important payload:', data);

        renderToDOM(data);
    }
)
.catch(
    function(error) {
        console.log('error getting calculations:', error);
        alert('something is wrong');
    }
)