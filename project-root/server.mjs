import express from 'express';
import superheroesController from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Rutas
app.get('/superheroes/id/:id', superheroesController.getSuperheroById);
app.get('/superheroes/atributo/:atributo/:valor', superheroesController.getSuperheroesByAttribute);
app.get('/superheroes/edad/mayorA30', superheroesController.getSuperheroesOlderThan30);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});