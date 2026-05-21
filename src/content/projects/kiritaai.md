---
title: KiritaAI
type: Producto/Saas
description: Saas sobre analisis de aplicaciones con IA para encontrar gaps de mercado en la PlayStore.
cover: /images/projects/kiritaai-1.png
gallery:
  - /images/projects/kiritaai-1.png
  - /images/projects/kiritaai-2.png
  - /images/projects/kiritaai-3.png
  - /images/projects/kiritaai-4.png
  - /images/projects/kiritaai-5.png
  - /images/projects/kiritaai-6.png
stack: ["Next.js", "Prisma", "TypeScript","OpenAI", "Neon", "Web Scrapping"]
repo: https://github.com/maticarrera12/kiritaai
demo: https://kiritaai.com/
status: active
featured: true
overview: KiritaAI es una plataforma gamificada para hacer la busqueda de oportunidades de apps una experiencia gratificante. Con la opcion de obtener cartas coleccionables y subir de nivel para obtener beneficios.
problem: Hoy en dia ya no es un impedimento realizar apps sin saber programar, el problema es saber que programar, donde se puede encontrar un nicho a explotar.
solution: KiritaAI realiaz analisis FODA en base a las reviews de aplicaciones. Ademas diariamente nos muestra 5 nichos en auge.
architecture: Tanto frontend como backend esta realizado en Next.js, la autenticacion esta realizada en better-auth. Todo almacenado de forma segura en Prisma-Neon. El scrapper es un servicio externo realizado en Node.js
learning: Este proyecto fue el primero que realice de manera totalmente independiente, si bien ya tenia una buena base en Next.js y diseno web, esta fue una experiencia totalmente nueva. Tuve que aprender totalmente como crear el scrapper que es el motor de la aplicacion, tomar decisiones sobre rendimiento y sobre UX/UI.
learningList: ["Diseno de arquitectura escalable", "Relaciones de bases de datos", "Autenticacion y autorizacin seguras", "Optimizacion de rendimiento"]
architectureImage: /images/projects/architecture-kiritaai.png
features:
  Análisis de apps: Desglose profundo con IA de cualquier app de Google Play — sentimiento en reseñas, huecos de funcionalidades, estrategia de monetización y oportunidades de crecimiento
  Motor de nichos: Descubrimiento automático de nichos con baja competencia y alto potencial por categorías y regiones usando datos reales de la tienda
  Blueprints de mercado: Genera un blueprint completo de producto desde un nicho o app competidora — posicionamiento, funcionalidades, precios y ángulo de go-to-market
  Chat con IA: IA conversacional en streaming con contexto completo de tus apps analizadas; preguntá lo que quieras y obtené insights basados en datos reales
  Favoritos y colecciones: Guardá y organizá apps en proyectos; modo colecciones para usuarios avanzados que siguen cientos de apps
  Mis análisis: Historial completo de cada análisis, seguimiento de cambios en el tiempo y reanálisis bajo demanda
  Logros y misiones: Progresión gamificada — desbloqueá logros, completá misiones diarias y semanales, rachas y créditos bonus
  Sistema de créditos: Modelo híbrido de facturación — créditos del plan mensual más packs comprables; cada operación con IA es medida y transparente
  Motor de scraping: Scraper de Google Play con límites diarios por usuario, soporte regional y búsqueda por categoría
  Panel de administración: Dashboard interno para gestión de usuarios, planes, ajuste de créditos, pruebas de Pusher y métricas de la plataforma
  Internacionalización: i18n completo con next-intl; inglés y español incluidos
  Notificaciones por email: Emails transaccionales vía Resend con plantillas React Email
  Actualizaciones en tiempo real: Notificaciones en vivo con Pusher al completar análisis y para eventos del sistema
---