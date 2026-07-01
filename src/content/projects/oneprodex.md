---
title: OneProdex
type: Entretenimiento
description: Plataforma de predicciones para el Mundial FIFA 2026 con grupos privados, bracket completo y puntuación en tiempo real.
cover: /images/projects/oneprodex-1.png
gallery:
  - /images/projects/oneprodex-1.png
  - /images/projects/oneprodex-2.png
  - /images/projects/oneprodex-3.png
  - /images/projects/oneprodex-4.png
stack: ["Next.js", "TypeScript", "Supabase", "React", "Tailwind CSS", "Framer Motion"]
repo: https://github.com/maticarrera12/oneprodex
demo: https://oneprodex.vercel.app
status: active
architectureImage: /images/projects/architecture-oneprodex.png
featured: true
overview: OneProdex es una plataforma de predicciones para el Mundial FIFA 2026. Los usuarios se unen a grupos privados, predicen los resultados de la fase de grupos, construyen su bracket de eliminación directa completo y eligen a los ganadores de premios individuales. Todo se puntúa automáticamente y se compite en tiempo real.
problem: Durante los mundiales, las predicciones entre amigos son un caos — planillas de Excel, encuestas de WhatsApp y sin seguimiento automático. No existe una plataforma que combine predicciones completas (fase de grupos + bracket + premios individuales) con competencia entre conocidos.
solution: OneProdex resuelve esto con un flujo guiado donde cada usuario construye su predicción completa una sola vez (rankea grupos, selecciona terceros, arma bracket de 32 equipos, elige premios individuales). Después, todo se puntúa automáticamente y los rankings se actualizan en vivo — la competencia funciona sola.
architecture: Frontend y backend en Next.js 16 App Router con Server Actions para todas las mutaciones. Autenticación via Supabase Auth con OAuth de Google y Discord. Base de datos PostgreSQL en Supabase con Row Level Security por usuario. Estado del onboarding persistido en localStorage como caché de UX, con guardado por paso en servidor. Actualizaciones en tiempo real via Supabase Realtime.
learning: Primer proyecto con una arquitectura orientada a features de forma estricta y un flujo de onboarding multi-step con estado derivado. El mayor desafío fue el slot resolver — un algoritmo puro que mapea los picks de grupos a los 32 slots del bracket FIFA 2026, cubierto con tests de Vitest.
learningList: ["Arquitectura orientada a features", "Server Actions y mutaciones en Next.js", "Supabase RLS y OAuth", "Algoritmos de derivación de estado puro", "Flujos de onboarding multi-step con persistencia"]
features:
  Onboarding multi-step: Ranking de 12 grupos, selección de mejores terceros, bracket de 32 equipos, predicciones de premios individuales
  Bracket builder: Slot resolver puro que mapea picks a los 32 slots del formato FIFA 2026
  Grupos privados: Los usuarios compiten entre sí dentro de grupos con código de invitación
  Predicciones de partidos: Resultado, goleadores, portero sin goles recibidos
  Puntuación automática: Score calculado en base a picks almacenados vs. resultados reales
  Standings y rankings: Tabla de posiciones por grupo con tendencias
  Perfil: Historial, estadísticas, logros y progresión de nivel
  Realtime: Actualizaciones en vivo vía Supabase Realtime
---
