<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(titulo="2. Servicio al cliente")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      .row.justify-content-center.align-items-center.mt-5
                  .col-auto 
                      img.img-a(src="@/assets/curso/images/pages/ilustraciones/img12.png").img-fluid

      #t_2_1.pb-1.h2.mt-5 2.1 Concepto

      .row.justify-content-center.align-items-center.mt-5 
        .col

          p Se entiende por servicio al cliente el conjunto de acciones, procesos y ejecuciones que el cliente espera, además del producto básico, como consecuencia del precio y la imagen. Son las actividades que buscan satisfacer las necesidades, deseos y expectativas  de un cliente.

          p En consecuencia, el objetivo institucional no es solo vender, sino ganar y mantener clientes satisfechos.

          p La experta en calidad del servicio Lisa Ford (2013) dice:

        .col
          .div.div-gradient-2
            .div.c-card-
          
            p.text-center “si no se cuida lo básico, de nada servirán los detalles y los extras”.
            
      
      #t_2_2.pb-5.h2 tema 2.2
      .pb-5(v-for="item of 15")

      #t_2_3.pb-5.h2 tema 2.3
      .pb-5(v-for="item of 15")

      #t_2_4.pb-5.h2 tema 2.4
      .pb-5(v-for="item of 15")

      #t_2_5.pb-5.h2 tema 2.5
      .pb-5(v-for="item of 15")

      #t_2_6.pb-5.h2 tema 2.6
      .pb-5(v-for="item of 15")

      #t_2_7.pb-5.h2 tema 2.7
      .pb-5(v-for="item of 15")

      #t_2_8.pb-5.h2 tema 2.8
      .pb-5(v-for="item of 15")

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
