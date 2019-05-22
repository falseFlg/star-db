class SwapiService {

    _apiBase = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
        } 
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results
    }

    async getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets(){
        return this.getResource(`/planets/`)
    }

    async getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }
}

const swapi = new SwapiService()

swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name)
    })
})

swapi.getPerson(3).then((person) => {
    console.log(person.name)
})

swapi.getAllPlanets().then((planets) => {
    const planetsArr = planets.results
    planetsArr.forEach((pl) => {
        console.log(pl.name)
    })
})

swapi.getPlanet(2).then((planet) => {
    console.log(planet.name)
})