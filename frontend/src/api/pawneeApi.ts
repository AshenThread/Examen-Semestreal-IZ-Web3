import { http } from "./http";
import { Criatura, CriaturaInput, Avistamiento } from "../tipos";
const c = "/api/criaturas",
  a = "/api/avistamientos";
export async function listarCriaturas(tipo = "") {
  return (
    await http<{ criaturas: Criatura[] }>(
      c + (tipo ? `?tipo=${encodeURIComponent(tipo)}` : ""),
    )
  ).criaturas;
}
export async function obtenerCriatura(id: string) {
  return (await http<{ criatura: Criatura }>(`${c}/${id}`)).criatura;
}
export async function guardarCriatura(
  id: string | undefined,
  datos: CriaturaInput,
) {
  return (
    await http<{ criatura: Criatura }>(id ? `${c}/${id}` : c, {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(datos),
    })
  ).criatura;
}
export async function borrarCriatura(id: string) {
  await http<void>(`${c}/${id}`, { method: "DELETE" });
}
export async function relacionados(id: string) {
  return (
    await http<{ avistamientos: Avistamiento[] }>(`${c}/${id}/avistamientos`)
  ).avistamientos;
}
export async function listarAvistamientos(criaturaId = "") {
  return (
    await http<{ avistamientos: Avistamiento[] }>(
      a + (criaturaId ? `?criaturaId=${encodeURIComponent(criaturaId)}` : ""),
    )
  ).avistamientos;
}
export async function obtenerAvistamiento(id: string) {
  return (await http<{ avistamiento: Avistamiento }>(`${a}/${id}`))
    .avistamiento;
}
export async function guardarAvistamiento(
  id: string | undefined,
  datos: unknown,
) {
  return (
    await http<{ avistamiento: Avistamiento }>(id ? `${a}/${id}` : a, {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(datos),
    })
  ).avistamiento;
}
export async function borrarAvistamiento(id: string) {
  await http<void>(`${a}/${id}`, { method: "DELETE" });
}
