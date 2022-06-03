// USANDO EL PATRON FACTORY PARA LA CREACIOM
// DE UN MIDDLEWARE DE VALIDACION
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    // 1 Construir el objeto a validar
    const dataObject = getObject(req);
    // 2 Se realiza el proceso de validacion
    try {
      // 2.1 Se valida el objeto con el shape
      // validate acepta 2 argumentos
      // arg1: El objeto a validar
      // arg2: Opciones de validacion
      const valiData = await shape.validate(dataObject, { abortEarly: false });
      //   Incrustar el objeto valido en la peticion
      req.valiData = valiData;
    } catch (error) {
      // Crear un objeto que reporta el error
      req.errorData = error;
    }
    // 3 Continuamos la cadena de middlewares
    return next();
  };
// Exprotando Factory de validacion
export default Validator;
