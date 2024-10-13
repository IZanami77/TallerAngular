/*export interface Car{
    model: string,
    color: string,
    wheels: number,
    doors: number,
    year: Date | string,
    // speed: GLfloat
}*/

export type Roles = {
    rol: 'Admin' | 'Cliente'| 'Vendedor'
}
 export interface Usuario{
    id: number,
    nombre: string,
    descripcion: string,
    rol: Roles
 }
 export interface Productos{
  name:string,
  description:string,
  price:number,
  img:string
 }