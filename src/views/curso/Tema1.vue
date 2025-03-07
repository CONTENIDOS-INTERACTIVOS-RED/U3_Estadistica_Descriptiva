<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Correlación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La correlación es un concepto fundamental en la estadística, que busca medir y describir la relación o asociación entre dos variables cuantitativas. Su estudio permite determinar si los cambios en una variable están vinculados con los cambios en la otra, lo cual es de gran utilidad práctica, en diversos campos como la administración de empresas, donde constantemente se analizan datos para identificar patrones, tendencias y factores que influyen en el desempeño organizacional.
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto de correlación, limitaciones del análisis de correlación 
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La correlación se refiere al grado y dirección de la relación lineal entre dos variables. Indica qué tanto tienden a variar conjuntamente, es decir, si valores altos de una variable se asocian con valores altos de la otra (correlación positiva), valores bajos de una con valores bajos de la otra (correlación negativa), o si no hay relación consistente (correlación cercana a cero). Es importante entender que la correlación no implica causalidad; que dos variables estén correlacionadas no necesariamente significa que una causa la otra, podrían estar influenciadas por un tercer factor (Llinás Solano, 2017).
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un ejemplo en administración, sería analizar la correlación entre las horas de capacitación de los empleados y su productividad. Una correlación positiva sugiere que, a mayor capacitación, mayor productividad, pero no prueba que la capacitación sea la causa; podrían influir otros aspectos como la motivación. Por esto, los análisis de correlación, aunque muy útiles, tienen la limitación de no establecer causalidad y deben interpretarse con precaución (Romero Ramos, 2016).
        p Por ejemplo, supongamos que se estudia la relación entre las horas mensuales de capacitación (X) y la cantidad de unidades producidas por empleado (Y) en una fábrica, para una muestra de 10 trabajadores:
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5 Empleado
                th.bg-color-5 Horas de capacitación (X)
                th.bg-color-5 Unidades producidas (Y)
            tbody
              tr
                td 1
                td 5
                td 80
              tr
                td 2
                td 8
                td 93
              tr
                td 3
                td 4
                td 75
              tr
                td 4
                td 6
                td 82
              tr
                td 5
                td 9
                td 98
              tr
                td 6
                td 7
                td 89 
              tr
                td 7
                td 3
                td 70
              tr
                td 8
                td 5
                td 79
              tr
                td 9
                td 8
                td 95
              tr
                td 10
                td 6
                td 85
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Calcular e interpretar el coeficiente de correlación, nos permitirá cuantificar la fuerza y dirección de la relación entre las horas de capacitación y la productividad. Esto ayudaría a determinar si, invertir en más capacitación, podría ser una estrategia efectiva para mejorar el rendimiento, aunque se necesitarían análisis adicionales, para establecer causalidad.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Diagrama de dispersión
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El diagrama de dispersión, es una herramienta gráfica que permite visualizar la relación entre dos variables cuantitativas. Consiste en representar cada par de valores (x, y) como un punto en un plano cartesiano, donde el eje horizontal corresponde a la variable independiente o predictora (x) y el eje vertical a la variable dependiente o de respuesta (y). Al ubicar todos los puntos, se obtiene una nube de puntos que sugiere visualmente el tipo, fuerza y dirección de la correlación (Puente Viedma, 2018).
        p(data-aos="fade-left") Observemos cómo luce el diagrama de dispersión para el ejemplo de las horas de capacitación y unidades producidas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-figura.mb-4
          h5 Figura 1.
          span Unidades producidas vs horas de capacitación     
    
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
       
    p.mb-4 Al observar el patrón de la nube de puntos, notamos que tiende a ser lineal y ascendente de izquierda a derecha. Esto indica una correlación positiva: a medida que aumentan las horas de capacitación (x), también lo hacen las unidades producidas (y). Además, los puntos parecen ajustarse moderadamente bien a una línea recta imaginaria, lo que sugiere una correlación de fuerza intermedia.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Un diagrama de dispersión así, sería valioso en un contexto empresarial. Por ejemplo, supongamos que un gerente de producción busca entender qué factores influyen en la productividad de su planta. Al graficar datos de diferentes variables contra las unidades producidas, los diagramas revelarían rápidamente cuáles tienen una relación más fuerte. Quizás horas de capacitación, años de experiencia y satisfacción laboral, muestren asociaciones positivas, mientras que el ausentismo tenga una asociación negativa. Estos hallazgos ayudarían a enfocar esfuerzos e investigar más a fondo, aquellos factores claves.
        .bg-color-4.px-5.py-4(data-aos="fade-left")
          p.mb-0 En resumen, el diagrama de dispersión es una potente herramienta exploratoria, para evaluar visualmente la relación entre dos variables. Sin embargo, recordemos que solo brinda una impresión inicial. Para cuantificar la fuerza de la relación, necesitamos medidas numéricas como el coeficiente de correlación, el que estudiaremos a continuación.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Coeficiente de correlación de Pearson
    
    p.mb-4 El coeficiente de correlación de Pearson es una herramienta estadística fundamental para medir la relación entre dos variables cuantitativas.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Coeficiente de correlación de Pearson
            p.mb-4(data-aos="fade-right") En el PDF <b>Coeficiente de correlación de Pearson</b>, se presentan los conceptos clave de esta medida, su interpretación y aplicación en el análisis de datos. A través de ejemplos prácticos, se explica cómo calcular este coeficiente y cómo su valor permite evaluar la dirección y fuerza de la relación entre variables, facilitando la toma de decisiones basada en datos objetivos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Coeficiente de correlación de Pearson.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Coeficiente de determinación
    
    p.mb-4 El coeficiente de determinación es una medida estadística clave para evaluar la relación entre dos variables y determinar cuánto de la variabilidad de una puede explicarse a través de la otra.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Coeficiente de determinación
            p.mb-4(data-aos="fade-right") En el PDF <b>Coeficiente de determinación</b>, se explica su cálculo, interpretación y utilidad en la toma de decisiones. A través de ejemplos prácticos, se analiza cómo esta métrica complementa al coeficiente de correlación de Pearson y permite estimar la proporción de variabilidad explicada, facilitando un análisis más profundo de los datos y sus implicaciones en distintos contextos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Coeficiente de determinación.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Correlación de Spearman para datos ordinales 
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La correlación de Spearman, denotada como <b>ρ (rho)</b> o <b>rs</b>, es una medida no paramétrica de la fuerza y dirección de la asociación monótona entre dos variables. A diferencia del coeficiente de Pearson, no requiere supuestos sobre la distribución de los datos y puede utilizarse con variables medidas en escala ordinal. Se basa en los rangos de las observaciones en lugar de sus valores brutos (Llinás Solano, 2017).
        h5 La fórmula para calcular <b>ρ</b> es:
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/10.svg', alt='', style="max-width: 130px;").mx-auto
    
        p.mb-0 Donde d_i es la diferencia entre los rangos de las observaciones en cada variable, y n es el tamaño de la muestra.
        p.mb-0 Consideremos un nuevo ejemplo para ilustrar su uso:
        p.mb-0 Supongamos que un gerente de recursos humanos quiere estudiar la relación entre el nivel educativo y la categoría salarial de los empleados. Cada variable se mide en una escala ordinal.
        p.mb-0 Nivel educativo (X): 1=Bachillerato, 2=Técnico, 3=Pregrado, 4=Posgrado
        p.mb-0 Categoría salarial (Y): 1=Bajo, 2=Medio, 3=Alto

    .row.mb-5.justify-content-center
      .col-lg-12
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5.text-center Empleado
                th.bg-color-5.text-center Educación (X)
                th.bg-color-5.text-center Salario (Y)
                th.bg-color-5.text-center Rango X
                th.bg-color-5.text-center Rango Y
                th.bg-color-5.text-center d<sub>i</sub>
                th.bg-color-5.text-center d<sub>i</sub><sup>2</sup>
            tbody.text-center
              tr
                td 1
                td 3
                td 3
                td 7
                td 5.5
                td 1.5
                td 2.25
              tr
                td 2
                td 2
                td 1
                td 3.5
                td 2
                td 1.5
                td 2.25
              tr
                td 3
                td 4
                td 3
                td 9.5
                td 8.5
                td 1
                td 1

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Ordenar las observaciones de menor a mayor, en cada variable y asignar rangos. En caso de empate, usar el promedio de los rangos correspondientes.
    
          .div(titulo="Paso 2")
            p Calcular la diferencia entre los rangos (d<sub>i</sub>) para cada par de observaciones y elevarla al cuadrado.
    
          .div(titulo="Paso 3")
            p.mb-0 Sumar las diferencias al cuadrado (∑ d<sub>i</sub><sup>2</sup>) = 5.5 y aplicar la fórmula.
            p Asumiendo que el número total de empleados (muestra) n = 3:
            figure.mb-3
              img(src='@/assets/curso/tema1/15.svg', alt='', style="max-width: 217px;").mx-auto
            p Un ρ de –0.375 indica una correlación negativa baja entre el nivel educativo y la categoría salarial. Esto significa que, en este caso, un mayor nivel educativo, no está fuertemente asociado con un salario más alto.

    p.mb-4 <b>Para el ejemplo.</b> Esta información es relevante para la gestión del talento, dado que sugiere que la educación no es un factor determinante en la compensación salarial. De hecho, la correlación negativa baja, indica que un mayor nivel educativo no garantiza un salario más alto y que otros factores tienen mayor peso. Elementos como la experiencia, el desempeño y las habilidades, podrían ser más influyentes en la determinación de los salarios. Esto podría llevar a revisar las políticas de compensación, enfocándose en criterios más amplios que solo el nivel educativo.
          
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Es importante notar que, al basarse en rangos, la correlación de Spearman es robusta ante outliers y no requiere linealidad. Esto la hace adecuada para datos ordinales, donde los intervalos entre categorías, no son necesariamente constantes. Sin embargo, al ignorar los valores brutos, puede perder información si las variables son de intervalo o razón.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la correlación de Spearman extiende los principios del coeficiente de Pearson, a escenarios con menos supuestos. Es una herramienta útil para evaluar relaciones monótonas en datos ordinales o no normales. Su interpretación es similar a la de Pearson y brinda información valiosa para la toma de decisiones, aunque con las mismas limitaciones respecto a la causalidad.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://sinergiaseducativas.mx/index.php/revista/article/view/218" target="_blank" rel="noopener noreferrer") Candia Menor, M. A., Illa Sihuincha, G. P., Ruiz Villavicencio, R. E., & Monzón Troncoso, A. S. (2022). Estudio correlacional entre la Gestión, Formalización y el Desarrollo de las MyPEs. Sinergias Educativas.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/384138368_La_gestion_empresarial_Una_brujula_para_el_exito" target="_blank" rel="noopener noreferrer") Reyes Cevallos, P. D. (2024). La gestión empresarial: Una brújula para el éxito. Revista Científica Arbitrada Multidisciplinaria PENTACIENCIAS, 6(6), 73-84. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.microsoft.com/es-co/microsoft-365/excel " target="_blank" rel="noopener noreferrer") Excel para el desarrollo de los ejercicios aplicando los conceptos de Correlación y Regresión Lineal.   

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Ivvzpt89mHk" target="_blank" rel="noopener noreferrer") SFPIE UV. (2014, 12 de junio). Introducción I - Correlación lineal simple (1 de 4)o [Video]. YouTube
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/LaDGREQL9o4" target="_blank" rel="noopener noreferrer") Dirección Innovación Educativa UNAH. (2019, 8 de noviembre). U3 T4 E01 Ejemplo 1 del coeficiente de correlación de Pearson [Video]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
