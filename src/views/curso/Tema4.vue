<template lang="pug">
.curso-main-container.pb-3
  
  BannerInterno(titulo="4. Negociación ")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      p.mt-5 Es un proceso donde dos partes interesadas en llegar a un acuerdo sobre un mismo asunto intercambian información, prometen y aceptan compromisos de manera formal. Se da de manera usual dialogando entre las partes, uno ofrece y el otro quiere o necesita pero cada uno tiene sus condiciones, por lo tanto buscan llegar a un punto donde ambos estén de acuerdo. 
      p Esto es un proceso dinámico con la oferta y la demanda del producto o necesidad que se pretende cubrir, para esto se requiere utilizar estrategias que permitan el logro del objetivo.
      .row.justify-content-center.align-items-center.mt-5
                  .col-auto 
                      img.img-a(src="@/assets/curso/images/pages/ilustraciones/img33.png").img-fluid

      #t_4_1.pb-2.h2.mt-5 4.1 Tipos

      p.mt-5 En el mundo actual y cambiante la negociación no es estática, por lo tanto podremos mencionar algunos tipos de negociación relevantes pero no únicos y definitivos, estar actualizados es una condición para ser efectivos en el momento de negociar. 

      .pb-2.h3.mt-3 4.1.1 Acomodativa

      p.mt-2 una de las partes decide aceptar lo que el otro ofrece con el fin de establecer una relación.

      .pb-2.h3.mt-3 4.1.2 Competitiva o distributiva:

      p.mt-2 es donde el mayor número de condiciones de una de las partes sea aceptada, se puede emplear el término “ganar-perder”  donde una de las partes logra su objetivo, depende de las tácticas y estrategias que se empleen.

      .pb-2.h3.mt-3 4.1.3 Colaborativa o integrativa:

      p.mt-2 las dos partes están dispuestas a ceder con el fin de llegar a un acuerdo que les favorezca mutuamente, a este tipo de negociación se le llama <b>ganar – ganar.</b>

      .pb-2.h3.mt-3 4.1.4 Compromiso:

      p.mt-2 l ambas partes obtienen más o menos lo que buscan al empezar a negociar,  requiere de un nivel alto de confianza entre las dos partes.

      .pb-2.h3.mt-3 4.1.5. Evitativa:

      p.mt-2 cuando una de las dos partes elige no negociar, se toma la opción de evitar negociar porque es más lo que se puede perder que ganar.

      #t_4_2.pb-5.h2.mt-5 4.2 Etapas
      
      .jumbotron-7
        .row.justify-content-center.align-items-center
              .col-auto
                  img.img-left.mb-5(src="@/assets/curso/images/pages/ilustraciones/img53.png", alt="", style="width:130px").img-float
                  .h1i.mt-4 #[strong Preparación:]
                  p.mt-2 identificar lo que se va a negociar, la posición y la estrategia a usar. Determinar los objetivos y posibles concesiones, lo que favorece, hasta donde se está dispuesto a ceder y la estrategia negociadora a seguir.
              .col-auto 
                  img.img-left.mb-5(src='@/assets/curso/images/pages/ilustraciones/img54.png', alt="", style="width:130px").img-float
                  .h1i.mt-4 #[strong Desarrollo:]
                  p.mt-2 se da un diálogo entre las partes utilizando argumentaciones, hay que escuchar atentamente para conocer la oferta y la demanda, es donde se presentan alternativas de producto o conocimiento de las necesidades, la buena comunicación juega un papel muy importante.
              .col-auto
                  img.img-left.mb-5.mt-3(src='@/assets/curso/images/pages/ilustraciones/img55.png', alt="", style="width:120px").img-float
              .col
                  .h1i.mb-3 #[strong Cierre:]
                  p las partes aceptan una alternativa de acuerdo al desarrollo de la negociación y se comprometen a cumplir.

      #t_4_3.h2 4.3 Técnicas.

      .i-general-5
        .div.div-gradient-10
          .div.c-card-10
            img(src='@/assets/curso/images/pages/ilustraciones/img56.png' alt="",style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img57.png' alt="", style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img58.png' alt="", style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img59.png' alt="",style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img60.png' alt="", style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img61.png' alt="", style="width:230px; display:block; margin:auto 0;")
        .div.div-gradient-10
          .div.c-card-10
            img.img-a.d-block.m-auto(src='@/assets/curso/images/pages/ilustraciones/img62.png' alt="", style="width:230px; display:block; margin:auto 0;")
          
      p.mt-3 Utilizando tácticas de presión como  Fingimiento, tanteo, retiro

      .jumbotron.mt-5
        .row.justify-content-center.align-items-center
              .col
                  h4.mb-0 Leer en el libro digital Fundamentos de negociación, autor : Roy J. Lewicki (2012) Ed. Mc-Graw Hill interamericana desde la página 45 hasta la 65
                      a.p2(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=296&pg=61", target="_blank") <span class="fa fa-text" aria-hidden="true"></span> leer aquí




</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
