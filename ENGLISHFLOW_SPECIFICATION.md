# EnglishFlow - Especificación Completa de Desarrollo

## Visión General del Proyecto

**EnglishFlow** es una aplicación web interactiva y completa para aprender inglés desde cero. Diseñada para ser utilizada durante meses, ofrece un sistema progresivo de aprendizaje basado en ejercicios prácticos de contexto, selección múltiple, completar oraciones, ordenar palabras, asociación y más.

### Principios Fundamentales

- **Sin contenido multimedia**: No utiliza videos ni audios (solo texto e interacción)
- **Aprendizaje progresivo**: Desde nivel A1 hasta B2 (principiante a intermedio-alto)
- **Extenso y completo**: Contenido para meses de estudio continuo
- **Diseño consistente**: UI/UX uniforme en toda la aplicación
- **Gamificación**: Sistema de puntos, rachas y logros para motivación
- **Persistencia local**: Progreso guardado en localStorage

---

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.1.1 | Framework principal (App Router) |
| React | 19.2.3 | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos y diseño |
| localStorage | - | Persistencia de datos |

---

## Estructura de Niveles y Contenido

### Niveles CEFR (Marco Común Europeo)

```
NIVEL A1 - Principiante (Beginner)
├── 12 Unidades temáticas
├── ~180 lecciones
└── ~1,800 ejercicios

NIVEL A2 - Elemental (Elementary)
├── 12 Unidades temáticas
├── ~180 lecciones
└── ~1,800 ejercicios

NIVEL B1 - Intermedio (Intermediate)
├── 12 Unidades temáticas
├── ~180 lecciones
└── ~1,800 ejercicios

NIVEL B2 - Intermedio Alto (Upper-Intermediate)
├── 12 Unidades temáticas
├── ~180 lecciones
└── ~1,800 ejercicios

TOTAL: 48 Unidades | ~720 Lecciones | ~7,200 Ejercicios
```

---

## Unidades Temáticas por Nivel

### NIVEL A1 - Principiante

| # | Unidad | Temas Cubiertos |
|---|--------|-----------------|
| 1 | **Greetings & Introductions** | Hello, goodbye, my name is, nice to meet you, basic questions |
| 2 | **The Alphabet & Numbers** | A-Z pronunciation rules, numbers 0-100, phone numbers, ages |
| 3 | **Personal Information** | Name, age, nationality, occupation, address, email |
| 4 | **Family & Relationships** | Family members, possessive adjectives, describing relationships |
| 5 | **Colors & Adjectives** | Basic colors, size, shape, simple descriptions |
| 6 | **Days, Months & Time** | Days of week, months, telling time, daily routines |
| 7 | **Food & Drinks** | Common foods, meals, ordering at restaurant, likes/dislikes |
| 8 | **Home & Furniture** | Rooms, furniture, prepositions of place (in, on, under) |
| 9 | **Clothes & Shopping** | Clothing items, sizes, prices, shopping phrases |
| 10 | **Body Parts & Health** | Body vocabulary, basic health expressions, feelings |
| 11 | **Weather & Seasons** | Weather conditions, seasons, temperature, clothing choices |
| 12 | **Verbs: To Be & To Have** | Present simple, affirmative, negative, questions |

### NIVEL A2 - Elemental

| # | Unidad | Temas Cubiertos |
|---|--------|-----------------|
| 1 | **Daily Routines** | Present simple, adverbs of frequency, time expressions |
| 2 | **Jobs & Workplaces** | Occupations, workplaces, responsibilities, schedules |
| 3 | **Transportation** | Vehicles, directions, buying tickets, public transport |
| 4 | **Places in Town** | Buildings, giving directions, prepositions of movement |
| 5 | **Hobbies & Free Time** | Activities, sports, likes/dislikes, can/can't |
| 6 | **Past Simple: Regular** | -ed endings, time expressions, affirmative/negative |
| 7 | **Past Simple: Irregular** | Common irregular verbs, questions, short answers |
| 8 | **Comparatives** | Comparing things, -er/more, as...as, less than |
| 9 | **Superlatives** | The best, the most, irregular forms, rankings |
| 10 | **Future: Going To** | Plans, intentions, predictions with evidence |
| 11 | **Future: Will** | Promises, offers, predictions, decisions |
| 12 | **Modal Verbs Basic** | Can, could, must, should, have to |

### NIVEL B1 - Intermedio

| # | Unidad | Temas Cubiertos |
|---|--------|-----------------|
| 1 | **Present Perfect** | Experience, recent past, ever/never, just/already/yet |
| 2 | **Present Perfect vs Past** | When to use each, time expressions, context clues |
| 3 | **Continuous Tenses** | Present, past, future continuous, while/when |
| 4 | **Conditionals: Zero & First** | If clauses, real situations, results |
| 5 | **Conditionals: Second** | Unreal present, imaginary situations, would |
| 6 | **Passive Voice** | Present and past passive, agent, formal writing |
| 7 | **Reported Speech** | Say/tell, tense changes, reporting verbs |
| 8 | **Relative Clauses** | Who, which, that, where, defining/non-defining |
| 9 | **Phrasal Verbs I** | Common separable/inseparable, context usage |
| 10 | **Connectors & Linking** | Although, however, therefore, in addition |
| 11 | **Gerunds & Infinitives** | Verb patterns, -ing vs to, rules and exceptions |
| 12 | **Articles & Quantifiers** | A/an/the, some/any, much/many, a lot of |

### NIVEL B2 - Intermedio Alto

| # | Unidad | Temas Cubiertos |
|---|--------|-----------------|
| 1 | **Perfect Tenses Advanced** | Present/past/future perfect, continuous forms |
| 2 | **Conditionals: Third** | Past unreal, regrets, mixed conditionals |
| 3 | **Advanced Passive** | All tenses passive, causative have/get |
| 4 | **Modals of Deduction** | Must be, can't be, might have, certainty levels |
| 5 | **Wish & Regret** | Wish + past, if only, regret expressions |
| 6 | **Inversion** | Negative adverbs, formal English, emphasis |
| 7 | **Phrasal Verbs II** | Advanced phrasal verbs, multiple meanings |
| 8 | **Collocations** | Common word partnerships, natural English |
| 9 | **Idiomatic Expressions** | Common idioms, figurative language |
| 10 | **Formal vs Informal** | Register, tone, appropriate language use |
| 11 | **Advanced Connectors** | Complex linking, academic writing |
| 12 | **Review & Integration** | All grammar, comprehensive practice |

---

## Tipos de Ejercicios

### 1. Multiple Choice (Selección Múltiple)
```
Pregunta: What is the correct form?
"She ___ to school every day."

[ ] go
[x] goes
[ ] going
[ ] gone
```

### 2. Fill in the Blank (Completar)
```
Complete the sentence with the correct word:

"I have two _______ (brother/brothers)."

Input: [brothers]
```

### 3. Word Order (Ordenar Palabras)
```
Put the words in the correct order:

[is] [name] [My] [John]

Respuesta: My name is John.
```

### 4. Matching (Asociación/Emparejamiento)
```
Match the words with their meanings:

Apple      ●────● Rojo
Big        ●────● Manzana
Red        ●────● Grande
```

### 5. True or False (Verdadero o Falso)
```
Read and decide:

"Dogs can fly."

( ) True
(x) False
```

### 6. Translation (Traducción)
```
Translate to English:

"Yo tengo un perro."

Input: [I have a dog]
```

### 7. Error Correction (Corrección de Errores)
```
Find and correct the error:

"She have three cats."

Corrected: [She has three cats.]
```

### 8. Context Completion (Completar en Contexto)
```
Read the text and fill the gaps:

"Mary wakes up at 7 AM. She (1)___ breakfast
and then (2)___ to work by bus."

(1) [has/eats]
(2) [goes/travels]
```

### 9. Categorization (Categorización)
```
Put each word in the correct category:

Words: apple, car, banana, bus, orange, train

FRUITS          |  TRANSPORT
----------------|----------------
apple           |  car
banana          |  bus
orange          |  train
```

### 10. Dialogue Completion (Completar Diálogo)
```
Complete the conversation:

A: "Hello! How are you?"
B: "_______________"
A: "Nice to meet you too!"

Options:
[ ] I'm fine, thanks.
[x] Fine, thanks. Nice to meet you!
[ ] Goodbye!
```

---

## Sistema de Gamificación

### Puntos (XP)
| Acción | Puntos |
|--------|--------|
| Ejercicio correcto (primer intento) | 10 XP |
| Ejercicio correcto (segundo intento) | 5 XP |
| Completar lección | 50 XP bonus |
| Completar unidad | 200 XP bonus |
| Completar nivel | 1000 XP bonus |
| Racha diaria (7 días) | 100 XP bonus |
| Racha diaria (30 días) | 500 XP bonus |

### Logros (Achievements)
```
🌟 First Steps - Completa tu primera lección
📚 Bookworm - Completa 10 lecciones
🔥 On Fire - Mantén una racha de 7 días
💪 Dedicated - Mantén una racha de 30 días
🎯 Perfect Score - Completa una lección sin errores
🏆 Level Master - Completa un nivel completo
👑 English Champion - Completa todos los niveles
```

### Rachas (Streaks)
- Se cuenta un día de práctica con mínimo 1 lección completada
- La racha se reinicia si pasan 48 horas sin práctica
- Notificación visual de racha actual

---

## Diseño de UI/UX

### Paleta de Colores

```css
/* Colores Principales */
--primary: #3B82F6;        /* Azul principal */
--primary-dark: #2563EB;   /* Azul oscuro */
--primary-light: #60A5FA;  /* Azul claro */

/* Colores de Estado */
--success: #10B981;        /* Verde - Correcto */
--error: #EF4444;          /* Rojo - Incorrecto */
--warning: #F59E0B;        /* Amarillo - Advertencia */

/* Colores Neutrales */
--background: #F8FAFC;     /* Fondo claro */
--surface: #FFFFFF;        /* Superficie/cards */
--text-primary: #1E293B;   /* Texto principal */
--text-secondary: #64748B; /* Texto secundario */
--border: #E2E8F0;         /* Bordes */

/* Modo Oscuro */
--dark-background: #0F172A;
--dark-surface: #1E293B;
--dark-text-primary: #F1F5F9;
--dark-text-secondary: #94A3B8;
--dark-border: #334155;

/* Colores por Nivel */
--level-a1: #22C55E;       /* Verde - Principiante */
--level-a2: #3B82F6;       /* Azul - Elemental */
--level-b1: #A855F7;       /* Púrpura - Intermedio */
--level-b2: #F97316;       /* Naranja - Intermedio Alto */
```

### Tipografía

```css
/* Fuente principal: Geist Sans (ya incluida) */
font-family: var(--font-geist-sans);

/* Tamaños */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Componentes de Diseño

#### Cards
```
┌─────────────────────────────────┐
│  📘 Unit 1: Greetings           │
│                                 │
│  ████████████░░░░ 75%          │
│  12/16 lessons completed        │
│                                 │
│  [Continue Learning →]          │
└─────────────────────────────────┘
```

#### Progress Bar
```
Completed: ████████████░░░░░░░░ 60%
```

#### Exercise Card
```
┌─────────────────────────────────┐
│  Question 3 of 10               │
│                                 │
│  Select the correct answer:     │
│                                 │
│  "She ___ a teacher."          │
│                                 │
│  ┌─────────────────────────┐   │
│  │  ○  am                   │   │
│  ├─────────────────────────┤   │
│  │  ○  is         ✓        │   │
│  ├─────────────────────────┤   │
│  │  ○  are                  │   │
│  └─────────────────────────┘   │
│                                 │
│         [Check Answer]          │
└─────────────────────────────────┘
```

---

## Arquitectura de la Aplicación

### Estructura de Carpetas

```
app/
├── layout.tsx                    # Layout principal
├── page.tsx                      # Página de inicio/dashboard
├── globals.css                   # Estilos globales
│
├── (auth)/                       # Grupo: Onboarding
│   └── welcome/
│       └── page.tsx              # Pantalla de bienvenida
│
├── levels/                       # Selector de niveles
│   ├── page.tsx                  # Lista de niveles
│   └── [levelId]/               # Nivel específico (a1, a2, b1, b2)
│       ├── page.tsx              # Unidades del nivel
│       └── [unitId]/            # Unidad específica
│           ├── page.tsx          # Lecciones de la unidad
│           └── [lessonId]/      # Lección específica
│               └── page.tsx      # Ejercicios de la lección
│
├── practice/                     # Práctica rápida
│   └── page.tsx                  # Ejercicios aleatorios
│
├── review/                       # Repaso de errores
│   └── page.tsx                  # Ejercicios fallidos
│
├── achievements/                 # Logros
│   └── page.tsx                  # Lista de achievements
│
├── profile/                      # Perfil de usuario
│   └── page.tsx                  # Estadísticas y configuración
│
components/
├── ui/                           # Componentes base UI
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ProgressBar.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   └── Input.tsx
│
├── layout/                       # Componentes de layout
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
│
├── exercises/                    # Componentes de ejercicios
│   ├── MultipleChoice.tsx
│   ├── FillInBlank.tsx
│   ├── WordOrder.tsx
│   ├── Matching.tsx
│   ├── TrueFalse.tsx
│   ├── Translation.tsx
│   ├── ErrorCorrection.tsx
│   ├── ContextCompletion.tsx
│   ├── Categorization.tsx
│   └── DialogueCompletion.tsx
│
├── progress/                     # Componentes de progreso
│   ├── LevelCard.tsx
│   ├── UnitCard.tsx
│   ├── LessonCard.tsx
│   ├── StreakCounter.tsx
│   └── XPDisplay.tsx
│
└── feedback/                     # Componentes de feedback
    ├── CorrectAnswer.tsx
    ├── IncorrectAnswer.tsx
    └── LessonComplete.tsx

lib/
├── types/                        # TypeScript types
│   ├── exercise.ts
│   ├── lesson.ts
│   ├── unit.ts
│   ├── level.ts
│   └── progress.ts
│
├── data/                         # Datos de contenido
│   ├── levels/
│   │   ├── a1/
│   │   │   ├── index.ts
│   │   │   ├── unit-01-greetings.ts
│   │   │   ├── unit-02-alphabet.ts
│   │   │   └── ... (12 unidades)
│   │   ├── a2/
│   │   │   └── ... (12 unidades)
│   │   ├── b1/
│   │   │   └── ... (12 unidades)
│   │   └── b2/
│   │       └── ... (12 unidades)
│   │
│   └── vocabulary/               # Vocabulario por tema
│       ├── greetings.ts
│       ├── numbers.ts
│       ├── family.ts
│       └── ...
│
├── hooks/                        # Custom hooks
│   ├── useProgress.ts
│   ├── useExercise.ts
│   ├── useStreak.ts
│   └── useAchievements.ts
│
├── utils/                        # Utilidades
│   ├── storage.ts                # localStorage helpers
│   ├── scoring.ts                # Cálculo de puntos
│   ├── validation.ts             # Validación de respuestas
│   └── shuffle.ts                # Aleatorización
│
└── constants/                    # Constantes
    ├── points.ts
    ├── achievements.ts
    └── levels.ts
```

---

## Fases de Desarrollo

### FASE 1: Fundamentos y Estructura Base
**Objetivo**: Establecer la arquitectura base de la aplicación

#### Tareas:
1. **Configuración inicial**
   - Limpiar archivos boilerplate
   - Configurar variables CSS y tema
   - Crear estructura de carpetas

2. **Componentes UI Base**
   - Button (variantes: primary, secondary, outline, ghost)
   - Card (variantes: default, interactive, highlighted)
   - ProgressBar (con animación)
   - Badge (para logros y estados)
   - Input (text, con validación visual)
   - Modal (para feedback y confirmaciones)

3. **Layout Principal**
   - Header con navegación
   - Sidebar (mobile: bottom nav)
   - Footer simple
   - Responsive design

4. **Sistema de Almacenamiento**
   - Hooks para localStorage
   - Estructura de datos de progreso
   - Funciones de guardado/carga

5. **Página de Bienvenida**
   - Introducción a la app
   - Selección de nivel inicial (test opcional)

**Entregables**:
- Estructura de carpetas completa
- Componentes UI funcionando
- Layout responsive
- Sistema de storage implementado
- Página de bienvenida

**Verificación**: `npm run build` debe completar sin errores

---

### FASE 2: Sistema de Ejercicios
**Objetivo**: Crear todos los tipos de ejercicios interactivos

#### Tareas:
1. **Tipos de ejercicios (TypeScript)**
   - Definir interfaces para cada tipo
   - Crear tipos para respuestas y validación

2. **Componentes de Ejercicios**
   - MultipleChoice
   - FillInBlank
   - WordOrder (drag & drop simulation con clicks)
   - Matching
   - TrueFalse
   - Translation
   - ErrorCorrection
   - ContextCompletion
   - Categorization
   - DialogueCompletion

3. **Sistema de Feedback**
   - Animación de respuesta correcta
   - Animación de respuesta incorrecta
   - Mostrar respuesta correcta
   - Explicación opcional

4. **Motor de Ejercicios**
   - Validación de respuestas
   - Cálculo de puntos
   - Seguimiento de intentos
   - Navegación entre ejercicios

**Entregables**:
- 10 componentes de ejercicios funcionales
- Sistema de feedback visual
- Validación de respuestas
- Motor de ejercicios completo

**Verificación**: `npm run build` debe completar sin errores

---

### FASE 3: Contenido Nivel A1
**Objetivo**: Crear todo el contenido del nivel principiante

#### Tareas:
1. **Unidad 1: Greetings & Introductions**
   - 15 lecciones
   - ~150 ejercicios variados
   - Vocabulario: 50+ palabras

2. **Unidad 2: The Alphabet & Numbers**
   - 15 lecciones
   - ~150 ejercicios
   - Números 0-100

3. **Unidad 3: Personal Information**
   - 15 lecciones
   - ~150 ejercicios

4. **Unidades 4-12** (similar estructura)

5. **Vocabulario A1**
   - ~500 palabras organizadas por tema
   - Ejemplos de uso

**Entregables**:
- 12 unidades completas
- ~180 lecciones
- ~1,800 ejercicios
- Vocabulario categorizado

**Verificación**: `npm run build` + navegación por todas las lecciones

---

### FASE 4: Sistema de Progreso y Gamificación
**Objetivo**: Implementar tracking de progreso y motivación

#### Tareas:
1. **Sistema de Progreso**
   - Tracking de lecciones completadas
   - Porcentaje por unidad/nivel
   - Historial de ejercicios

2. **Sistema de XP**
   - Cálculo de puntos
   - Bonos por rachas
   - Bonos por perfección

3. **Sistema de Rachas**
   - Contador de días consecutivos
   - Detección de actividad diaria
   - Notificaciones visuales

4. **Sistema de Logros**
   - Definición de achievements
   - Detección de condiciones
   - Notificaciones de desbloqueo
   - Galería de logros

5. **Dashboard Principal**
   - Resumen de progreso
   - Estadísticas
   - Racha actual
   - Siguiente lección sugerida

**Entregables**:
- Dashboard completo
- Sistema de XP funcional
- Rachas implementadas
- ~15 logros desbloqueables
- Persistencia completa

**Verificación**: `npm run build` + verificar persistencia de datos

---

### FASE 5: Contenido Nivel A2
**Objetivo**: Crear contenido del nivel elemental

#### Tareas:
- 12 unidades con gramática más avanzada
- ~180 lecciones
- ~1,800 ejercicios
- Vocabulario expandido (~500 palabras adicionales)

**Temas de gramática**:
- Present Simple profundo
- Past Simple (regular e irregular)
- Comparativos y superlativos
- Future (going to, will)
- Modal verbs básicos

**Entregables**:
- 12 unidades A2 completas
- Ejercicios de gramática avanzada
- Vocabulario temático

**Verificación**: `npm run build` + navegación completa

---

### FASE 6: Contenido Nivel B1
**Objetivo**: Crear contenido del nivel intermedio

#### Tareas:
- 12 unidades con gramática intermedia
- ~180 lecciones
- ~1,800 ejercicios

**Temas de gramática**:
- Present Perfect
- Tiempos continuos
- Condicionales (0, 1, 2)
- Voz pasiva
- Reported speech
- Relative clauses
- Phrasal verbs

**Entregables**:
- 12 unidades B1 completas
- Ejercicios de comprensión
- Phrasal verbs comunes

**Verificación**: `npm run build` + navegación completa

---

### FASE 7: Contenido Nivel B2
**Objetivo**: Crear contenido del nivel intermedio-alto

#### Tareas:
- 12 unidades con gramática avanzada
- ~180 lecciones
- ~1,800 ejercicios

**Temas de gramática**:
- Perfect tenses avanzados
- Third conditional y mixed
- Modals de deducción
- Inversión
- Collocations
- Idioms
- Registro formal/informal

**Entregables**:
- 12 unidades B2 completas
- Ejercicios de nivel avanzado
- Idioms y collocations

**Verificación**: `npm run build` + navegación completa

---

### FASE 8: Features Adicionales
**Objetivo**: Funcionalidades extras y pulido

#### Tareas:
1. **Práctica Rápida**
   - Ejercicios aleatorios por nivel
   - Mezcla de tipos
   - Sin necesidad de seguir orden

2. **Repaso de Errores**
   - Almacenar ejercicios fallidos
   - Modo de repaso específico
   - Espaciado de repetición simple

3. **Modo Examen**
   - Test por unidad
   - Test por nivel
   - Puntuación final

4. **Perfil de Usuario**
   - Estadísticas detalladas
   - Gráficos de progreso
   - Exportar/importar datos

5. **Configuración**
   - Tema claro/oscuro
   - Reiniciar progreso
   - Preferencias

**Entregables**:
- Práctica rápida
- Sistema de repaso
- Modo examen
- Perfil completo
- Configuración

**Verificación**: `npm run build` + todas las features funcionales

---

### FASE 9: Optimización y Testing
**Objetivo**: Asegurar calidad y rendimiento

#### Tareas:
1. **Optimización**
   - Code splitting por nivel
   - Lazy loading de contenido
   - Optimización de imágenes/iconos

2. **Accesibilidad**
   - Navegación por teclado
   - ARIA labels
   - Contraste de colores

3. **Testing Manual**
   - Probar todos los niveles
   - Verificar persistencia
   - Probar edge cases

4. **PWA (Opcional)**
   - Service worker
   - Manifest
   - Offline básico

**Entregables**:
- App optimizada
- Accesibilidad básica
- Testing completo
- PWA opcional

**Verificación**: `npm run build` + Lighthouse audit

---

## Estructura de Datos

### Tipos TypeScript

```typescript
// lib/types/exercise.ts

type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'word-order'
  | 'matching'
  | 'true-false'
  | 'translation'
  | 'error-correction'
  | 'context-completion'
  | 'categorization'
  | 'dialogue-completion';

interface BaseExercise {
  id: string;
  type: ExerciseType;
  instruction: string;
  hint?: string;
  explanation?: string;
  points: number;
}

interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number; // índice
}

interface FillBlankExercise extends BaseExercise {
  type: 'fill-blank';
  sentence: string; // usar ___ para blank
  correctAnswer: string;
  acceptableAnswers?: string[]; // alternativas válidas
}

interface WordOrderExercise extends BaseExercise {
  type: 'word-order';
  words: string[];
  correctOrder: number[];
}

interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: Array<{ left: string; right: string }>;
}

interface TrueFalseExercise extends BaseExercise {
  type: 'true-false';
  statement: string;
  correctAnswer: boolean;
}

interface TranslationExercise extends BaseExercise {
  type: 'translation';
  sourceText: string;
  sourceLanguage: 'es' | 'en';
  correctAnswer: string;
  acceptableAnswers?: string[];
}

interface ErrorCorrectionExercise extends BaseExercise {
  type: 'error-correction';
  incorrectSentence: string;
  correctSentence: string;
}

interface ContextCompletionExercise extends BaseExercise {
  type: 'context-completion';
  text: string; // usar (1), (2) para blanks
  blanks: Array<{
    id: number;
    options: string[];
    correctAnswer: number;
  }>;
}

interface CategorizationExercise extends BaseExercise {
  type: 'categorization';
  categories: string[];
  items: Array<{
    word: string;
    category: number; // índice de categoría
  }>;
}

interface DialogueCompletionExercise extends BaseExercise {
  type: 'dialogue-completion';
  dialogue: Array<{
    speaker: 'A' | 'B';
    text: string; // usar ___ para blank
    isBlank?: boolean;
  }>;
  options: string[];
  correctAnswer: number;
}

type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | WordOrderExercise
  | MatchingExercise
  | TrueFalseExercise
  | TranslationExercise
  | ErrorCorrectionExercise
  | ContextCompletionExercise
  | CategorizationExercise
  | DialogueCompletionExercise;
```

```typescript
// lib/types/lesson.ts

interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  exercises: Exercise[];
  vocabularyWords?: string[];
  grammarPoint?: string;
}
```

```typescript
// lib/types/unit.ts

interface Unit {
  id: string;
  levelId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  totalExercises: number;
  icon?: string;
}
```

```typescript
// lib/types/level.ts

type LevelId = 'a1' | 'a2' | 'b1' | 'b2';

interface Level {
  id: LevelId;
  name: string;
  description: string;
  color: string;
  units: Unit[];
  totalLessons: number;
  totalExercises: number;
}
```

```typescript
// lib/types/progress.ts

interface ExerciseAttempt {
  exerciseId: string;
  lessonId: string;
  correct: boolean;
  attempts: number;
  timestamp: number;
}

interface LessonProgress {
  lessonId: string;
  completed: boolean;
  score: number; // porcentaje
  exercisesCompleted: number;
  perfectScore: boolean;
  completedAt?: number;
}

interface UnitProgress {
  unitId: string;
  lessonsCompleted: number;
  totalLessons: number;
  completed: boolean;
}

interface LevelProgress {
  levelId: LevelId;
  unitsCompleted: number;
  totalUnits: number;
  completed: boolean;
}

interface UserProgress {
  currentLevel: LevelId;
  currentUnit: string;
  currentLesson: string;
  totalXP: number;
  streak: {
    current: number;
    longest: number;
    lastActivityDate: string; // YYYY-MM-DD
  };
  achievements: string[];
  lessons: Record<string, LessonProgress>;
  failedExercises: ExerciseAttempt[];
  settings: {
    theme: 'light' | 'dark' | 'system';
    soundEffects: boolean;
  };
}
```

---

## Ejemplo de Contenido

### Lección de Ejemplo (A1 - Unit 1 - Lesson 1)

```typescript
// lib/data/levels/a1/unit-01-greetings.ts

export const lesson1: Lesson = {
  id: 'a1-u1-l1',
  unitId: 'a1-u1',
  title: 'Hello and Goodbye',
  description: 'Learn basic greetings in English',
  order: 1,
  grammarPoint: 'Basic greetings and farewells',
  vocabularyWords: ['hello', 'hi', 'goodbye', 'bye', 'good morning', 'good afternoon', 'good evening', 'good night'],
  exercises: [
    {
      id: 'a1-u1-l1-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct greeting',
      question: 'How do you say "Hola" in English?',
      options: ['Goodbye', 'Hello', 'Good night', 'Thank you'],
      correctAnswer: 1,
      points: 10,
      explanation: '"Hello" is the most common greeting in English, equivalent to "Hola" in Spanish.'
    },
    {
      id: 'a1-u1-l1-e2',
      type: 'matching',
      instruction: 'Match the English greeting with its Spanish translation',
      pairs: [
        { left: 'Hello', right: 'Hola' },
        { left: 'Goodbye', right: 'Adiós' },
        { left: 'Good morning', right: 'Buenos días' },
        { left: 'Good night', right: 'Buenas noches' }
      ],
      points: 10
    },
    {
      id: 'a1-u1-l1-e3',
      type: 'fill-blank',
      instruction: 'Complete the greeting',
      sentence: 'Good ___!',
      correctAnswer: 'morning',
      acceptableAnswers: ['afternoon', 'evening', 'night'],
      hint: 'Think about what you say in the morning',
      points: 10
    },
    {
      id: 'a1-u1-l1-e4',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Bye" is a short form of "Goodbye"',
      correctAnswer: true,
      explanation: 'Yes! "Bye" is the informal, shortened version of "Goodbye".',
      points: 10
    },
    {
      id: 'a1-u1-l1-e5',
      type: 'translation',
      instruction: 'Translate to English',
      sourceText: 'Buenos días',
      sourceLanguage: 'es',
      correctAnswer: 'Good morning',
      acceptableAnswers: ['good morning'],
      points: 10
    },
    {
      id: 'a1-u1-l1-e6',
      type: 'word-order',
      instruction: 'Put the words in the correct order',
      words: ['morning', 'Good', '!'],
      correctOrder: [1, 0, 2],
      points: 10
    },
    {
      id: 'a1-u1-l1-e7',
      type: 'dialogue-completion',
      instruction: 'Complete the conversation',
      dialogue: [
        { speaker: 'A', text: 'Hello!' },
        { speaker: 'B', text: '___', isBlank: true },
        { speaker: 'A', text: 'How are you?' }
      ],
      options: ['Goodbye!', 'Hi!', 'Good night!', 'Thank you!'],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 'a1-u1-l1-e8',
      type: 'categorization',
      instruction: 'Put each word in the correct category',
      categories: ['Greetings (Hello)', 'Farewells (Goodbye)'],
      items: [
        { word: 'Hello', category: 0 },
        { word: 'Bye', category: 1 },
        { word: 'Hi', category: 0 },
        { word: 'Goodbye', category: 1 },
        { word: 'Good morning', category: 0 },
        { word: 'Good night', category: 1 }
      ],
      points: 10
    },
    {
      id: 'a1-u1-l1-e9',
      type: 'multiple-choice',
      instruction: 'Choose the best option',
      question: 'It\'s 10 PM and you\'re going to sleep. What do you say?',
      options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      correctAnswer: 3,
      explanation: 'We say "Good night" when going to sleep or saying goodbye late at night.',
      points: 10
    },
    {
      id: 'a1-u1-l1-e10',
      type: 'context-completion',
      instruction: 'Complete the text with the correct words',
      text: 'In the morning, we say "(1)___". In the afternoon, we say "(2)___". At night, before sleeping, we say "(3)___".',
      blanks: [
        { id: 1, options: ['Good morning', 'Good night', 'Goodbye'], correctAnswer: 0 },
        { id: 2, options: ['Good morning', 'Good afternoon', 'Good night'], correctAnswer: 1 },
        { id: 3, options: ['Good morning', 'Hello', 'Good night'], correctAnswer: 2 }
      ],
      points: 10
    }
  ]
};
```

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción (IMPORTANTE: ejecutar después de cada fase)
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## Checklist por Fase

### Fase 1: Fundamentos
- [ ] Limpiar boilerplate
- [ ] Crear estructura de carpetas
- [ ] Configurar tema y colores CSS
- [ ] Button component
- [ ] Card component
- [ ] ProgressBar component
- [ ] Badge component
- [ ] Input component
- [ ] Modal component
- [ ] Header component
- [ ] Navigation component
- [ ] Footer component
- [ ] localStorage hooks
- [ ] Página de bienvenida
- [ ] `npm run build` exitoso

### Fase 2: Sistema de Ejercicios
- [ ] TypeScript types para ejercicios
- [ ] MultipleChoice component
- [ ] FillInBlank component
- [ ] WordOrder component
- [ ] Matching component
- [ ] TrueFalse component
- [ ] Translation component
- [ ] ErrorCorrection component
- [ ] ContextCompletion component
- [ ] Categorization component
- [ ] DialogueCompletion component
- [ ] Sistema de feedback
- [ ] Motor de ejercicios
- [ ] `npm run build` exitoso

### Fase 3: Contenido A1
- [ ] Unidad 1: Greetings (15 lecciones)
- [ ] Unidad 2: Alphabet & Numbers (15 lecciones)
- [ ] Unidad 3: Personal Information (15 lecciones)
- [ ] Unidad 4: Family (15 lecciones)
- [ ] Unidad 5: Colors & Adjectives (15 lecciones)
- [ ] Unidad 6: Days, Months & Time (15 lecciones)
- [ ] Unidad 7: Food & Drinks (15 lecciones)
- [ ] Unidad 8: Home & Furniture (15 lecciones)
- [ ] Unidad 9: Clothes & Shopping (15 lecciones)
- [ ] Unidad 10: Body Parts & Health (15 lecciones)
- [ ] Unidad 11: Weather & Seasons (15 lecciones)
- [ ] Unidad 12: Verbs To Be & To Have (15 lecciones)
- [ ] `npm run build` exitoso

### Fase 4: Progreso y Gamificación
- [ ] Sistema de tracking
- [ ] Sistema de XP
- [ ] Sistema de rachas
- [ ] Sistema de logros
- [ ] Dashboard principal
- [ ] `npm run build` exitoso

### Fase 5-7: Contenido A2, B1, B2
- [ ] 12 unidades A2
- [ ] 12 unidades B1
- [ ] 12 unidades B2
- [ ] `npm run build` exitoso (por cada nivel)

### Fase 8: Features Adicionales
- [ ] Práctica rápida
- [ ] Repaso de errores
- [ ] Modo examen
- [ ] Perfil de usuario
- [ ] Configuración
- [ ] `npm run build` exitoso

### Fase 9: Optimización
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Accesibilidad
- [ ] Testing completo
- [ ] `npm run build` exitoso
- [ ] Lighthouse audit > 90

---

## Notas Importantes

1. **Consistencia**: Mantener el mismo estilo visual en toda la aplicación
2. **Progresividad**: El contenido debe aumentar en dificultad gradualmente
3. **Variedad**: Mezclar tipos de ejercicios para mantener el interés
4. **Feedback**: Siempre dar retroalimentación clara al usuario
5. **Motivación**: Los sistemas de XP y logros deben sentirse rewarding
6. **Persistencia**: Todo el progreso debe guardarse automáticamente
7. **Responsive**: La app debe funcionar perfectamente en móvil y desktop
8. **Build**: Ejecutar `npm run build` después de cada fase para verificar

---

## Próximos Pasos

Comenzar con **FASE 1: Fundamentos y Estructura Base**

1. Limpiar archivos boilerplate existentes
2. Crear la estructura de carpetas
3. Implementar los componentes UI base
4. Configurar el sistema de almacenamiento
5. Crear la página de bienvenida
6. Ejecutar `npm run build` para verificar

---

*Documento creado para el proyecto EnglishFlow*
*Última actualización: Enero 2026*
