<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Manejo de la regresión y correlación aplicadas al entorno empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Hasta ahora, hemos explorado los conceptos fundamentales de correlación y regresión lineal. Hemos visto cómo estas herramientas estadísticas nos permiten cuantificar y modelar las relaciones entre variables, y cómo podemos usar estos modelos para hacer predicciones. En esta sección, veremos cómo estos conceptos se aplican en el mundo empresarial y cómo pueden informar la toma de decisiones estratégicas.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Interpretación de relaciones entre variables empresariales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto empresarial, la correlación y la regresión, se utilizan a menudo para entender las relaciones entre diversas variables de interés, como ventas, gastos de marketing, satisfacción del cliente, productividad de los empleados, etc. Interpretar correctamente estas relaciones, puede proporcionar información valiosa para la toma de decisiones.

        p(data-aos="fade-left").mb-5 Pensemos en un ejemplo. Suponga que es el gerente de marketing de una empresa de comercio electrónico y quiere entender cómo influyen sus esfuerzos de marketing en las ventas. Recopila datos sobre sus gastos semanales en publicidad en línea (variable independiente, x) y sus ventas semanales (variable dependiente, y), y encuentra que la correlación entre estas variables es de 0.98.
    
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5.mb-0.text-center Gastos Publicidad 
                th.bg-color-5.mb-0.text-center Ventas

            tbody.text-center
              tr
                td 1000
                td 10000
              tr
                td 1500
                td 12000
              tr
                td 2000
                td 15000
              tr
                td 2500
                td 18000
              tr
                td 3000
                td 20000
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          img.mx-auto.d-block(src="@/assets/curso/tema3/5.svg" alt="" style="width: 165px")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") Una correlación de 0.98, sugiere una relación positiva muy fuerte: a medida que aumentan los gastos en publicidad, también lo hacen las ventas. Esta información podría sugerir que aumentar el presupuesto publicitario podría impulsar el crecimiento de las ventas.
        p Pero recuerde, la correlación no implica causalidad. Aunque la fuerte correlación es sugerente, no prueba que los anuncios estén causando las ventas. Podría haber otros factores en juego, como mejoras en el producto o tendencias estacionales. Experimentos controlados serían necesarios para establecer causalidad definitivamente.
        .bg-color-2.px-5.py-4(data-aos="fade-left")
          p.mb-0 Aun así, incluso sin causalidad, las fuertes correlaciones pueden informar estrategias. En este caso, podría valer la pena aumentar experimentalmente el gasto publicitario y monitorear de cerca el impacto en las ventas. Con el tiempo y la recopilación de datos continuos, un modelo de regresión podría desarrollarse para predecir las ventas en función de los gastos de publicidad, lo que permitiría una planificación presupuestaria más informada.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Indicadores básicos: índices de crecimiento, variaciones porcentuales
    
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        p Dos métricas comunes que a menudo se analizan usando correlación y regresión son los índices de crecimiento y las variaciones porcentuales. Estos indicadores miden cómo una variable cambia con el tiempo, lo que puede ser útil para rastrear el desempeño e identificar tendencias.
        p Un índice de crecimiento mide el cambio relativo en una variable desde un punto de partida designado. Por ejemplo, supongamos que las ventas en el año base son de $100,000 y en el año actual son de $120,000. El índice de crecimiento para el año actual sería:
        .bg-color-5.p-4.mb-3(data-aos="fade-left").text-center
          p.mb-0 Índice de crecimiento = (Valor actual / Valor base) * 100
          p.mb-0 Índice de crecimiento = (120,000 / 100,000) * 100
          p.mb-0 Índice de crecimiento = 120
    
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p Un índice de crecimiento de 120, indica que las ventas han aumentado un 20 % desde el año base.
        p Las variaciones porcentuales, por otro lado, miden el cambio relativo de una variable de un periodo a otro. Por ejemplo, si las ventas fueron de $100,000 el año pasado y de $120,000 este año, la variación porcentual sería:
        .bg-color-5.p-4.mb-3(data-aos="fade-left").text-center
          p.mb-0 Variación porcentual = [(Valor actual - Valor anterior) / Valor anterior] * 100
          p.mb-0 Variación porcentual = [(120,000 - 100,000) / 100,000] * 100
          p Variación porcentual = 20 %
          p.mb-0 Esto indica que las ventas aumentaron un 20 % del año pasado al actual.
        p(data-aos="fade-left") La correlación y la regresión, pueden usarse con estos indicadores para entender sus impulsores y hacer predicciones. Por ejemplo, podrías examinar la correlación entre el índice de crecimiento de las ventas y el de la satisfacción del cliente. Una fuerte correlación positiva sugeriría que mejorar la satisfacción del cliente podría impulsar el crecimiento de las ventas.

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8
        p A continuación, se calculará el índice de crecimiento y una variación porcentual. 
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          div.text-center.mb-3
            p.mb-0 ventas_base = 100000
            p.mb-0 ventas_actual = 120000
            p.mb-0 ventas_anterior = 100000
            p.mb-0 indice_crecimiento = (ventas_actual / ventas_base) * 100
          p.mb-0 El índice de crecimiento de las ventas es: 120.0
          p.mb-0 variacion_porcentual = ((ventas_actual - ventas_anterior) / ventas_anterior) * 100  
          p.mb-0 La variación porcentual de las ventas es: 20.0 %

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En resumen, los índices de crecimiento y las variaciones porcentuales son indicadores útiles del desempeño a lo largo del tiempo. Analizar estos indicadores usando correlación y regresión puede ayudar a identificar los factores que impulsan el crecimiento y permiten predicciones informadas. Sin embargo, como siempre, es crucial considerar el contexto más amplio y evitar conclusiones precipitadas basadas únicamente en estas métricas.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Representación gráfica de la recta estimada y nube de puntos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") Una de las mejores maneras de comunicar los resultados de un análisis de regresión es a través de visualizaciones. Un gráfico bien diseñado puede transmitir rápidamente relaciones clave, tendencias y la fuerza del ajuste del modelo. Las dos visualizaciones más comunes para la regresión lineal son el diagrama de dispersión con la línea de mejor ajuste y la nube de puntos residuales.

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Imagine que es un analista de datos trabajando para una cadena de tiendas. Ha recopilado datos sobre las ventas diarias promedio (en miles de dólares) y el número de clientes para una muestra de 50 tiendas. Quiere visualizar la relación entre estas variables.
        p Primero, crear un diagrama de dispersión con las ventas en el eje y y el número de clientes en el eje x. Cada punto representa una tienda. Luego, ajuste una línea de regresión a estos puntos y la superpone en el gráfico.

    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5.mb-0.text-center Clientes
                th.bg-color-5.mb-0.text-center Ventas

            tbody.text-center
              tr
                td 10
                td 5
              tr
                td 15
                td 7
              tr
                td 20
                td 9
              tr
                td 25
                td 11
              tr
                td 30
                td 13
              tr
                td 35
                td 15
              tr
                td 40
                td 17
              tr
                td 45
                td 19
              tr
                td 50
                td 21
              tr
                td 55
                td 23
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-figura.mb-4
          h5 Figura 2.
          span Relación entre el número de clientes y las ventas    
    
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p El gráfico resultante mostrará los puntos de datos dispersos con una línea roja que representa la línea de mejor ajuste. La pendiente positiva de la línea indicaría que a medida que aumenta el número de clientes, también lo hacen las ventas. La proximidad de los puntos a la línea indicaría la fuerza de esta relación.
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de visualización es invaluable para comunicar hallazgos a las partes interesadas no técnicas. En lugar de presentar coeficientes de correlación o ecuaciones de regresión, puedes mostrar este gráfico para ilustrar claramente la relación positiva entre clientes y ventas.

        p(data-aos="fade-left").mb-5 Otro gráfico útil es la nube de puntos residuales. Los residuos son las diferencias entre los valores observados y los predichos por el modelo. Al graficar los residuos frente a los valores predichos, podemos evaluar visualmente si se cumplen los supuestos del modelo, como la homocedasticidad y la linealidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-figura.mb-4
          h5 Figura 3.
          span Nube de puntos aleatoria    
    
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En este gráfico, la nube de puntos está distribuida aleatoriamente alrededor de la línea y=0, lo cual es una señal de que los “supuestos” del modelo podrían estar bien ajustados. Si vemos un patrón, como un embudo o una curva, esto sugiere que los supuestos del modelo podrían estar violados y que el modelo podría necesitar modificaciones.

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 En resumen, los gráficos son herramientas poderosas para comunicar y evaluar modelos de regresión. El diagrama de dispersión con la línea de mejor ajuste ilustra visualmente la relación entre las variables y la fuerza del ajuste del modelo. La nube de puntos residuales permite una evaluación visual de los supuestos del modelo. Juntos, estos gráficos proporcionan una imagen completa del modelo de regresión que puede informar la toma de decisiones empresariales.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Importancia del análisis de relaciones entre variables
    
    p.mb-4 El análisis de las relaciones entre variables es una herramienta clave en la toma de decisiones empresariales, permitiendo comprender los factores que influyen en el desempeño organizacional.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Importancia del análisis de relaciones entre variables
            p.mb-4(data-aos="fade-right") En el PDF <b>Importancia del análisis de relaciones entre variables</b>, se exploran conceptos como la correlación y la regresión, ilustrando cómo estos métodos pueden ayudar a identificar patrones, optimizar procesos y mejorar la eficiencia en distintos contextos. A través de ejemplos prácticos, se analizará cómo el uso de datos cuantificables permite fundamentar estrategias empresariales y maximizar los recursos disponibles.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Importancia del análisis de relaciones entre variables.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')
    
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Aplicaciones empresariales de la regresión y correlación
    
    p.mb-4 Hasta ahora, hemos explorado los conceptos fundamentales de la regresión y la correlación, y hemos discutido su importancia en la toma de decisiones basada en datos en el mundo empresarial. En esta sección, profundizaremos en algunas aplicaciones específicas de estas herramientas en varios dominios de la administración de empresas.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Aplicaciones empresariales de la regresión y correlación
            p.mb-4(data-aos="fade-right") El uso de la regresión y la correlación en el ámbito empresarial permite analizar datos, identificar patrones y tomar decisiones estratégicas basadas en evidencia. En el PDF <b>Aplicaciones empresariales de la regresión y correlación</b>, se exploran diversos casos donde estas herramientas estadísticas son utilizadas para la predicción de ventas, el análisis de costos, la evaluación del impacto del marketing y la optimización de estrategias organizacionales. A través de ejemplos prácticos, se demuestra cómo estas técnicas pueden mejorar la eficiencia operativa y aumentar la rentabilidad de una empresa.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones empresariales de la regresión y correlación.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/18.png', alt='')
    
    p.mb-4 Para conocer una aplicación práctica, lo invitamos a escuchar el siguiente podcast.

    .row.mb-5.justify-content-center
      .col-lg-6
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Estadística Descriptiva Aplicada"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Recuerde, el poder del análisis de datos no viene solo de las técnicas estadísticas, sino de la capacidad de traducir esos análisis en información y luego en acción. Como administrador de empresas, su objetivo es ser ese traductor, ese puente entre los números y las decisiones.
 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/7791578.pdf" target="_blank" rel="noopener noreferrer") Torres Navarro, C., Malta Callegari, N., & Jara Olave, H. (2021). Modelos de regresión y diseño de línea base para indicadores energéticos en una empresa siderúrgica. Ingeniería Energética, 42(1).
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistadigital.uce.edu.ec/index.php/CATEDRA/article/download/3553/4817/21243" target="_blank" rel="noopener noreferrer") Soledispa-Rodríguez, C. (2022). Gestión empresarial en el desarrollo de capacidades docentes que impulsen el emprendimiento sostenible. Revista Cátedra, 5(2), 130-142.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/15xGsuPYGsU" target="_blank" rel="noopener noreferrer") Vilca, E. (2018, 18 de julio). BONUS - Ejemplos de correlación y regresión lineal con Excel [Video]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué mide el coeficiente de correlación de Pearson?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La relación entre dos variables sin dirección',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La causalidad entre dos variables',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La fuerza y dirección de la relación entre dos variables',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La variabilidad de una sola variable',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El coeficiente de Pearson mide cómo dos variables se relacionan entre sí, pero no implica causalidad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el rango de valores que puede tomar el coeficiente de correlación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Entre 0 y 1',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Entre -1 y 1',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Entre -2 y 2',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No tiene límite',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un coeficiente de -1 indica correlación negativa perfecta, 1 indica correlación positiva perfecta y 0 significa ausencia de relación.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'En gestión empresarial, ¿qué indica una correlación alta entre inversión en marketing y ventas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Que invertir más en marketing genera más ventas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Que el marketing es el único factor que afecta las ventas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Que hay una relación, pero no necesariamente causalidad',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Que se debe invertir menos en marketing',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Una correlación alta indica que las variables se mueven juntas, pero otros factores también pueden influir en las ventas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cómo se expresa la ecuación de regresión lineal simple?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'y=m+bx',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'y=mx+b',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'y = β0 + β1*x + ε',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'y=b+m',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El modelo de regresión lineal simple se expresa mediante la ecuación de una línea recta: y = β0 + β1*x + ε.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué significa un coeficiente de correlación de -0,85?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Correlación positiva fuerte',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Correlación negativa fuerte',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'No hay relación entre las variables',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Correlación baja',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un coeficiente negativo indica que cuando una variable aumenta, la otra disminuye.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
