(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"0661":function(a,e,s){a.exports=s.p+"img/icono-yt.0e5f1361.svg"},"144d":function(a,e,s){a.exports=s.p+"img/10.020daf84.png"},2391:function(a,e,s){a.exports=s.p+"img/material-complementario.06dbfac1.svg"},"3a45":function(a,e,s){a.exports=s.p+"img/16.6f2ee379.svg"},"5b0d":function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{subTitulo:"2. Regresión lineal simple"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 overflow-hidden"},[a._m(0),a._m(1),t("p",{staticClass:"mb-4"},[a._v("La regresión lineal es una técnica estadística fundamental para analizar la relación entre dos variables y predecir valores con base en tendencias observadas.")]),t("div",{staticClass:"bg-full-width bg-color-5 mb-5"},[t("div",{staticClass:"px-4 p-md-5"},[t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-8 mb-3 mb-lg-0"},[t("h2",{staticClass:"mb-4",attrs:{"data-aos":"flip-up"}},[a._v("Concepto de regresión lineal")]),a._m(2),t("a",{staticClass:"anexo mb-4 bg-white w-fit",attrs:{href:a.obtenerLink("/downloads/Anexo_3.pdf"),target:"_blank","data-aos":"flip-up"}},[t("div",{staticClass:"anexo__icono",style:{"background-color":"#FCDFDB"}},[t("img",{attrs:{src:s("f906")}})]),a._m(3)])]),a._m(4)])])]),a._m(5),a._m(6),a._m(7),a._m(8),a._m(9),t("p",{staticClass:"mb-4"},[a._v("Veamos esto en acción con un ejemplo simplificado.")]),t("div",{staticClass:"bg-full-width bg-color-5 mb-5"},[t("div",{staticClass:"px-4 p-md-5"},[t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-8 mb-3 mb-lg-0 order-1 order-lg-2"},[t("h2",{staticClass:"mb-4",attrs:{"data-aos":"flip-up"}},[a._v("Ejemplo")]),a._m(10),t("a",{staticClass:"anexo mb-4 bg-white w-fit",attrs:{href:a.obtenerLink("/downloads/Anexo_4.pdf"),target:"_blank","data-aos":"flip-up"}},[t("div",{staticClass:"anexo__icono",style:{"background-color":"#FCDFDB"}},[t("img",{attrs:{src:s("f906")}})]),a._m(11)])]),a._m(12)])])]),t("p",{staticClass:"mb-4"},[a._v("El método de mínimos cuadrados, es un pilar de la regresión lineal. Proporciona una manera objetiva y óptima de encontrar la línea que mejor se ajusta a los datos, lo que a su vez permite hacer predicciones precisas. Sin embargo, es importante recordar que se basa en ciertos supuestos, como la linealidad de la relación y la independencia de los errores. Violar estos supuestos puede llevar a conclusiones engañosas.")]),t("h5",{staticClass:"mb-5"},[a._v("¿Para qué sirve?")]),a._m(13),a._m(14),a._m(15),t("p",{staticClass:"mb-4"},[a._v("Una vez que hemos estimado los coeficientes del modelo de regresión lineal usando el método de mínimos cuadrados, podemos escribir la ecuación de la línea de mejor ajuste, también conocida como ecuación de regresión. Esta ecuación nos permite predecir el valor de la variable dependiente (y) para cualquier valor dado de la variable independiente (x).")]),a._m(16),t("h2",{attrs:{"data-aos":"fade-left"}},[a._v("Aplicación del modelo a los datos.")]),t("p",{staticClass:"mb-5"},[a._v("Ahora, vamos a utilizar la ecuación para estimar las calificaciones, según la cantidad de horas de estudio:")]),a._m(17),t("h2",{attrs:{"data-aos":"fade-left"}},[a._v("Interpretación de la ecuación:")]),a._m(18),t("h2",{attrs:{"data-aos":"fade-left"}},[a._v("Conclusión:")]),a._m(19),a._m(20),a._m(21),a._m(22),t("p",{staticClass:"mb-4"},[a._v("Hasta ahora, hemos visto cómo la regresión lineal nos permite modelar la relación entre dos variables y hacer predicciones. Sin embargo, es crucial entender que estas predicciones no son certezas, sino estimaciones basadas en ciertos supuestos sobre los datos. En esta sección, exploraremos estos supuestos, cómo podemos medir la incertidumbre en nuestras predicciones y qué hacer cuando los supuestos no se cumplen.")]),t("h5",[a._v("Supuestos del modelo de regresión lineal:")]),t("div",{staticClass:"bg-full-width bg-color-info"},[t("div",{staticClass:"p-4 p-md-5"},[t("div",{staticClass:"row justify-content-center align-items-center mb-5"},[t("div",{staticClass:"col-lg-10"},[t("ImagenInfografica",{staticClass:"color-secundario",scopedSlots:a._u([{key:"imagen",fn:function(){return[t("figure",[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"1106px"},attrs:{src:s("64b4"),alt:""}})])]},proxy:!0}])},[t("div",{staticClass:"bg-color-white box-shadow p-3",attrs:{x:"32%",y:"14.5%",numero:"+"}},[t("h5",[a._v("1. Linealidad")]),t("p",[a._v("La relación entre las variables independiente (x) y dependiente (y) es lineal. Esto significa que un cambio en "),t("b",[a._v("x")]),a._v(" se asocia con un cambio proporcional en "),t("b",[a._v("y")]),a._v(".")])]),t("div",{staticClass:"bg-color-white box-shadow p-3",attrs:{x:"31%",y:"65%",numero:"+"}},[t("h5",[a._v("2. Independencia")]),t("p",[a._v("Las observaciones son independientes entre sí. En otras palabras, el valor de y para una observación, no está influenciado por los valores de "),t("b",[a._v("y")]),a._v(" para otras observaciones.")])]),t("div",{staticClass:"bg-color-white box-shadow p-3",attrs:{x:"67%",y:"14.5%",numero:"+"}},[t("h5",[a._v("3. Homocedasticidad")]),t("p",[a._v("La varianza de los errores es constante para todos los valores de "),t("b",[a._v("x")]),a._v(". Esto significa que la dispersión de los residuos es similar a lo largo de la línea de regresión.")])]),t("div",{staticClass:"bg-color-white box-shadow p-3",attrs:{x:"69%",y:"65%",numero:"+"}},[t("h5",[a._v("4. Normalidad")]),t("p",[a._v("Los errores siguen una distribución normal con media cero. En otras palabras, la mayoría de los residuos están cerca de cero, con pocos residuos grandes positivos o negativos.")])])])],1)])])]),a._m(23),t("div",{staticClass:"bg-full-width border-top color-primario"},[t("div",{staticClass:"p-4 p-md-5"},[t("h2",{attrs:{"data-aos":"fade-left"}},[a._v("MATERIAL COMPLEMENTARIO")]),t("div",{staticClass:"row material-complementario"},[t("div",{staticClass:"col-12 col-md-6 col-lg-7"},[t("p",[a._v("Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.")]),t("p",{staticClass:"d-flex my-4"},[t("img",{staticClass:"me-3",style:{"max-width":"16px"},attrs:{src:s("a437")}}),t("a",{attrs:{href:"https://dialnet.unirioja.es/descarga/articulo/7791578.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("Torres Navarro, C., Malta Callegari, N., & Jara Olave, H. (2021). Modelos de regresión y diseño de línea base para indicadores energéticos en una empresa siderúrgica. Ingeniería Energética, 42(1). ")])]),t("p",{staticClass:"d-flex my-4"},[t("img",{staticClass:"me-3",style:{"max-width":"16px"},attrs:{src:s("a437")}}),t("a",{attrs:{href:"https://espanol.libretexts.org/Estadisticas/Estadistica_Aplicada/Libro%3A_Biometria_de_Recursos_Naturales_%28Kiernan%29/07%3A_Correlaci%C3%B3n_y_Regresi%C3%B3n_Lineal_Simple",target:"_blank",rel:"noopener noreferrer"}},[a._v("LibreTexts Español. (2023). 7: Correlación y Regresión Lineal Simple. En Biometría de Recursos Naturales. ")])]),t("p",{staticClass:"d-flex my-4"},[t("img",{staticClass:"me-3",style:{"max-width":"16px"},attrs:{src:s("0661")}}),t("a",{attrs:{href:"https://youtu.be/NbIiP1DWpNU",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dirección Innovación Educativa UNAH. (2019, 8 de noviembre). U3 T5 E01 Ejemplo 1 de regresión lineal [Video]. YouTube")])]),t("p",{staticClass:"d-flex my-4"},[t("img",{staticClass:"me-3",style:{"max-width":"16px"},attrs:{src:s("0661")}}),t("a",{attrs:{href:"https://youtu.be/Bz6vE2WSqHI",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gibaja, J. (2012, 2 de febrero). [ML-5] Criterio de mínimos cuadrados [Video]. YouTube")])]),t("p",{staticClass:"d-flex my-4"},[t("img",{staticClass:"me-3",style:{"max-width":"16px"},attrs:{src:s("0661")}}),t("a",{attrs:{href:"https://youtu.be/GDzXEpC2_bc",target:"_blank",rel:"noopener noreferrer"}},[a._v("El Rincón Matemático. (2017, 20 de mayo). mínimos cuadrados [Video]. YouTube")])])]),a._m(24)])])])])],1)},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-5"},[t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("63f2"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-left"}},[a._v("La regresión lineal simple es una técnica estadística que permite modelar la relación entre dos variables cuantitativas, cuando esta relación es de tipo lineal. Es decir, cuando el cambio en una variable (llamada independiente o predictora) se asocia con un cambio proporcional en la otra variable (llamada dependiente o de respuesta). El objetivo principal de la regresión lineal simple, es encontrar la línea recta que mejor se ajuste a los datos, lo que permite hacer predicciones sobre la variable dependiente a partir de valores conocidos de la variable independiente.")]),t("div",{staticClass:"bg-color-4 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-start"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("9b35")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v('Pensemos en la regresión lineal como una forma de "conectar los puntos". Imagine que tiene un conjunto de datos donde cada observación es un punto en un plano cartesiano. La variable independiente (x) determina la posición horizontal del punto, mientras que la variable dependiente (y), determina su posición vertical. Si existe una relación lineal entre '),t("b",[a._v("x")]),a._v(" e "),t("b",[a._v("y")]),a._v(", estos puntos tenderán a alinearse en torno a una línea recta. La regresión lineal es el proceso de encontrar la ecuación de esta línea, que se podrá usar luego para predecir valores de y dado un nuevo valor de "),t("b",[a._v("x")]),a._v(".")])])])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_1","data-aos":"flip-up"}},[s("h2",[s("span",[a._v("2.1")]),a._v(" Concepto de regresión lineal")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("p",{staticClass:"mb-4",attrs:{"data-aos":"fade-right"}},[a._v("En el PDF "),s("b",[a._v("Concepto de regresión lineal")]),a._v(", se explica cómo este modelo permite representar matemáticamente la asociación entre una variable independiente y una variable dependiente, facilitando la toma de decisiones en diversos contextos. A través de ejemplos prácticos, se analizará cómo interpretar la ecuación de la recta de regresión, estimar sus parámetros y evaluar la precisión del modelo en distintos escenarios.")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"anexo__texto"},[s("p",[s("strong",[a._v("Anexo. ")]),a._v(" Concepto de regresión lineal.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col-lg-4"},[t("figure",{attrs:{"data-aos":"zoom-in"}},[t("img",{attrs:{src:s("95e6"),alt:""}})])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_2","data-aos":"flip-up"}},[s("h2",[s("span",[a._v("2.2")]),a._v(" Método de mínimos cuadrados")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-5"},[t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("6b50"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-8"},[t("p",{attrs:{"data-aos":"fade-left"}},[a._v("El método de mínimos cuadrados, es una técnica en estadística utilizada para encontrar la mejor línea que se ajuste a un conjunto de datos. Su objetivo es minimizar la diferencia entre los valores reales y los valores predichos por la línea.")]),t("div",{staticClass:"bg-color-4 px-5 py-4 mb-4",attrs:{"data-aos":"fade-left"}},[t("p",{staticClass:"mb-0"},[a._v("Imaginemos que estamos tratando de predecir las calificaciones de los estudiantes basándonos en sus horas de estudio, como en el ejemplo anterior. Tenemos un conjunto de datos con las horas de estudio (x) y las calificaciones reales (y), de varios estudiantes. Queremos encontrar la línea recta que mejor capture la relación entre estas dos variables.")])]),t("p",[a._v("¿Cómo funciona?")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center align-items-stretch mb-4"},[t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("div",{staticClass:"bg-color-2 p-4 h-100",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Hay datos en un gráfico (por ejemplo, horas de estudio y calificaciones).")])])])])]),t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("div",{staticClass:"bg-color-2 p-4 h-100",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Dibuje una línea recta que intenta representar la relación entre las variables.")])])])])]),t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("div",{staticClass:"bg-color-2 p-4 h-100",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Calcule los errores (las diferencias entre los valores reales y los valores que predice la línea).")])])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center align-items-stretch mb-4"},[t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("div",{staticClass:"bg-color-2 p-4 h-100",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Eleve al cuadrado esos errores (para evitar que se cancelen si son positivos o negativos).")])])])])]),t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("div",{staticClass:"bg-color-2 p-4 h-100",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Sume todos los errores al cuadrado y ajuste la línea para que esta suma sea lo más pequeña posible.")])])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-5 order-1 order-lg-2 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("7ebd"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-7 order-2 order-lg-1"},[t("div",{staticClass:"bg-color-5 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("p",{attrs:{"data-aos":"fade-left"}},[a._v("Fórmula de la recta de regresión:")]),t("p",{staticClass:"text-center"},[a._v("y=a+bx")]),t("p",[a._v("Donde:")]),t("p",{staticClass:"mb-0"},[a._v("y es el valor estimado.")]),t("p",{staticClass:"mb-0"},[a._v("a es el punto donde la línea corta el eje y (intercepto).")]),t("p",{staticClass:"mb-0"},[a._v("b es la pendiente (cuánto cambia y cuando x aumenta en 1).")]),t("p",{staticClass:"mb-0"},[a._v("x es la variable independiente.")])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("p",{staticClass:"mb-4",attrs:{"data-aos":"fade-right"}},[a._v("El método de mínimos cuadrados es una herramienta fundamental en el análisis estadístico para encontrar la línea de mejor ajuste en un conjunto de datos. En el PDF "),s("b",[a._v("Ejemplo")]),a._v(", se presenta un caso práctico en el que se calcula la ecuación de regresión a partir de datos sobre horas de estudio y calificaciones, utilizando fórmulas matemáticas para determinar la pendiente y la intersección. A través de este ejemplo, se ilustrará cómo interpretar los coeficientes de la ecuación y visualizar la relación entre las variables, facilitando la toma de decisiones basada en datos cuantificables.")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"anexo__texto"},[s("p",[s("strong",[a._v("Anexo. ")]),a._v(" Ejemplo.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col-lg-4 order-2 order-lg-1"},[t("figure",{attrs:{"data-aos":"zoom-in"}},[t("img",{attrs:{src:s("7a59"),alt:""}})])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center align-items-stretch mb-5"},[t("div",{staticClass:"col-lg-4 mb-4",attrs:{"data-aos":"zoom-in-up"}},[t("div",{staticClass:"bg-color-white box-shadow px-4 py-5 h-100"},[t("img",{staticClass:"mx-auto d-block mb-4",staticStyle:{width:"90px"},attrs:{src:s("a91d"),alt:""}}),t("p",{staticClass:"mb-0 text-center"},[a._v("Permite predecir los valores futuros. Ejemplo: si estudia 6 horas, ¿qué calificación puede esperar?")])])]),t("div",{staticClass:"col-lg-4 mb-4",attrs:{"data-aos":"zoom-in-up"}},[t("div",{staticClass:"bg-color-white box-shadow px-4 py-5 h-100"},[t("img",{staticClass:"mx-auto d-block mb-4",staticStyle:{width:"90px"},attrs:{src:s("a91d"),alt:""}}),t("p",{staticClass:"mb-0 text-center"},[a._v("Ayuda a analizar las tendencias en negocios, economía, salud, etc.")])])]),t("div",{staticClass:"col-lg-4 mb-4",attrs:{"data-aos":"zoom-in-up"}},[t("div",{staticClass:"bg-color-white box-shadow px-4 py-5 h-100"},[t("img",{staticClass:"mx-auto d-block mb-4",staticStyle:{width:"90px"},attrs:{src:s("a91d"),alt:""}}),t("p",{staticClass:"mb-0 text-center"},[a._v("Facilita la toma de decisiones basadas en datos.")])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-5"},[t("div",{staticClass:"col-lg-4 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("de8b"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-4",attrs:{"data-aos":"fade-left"}},[a._v("Es como encontrar la mejor regla para medir cómo una cosa influye en otra.")]),t("div",{staticClass:"bg-color-1 px-5 py-4 mb-4",attrs:{"data-aos":"fade-left"}},[t("p",{staticClass:"mb-0"},[a._v("En resumen, el método de mínimos cuadrados es la técnica utilizada para estimar los coeficientes del modelo de regresión lineal. Encuentra la línea que minimiza la suma de los cuadrados de las diferencias entre los valores observados y predichos. Esta línea se considera la mejor ajustada a los datos y se utiliza para hacer predicciones. A continuación, veremos cómo se interpreta y utiliza la ecuación de esta línea.")])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_3","data-aos":"flip-up"}},[s("h2",[s("span",[a._v("2.3")]),a._v(" Ecuación de regresión")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-5 order-1 order-lg-2 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("144d"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-7 order-2 order-lg-1"},[t("div",{staticClass:"bg-color-5 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("p",{attrs:{"data-aos":"fade-left"}},[a._v("Recuerde que el modelo de regresión lineal simple tiene la forma:")]),t("p",{staticClass:"text-center"},[a._v("y=a+bx")]),t("p",[a._v("Donde a es la ordenada al origen y b es la pendiente.")]),t("p",[a._v("Supongamos que, usando el método de mínimos cuadrados en nuestro ejemplo de las horas de estudio y las calificaciones, encontramos que la mejor línea de ajuste tiene la ecuación:")]),t("p",{staticClass:"text-center"},[a._v("y=41.5+7.5x")]),t("p",{staticClass:"mb-0"},[a._v("Aquí, a = 41.5 y b = 7.5")]),t("p",[a._v("Interpretemos cada parte de esta ecuación:")]),t("ul",{staticClass:"lista-ul--color mb-0"},[t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" y es la calificación estimada,")])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" x es la variable independiente, cantidad de horas de estudio.")])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" 41.5 es la intersección con el eje y (a) → Es la calificación esperada, si no estudia nada (x=0)")])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" 7.5 es la pendiente (b) → Por cada hora extra de estudio, la calificación aumenta 7.5 puntos.")])])])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row mb-5 justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"tabla-a color-acento-botones"},[s("table",[s("thead",[s("tr",[s("th",{staticClass:"bg-color-5 mb-0 text-center"},[a._v("Horas de estudio "),s("p",{staticClass:"text-center"},[a._v("x")])]),s("th",{staticClass:"bg-color-5 mb-0 text-center"},[a._v("Cálculos con la ecuación"),s("p",{staticClass:"text-center"},[a._v("y=a+bx")])]),s("th",{staticClass:"bg-color-5 mb-0 text-center"},[a._v("Calificación estimada"),s("p",{staticClass:"text-center"},[a._v("y")])])])]),s("tbody",{staticClass:"text-center"},[s("tr",[s("td",[a._v("1")]),s("td",[a._v("41.5+7.5(1)")]),s("td",[a._v("49")])]),s("tr",[s("td",[a._v("2")]),s("td",[a._v("41.5+7.5(2)")]),s("td",[a._v("56.5")])]),s("tr",[s("td",[a._v("3")]),s("td",[a._v("41.5+7.5(3)")]),s("td",[a._v("64")])]),s("tr",[s("td",[a._v("4")]),s("td",[a._v("41.5+7.5(4)")]),s("td",[a._v("71.5")])]),s("tr",[s("td",[a._v("5")]),s("td",[a._v("41.5+7.5(5)")]),s("td",[a._v("79")])])])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-5 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("89f4"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-7"},[t("div",{staticClass:"bg-color-5 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("ul",{staticClass:"lista-ul--color"},[t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" Si un estudiante "),t("b",[a._v("no estudia nada")]),a._v(" (x=0), se espera que obtenga "),t("b",[a._v("41.5 puntos.")])])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[a._v(" Si un estudiante "),t("b",[a._v("estudia 5 horas")]),a._v(", se espera que obtenga "),t("b",[a._v("79 puntos.")])])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[t("b",[a._v("Cada hora extra de estudio")]),a._v(" incrementa la calificación en "),t("b",[a._v("7.5 puntos.")])])])]),t("p",[a._v("Con esta ecuación, podemos hacer predicciones. Por ejemplo, si un estudiante desea obtener 90 puntos, ¿cuántas horas deberá estudiar? Predecimos que las horas serán:")]),t("p",{staticClass:"text-center mb-0",attrs:{"data-aos":"fade-left"}},[a._v("y=a+bx")]),t("p",{staticClass:"text-center"},[a._v("90=41.5+7.5x")]),t("p",[a._v("Despejando x")]),t("img",{staticClass:"mx-auto d-block mb-4",staticStyle:{width:"124px"},attrs:{src:s("3a45"),alt:""}}),t("p",[a._v("Interpretando el resultado se puede afirmar que, para "),t("b",[a._v("obtener 90")]),a._v(" puntos se debería "),t("b",[a._v("estudiar aproximadamente 6.5 horas.")])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-5 order-1 order-lg-2 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("f36c"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-7 order-2 order-lg-1"},[t("div",{staticClass:"bg-color-5 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("p",{attrs:{"data-aos":"fade-left"}},[a._v("Esta ecuación permite comprender la "),t("b",[a._v("relación entre el tiempo de estudio y las calificaciones.")]),a._v(" Con ella, podemos:")]),t("ul",{staticClass:"lista-ul--color"},[t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[t("b",[a._v("Predecir calificaciones")]),a._v(" para diferentes horas de estudio.")])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[t("b",[a._v("omar decisiones")]),a._v(" sobre cuánto estudiar para alcanzar una meta.")])]),t("li",{staticClass:"mb-0 d-flex"},[t("i",{staticClass:"far fa-arrow-alt-circle-right bg-color-6"}),t("p",{staticClass:"mb-0"},[t("b",[a._v("Evaluar el impacto")]),a._v(" del estudio en los resultados académicos.")])])])]),t("p",[a._v("Es esencial entender que estas predicciones se basan en la suposición de que la relación entre las horas de estudio y las calificaciones es lineal y que el estudiante es similar a aquellos en los datos utilizados para ajustar el modelo. Cualquier extrapolación más allá del rango de los datos originales, debe hacerse con precaución.")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-5 mb-3 mb-lg-0"},[t("figure",[t("img",{attrs:{src:s("836a"),"data-aos":"zoom-in"}})])]),t("div",{staticClass:"col-lg-7"},[t("div",{staticClass:"bg-color-5 p-4 mb-3",attrs:{"data-aos":"fade-left"}},[t("p",{attrs:{"data-aos":"fade-left"}},[a._v("En un contexto empresarial, la ecuación de regresión puede ser una herramienta poderosa para la toma de decisiones basada en datos. Por ejemplo, si un minorista encuentra que sus ventas semanales (y) están relacionadas con el número de anuncios mostrados (x), según la ecuación:")]),t("p",{staticClass:"text-center"},[a._v("ventas = 1000 + 50*anuncios")])]),t("p",[a._v("Podrían usar esta información para predecir las ventas futuras y ajustar su estrategia publicitaria en consecuencia.")]),t("p",[a._v("Para resumir, la ecuación de regresión es la línea de mejor ajuste encontrada usando el método de mínimos cuadrados. Tiene la forma y=a+bx, donde a es la ordenada al origen y b es la pendiente. ")]),t("p",[a._v("Podemos usar esta ecuación para predecir el valor de "),t("b",[a._v("y")]),a._v(" para cualquier valor dado de "),t("b",[a._v("x")]),a._v(", siempre que "),t("b",[a._v("x")]),a._v(" esté dentro del rango de nuestros datos originales y se cumplan los supuestos del modelo. La interpretación cuidadosa de la ecuación de regresión, puede proporcionar información valiosa para la toma de decisiones en muchos campos, incluyendo los negocios y las ciencias sociales.")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"bg-full-width bg-color-3 mb-5"},[t("div",{staticClass:"px-4 px-md-5 py-4"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("fefa")}})]),t("div",{staticClass:"col-lg"},[t("p",{staticClass:"mb-0"},[a._v("Recuerde, sin embargo, que la regresión lineal se basa en ciertos supuestos sobre los datos y la relación entre las variables. En la siguiente sección, discutiremos estos supuestos y cómo podemos evaluar la incertidumbre en nuestras predicciones.")])])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_2_4","data-aos":"flip-up"}},[s("h2",[s("span",[a._v("2.4")]),a._v(" Supuestos del modelo, error estándar de estimación e intervalos de confianza y predicción")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"bg-full-width bg-color-7"},[s("div",{staticClass:"px-4 px-md-5 py-4"},[s("p",{staticClass:"mb-0"},[a._v("Violaciones de estos supuestos, pueden llevar a estimaciones sesgadas o inválidas de los coeficientes de regresión y las predicciones.")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col-12 col-md-6 col-lg-3 offset-lg-1"},[t("figure",[t("img",{attrs:{src:s("2391"),alt:""}})])])}],r={name:"Tema2",mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))}},o=r,l=s("2877"),c=Object(l["a"])(o,t,i,!1,null,null,null);e["default"]=c.exports},"63f2":function(a,e,s){a.exports=s.p+"img/1.fc369c59.png"},"64b4":function(a,e,s){a.exports=s.p+"img/15.50b563df.svg"},"6b50":function(a,e,s){a.exports=s.p+"img/4.35ba324d.png"},7500:function(a,e,s){a.exports=s.p+"img/5.36191c02.svg"},"7a59":function(a,e,s){a.exports=s.p+"img/7.4f851ea4.png"},"7ebd":function(a,e,s){a.exports=s.p+"img/6.64a15e88.png"},"836a":function(a,e,s){a.exports=s.p+"img/13.32a12766.png"},"89f4":function(a,e,s){a.exports=s.p+"img/11.d5064fad.png"},"95e6":function(a,e,s){a.exports=s.p+"img/3.4785c022.png"},"9b35":function(a,e,s){a.exports=s.p+"img/2.411dd25c.svg"},a437:function(a,e,s){a.exports=s.p+"img/link.317b045f.svg"},a91d:function(a,e,s){a.exports=s.p+"img/8.c00d7ed8.svg"},de8b:function(a,e,s){a.exports=s.p+"img/9.bc3ab9b9.png"},f36c:function(a,e,s){a.exports=s.p+"img/12.02c37415.png"},f906:function(a,e,s){a.exports=s.p+"img/icono-pdf.5c464bfe.svg"},fefa:function(a,e,s){a.exports=s.p+"img/14.ca3318c3.svg"}}]);
//# sourceMappingURL=tema2.b526f587.js.map