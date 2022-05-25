// 1 ODM Mongoose
import mongoose from 'mongoose';
// 2 Desestructuracion del modulo de schemas d emongoose
const { Schema } = mongoose;
// 3 Creamos Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

// Generar el Modelo a partir de un Schema
// ======>Compilar en modelo
export default mongoose.model('project', ProjectSchema);
