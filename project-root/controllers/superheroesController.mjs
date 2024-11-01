import superheroesService from '../services/superheroesService.mjs';

export default {
    getSuperheroById: (req, res) => {
        const id = parseInt(req.params.id);
        const superhero = superheroesService.findSuperheroById(id);
        if (superhero) {
            res.send(superhero);
        } else {
            res.send({ mensaje: "Superhéroe no encontrado" });
        }
    },
    getSuperheroesByAttribute: (req, res) => {
        const { atributo, valor } = req.params;
        const superheroes = superheroesService.findSuperheroesByAttribute(atributo, valor);
        res.send(superheroes);
    },
    getSuperheroesOlderThan30: (req, res) => {
        const superheroes = superheroesService.findSuperheroesOlderThan30();
        res.send(superheroes);
    }
};