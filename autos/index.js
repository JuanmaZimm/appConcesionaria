// El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
//El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
let autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        color: 'Azul',
        año: 2019,
        km: 200,
        precio: 150000,
        cuotas: 12,
        patente: 'APL123',
        vendido: false,
    },
    {
        marca: 'Toyota',
        modelo: 'Corola',
        color: 'Blanco',
        año: 2019,
        km: 0,
        precio: 100000,
        cuotas: 14,
        patente: 'JJK116',
        vendido: false,
    }
]

module.exports = autos;