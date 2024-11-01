import fs from 'fs';
import Superheroe from '../models/superheroe.mjs';

export default {
    getSuperheroes: () => {
        const data = fs.readFileSync('./superheroes.txt', 'utf-8');
        const superheroesData = JSON.parse(data);
        return superheroesData.map(heroData => new Superheroe(heroData));
    }
};
