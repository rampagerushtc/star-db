// htpps://swapi.co
const getResource = async (url) => {
    const res = await fetch(url);
    //  if response returns not 200's code
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    }
    const body = await res.json();
    return body;
}
getResource('https://swapi.co/api/people/1')
.then((body)=>{
    console.log(body)
})
.catch((err)=>{
    console.log(err)
});