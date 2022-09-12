const api: string = "http://localhost:8000"

const getText = () =>
    fetch(`${api}/api/hello`, {
        method: 'GET',
    })
    .then(res => res.json())

export default getText