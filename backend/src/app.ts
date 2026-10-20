import express from 'express';
import mongoose from 'mongoose';
import { router as criaturas } from './routes/criaturas.routes';
import { router as avistamientos } from './routes/avistamientos.routes';
import { requestId } from './middlewares/requestId';
import { logger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';
import { ApiError } from './apiError';
export function crearApp() {
  const app=express();app.disable('x-powered-by');
  app.use(requestId);app.use(logger);app.use(express.json({limit:'32kb'}));
  app.get('/api/salud',(_req,res)=>res.status(mongoose.connection.readyState===1?200:503).json({estado:mongoose.connection.readyState===1?'ok':'sin_conexion'}));
  app.use('/api/criaturas',criaturas);app.use('/api/avistamientos',avistamientos);
  app.use((req,_res,next)=>next(new ApiError(404,`Ruta no encontrada: ${req.method} ${req.path}`)));
  app.use(errorHandler);return app;
}
