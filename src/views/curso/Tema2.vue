<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Regresión lineal simple'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 La regresión lineal simple es una técnica estadística que permite modelar la relación entre dos variables cuantitativas, cuando esta relación es de tipo lineal. Es decir, cuando el cambio en una variable (llamada independiente o predictora) se asocia con un cambio proporcional en la otra variable (llamada dependiente o de respuesta). El objetivo principal de la regresión lineal simple, es encontrar la línea recta que mejor se ajuste a los datos, lo que permite hacer predicciones sobre la variable dependiente a partir de valores conocidos de la variable independiente.
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Pensemos en la regresión lineal como una forma de "conectar los puntos". Imagine que tiene un conjunto de datos donde cada observación es un punto en un plano cartesiano. La variable independiente (x) determina la posición horizontal del punto, mientras que la variable dependiente (y), determina su posición vertical. Si existe una relación lineal entre <b>x</b> e <b>y</b>, estos puntos tenderán a alinearse en torno a una línea recta. La regresión lineal es el proceso de encontrar la ecuación de esta línea, que se podrá usar luego para predecir valores de y dado un nuevo valor de <b>x</b>.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de regresión lineal
    
    p.mb-4 La regresión lineal es una técnica estadística fundamental para analizar la relación entre dos variables y predecir valores con base en tendencias observadas.

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Concepto de regresión lineal
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto de regresión lineal</b>, se explica cómo este modelo permite representar matemáticamente la asociación entre una variable independiente y una variable dependiente, facilitando la toma de decisiones en diversos contextos. A través de ejemplos prácticos, se analizará cómo interpretar la ecuación de la recta de regresión, estimar sus parámetros y evaluar la precisión del modelo en distintos escenarios.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de regresión lineal.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Método de mínimos cuadrados
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El método de mínimos cuadrados, es una técnica en estadística utilizada para encontrar la mejor línea que se ajuste a un conjunto de datos. Su objetivo es minimizar la diferencia entre los valores reales y los valores predichos por la línea.
        .bg-color-4.px-5.py-4.mb-4(data-aos="fade-left")
          p.mb-0 Imaginemos que estamos tratando de predecir las calificaciones de los estudiantes basándonos en sus horas de estudio, como en el ejemplo anterior. Tenemos un conjunto de datos con las horas de estudio (x) y las calificaciones reales (y), de varios estudiantes. Queremos encontrar la línea recta que mejor capture la relación entre estas dos variables.
        p ¿Cómo funciona?

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Hay datos en un gráfico (por ejemplo, horas de estudio y calificaciones).

      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Dibuje una línea recta que intenta representar la relación entre las variables.
      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Calcule los errores (las diferencias entre los valores reales y los valores que predice la línea).

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Eleve al cuadrado esos errores (para evitar que se cancelen si son positivos o negativos).

      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Sume todos los errores al cuadrado y ajuste la línea para que esta suma sea lo más pequeña posible.
    

    .row.mb-3
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p(data-aos="fade-left") Fórmula de la recta de regresión:
          p.text-center y=a+bx
          p Donde:
          p.mb-0 y es el valor estimado.
          p.mb-0 a es el punto donde la línea corta el eje y (intercepto).
          p.mb-0 b es la pendiente (cuánto cambia y cuando x aumenta en 1).
          p.mb-0 x es la variable independiente.

    p.mb-4 Veamos esto en acción con un ejemplo simplificado.

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Ejemplo
            p.mb-4(data-aos="fade-right") El método de mínimos cuadrados es una herramienta fundamental en el análisis estadístico para encontrar la línea de mejor ajuste en un conjunto de datos. En el PDF <b>Ejemplo</b>, se presenta un caso práctico en el que se calcula la ecuación de regresión a partir de datos sobre horas de estudio y calificaciones, utilizando fórmulas matemáticas para determinar la pendiente y la intersección. A través de este ejemplo, se ilustrará cómo interpretar los coeficientes de la ecuación y visualizar la relación entre las variables, facilitando la toma de decisiones basada en datos cuantificables.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')
    
    p.mb-4 El método de mínimos cuadrados, es un pilar de la regresión lineal. Proporciona una manera objetiva y óptima de encontrar la línea que mejor se ajusta a los datos, lo que a su vez permite hacer predicciones precisas. Sin embargo, es importante recordar que se basa en ciertos supuestos, como la linealidad de la relación y la independencia de los errores. Violar estos supuestos puede llevar a conclusiones engañosas.

    h5.mb-5 ¿Para qué sirve?

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
          p.mb-0.text-center Permite predecir los valores futuros. Ejemplo: si estudia 6 horas, ¿qué calificación puede esperar?
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
          p.mb-0.text-center Ayuda a analizar las tendencias en negocios, economía, salud, etc.
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
          p.mb-0.text-center Facilita la toma de decisiones basadas en datos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4(data-aos="fade-left") Es como encontrar la mejor regla para medir cómo una cosa influye en otra.
        .bg-color-1.px-5.py-4.mb-4(data-aos="fade-left")
          p.mb-0 En resumen, el método de mínimos cuadrados es la técnica utilizada para estimar los coeficientes del modelo de regresión lineal. Encuentra la línea que minimiza la suma de los cuadrados de las diferencias entre los valores observados y predichos. Esta línea se considera la mejor ajustada a los datos y se utiliza para hacer predicciones. A continuación, veremos cómo se interpreta y utiliza la ecuación de esta línea.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Ecuación de regresión
    
    p.mb-4 Una vez que hemos estimado los coeficientes del modelo de regresión lineal usando el método de mínimos cuadrados, podemos escribir la ecuación de la línea de mejor ajuste, también conocida como ecuación de regresión. Esta ecuación nos permite predecir el valor de la variable dependiente (y) para cualquier valor dado de la variable independiente (x).

    .row.mb-3
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p(data-aos="fade-left") Recuerde que el modelo de regresión lineal simple tiene la forma:
          p.text-center y=a+bx
          p Donde a es la ordenada al origen y b es la pendiente.
          p Supongamos que, usando el método de mínimos cuadrados en nuestro ejemplo de las horas de estudio y las calificaciones, encontramos que la mejor línea de ajuste tiene la ecuación:
          p.text-center y=41.5+7.5x
          p.mb-0 Aquí, a = 41.5 y b = 7.5
          p Interpretemos cada parte de esta ecuación:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	y es la calificación estimada,
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	x es la variable independiente, cantidad de horas de estudio.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	41.5 es la intersección con el eje y (a) → Es la calificación esperada, si no estudia nada (x=0)
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	7.5 es la pendiente (b) → Por cada hora extra de estudio, la calificación aumenta 7.5 puntos.

    h2(data-aos="fade-left") Aplicación del modelo a los datos.
    p.mb-5 Ahora, vamos a utilizar la ecuación para estimar las calificaciones, según la cantidad de horas de estudio:

    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5.mb-0.text-center Horas de estudio 
                  p.text-center x
                th.bg-color-5.mb-0.text-center Cálculos con la ecuación
                  p.text-center y=a+bx

                th.bg-color-5.mb-0.text-center Calificación estimada
                  p.text-center y

            tbody.text-center
              tr
                td 1
                td 41.5+7.5(1)
                td 49
              tr
                td 2
                td 41.5+7.5(2)
                td 56.5
              tr
                td 3
                td 41.5+7.5(3)
                td 64
              tr
                td 4
                td 41.5+7.5(4)
                td 71.5
              tr
                td 5
                td 41.5+7.5(5)
                td 79
    
    h2(data-aos="fade-left") Interpretación de la ecuación:
              
    .row.mb-3
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	Si un estudiante <b>no estudia nada</b> (x=0), se espera que obtenga <b>41.5 puntos.</b>
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	Si un estudiante <b>estudia 5 horas</b>, se espera que obtenga <b>79 puntos.</b>
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 	<b>Cada hora extra de estudio</b> incrementa la calificación en <b>7.5 puntos.</b>
          
          p Con esta ecuación, podemos hacer predicciones. Por ejemplo, si un estudiante desea obtener 90 puntos, ¿cuántas horas deberá estudiar? Predecimos que las horas serán:
          p.text-center(data-aos="fade-left").mb-0 y=a+bx
          p.text-center 90=41.5+7.5x
          p Despejando x
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 124px")
          p Interpretando el resultado se puede afirmar que, para <b>obtener 90</b> puntos se debería <b>estudiar aproximadamente 6.5 horas.</b>

    h2(data-aos="fade-left") Conclusión:

    .row.mb-3
      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p(data-aos="fade-left") Esta ecuación permite comprender la <b>relación entre el tiempo de estudio y las calificaciones.</b> Con ella, podemos:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Predecir calificaciones</b> para diferentes horas de estudio.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>omar decisiones</b> sobre cuánto estudiar para alcanzar una meta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Evaluar el impacto</b> del estudio en los resultados académicos.
        p Es esencial entender que estas predicciones se basan en la suposición de que la relación entre las horas de estudio y las calificaciones es lineal y que el estudiante es similar a aquellos en los datos utilizados para ajustar el modelo. Cualquier extrapolación más allá del rango de los datos originales, debe hacerse con precaución.
    .row.mb-3
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p(data-aos="fade-left") En un contexto empresarial, la ecuación de regresión puede ser una herramienta poderosa para la toma de decisiones basada en datos. Por ejemplo, si un minorista encuentra que sus ventas semanales (y) están relacionadas con el número de anuncios mostrados (x), según la ecuación:
          p.text-center ventas = 1000 + 50*anuncios
        p Podrían usar esta información para predecir las ventas futuras y ajustar su estrategia publicitaria en consecuencia.
        p Para resumir, la ecuación de regresión es la línea de mejor ajuste encontrada usando el método de mínimos cuadrados. Tiene la forma y=a+bx, donde a es la ordenada al origen y b es la pendiente. 
        p Podemos usar esta ecuación para predecir el valor de <b>y</b> para cualquier valor dado de <b>x</b>, siempre que <b>x</b> esté dentro del rango de nuestros datos originales y se cumplan los supuestos del modelo. La interpretación cuidadosa de la ecuación de regresión, puede proporcionar información valiosa para la toma de decisiones en muchos campos, incluyendo los negocios y las ciencias sociales.
  
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Recuerde, sin embargo, que la regresión lineal se basa en ciertos supuestos sobre los datos y la relación entre las variables. En la siguiente sección, discutiremos estos supuestos y cómo podemos evaluar la incertidumbre en nuestras predicciones.
    

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Supuestos del modelo, error estándar de estimación e intervalos de confianza y predicción
    
    p.mb-4 Hasta ahora, hemos visto cómo la regresión lineal nos permite modelar la relación entre dos variables y hacer predicciones. Sin embargo, es crucial entender que estas predicciones no son certezas, sino estimaciones basadas en ciertos supuestos sobre los datos. En esta sección, exploraremos estos supuestos, cómo podemos medir la incertidumbre en nuestras predicciones y qué hacer cuando los supuestos no se cumplen.
    h5 Supuestos del modelo de regresión lineal:
    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/15.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="32%" y="14.5%" numero="+")
                h5 1. Linealidad
                p La relación entre las variables independiente (x) y dependiente (y) es lineal. Esto significa que un cambio en <b>x</b> se asocia con un cambio proporcional en <b>y</b>.
    
              .bg-color-white.box-shadow.p-3(x="31%" y="65%" numero="+")
                h5 2. Independencia
                p Las observaciones son independientes entre sí. En otras palabras, el valor de y para una observación, no está influenciado por los valores de <b>y</b> para otras observaciones.
    
              .bg-color-white.box-shadow.p-3(x="67%" y="14.5%" numero="+")
                h5 3. Homocedasticidad
                p La varianza de los errores es constante para todos los valores de <b>x</b>. Esto significa que la dispersión de los residuos es similar a lo largo de la línea de regresión.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="65%" numero="+")
                h5 4. Normalidad
                p Los errores siguen una distribución normal con media cero. En otras palabras, la mayoría de los residuos están cerca de cero, con pocos residuos grandes positivos o negativos.
    
    .bg-full-width.bg-color-7
      .px-4.px-md-5.py-4
        p.mb-0 Violaciones de estos supuestos, pueden llevar a estimaciones sesgadas o inválidas de los coeficientes de regresión y las predicciones.
          







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
              a(href="https://espanol.libretexts.org/Estadisticas/Estadistica_Aplicada/Libro%3A_Biometria_de_Recursos_Naturales_%28Kiernan%29/07%3A_Correlaci%C3%B3n_y_Regresi%C3%B3n_Lineal_Simple" target="_blank" rel="noopener noreferrer") LibreTexts Español. (2023). 7: Correlación y Regresión Lineal Simple. En Biometría de Recursos Naturales. 

          

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/NbIiP1DWpNU" target="_blank" rel="noopener noreferrer") Dirección Innovación Educativa UNAH. (2019, 8 de noviembre). U3 T5 E01 Ejemplo 1 de regresión lineal [Video]. YouTube
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Bz6vE2WSqHI" target="_blank" rel="noopener noreferrer") Gibaja, J. (2012, 2 de febrero). [ML-5] Criterio de mínimos cuadrados [Video]. YouTube
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/GDzXEpC2_bc" target="_blank" rel="noopener noreferrer") El Rincón Matemático. (2017, 20 de mayo). mínimos cuadrados [Video]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
