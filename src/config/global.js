export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Regresión y correlación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Correlación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto de correlación, limitaciones del análisis de correlación ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diagrama de dispersión',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Coeficiente de correlación de Pearson',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Coeficiente de determinación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Correlación de Spearman para datos ordinales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Regresión lineal simple',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de regresión lineal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Método de mínimos cuadrados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ecuación de regresión',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Supuestos del modelo, error estándar de estimación e intervalos de confianza y predicción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Manejo de la regresión y correlación aplicadas al entorno empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Interpretación de relaciones entre variables empresariales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Indicadores básicos: índices de crecimiento, variaciones porcentuales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Representación gráfica de la recta estimada y nube de puntos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Importancia del análisis de relaciones entre variables',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Aplicaciones empresariales de la regresión y correlación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Correlación',
      significado:
        'Técnica estadística que evalúa la fuerza y dirección de la relación entre dos variables cuantitativas.',
    },
    {
      termino: 'Análisis de Regresión',
      significado:
        'Método estadístico utilizado para modelar y analizar la relación entre una variable dependiente y una o más variables independientes.',
    },
    {
      termino: 'Coeficiente de Correlación De Pearson (R)',
      significado:
        'Medida numérica de la fuerza y dirección de la relación lineal entre dos variables cuantitativas, que oscila entre -1 y +1.',
    },
    {
      termino: 'Coeficiente de Determinación (R2)',
      significado:
        'Proporción de la variabilidad en una variable que puede ser explicada por su relación lineal con otra variable, calculada como el cuadrado del coeficiente de correlación.',
    },
    {
      termino: 'Correlación Espuria',
      significado:
        'Relación estadística entre dos variables que no tiene una base causal, a menudo debido a la influencia de una tercera variable no medida.',
    },
    {
      termino: 'Correlación Negativa',
      significado:
        'Relación inversa entre dos variables, donde a medida que una variable aumenta, la otra disminuye.',
    },
    {
      termino: 'Correlación Positiva',
      significado:
        'Relación directa entre dos variables, donde a medida que una variable aumenta, la otra también aumenta.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'Representación visual de datos clave de rendimiento, diseñada para proporcionar una visión general instantánea y fácilmente comprensible.',
    },
    {
      termino: 'Diagrama de Dispersión',
      significado:
        'Gráfico que muestra la relación entre dos variables cuantitativas, representando cada observación como un punto en un sistema de coordenadas cartesianas.',
    },
    {
      termino: 'Error Estándar de Estimación (SEE)',
      significado:
        'Medida de la variabilidad de los residuos alrededor de la línea de regresión, que cuantifica la desviación promedio de las observaciones respecto a los valores predichos.',
    },
    {
      termino: 'Homocedasticidad',
      significado:
        'Supuesto de la regresión lineal que establece que la varianza de los errores es constante para todos los valores de la variable independiente.',
    },
    {
      termino: 'Intervalo de Confianza',
      significado:
        'Rango de valores que tiene una probabilidad específica de contener el verdadero valor de un parámetro poblacional, como un coeficiente de regresión.',
    },
    {
      termino: 'Intervalo de Predicción',
      significado:
        'Rango de valores que tiene una probabilidad específica de contener el valor de la variable dependiente para una nueva observación, dado un valor específico de la variable independiente.',
    },
    {
      termino: 'KPI (<em>Key Performance Indicator</em>)',
      significado:
        'Métrica utilizada para evaluar el rendimiento en relación con objetivos empresariales clave.',
    },
    {
      termino: 'Línea de mejor ajuste',
      significado:
        'Línea recta que mejor representa la relación entre dos variables en un diagrama de dispersión, minimizando la suma de los cuadrados de las desviaciones verticales de los puntos a la línea.',
    },
    {
      termino: 'Método de Mínimos Cuadrados',
      significado:
        'Técnica matemática utilizada para estimar los coeficientes de un modelo de regresión lineal, minimizando la suma de los cuadrados de los residuos.',
    },
    {
      termino: 'Modelo de Regresión Lineal Simple',
      significado:
        'Modelo estadístico que describe la relación entre una variable dependiente y una única variable independiente mediante una ecuación lineal.',
    },
    {
      termino: 'Nube de Puntos Residuales',
      significado:
        'Gráfico de los residuos de un modelo de regresión frente a los valores predichos, utilizado para evaluar visualmente los supuestos del modelo.',
    },
    {
      termino: '<em>Outlier</em>',
      significado:
        'Observación que difiere significativamente de otras observaciones en un conjunto de datos, a menudo identificada como un punto extremo en un diagrama de dispersión o un valor atípico en un análisis de regresión.',
    },
    {
      termino: 'Residuo',
      significado:
        'Diferencia entre el valor observado y el valor predicho de la variable dependiente para una observación dada en un modelo de regresión.',
    },
    {
      termino: 'ROI (<em>Return On Investment</em>)',
      significado:
        'Métrica que compara el beneficio o retorno de una inversión con su costo.',
    },
    {
      termino: 'Supuesto de Independencia',
      significado:
        'Supuesto de la regresión lineal que establece que las observaciones son independientes entre sí y que el valor de la variable dependiente para una observación no está influenciado por los valores de otras observaciones.',
    },
    {
      termino: 'Supuesto de Linealidad',
      significado:
        'Supuesto de la regresión lineal que establece que la relación entre la variable dependiente y la(s) variable(s) independiente(s) es lineal.',
    },
    {
      termino: 'Supuesto de Normalidad',
      significado:
        'Supuesto de la regresión lineal que establece que los errores siguen una distribución normal con media cero.',
    },
    {
      termino: 'Variable dependiente',
      significado:
        'Variable que se predice o explica en un modelo de regresión, generalmente denotada por "y".',
    },
    {
      termino: 'Variable independiente',
      significado:
        'Variable que se utiliza para predecir o explicar la variable dependiente en un modelo de regresión, generalmente denotada por "x".',
    },
  ],
}
