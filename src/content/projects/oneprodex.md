---
title: OneProdex
type: Entretenimiento
description: Plataforma de predicciones para el Mundial FIFA 2026 con grupos privados, bracket completo y puntuación en tiempo real.
cover: /images/projects/oneprodex.png
stack: ["Next.js", "TypeScript", "Supabase", "React 19", "Tailwind CSS", "Framer Motion"]
repo: https://github.com/maticarrera12/oneprodex
demo: https://oneprodex.vercel.app
status: active
featured: true
overview: OneProdex es una plataforma de predicciones para el Mundial FIFA 2026. Los usuarios se unen a grupos privados, predicen los resultados de la fase de grupos, construyen su bracket de eliminación directa completo y eligen a los ganadores de premios individuales. Todo se puntúa automáticamente y se compite en tiempo real.
problem: Durante los mundiales, las predicciones entre amigos son un caos — planillas de Excel, encuestas de WhatsApp y sin seguimiento automático. No existe una plataforma que combine predicciones completas (fase de grupos + bracket + premios individuales) con competencia entre conocidos.
solution: OneProdex implementa un flujo de onboarding de 4 pasos donde cada usuario rankea los 12 grupos, selecciona los mejores terceros, construye su bracket completo de 32 equipos y elige a los ganadores de premios individuales. Las picks se bloquean al enviar y alimentan el motor de puntuación automáticamente.
architecture: Frontend y backend en Next.js 16 App Router con Server Actions para todas las mutaciones. Autenticación via Supabase Auth con OAuth de Google y Discord. Base de datos PostgreSQL en Supabase con Row Level Security por usuario. Estado del onboarding persistido en localStorage como caché de UX, con guardado por paso en servidor. Actualizaciones en tiempo real via Supabase Realtime.
learning: Primer proyecto con una arquitectura orientada a features de forma estricta y un flujo de onboarding multi-step con estado derivado. El mayor desafío fue el slot resolver — un algoritmo puro que mapea los picks de grupos a los 32 slots del bracket FIFA 2026, cubierto con tests de Vitest.
learningList: ["Arquitectura orientada a features", "Server Actions y mutaciones en Next.js", "Supabase RLS y OAuth", "Algoritmos de derivación de estado puro", "Flujos de onboarding multi-step con persistencia"]
---
