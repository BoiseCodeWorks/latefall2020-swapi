export default class Character {
    constructor(data) {
        this.name = data.name
        this.gender = data.gender
        this.height = data.height
        this.mass = data.mass
        this.birth_year = data.birth_year
        this.eyeColor = data.eyeColor || data.eye_color
        this.hairColor = data.hairColor || data.hair_color
    }

    get Template() {

        return /*html*/`
        <div class="col-2 border rounded shadow-lg">
            <h3 class="bg-dark text-light">${this.name}</h1>
            <h5>${this.birth_year}</h5>
            <h5>${this.eyeColor}</h5>
            <h5>${this.gender}</h5>
            <h5>${this.hairColor}</h5>
            <h5>${this.height}</h5>
            <h5>${this.mass}</h5>
        </div>
        `
    }
}
