import { Component } from '@angular/core';
import { Marcador } from './interfaces/marcador';
import { Estacion } from './interfaces/estacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estaciones_json = 
    [{
        "name" : "Patio Portal Transcaribe",
        "lgn": 10.396750,
        "lat": -75.472193,
        "Troncales": [
            "T100E",
            "T101",
            "T102",
            "T103"        
        ],
        "Alimentadores": [
            "A102",
            "A105",
            "A113",
            "A114",
            "A115"
        ],
        "PreTroncales": [
            "X102"
        ]
    },
{
        "name" : "Estación El Gallo",
        "lgn": 10.396166,
        "lat": -75.476238,
        "Troncales": [

        ],
        "Alimentadores": [
            "A103",
            "A104",
            "A107",
            "A105",
            "A108"
        ],
        "PreTroncales": [
            
        ]
    },
 {
        "name" : "Estación Transcaribe Madre Bernarda",
        "lgn": 10.395251,   
        "lat": -75.478313,
        "Troncales": [
            "T100E",
            "T101",
            "T102",
            "T103"        
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
{
        "name" : "Estación de Transcaribe — La Castellana",
        "lgn": 10.394477,
        "lat":  -75.486635,
        "Troncales": [
            "T100E",
            "T101"        
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X106"
        ]
    },
{
        "name" : "Estación Transcaribe Los Angeles",
        "lgn":  10.395039,
        "lat":  -75.490367,
        "Troncales": [
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
{
        "name" : "Estación Transcaribe Ejecutivos",
        "lgn": 10.399543,
        "lat": -75.493667,
        "Troncales": [
            "T101",
            "T103"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X106"
        ]
    },
{
        "name" : "Estación Villa Olímpica Transcaribe",
        "lgn": 10.403614,
        "lat": -75.497239,
        "Troncales": [
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101"
        ]
    },
{
        "name" : "Estación  Cuatro Vientos Transcaribe",
        "lgn": 10.406525,
        "lat": -75.502689,
        "Troncales": [
            "T100E",
            "T101",
            "T103"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101"
        ]
    },
 {
        "name" : "Estación Transcaribe — Barrio El Libano",
        "lgn": 10.407349,
        "lat": -75.507496,
        "Troncales": [
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101",
            "X106"
        ]
    },
{
        "name" : "Estación de Transcaribe — España",
        "lgn": 10.408317,
        "lat": -75.512849,
        "Troncales": [
            "T101",
            "T103"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101"
        ]
    },
{
        "name" : "Estación de Transcaribe — María Auxiliadora",
        "lgn": 10.409019,
        "lat": -75.515855,
        "Troncales": [
            "T100E",
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101",
            "X106"
        ]
    },
{
        "name" : "Estación Transcaribe — El Prado",
        "lgn": 10.411166,
        "lat": -75.519590,
        "Troncales": [
            "T101",
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X103"
        ]
    },
{
        "name" : "Estación de Transcaribe — Mercado de Bazurto",
        "lgn": 10.413813,
        "lat": -75.524022,
        "Troncales": [
            "T101",
            "T102",
            "T103"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            "X101",
            "X104",
            "X102",
            "X103",
            "X105"
        ]
    },
{
        "name" : "Estación de Transcaribe — Las Delicias",
        "lgn": 10.416603,
        "lat": -75.527902,
        "Troncales": [
        
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
 {
        "name" : "Estación de Transcaribe — La Popa",
        "lgn": 10.420548,
        "lat": -75.531094,
        "Troncales": [
            "T101"

        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
{
        "name" : "Estación de Transcaribe — La Amador",
        "lgn": 10.422411,
        "lat": -75.534586,
        "Troncales": [
        
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
{
        "name" : "Estación de Transcaribe — Chambacú",
        "lgn": 10.425940,
        "lat": -75.540502,
        "Troncales": [
            "T101",
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
{
        "name" : "Estación de Transcaribe — Centro",
        "lgn": 10.425005,
        "lat":  -75.546703,
        "Troncales": [
            "T100E",
            "T101",
            "T102"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    },
 {
        "name" : "Estación de Transcaribe — Bodeguita",
        "lgn": 10.420286,
        "lat": -75.551233,
        "Troncales": [
            "T100E",
            "T101"
        ],
        "Alimentadores": [

        ],
        "PreTroncales": [
            
        ]
    }     
      ]
  // google maps zoom level
  zoom: number = 14;
  estaciones : Estacion []= [];
  // initial center position for the map
  lat: number = 10.408975;
  lng: number = -75.508813;
  marcador : Marcador;
  ngOnInit() {
    
    this.estaciones_json.forEach((f) => {
      this.estaciones.push({
        nombre : f.name,
        lng: f.lat,
        lat: f.lgn,
        troncales: f.Troncales,
        alimentadores: f.Alimentadores,
        preTroncales: f.PreTroncales,
        icono: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
      });
      
    });

  }

  
}
