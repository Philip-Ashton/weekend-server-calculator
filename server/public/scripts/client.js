console.log('client.js is sourced!');

function getCalculations() {

axios.get('/calculations')
.then(
    function(response) {
        console.log('the calculated number is:', response);

        let data = response.data;
        console.log('important the calculations:', data);

        renderToDOM(data);
    }
)
.catch(
    function(error) {
        console.log('error getting calculations:', error);
        alert('something is wrong');
    }
)
}

getCalculations();