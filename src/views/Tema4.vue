<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Negociación

    img(src="@/assets/curso/tema4/1.svg")

    p.mt-4 Es un proceso donde dos partes interesadas en llegar a un acuerdo sobre un mismo asunto intercambian información, prometen y aceptan compromisos de manera formal.

    p Se da de manera usual dialogando entre las partes, uno ofrece y el otro quiere o necesita, pero cada uno tiene sus condiciones, por lo tanto, buscan llegar a un punto donde ambos estén de acuerdo. Esto es un proceso dinámico con la oferta y la demanda del producto o necesidad que se pretende cubrir, para esto se requiere utilizar estrategias que permitan el logro del objetivo.

    .titulo-segundo.mt-5
      #t_4_1.h4 4.1 Tipos

    p.mt-4 En el mundo actual y cambiante la negociación no es estática, por lo tanto, podremos mencionar algunos tipos de negociación relevantes, pero no únicos y definitivos, estar actualizados es una condición para ser efectivos en el momento de negociar.

    .col-10
      AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fondo-azul")
        .row.container.mt-3(titulo="Acomodativa" style="background-color:background-color: #F3F9FF;")
          p.mb-3 Una de las partes decide aceptar lo que el otro ofrece con el fin de establecer una relación.

        .row.container.mt-3(titulo="Competitiva o distributiva" style="background-color:background-color: #F3F9FF;")
          p.mb-3 Es donde el mayor número de condiciones de una de las partes sea aceptado, se puede emplear el término “ganar-perder” donde una de las partes logra su objetivo, depende de las tácticas y estrategias que se empleen.

        .row.container.mt-3(titulo="Colaborativa o integrativa" style="background-color:background-color: #F3F9FF;")
          p.mb-3 Las dos partes están dispuestas a ceder con el fin de llegar a un acuerdo que les favorezca mutuamente, a este tipo de negociación se le llama ganar – ganar.

        .row.container.mt-3(titulo="Compromiso" style="background-color:background-color: #F3F9FF;")
          p.mb-3 Ambas partes obtienen más o menos lo que buscan al empezar a negociar, requiere de un nivel alto de confianza entre las dos partes.

        .row.container.mt-3(titulo="Evitativa" style="background-color:background-color: #F3F9FF;")
          p.mb-3 Cuando una de las dos partes elige no negociar, se toma la opción de evitar negociar porque es más lo que se puede perder que ganar.
    br
    .titulo-segundo.mt-5
      #t_4_2.h4 4.2 Etapas

    p.mt-4 A continuación te presentamos las etapas de negociación.

    .col-10.mt-5
      .p-5(style="background-color:#F3F9FF;")
        .row
          .col-auto
            img(src="@/assets/curso/tema4/2.svg")
          .col.mt-3
            h6 Preparación:
            p.mt-3 identificar lo que se va a negociar, la posición y la estrategia a usar. Determinar los objetivos y posibles concesiones, lo que favorece, hasta donde se está dispuesto a ceder y la estrategia negociadora a seguir. 

        .row.mt-4
          .col-auto
            img(src="@/assets/curso/tema4/3.svg")
          .col.mt-3
            h6 Desarrollo:
            p.mt-3 se da un diálogo entre las partes utilizando argumentaciones, #[strong hay que escuchar atentamente para conocer la oferta y la demanda], es donde se presentan alternativas de producto o conocimiento de las necesidades, la buena comunicación juega un papel muy importante.

        .row.mt-4
          .col-auto
            img(src="@/assets/curso/tema4/4.svg")
          .col.mt-3
            h6 Cierre:
            p.mt-3 las partes aceptan una alternativa de acuerdo al desarrollo de la negociación y se comprometen a cumplir.

    .titulo-segundo.mt-5
      #t_4_3.h4 4.3 Técnicas

    p.mt-4 A continuación te presentamos las etapas de negociación.

    img.mt-4(src="@/assets/curso/tema4/5.svg")

    .col-8.mt-5
      a.anexo.mb-4(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=296&pg=61" target="_blank" style="background-color:#F6F6F6;" title="Abrir articulo")
        .anexo__icono
          img(src="@/assets/curso/tema3/9.svg")
        .anexo__texto
          p(style="color:#12263F;font-weight:bold;") Este tema se debe leer en el libro digital Fundamentos de negociación, Autor: Roy J. Lewicki (2012) Ed. McGraw Hill interamericana desde la página 45 hasta la 65.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>
<style lang="sass">
.pl-0
  padding-left: 0px !important
.pr-0
  padding-right: 0px !important
.ml-0
  margin-left: 0px !important
.mr-0
  margin-right: 0px !important
.fondo-azul
  background-color: #F6F6F6 !important
</style>
