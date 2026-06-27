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
		title: 'HTML',
		slug: 'html',
		color: '#E44D26',
		image: '/images/technologies/html.webp',
		chapters: [
			{
				title: 'Bases',
				modules: [
					{
						title: 'Introducción a HTML5',
                        icon: "mdi:html5",
						lessons: [
							{
								title: 'Historia e Introducción a HTML',
								file: 'introduccion-html.md',
							},
							{
								title: 'La etiqueta de HTML',
								file: 'la-etiqueta-html.md',
							},
							{
								title: 'Atributos comunes',
								file: 'atributos-comunes.md',
							},
						],
					},
					{
						title: 'Documento HTML5',
                        icon: "mdi:html5",
						lessons: [
							{
								title: 'Estructura ',
								file: 'estructura-html-5.md',
							},
							{
								title: 'Validacion de errores HTML',
								file: 'validacion-errores-html.md',
							},
							{
								title: 'Metadatos e idioma',
								file: 'metadatos-e-idioma-html.md',
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'CSS',
		slug: 'css',
		color: '#673399',
		image: '/images/technologies/css.webp',
		chapters: [
			{
				title: 'Bases',
				modules: [
					{
						title: 'Introducción a CSS',
                        icon: "mdi:css3",
						lessons: [
							{
								title: 'Historia e Introducción a CSS',
								file: 'introduccion-css.md',
							},
							// {
							// 	title: 'Atributos comunes',
							// 	file: 'atributos-comunes-html.md',
							// },
						],
					},
					// {
					// 	title: 'Documentos HTML',
                    //     icon: "mdi:html5",
					// 	lessons: [
					// 		{
					// 			title: 'Estructura',
					// 			file: 'estructura-documento-html.md',
					// 		},
					// 		{
					// 			title: 'Validacion de errores HTML',
					// 			file: 'validacion-errores-html.md',
					// 		},
					// 		{
					// 			title: 'Metadatos e idioma',
					// 			file: 'metadatos-idioma-html.md',
					// 		},
					// 	],
					// },
				],
			},
		],
	},
];
