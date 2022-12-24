<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Norma ISO 9001

    p(data-aos="fade-up") La calidad es una característica propia y natural de todo producto, bien o servicio, la cual es evidenciada por los clientes y su grado de satisfacción al momento de su consumo o uso. Es en este momento que este concepto tiene validez real, razón por la cual las empresas se preocupan por identificarlo de forma permanente, verificando la correcta agregación de los valores y el cumplimiento de los preceptos misionales. Anteriormente, las empresas revisaban la idoneidad de cada uno de los productos, lo que conllevaba elevados costos. Con el tiempo, se concluyó que una vez realizado el análisis sistémico, en los que los productos dependen de procesos controlados que tienen una oportuna y correcta agregación de los valores, es posible garantizar la calidad esperada. La empresa define la forma de elaborar o desarrollar sus actividades para alcanzar este fin, estableciendo un sentido de disciplina en el cumplimiento de estos procesos. 

    .row.col-lg-10.m-auto.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2.d-flex
            i.fas.fa-quote-left
            p(data-aos="fade-up") En esta evolución de refinamiento de la calidad, surge la Organización Internacional de Estandarización (ISO, por sus siglas en inglés); organización privada, autónoma e independiente que se dedica a establecer lineamientos que favorecen la uniformidad de los procesos en las empresas, que los aplican en los distintos sectores productivos de bienes, productos o servicios.
          .bloque-texto-d__autor.d-flex.align-items-end.w-100.justify-content-end
            .h5.mb-0.me-3(style="align-self:center;") - ICONTEC, 2015
            i.fas.fa-quote-right
      .col-lg-3(style="place-self:center")
        figure
          img(src="@/assets/curso/tema5/1.svg" data-aos="fade-right")

      .bloque-texto-a.color-primario.p-4.p-md-5.mt-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") ¿Qué son la familia de lineamientos o normas ISO 9000?
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") Son un conjunto de indicaciones que las empresas deben llevar a normas de ordenamiento y cumplimiento, que establecen las directrices para conseguir una determinada calidad del producto o servicio final, que también ayudan a definir un sistema de gestión de procesos de la misma. 

    p.mt-5(data-aos="fade-up") En sus inicios, estos lineamientos se idearon para empresas que producían productos materiales, excluyendo las compañías que se dedicaban a la prestación de servicios. Posteriormente, mediante diversas modificaciones y actualizaciones que sufrieron hacia el año 2000 se incluyó cualquier tipo de empresa.
    p.mt-4(data-aos="fade-up") A continuación, se presentan algunas de estas normas:

    .col-lg-10.m-auto.mt-5
      .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;")
        .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
          figure
            img(src="@/assets/curso/tema5/2.svg" data-aos="fade-right" style="max-width:100px;")
        .col-lg-10.ps-0(style="place-self:center")
          p.mb-0(data-aos="fade-up") Establece las directrices y principios básicos de calidad, así como el vocabulario de un sistema de gestión de calidad, se encarga de definir la terminología utilizada de manera común, de tal manera que no haya diferencias de conceptos al momento de auditorías de calidad o de procesos en las empresas.
      .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;")
        .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
          figure
            img(src="@/assets/curso/tema5/3.svg" data-aos="fade-right" style="max-width:100px;")
        .col-lg-10.ps-0(style="place-self:center")
          p.mb-0(data-aos="fade-up") Define el conjunto de requisitos mínimos en un sistema de gestión de la calidad, para que las empresas tengan un ejercicio eficiente. Es la norma más aplicada, ya que determina los mínimos estándares que deben alcanzar las empresas en una adecuada gestión, con el fin de obtener sus propósitos de eficiencia y cumplimiento de su promesa de valor al cliente, garantizando que los bienes, productos o servicios tengan idénticas características. Es de obligatorio cumplimiento.
      .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;border-bottom:2px #F3AB1D solid;")
        .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
          figure
            img(src="@/assets/curso/tema5/4.svg" data-aos="fade-right" style="max-width:100px;")
        .col-lg-10.ps-0(style="place-self:center")
          p.mb-0(data-aos="fade-up") Busca la mejora continua en el desempeño del sistema de gestión de calidad en las empresas, logrando niveles de eficiencia por rendimientos, innovación procedimental; procura que se den mejores resultados en los procesos.

      p.text-center.mt-5(data-aos="fade-up") Ahora, veamos algunas diferencias entre la familia de normas ISO 9000
      .tabla-a.color-acento-botones(style="position:relative")
        table
          thead(style="border:0;")
            tr
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") ISO 9000
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") ISO 9001
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") ISO 9004
          tbody
            tr(style="background-color:#E8F2F6;")
              td.p-5.text-center(style="border:0;border-right:1px #AFAFAF solid;") Se ocupa del vocabulario y los principios básicos para que las empresas y clientes hablen el mismo idioma.
              td.p-5.text-center(style="border:0;border-right:1px #AFAFAF solid;") Define los requisitos y lineamientos de cumplimiento que establecerá la empresa para garantizar la calidad.
              td.p-5.text-center(style="border:0;") Promueve el mejoramiento continuo de las prácticas y otros procesos de la empresa.

    p.mt-5(data-aos="fade-up") La finalidad general de la aplicación de las normas ISO 9001 es lograr que las empresas consigan niveles de calidad sostenible y la satisfacción del cliente, mediante el establecimiento de los procesos y una mejora continua periódica.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema5/5.png" data-aos="fade-left")
      .col-lg-6(style="place-self:center")
        p(data-aos="fade-up") La norma ISO 9000 se divide en siete lineamientos básicamente:
        ul.lista-ul--color.mt-4.lista_5_1
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Enfoque al cliente 
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Liderazgo gerencial
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            |  Participación del equipo de trabajo o personal de la empresa
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Enfoque basado en los procesos empresariales
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Mejora continua 
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Enfoque basado en hechos que soporten la toma de decisiones
          li.mb-0(data-aos="fade-up")
            i.lista-ul__vineta
            | Gestión de las relaciones

    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema5/6.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-3.text-white Sistemas de gestión de la calidad. 
                p.text-white Para ampliar sobre los aspectos propios de cada enfoque y la manera de aplicación según el enfoque de ciclo PHVA, con el cual debe operar la norma, se invita a consultar el anexo: Norma ISO 9001.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf" target="_blank")
                  span Enlace web
                  i.fas.fa-link

    p.mt-5(data-aos="fade-up") Entre los principales fines que se buscan con la aplicación de la norma ISO 9001 se encuentra:

    .row.mt-5
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 01
          p(data-aos="fade-up") Elevar y proyectar una mejor imagen y confianza ante el cliente. Al tener una certificación oficial de un organismo tan importante y reconocido como ISO, los clientes tienen más confianza en la empresa y en los productos o servicios que ofrece.
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 02
          p(data-aos="fade-up") Elevar los niveles de satisfacción de los clientes, ya que en sus procesos de mejora se puede identificar, necesidades distintivas, a las que si se da respuesta, se incrementa la fidelización de los clientes (expresión de elevados niveles de satisfacción de los clientes).
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 03
          p(data-aos="fade-up") Crear una cultura de calidad y refinamiento para la mejora continua en los trabajadores y equipos de trabajo de la empresa. Los empleados son un aliado estratégico de la empresa y son clave en este proceso, pues generan iniciativas.
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 04
          p(data-aos="fade-up") Elevar los niveles de eficiencia en las actividades y en los procesos de la empresa, lo que se expresa en la reducción de costos y gastos, coadyuvando a la generación de utilidades.







      
</template>

<script>
export default {
  name: 'Tema5',
  components: {},
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
.bloque-texto-d.color-secundario:before
  background-color: #EEF5F9
.bloque-texto-a.color-primario
  background-color: #F2F5D1
.lista_5_1 .lista-ul__vineta:before
  content: '● '
.tarjeta-numerada.color-acento-botones
  border-color: #F3AB1D
.tarjeta-numerada.color-acento-botones .tarjeta-numerada__numero
  background-color: #F3AB1D
.tarjeta-numerada.color-acento-contenido
  border-color: #ADADAD
.tarjeta-numerada.color-acento-contenido .tarjeta-numerada__numero
  background-color: #ADADAD
</style>
