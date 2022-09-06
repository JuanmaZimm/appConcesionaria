let autos = require('./autos')

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let auto = this.autos.find(element => element.patente == patente);
        return auto != undefined ? auto : null;
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        auto.vendido = true;
    },
    autosParaLaVenta: function () {
        return this.autos.filter(element => element.vendido == false);
    },
    autosNuevos: function () {
        let autosSinVender = this.autosParaLaVenta();
        return autosSinVender.filter(element => element.km < 100);
    },
    listaDeVentas: function () {
        let autosVendidos = this.autos.filter(element => element.vendido == true);
        return autosVendidos.map(element => element.precio);
    },
    totalDeVentas: function () {
        let listaDeVentas = this.listaDeVentas();
        return listaDeVentas.reduce((acum, valor) => acum + valor, 0);
    },
    puedeComprar: function (auto, persona) {
        let autoParaVenta = this.autos.find(element => element === auto);
        let precioDeCuota = (autoParaVenta.precio) / (autoParaVenta.cuotas);
        return (persona.capacidadDePagoEnCuotas >= precioDeCuota) && (persona.capacidadDePagoTotal >= auto.precio);
    },
    autosQuePuedeComprar: function (persona) {
        let autosSinVender = this.autosParaLaVenta();
        return autosSinVender.filter(element => this.puedeComprar(element, persona));
    }
};

console.log(concesionaria.totalDeVentas());