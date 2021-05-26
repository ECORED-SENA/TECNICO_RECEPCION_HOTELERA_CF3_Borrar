<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Cotización

    img(src="@/assets/curso/tema5/1.svg")

    p.mt-4 El cliente que requiere los servicios en un establecimiento hotelero quiere conocer los servicios que ofrece y las tarifas, por tanto, la acción de solicitar una cotización se presenta constantemente. Con la llegada del internet, la aparición de las agencias de viaje en línea y de la distribución electrónica, esta consulta de precios ahora está más en el ámbito digital, pero con frecuencia sucede que los clientes tratan de encontrar mejores tarifas solicitando los precios directamente al hotel

    .titulo-segundo.mt-5
      #t_5_1.h4 5.1 Definición

    .row.mt-3
      .col
        p.mt-4 Cotización es un documento o una acción donde se detalla el precio o se indica el valor de un bien o servicio para una negociación o compra.
      .col-auto
        img(src="@/assets/curso/tema5/2.svg")

    .titulo-segundo.mt-5
      #t_5_2.h4 5.2 Tipos

    p.mt-4 En los servicios de alojamiento se presentan los siguientes tipos de cotizaciones, de acuerdo con la necesidad del cliente.

    h6.mt-4 Cotización de servicio de alojamiento 

    p.mt-2 El cliente realiza un acercamiento al establecimiento para solicitar tarifas y de acuerdo con ello, tomar la determinación de reservar las habitaciones, también puede solicitar tarifas en alimentos y bebidas o servicios complementarios.

    h6.mt-4 Cotización de eventos

    .row.mt-5 
      .col-4
        .p-4(style="background-color:#FFF1DB;min-height:600px;border-radius:7px;")
          img(src="@/assets/curso/tema5/3.svg" style="max-width:30px;")
          p.mt-3 #[strong Negocios:]
          p.mt-3 las empresas realizan viajes y eventos para sus funcionarios o clientes, por tanto, solicitan información de las tarifas de los servicios que el establecimiento ofrece con el fin de realizar sus actividades empresariales.  La cotización se presenta con el valor de los espacios de acuerdo con el número de participantes, horarios, alimentos y bebidas, ayudas audiovisuales y de sonido, y demás elementos necesarios para el desarrollo del evento. Un documento muy utilizado por las empresas para solicitar un presupuesto o cotización es el RFP, (Request for proposal) por su siglas en ingles.

      .col-4
        .p-4(style="background-color:#FFF1DB;min-height:600px;border-radius:7px;")
          img(src="@/assets/curso/tema5/3.svg" style="max-width:30px;")
          p.mt-3 #[strong Sociales:]
          p.mt-3 eventos como matrimonios, cumpleaños, aniversarios, grados, entre otros; se realizan dentro de los establecimientos hoteleros que ofrecen estos servicios, estas cotizaciones incluyen información de las tarifas del espacio a utilizar de acuerdo con el número de participantes, de alimentos y bebidas, y otros.

      .col-4
        .p-4(style="background-color:#FFF1DB;min-height:600px;border-radius:7px;")
          img(src="@/assets/curso/tema5/3.svg" style="max-width:30px;")
          p.mt-3 #[strong Grupos:]
          p.mt-3 cuando se requiere alojamiento de un número superior a 10 habitaciones usualmente se le considera grupo, la cotización se genera de una manera diferente ya que se establecen ofertas y tratamientos especiales tanto en acomodación como en los servicios de alimentos y bebidas.

    p.mt-5 #[strong Cotización de servicios complementarios]
    p Algunos establecimientos no solo ofrecen los servicios de alojamiento y/o eventos, también pueden ofrecer servicios de restaurante, bar, gimnasio, spa, piscina entre otros, estos servicios pueden ser usados sin requerir el servicio de alojamiento, por lo cual también el cliente puede solicitar cotización para determinar hacer el uso de ellos.

    img.mt-4(src="@/assets/curso/tema5/4.svg")


    .titulo-segundo.mt-5
      #t_5_3.h4 5.3 Procedimiento

    p.mt-4 El cliente realiza el primer contacto buscando la información de acuerdo con su necesidad, el personal encargado dentro del establecimiento de alojamiento puede ser el área de ventas, el área de reservas o recepción. 

    p.mt-4 #[strong El siguiente es el ciclo de una cotización:]

    .col-10.mt-4
      .row
        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/5.png")
            .col
              h6(style="margin-top:11px;") Solicitud por la parte interesada.

        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/6.png")
            .col
              h6(style="margin-top:11px;") Rooming list (en el caso del grupo).

      .row.mt-3
        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/7.png")
            .col
              h6(style="margin-top:11px;") Recepción y registro de la solicitud.

        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/8.png")
            .col
              h6(style="margin-top:11px;") Factura proforma.

      .row.mt-3
        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/9.png")
            .col
              h6(style="margin-top:11px;") Respuesta

        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/10.png")
            .col
              h6(style="margin-top:11px;") Transferencia

      .row.mt-3
        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/11.png")
            .col
              h6(style="margin-top:11px;") Confirmación por parte del cliente.

        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/12.png")
            .col
              h6(style="margin-top:11px;") Liquidación

      .row.mt-3
        .col-6
          .row.m-0(style="background-color:#FFD494;border-radius:35px;")
            .col-auto.p-1
              img(src="@/assets/curso/tema5/13.png")
            .col
              h6(style="margin-top:11px;") Depósito de garantía.

    p.mt-5 Formato de cotización: el formato es un instrumento utilizado con el fin de no obviar información en el momento de una solicitud, el diseño de este es establecido por cada hotel.

    p.mt-4 #[strong A continuación, una base de información que se requiere en una cotización de alojamiento:]

    .row.mt-4
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Nombre de quien solicita la cotización.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Fecha de solicitud.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Fecha de reserva: llegada y salida.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Tipo de habitación.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Número de habitaciones.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Número de personas.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Tarifa

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema3/18.svg', alt='Avatar')
      .col
        p Otros servicios

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>
<style lang="sass" scoped>
.pl-0
  padding-left: 0px !important
.pr-0
  padding-right: 0px !important
.ml-0
  margin-left: 0px !important
.mr-0
  margin-right: 0px !important
</style>
