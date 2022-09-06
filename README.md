# appConcesionaria

- Desarrollada en el curso de Desarrollo Web Full Stack de Digital House.
 
- Requiere un archivo autos una lista de objetos literales autos con formato:
  {marca: String, modelo: String, color: String, anio: Number, km: Number, precio: Number, cuotas: Number, patente: String, vendido: Bool}
  
- Permite:
  - buscarAuto(patente): devuelve un auto según una patente.
  - venderAuto(patente): marca .vendido: true.
  - autosParaLaVenta(): devuelve la lista de autos con .vendido: false.
  - autosNuevos(): devuelve la lista de autos con menos de 100km.
  - listaDeVentas(): devuelve los precios de los autos vendidos.
  - totalDeVentas(): devuelve la suma de la listaDeVentas.
  - puedeComprar(auto, persona): recibe un objeto persona con los datos de cuanto puede pagar, compara con un auto y devuelve true/false.
  - autosQuePuedeComprar(persona): recibe un objeto persona (como el previo) y devuelve los autos que puede permitirse.
