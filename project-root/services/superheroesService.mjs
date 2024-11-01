import superheroesRepository from '../repository/superheroesRepository.mjs';

export default {
    findSuperheroById: (id) => {
        return superheroesRepository.getSuperheroes().find(hero => hero.id === id);
    },
    findSuperheroesByAttribute: (attribute, value) => {
        return superheroesRepository.getSuperheroes().filter(hero => hero[attribute] === value);
    },
    findSuperheroesOlderThan30: () => {
        return superheroesRepository.getSuperheroes().filter(hero => 
            hero.edad > 30 && hero.planetaOrigen === "Tierra" && hero.poder.length >= 2
        );
    }
};