<template lang="pug">
.curso-main-container.pb-3
  
  BannerInterno(titulo="5. Cotización")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.align-items-center.mt-5
                  .col-auto 
                      img.img-a(src="@/assets/curso/images/pages/ilustraciones/img63.png").img-fluid

      p.mt-5 El cliente que requiere los servicios en un establecimiento hotelero, quiere conocer los servicios que ofrece y las tarifas, por tanto la acción de solicitar una cotización se presenta constantemente. 

      #t_5_1.pb-3.h2.mt-5 5.1 Definición

       .row.justify-content-center.align-items-center.mt-5
            
                .col
                    p Cotización es un documento o una <b>acción donde se detalla el precio o se indica el valor</b> de un bien o servicio para una negociación o compra.

                .col-auto 
                    img.img-a(src="@/assets/curso/images/pages/ilustraciones/img64.png").img-fluid

      #t_5_2.pb-2.h2 5.2 Tipos

      p.mt-3 En los servicios de alojamiento se presentan los siguientes tipos de cotizaciones, de acuerdo a la necesidad del cliente.

      .pb-2.h3.mt-5 5.2.1. Cotización de servicio de alojamiento:

      p.mt-3 El cliente realiza un acercamiento al establecimiento para solicitar tarifas y de acuerdo a ello, tomar la determinación de reservar  las habitaciones, también puede solicitar tarifas en alimentos y bebidas o servicios complementarios.

      .pb-2.h3.mt-5 5.2.1. Cotización de servicio de alojamiento:

      p.mt-3 el cliente realiza un acercamiento al establecimiento para solicitar tarifas y de acuerdo a ello, tomar la determinación de reservar  las habitaciones, también puede solicitar tarifas en alimentos y bebidas o servicios complementarios.

      .pb-1.h3.mt-5 5.2.2. Cotización de eventos

      .i-general-5.my-3
        .div.div-gradient-11
          .div.c-card-11
            img.mt-5(src='@/assets/curso/images/pages/ilustraciones/ico42.png' alt="",style="width:30px; display:block; margin:auto 0;")
            .h1i.mt-2 #[strong Negocios:]
            p.mt-2 Las empresas realizan viajes y eventos para sus funcionarios o clientes, por tanto solicitan información de las tarifas de <b>los servicios que el establecimiento ofrece con el fin de realizar sus actividades empresariales.</b> La cotización se presenta con el valor de los espacios de acuerdo al número de participantes, horarios, alimentos y bebidas, ayudas audiovisuales y de sonido, y demás elementos necesarios para el desarrollo del evento.
        .div.div-gradient-11
          .div.c-card-11
            img(src='@/assets/curso/images/pages/ilustraciones/ico42.png' alt="", style="width:30px; display:block; margin:auto 0;")
            .h1i.mt-2 #[strong Sociales:]
            p.mt-2 Eventos como matrimonios, cumpleaños, aniversarios, grados, entre otros; se realizan dentro de los establecimientos hoteleros que ofrecen estos servicios, <b>estas cotizaciones incluyen información de las tarifas del espacio a utilizar de acuerdo al número de participantes, </b> de alimentos y bebidas, y otros.
        .div.div-gradient-11
          .div.c-card-11
            img(src='@/assets/curso/images/pages/ilustraciones/ico42.png' alt="", style="width:30px; display:block; margin:auto 0;")
            .h1i.mt-2 #[strong Grupos:]
            p.mt-2 Cuando se requiere alojamiento de un número superior a 10 habitaciones usualmente se le considera grupo, <b> la cotización se genera de una manera diferente ya que se establecen ofertas y tratamientos especiales </b> tanto en acomodación como en los servicios de alimentos y bebidas.

      .pb-1.h3.mt-2 5.2.3 Cotización de servicios complementarios:

      p.mt-3 algunos establecimientos no solo ofrecen los servicios de alojamiento y/o eventos, también pueden ofrecer servicios de restaurante, bar, gimnasio, spa, piscina entre otros, estos servicios pueden ser usados sin requerir el servicio de alojamiento, por lo cual también el cliente puede solicitar cotización para determinar hacer el uso de ellos. 

      .row.justify-content-center.align-items-center.mt-5
                .col-auto 
                    img.img-a.mb-5(src="@/assets/curso/images/pages/ilustraciones/img65.png").img-fluid

      #t_5_3.pb-2.h2 5.3 Procedimiento.

      p.mt-3 El cliente realiza el primer contacto buscando la información de acuerdo a su necesidad, el personal encargado dentro del establecimiento de alojamiento puede ser el área de ventas, el área de reservas o recepción.

      p El siguiente es el ciclo de una cotización:

      .col-auto.mt-3
                    img.img-a.mt-5(src="@/assets/curso/images/pages/ilustraciones/info4.png" alt="", style="width:750px; display:block; margin:auto 0;").img-fluid
      p.mt-5 Formato de cotización: el formato es un instrumento utilizado con el fin de no obviar información en el momento de una solicitud, el diseño del mismo es establecido por cada hotel. 

      p A continuación una base de información que se requiere en una cotización de alojamiento:

      p.mt-3 Nombre de quien solicita la cotización.
      p > Fecha de solicitud.
      p > Fecha de reserva: llegada y salida.
      p > Tipo de habitación.
      p > Número de habitaciones.
      p > Número de personas.
      p > Tarifa.
      p > Otros servicios.


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
