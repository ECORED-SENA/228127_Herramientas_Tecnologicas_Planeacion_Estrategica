export default {
  global: {
    componenteFormativo: 'Organizaciones y gestión',
    descripcionCurso:
      'Este componente formativo desarrollará los temas relacionados con el concepto de organización y empresa, su clasificación y estructura, el concepto de análisis de factores que la afectan, internos y externos. Así mismo, tratará aspectos relacionados con el proceso administrativo y la planeación estratégica.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organizaciones',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso Administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Planeación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Organización',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Dirección',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Control',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores y variables que impulsan las empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Factores y variables internos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Factores y variables externos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Herramientas para el análisis de factores y variables internos y externos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modelos de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Planeación estratégica',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Balanced Score Card</em> (BSC)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Gestión Basada en Procesos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Norma ISO 9001',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Gestión por procesos',
      referencia:
        'Asturias Corporación Universitaria, Gestión por Procesos (s.f.).',
      tipo: 'Artículo',
      link:
        'https://www.centro-virtual.com/recursos/biblioteca/pdf/dgp_gestion_calidad/clase2_pdf1.pdf',
    },
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Terreros, D. Indicadores de gestión empresarial: características, tipos y ejemplos.',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/indicadores-de-gestion',
    },
    {
      tema: 'Plan de acción, cómo se elabora y ejemplos',
      referencia:
        'Zarate, D. ¿Qué es un plan de acción?, ¿cómo se elabora? y ejemplos. ',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/sales/plan-de-accion-empresa',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Es la probabilidad de que un factor, variable o aspecto crítico externo, muy relacionado con la actividad de la empresa, la afecta sin poder evitarlo, solo se puede mitigar o reducir el impacto.',
    },
    {
      termino: 'Cronograma',
      significado:
        'En planeación, se refiere a la determinación en función del tiempo de las actividades a realizar y los recursos a utilizar, para el desarrollo de las estrategias y acciones propiamente definidas en el plan de acción.',
    },
    {
      termino: 'Debilidad',
      significado:
        'Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables; por ejemplo, retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones.',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad facilitando su análisis; por ejemplo, los factores económicos,  de comercialización y de ventas.',
    },
    {
      termino: 'Factores relevantes',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, porque repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: 'Modelo de gestión',
      significado:
        'Concepción ideológica de concepto que fundamenta un criterio de cómo administrar los procesos en una empresa, conlleva aspectos estratégicos y operativos como el control.',
    },
    {
      termino: 'Norma',
      significado:
        'Lineamiento discrecional que adoptan las empresas de obligatorio cumplimiento, que se aplica para favorecer la gestión y los procesos empresariales.',
    },
    {
      termino: 'Proceso administrativo',
      significado:
        'Serie de fases de actividades que buscan dar un eficiente uso de los recursos y facilitar la dinámica empresarial, es decir, posibilita el cumplimiento de un propósito empresarial.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, cambiar, pero a su vez pueden ser mitigar o erradicar una debilidad ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo a partir de un factor o variable externa.',
    },
  ],
  referencias: [
    {
      referencia:
        'ATA-Autónomos-Federación Nacional de Asociaciones de Trabajadores Autónomos (2021, mayo). Diagnóstico Empresarial en tiempos de Covid-19. ',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },
    {
      referencia:
        'Beltrán Duque, A y Anzola Morales, O. L. (2013). Mejorando la competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'Garza, T. J. (2009). Administración Contemporánea. Reto para la empresa. Ed. Alhambra Mexicana.',
      link: '',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad. ',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      referencia:
        'ICONTEC, (2015). Norma Técnica Colombiana. NTC ISO 9001- Cuarta actualización.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
    {
      referencia:
        'JDELCA, A. E. (2020). ¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? ',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. En L. Jayh, México D.F.: Centro Regional de Ayuda Técnica.',
      link: '',
    },
    {
      referencia:
        'Rodriguez, D. (2012). Diagnostico organizacional (4ta Edición ed.). Mexico, D.F.: Alfa Omega Grupo Editor, S.A.',
      link: '',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadisticas- Instituto tecnológico Apizaco de Tlaxcala. ',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto',
        centro: 'Centro de Diseño y Metrología - Regional Bogotá',
      },
      {
        nombre: 'María Fernanda Chacón Castro',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Bogotá',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Palito',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
