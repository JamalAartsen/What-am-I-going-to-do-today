
const url = 'https://whatamigoingtodotoday.herokuapp.com/random';
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

export async function fetchData() {
    try {
        let data = await fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            console.log(response)

            throw response
        });


        return Promise.resolve({ error: null, result: data });

    } catch (err) {
        return Promise.resolve({ error: err.message, result: null });
    }
}