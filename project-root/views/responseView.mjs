export default {
    renderResponse: (data) => {
        return {
            resultado: data,
            mensaje: data.length ? "Resultados encontrados" : "No se encontraron resultados"
        };
    }
};