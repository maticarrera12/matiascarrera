---
title: KiritaAI
type: Producto/Saas
description: SaaS de inteligencia de mercado con IA para descubrir nichos de apps con potencial real en Google Play.
cover: /images/projects/kiritaai-1.png
gallery:
  - /images/projects/kiritaai-1.png
  - /images/projects/kiritaai-2.png
  - /images/projects/kiritaai-3.png
  - /images/projects/kiritaai-4.png
  - /images/projects/kiritaai-5.png
  - /images/projects/kiritaai-6.png
stack: ["Next.js", "TypeScript", "Prisma", "Neon", "OpenAI", "better-auth", "Pusher", "Stripe"]
repo: https://github.com/maticarrera12/kiritaai
demo: https://kiritaai.com/
status: active
featured: true
architectureImage: /images/projects/architecture-kiritaai.png

overview: KiritaAI es un SaaS de inteligencia de mercado para creators y product builders que quieren construir apps. Analiza con IA cualquier app de Google Play para identificar gaps de funcionalidad, oportunidades de monetización y nichos con potencial. Diariamente descubre 5 nichos en auge usando datos reales de la tienda. Suma una capa de gamificación con logros, misiones y créditos para retención.

problem: Con la IA, construir una app dejó de ser el problema. El problema es saber qué construir. Cada día se lanzan miles de apps; encontrar un nicho con demanda real y baja competencia requiere horas de research manual — leer reseñas, comparar competidores, analizar tendencias. La mayoría termina construyendo algo que ya existe o que nadie necesita.

solution: KiritaAI automatiza el research con tres motores complementarios. (1) Análisis de apps — desglose profundo con IA de cualquier app de Google Play (sentimiento en reseñas, huecos de funcionalidades, estrategias de monetización). (2) Motor de nichos — descubrimiento automático diario de 5 nichos con baja competencia y alto potencial. (3) Blueprints de mercado — generación de un plan completo de producto (posicionamiento, features, precios, go-to-market) a partir de un nicho o competidor. Todo accesible vía chat conversacional con IA en streaming, con contexto persistente de las apps analizadas.

architecture: Frontend y backend en Next.js 15 (App Router) con Server Actions para todas las mutaciones. Autenticación con better-auth, elegido sobre Auth.js por su modelo de plugins más flexible. Base de datos PostgreSQL en Neon (serverless, escala naturalmente con Vercel), ORM con Prisma. Internacionalización con next-intl (inglés y español). Pagos y créditos con Stripe. Emails transaccionales con Resend + React Email. Notificaciones en tiempo real con Pusher. El scraper de Google Play está desacoplado como microservicio en Node.js para aislar las restricciones de rate limiting y poder escalarlo independientemente del frontend. Análisis con IA vía OpenAI en streaming, con sistema de créditos por operación.

learning: KiritaAI fue el primer proyecto donde diseñé y construí un SaaS completo de punta a punta — desde la lógica de negocio (sistema de créditos, modelo híbrido de facturación) hasta la infraestructura (scraper propio en microservicio, IA conversacional con streaming). El mayor desafío fue construir el scraper de Google Play como servicio desacoplado — pensar rate limiting por usuario, soporte regional, y aislar fallas para que el scraper caído no rompiera el resto del producto. Otra decisión clave fue el sistema de créditos — modelé cada operación de IA como una unidad facturable, con créditos del plan mensual y packs comprables. Implementarlo me obligó a pensar en transacciones, auditabilidad de cobros y visibilidad transparente del uso para el usuario. La gamificación la sumé al final como capa de retención, y aprendí que features de engagement bien diseñadas pueden cambiar completamente cómo se siente un producto sin tocar el core.

learningList:
  - Arquitectura SaaS multi-tenant
  - Microservicios desacoplados (scraper como servicio independiente)
  - Streaming de IA con OpenAI y contexto persistente
  - Sistemas de facturación con créditos (modelo híbrido)
  - Web scraping con rate limiting y soporte multi-región
  - Diseño de gamificación (logros, misiones, rachas)
  - Internacionalización con next-intl
  - Notificaciones en tiempo real con Pusher

features:
  Análisis de apps con IA: Desglose profundo de cualquier app de Google Play — sentimiento en reseñas, huecos de funcionalidades, estrategia de monetización y oportunidades de crecimiento.
  Motor de nichos: Descubrimiento automático diario de 5 nichos con baja competencia y alto potencial, segmentado por categorías y regiones usando datos reales de la tienda.
  Blueprints de mercado: Genera un plan completo de producto desde un nicho o competidor — posicionamiento, funcionalidades, precios y ángulo de go-to-market.
  Chat con IA en streaming: Conversación con IA en tiempo real con contexto completo de las apps analizadas. Preguntá lo que quieras y obtené insights basados en datos reales.
  Sistema de créditos: Modelo híbrido de facturación con créditos del plan mensual más packs comprables. Cada operación de IA es medida y transparente.
  Motor de scraping: Scraper de Google Play desacoplado como microservicio, con límites diarios por usuario, soporte regional y búsqueda por categoría.
  Gamificación: Sistema completo de progresión — logros, misiones diarias y semanales, rachas y créditos bonus.
  Panel de administración: Dashboard interno para gestión de usuarios, planes, ajuste de créditos y métricas de la plataforma.
---