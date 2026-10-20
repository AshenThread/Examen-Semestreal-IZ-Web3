import { Router } from 'express';
import * as c from '../controllers/criaturas.controller';
export const router = Router();
router.get('/',c.listar);
router.get('/:id',c.obtener);
router.post('/',c.crear);
router.put('/:id',c.actualizar);
router.delete('/:id',c.eliminar);
router.get('/:id/avistamientos',c.avistamientos);
