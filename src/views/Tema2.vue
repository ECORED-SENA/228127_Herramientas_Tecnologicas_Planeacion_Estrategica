<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso Administrativo

    p(data-aos="fade-up") La administración de las empresas exige el desarrollo de las cuatro fases del proceso administrativo: #[strong(style="background-color:#F2F5D1;padding:.2rem;") planeación, organización, dirección y control,] sobre el conjunto de recursos administrativos que dispone para su operación, dentro de los que se mencionan físicos, talento humano, financieros, técnicos y tecnológicos. 
    p.mt-4(data-aos="fade-up") Como mencionamos, el proceso administrativo establece el aporte en de cada una de estas funciones a la empresa, así como la correlación o interdependencia entre ellas. Veamos el esquema:

    .col-lg-10.m-auto.mt-5
      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/1.svg')
        .tarjeta.color-acento-contenido.p-3(x="33.3%" y="10%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Identificación y definición del problema. Qué, cuánto y cómo producir. Señala soluciones y alternativas y diseña políticas, medios de acción y procedimientos.
        .tarjeta.color-acento-contenido.p-3(x="33.3%" y="25%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Distribución del trabajo, creación de áreas funcionales; determinación de grupos de actividades por cargos, nueva estructura; asignación de recursos por cargo.
        .tarjeta.color-acento-contenido.p-3(x="33.3%" y="41%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Puesta en acción el plan seleccionado. Adquisición de los recursos tales como la contratación de personal. Dirección de la ejecución de las tareas, además de motivación y comunicación.
        .tarjeta.color-acento-contenido.p-3(x="33.3%" y="58%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Se realiza seguimiento a la ejecución de los planes y tareas, se mide el desempeño y se corrigen las desviaciones o atrasos respecto de la planeación y al logro de los objetivos.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Planeación

    p(data-aos="fade-up") La planeación se define como la determinación de un conjunto de actividades que permiten identificar y sensibilizar alternativas para lograr fines, a partir de una necesidad u objetivo, en la medida en que este es relevante.

    .row.mt-5.col-lg-10.m-auto
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="fade-right")
      .col-lg-7(style="place-self:center")
        p(data-aos="fade-up") El proceso de la función de planeación contiene varias etapas:
        ul.lista-ul--color.mt-4
          li.mb-2(data-aos="fade-up")
            i.lista-ul__vineta
            | Parte de la identificación de las necesidades, problema u objetivos.
          li.mb-2(data-aos="fade-up")
            i.lista-ul__vineta
            | Identifica el estado actual de la empresa.
          li(data-aos="fade-up")
            i.lista-ul__vineta
            | Reconoce las alternativas para lograr superar la necesidad, el fin o el objetivo.
        p.mt-4(data-aos="fade-up") Este proceso permite trazar la solución simultánea de varios tipos de necesidades o de problemas como en el caso de los resultados de la matriz DOFA, en la que cada cruce de oportunidades, fortalezas, amenazas y debilidades exige diferentes actuaciones y, por ende, diferentes alternativas, lo que requiere que el gerente o administrador tenga habilidad para formar equipos de trabajo, construir y consensuar las diferentes alternativas de solución.

      .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema2/3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-3.text-white Qué es un plan de acción, cómo se elabora y ejemplos
                p.text-white Para ampliar estos aspectos referentes a los planes de acción, se recomienda revisar el artículo Qué es un plan de acción, cómo se elabora y ejemplos.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://blog.hubspot.es/sales/plan-de-accion-empresa" target="_blank")
                  span Enlace web
                  i.fas.fa-link

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.2 Organización

    p(data-aos="fade-up") La organización, como función del proceso administrativo, busca la adecuación de los recursos empresariales.

    .col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-primario.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") Entonces, ¿en qué consiste este proceso a nivel empresarial?
            figure.col-6.m-auto.mt-3
              img(src="@/assets/curso/tema2/4.svg" data-aos="zoom-in-up")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") La organización se entiende como la agrupación de las actividades y los recursos necesarios por cada área funcional, para llevar a cabo las actividades en cumplimiento de los planes establecidos y mantener las relaciones entre los empleados, es decir, se trata de establecer, desde la estructura empresarial y sus áreas funcionales, un agrupamiento por cargos para ejecutar las actividades en lo que se denomina, división del trabajo, asignando para ello los recursos necesarios para su realización.

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Estructura organizacional

    p.mt-4(data-aos="fade-up") Para continuar, revisemos qué es la estructura organizacional:

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
        .cajon.color-primario.p-5(style="background-color:#D9E9F1;")
          p.mb-0(data-aos="fade-up") Es un mecanismo de ordenación que define cómo se dispondrán las actividades, las relaciones entre los trabajadores y demás componentes de la empresa. 
        p.mt-5(data-aos="fade-up") Con esta estructura es posible:
        ul.lista_2_1.lista-ul--color.mt-4
          li.mb-2(data-aos="fade-up")
            i.lista-ul__vineta
            | Esquematizar gráficamente las actividades de la empresa y relacionarlas con los equipos de trabajo.
          li.mb-2(data-aos="fade-up")
            i.lista-ul__vineta
            | Identificar el talento humano requerido en función de las actividades, lo que conlleva una mejor comprensión de la empresa y del quehacer ordinario.
          li(data-aos="fade-up")
            i.lista-ul__vineta
            | Definir el esquema de comunicaciones y de división del trabajo dando como resultado las áreas funcionales de una empresa.
      .col-lg-5(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/5.png" data-aos="fade-left")

    .cont_2_1.mt-5.pb-5(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Esta estructuración deriva en una jerarquización de los roles de la empresa, es decir, quiénes toman decisiones, quiénes coordinan las operaciones y quiénes ejecutan o verifican las acciones propiamente dichas.  
      p.mt-4(data-aos="fade-up" style="position:relative") Veamos el siguiente esquema:
      .col-lg-10.mt-5.m-auto(style="position:relative")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Estructura jerárquica y su distribución departamental en las empresas.
        figure.mt-4
          img(src="@/assets/curso/tema2/6.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Dentro de la estructura organizacional es importante definir cómo será el ordenamiento funcional, es decir, establecer el conjunto de actividades afines que conforman los departamentos o áreas de la empresa.
    p.mt-4(data-aos="fade-up") En este sentido, es necesario precisar que toda empresa tiene tres funciones básicas:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones.p-5(titulo="Producción o servicio" style="background-color:#D9E9F1;")
        p Es el conjunto de actividades relacionadas con las actividades principales de la empresa. 
        p.mt-4 Si la empresa desarrolla actividad productiva para la obtención de productos agropecuarios, su área o departamento de producción será el conjunto de actividades propiamente relacionadas con ese propósito; pero si la empresa desarrolla como actividad principal productos intangibles como asistencia agrícola, control fitosanitario, etc., entonces, se denomina departamento de servicio, en lugar de producción.
      .tarjeta.color-acento-botones.p-5(titulo="Ventas y Comercialización" style="background-color:#D9E9F1;")
        p Se refiere al conjunto de actividades concernientes a la búsqueda de clientes, el desarrollo de oferta y venta efectiva de productos o los servicios que la empresa presta.
      .tarjeta.color-acento-botones.p-5(titulo="Administración" style="background-color:#D9E9F1;")
        p Conjunto de actividades complementarias a las técnicas de producción y de comercialización, que permiten el sostenimiento e integración de la empresa, vela por el manejo de los recursos y su disposición, sirve de soporte logístico a las otras dos funciones básicas empresariales.

    .col-lg-10.mt-5.m-auto(style="position:relative")
      .titulo-sexto.color-acento-contenido
        h5 Figura 3.
        span Ejemplo de organigrama de áreas funcionales para una empresa industrial.
    figure.mt-4
      img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-up")

    .col-lg-10.mt-5.m-auto(style="position:relative")
      .bloque-texto-c.color-secundario.p-4(style="background-color:#F2F5D1;")
        i.fas.fa-quote-right(style="color:#3185AF;")
        p.mb-2(data-aos="fade-up") Garza (2002) recomienda que toda empresa defina esquemas gráficos que faciliten a los nuevos trabajadores, personal interno, externo y, en general, a todas las dependencias de la empresa, una mejor comprensión de la organización y sus dependencias. Esto facilita los procesos de comunicación y de mejora continua.

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Organización y adecuación de recursos empresariales

    p.mt-4(data-aos="fade-up") El concepto de organización se ha usado para el proceso de agrupar y asignar recursos a un área funcional formada de varios cargos, los cuales se interrelacionan mutuamente, pero cada uno tiene unas actividades específicas, que constituyen el personal de una empresa.
    .row.mt-5
      .col-lg-10.mb-4.mb-lg-0
        p(data-aos="fade-up") La estimación de los diferentes recursos para operar una empresa parte de las funciones y actividades a realizar, las cuales se agrupan en cargos y estos, a su vez, son ocupados y desarrollados por personas a quienes se les asigna un salario en conformidad a sus capacidades y talentos. Así, los trabajadores necesitarán recursos físicos, técnicos y tecnológicos para el desarrollo de sus labores, por tanto, se deben asignar según corresponda. Algunos recursos no son asignables a un cargo o puesto en sí, sino que son activos de uso general los cuales se suman a las labores funcionales de los trabajadores.
        .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/9.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-3.text-white Ejemplo de organización de áreas
                  p.text-white Le invitamos a revisar el siguiente ejemplo de organización de áreas, actividades y recursos en una empresa, que describe la técnica para la asignación y estimación de recursos y el desarrollo de las actividades.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta.color-primario.p-4.mt-4(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-3.text-white Presupuesto de recursos administrativos por área o proceso
                  p.text-white Asimismo, si desea tener mayor detalle, consulte el documento Presupuesto de recursos administrativos por área o proceso, en el que puede evidenciar un modelo de organización. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-2(style="place-self:end")
        figure
          img(src="@/assets/curso/tema2/8.svg" data-aos="fade-left")

    .row.mt-5(style="position:relative")
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/3.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h5.mb-0(data-aos="fade-up") Recursos de Inventario

    p.mt-4(data-aos="fade-up") Entre los recursos físicos de activos que posee la empresa para su operación se encuentran los inventarios, que se refieren a las existencias de recursos para transformación, venta, uso o cualquier otro aspecto con fines operativos. Se encuentran almacenados en bodega, a espera de ser utilizados; regularmente se ordenan de la siguiente manera según su clase:

    .col-lg-10.m-auto.mt-5
      SlyderF(columnas="col-lg-6")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/11.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#D9E9F1;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventario de activos
              p.mt-4(style="color:#12263F;") Conjunto de recursos de capital que tiene la organización para su operación y el trabajo de los individuos. Se clasifican en bienes muebles e inmuebles.
              p.mt-4(style="color:#12263F;") Ejemplo: computadores muebles y escritorios, bodegas, lotes, fincas, etc.
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/12.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#E3F7F0;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventario de productos terminados
              p.mt-4(style="color:#12263F;") Se refiere a los productos que ya tienen completa su agregación de valor, cumplieron su proceso de producción y están esperando para ser distribuidos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/13.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#D9E9F1;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventarios de materias primas
              p.mt-4(style="color:#12263F;") Recursos esenciales para la elaboración o fabricación de bienes o productos, se clasifican en materias primas, insumos y suministros.
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/14.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#E3F7F0;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventarios de productos en proceso
              p.mt-4(style="color:#12263F;") Se refiere a las materias primas que ya han sufrido algún proceso de agregación de valor o transformación, pero que aún no han sido terminados totalmente.
              p.mt-4(style="color:#12263F;") Ejemplo: producción de huevos que no han sido preparados, pesados y embalados. Leche que se encuentra pasteurizada, pero no empacada está en silos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/15.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#D9E9F1;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventario de obsoletos
              p.mt-4(style="color:#12263F;") Es el inventario que posee la empresa de productos que ya están obsoletos, deteriorados, que cumplieron su vida útil o caducaron, dañados o estropeados y no pueden ser comercializados ni distribuidos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/16.svg' data-aos="zoom-in-up")
          .tarjeta.color-primario(style="background-color:#E3F7F0;")
            .p-5
              h5(data-aos="fade-up" style="color:#12263F;") Inventario de repuestos
              p.mt-4(style="color:#12263F;") Son aquellos recursos que posee la empresa para efectos de suplir fallas en máquinas o partes intercambiables, deben permanecer disponibles cuando sean necesitados por el departamento de producción y no interrumpir el proceso de producción. Ejemplo: llantas para los camiones, una cuchilla para un tractor o guadaña, etc.

    Separador.mt-5

    .cont_2_2.mt-5.pb-5(style="position:relative")
      .titulo-segundo(style="position:relative")
        h2#t_2_3 2.3 Dirección

      p(data-aos="fade-up" style="position:relative") La dirección, como función del proceso administrativo, consiste en dinamizar la empresa y poner en operación y ejecución la planeación (conjunto de iniciativas estratégicas para lograr los objetivos previstos). Una vez que se completa el proceso de planeación y de organización, se cumplirá con la disposición de los recursos para el desarrollo de las actividades, lo que presupone contratación de talento humano si se requiere, compra de recursos, arrendamiento o reorganización de tierras lotes, bodegas, ajuste de las asignaciones de las actividades de manera formal, de darse a lugar. La ejecución requiere de funciones como la comunicación para la coordinación y herramientas tecnológicas que faciliten este proceso, el liderazgo para hacer que las personas desarrollen sus labores con motivación y diligencia, en la oportunidad requerida.
      p.mt-4(data-aos="fade-up" style="position:relative") Veamos el siguiente video que nos ilustra sobre los estilos de dirección empresarial:
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ZJQWV0t1feU" title="Estilos de dirección empresarial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4 Control

    p(data-aos="fade-up") La función de control del proceso administrativo consiste en establecer resultados esperados en la planeación y compararlos contra los resultados obtenidos al ejecutar; en la medida que existan desviaciones, se realizan los ajustes necesarios para el logro de los resultados esperados.

    .col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-primario.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") Tengamos en cuenta...
            figure.col-8.m-auto.mt-3
              img(src="@/assets/curso/tema2/18.svg" data-aos="zoom-in-up")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") Debido a cambios en los costos o en otros factores, los resultados obtenidos, después de que el plan se ejecutó, pueden desviarse de los resultados esperados; esto se debe a la incertidumbre y al riesgo que existe en la producción; no obstante, es necesario identificar el tipo y magnitud de las desviaciones tan pronto como sea posible, pues tiene impactos directos contra las utilidades.
      p.mt-5(data-aos="fade-up") Esta fase del proceso se desarrolla de manera simultánea a su ejecución, va ligeramente después de las acciones y sus efectos, de tal manera que no es reactiva; se genera frente a dos situaciones:

      .mt-5.row
        .col-lg-6.mb-4.mb-lg-0.p-0
          .p-5.pt-4.pb-4(style="background-color:#D9E9F1;border-top-left-radius:15px;border-bottom-left-radius:20px;height:100%;")
            figure.col-4.m-auto
              img(src="@/assets/curso/tema2/19.svg" data-aos="zoom-in-up")
            ul.lista-ul--color.mt-4.lista_2_1
              li.mb-3(data-aos="fade-up")
                i.lista-ul__vineta
                | Si se ocasionan desviaciones, se pueden corregir y ajustar oportunamente. En esta fase se mide el desempeño y se contrasta con los indicadores de gestión establecidos previamente; a partir de allí, se procede a una interpretación y evaluación para identificar si se ha cumplido con lo esperado, así se seguirá con el proceso de medición en conformidad a lo programado, lo que no significa que en un futuro los resultados presenten dificultades. 
        .col-lg-6.mb-4.mb-lg-0.p-0
          .p-5.pt-4.pb-4(style="background-color:#E3F7F0;border-top-right-radius:15px;border-bottom-right-radius:20px;height:100%;")
            figure.col-4.m-auto
              img(src="@/assets/curso/tema2/20.svg" data-aos="zoom-in-up")
            ul.lista-ul--color.mt-4.lista_2_1
              li.mb-3(data-aos="fade-up")
                i.lista-ul__vineta
                | De existir desviaciones, es decir, si no se cumple con el indicador y su meta, entonces, se requerirá realizar acciones de ajuste al plan de acción o identificar la causa de la desviación, bien sea por problemas de costos o porque se hizo una mala medición, por lo que el indicador no arroja la información para obtener una conclusión.

    p.mt-5(data-aos="fade-up") Las empresas cuentan con muchos recursos técnicos y tecnológicos que facultan sus seguimientos a los planes y permiten recoger información de los indicadores de gestión, con el fin de detallar el comportamiento y trazabilidad de las acciones.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 4.
      span Control y seguimiento administrativo.
    figure.mt-4
      img(src="@/assets/curso/tema2/21.svg" data-aos="zoom-in-up")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #E6FF48
.bloque-texto-a.color-primario
  background-color: #F2F5D1
.lista_2_1 .lista-ul__vineta:before
  content: '● '
.cont_2_1:before
  position: absolute
  content: ''
  width: 125%
  left: -10%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/11.png)
  background-size: 100% 91%
  background-repeat: no-repeat
  background-position: top
.tabs-a__tab
  background-color: #E1E1E1
.bloque-texto-c:after
  background-color: #3185AF
.slyder-f__btn i
  background-color: #E6FF48
  font-size: 20px
  padding: 0.8rem 1.1rem
  border-radius: 100%
.slyder-f .tarjeta-avatar > img
  left: 32%
.slyder-f
  .horizontal-scroll
    display: flex !important
    align-items: stretch !important
    height: 100%
    .slyder-f__slyde
      display: flex
      align-items: stretch
.cont_2_2:before
  position: absolute
  content: ''
  width: 125%
  left: -10%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/17.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: top
</style>
