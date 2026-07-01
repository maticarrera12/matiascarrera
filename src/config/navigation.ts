export interface Lesson {
  title: string;
  file: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
  icon: string;
}

export interface Chapter {
  title: string;
  modules: Module[];
}

export interface Serie {
  title: string;
  slug: string;
  color: string;
  image: string;
  chapters: Chapter[];
}

export const navigationTree: Serie[] = [
  {
    title: "HTML",
    slug: "html",
    color: "#E44D26",
    image: "/images/technologies/html.webp",
    chapters: [
      {
        title: "Bases",
        modules: [
          {
            title: "Introducción a HTML5",
            icon: "mdi:html5",
            lessons: [
              {
                title: "Historia e Introducción a HTML",
                file: "introduccion-html.md",
              },
              {
                title: "La etiqueta de HTML",
                file: "la-etiqueta-html.md",
              },
              {
                title: "Atributos comunes",
                file: "atributos-comunes.md",
              },
            ],
          },
          {
            title: "Documento HTML5",
            icon: "mdi:html5",
            lessons: [
              {
                title: "Estructura ",
                file: "estructura-html-5.md",
              },
              {
                title: "Validacion de errores HTML",
                file: "validacion-errores-html.md",
              },
              {
                title: "Metadatos e idioma",
                file: "metadatos-e-idioma-html.md",
              },
            ],
          },
        ],
      },
      {
        title: "Cabecera",
        modules: [
          {
            title: "Etiquetas de cabecera",
            icon: "mdi:html5",
            lessons: [
              {
                title: "Etiquetas de head",
                file: "etiquetas-head.md",
              },
              {
                title: "La etiqueta <base>",
                file: "etiqueta-base.md",
              },
            ],
          },
          {
            title: "Metadatos",
            icon: "mdi:html5",
            lessons: [
              {
                title: "Etiqueta <meta>",
                file: "etiqueta-meta.md",
              },
              {
                title: "Redes sociales",
                file: "etiqueta-para-redes.md",
              },
              {
                title: "SEO para Google",
                file: "etiquetas-seo-google.md",
              },
			  {
				title: "Etiqueta para diseño responsive",
				file: "etiqueta-responsive.md"
			  }
            ],
          },
        ],
      },
    ],
  },
  // {
  // 	title: 'CSS',
  // 	slug: 'css',
  // 	color: '#673399',
  // 	image: '/images/technologies/css.webp',
  // 	chapters: [
  // 		{
  // 			title: 'Bases',
  // 			modules: [
  // 				{
  // 					title: 'Introducción a CSS',
  //                     icon: "mdi:css3",
  // 					lessons: [
  // 						{
  // 							title: 'Historia e Introducción a CSS',
  // 							file: 'introduccion-css.md',
  // 						},
  // 			],
  // 		},
  // 	],
  // },
];
