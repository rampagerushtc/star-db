
export default class SwapiService {

    _apiBase = 'https://swapi.co/api'
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    //  if response returns not 200's code
    if (!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}, recieved ${res.status}`)
    }
    const body = await res.json();
    return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people`)
        return res.results;
    }
    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }
    async getAllPlanets() {
        const res = await this.getResource(`/planets`)
        return res.results;
    }
    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }
}

const swapi = new SwapiService();
swapi.getAllPlanets().then((people)=>{
    people.forEach(p => {
        console.log(p.name);
    });
    console.log(people);
});
