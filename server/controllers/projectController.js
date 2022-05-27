/* Actions Methods */

// Lista los proyectos
// GET /projects | GET /proyects/index
const index = (req, res) => {
  res.send('Listando proyectos 🛠⚒⚒🛠');
  // TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
const add = (req, res) => {
  res.send('Agreando ideas proyectos 🛠⚒⚒🛠');
  //   TODO: Mas codigo plis
};

// Exportando el controlador
export default {
  index,
  add,
};
