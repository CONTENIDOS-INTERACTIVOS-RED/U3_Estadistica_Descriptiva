<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        .bg-color-1.px-4.py-5.mb-3.tarjeta(data-aos="fade-left")
          p.mb-5 En el dinámico mundo de los negocios, tomar decisiones basadas en datos, es crucial para alcanzar el éxito. Esta unidad se enfoca en dos herramientas estadísticas claves: la regresión y la correlación. Estas técnicas permiten a los gerentes de empresas cuantificar y analizar las relaciones entre variables importantes, ofreciendo información valiosa para la planificación estratégica, la asignación de recursos y la previsión. 
      .col-lg-4.mb-3.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/intro/1.png', alt='')
      .col-lg-4.mb-3.mb-lg-0 
        .bg-color-2.px-4.py-5.mb-3.tarjeta(data-aos="fade-left")
          p.mb-3 Al finalizar esta unidad, podrá analizar la relación entre variables, utilizando regresión y correlación. Aprenderá a identificar patrones, tendencias y la fuerza de asociación entre variables, y aplicar estos conocimientos para resolver problemas y tomar decisiones informadas en diferentes contextos empresariales. Estas habilidades son muy valoradas en el ámbito profesional y lo prepararán para enfrentar los desafíos analíticos de la gestión contemporánea. 

    p.mb-4 Imagine que es el gerente de marketing de una empresa de comercio electrónico. Desea comprender cómo sus esfuerzos de marketing impactan en las ventas. Con las técnicas de regresión y correlación, podría cuantificar la relación entre el gasto en publicidad y los ingresos, lo que le permitiría optimizar su estrategia y maximizar el retorno de inversión. O, tal vez, es un analista financiero que busca predecir el precio de las acciones de una empresa. Al analizar la correlación entre el precio y varios indicadores económicos, podría desarrollar un modelo predictivo que guíe las decisiones de inversión. Las posibilidades son infinitas. 

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4 Esta unidad se divide en tres secciones principales: 
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Correlación
                p.mb-0 Primero, se explorará el concepto de correlación, aprendiendo a medir y visualizar la fuerza y dirección de las relaciones entre variables.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Regresión lineal simple
                p.mb-0 Segundo, se profundizará en la regresión lineal simple, utilizando esta técnica para modelar relaciones y hacer predicciones.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Aplicación en contexto empresarial
                p.mb-0 Tercero, se aplicarán estos conceptos en el contexto empresarial, viendo ejemplos prácticos de cómo la regresión y la correlación pueden informar la toma de decisiones en áreas como marketing, finanzas y operaciones.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Para aprovechar al máximo esta unidad, se le invita para que participe activamente en las discusiones, realice preguntas y aplique los conceptos aprendidos en los ejercicios y estudios de los casos proporcionados. Es importante la curiosidad y disposición para aprender. Prepárese para abordar el mundo del análisis de datos y descubrir cómo estas técnicas pueden impulsar su carrera y el éxito de su organización.

</template>
