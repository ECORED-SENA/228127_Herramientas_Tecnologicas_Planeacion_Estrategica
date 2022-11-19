<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelos de gestión

    figure
      img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in-up")

    .col-lg-8.m-auto
      .p-4(style="border-radius:30px;background-color:#D9E9F1;position:relative;margin-top:-70px;")
        p.mb-0(data-aos="fade-up") La gestión empresarial para el desarrollo del proceso administrativo y el cumplimiento de su planeación exige de modelos que le faciliten el cumplimiento de estos, dentro de los más ajustados para el cumplimiento de los planes están los siguientes: Planeación estratégica, Balanced Scorecard (BSC) y Gestión Basada en Procesos.

    Separador.mt-5

    .titulo-segundo
      h2#t_4_1 4.1  Planeación estratégica

    p(data-aos="fade-up") Es uno de los modelos integrales que permite la fijación de objetivos empresariales a partir de un ejercicio de diagnóstico; determina objetivos y medidas estratégicas en las empresas con el fin de mantener su capacidad competitiva. Este modelo parte del reconocimiento de aspectos fundamentales como la misión y la visión, preceptos inspiradores del quehacer empresarial, y a partir de allí, determina la condición actual, fijando planes de acción en conformidad a las oportunidades y amenazas, fortalezas y debilidades.

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Técnica análisis DOFA

    .row.mt-5
      .col-lg-7(style="place-self:center")
        p(data-aos="fade-up") Esta técnica se ha convertido en una herramienta de análisis y planeación estratégica que permite identificar los factores y sus aspectos de variables internos y externos que inciden en la operación de la empresa y que la pueden estar afectando de manera favorable o desfavorable. Permite, a su vez, focalizar cuáles son los más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; asimismo, propicia que la empresa plantee una planeación de objetivos y fije las medidas estratégicas y de plan de acción para el desarrollo de su competitividad a futuro (JDELCA, 2020). 
      .col-lg-5(style="place-self:center")
        figure
          img(src="@/assets/curso/tema4/2.png" data-aos="fade-left")
    p.mt-5(data-aos="fade-up") Su aplicabilidad surge del concepto que se ha venido trabajando sobre los factores internos y externos, donde para cada uno establece dos condiciones así:

    .col-lg-10.mt-5.m-auto(style="position:relative")
      AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta" style="position:relative")
        .row.p-4(titulo="Factores Internos")
          p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. Recordemos que su particularidad está en que su estado depende de los esfuerzos de la empresa, por tanto, son controlables.
          .row.mt-4
            .col-lg-6.mb-4.mb-lg-0
              .p-4.pt-3.pb-4.bg-white(style="height:100%;")
                .row
                  .col
                    h5 Fortalezas
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema4/3.svg")
                p.mt-3 Las fortalezas son aquellos aspectos que domina la empresa para su supervivencia, lo que le permite operar, por lo que se distingue, en que es mejor que otros, etc.
                p.mt-3 Ejemplo la calidad del producto, por ello le compran y sobre todo le recompran.
            .col-lg-6.mb-4.mb-lg-0
              .p-4.pt-3.pb-4.bg-white(style="height:100%;")
                .row
                  .col
                    h5 Debilidades
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema4/4.svg")
                p.mt-3 Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables y la puedan estar induciendo a fracasos.
                p.mt-3 Por ejemplo, retrasos en las entregas.
        .row.p-4(titulo="Factores Externos")
          p Estos factores y sus aspectos de variables se deben analizar en conformidad a las condiciones en que están afectando la empresa en el momento en que se evalúa. En este caso, su particularidad está en que su estado NO depende de la empresa, sino que están en el entorno en que ésta opera, por tanto, NO son controlables.
          .row.mt-4
            .col-lg-6.mb-4.mb-lg-0
              .p-4.pt-3.pb-4.bg-white(style="height:100%;")
                .row
                  .col
                    h5 Oportunidades
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema4/5.svg")
                p.mt-3 Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo, crecimiento, porque el macroentorno se lo permite y lo favorece.
                p.mt-3 Por ejemplo, la reducción de los precios de los combustibles para una empresa transportadora.
            .col-lg-6.mb-4.mb-lg-0
              .p-4.pt-3.pb-4.bg-white(style="height:100%;")
                .row
                  .col
                    h5 Amenazas
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema4/6.svg")
                p.mt-3 Son las posibilidades que uno o varios aspectos del macro o micro entorno afecten negativamente a la empresa, reduciendo su operación, beneficio, crecimiento, etc.
                p.mt-3 Por ejemplo, un aumento en los precios de los combustibles para una empresa transportadora.

      p.mt-5(data-aos="fade-up") La técnica establece que una vez ya clasificada la información y determinado su nivel de impacto positivo o negativo se procede a armar la Matriz DOFA propiamente dicha, para tomar la decisiones o acciones haciendo los cruces pertinentes; esto implica focalizar en unos pocos aspectos críticos de los factores por cada tipo, los de mayor relevancia o impacto a la empresa, porque a partir de allí se tomarán decisiones, fijación de objetivos.

      .titulo-sexto.color-acento-contenido.mt-5
        h5 Tabla 4.
        span Estructura de la Matriz DOFA.
      figure.mt-4
        img(src="@/assets/curso/tema4/7.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") La técnica indica que, a partir del cruce de las condiciones actuales endógenas frente a las exógenas, la empresa debe tomar medidas o iniciativas estratégicas para actuar en favor de su condición o para mitigar o reducir el impacto. Las iniciativas estratégicas y de actuación FO y DO permitan el mejoramiento, el desarrollo, crecimiento de la empresa, pues el contexto facilita ampliar sus fortalezas o superar las debilidades. Estas iniciativas estratégicas y de actuación FA y DA buscan proteger la empresa, mitigar los riesgos o los efectos de las amenazas que no son controlables; el problema es que si la empresa es débil le será difícil afrontar esta situación, por lo cual debe prepararse en caso su ocurrencia, porque no son certeras las adversidades.
    p.mt-4(data-aos="fade-up") Le invitamos a ver el siguiente video con información relevante:

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tPldOKVesMQ" title="Planeación estratégica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_4_2 4.2  #[em Balanced Score Card] (BSC)

    p(data-aos="fade-up") El #[em Balanced Score Card] es un modelo o herramienta de gestión empresarial que convierte la visión o el objetivo a más largo plazo que tiene la empresa en acciones explícitas, mediante un conjunto de indicadores de gestión divididos en cuatro categorías o perspectivas que deben regir la empresa u organización; estas perspectivas son las siguientes:

    TabsC.color-acento-botones.mt-5
      .pt-5(titulo="Financiera" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p Esta perspectiva de la empresa busca evidenciar el nivel de respuesta a las expectativas de los inversionistas o socios de la empresa. Además, busca verificar y hacer seguimiento al valor para ellos mediante indicadores beneficio o utilidad, crecimiento de ingresos por ventas, crecimiento que reflejan el comportamiento operativo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/8.png')
      .pt-5(titulo="Enfoque al cliente" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p En esta perspectiva se busca analizar si los clientes y consumidores están satisfechos con los productos que obtienen de la empresa; su importancia radica en que permite pensar en qué se requiere para garantizar la retención de los clientes y la adquisición de nuevos clientes, su fidelización, de tal manera que se pueda obtener la rentabilidad esperada.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/9.png')
      .pt-5(titulo="Procesos internos" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            ul.lista-ul--color.mt-4.lista_4_1
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | Mide la calidad del producto o servicio final. 
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | Dimensiona el tiempo de respuesta del equipo operacional frente a las problemáticas y nuevos desafíos impuestos. 
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | Verifica el coste de los procesos de producción y operacionales. 
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | Analiza la capacidad de introducir los productos y servicios en el mercado. 
            p.mt-4 En esta perspectiva se deben medir los objetivos funcionales que están relacionados con los procesos propios de la actividad de la empresa.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/10.png')
      .pt-5(titulo="Aprendizaje y crecimiento" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p Busca medir la satisfacción y compromiso del personal de la empresa, el clima organizacional y los aspectos de disponibilidad de tecnologías de sistemas de información.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/11.png')

    p.mt-5(data-aos="fade-up") En la siguiente figura se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, que para su logro y desarrollo deben fijar y alcanzar objetivos por cada perspectiva, detallando los instrumentos de indicadores y metas de resultado.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 12.
      span Modelo de #[em Balanced Score Card] para la gestión empresarial.
    figure.mt-4
      img(src="@/assets/curso/tema4/12.svg" data-aos="zoom-in-up")

    Separador.mt-5

    .titulo-segundo
      h2#t_4_3 4.3  Gestión Basada en Procesos

    p(data-aos="fade-up") Convencionalmente, las organizaciones empresariales se han estructurado desde una concepción por departamentos o áreas funcionales, por la afinidad de las actividades, lo que dificulta tanto las comunicaciones en la agregación de los valores de una a otra función como la construcción y demandas hacia los clientes; este enfoque de gestión ha permitido definir estructuras a partir de jerarquización de cargos, pero el funcionamiento de la empresa, los flujos de información y comunicación interna o las relaciones con los cliente, no se ven reflejados con absoluta claridad y fluidez.
    p.mt-4(data-aos="fade-up") #[strong(style="background-color:#F2F5D1;padding:.2rem;") La Gestión Basada en Procesos] percibe a la empresa u organización como un conjunto de sistemas interrelacionado de procesos y subprocesos de diferente índole, que contribuyen conjuntamente a incrementar la satisfacción de los clientes. Es un modelo de gestión alternativo al modelo tradicional caracterizado por estructuras jerárquicas meramente funcionales que describen agregaciones de valor, de manera desarticulada, que depende del paso de áreas a áreas funcionales. 

    .col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-primario.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") Entonces, ¿cuál es la diferencia de la gestión de procesos frente al modelo tradicional?
            figure.col-8.m-auto.mt-3
              img(src="@/assets/curso/tema4/13.svg" data-aos="zoom-in-up")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") La #[strong Gestión por Procesos] es la forma de gestionar las organizaciones basándose en los procesos que desarrolla la empresa, pero ordenados como una secuencia de actividades orientadas a generar un valor añadido continuo, para lograr los resultados deseados, con lo cual es posible la satisfacción a los requerimientos técnicos y específicos que los clientes han planteado de manera mucho más eficiente y eficaz, lo que implica una concentración en los proceso propiamente dichos y no en la estructura jerárquica y de protocolos de comunicación entre áreas funcionales. 

      p.mt-5(data-aos="fade-up") Esto es, porque la calidad de los productos o servicios como la satisfacción del cliente dependen de tales procesos, es decir, son una consecuencia del trabajo bien hecho y de una agregación adecuada y oportuna de valores por parte de la empresa. En este sentido, el modelo de gestión por procesos, requiere una estructura organizacional que parte de la clasificación de los procesos que adelanta la empresa. A esta estructura se le asignan equipos de trabajo gestionados por un líder de proceso quien coordina las actividades internas y externas con otros grupos de procesos.

      .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema4/14.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-3.text-white ¿Cuáles son las características de la Gestión Basada en Procesos?
                p.text-white En este enfoque, los objetivos que define la organización empresarial se fijan desde el aporte que los procesos puedan obtener o dar.
              .col-sm-auto
                a.boton.color-acento-botones(href="" target="_blank" @click.prevent="modal1 = true")
                  span Ejemplo
                  i.fas.fa-search

      ModalA(:abrir-modal.sync="modal1")
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/15.svg')
          .col-lg-7
            p En una empresa el objetivo convencional es aumentar los niveles de facturación, lo que está estrechamente asociado con el proceso de comercialización. En esta área, la venta es el resultado de canalizar las demandas de los clientes y no es simplemente un acto que genera facturas correctamente. En este sentido, las empresas deben fortalecer su proceso comercial para que las ventas se realicen con mayor eficacia, es decir, con mejor respuesta para suplir las necesidades comerciales del cliente.
            p.mt-4 Recordemos que el documento de factura es la evidencia de este proceso; es el reflejo de todas las tareas que debe realizar el equipo comercial para concretar la venta.

    .mt-5.pb-5.cont_4_1(style="position:relative")
      .col-lg-10
        p(data-aos="fade-up" style="position:relative") Como observamos en el ejemplo, este ejercicio permite desarrollar sinergias entre las diferentes funciones o subprocesos; en el caso planteado, el proceso comercial y de facturación se homologarían en una sola secuencia lógica en favor de la satisfacción al cliente, de una manera mucho más eficiente y eficaz.
        .row.mt-4
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
            p(data-aos="fade-up" style="position:relative") En el modelo de gestión por procesos es fundamental conocer qué proceso existe detrás de un objetivo para trabajar la iniciativa de acción estratégica y lograr el objetivo. 
            .p-4.mt-4(style="background-color:#fff;position:relative")
              p(data-aos="fade-up" style="position:relative") En el ejemplo anterior en el que se pretende aumentar la facturación, se debe definir en el proceso comercial: 
              ul.lista-ul--color.mt-4.lista_4_1(style="position:relative")
                li.mb-0(data-aos="fade-up")
                  i.lista-ul__vineta
                  | Desde el portafolio de la empresa, establecer la línea o producto/servicio específico en el que se quiere el aumento de facturación.
                li.mb-0(data-aos="fade-up")
                  i.lista-ul__vineta
                  | Definir el mercado o segmento de clientes a los que se orientará el esfuerzo comercial.
                li.mb-0(data-aos="fade-up")
                  i.lista-ul__vineta
                  |  Identificar los medios de comercialización que se utilizarán en el proceso, es decir, los canales de distribución, publicidad, etc.
                li.mb-0(data-aos="fade-up")
                  i.lista-ul__vineta
                  | Otros aspectos que la empresa considere pertinentes.
          .col-lg-4(style="place-self:center")
            figure(style="position:relative")
              img(src="@/assets/curso/tema4/17.png" data-aos="fade-left")

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Mapa de procesos

    p.mt-4(data-aos="fade-up") Es el recurso esquemático gráfico descriptivo que resume por categorías todos los procesos de la organización empresarial. Se parte de las necesidades de los clientes externos, las cuales interpreta y procesa la empresa por medio de procesos estratégicos, misionales u operativos, y los procesos transversales o de apoyo para que la empresa cumpla con su misión y el logro de los objetivos trazados en aras de la visión trazada.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 13.
        span Esquema de mapa de procesos.
      figure.mt-4
        img(src="@/assets/curso/tema4/18.svg" data-aos="zoom-in-up")

      .bloque-texto-a.color-primario.p-4.p-md-5.mt-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") Entonces, ¿cuál es la definición de proceso?
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") Un proceso es un conjunto de pasos, fases o actividades ordenadas de manera lógica y secuencial, que se relacionan entre sí o que interactúan con otros conjuntos de procesos o actividades. 

    p.mt-5(data-aos="fade-up") Entre todos los procesos se permite convertir la entrada (requisitos, recursos, etc.) en salidas deseadas (logros, avances en bienes productos, servicios), en una cadena definida previamente, en la cual se añade valor en cada proceso; esto quiere decir que los resultados de un proceso pueden ser las entradas del siguiente proceso En este propósito, cada conjunto de actividades o proceso, subproceso demandarán recursos de diversa índole como materias primas, insumos o suministros, mano de obra, maquinaria y equipos, entre otros, los cuales se adecuan en lo que se denomina método o procedimiento de trabajo.
    p.mt-4(data-aos="fade-up") Pero revisemos los diferentes tipos de proceso

    .col-lg-10.mt-5.m-auto(style="position:relative")
      AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta" style="position:relative")
        .row.p-4(titulo="Procesos Estratégicos")
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
            p(data-aos="fade-up") Son los que definen el cuerpo directivo de la empresa y representan los intereses de la junta de socios o junta directiva, es decir, a dónde se quiere llegar en su visión, en la misión en sí, en los tipos de actividad que realizarán, por ende, en los objetivos que, por lo general, definen lineamientos estratégicos comunes a la mayoría de las empresas como, por ejemplo, los mecanismos de mercadeo, la investigación y desarrollo de productos o servicios en una ruta de desarrollo empresarial y de mercado, la construcción de la cultura de calidad, las comunicaciones o difusión, entre otros. Cada empresa tiene sus propios procesos estratégicos de los cuales dependerán los procesos misionales.
          .col-lg-4(style="place-self:center")
            figure
              img(src="@/assets/curso/tema4/19.png")
        .row.p-4(titulo="Procesos misionales u operativos")
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
            p(data-aos="fade-up") Son aquellos que permiten recogen las necesidades de los clientes y convierten en realidad los bienes productos o servicios que oferta la empresa, por ende, son los que satisfacen las necesidades tácitamente a los clientes.
          .col-lg-4(style="place-self:center")
            figure
              img(src="@/assets/curso/tema4/20.png")
        .row.p-4(titulo="Procesos de Apoyo")
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
            p(data-aos="fade-up") Son los procesos que soportan la operación de la empresa, son esenciales para su funcionamiento, así no se relacionan muchas veces con el bien producto o servicio directamente. En este tipo se encuentran los procesos de Recursos Humanos, de Sistemas y procesamiento de Información, de Compras, Almacenamiento, contabilidad, entre otros.
          .col-lg-4(style="place-self:center")
            figure
              img(src="@/assets/curso/tema4/21.png")

    p.mt-5.text-center(data-aos="fade-up") Ahora, conozcamos los pasos que se deben seguir para aplicar el modelo de gestión por procesos:

    ImagenInfografica.color-secundario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/22.svg')
      .tarjeta.color-acento-contenido.p-3(x="46%" y="26%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Definir los momentos de seguimiento, control y evaluación con el fin de identificar posibles desviaciones.
      .tarjeta.color-acento-contenido.p-3(x="54%" y="26%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Requisitos #[br] Demandas  #[br] Productos  #[br] Servicios a obtener #[br] Proveedores  #[br] #[br] En procesos iniciales, el proveedor es de naturaleza externa; en los demás procesos regularmente los proveedores son los resultados de otros procesos de la empresa.
      .tarjeta.color-acento-contenido.p-3(x="59%" y="39%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Conjunto de actividades, ordenados lógica y secuencialmente en un diagrama de flujo de proceso, que se construye por bloques. 
      .tarjeta.color-acento-contenido.p-3(x="59%" y="59%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Cantidad, calidad. #[br] Recursos a utilizar. #[br] Tiempo para la obtención de los resultados. #[br] Costos, entre otros.
      .tarjeta.color-acento-contenido.p-3(x="54%" y="71%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Determinar los recursos que se necesitan para el desarrollo de las actividades del proceso y producir las salidas o productos entre los recursos están: materias primas, insumos y suministros, maquinaria y equipo, herramientas, información, etc.
      .tarjeta.color-acento-contenido.p-3(x="46%" y="71%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Definir las competencias profesionales u operativas que requiere el método del proceso.
      .tarjeta.color-acento-contenido.p-3(x="41%" y="59%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Definir el responsable del proceso.
      .tarjeta.color-acento-contenido.p-3(x="41%" y="39%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p.mb-0 Indicadores de gestión que permitan la regulación de los recursos, la oportunidad de las entregas, la eficiencia y la eficacia.










      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.acordion1 .acordion__activo
  background: url(../assets/curso/tema3/39.png)
  background-size: cover
  background-repeat: no-repeat
.acordion__accion__btn--a
  background-color: #E6FF48
.acordion1 .tarjeta
  background-color: #E8E8E7
.tabs-c__header
  margin-bottom: 0px
.lista_4_1 .lista-ul__vineta:before
  content: '● '
.bloque-texto-a.color-primario
  background-color: #F2F5D1
.cont_4_1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema4/16.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: top
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #E6FF48
</style>
