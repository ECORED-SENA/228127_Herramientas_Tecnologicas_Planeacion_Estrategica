<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Factores y variables que impulsan las empresas

    .row
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2.d-flex
            i.fas.fa-quote-left
            p(data-aos="fade-up") La operación empresarial se produce en un contexto de múltiples variables y aspectos que la afectan permanentemente; en los años recientes se ha complejizado por su alta dinámica, pluralidad de variables, nuevos escenarios y actores, a efectos de la ruptura por la globalización e internacionalización para la actuación empresarial. En este sentido, las empresas están llamadas a desarrollar capacidades competitivas mucho más exigentes y versátiles que les permitan la sobrevivencia; para ser reconocidas y estar a la vanguardia, deberán hacer mayores esfuerzos para desarrollar una ventaja competitiva creciente y sostenida, en la que se demanda la identificación de estos factores y variables que la impactan positiva o negativamente; además se pretende evaluar o anticipar las nuevas alternativas técnicas, operativas y administrativas que faciliten, desde el presente, el futuro empresarial.
          .bloque-texto-d__autor.d-flex.align-items-end.w-100.justify-content-end
            .h5.mb-0.me-3(style="align-self:center;") -  Rodriguez, 2012
            i.fas.fa-quote-right
      .col-lg-3(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/1.svg" data-aos="fade-right")

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Factores y variables internos

    p(data-aos="fade-up") Los factores internos o endógeno son el conjunto de variables o aspectos que impulsan e impactan el comportamiento empresarial, es decir, las actuaciones que dependen de la empresa, por tanto, son absolutamente controlables, identificando fortalezas y debilidades.

    .col-lg-10.mt-5.m-auto(style="position:relative")
      .bloque-texto-c.color-secundario.p-4(style="background-color:#F2F5D1;")
        i.fas.fa-quote-right(style="color:#3185AF;")
        p.mb-2(data-aos="fade-up") Según Laurence (2014) las fortalezas son las variables empresariales que impactan positivamente y facilitan su sostenibilidad y crecimiento mientras que las debilidades hacen que se pierda competitividad afectando la eficiencia y efectividad empresarial. 

    p.mt-5.text-center(data-aos="fade-up") Veamos estos factores internos:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 5.
        span  Factores internos.
      ImagenInfograficaB.color-primario.infografia_3_1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/2.svg')
        div(x="13%" y="33%" tooltip="Productos y servicios" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.svg")
            .col-lg-9
              h5 Productos y servicios
              p.mt-4 Se analiza el portafolio, las categorías, gama de productos, la rotación, productos más fuertes, la estacionalidad, la relación calidad/precio, los factores de diferenciación, promoción y otras consideraciones adicionales en función de la empresa como, por ejemplo, la asistencia técnica, garantías, el desarrollo de nuevos productos, la obsolescencia, vida útil y su cumplimiento, entre otros.
        div(x="38%" y="33%" tooltip="Gestión administrativa estratégica" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.svg")
            .col-lg-9
              h5 Gestión administrativa estratégica
              p.mt-4 Busca identificar los avances y dificultades frente al logro y cumplimiento de los preceptos institucionales; esto es identificar si cuenta con una misión plenamente definida, con una Visión de a dónde se quiere llegar, objetivos y metas en ruta de esa visión, principios y valores empresariales; asimismo, si tiene establecidos manuales de procesos de procedimientos para la ejecución de las actividades, manuales de funciones para los integrante de la organización, en los que se establezcan los aportes y desempeños de cada empleado.
        div(x="63%" y="33%" tooltip="Tecnología disponible" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.svg")
            .col-lg-9
              h5 Tecnología disponible
              p.mt-4 Contar con recursos actualizados como software integrado para lograr un mayor desarrollo, se evalúa el plan de renovación, sustitución y mantenimientos.
        div(x="88%" y="33%" tooltip="Posición Financiera" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.svg")
            .col-lg-9
              h5 Posición Financiera
              p.mt-4 Se estudiarán los estados financieros como el Balance general, estado de resultados, flujo de caja, cartera y su ciclo, la concentración de la misma, cartera de proveedores, es el endeudamiento a corto o largo plazo, la calidad de la deuda, entre otros que considere cada empresa.
        div(x="88.5%" y="64%" tooltip="Recursos humanos y organización" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.svg")
            .col-lg-9
              h5 Recursos humanos y organización
              p.mt-4 Se analizan variables como la composición de la planta de personal, su estructura organización, tipos de contratación, percepción del clima laboral, nivel de salarios.
        div(x="63.5%" y="64%" tooltip="Marketing y comunicación" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.svg")
            .col-lg-9
              h5 Marketing y comunicación
              p.mt-4 Se analizarán todos aquellos factores referentes al marketing mix y a la comunicación tanto la realizada por los medios tradicionales, como la comunicación online a través de banners, redes sociales, blogs, portales, entre otros.
        div(x="38.5%" y="64%" tooltip="Procesos empresariales" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.svg")
            .col-lg-9
              h5 Procesos empresariales
              p.mt-4 Se evaluarán los ámbitos de gestión, métodos, procedimientos, los sistemas de información, los procesos en línea y automatización, si son eficaces y suficientes, junto con los factores referentes a la producción, la cadena de valor, definiendo o revisando la necesidad de capacidades potencial y real, incluyendo logística e innovación.
        div(x="13.5%" y="64%" tooltip="Mercado de clientes" numero="+")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.svg")
            .col-lg-9
              h5 Mercado de clientes
              p.mt-4 Se estudiará el ámbito geográfico para ubicar la segmentación (características de los clientes), el posicionamiento o grado de recordación del producto o marca, la participación en el mercado o nivel de ventas, el modelo de negocio, los criterios de compra y factores de decisión, el censo de oferta o de competidores directos, clientes existentes, nuevos clientes potenciales, clientes insatisfechos, rotación de clientes, etc.

      .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema2/9.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-3.text-white Clasificación de clientes
                p.text-white Para saber más sobre la clasificación de clientes, puede consultar este documento. 
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Factores y variables externos

    p(data-aos="fade-up") Los factores externos o exógenos son el conjunto de variables o aspectos que impulsan e impactan el comportamiento de la empresa, pero que no depende de sus actuaciones, por tanto, no son de su control.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/11.png" data-aos="fade-left")
      .col-lg-6
        .color-secundario.p-4(style="background-color:#F2F5D1;")
          i.fas.fa-quote-right(style="color:#3185AF;font-size:2.5rem;")
          p.mb-2(data-aos="fade-up") Las múltiples variables se agrupan según su naturaleza en factores, determinando un escenario de macroentorno y microentorno, que permite identificar los cambios del escenario empresarial, sectorial o industria para reconocer posibles oportunidades de crecimiento o amenazas (Laurence, 2014).

    p.mt-5(data-aos="fade-up") Teniendo en cuenta el concepto anterior se infiere que:

    ul.lista-ul--color.mt-4.col-lg-10.m-auto
      li.mb-2(data-aos="fade-up")
        i.lista-ul__vineta
        | El macroentorno es la parte del entorno de la empresa más lejana, con variables que afectan de manera general a todas las empresas de un país o región, del mismo sector económico en que pueden estar operando; por ejemplo: legislaciones, aspectos tecnológicos, económicos, etc. 
      li(data-aos="fade-up")
        i.lista-ul__vineta
        | El microentorno es la externalidad próxima a la empresa como, por ejemplo, los proveedores, clientes y la competencia.

    p.mt-4(data-aos="fade-up") Revisemos cuáles son estos factores externos: 

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 6.
      span Factores y variables externos.
    ImagenInfografica.color-secundario.mt-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/12.svg')
      .tarjeta.color-acento-contenido.p-3(x="14.5%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p Legislación tributaria, comercial, laboral, etc., las políticas fiscales, el riesgo país, la estabilidad normativa.
      .tarjeta.color-acento-contenido.p-3(x="26.3%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p La recesión o reactivación económica, inflación, la tasa de cambio, el porcentaje de desempleo, las tasas de interés, el ingreso per cápita, y demás variable que considere la empresa con que esté relacionada.
      .tarjeta.color-acento-contenido.p-3(x="74%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p Composición social por edades, por género, por ubicación rural o urbana, tasa de natalidad, tasa de mortalidad, esperanza de vida, nivel educativo, estratos socioeconómicos, hábitos sociales y culturales, religión, etnias, etc.
      .tarjeta.color-acento-contenido.p-3(x="62%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p Formación para su manejo, nuevos avances, comercialización y representación de esas nuevas tecnologías inversión en I+D en el sector o actividad de la empresa, etc.
      .tarjeta.color-acento-contenido.p-3(x="50.1%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p En este factor se evalúa como se concentran, si están agremiados, como son las tendencias de consumo, si existe tasa de rotación de los clientes, el poder de negociación que tienen según su clasificación.
      .tarjeta.color-acento-contenido.p-3(x="38.3%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p Se busca identificar su concentración y ubicación, están agremiados, existe flexibilidad de precios, existen materias primas, insumos suministros sustitutos.
      .tarjeta.color-acento-contenido.p-3(x="85.6%" y="56.5%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
        p Como es el censo de composición de oferta de la zona de la empresa, existe rivalidad en el sector para la venta, tasa de crecimiento y presencia de nuevos actores, etc.

    p.mt-5(data-aos="fade-up") El ejercicio diagnóstico busca identificar los efectos y la medida en que cada uno de estos factores del entorno pueden impactar a la empresa, descubriendo oportunidades de desarrollo y las amenazas sobre las cuales debe prepararse para minimizar un impacto negativo, de manera que logre protegerse de dicho riesgo.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Herramientas para el análisis de factores y variables internos y externos 

    p(data-aos="fade-up") En las empresas, el ejercicio administrativo y gerencial es fundamental para establecer y desarrollar las actividades, con el fin de alcanzar los objetivos deseados definidos en la planeación; esto requiere que en su ejecución se obtenga información del estado de avance de las operaciones internas, de las condiciones externas para el desarrollo del plan, lo que en síntesis permite identificar el estado actual que rodea la empresa u organización, lo que conlleva a unas conclusiones que se denominan diagnóstico. Por lo anterior, existe una serie de herramientas que soportan la gestión empresarial, para optimizar su desarrollo y orientar la toma de decisiones y la dirección efectiva de la empresa (Duque y Anzola, 2013). 

    .row.mt-4.p-4(style="background-color:#D9E9F1;")
      .row.col-lg-10.m-auto
        .col-auto.d-md-block.d-none(style="place-self:center")
          figure
            img(src="@/assets/curso/tema3/13.svg" data-aos="fade-right")
        .col(style="place-self:center")
          p(data-aos="fade-up") Las herramientas de gestión facilitan el análisis de la organización y aumentan el control, ampliando el conocimiento de los procesos y actividades que se desarrollan que, en un ejercicio compartido con los diferentes actores de áreas funcionales, alinean la organización en la resolución de problemas y la definición de soluciones. Fijación de objetivos, entre otros. 
          p.mt-4(data-aos="fade-up") Con estas herramientas se hacen revisiones de variables cualitativas o cuantitativas para toma de decisiones, control y seguimiento de la operación de la empresa, en un ejercicio de control. 

    p.mt-5(data-aos="fade-up") Las herramientas de análisis empresarial son todos los métodos que se consideren para hacer más eficaz la administración de una empresa al facilitar la toma de decisiones. Entre las herramientas más utilizadas están las siguientes:

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Diagrama de Causa - Efecto

    p.mt-4(data-aos="fade-up") Es una herramienta para identificar de manera estructurada las causas o efecto de un problema evidenciado, a partir de un esquema gráfico que se asemeja a una espina de pescado como también se denomina a esta herramienta.
    p.mt-4(data-aos="fade-up") La técnica de utilización busca identificar las causas principales de un problema o efecto negativo en la empresa, Luego, identifica las subcausas o variables relacionadas con las causas principales que estén contribuyendo con el problema, estas son de carácter secundario e inclusive terciario como es el caso de proveedores que infieren en la disponibilidad de materias primas, insumos o suministros. Esta herramienta es muy versátil para analizar y resolver problemas complicados, pues permite un análisis desde los factores operativos más relevantes de la empresa.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 7.
      span Esquema Diagrama Causa - Efecto.
    figure.mt-4
      img(src="@/assets/curso/tema3/14.svg" data-aos="zoom-in-up")

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Diagrama de Pareto

    p.mt-4(data-aos="fade-up") Esta herramienta corresponde a un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa. Los pocos vitales son en gran medida los responsables de la mayor parte de los efectos negativos de los problemas en la empresa, asociados en una relación 70-30 o 80-20, esto es, que del total de los múltiples problemas que puede tener una empresa del 70% al 80% se concentran en pocas causas y el resto de los múltiples problemas representan del 20% al 30% de los casos. En este sentido, la empresa debe concentrar su atención en resolver esos pocos problemas que son vitales para el negocio, de forma que, al solucionarlos, probablemente se resolverán muchos de los aspectos menores (Gregorí, s.f.). Para una mayor comprensión veamos el siguiente ejemplo:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mt-5
        h5 Tabla 3.
        span Ejemplo comportamiento de las quejas y reclamos de clientes por artículos recibidos en un mes.

      .tabla-a.color-acento-botones.mt-4
        table
          thead(style="border:0;")
            tr
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Causas
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Quejas
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") %
              th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") % acumulado
          tbody
            tr(style="background-color:#E8F2F6;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;color:#B17702;") Comercial
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 50
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 32,05%
              td.p-4.ps-2.pe-2.text-center(style="border:0;color:#B17702;font-weight:bold;") 32,05%
            tr(style="background-color:#fff;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;color:#B17702;") Sucio
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 45
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 28,85%
              td.p-4.ps-2.pe-2.text-center(style="border:0;color:#B17702;font-weight:bold;") 60,90%
            tr(style="background-color:#E8F2F6;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;color:#B17702;") Defectuoso
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 21
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;color:#B17702;font-weight:bold;") 13,46%
              td.p-4.ps-2.pe-2.text-center(style="border:0;color:#B17702;font-weight:bold;") 74,36%
            tr(style="background-color:#fff;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") No corresponde
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 15
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 9,62%
              td.p-4.ps-2.pe-2.text-center(style="border:0;") 83,97%
            tr(style="background-color:#E8F2F6;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Vencido
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 10
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 6,41%
              td.p-4.ps-2.pe-2.text-center(style="border:0;") 90,38%
            tr(style="background-color:#fff;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Incompleto
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 8
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5,13%
              td.p-4.ps-2.pe-2.text-center(style="border:0;") 95,51%
            tr(style="background-color:#E8F2F6;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Mal Facturado
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 7
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4,49%
              td.p-4.ps-2.pe-2.text-center(style="border:0;") 100,00%
            tr(style="background-color:#fff;")
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;font-weight:bold;") Total general
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 156
              td.p-4.ps-2.pe-2.text-center(style="border:0;border-right:1px #AFAFAF solid;") 100,00%
              td.p-4.ps-2.pe-2.text-center(style="border:0;")

      .titulo-sexto.color-acento-contenido.mt-5
        h5 Figura 8.
        span Ejemplo del comportamiento de las quejas y reclamos de clientes por artículos recibidos en un mes.

      figure.mt-4
        img(src="@/assets/curso/tema3/15.svg" data-aos="zoom-in-up")

      .bloque-texto-a.color-primario.p-4.p-md-5.mt-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.text-center
            h3.mb-0(data-aos="fade-right") ¿Qué se puede evidenciar de la información anterior?
            figure.col-8.m-auto.mt-3
              img(src="@/assets/curso/tema3/16.svg" data-aos="zoom-in-up")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p(data-aos="fade-up") En este ejemplo se observa que del total de los 156 casos de quejas y reclamos, el 74,4% de los casos corresponden a tres causas, mientras que las otras cuatro causas de quejas solo contemplan el restante 25,6%; por lo cual, la empresa debe tomar decisiones relacionadas con estas causas que concentran la mayoría de las quejas de los clientes por los productos adquiridos, siendo que en la búsqueda de solucionar estos inconvenientes, y conscientes de la importancia para la empresa, los demás aspectos seguramente también se corregirán.

      p.mt-5(data-aos="fade-up") Esta herramienta es muy útil para el análisis en la empresa y facilita la toma de decisiones; por ello, es un ejercicio de aplicabilidad de la administración promoverla al interior de sus diferentes áreas funcionales.

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Matriz BCG

    p.mt-4(data-aos="fade-up") La matriz Boston #[em Consulting Group] (BCG, por sus siglas en inglés) es una herramienta desarrollada para el análisis gráfico del portafolio de productos, a partir de la posición que ocupa dentro de una empresa cada producto y su tendencia, con el fin de tomar decisiones para cada uno de estos, en búsqueda de la maximización de utilidades y beneficios.

    .cajon.color-acento-contenido.p-5.mt-4(style="background-color:#FEF4E1;")
      p.mb-0(data-aos="fade-up") Es una matriz de cuatro cuadrantes, en cada uno se establece una figura o ícono, que obedece a las características de comportamiento de las líneas de producto o los productos en sí. En el caso de los productos o servicios, se puede realizar una por cada tipo de producto y su mercado, se podrán comparar entre sí, los servicios se comparan aparte, para mantener un equilibrio de comparación, ya que los lotes de inversión son diferentes.

    p.mt-4(data-aos="fade-up") Esta clasificación de productos por categorías se da a partir de:

    .col-lg-9.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 6.
        span Factores y variables externos.
      ImagenInfografica.color-secundario.mt-4
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/17.svg')
        .tarjeta.color-acento-contenido.p-3(x="37%" y="36%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Son aquellos con gran crecimiento y que están logrando buena participación de mercado. A estos productos ubicados en este cuadrante hay que estimularlos, seguirles invirtiendo y no retirarles utilidades, para proyectarlos a productos vacas lechera.
        .tarjeta.color-acento-contenido.p-3(x="72%" y="36%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Son aquellos productos que tienen un rápido crecimiento, pero poca cuota de participación en el mercado, regularmente, porque son nuevos. Se recomienda seguir invirtiéndoles, porque son semillas que crecerán y se convertirán en productos estrella o vacas lecheras. Se tienen que supervisar permanentemente, porque se pueden convertir en productos perros, teniendo en cuenta que las personas consumen al inicio por exploración, pero si no gustan, no recompran, no crecerán.
        .tarjeta.color-acento-contenido.p-3(x="37%" y="74%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Son los productos más desarrollados que producen los ingresos más altos en la empresa, están bien posicionados en el mercado, aunque cada vez es más difícil aumentar su crecimiento de ventas, ya que el mercado se encuentra saturado o es inflexible. De los recursos de estos productos se pueden retirar utilidades para la sobrevivencia de la empresa e invertir en los otros productos como Estrellas e incluso interrogantes.
        .tarjeta.color-acento-contenido.p-3(x="72%" y="73%" numero="+" style="background-color:#fff;border:1px #3185AF solid;")
          p Estos productos no presentan crecimiento en ventas y tienen baja participación en el mercado frente a lo que se vende en el sector o industria, por ende, no contribuyen en los beneficios de la empresa regularmente, incluso llegan a generar utilidad negativa. En estos casos, se recomienda retirar del portafolio y oferta de productos estas referencias. En ocasiones hay que mantenerlos, ya que representan la tradición de la empresa, tienen el posicionamiento y generan la confianza en los otros productos de la empresa, aun cuando su contribución no es alta, seguramente, fueron vacas lechera, que por cambios en las tendencias de consumo o porque salieron productos para la misma función o servicio con mejor tecnología o eficiencia se quedaron relegados, se podrían desarrollar estos productos, para ver si se recompone su crecimiento. Este tipo de decisiones son las que deben tomar los empresarios al diagnosticar las potencialidades del producto.

    .col-lg-10.m-auto.mt-5
      .row.mt-4.p-4(style="background-color:#E3F7F0;")
        .row.col-lg-10.m-auto
          .col-auto.d-md-block.d-none(style="place-self:center")
            figure
              img(src="@/assets/curso/tema3/18.svg" data-aos="fade-right")
          .col(style="place-self:center")
            p(data-aos="fade-up") Estos cuadrantes se definen entre dos variables:
            ul.lista-ul--color.mt-1
              li.mb-1(data-aos="fade-up")
                i.lista-ul__vineta
                | Crecimiento en el mercado, aumento de las ventas.
              li(data-aos="fade-up")
                i.lista-ul__vineta
                | Eje de participación de mercado referido a las ventas en el sector o industria a la que contribuye la empresa o cuánto de lo que vende la empresa representa cada producto. 

      p.mt-5(data-aos="fade-up") Comprendido esto, la labor diagnóstica de la empresa es ubicar su portafolio de productos en los cuadrantes según corresponda. Puede haber varios en un solo cuadrante o cuadrantes sin productos.
      p.mt-4(data-aos="fade-up") Ahora revisemos el ejemplo de aplicación de la Matriz BCG:

    .col-lg-8.m-auto.mt-5
      ImagenInfograficaB.color-primario.infografia_3_1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/19.svg')
        div(x="28%" y="63%" tooltip="01" numero="1")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/20.svg")
            .col-lg-9
              p El producto 3 ubicado en el cuadrante de productos de interrogación, es quizá el producto más joven en la organización, su cuota de participación en el mercado está por debajo de lo que hace su competencia, sin embargo, las ventas demuestran un crecimiento superior al 15%, lo que deja entrever un certero producto que entrará a su fase de crecimiento y ampliación por ende de la participación en el mercado.
        div(x="37%" y="40%" tooltip="02" numero="2")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/21.svg")
            .col-lg-9
              p Este producto 2 presenta un nivel de participación en el mercado alto, por encima de sus competidores cercanos, con un fuerte crecimiento en ventas lo que lo caracteriza como un producto en la fase de crecimiento. Este es un producto que en magnitud puede manejar más volúmenes que el producto número uno, sin embargo, aún se encuentra en la etapa de crecimiento y por ser mayor al 10%, se presume que podría mejorar durante un tiempo. Luego, la decisión estratégica es mantener su inversión con el fin de garantizar este propósito de tal manera que cuando llegue a su etapa de madurez goce de las mejores condiciones de ventas y de participación en el mercado, donde seguramente será fuente de grandes beneficios para la empresa.
        div(x="63%" y="23%" tooltip="03" numero="3")
          .row
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/22.svg")
            .col-lg-9
              p Este producto 1 presenta un nivel de participación en el mercado alto superior al del competidor más cercano; sin embargo, presenta un nivel de crecimiento en ventas cercano al 5%, lo que deja entrever que a la empresa que oferta este producto cada vez le es más difícil conseguir mejores resultados de ventas, es decir, mayor crecimiento, esta condición hace que esté ubicado en el cuadrante de las vacas lecheras donde el deber ser del empresario es mantener su participación en el mercado y propender por aumentar el crecimiento en ventas, sino defenderlo.

    p.mt-5(data-aos="fade-up") A partir de la ubicación de estos productos del portafolio de la empresa, se deben establecer las medidas estratégicas para el sostenimiento, ampliación y defensa de estos productos, de continuar siendo atractivos y rentables para la empresa. En caso del ejemplo es evidente que los 3 productos deben continuar y que en especial los productos 2 y 3 deben ser tratados con acciones que les permita continuar su desarrollo y crecimiento, mientras que en el producto número uno las iniciativas buscarán la defensa de la participación en el mercado y la sostenibilidad del nivel de ventas en el largo plazo.

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Ciclo de vida del producto

    p.mt-4(data-aos="fade-up") Es la representación gráfica de las diferentes fases por las que atraviesan los productos desde su desarrollo hasta su retiro de la oferta del portafolio de productos de la empresa; Está constituido por cuatro fases plenamente identificables.
    p.mt-4(data-aos="fade-up") Reconozcamos en qué consisten cada fase:

    TabsC.color-acento-botones.mt-5
      .pt-5(titulo="Fase de introducción" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p A nivel comercial, todo producto inicia en el lanzamiento al mercado, se trata de una novedad para los clientes o consumidores, porque desconocen su desempeño, características, etc., lo que implica que las ventas sean bajas al principio, especialmente, si la empresa o marca asociada no es muy conocida; por ello requiere de inversiones iniciales en estrategias de marketing (promoción y publicidad) para su lanzamiento y distribución, colocación en tiendas, etc., de manera que tenga llegada a los clientes finales.
            p.mt-4 Antes de lanzar el producto se realiza el estudio, por lo que lo ideal es utilizar toda la información para llegar al tipo de público que pueda interesarse en ese producto u oportunidades para hacerlo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/23.png')
      .pt-5(titulo="Fase de Crecimiento" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p Esta fase consiste en un aumento de ventas en consecuencia de las acciones que se adelantaron durante la fase de introducción. Los consumidores conocieron el producto gracias a la promoción y publicidad, además de  estrategias de marketing que se implementaron, por lo cual se ha decidido confiar en la marca y seguir comprando o recomendar su compra. 
            p.mt-4 Esta fase se caracteriza por el aumento sostenido de las ventas. Se empiezan a consolidar beneficios o utilidades del producto; aunque aparecerán competidores que intentarán hacer lo mismo y mejorar el producto, se requiere que la empresa mantenga su estrategia de marketing para diferenciarse de la competencia y hacer mejoras al producto como ventaja competitiva. El cliente requiere que se mantenga la calidad del producto y el precio, por ello lo importante de añadir un valor o servicio extra. Por otro lado, como el producto se vuelve tendencia, es esencial el aumento de la distribución o presencia comercial para aumentar el número de nuevos clientes.
            p.mt-4 En esta fase, la empresa recupera su inversión y empieza a obtener beneficio o utilidad, por lo cual se debe tener una adecuada inversión para que esta curva de crecimiento aumente.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/24.png')
      .pt-5(titulo="Fase de Madurez" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p En esta fase el producto obtiene grandes niveles de ventas en unidades y, en consecuencia, en dinero. También enfrentará gran competencia, por lo que estos niveles de venta podrán reducirse rápidamente. Muchas empresas se suelen estabilizar en esa zona, porque han comprendido las exigencias de los clientes que atienden su oferta adecuadamente. Sin embargo, es probable que la empresa empiece a tener dificultades para crecer en ventas debido a una mayor competencia, a la saturación del mercado, con lo que se dificulta  aumentar las ventas (no hay más clientes a quien vender). Por ello, la empresa debe buscar nuevos mercados o segmentos geográficos, en los que no ha tenido actividad  comercial y avanzar en nuevas ventas. En esta fase la empresa obtiene utilidades sobre las cuales podrá disponer y solventar los gastos propios de la empresa y su actividad, así como disponer de recursos para promover iniciativas de nuevos productos, etc.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/25.png')
      .pt-5(titulo="Fase de Declive" style="background-color:#D9E9F1;")
        .row.p-4.pt-0
          .col-lg-8.mb-4.mb-lg-0
            p Esta fase se caracteriza por un cambio en las preferencias de compra de los clientes, una menor demanda del producto por cambios en las tendencias o modas, etc., lo que se expresa en la fuerte caída de ventas; de ser este el caso, el declive lo sufre también la competencia por lo que hay que entender que todos los productos tienen una vida limitada (salvo algunas excepciones que se amplían en el tiempo, pero con grandes esfuerzos de mejora), por lo que llega un momento en el que entran a no aportar a la empresa beneficios ni utilidades, sino que exclusivamente cubren sus costos o llegan inclusive a ser subsidiados por la misma empresa. Sea cual fuere la naturaleza del declive en ventas hay dos opciones:
            ul.lista_2_1.lista-ul--color.mt-4
              li.mb-1(data-aos="fade-up")
                i.lista-ul__vineta
                | Renovar el producto
              li(data-aos="fade-up")
                i.lista-ul__vineta
                | Retirar el producto totalmente de la oferta del portafolio y del mercado en sí.4
            p.mt-5 Esta decisión debe tomarla la empresa en función de las necesidades del público y de identificar si no es rescatable, ya que está en declive, lo que quiere decir que viene de grandes ventas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/26.png')

    p.mt-5(data-aos="fade-up") En la siguiente figura, podemos observar reflejadas las 4 etapas del ciclo de vida de un producto.

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 10.
        span Ciclo de vida del producto.
      figure.mt-4
        img(src="@/assets/curso/tema3/27.svg" data-aos="zoom-in-up")

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Relación de la Matriz BCG y el Ciclo de vida del producto

    p.mt-4(data-aos="fade-up") En la siguiente figura, se puede correlacionar la relación existente entre el ciclo de vida del producto y la matriz BCG identificando como el crecimiento en ventas se relaciona con la participación de mercado y el tiempo, con la tasa de crecimiento en ventas, lo que sirve para alinear las decisiones estratégicas en la empresa según el tipo de mercado, su clasificación y su ciclo de vida de producto.

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 11.
        span Relación de la matriz BCG y el ciclo de vida del producto.
      figure.mt-4
        img(src="@/assets/curso/tema3/28.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") La capacidad competitiva de un producto o servicio se debe correlacionar con su ciclo de vida en el que atraviesa al momento del diagnóstico con el fin de establecer las posibilidades estratégicas y de decisión. Un producto con buena participación en el mercado y un crecimiento sostenible en ventas, puede corresponder a una situación previa al declive, por lo cual la empresa deberá prepararse para hacer un reacondicionamiento o mejoramiento a su producto en beneficio de alargar la etapa de madurez, es decir, tomar las decisiones de defensa de su posición relativa de mercado y seguir promoviendo el bien producto o servicio como un bien de calidad de vida para sus consumidores y como una alternativa de consumo para el mercado en general.
    p.mt-4(data-aos="fade-up") En este sentido, la empresa, procurará, según la fase en que se encuentre su producto, agilizar su efecto y ampliar la fase de maduración. Cuando se empiezan a evidenciar pérdidas de atractivo en el mercado y disminución de ventas, reforzar su producto a efectos de evitar el declive. 

    .tarjeta-avatar-b.mt-5.col-lg-8.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema3/29.png' data-aos="fade-right")
      .tarjeta(style="background-color:#E3F7F0;")
        .p-4
          p.mb-0(data-aos="fade-up") Tengamos en cuenta que, en la etapa de introducción, los esfuerzos deben ser dinámicos ágiles, canalizar las inversiones para el posicionamiento y conocimiento, de forma que el producto llegue a los consumidores potenciales, para resolver el interrogante que representan estos productos en la matriz BCG.

    .cont_3_1.mt-5.pb-5(style="position:relative")
      .row(style="position:relative")
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
        .col.ps-0(style="place-self:center")
          h4.mb-0(data-aos="fade-up") Herramientas de información Estadística básica

      p.mt-4(data-aos="fade-up" style="position:relative") Los procesos de gestión como los procesos de diagnóstico empresarial requieren de información y análisis permanente, de tal manera que evidencien el estado actual, la evolución de los mismos, la tendencia y permitan la toma de decisiones. Una de las herramientas que facilita este ejercicio con la información en los procesos es la estadística, que se define como la ciencia dedicada al ordenamiento y análisis de conjuntos de datos para obtener descripciones, explicaciones o predicciones sobre aspectos percibidos y analizados (Gregori, s.f.).

      .col-lg-10.mt-5.m-auto(style="position:relative")
        .row(style="position:relative")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/3.svg" data-aos="fade-right")
          .col.ps-0(style="place-self:center")
            h5.mb-0(data-aos="fade-up") ¿Cuáles son los tipos de estadística?
        p.mt-3(data-aos="fade-up" style="position:relative") ¿Cuáles son los tipos de estadística?

        .row.mt-4.indicador__container(style="position:relative")
          .col-lg-6.mb-5.mb-lg-0(style="position:relative")
            figure(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;")
              .indicador--hover(v-if="indicadorTarjetas")
              img(src="@/assets/curso/tema3/31.png")
              .contenido__tarjetas.pt-2.pb-2.ps-4.pe-4
                h5 #[i.fas.fa-angle-up.me-2(style="background-color:#E6FF48;padding:.5rem .8rem;border-radius:100%;")] Estadística descriptiva
                p.mt-4 Se ocupa de los métodos para la recolección, la organización, y la presentación de resumen, de un conjunto de datos analizados, buscando describir sus características mediante instrumentos gráficos y de tablas.
          .col-lg-6.mb-5.mb-lg-0
            figure(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;")
              img(src="@/assets/curso/tema3/32.png")
              .contenido__tarjetas.pt-2.pb-2.ps-4.pe-4
                h5 #[i.fas.fa-angle-up.me-2(style="background-color:#E6FF48;padding:.5rem .8rem;border-radius:100%;")] Estadística inferencial
                p.mt-4 Más allá de resumir y describir datos, este tipo de estadística se ocupa de realizar predicciones y generalizaciones de situaciones, obteniendo conclusiones a partir de los datos utilizados en el análisis, siempre presumiendo un grado de incertidumbre o falla.

        .row.mt-5(style="position:relative")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/3.svg" data-aos="fade-right")
          .col.ps-0(style="place-self:center")
            h5.mb-0(data-aos="fade-up") ¿Cuáles son los elementos de la Estadística?
        p.mt-3(data-aos="fade-up" style="position:relative") Los principales elementos que conforman la estadística son los siguientes:

        .row.mt-5.pt-3.pb-3(style="border-top:2px #F3AB1D solid;")
          .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema3/33.svg" data-aos="fade-right" style="max-width:100px;")
          .col-lg-10.ps-0(style="place-self:center")
            h5(data-aos="fade-up") Población
            p.mt-4(data-aos="fade-up") Conjunto de datos que representan hechos, actuaciones, ocurrencias o individuos, que presentan una característica en común, que los describe y es posible proyectar incluso si hay más población.
        .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;")
          .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema3/34.svg" data-aos="fade-right" style="max-width:100px;")
          .col-lg-10.ps-0(style="place-self:center")
            h5(data-aos="fade-up") Muestra
            p.mt-4(data-aos="fade-up") Es una extracción o subgrupo de datos extraídos de una población que representa los rasgos generales de la totalidad del grupo y se acepta. La muestra puede ser igual a la población, cuando se hace de manera sensual, lo que hay que dejar explícito. En diagnósticos empresariales como el universo es pequeño, las consultas de clima, de percepción de cumplimientos misionales, etc, se aconseja realizarlos a todo el universo de empleados.
        .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;")
          .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema3/35.svg" data-aos="fade-right" style="max-width:100px;")
          .col-lg-10.ps-0(style="place-self:center")
            h5(data-aos="fade-up") Parámetros
            p.mt-4(data-aos="fade-up") Son descriptores de la población de datos analizados, son medidas propias que dan información sobre:
            ul.lista_3_1.lista-ul--color.mt-4
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | El centro de un conjunto de datos (promedios, datos más repetidos o moda).
              li.mb-0(data-aos="fade-up")
                i.lista-ul__vineta
                | Dispersión o variabilidad de los datos (medidas de dispersión).
              li(data-aos="fade-up")
                i.lista-ul__vineta
                |  Posición de un valor (medidas de posición como los percentiles).
        .row.pt-3.pb-3(style="border-top:2px #F3AB1D solid;border-bottom:2px #F3AB1D solid;")
          .col-lg-2.col-4.m-auto.pe-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema3/36.svg" data-aos="fade-right" style="max-width:100px;")
          .col-lg-10.ps-0(style="place-self:center")
            h5(data-aos="fade-up") Variables
            p.mt-4(data-aos="fade-up") Expresa las características o cualidades de una población de datos, pueden ser:
            ul.fa-ul.mt-4
              li(data-aos="fade-up")
                i.fas.fa-li.fa-circle(style="color:#F3AB1D;font-size:8px;")
                | #[strong Nominales:] que no tienen orden, por ejemplo, los colores, las razones por las cuales hay ausentismo en el trabajo, etc. 
              li(data-aos="fade-up")
                i.fas.fa-li.fa-circle(style="color:#F3AB1D;font-size:8px;")
                | #[strong Ordinales:] que si bien no son numéricas, si definen un sentido de ordenamiento natural. Por ejemplo, los días de la semana; también como grande, mediano, pequeño.
              li(data-aos="fade-up")
                i.fas.fa-li.fa-circle(style="color:#F3AB1D;font-size:8px;")
                | #[strong Númerica:] definen estrictamente un sentido de orden y se pueden hacer operaciones matemáticas con ellas, diferente a los otros tipos de variables.

      .row.mt-5.cont_row_1.p-5(style="position:relative")
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
          p(data-aos="fade-up") Ejemplos del uso de estadística en Economía:
          ul.lista_3_1.lista-ul--color.mt-4
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Indicadores macroeconómicos agregados como el PIB y su contraste en diferentes periodos.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Comportamiento de las tasas de interés en los últimos años.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Evolución de los precios por inflación en los últimos años.
          p.mt-4(data-aos="fade-up") Por estas razones los gerentes y el personal del equipo de diagnóstico deben aprender a utilizarla, para interpretar y usarla como fuente de información agregada o resumida de algún tipo de variable o factor a analizar, así mismo para expresar los hallazgos más significativos.
        .col-lg-5(style="place-self:center")
          figure
            img(src="@/assets/curso/tema3/38.png" data-aos="fade-left")

      .col-lg-10.mt-5.m-auto(style="position:relative")
        p(data-aos="fade-up") Ahora, conozcamos otras herramientas o técnicas de uso importante a nivel estadístico:
        p.mt-4(data-aos="fade-up") Para efectos de ampliar conocimientos y utilización de estas y otras herramientas estadísticas le invitamos a consultar la siguiente información:
        AcordionA.mt-5.acordion1(tipo="a" clase-tarjeta="tarjeta" style="position:relative")
          .row.p-4(titulo="Diagrama de frecuencias o estratificación")
            p Es una técnica de distribución de las frecuencias de una variable que busca estratificar el comportamiento de la misma, no denota un sentido de orden específico.
            p.mt-4 En el siguiente ejemplo se puede observar su enfoque de uso:
            p.mt-4 En una empresa agrícola, el gerente desea saber cómo es el consumo y venta de verduras; para ello, recurre al análisis estadístico del promedio de ventas de estos recursos, lo que le servirá como parámetro para tomar decisiones.
            .titulo-sexto.color-acento-contenido(style="position:relative")
              h5 Concentración del estado de cartera por ventas (millones).
              span
            .tabla-a.color-acento-botones(style="position:relative")
              table
                thead(style="border:0;")
                  tr
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;")
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Corriente
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") 30 días
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") 60 días
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") 90 días
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Total de cartera
                tbody
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="font-weight:bold;") Cartera
                    td.p-4.ps-2.pe-2.text-center(style="") 50
                    td.p-4.ps-2.pe-2.text-center(style="") 35
                    td.p-4.ps-2.pe-2.text-center(style="") 15
                    td.p-4.ps-2.pe-2.text-center(style="") 12
                    td.p-4.ps-2.pe-2.text-center(style="") 112
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="font-weight:bold;") Frecuencias
                    td.p-4.ps-2.pe-2.text-center(style="") 44.6%
                    td.p-4.ps-2.pe-2.text-center(style="") 31.3%
                    td.p-4.ps-2.pe-2.text-center(style="") 13.4%
                    td.p-4.ps-2.pe-2.text-center(style="") 10.7%
                    td.p-4.ps-2.pe-2.text-center(style="") 100.0%

            p.mt-4 A partir de esta información suministrada por el gerente de las centrales de mercado, y quien resumió los promedios del número de toneladas por producto que se venden diariamente en el en el mercado en una semana cualquiera, construyó el siguiente gráfico estadístico de estratificación de frecuencias de los productos.
            .titulo-sexto.color-acento-contenido.mt-4(style="position:relative")
              h5 Diagrama de estratificación del estado de cartera por ventas a clientes.
              span
            figure
              img(src="@/assets/curso/tema3/40.svg")
          .row.p-4(titulo="Histograma")
            p Es la distribución del comportamiento que denota la distribución de las frecuencias a lo largo de la variable continua. Veamos el ejemplo:
            p.mt-4 En el caso de las ventas en un semestre, el gerente desea saber cómo es su estacionalidad o comportamiento típico, para lo cual presenta la siguiente información
            .titulo-sexto.color-acento-contenido(style="position:relative")
              h5 Registro del nivel de ventas por mes en primer semestre.
              span
            .tabla-a.color-acento-botones(style="position:relative")
              table
                thead(style="border:0;")
                  tr
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;")
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Enero
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Febrero
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Marzo
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Abril
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Mayo
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Junio
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Total
                tbody
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="font-weight:bold;") Ventas/mes
                    td.p-4.ps-2.pe-2.text-center(style="") 55
                    td.p-4.ps-2.pe-2.text-center(style="") 20
                    td.p-4.ps-2.pe-2.text-center(style="") 70
                    td.p-4.ps-2.pe-2.text-center(style="") 50
                    td.p-4.ps-2.pe-2.text-center(style="") 40
                    td.p-4.ps-2.pe-2.text-center(style="") 65
                    td.p-4.ps-2.pe-2.text-center(style="") 300
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="font-weight:bold;") %
                    td.p-4.ps-2.pe-2.text-center(style="") 10.7%
                    td.p-4.ps-2.pe-2.text-center(style="") 7.1%
                    td.p-4.ps-2.pe-2.text-center(style="") 12.5%
                    td.p-4.ps-2.pe-2.text-center(style="") 12.1%
                    td.p-4.ps-2.pe-2.text-center(style="") 16.1%
                    td.p-4.ps-2.pe-2.text-center(style="") 21.4%
                    td.p-4.ps-2.pe-2.text-center(style="") 20.0%

            p.mt-4 En este caso, la variable continua es el tiempo (meses del primer semestre), entonces, el gerente del restaurante puede identificar el comportamiento de ventas mensual en el semestre, lo que describe la estacionalidad de ingresos semestral en la empresa por ventas. Con esta información, podrá tomar decisiones sobre la disposición de caja y programación de pagos; asimismo, establecerá niveles de metas funcionales, es decir, en periodos de baja estacionalidad, la empresa podrá desarrollar actividades de capacitación o entrenamientos, ya que para su desarrollo, requiere periodos de concentración en estas actividades sin afectar la producción. De igual manera, realizará la implementación de nuevos procesos, tal como se ve para el mes de febrero.
            .titulo-sexto.color-acento-contenido.mt-4(style="position:relative")
              h5 Histograma del comportamiento de ventas semestrales en una empresa.
              span
            figure
              img(src="@/assets/curso/tema3/41.svg")
          .row.p-4(titulo="Diagramas de Pastel")
            p Es otro esquema de representación gráfica estadística que busca descomponer una variable en sus diferentes categorías, mostrando la cantidad de frecuencia o casos, evidenciando cuanto del total corresponde cada categoría dentro de la variable. Veamos el ejemplo:
            p.mt-4 En un  restaurante se desea conocer el comportamiento o flujo de comensales en el horario de almuerzo, para lo cual el gerente recibe de su administrador la siguiente información.
            .titulo-sexto.color-acento-contenido(style="position:relative")
              h5 Toneladas de verduras vendidas por tipo de mercado.
              span
            .tabla-a.color-acento-botones(style="position:relative")
              table
                thead(style="border:0;")
                  tr
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Región
                    th.p-3(style="border:0;background-color:#DAE27F;font-size:18px;") Número de clientes
                tbody
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="") Boyacá
                    td.p-4.ps-2.pe-2.text-center(style="") 8
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="") Antioquía
                    td.p-4.ps-2.pe-2.text-center(style="") 15
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="") Tolima
                    td.p-4.ps-2.pe-2.text-center(style="") 11
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="") Cundinamarca
                    td.p-4.ps-2.pe-2.text-center(style="") 16
                  tr(style="background-color:#fff;")
                    td.p-4.ps-2.pe-2.text-center(style="") Total: Clientes regionales
                    td.p-4.ps-2.pe-2.text-center(style="") 50
            .titulo-sexto.color-acento-contenido.mt-4(style="position:relative")
              h5 Distribución de clientes de la empresa por región de operación.
              span
            figure
              img(src="@/assets/curso/tema3/42.svg")
        .tarjeta.color-primario.p-4.mt-5(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/43.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-3.text-white Herramientas estadísticas de la institución de Servicios de Educación Superior Tecnológica
                  p.text-white Las Herramientas estadísticas de calidad son un conjunto de técnicas gráficas que son útiles, conozcamos:   Las Herramientas estadísticas emitidas en la institución de Servicios de Educación Superior Tecnológica.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html" target="_blank")
                    span Enlace web
                    i.fas.fa-link
        .tarjeta.color-primario.p-4.mt-4(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/44.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-3.text-white Herramientas estadísticas básicas de la calidad de Pablo Gregori
                  p.text-white Para alcanzar la calidad hay que alcanzar unos objetivos y valorar la consecución de los mismos, en este caso se verá en : Herramientas estadísticas básicas de la calidad de Pablo Gregor.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
      .col.ps-0(style="place-self:center")
        h4.mb-0(data-aos="fade-up") Indicadores de gestión

    p.mt-4(data-aos="fade-up") Cuando se habla de indicadores de gestión, en seguida viene a la mente sinónimos de medición y control, que efectivamente es la función para la cual se establecen. Pero, ¿Cómo podemos definir los indicadores de gestión?

    .row.mt-5.cont_row_2.p-5.pt-4.pb-4(style="position:relative")
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/45.svg" data-aos="fade-left")
      .col-lg-8(style="place-self:center")
        p(data-aos="fade-up") Los indicadores de gestión son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones, actividades que desarrolla y que contrasta con los resultados esperados y fijados desde una planeación. Facilitan la evaluación de los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a estos resultados. 

    p.mt-5(data-aos="fade-up") Un indicador de gestión #[em Key Performance Indicator] (KPI, por sus siglas en inglés) representa la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio o la persona encargada están logrando las metas y objetivos o resultados esperados.
    p.mt-4(data-aos="fade-up") Se deben utilizar indicadores de gestión en todos los niveles empresariales para evaluar el desempeño y lo establecido como metas en la planeación de la gestión empresarial. A continuación, puede revisar algunos ejemplos:

    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: rgb(12,83,118);background: linear-gradient(360deg, rgba(12,83,118,1) 0%, rgba(49,133,175,1) 53%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/47.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-3.text-white Indicadores de gestión
                p.text-white Ejemplos de algunos indicadores de gestión aplicados a cada una de las áreas funcionales de la empresa.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetas: true,
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
.bloque-texto-c:after
  background-color: #3185AF
.img-infografica.color-primario .img-infografica__item__dot:before, .img-infografica.color-primario .img-infografica__item__dot:after, .img-infografica.color-primario .img-infografica-b__item__dot:before, .img-infografica.color-primario .img-infografica-b__item__dot:after, .img-infografica-b.color-primario .img-infografica__item__dot:before, .img-infografica-b.color-primario .img-infografica__item__dot:after, .img-infografica-b.color-primario .img-infografica-b__item__dot:before, .img-infografica-b.color-primario .img-infografica-b__item__dot:after
  background-color: #E6FF48
.img-infografica-b.color-primario .img-infografica-b__item__numero
  color: initial
.img-infografica-b__modal
  background-color: #D9E9F1
.img-infografica-b__modal__contenido div > *
  color: initial !important
.img-infografica-b__modal__btn-cerrar
  background-color: #E6FF48
.img-infografica-b__modal__btn-cerrar i
  color: initial
.lista-ul__vineta:before
  content: '■ '
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #E6FF48
.bloque-texto-a.color-primario
  background-color: #F2F5D1
.tabs-c__header
  margin-bottom: 0px
.tarjeta-avatar-b__img
  max-width: 90px
  min-width: 90px
  left: -30px
.cont_3_1:before
  position: absolute
  content: ''
  width: 125%
  left: -10%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/30.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: top
.contenido__tarjetas
  background-color: #D9E9F1
  position: absolute
  width: 100%
  height: 100%
  top: 0
  transform: translateY(80%)
  cursor: pointer
  transition: all .3s ease-out
.contenido__tarjetas:hover
  transform: translateY(20%)
.lista_3_1 .lista-ul__vineta:before
  content: '● '
.cont_row_1
  background: url(../assets/curso/tema3/37.svg)
  background-size: 100% 100%
  background-repeat: no-repeat
.acordion1 .acordion__activo
  background: url(../assets/curso/tema3/39.png)
  background-size: cover
  background-repeat: no-repeat
.acordion__accion__btn--a
  background-color: #E6FF48
.acordion1 .tarjeta
  background-color: #E8E8E7
.cont_row_2
  background: url(../assets/curso/tema3/46.png)
  background-size: 100% 100%
  background-repeat: no-repeat
</style>
