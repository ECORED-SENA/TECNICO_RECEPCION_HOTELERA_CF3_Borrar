<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Usuarios servicios turísticos

    p.mt-4 Los usuarios turísticos son aquellas personas físicas que utilizan los establecimientos, instalaciones y recursos turísticos, o reciben los bienes y servicios que ofrecen las empresas y profesionales del sector. 

    p.mt-3 #[strong Los usuarios turísticos tienen una serie de derechos y obligaciones reguladas por ley.]

    .titulo-segundo.mt-5
      #t_1_1.h4 1.1 Tipos

    p.mt-4 #[strong Podemos clasificar los usuarios turísticos de la siguiente manera]

    .row.mt-5
      .col-auto.mb-3
        .text-center
          img(src='@/assets/curso/tema1/1.svg' alt='Avatar')

      .col
        .p-4(style="background-color:#FFF1DB;")
          p #[strong Clientes]

          p.mt-4 Un cliente es toda persona que tiene una necesidad latente o sentida, que busca un producto o servicio con ciertos requisitos y condiciones para poder satisfacerla totalmente.

          p.mt-3 Un cliente, desde el punto de vista de la economía, es una persona que utiliza o adquiere, de manera frecuente u ocasional, los servicios o productos que pone a su disposición un profesional, un comercio o una empresa.

          p.mt-3 A la hora de reservar un hotel hay varios perfiles de usuarios. Cada uno de ellos reserva un hotel movido por unas razones y busca algo, que no es necesariamente, lo que buscan los demás.

          p.mt-3 El turista, viaja con un itinerario, con cierto nivel de seguridad debe realizar su viaje en un periodo con fecha de inicio y final establecidos; sale con todo previsto y perfectamente organizado desde casa. 

          p.mt-3 Reservas de hoteles y transporte confirmadas, visitas a realizar; intenta gozar de un área de confort durante el viaje que no lo separe demasiado de sus hábitos. 

          p.mt-3 El turista tiene una expectativa alta por la nueva experiencia y un bajo nivel de involucramiento en la comunidad local.

    .row.mt-5
      .col-auto.mb-3
        .text-center
          img(src='@/assets/curso/tema1/2.svg' alt='Avatar')

      .col
        .p-4(style="background-color:#FFF1DB;")
          p #[strong Viajeros]

          p.mt-4 Viajar es trasladarse de un lugar a otro utilizando cualquier medio de transporte y hacer turismo es realizar la actividad viajera por placer.

          p.mt-3 Un viaje puede hacerse por muchas circunstancias, mientras que el turismo está siempre asociado al ocio y a la diversión.  El viajero, aunque haga cierta planificación de su viaje, se preocupará menos de estas certidumbres con la expectativa que hará lo que los acontecimientos viajeros le traigan día a día, ya que sabe que para vivir su experiencia ha de salir de su rutina diaria.

          p.mt-3 El viajero maneja la más alta expectativa por lo desconocido, lo exótico y lo nuevo; generalmente busca involucrarse en la comunidad local y entender otras formas de vida; el viajero no lleva un itinerario específico o un plan trazado.

          p.mt-3 Para ampliar la información, te invitamos a leer el artículo “Diferencias entre un turista y un viajero”, el cual se encuentra en el material complementario.

    .col-lg-8.mt-5
      a.anexo.mb-4(href="https://www.entornoturistico.com/diferencias-entre-un-turista-y-un-viajero/" target="_blank" style="background-color:#F6F6F6;" title="Abrir articulo")
        .anexo__icono
          img(src="@/assets/curso/tema1/3.svg")
        .anexo__texto
          p(style="color:#12263F;font-weight:bold;") Para ampliar la información, te invitamos a leer el artículo “Diferencias entre un turista y un viajero”, el cual se encuentra en el material complementario.

    .row.mt-5
      .col-auto.mb-3
        .text-center
          img(src='@/assets/curso/tema1/4.svg' alt='Avatar')

      .col.mt-5
        .p-4(style="background-color:#FFF1DB;")
          p #[strong Pasajeros]

          p.mt-4 Término que se refiere a una persona que realiza un viaje en algún tipo de medio de transporte, sin ser quien lo conduce y sin formar parte de la tripulación. 

          p Los turistas suelen convertirse en pasajeros al comienzo y al final de sus vacaciones ya que, para llegar al destino elegido, lo normal es que se trasladen en un vehículo contratado.

          p.mt-3 Es muy común en la industria, el término “pax” que hace referencia a pasajero.

    SlyderD.mt-5(:datos="datosSlyder")

    .row.mt-5.p-5.fondo-image1
      .col-3.text-center
        img(src='@/assets/curso/tema1/10.svg' alt='Avatar' style="display:inline;max-width:110px;")
      .col-9
        .p-4.bg-white
          p Se podría afirmar que cada persona acorde a sus características, costumbres y gustos, puede ser un tipo de usuario turístico según el momento de su vida en que haga uso del servicio.

    .col-lg-8.mt-5
      a.anexo.mb-4(href="https://www.mabelcajal.com/2019/04/tipos-de-turismo.html/" target="_blank" style="background-color:#F6F6F6;" title="Abrir articulo")
        .anexo__icono
          img(src="@/assets/curso/tema1/11.svg")
        .anexo__texto
          p(style="color:#12263F;font-weight:bold;") Para profundizar su conocimiento sobre los tipos de turismo puede escuchar el PODCAST de la experta Mabel Cajal.

    .titulo-segundo.mt-5
      #t_1_2.h4 1.2 Características

    p.mt-4 En todo el mundo la mayor cantidad de viajeros provienen de las ciudades, con el deseo de salir de estas durante sus periodos de vacaciones, en beneficio del individuo y por diferentes motivaciones: culturales, de salud, deseo de cambio, de compras, descanso, práctica de deporte, conocer, o pasarla bien en todo sentido.

    p.mt-3 El turista experimenta una variación en su conducta habitual, sin alterar su carácter o forma de ser, el viajar predispone en forma especial a todo lo que pueda experimentar, esto reside en la curiosidad, incrementándose la sensibilidad y la capacidad de recepción. En turismo la promoción solo es realmente efectiva al ofrecer alternativas de un mismo viaje.

    .titulo-segundo.mt-5
      #t_1_3.h4 1.3 Teoría de las necesidades

    p.mt-4 El psicólogo Abraham H. Maslow (1943) afirmó que todos los seres humanos están perpetuamente deseando y que sus necesidades son psicológicas y sociales. Estableció una jerarquía de las necesidades y determinó que a medida que les dé un orden inferior se satisfacen, surgen otras de rango superior. Esto se justifica porque la percepción de los deseos no es absoluta, es decir, cuanto mayor es la satisfacción de un deseo, menor es la necesidad de satisfacerlo.

    p.mt-3 #[strong A continuación te presentamos la pirámide que presenta la teoría de las necesidades humanas, elaborada por Maslow.]

    .col-8
      img.mt-5(src='@/assets/curso/tema1/12.svg' alt='Avatar')

    p.mt-4 Esta teoría establece que a lo largo de la vida un ser humano a medida que va satisfaciendo sus necesidades, Otras de orden superior toman el predominio de su comportamiento

    .col-10.mt-4
      .p-4(style="background-color:#FFF3EB;")
        p #[strong Necesidades básicas o fisiológicas:]

        p.mt-3 son las únicas inherentes en toda persona, básicas para la supervivencia del ser humano como respirar, alimentarse, vestirse, sexo, etc.

    .col-10.mt-3
      .p-4(style="background-color:#FFF3EB;")
        p #[strong Necesidades de seguridad:]

        p.mt-3 busca crear y mantener una situación de orden y seguridad física (salud), económica (ingresos), necesidad de vivienda, etc.

    .col-10.mt-3
      .p-4(style="background-color:#FFF3EB;")
        p #[strong Necesidades sociales:]

        p.mt-3 implica el sentido de pertenencia a un grupo social, familiar, de amigos, pareja, etc.

    .col-10.mt-3
      .p-4(style="background-color:#FFF3EB;")
        p #[strong Necesidades de estima o reconocimiento:]

        p.mt-3 como la confianza, la independencia personal, las metas financieras, la reputación.

    .col-10.mt-3
      .p-4(style="background-color:#FFF3EB;")
        p #[strong Necesidades de autorrealización:]

        p.mt-3 sólo puede ser satisfecho una vez cuando todas las demás necesidades han sido alcanzadas de manera suficiente. Es la sensación de haber llegado al éxito personal.

    p.mt-5 Utilizando este modelo de pirámide las empresas conocen los comportamientos de los individuos y por lo tanto lo que motiva a los clientes a comprar, así se utiliza como instrumento para que compren lo que se vende cubriendo y satisfaciendo una necesidad y no vayan a la competencia.

    .row.mt-5
      .col-6.mb-3
        .p-4(style="background-color:#FFD08C;")
          img(src='@/assets/curso/tema1/13.svg' alt='Avatar' style="display:inline;width:40px;")
          p.mt-3 Philip Kotler (1983), define las #[br] necesidades como

          h3.mt-4 Una sensación de carencia de algo, un estado fisiológico o psicológico.
          div(style="text-align:right;")
            img(src='@/assets/curso/tema1/14.svg' alt='Avatar' style="display:inline;width:40px;")
      .col-6
        p Necesidad, deseo y la demanda turística.

        p Ya entendemos a que se refiere #[strong “la necesidad”], el deseo se conoce como la forma en que una persona expresa la manera de satisfacer una necesidad en la que inciden varios factores como las características personales, su educación y creencias, entorno cultural social y ambiental, los estímulos de marketing y su capacidad adquisitiva.

        p.mt-3 #[strong Un deseo se convierte en demanda cuando una persona, canaliza el deseo para realizar una petición concreta de un producto.]

    p.mt-4 La demanda turística es el conjunto de bienes y servicios que los turistas están dispuesto a adquirir en un determinado destino, incluye el consumo y la experiencia de lugares, su motivación principal recae en el destino turístico, entre los factores que influyen en esta demanda son el poder económico, disponibilidad de tiempo y otros factores que le motiven.

    .text-center.col-9.mt-5(style="margin:0 auto;")
      img(src='@/assets/curso/tema1/15.svg' alt='Avatar' style="display:inline;")

    p.mt-5 La variación de los precios en relación con destinos y servicios similares, la falta de opciones de transporte y la diversidad de productos turísticos, entre otros, pueden afectar la demanda turística por un determinado destino. Schnarch Kirberg, Alejandro. (2017) Marketing de Fidelización.

    .titulo-segundo.mt-5
      #t_1_4.h4 1.4 Requerimientos y solicitudes especiales

    p.mt-4 El personal en los alojamientos siempre está dispuesto a enfrentar determinadas situaciones especiales en las cuales sus decisiones son la clave para resolver eficientemente los problemas generados.

    p.mt-4 #[strong Algunas posibles situaciones, entre otras.]

    .row.mt-4
      .col-6
        .p-3(style="background-color:#FFF1DB;border-radius:5px;")
          .row
            .col-auto.mb-2
              img(src='@/assets/curso/tema1/16.svg' alt='Avatar')
            .col
              p.mt-3 Flexibilidad en los horarios de entrada y salida.

      .col-6
        .p-3(style="background-color:#FFF1DB;border-radius:5px;")
          .row
            .col-auto.mb-2
              img(src='@/assets/curso/tema1/17.svg' alt='Avatar')
            .col
              p.mt-3 Ubicación del establecimiento y fácil reserva.

    .row.mt-2
      .col-6
        .p-3(style="background-color:#FFF1DB;border-radius:5px;")
          .row
            .col-auto.mb-2
              img(src='@/assets/curso/tema1/18.svg' alt='Avatar')
            .col
              p.mt-3 Salas de juntas para optimizar las reuniones de negocios.

      .col-6
        .p-3(style="background-color:#FFF1DB;border-radius:5px;")
          .row
            .col-auto.mb-2
              img(src='@/assets/curso/tema1/19.svg' alt='Avatar')
            .col
              p.mt-3 Conectividad inalámbrica o wifi.

    .row.mt-2
      .col-6
        .p-3(style="background-color:#FFF1DB;border-radius:5px;")
          .row
            .col-auto.mb-2
              img(src='@/assets/curso/tema1/20.svg' alt='Avatar')
            .col
              p.mt-3 Trato personalizado con el huésped.

    p.mt-4 El establecimiento siempre estará en disposición de cumplir los requerimientos, pero dentro de medidas y políticas establecidas que permitan al huésped recibir lo que requiere y que al mismo tiempo no implique inversiones extraordinarias.

    .titulo-segundo.mt-5
      #t_1_5.h4 1.5 Motivaciones de compra

    .row.mt-5
      .col
        p Los consumidores se ven influidos por una serie de factores y de condicionantes a la hora de elegir su destino para hacer turismo.

        p.mt-3 La demanda se ve afectada por los valores del individuo y su clase social. La mentalidad y el comportamiento van a marcar y definir los productos turísticos: el placer de viajar, los negocios, las condiciones de vida, el tiempo de ocio, los recursos financieros, el acceso a nuevas tecnologías, etc. 

        p.mt-3 El producto turístico enmarca un espacio de satisfacción de necesidades, los turistas llegan con una serie de expectativas sobre lo que pueden hacer por ellos (Ford 2001), por otro lado, el turista juzga los servicios a través de lo que percibe y cómo percibe.

      .col-auto
        img(src='@/assets/curso/tema1/21.svg' alt='Avatar')

    .titulo-segundo.mt-5
      #t_1_6.h4 1.6 Hábitos y tendencias de consumo

    .text-center.mt-4
      img(src='@/assets/curso/tema1/22.svg' alt='Avatar' style="display:inline")

    p.mt-4 El objetivo final de la industria hotelera tiene que ser conocer las expectativas y necesidades de cada turista y buscar mecanismos que permitan cubrirlas e intentar superarlas.

    p.mt-3 El problema al que se enfrentan los hoteles es que estas expectativas de los clientes van evolucionando, por lo cual tienen que analizar constantemente las tendencias y nuevas necesidades.  Para esto hay que realizar un análisis del comportamiento de los clientes, no como turistas, sino como consumidores, esto permite identificar sus patrones de comportamiento y permitirá definir qué productos y experiencias les satisfacen.

    p.mt-4 #[strong Cuanto más se conozca el cliente más fácil será:]

    .row.mt-4
      .col-auto
        img.mt-1(src='@/assets/curso/tema1/23.svg')
      .col
        p Cubrir sus expectativas o deseos, intentado superarlos.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema1/23.svg')
      .col
        p Ofrecerle productos que se adapten a su perfil y aumentar su gasto dentro de la industria turística.

    .row.mt-2
      .col-auto
        img.mt-1(src='@/assets/curso/tema1/23.svg')
      .col
        p Fidelizarlo a la empresa.

    p.mt-4 #[strong Las seis mega tendencias en la industria hotelera, son:]

    .col-10
      .row.mt-4
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 1
        .col.p-4(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p Si la reserva se confirma, se marca la casilla correspondiente (OK).

    .col-10
      .row.mt-2
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 2
        .col.p-3(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p La experiencia recibiendo el servicio en áreas como reservas, recepción y dentro del mismo hotel sea sencilla, cómoda y rápida. También se puede hacer uso de la geolocalización para enviarles información o notificaciones sobre productos basados en el lugar donde se encuentre el cliente.

    .col-10
      .row.mt-2
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 3
        .col.p-3(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p Los consumidores buscan marcas que se identifiquen con ellos de una manera emocional, que genere sentimientos con cualidades que les generen seguridad.  El toque personal ayuda al establecimiento a posicionarse.

    .col-10
      .row.mt-2
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 4
        .col.p-3(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p La tecnología se ha vuelto universal y afecta directamente la hotelería en diversas formas, los turistas se sienten muy bien con la variedad que esta le ofrece como información instantánea, herramientas de compra, canales de venta, opciones de productos y variedad de precios.
    .col-10
      .row.mt-2
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 5
        .col.p-3(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p Los hoteles tienen que ser creativos con las políticas de precios, no necesariamente bajando los precios sino ofreciendo valor añadido.

    .col-10
      .row.mt-2
        .col-auto.p-4(style="background-color:#FFF1DB;border-top-left-radius:7px;border-bottom-left-radius:7px;")
          h3.mb-0 6
        .col.p-3(style="background-color:#FFFBD9;border-top-right-radius:7px;border-bottom-right-radius:7px;")
          p No se puede centrar en ofrecer un producto por las características específicas del cliente como su nivel cultural entre otros, sino enfocarlo a sus deseos y motivaciones concretas.

    .col-8.mt-5
      a.anexo.mb-4(href="https://www.hosteltur.com/116944_seis-megatendencias-industria-hotelera-sabre.html" target="_blank" style="background-color:#F6F6F6;" title="Abrir articulo")
        .anexo__icono
          img(src="@/assets/curso/tema1/3.svg")
        .anexo__texto
          p(style="color:#12263F;font-weight:bold;") Para ampliar la información, te invitamos a leer el artículo “Seis megatendencias de la industrial hotelera según Sabre”, el cual se encuentra en el material complementario.

    .titulo-segundo.mt-5
      #t_1_7.h4 1.7 Incidencia de la cultura en el comportamiento

    p.mt-4 En gran parte, las decisiones de consumo y la forma de procesar la información se ven afectadas por la cultura. La cultura se refiere a las conductas típicas o esperadas, las normas e ideas que caracterizan a un grupo de personas; puede ser una poderosa influencia en todos los aspectos del comportamiento humano.

    .row.mt-4
      .col.mb-3
        p.mt-3 Cuando se observan grupos que se perciben similares a sus propios gustos se les considera como grupos de referencia, es decir, personas cuyos valores y opiniones comparten y respetan.

        p.mt-3 Su edad, su género y formación académica pueden afectar, ejemplo, en lo que pueden ser unas buenas vacaciones.  Otros factores como la clase social y composición familiar, aun sus valores, personalidad y estilo de vida tiene un efecto en la toma de decisiones en el momento de realizar turismo o utilizar los establecimientos de servicios hoteleros.

      .col-auto
        img(src="@/assets/curso/tema1/24.svg")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El turista por lo general planea su viaje organizadamente',
        texto: '',
        imagen: require('@/assets/curso/tema1/5.svg'),
      },
      {
        titulo:
          'El turista tiene una expectativa alta por la nueva experiencia',
        texto: '',
        imagen: require('@/assets/curso/tema1/6.svg'),
      },
      {
        titulo:
          'En tanto un viajero realiza los viajes de forma mas libre y espontanea',
        texto: '',
        imagen: require('@/assets/curso/tema1/7.svg'),
      },
      {
        titulo:
          'Se conoce como pasajero o “pax” a una persona que se moviliza en un medio de transporte.',
        texto: '',
        imagen: require('@/assets/curso/tema1/8.svg'),
      },
    ],
  }),
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
.btn-primario
  background-color:#FF9800
  color:#ffffff !important
.fondo-image1
  background: url('../assets/curso/tema1/9.svg')
</style>
