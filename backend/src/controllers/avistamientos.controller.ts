import { Request, Response, NextFunction } from 'express';
import * as servicio from '../services/avistamientos.service';
import { queryTexto } from '../validacion';
/** Traducción HTTP; las consultas y reglas viven en servicios. */
export async function listar(req: Request, res: Response, next: NextFunction) {
  try { const datos = await servicio.listar(queryTexto(req.query.criaturaId)); res.json({ avistamientos: datos, total: datos.length, requestId: req.id }); } catch(e) { next(e); }
}
export async function obtener(req: Request, res: Response, next: NextFunction) {
  try { res.json({ avistamiento: await servicio.obtener(req.params.id), requestId: req.id }); } catch(e) { next(e); }
}
export async function crear(req: Request, res: Response, next: NextFunction) {
  try { res.status(201).json({ avistamiento: await servicio.crear(req.body), requestId: req.id }); } catch(e) { next(e); }
}
export async function actualizar(req: Request, res: Response, next: NextFunction) {
  try { res.json({ avistamiento: await servicio.actualizar(req.params.id, req.body), requestId: req.id }); } catch(e) { next(e); }
}
export async function eliminar(req: Request, res: Response, next: NextFunction) {
  try { await servicio.eliminar(req.params.id); res.status(204).end(); } catch(e) { next(e); }
}
