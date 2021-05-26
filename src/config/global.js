export default {
  global: {
    componenteFormativo: 'Habilidades de comunicación y técnicas de venta.',
    descripcionCurso:
      'La industria hotelera tiene como principal objetivo la prestación del servicio al cliente, por ello mediante este componente se hace necesario identificar las necesidades de este, a través de las técnicas de comunicación que se emplean entre el usuario y quien presta los diferentes servicios. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Usuarios servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Teoría de las necesidades',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Requerimientos y solicitudes especiales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Motivaciones de compra',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Hábitos y tendencias de consumo',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Incidencia de la cultura en el comportamiento',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'fas fa-video',
        numero: '2',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estándares ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de comunicación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Comunicación efectiva ',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Canales de atención',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Habilidades comunicativas',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Etapas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Técnicas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cotización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Definición',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Procedimiento',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Definición',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Políticas',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Gloria Matilde Lee Mejía',
        cargo: 'Responsable del equipo',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Diario del exportador. (2020/10). Los diez Componentes básicos del buen servicio . Lugar de publicación:',
      link:
        'https://www.diariodelexportador.com/2018/04/los-10-componentes-basicos-del-buen.html',
    },
    {
      referencia:
        'Dinámicas grupales (2020/10) Dinámicas bloqueos en la comunicación. Lugar de publicación:',
      link:
        'https://dinamicasgrupales.com.ar/dinamicas/comunicacion/dinamica-bloqueos-la-comunicacion/',
    },
    {
      referencia:
        'Hoyer- Macinnis- Pieters (2014) Comportamiento del consumidor 7ma edición',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7493&pg=33',
    },
    {
      referencia:
        'Hosteltur. (julio 2016). Seis mega tendencias de la industria hotelera según Sabre. Lugar de publicación:',
      link:
        'https://www.hosteltur.com/116944_seis-megatendencias-industria-hotelera-sabre.htm',
    },
    {
      referencia:
        'Lifeder (2020/10) ciclo del servicio al cliente: en empresa, hotel y salud. Lugar de publicación:',
      link: 'https://www.lifeder.com/ciclo-servicio-cliente/',
    },
    {
      referencia:
        'Marian Valencia (2020/11). 7 técnicas de comunicación eficaz que debes dominar. Lugar de publicación:',
      link: 'https://marianvalencia.com/tecnicas-de-comunicacion-eficaz/',
    },
    {
      referencia:
        'Novas, N. C. (2006). Promoción y Venta de Servicios Turísticos (1a. Edición ed.). La Habana, Cuba: Ideas propias, Editorial Vigo.',
      link:
        'https://books.google.es/books?hl=es&lr=lang_es&id=GDIxq8Zsj_0C&oi=fnd&pg=PT17&dq=servicios+tur%C3%ADsticos&ots=Jj3VGMN5Eb&sig=MIvPLT-',
    },
    {
      referencia:
        'Raúl Villanueva López (2017) Comunicación y atención al cliente en hostelería y turismo',
      link:
        'http://www.ebooks7-24.com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed=',
    },
    {
      referencia:
        'Schnarch Kirberg, Alejandro. (2017) Marketing de Fidelización',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5068&pg=76',
    },
    {
      referencia:
        'Scribd. (2020/11).  Atención al cliente. Lugar de publicación :',
      link: 'https://es.scribd.com/document/363401050/Atencion-Al-Cliente',
    },
    {
      referencia:
        'Uribe Macías, Mario Enrique.(2014) Gerencia del servicio. Alternativa para la competitividad',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5731&pg=1',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'Conducta en la comunicación que consiste en mantener el propio punto de vista sin agresividad ni sometimiento al criterio de nuestro interlocutor.',
    },
    {
      termino: 'Contexto',
      significado: 'Situación concreta en que se transmite el mensaje.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad que tenemos los humanos para ponernos en el lugar del otro.',
    },
    {
      termino: 'Enfatizar',
      significado:
        'Es recalcar, hacer hincapié en la comunicación, información o expresión de un mensaje',
    },
    {
      termino: 'Interlocutor',
      significado: 'Cada una de las personas que forman parte de un diálogo.',
    },
    {
      termino: 'Objeción',
      significado:
        'Razón o argumento que alguien opone a una idea o propuesta para rechazarla, negar o impedir que se lleve a cabo.',
    },
    {
      termino: 'Parafrasear',
      significado:
        'Consiste en repetir el mensaje, utilizando otras palabras para asegurar que el mensaje se entiende correctamente. Esta técnica se utiliza principalmente porque el receptor no ha entendido correctamente el mensaje, porque se ha despistado, porque se quiere enfatizar alguna información o para retomar la conversación.',
    },
    {
      termino: 'Persuasión',
      significado:
        'Consiste en inducir a uno con razones a creer o hacer alguna cosa',
    },
    {
      termino: 'Sintonía',
      significado:
        'Se da cuando los interlocutores coinciden totalmente en el sentido de un mensaje.',
    },
    {
      termino: 'Turista',
      significado:
        'Aquella persona que se desplaza fuera de su entorno habitual por un periodo de tiempo superior a veinticuatro horas, diferenciando este concepto del correspondiente al visitante de día o excursionista, cuya estancia es inferior a este tiempo.',
    },
  ],
  complementario: [
    {
      texto:
        'Entorno turístico Staff. (abril de 2021). Diferencias entre un turista y un viajero.',
      tipo: 'Artículo',
      link:
        'https://www.entornoturistico.com/diferencias-entre-un-turista-y-un-viajero/',
    },
    {
      texto:
        'Hosteltur. (julio de 2016). Seis megatendencias de la industria hotelera según Sabre.',
      tipo: 'Artículo',
      link:
        'https://www.hosteltur.com/116944_seis-megatendencias-industria-hotelera-sabre.html',
    },
    {
      texto:
        'Roy J. Lewicki (2012) Fundamentos de negociación. Ed. Mc-Graw Hill Interamericana',
      tipo: 'Libro digital página 45 hasta la 65',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=296&pg=45',
    },
    {
      texto:
        'Manuel Hernán Izaguirre Sotomayor (2010) Gestión y marketing de servicios turísticos y hoteleros. Ecoe Ediciones. 2da edición.',
      tipo: 'Libro digital Página 24 hasta la 33',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=1097&pg=51',
    },
    {
      texto:
        'Ramon Colet Arean, José Eduardo Polio Moran (2014)Procesos de venta. Ed. McGraw-Hill Interamericana.',
      tipo: 'Libro digital Página 40',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5349&pg=40',
    },
  ],
}
