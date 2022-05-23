import mongoose from 'mongoose';

import winston from './winston';

class MongooseODM {
  constructor(url) {
    this.url = url;
  }

  // Methoods
  async connect() {
    try {
      // Agrear el sistema de promesas ES6
      mongoose.Promise = global.Promise;
      // Registramos el intento de conexion a la base de la datos
      winston.info(`conectando a la base de datos: ${this.url}`);
      // Intento de conexion
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      // La conexion falla
      winston.error(
        `no se pudo realizar la conexion devido a: ${error.message} 💀`
      );
      return false;
    }
  }
}
export default MongooseODM;
