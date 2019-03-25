export interface Estacion {
    nombre: string;
    lng: number;
    lat: number;
    troncales: string[];
    alimentadores: string[];
    preTroncales: string[]; 
    icono: string;
}
