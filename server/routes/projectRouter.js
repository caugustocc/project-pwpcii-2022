// Importamos el Router de Express
import { Router } from 'express';
// Importando el controlador de proyecto
import projectController from '../controllers/projectController';

// Crear la instancia del Router
const router = new Router();

/* -------GET--------*/
// Listar proyectos
// GET: / | GET: /projects/index
router.get(['/', 'index'], projectController.index);

// Registrar una idea de proyecto
// GET
router.get('/add', projectController.index);

// Exporntando el enrutador Projets
