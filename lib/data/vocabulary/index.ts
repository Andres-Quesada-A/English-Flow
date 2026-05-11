export interface VocabularyWord {
  english: string;
  spanish: string;
  example?: string;
}

export interface VocabularySection {
  title: string;
  words: VocabularyWord[];
}

export interface VocabularyTopic {
  id: string;
  unitNumber: number;
  title: string;
  emoji: string;
  category: string;
  sections: VocabularySection[];
  exampleText?: string;
}

export const vocabularyCategories = [
  { id: 'vida-cotidiana', title: 'Vida Cotidiana', emoji: '🏠' },
  { id: 'personas-cuerpo', title: 'Personas y Cuerpo', emoji: '👤' },
  { id: 'lugares-entorno', title: 'Lugares y Entorno', emoji: '🌍' },
  { id: 'tiempo-clima', title: 'Tiempo y Clima', emoji: '⏰' },
  { id: 'trabajo-estudio', title: 'Trabajo y Estudio', emoji: '💼' },
  { id: 'salud-bienestar', title: 'Salud y Bienestar', emoji: '🏥' },
  { id: 'mundo-natural', title: 'Mundo Natural', emoji: '🌿' },
  { id: 'ocio-cultura', title: 'Ocio y Cultura', emoji: '🎭' },
  { id: 'vocabulario-fundamental', title: 'Vocabulario Fundamental', emoji: '🎨' },
];

export const vocabularyTopics: VocabularyTopic[] = [
  {
    id: 'saludos-presentaciones',
    unitNumber: 1,
    title: 'Saludos y Presentaciones',
    emoji: '👋',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Saludos básicos (Basic greetings)',
        words: [
          { english: 'Hello', spanish: 'Hola' },
          { english: 'Hi', spanish: 'Hola (informal)' },
          { english: 'Hey', spanish: 'Ey / Hola (muy informal)' },
          { english: 'Good morning', spanish: 'Buenos días' },
          { english: 'Good afternoon', spanish: 'Buenas tardes' },
          { english: 'Good evening', spanish: 'Buenas noches (al llegar)' },
          { english: 'Good night', spanish: 'Buenas noches (al despedirse)' },
          { english: 'Welcome', spanish: 'Bienvenido/a' },
          { english: 'How are you?', spanish: '¿Cómo estás?' },
          { english: 'How are you doing?', spanish: '¿Cómo te va?' },
          { english: "How's it going?", spanish: '¿Cómo va todo?' },
          { english: "What's up?", spanish: '¿Qué tal? / ¿Qué pasa?' },
          { english: 'Long time no see', spanish: 'Cuánto tiempo sin verte' },
          { english: 'Nice to meet you', spanish: 'Encantado de conocerte' },
          { english: 'Pleased to meet you', spanish: 'Un placer conocerte' },
          { english: 'Nice to see you again', spanish: 'Qué bueno verte de nuevo' },
        ],
      },
      {
        title: 'Respuestas (Responses)',
        words: [
          { english: 'Fine, thanks', spanish: 'Bien, gracias' },
          { english: "I'm good", spanish: 'Estoy bien' },
          { english: 'Very well', spanish: 'Muy bien' },
          { english: 'Great', spanish: 'Genial' },
          { english: 'Not bad', spanish: 'No tan mal' },
          { english: 'So-so', spanish: 'Más o menos' },
          { english: 'Could be better', spanish: 'Podría estar mejor' },
          { english: 'Same to you', spanish: 'Igualmente' },
          { english: 'Likewise', spanish: 'Lo mismo digo' },
          { english: 'And you?', spanish: '¿Y tú?' },
        ],
      },
      {
        title: 'Despedidas (Farewells)',
        words: [
          { english: 'Goodbye', spanish: 'Adiós' },
          { english: 'Bye', spanish: 'Chau' },
          { english: 'See you', spanish: 'Nos vemos' },
          { english: 'See you later', spanish: 'Hasta luego' },
          { english: 'See you soon', spanish: 'Hasta pronto' },
          { english: 'See you tomorrow', spanish: 'Hasta mañana' },
          { english: 'Take care', spanish: 'Cuídate' },
          { english: 'Have a nice day', spanish: 'Que tengas un buen día' },
          { english: 'Have a good one', spanish: 'Que te vaya bien' },
          { english: 'Talk to you later', spanish: 'Hablamos después' },
          { english: 'Catch you later', spanish: 'Nos vemos luego' },
          { english: 'Farewell', spanish: 'Despedida (formal)' },
        ],
      },
      {
        title: 'Presentaciones (Introductions)',
        words: [
          { english: 'My name is...', spanish: 'Mi nombre es...' },
          { english: "I'm...", spanish: 'Soy...' },
          { english: "What's your name?", spanish: '¿Cuál es tu nombre?' },
          { english: 'This is...', spanish: 'Este/Esta es...' },
          { english: 'Let me introduce you to...', spanish: 'Permíteme presentarte a...' },
          { english: "I'd like you to meet...", spanish: 'Me gustaría presentarte a...' },
          { english: 'Where are you from?', spanish: '¿De dónde eres?' },
          { english: "I'm from...", spanish: 'Soy de...' },
          { english: 'How old are you?', spanish: '¿Cuántos años tienes?' },
          { english: "I'm ... years old", spanish: 'Tengo ... años' },
          { english: 'What do you do?', spanish: '¿A qué te dedicas?' },
          { english: 'I work as...', spanish: 'Trabajo como...' },
          { english: "I'm a student", spanish: 'Soy estudiante' },
          { english: 'Nice to finally meet you', spanish: 'Qué bueno conocerte por fin' },
        ],
      },
      {
        title: 'Expresiones de cortesía (Polite expressions)',
        words: [
          { english: 'Please', spanish: 'Por favor' },
          { english: 'Thank you', spanish: 'Gracias' },
          { english: 'Thanks a lot', spanish: 'Muchas gracias' },
          { english: "You're welcome", spanish: 'De nada' },
          { english: 'No problem', spanish: 'No hay problema' },
          { english: 'Excuse me', spanish: 'Disculpa / Permiso' },
          { english: 'Sorry', spanish: 'Lo siento' },
          { english: "I'm sorry", spanish: 'Lo lamento' },
          { english: 'Pardon me', spanish: 'Perdón' },
          { english: "Don't mention it", spanish: 'No lo menciones' },
          { english: 'My pleasure', spanish: 'Es un placer' },
        ],
      },
    ],
    exampleText: `**A new neighbor**

*— Good morning! Welcome to the building.*
*— Hi, thank you! I'm Daniel. Nice to meet you.*
*— Pleased to meet you, Daniel. My name is Sarah. Where are you from?*
*— I'm from Costa Rica. And you?*
*— I'm from Canada. So, what do you do?*
*— I work as a software engineer. How about you?*
*— I'm a student at the university. Hey, let me introduce you to my brother. This is Mike.*
*— Nice to meet you, Mike. How are you doing?*
*— Not bad, thanks. And you?*
*— I'm good, thanks for asking.*
*— Well, I have to go now. Have a nice day!*
*— Same to you. See you soon!*
*— Bye! Take care.*`,
  },
  {
    id: 'familia-relaciones',
    unitNumber: 2,
    title: 'La Familia y Relaciones',
    emoji: '👨‍👩‍👧‍👦',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Familia directa (Immediate family)',
        words: [
          { english: 'Family', spanish: 'Familia' },
          { english: 'Parents', spanish: 'Padres' },
          { english: 'Father / Dad', spanish: 'Padre / Papá' },
          { english: 'Mother / Mom', spanish: 'Madre / Mamá' },
          { english: 'Son', spanish: 'Hijo' },
          { english: 'Daughter', spanish: 'Hija' },
          { english: 'Child / Children', spanish: 'Niño / Niños (también hijo/s)' },
          { english: 'Brother', spanish: 'Hermano' },
          { english: 'Sister', spanish: 'Hermana' },
          { english: 'Siblings', spanish: 'Hermanos (ambos sexos)' },
          { english: 'Twin', spanish: 'Gemelo/a' },
          { english: 'Older brother', spanish: 'Hermano mayor' },
          { english: 'Younger sister', spanish: 'Hermana menor' },
          { english: 'Only child', spanish: 'Hijo/a único/a' },
          { english: 'Baby', spanish: 'Bebé' },
        ],
      },
      {
        title: 'Familia extendida (Extended family)',
        words: [
          { english: 'Grandparents', spanish: 'Abuelos' },
          { english: 'Grandfather / Grandpa', spanish: 'Abuelo' },
          { english: 'Grandmother / Grandma', spanish: 'Abuela' },
          { english: 'Grandson', spanish: 'Nieto' },
          { english: 'Granddaughter', spanish: 'Nieta' },
          { english: 'Great-grandfather', spanish: 'Bisabuelo' },
          { english: 'Great-grandmother', spanish: 'Bisabuela' },
          { english: 'Uncle', spanish: 'Tío' },
          { english: 'Aunt', spanish: 'Tía' },
          { english: 'Nephew', spanish: 'Sobrino' },
          { english: 'Niece', spanish: 'Sobrina' },
          { english: 'Cousin', spanish: 'Primo/a' },
          { english: 'Relatives', spanish: 'Parientes' },
          { english: 'Ancestors', spanish: 'Ancestros / Antepasados' },
        ],
      },
      {
        title: 'Familia política (In-laws) y por matrimonio',
        words: [
          { english: 'Husband', spanish: 'Esposo' },
          { english: 'Wife', spanish: 'Esposa' },
          { english: 'Spouse', spanish: 'Cónyuge' },
          { english: 'Father-in-law', spanish: 'Suegro' },
          { english: 'Mother-in-law', spanish: 'Suegra' },
          { english: 'Brother-in-law', spanish: 'Cuñado' },
          { english: 'Sister-in-law', spanish: 'Cuñada' },
          { english: 'Son-in-law', spanish: 'Yerno' },
          { english: 'Daughter-in-law', spanish: 'Nuera' },
          { english: 'Stepfather', spanish: 'Padrastro' },
          { english: 'Stepmother', spanish: 'Madrastra' },
          { english: 'Stepson', spanish: 'Hijastro' },
          { english: 'Stepdaughter', spanish: 'Hijastra' },
          { english: 'Stepbrother', spanish: 'Hermanastro' },
          { english: 'Stepsister', spanish: 'Hermanastra' },
          { english: 'Half-brother', spanish: 'Medio hermano' },
          { english: 'Half-sister', spanish: 'Media hermana' },
        ],
      },
      {
        title: 'Estados de relación (Relationship status)',
        words: [
          { english: 'Single', spanish: 'Soltero/a' },
          { english: 'Married', spanish: 'Casado/a' },
          { english: 'Engaged', spanish: 'Comprometido/a' },
          { english: 'Divorced', spanish: 'Divorciado/a' },
          { english: 'Separated', spanish: 'Separado/a' },
          { english: 'Widow', spanish: 'Viuda' },
          { english: 'Widower', spanish: 'Viudo' },
          { english: 'Partner', spanish: 'Pareja' },
          { english: 'Boyfriend', spanish: 'Novio' },
          { english: 'Girlfriend', spanish: 'Novia' },
          { english: 'Fiancé', spanish: 'Prometido' },
          { english: 'Fiancée', spanish: 'Prometida' },
          { english: 'Ex', spanish: 'Ex (pareja)' },
        ],
      },
      {
        title: 'Verbos y acciones (Verbs)',
        words: [
          { english: 'To love', spanish: 'Amar' },
          { english: 'To care for', spanish: 'Cuidar de' },
          { english: 'To raise (children)', spanish: 'Criar' },
          { english: 'To get married', spanish: 'Casarse' },
          { english: 'To get divorced', spanish: 'Divorciarse' },
          { english: 'To be born', spanish: 'Nacer' },
          { english: 'To grow up', spanish: 'Crecer' },
          { english: 'To pass away', spanish: 'Fallecer' },
          { english: 'To adopt', spanish: 'Adoptar' },
          { english: 'To inherit', spanish: 'Heredar' },
          { english: 'To take after (someone)', spanish: 'Parecerse a alguien' },
          { english: 'To get along', spanish: 'Llevarse bien' },
          { english: 'To argue', spanish: 'Discutir' },
          { english: 'To fall in love', spanish: 'Enamorarse' },
          { english: 'To break up', spanish: 'Romper (terminar relación)' },
        ],
      },
      {
        title: 'Conceptos generales',
        words: [
          { english: 'Marriage', spanish: 'Matrimonio' },
          { english: 'Wedding', spanish: 'Boda' },
          { english: 'Pregnancy', spanish: 'Embarazo' },
          { english: 'Birth', spanish: 'Nacimiento' },
          { english: 'Childhood', spanish: 'Infancia' },
          { english: 'Adolescence', spanish: 'Adolescencia' },
          { english: 'Adulthood', spanish: 'Adultez' },
          { english: 'Generation', spanish: 'Generación' },
          { english: 'Family tree', spanish: 'Árbol genealógico' },
          { english: 'Household', spanish: 'Hogar' },
          { english: 'Bond', spanish: 'Lazo / vínculo' },
          { english: 'Best friend', spanish: 'Mejor amigo/a' },
          { english: 'Close friend', spanish: 'Amigo/a cercano/a' },
          { english: 'Acquaintance', spanish: 'Conocido/a' },
        ],
      },
    ],
    exampleText: `**My family tree**

I come from a big family. My **parents** got **married** thirty years ago, and they have three **children**: my older **brother** Tom, my younger **sister** Lily, and me. Tom is **engaged** to a wonderful woman named Clara, who will soon become my **sister-in-law**. Lily is still **single** and lives with my **mom** and **dad**.

My **grandparents** on my father's side **passed away** a few years ago, but my **grandmother** on my mother's side is still alive and full of energy. We call her Grandma Rose. She loves telling stories about our **ancestors** and showing us the family **tree** she drew.

I have many **relatives** across the country. My favorite **aunt**, Aunt Maggie, has two daughters — my **cousins** Emma and Sofia. Their father, my **uncle**, **raised** them by himself after my aunt and uncle got **divorced**. He is a great **dad**.

My best **friend** Jake is almost like a **brother** to me. We **grew up** together and we always **get along**. He says I **take after** my mother because we have the same laugh.

Family is the strongest **bond** in life, and I'm grateful to **be born** into such a loving **household**.`,
  },
  {
    id: 'casa-muebles',
    unitNumber: 3,
    title: 'La Casa y los Muebles',
    emoji: '🏠',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Tipos de vivienda (Types of housing)',
        words: [
          { english: 'House', spanish: 'Casa' },
          { english: 'Apartment / Flat', spanish: 'Apartamento' },
          { english: 'Studio', spanish: 'Estudio (apartamento pequeño)' },
          { english: 'Cottage', spanish: 'Casa de campo pequeña' },
          { english: 'Mansion', spanish: 'Mansión' },
          { english: 'Villa', spanish: 'Villa' },
          { english: 'Cabin', spanish: 'Cabaña' },
          { english: 'Townhouse', spanish: 'Casa adosada' },
          { english: 'Duplex', spanish: 'Dúplex' },
          { english: 'Penthouse', spanish: 'Ático / Penthouse' },
          { english: 'Bungalow', spanish: 'Bungaló' },
          { english: 'Farmhouse', spanish: 'Casa de granja' },
        ],
      },
      {
        title: 'Partes de la casa (Parts of the house)',
        words: [
          { english: 'Living room', spanish: 'Sala de estar' },
          { english: 'Dining room', spanish: 'Comedor' },
          { english: 'Kitchen', spanish: 'Cocina' },
          { english: 'Bedroom', spanish: 'Dormitorio' },
          { english: 'Bathroom', spanish: 'Baño' },
          { english: 'Toilet', spanish: 'Inodoro / Servicio' },
          { english: 'Hallway', spanish: 'Pasillo' },
          { english: 'Entrance', spanish: 'Entrada' },
          { english: 'Stairs', spanish: 'Escaleras' },
          { english: 'Attic', spanish: 'Ático / Desván' },
          { english: 'Basement', spanish: 'Sótano' },
          { english: 'Garage', spanish: 'Garaje' },
          { english: 'Garden', spanish: 'Jardín' },
          { english: 'Backyard', spanish: 'Patio trasero' },
          { english: 'Balcony', spanish: 'Balcón' },
          { english: 'Terrace', spanish: 'Terraza' },
          { english: 'Porch', spanish: 'Porche' },
          { english: 'Roof', spanish: 'Tejado' },
          { english: 'Floor', spanish: 'Piso / Suelo' },
          { english: 'Wall', spanish: 'Pared' },
          { english: 'Ceiling', spanish: 'Techo' },
          { english: 'Window', spanish: 'Ventana' },
          { english: 'Door', spanish: 'Puerta' },
          { english: 'Chimney', spanish: 'Chimenea' },
          { english: 'Fireplace', spanish: 'Hogar / Chimenea (interior)' },
        ],
      },
      {
        title: 'Muebles del salón (Living room furniture)',
        words: [
          { english: 'Sofa / Couch', spanish: 'Sofá' },
          { english: 'Armchair', spanish: 'Sillón' },
          { english: 'Coffee table', spanish: 'Mesa de centro' },
          { english: 'Bookshelf', spanish: 'Estantería' },
          { english: 'TV stand', spanish: 'Mueble de TV' },
          { english: 'Rug', spanish: 'Alfombra' },
          { english: 'Carpet', spanish: 'Moqueta / Alfombra grande' },
          { english: 'Curtains', spanish: 'Cortinas' },
          { english: 'Lamp', spanish: 'Lámpara' },
          { english: 'Cushion', spanish: 'Cojín' },
          { english: 'Pillow', spanish: 'Almohada / Cojín' },
          { english: 'Painting', spanish: 'Cuadro' },
          { english: 'Mirror', spanish: 'Espejo' },
          { english: 'Clock', spanish: 'Reloj' },
          { english: 'Fan', spanish: 'Ventilador' },
          { english: 'Air conditioner', spanish: 'Aire acondicionado' },
          { english: 'Heater', spanish: 'Calefactor' },
        ],
      },
      {
        title: 'Muebles del dormitorio (Bedroom furniture)',
        words: [
          { english: 'Bed', spanish: 'Cama' },
          { english: 'Mattress', spanish: 'Colchón' },
          { english: 'Sheets', spanish: 'Sábanas' },
          { english: 'Blanket', spanish: 'Manta' },
          { english: 'Duvet', spanish: 'Edredón' },
          { english: 'Pillowcase', spanish: 'Funda de almohada' },
          { english: 'Wardrobe / Closet', spanish: 'Armario / Clóset' },
          { english: 'Drawer', spanish: 'Cajón' },
          { english: 'Chest of drawers', spanish: 'Cómoda' },
          { english: 'Nightstand', spanish: 'Mesa de noche' },
          { english: 'Desk', spanish: 'Escritorio' },
          { english: 'Chair', spanish: 'Silla' },
          { english: 'Hanger', spanish: 'Percha' },
        ],
      },
      {
        title: 'Cocina (Kitchen)',
        words: [
          { english: 'Stove', spanish: 'Estufa / Cocina' },
          { english: 'Oven', spanish: 'Horno' },
          { english: 'Microwave', spanish: 'Microondas' },
          { english: 'Fridge / Refrigerator', spanish: 'Refrigeradora / Nevera' },
          { english: 'Freezer', spanish: 'Congelador' },
          { english: 'Dishwasher', spanish: 'Lavavajillas' },
          { english: 'Sink', spanish: 'Fregadero / Lavadero' },
          { english: 'Faucet / Tap', spanish: 'Grifo' },
          { english: 'Cabinet', spanish: 'Gabinete / Alacena' },
          { english: 'Counter / Countertop', spanish: 'Mostrador / Encimera' },
          { english: 'Pan', spanish: 'Sartén' },
          { english: 'Pot', spanish: 'Olla' },
          { english: 'Plate', spanish: 'Plato' },
          { english: 'Bowl', spanish: 'Tazón' },
          { english: 'Glass', spanish: 'Vaso' },
          { english: 'Cup', spanish: 'Taza' },
          { english: 'Fork', spanish: 'Tenedor' },
          { english: 'Knife', spanish: 'Cuchillo' },
          { english: 'Spoon', spanish: 'Cuchara' },
          { english: 'Napkin', spanish: 'Servilleta' },
        ],
      },
      {
        title: 'Baño (Bathroom)',
        words: [
          { english: 'Shower', spanish: 'Ducha' },
          { english: 'Bathtub', spanish: 'Bañera' },
          { english: 'Sink', spanish: 'Lavabo' },
          { english: 'Towel', spanish: 'Toalla' },
          { english: 'Soap', spanish: 'Jabón' },
          { english: 'Shampoo', spanish: 'Champú' },
          { english: 'Toothbrush', spanish: 'Cepillo de dientes' },
          { english: 'Toothpaste', spanish: 'Pasta de dientes' },
          { english: 'Toilet paper', spanish: 'Papel higiénico' },
          { english: 'Hairdryer', spanish: 'Secador' },
        ],
      },
      {
        title: 'Verbos relacionados (Related verbs)',
        words: [
          { english: 'To live', spanish: 'Vivir' },
          { english: 'To move (in/out)', spanish: 'Mudarse' },
          { english: 'To rent', spanish: 'Alquilar' },
          { english: 'To buy', spanish: 'Comprar' },
          { english: 'To clean', spanish: 'Limpiar' },
          { english: 'To tidy up', spanish: 'Ordenar' },
          { english: 'To decorate', spanish: 'Decorar' },
          { english: 'To furnish', spanish: 'Amueblar' },
          { english: 'To paint', spanish: 'Pintar' },
          { english: 'To build', spanish: 'Construir' },
          { english: 'To repair', spanish: 'Reparar' },
          { english: 'To turn on/off', spanish: 'Encender / Apagar' },
        ],
      },
    ],
    exampleText: `**My new home**

Last month, I **moved into** a beautiful **apartment** on the third **floor** of an old building. It's not a **mansion**, but it has everything I need.

You enter through a small **hallway** that leads to the **living room**. There, I placed a comfortable **sofa**, a soft **rug**, and a wooden **coffee table** in front of the TV. The **walls** are painted light blue, and the **curtains** are white. A tall **lamp** stands in the corner next to the **bookshelf**.

The **kitchen** is small but modern. I have a **stove**, a **microwave**, a big **fridge**, and lots of **cabinets** for storing **plates**, **bowls**, **glasses**, and **cups**. Above the **sink**, there is a **window** that lets in plenty of light.

My **bedroom** is my favorite room. I bought a new **mattress**, soft **sheets**, and a warm **blanket**. Next to the **bed**, there is a **nightstand** with a small **lamp**. I keep my clothes in the **wardrobe** and use the **drawers** for socks and t-shirts.

The **bathroom** has a big **shower**, a clean **sink**, and a **mirror** where I check myself before going out. I always keep a fresh **towel** ready.

I love to spend the evenings on the **balcony**, looking down at the **garden** below. After many years of **renting** different places, I finally feel at home.`,
  },
  {
    id: 'rutinas-diarias',
    unitNumber: 4,
    title: 'Rutinas Diarias',
    emoji: '📅',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Por la mañana (In the morning)',
        words: [
          { english: 'To wake up', spanish: 'Despertarse' },
          { english: 'To get up', spanish: 'Levantarse' },
          { english: 'To stretch', spanish: 'Estirarse' },
          { english: 'To yawn', spanish: 'Bostezar' },
          { english: 'To turn off the alarm', spanish: 'Apagar la alarma' },
          { english: 'To make the bed', spanish: 'Tender la cama' },
          { english: 'To go to the bathroom', spanish: 'Ir al baño' },
          { english: "To wash one's face", spanish: 'Lavarse la cara' },
          { english: "To brush one's teeth", spanish: 'Cepillarse los dientes' },
          { english: 'To take a shower', spanish: 'Bañarse / Ducharse' },
          { english: 'To shave', spanish: 'Afeitarse' },
          { english: "To comb / brush one's hair", spanish: 'Peinarse' },
          { english: 'To get dressed', spanish: 'Vestirse' },
          { english: 'To put on makeup', spanish: 'Maquillarse' },
          { english: 'To have breakfast', spanish: 'Desayunar' },
          { english: 'To make coffee', spanish: 'Hacer café' },
          { english: 'To read the news', spanish: 'Leer las noticias' },
          { english: 'To leave the house', spanish: 'Salir de casa' },
        ],
      },
      {
        title: 'Durante el día (During the day)',
        words: [
          { english: 'To go to work', spanish: 'Ir al trabajo' },
          { english: 'To take the bus', spanish: 'Tomar el autobús' },
          { english: 'To drive to work', spanish: 'Conducir al trabajo' },
          { english: 'To arrive', spanish: 'Llegar' },
          { english: 'To start work', spanish: 'Empezar a trabajar' },
          { english: 'To have a meeting', spanish: 'Tener una reunión' },
          { english: 'To check emails', spanish: 'Revisar correos' },
          { english: 'To take a break', spanish: 'Tomar un descanso' },
          { english: 'To have lunch', spanish: 'Almorzar' },
          { english: 'To work', spanish: 'Trabajar' },
          { english: 'To study', spanish: 'Estudiar' },
          { english: 'To attend class', spanish: 'Asistir a clase' },
          { english: 'To run errands', spanish: 'Hacer mandados' },
          { english: 'To go shopping', spanish: 'Ir de compras' },
          { english: 'To pick up the kids', spanish: 'Recoger a los niños' },
        ],
      },
      {
        title: 'Por la tarde / noche (Afternoon / Evening)',
        words: [
          { english: 'To come home', spanish: 'Llegar a casa' },
          { english: 'To rest', spanish: 'Descansar' },
          { english: 'To relax', spanish: 'Relajarse' },
          { english: 'To watch TV', spanish: 'Ver televisión' },
          { english: 'To cook dinner', spanish: 'Cocinar la cena' },
          { english: 'To have dinner', spanish: 'Cenar' },
          { english: 'To do the dishes', spanish: 'Lavar los platos' },
          { english: 'To do the laundry', spanish: 'Lavar la ropa' },
          { english: 'To clean the house', spanish: 'Limpiar la casa' },
          { english: 'To walk the dog', spanish: 'Pasear al perro' },
          { english: 'To exercise', spanish: 'Ejercitarse' },
          { english: 'To go for a walk', spanish: 'Salir a caminar' },
          { english: 'To call a friend', spanish: 'Llamar a un amigo' },
          { english: 'To read a book', spanish: 'Leer un libro' },
          { english: 'To listen to music', spanish: 'Escuchar música' },
          { english: 'To play with the kids', spanish: 'Jugar con los niños' },
        ],
      },
      {
        title: 'Antes de dormir (Before bed)',
        words: [
          { english: 'To take a bath', spanish: 'Darse un baño' },
          { english: 'To put on pajamas', spanish: 'Ponerse el pijama' },
          { english: 'To set the alarm', spanish: 'Poner la alarma' },
          { english: 'To brush teeth', spanish: 'Cepillarse los dientes' },
          { english: 'To go to bed', spanish: 'Ir a la cama' },
          { english: 'To fall asleep', spanish: 'Quedarse dormido' },
          { english: 'To sleep', spanish: 'Dormir' },
          { english: 'To dream', spanish: 'Soñar' },
          { english: 'To snore', spanish: 'Roncar' },
          { english: 'To have a nightmare', spanish: 'Tener una pesadilla' },
        ],
      },
      {
        title: 'Adverbios de frecuencia (Frequency adverbs)',
        words: [
          { english: 'Always', spanish: 'Siempre' },
          { english: 'Usually', spanish: 'Generalmente' },
          { english: 'Often', spanish: 'A menudo' },
          { english: 'Sometimes', spanish: 'A veces' },
          { english: 'Rarely', spanish: 'Raramente' },
          { english: 'Hardly ever', spanish: 'Casi nunca' },
          { english: 'Never', spanish: 'Nunca' },
          { english: 'Every day', spanish: 'Todos los días' },
          { english: 'Once a week', spanish: 'Una vez por semana' },
          { english: 'Twice a month', spanish: 'Dos veces al mes' },
        ],
      },
      {
        title: 'Momentos del día (Times of day)',
        words: [
          { english: 'Morning', spanish: 'Mañana' },
          { english: 'Noon', spanish: 'Mediodía' },
          { english: 'Afternoon', spanish: 'Tarde' },
          { english: 'Evening', spanish: 'Tarde-noche' },
          { english: 'Night', spanish: 'Noche' },
          { english: 'Midnight', spanish: 'Medianoche' },
          { english: 'Dawn', spanish: 'Amanecer' },
          { english: 'Sunset / Dusk', spanish: 'Atardecer' },
          { english: 'Early', spanish: 'Temprano' },
          { english: 'Late', spanish: 'Tarde' },
          { english: 'On time', spanish: 'A tiempo' },
        ],
      },
    ],
    exampleText: `**A typical day in my life**

I **wake up** every morning at six o'clock when my alarm rings. I **turn off the alarm**, **stretch**, and **yawn** loudly before I finally **get up**. I always **make the bed** first — it's a habit my mother taught me.

Then I go to the **bathroom**, **brush my teeth**, **wash my face**, and **take a quick shower**. After that, I **get dressed** and go to the kitchen to **have breakfast**. I usually eat toast and **make coffee** while I **read the news** on my phone.

At seven-thirty, I **leave the house** and **take the bus** to **go to work**. I usually **arrive** by eight. During the morning, I **check emails**, **have meetings**, and answer calls. At noon, I **take a break** and **have lunch** with my coworkers.

In the **afternoon**, I work until five. Then I **come home**, **walk the dog**, and **rest** for a few minutes on the sofa. Twice a week, I **exercise** at the gym. On other days, I **go for a walk** in the park.

I **cook dinner** around seven, and after I eat, I **do the dishes**. Sometimes I **call a friend** or **watch TV** before bed. I love quiet **evenings**.

Before bed, I **put on my pajamas**, **brush my teeth** again, and **set the alarm** for the next day. I **fall asleep** quickly. I rarely **have nightmares**, but I often **dream** about traveling. That's my daily life — simple but happy.`,
  },
  {
    id: 'comida-bebida',
    unitNumber: 5,
    title: 'Comida y Bebida',
    emoji: '🍽️',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Frutas (Fruits)',
        words: [
          { english: 'Apple', spanish: 'Manzana' },
          { english: 'Banana', spanish: 'Banano / Plátano' },
          { english: 'Orange', spanish: 'Naranja' },
          { english: 'Pear', spanish: 'Pera' },
          { english: 'Grape', spanish: 'Uva' },
          { english: 'Strawberry', spanish: 'Fresa' },
          { english: 'Watermelon', spanish: 'Sandía' },
          { english: 'Pineapple', spanish: 'Piña' },
          { english: 'Mango', spanish: 'Mango' },
          { english: 'Peach', spanish: 'Durazno / Melocotón' },
          { english: 'Plum', spanish: 'Ciruela' },
          { english: 'Cherry', spanish: 'Cereza' },
          { english: 'Lemon', spanish: 'Limón' },
          { english: 'Lime', spanish: 'Lima' },
          { english: 'Kiwi', spanish: 'Kiwi' },
          { english: 'Coconut', spanish: 'Coco' },
          { english: 'Avocado', spanish: 'Aguacate' },
          { english: 'Blueberry', spanish: 'Arándano' },
          { english: 'Raspberry', spanish: 'Frambuesa' },
          { english: 'Papaya', spanish: 'Papaya' },
        ],
      },
      {
        title: 'Verduras (Vegetables)',
        words: [
          { english: 'Potato', spanish: 'Papa / Patata' },
          { english: 'Tomato', spanish: 'Tomate' },
          { english: 'Onion', spanish: 'Cebolla' },
          { english: 'Garlic', spanish: 'Ajo' },
          { english: 'Carrot', spanish: 'Zanahoria' },
          { english: 'Lettuce', spanish: 'Lechuga' },
          { english: 'Cucumber', spanish: 'Pepino' },
          { english: 'Spinach', spanish: 'Espinaca' },
          { english: 'Broccoli', spanish: 'Brócoli' },
          { english: 'Cauliflower', spanish: 'Coliflor' },
          { english: 'Pepper', spanish: 'Pimiento' },
          { english: 'Mushroom', spanish: 'Champiñón / Hongo' },
          { english: 'Corn', spanish: 'Maíz' },
          { english: 'Peas', spanish: 'Guisantes' },
          { english: 'Beans', spanish: 'Frijoles' },
          { english: 'Pumpkin', spanish: 'Calabaza' },
          { english: 'Eggplant', spanish: 'Berenjena' },
          { english: 'Zucchini', spanish: 'Zucchini / Calabacín' },
          { english: 'Cabbage', spanish: 'Repollo' },
          { english: 'Celery', spanish: 'Apio' },
        ],
      },
      {
        title: 'Carnes y proteínas (Meat & protein)',
        words: [
          { english: 'Beef', spanish: 'Carne de res' },
          { english: 'Chicken', spanish: 'Pollo' },
          { english: 'Pork', spanish: 'Cerdo' },
          { english: 'Lamb', spanish: 'Cordero' },
          { english: 'Turkey', spanish: 'Pavo' },
          { english: 'Ham', spanish: 'Jamón' },
          { english: 'Bacon', spanish: 'Tocino' },
          { english: 'Sausage', spanish: 'Salchicha' },
          { english: 'Steak', spanish: 'Bistec' },
          { english: 'Fish', spanish: 'Pescado' },
          { english: 'Salmon', spanish: 'Salmón' },
          { english: 'Tuna', spanish: 'Atún' },
          { english: 'Shrimp', spanish: 'Camarón' },
          { english: 'Egg', spanish: 'Huevo' },
          { english: 'Tofu', spanish: 'Tofu' },
        ],
      },
      {
        title: 'Lácteos y panadería (Dairy & bakery)',
        words: [
          { english: 'Milk', spanish: 'Leche' },
          { english: 'Cheese', spanish: 'Queso' },
          { english: 'Butter', spanish: 'Mantequilla' },
          { english: 'Yogurt', spanish: 'Yogur' },
          { english: 'Cream', spanish: 'Crema / Nata' },
          { english: 'Bread', spanish: 'Pan' },
          { english: 'Toast', spanish: 'Pan tostado' },
          { english: 'Roll', spanish: 'Bollo' },
          { english: 'Bagel', spanish: 'Bagel' },
          { english: 'Cake', spanish: 'Pastel' },
          { english: 'Cookie', spanish: 'Galleta' },
          { english: 'Pie', spanish: 'Tarta / Pay' },
          { english: 'Pastry', spanish: 'Pastel / Bollería' },
          { english: 'Croissant', spanish: 'Croissant' },
        ],
      },
      {
        title: 'Bebidas (Drinks)',
        words: [
          { english: 'Water', spanish: 'Agua' },
          { english: 'Coffee', spanish: 'Café' },
          { english: 'Tea', spanish: 'Té' },
          { english: 'Juice', spanish: 'Jugo / Zumo' },
          { english: 'Soda / Pop', spanish: 'Refresco / Gaseosa' },
          { english: 'Milk', spanish: 'Leche' },
          { english: 'Beer', spanish: 'Cerveza' },
          { english: 'Wine', spanish: 'Vino' },
          { english: 'Cocktail', spanish: 'Cóctel' },
          { english: 'Smoothie', spanish: 'Smoothie / Licuado' },
          { english: 'Hot chocolate', spanish: 'Chocolate caliente' },
          { english: 'Sparkling water', spanish: 'Agua con gas' },
        ],
      },
      {
        title: 'Condimentos y sabores (Seasonings & flavors)',
        words: [
          { english: 'Salt', spanish: 'Sal' },
          { english: 'Pepper', spanish: 'Pimienta' },
          { english: 'Sugar', spanish: 'Azúcar' },
          { english: 'Oil', spanish: 'Aceite' },
          { english: 'Vinegar', spanish: 'Vinagre' },
          { english: 'Honey', spanish: 'Miel' },
          { english: 'Sauce', spanish: 'Salsa' },
          { english: 'Spicy', spanish: 'Picante' },
          { english: 'Sweet', spanish: 'Dulce' },
          { english: 'Salty', spanish: 'Salado' },
          { english: 'Sour', spanish: 'Agrio' },
          { english: 'Bitter', spanish: 'Amargo' },
          { english: 'Tasty', spanish: 'Sabroso' },
          { english: 'Delicious', spanish: 'Delicioso' },
          { english: 'Bland', spanish: 'Soso' },
        ],
      },
      {
        title: 'Comidas del día (Meals)',
        words: [
          { english: 'Breakfast', spanish: 'Desayuno' },
          { english: 'Lunch', spanish: 'Almuerzo' },
          { english: 'Dinner', spanish: 'Cena' },
          { english: 'Snack', spanish: 'Bocadillo / Merienda' },
          { english: 'Brunch', spanish: 'Brunch' },
          { english: 'Appetizer', spanish: 'Aperitivo' },
          { english: 'Main course', spanish: 'Plato principal' },
          { english: 'Side dish', spanish: 'Acompañamiento' },
          { english: 'Dessert', spanish: 'Postre' },
        ],
      },
      {
        title: 'Verbos de cocina (Cooking verbs)',
        words: [
          { english: 'To cook', spanish: 'Cocinar' },
          { english: 'To bake', spanish: 'Hornear' },
          { english: 'To fry', spanish: 'Freír' },
          { english: 'To boil', spanish: 'Hervir' },
          { english: 'To grill', spanish: 'Asar a la parrilla' },
          { english: 'To roast', spanish: 'Asar al horno' },
          { english: 'To chop', spanish: 'Picar' },
          { english: 'To slice', spanish: 'Rebanar' },
          { english: 'To peel', spanish: 'Pelar' },
          { english: 'To mix', spanish: 'Mezclar' },
          { english: 'To stir', spanish: 'Revolver' },
          { english: 'To taste', spanish: 'Probar' },
          { english: 'To serve', spanish: 'Servir' },
          { english: 'To eat', spanish: 'Comer' },
          { english: 'To drink', spanish: 'Beber' },
        ],
      },
    ],
    exampleText: `**Sunday lunch at my grandmother's**

Every Sunday, my whole family gathers at my grandmother's house for a big **lunch**. She wakes up early and starts to **cook** at eight in the morning. First, she **peels** the **potatoes**, **chops** the **onions** and **garlic**, and **slices** the **tomatoes** for the salad.

The smell is amazing. She **roasts** a whole **chicken** in the **oven** with **salt**, **pepper**, and a bit of **honey**. On the stove, she **boils** vegetables like **carrots**, **broccoli**, and **peas**. She also **fries** some **bacon** because my grandfather loves it.

While we wait, she serves an **appetizer** of **cheese** and **bread** with **butter**. We drink fresh **orange juice** or sparkling **water**. The children prefer **soda**.

For the **main course**, we have the **chicken** with **rice** and a **side dish** of vegetables. Everything is so **tasty** and **delicious**. Sometimes the food is a little **spicy**, but never **bland**.

The best part is **dessert**. My grandmother **bakes** a **cake** or a **pie** with **strawberries**, **apples**, or **peaches**. She also makes **cookies** for us to take home. We drink **coffee** or **tea** after the meal.

After **eating**, we feel happy and full. My grandmother says that good food brings people together — and I think she is right.`,
  },
  {
    id: 'ropa-accesorios',
    unitNumber: 6,
    title: 'Ropa y Accesorios',
    emoji: '👗',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Ropa básica (Basic clothing)',
        words: [
          { english: 'Shirt', spanish: 'Camisa' },
          { english: 'T-shirt', spanish: 'Camiseta' },
          { english: 'Blouse', spanish: 'Blusa' },
          { english: 'Sweater', spanish: 'Suéter' },
          { english: 'Hoodie', spanish: 'Sudadera con capucha' },
          { english: 'Jacket', spanish: 'Chaqueta' },
          { english: 'Coat', spanish: 'Abrigo' },
          { english: 'Raincoat', spanish: 'Impermeable' },
          { english: 'Vest', spanish: 'Chaleco' },
          { english: 'Pants / Trousers', spanish: 'Pantalones' },
          { english: 'Jeans', spanish: 'Jeans / Vaqueros' },
          { english: 'Shorts', spanish: 'Pantalones cortos' },
          { english: 'Skirt', spanish: 'Falda' },
          { english: 'Dress', spanish: 'Vestido' },
          { english: 'Suit', spanish: 'Traje' },
          { english: 'Tie', spanish: 'Corbata' },
          { english: 'Bow tie', spanish: 'Pajarita / Corbatín' },
          { english: 'Uniform', spanish: 'Uniforme' },
          { english: 'Pajamas', spanish: 'Pijama' },
          { english: 'Underwear', spanish: 'Ropa interior' },
          { english: 'Bra', spanish: 'Sostén' },
          { english: 'Socks', spanish: 'Calcetines' },
          { english: 'Tights', spanish: 'Medias' },
          { english: 'Swimsuit', spanish: 'Traje de baño' },
          { english: 'Bikini', spanish: 'Bikini' },
        ],
      },
      {
        title: 'Calzado (Footwear)',
        words: [
          { english: 'Shoes', spanish: 'Zapatos' },
          { english: 'Sneakers', spanish: 'Tenis / Zapatillas' },
          { english: 'Boots', spanish: 'Botas' },
          { english: 'Sandals', spanish: 'Sandalias' },
          { english: 'Flip-flops', spanish: 'Chanclas' },
          { english: 'High heels', spanish: 'Tacones altos' },
          { english: 'Slippers', spanish: 'Pantuflas' },
          { english: 'Loafers', spanish: 'Mocasines' },
        ],
      },
      {
        title: 'Accesorios (Accessories)',
        words: [
          { english: 'Hat', spanish: 'Sombrero' },
          { english: 'Cap', spanish: 'Gorra' },
          { english: 'Scarf', spanish: 'Bufanda' },
          { english: 'Gloves', spanish: 'Guantes' },
          { english: 'Belt', spanish: 'Cinturón' },
          { english: 'Bag', spanish: 'Bolso' },
          { english: 'Backpack', spanish: 'Mochila' },
          { english: 'Purse', spanish: 'Cartera / Bolso' },
          { english: 'Wallet', spanish: 'Billetera' },
          { english: 'Glasses', spanish: 'Lentes / Gafas' },
          { english: 'Sunglasses', spanish: 'Lentes de sol' },
          { english: 'Watch', spanish: 'Reloj' },
          { english: 'Umbrella', spanish: 'Paraguas' },
          { english: 'Earrings', spanish: 'Aretes / Pendientes' },
          { english: 'Necklace', spanish: 'Collar' },
          { english: 'Ring', spanish: 'Anillo' },
          { english: 'Bracelet', spanish: 'Brazalete / Pulsera' },
        ],
      },
      {
        title: 'Materiales (Materials)',
        words: [
          { english: 'Cotton', spanish: 'Algodón' },
          { english: 'Wool', spanish: 'Lana' },
          { english: 'Silk', spanish: 'Seda' },
          { english: 'Leather', spanish: 'Cuero' },
          { english: 'Denim', spanish: 'Mezclilla' },
          { english: 'Linen', spanish: 'Lino' },
          { english: 'Polyester', spanish: 'Poliéster' },
          { english: 'Lace', spanish: 'Encaje' },
        ],
      },
      {
        title: 'Verbos relacionados (Related verbs)',
        words: [
          { english: 'To wear', spanish: 'Llevar puesto' },
          { english: 'To put on', spanish: 'Ponerse' },
          { english: 'To take off', spanish: 'Quitarse' },
          { english: 'To try on', spanish: 'Probarse' },
          { english: 'To fit', spanish: 'Quedar bien (talla)' },
          { english: 'To match', spanish: 'Combinar' },
          { english: 'To button', spanish: 'Abotonar' },
          { english: 'To zip up', spanish: 'Subir el cierre' },
          { english: 'To tie', spanish: 'Atar' },
          { english: 'To untie', spanish: 'Desatar' },
          { english: 'To iron', spanish: 'Planchar' },
          { english: 'To fold', spanish: 'Doblar' },
          { english: 'To wash', spanish: 'Lavar' },
        ],
      },
      {
        title: 'Descripción de ropa (Describing clothing)',
        words: [
          { english: 'Tight', spanish: 'Apretado' },
          { english: 'Loose', spanish: 'Suelto' },
          { english: 'Long', spanish: 'Largo' },
          { english: 'Short', spanish: 'Corto' },
          { english: 'Casual', spanish: 'Casual' },
          { english: 'Formal', spanish: 'Formal' },
          { english: 'Elegant', spanish: 'Elegante' },
          { english: 'Trendy', spanish: 'A la moda' },
          { english: 'Old-fashioned', spanish: 'Anticuado' },
          { english: 'Comfortable', spanish: 'Cómodo' },
          { english: 'Plain', spanish: 'Sencillo' },
          { english: 'Patterned', spanish: 'Estampado' },
          { english: 'Striped', spanish: 'A rayas' },
          { english: 'Polka dot', spanish: 'De lunares' },
          { english: 'Checkered', spanish: 'A cuadros' },
        ],
      },
    ],
    exampleText: `**Getting ready for the party**

Tonight I have an important wedding to attend, and I want to **wear** something elegant. I open my closet and start looking. My new black **dress** is perfect — it is **long**, **elegant**, and made of **silk**. I **try it on** and it **fits** perfectly.

I decide to **match** it with a pair of **high heels** and a small black **purse**. I also **put on** a beautiful gold **necklace** and matching **earrings**. I never go out without my **watch**, so I add it to my wrist.

My husband prefers something **formal** too. He chooses a dark blue **suit**, a white **shirt**, and a silk **tie**. He **buttons** his shirt carefully and **ties** his shoes — comfortable **loafers** made of **leather**.

Outside it's cold, so I grab a warm **coat** and a soft **scarf** made of **wool**. The weather forecast said it might rain, so I take my **umbrella** too. My husband **puts on** his **jacket** and **gloves**.

Before we leave, I check that I have my **wallet** in my **bag**. We look at ourselves in the mirror — he is so handsome in his **suit**, and I love how my **dress** looks.

Tomorrow morning, I'll **take off** these elegant clothes and **put on** comfortable **jeans**, a soft **cotton T-shirt**, and **sneakers**. But tonight, we are ready for a wonderful evening.`,
  },
  {
    id: 'compras',
    unitNumber: 7,
    title: 'Compras',
    emoji: '🛍️',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Tipos de tiendas (Types of stores)',
        words: [
          { english: 'Store / Shop', spanish: 'Tienda' },
          { english: 'Supermarket', spanish: 'Supermercado' },
          { english: 'Grocery store', spanish: 'Tienda de comestibles' },
          { english: 'Mall / Shopping center', spanish: 'Centro comercial' },
          { english: 'Department store', spanish: 'Tienda departamental' },
          { english: 'Boutique', spanish: 'Boutique' },
          { english: 'Bakery', spanish: 'Panadería' },
          { english: "Butcher's", spanish: 'Carnicería' },
          { english: 'Fishmonger', spanish: 'Pescadería' },
          { english: 'Pharmacy / Drugstore', spanish: 'Farmacia' },
          { english: 'Bookstore', spanish: 'Librería' },
          { english: 'Stationery', spanish: 'Papelería' },
          { english: 'Hardware store', spanish: 'Ferretería' },
          { english: 'Florist', spanish: 'Floristería' },
          { english: 'Jewelry store', spanish: 'Joyería' },
          { english: 'Toy store', spanish: 'Juguetería' },
          { english: 'Pet shop', spanish: 'Tienda de mascotas' },
          { english: 'Market', spanish: 'Mercado' },
          { english: 'Flea market', spanish: 'Mercado de pulgas' },
        ],
      },
      {
        title: 'En la tienda (At the store)',
        words: [
          { english: 'Customer', spanish: 'Cliente' },
          { english: 'Shop assistant / Salesperson', spanish: 'Vendedor/a' },
          { english: 'Cashier', spanish: 'Cajero/a' },
          { english: 'Manager', spanish: 'Gerente' },
          { english: 'Aisle', spanish: 'Pasillo' },
          { english: 'Shelf', spanish: 'Estante' },
          { english: 'Counter', spanish: 'Mostrador' },
          { english: 'Cash register', spanish: 'Caja registradora' },
          { english: 'Shopping cart', spanish: 'Carrito de compras' },
          { english: 'Shopping basket', spanish: 'Canasta' },
          { english: 'Fitting room', spanish: 'Probador' },
          { english: 'Window display', spanish: 'Vitrina' },
          { english: 'Brand', spanish: 'Marca' },
          { english: 'Product', spanish: 'Producto' },
          { english: 'Item', spanish: 'Artículo' },
        ],
      },
      {
        title: 'Dinero y pago (Money & payment)',
        words: [
          { english: 'Price', spanish: 'Precio' },
          { english: 'Cost', spanish: 'Costo' },
          { english: 'Cheap', spanish: 'Barato' },
          { english: 'Expensive', spanish: 'Caro' },
          { english: 'Affordable', spanish: 'Asequible' },
          { english: 'Discount', spanish: 'Descuento' },
          { english: 'Sale', spanish: 'Oferta / Rebaja' },
          { english: 'Bargain', spanish: 'Ganga' },
          { english: 'Free', spanish: 'Gratis' },
          { english: 'Cash', spanish: 'Efectivo' },
          { english: 'Credit card', spanish: 'Tarjeta de crédito' },
          { english: 'Debit card', spanish: 'Tarjeta de débito' },
          { english: 'Receipt', spanish: 'Recibo' },
          { english: 'Refund', spanish: 'Reembolso' },
          { english: 'Change', spanish: 'Cambio (vuelto)' },
          { english: 'Tax', spanish: 'Impuesto' },
          { english: 'Bill', spanish: 'Factura / Cuenta' },
          { english: 'Coin', spanish: 'Moneda' },
          { english: 'Banknote / Bill', spanish: 'Billete' },
        ],
      },
      {
        title: 'Verbos (Verbs)',
        words: [
          { english: 'To shop', spanish: 'Comprar / Ir de compras' },
          { english: 'To buy', spanish: 'Comprar' },
          { english: 'To sell', spanish: 'Vender' },
          { english: 'To pay', spanish: 'Pagar' },
          { english: 'To cost', spanish: 'Costar' },
          { english: 'To spend', spanish: 'Gastar' },
          { english: 'To save', spanish: 'Ahorrar' },
          { english: 'To exchange', spanish: 'Cambiar' },
          { english: 'To return', spanish: 'Devolver' },
          { english: 'To deliver', spanish: 'Entregar' },
          { english: 'To order', spanish: 'Pedir' },
          { english: 'To choose', spanish: 'Elegir' },
          { english: 'To compare', spanish: 'Comparar' },
          { english: 'To bargain', spanish: 'Regatear' },
          { english: 'To wrap', spanish: 'Envolver' },
        ],
      },
      {
        title: 'Frases útiles (Useful phrases)',
        words: [
          { english: 'How much is it?', spanish: '¿Cuánto cuesta?' },
          { english: 'How much does it cost?', spanish: '¿Cuánto cuesta?' },
          { english: 'Can I help you?', spanish: '¿Puedo ayudarle?' },
          { english: "I'm just looking", spanish: 'Solo estoy mirando' },
          { english: 'Do you have this in another size?', spanish: '¿Tiene esto en otra talla?' },
          { english: 'Can I try it on?', spanish: '¿Puedo probármelo?' },
          { english: 'Where is the fitting room?', spanish: '¿Dónde está el probador?' },
          { english: "It's too tight / loose", spanish: 'Está muy apretado / suelto' },
          { english: "I'll take it", spanish: 'Me lo llevo' },
          { english: 'Cash or card?', spanish: '¿Efectivo o tarjeta?' },
          { english: 'Do you accept credit cards?', spanish: '¿Aceptan tarjeta?' },
          { english: 'Can I get a refund?', spanish: '¿Puedo obtener un reembolso?' },
          { english: 'Is it on sale?', spanish: '¿Está en oferta?' },
        ],
      },
    ],
    exampleText: `**A day at the mall**

Last Saturday, I went **shopping** at the **mall** with my sister. We needed new clothes and some gifts for our parents' anniversary.

Our first stop was a **department store**. A friendly **shop assistant** asked, "Can I help you?" but I replied, "I'm just looking, thanks." We walked through the **aisles** and looked at the **window displays**. I found a beautiful blue sweater on a **shelf** and decided to **try it on**. The **fitting room** was at the back. Unfortunately, it was too **tight**, so I asked for another **size**.

The sweater was on **sale** — 30% off! That was a real **bargain**. I told my sister, "I'll take it." At the **cash register**, the **cashier** asked, "**Cash or card**?" I paid with my **credit card** and got a **receipt** in case I needed a **refund** later.

Next, we went to the **bookstore** to **buy** a book for our father. The **price** was a bit **expensive**, but the book was special. Then we visited a small **boutique** and a **jewelry store**, where we **chose** a beautiful **necklace** for our mother. The **salesperson** offered to **wrap** it as a gift.

Before leaving, we stopped at the **bakery** for some pastries and at the **supermarket** to buy groceries — I always need to **save** money on **brands** and look for **discounts**. I filled my **shopping cart** with vegetables, milk, and bread.

By the end of the day, I had **spent** much more than I planned, but I was happy with my purchases. **Shopping** can be exhausting, but also a lot of fun.`,
  },
  {
    id: 'restaurante',
    unitNumber: 8,
    title: 'En el Restaurante',
    emoji: '🍴',
    category: 'vida-cotidiana',
    sections: [
      {
        title: 'Tipos de lugares (Types of places)',
        words: [
          { english: 'Restaurant', spanish: 'Restaurante' },
          { english: 'Café', spanish: 'Cafetería' },
          { english: 'Diner', spanish: 'Cafetería estilo americano' },
          { english: 'Bistro', spanish: 'Bistró' },
          { english: 'Pub', spanish: 'Bar / Pub' },
          { english: 'Fast food restaurant', spanish: 'Restaurante de comida rápida' },
          { english: 'Food truck', spanish: 'Camión de comida' },
          { english: 'Bakery', spanish: 'Panadería' },
          { english: 'Buffet', spanish: 'Bufé' },
          { english: 'Steakhouse', spanish: 'Asador / Parrilla' },
        ],
      },
      {
        title: 'Personas (People)',
        words: [
          { english: 'Waiter', spanish: 'Mesero' },
          { english: 'Waitress', spanish: 'Mesera' },
          { english: 'Server', spanish: 'Mesero/a (neutro)' },
          { english: 'Chef', spanish: 'Chef' },
          { english: 'Cook', spanish: 'Cocinero/a' },
          { english: 'Host / Hostess', spanish: 'Anfitrión/a' },
          { english: 'Bartender', spanish: 'Cantinero' },
          { english: 'Customer', spanish: 'Cliente' },
          { english: 'Diner', spanish: 'Comensal' },
        ],
      },
      {
        title: 'En la mesa (At the table)',
        words: [
          { english: 'Table', spanish: 'Mesa' },
          { english: 'Chair', spanish: 'Silla' },
          { english: 'Menu', spanish: 'Menú' },
          { english: 'Plate', spanish: 'Plato' },
          { english: 'Bowl', spanish: 'Tazón' },
          { english: 'Glass', spanish: 'Vaso' },
          { english: 'Cup', spanish: 'Taza' },
          { english: 'Mug', spanish: 'Tazón / Jarro' },
          { english: 'Fork', spanish: 'Tenedor' },
          { english: 'Knife', spanish: 'Cuchillo' },
          { english: 'Spoon', spanish: 'Cuchara' },
          { english: 'Teaspoon', spanish: 'Cucharita' },
          { english: 'Napkin', spanish: 'Servilleta' },
          { english: 'Tablecloth', spanish: 'Mantel' },
          { english: 'Salt shaker', spanish: 'Salero' },
          { english: 'Pepper shaker', spanish: 'Pimentero' },
          { english: 'Straw', spanish: 'Pajilla / Popote' },
          { english: 'Candle', spanish: 'Vela' },
        ],
      },
      {
        title: 'Partes del menú (Menu sections)',
        words: [
          { english: 'Appetizer / Starter', spanish: 'Entrada / Aperitivo' },
          { english: 'Soup', spanish: 'Sopa' },
          { english: 'Salad', spanish: 'Ensalada' },
          { english: 'Main course / Entrée', spanish: 'Plato principal' },
          { english: 'Side dish', spanish: 'Acompañamiento' },
          { english: 'Dessert', spanish: 'Postre' },
          { english: 'Beverage / Drink', spanish: 'Bebida' },
          { english: 'Special of the day', spanish: 'Especial del día' },
          { english: 'Vegetarian', spanish: 'Vegetariano' },
          { english: 'Vegan', spanish: 'Vegano' },
          { english: 'Gluten-free', spanish: 'Sin gluten' },
        ],
      },
      {
        title: 'Tipos de cocción (Cooking styles)',
        words: [
          { english: 'Grilled', spanish: 'A la parrilla' },
          { english: 'Fried', spanish: 'Frito' },
          { english: 'Roasted', spanish: 'Asado' },
          { english: 'Baked', spanish: 'Al horno' },
          { english: 'Boiled', spanish: 'Hervido' },
          { english: 'Steamed', spanish: 'Al vapor' },
          { english: 'Raw', spanish: 'Crudo' },
          { english: 'Rare', spanish: 'Poco cocido' },
          { english: 'Medium', spanish: 'Término medio' },
          { english: 'Well done', spanish: 'Bien cocido' },
        ],
      },
      {
        title: 'Frases útiles (Useful phrases)',
        words: [
          { english: 'A table for two, please', spanish: 'Una mesa para dos, por favor' },
          { english: 'Can I see the menu?', spanish: '¿Me puede traer el menú?' },
          { english: 'What do you recommend?', spanish: '¿Qué recomienda?' },
          { english: "I'll have...", spanish: 'Voy a pedir...' },
          { english: "For starters, I'd like...", spanish: 'Para empezar, quisiera...' },
          { english: 'Could you bring us...?', spanish: '¿Podría traernos...?' },
          { english: "What's in this dish?", spanish: '¿Qué lleva este plato?' },
          { english: "I'm allergic to...", spanish: 'Soy alérgico/a a...' },
          { english: 'The check, please', spanish: 'La cuenta, por favor' },
          { english: 'Is service included?', spanish: '¿Está incluido el servicio?' },
          { english: 'Keep the change', spanish: 'Quédate con el cambio' },
        ],
      },
      {
        title: 'Otros conceptos (Other concepts)',
        words: [
          { english: 'Reservation', spanish: 'Reservación' },
          { english: 'Booking', spanish: 'Reserva' },
          { english: 'Order', spanish: 'Pedido' },
          { english: 'Tip', spanish: 'Propina' },
          { english: 'Bill / Check', spanish: 'Cuenta' },
          { english: 'Service charge', spanish: 'Cargo por servicio' },
          { english: 'Refill', spanish: 'Recarga (de bebida)' },
          { english: 'Take away / Take out', spanish: 'Para llevar' },
          { english: 'Eat in', spanish: 'Comer aquí' },
          { english: 'Delivery', spanish: 'Entrega a domicilio' },
          { english: 'Tasty', spanish: 'Sabroso' },
          { english: 'Disgusting', spanish: 'Asqueroso' },
        ],
      },
      {
        title: 'Verbos (Verbs)',
        words: [
          { english: 'To reserve / book', spanish: 'Reservar' },
          { english: 'To order', spanish: 'Pedir' },
          { english: 'To serve', spanish: 'Servir' },
          { english: 'To recommend', spanish: 'Recomendar' },
          { english: 'To taste', spanish: 'Probar' },
          { english: 'To enjoy', spanish: 'Disfrutar' },
          { english: 'To pay the bill', spanish: 'Pagar la cuenta' },
          { english: 'To tip', spanish: 'Dejar propina' },
          { english: 'To complain', spanish: 'Quejarse' },
          { english: 'To compliment', spanish: 'Felicitar' },
        ],
      },
    ],
    exampleText: `**Dinner at a nice restaurant**

For my birthday, my husband took me to a beautiful Italian **restaurant** downtown. He had made a **reservation** for two at 8 p.m. When we arrived, the **hostess** greeted us and led us to a quiet **table** by the window. The **tablecloth** was white, and a small **candle** was burning in the center.

Our friendly **waiter** brought us the **menu** and a basket of fresh bread. "Can I get you anything to **drink**?" he asked. I ordered a **glass** of red wine, and my husband chose sparkling water. "**What do you recommend** tonight?" my husband asked. The **waiter** smiled and said, "The **special of the day** is grilled salmon with vegetables. Our chef also recommends the mushroom risotto."

For **starters**, I had a fresh **salad**, and my husband ordered a creamy **soup**. As a **main course**, I chose the **grilled** salmon, and he picked a **steak**, **medium** done, with a **side dish** of roasted potatoes.

The food was **delicious**! The **chef** clearly knew what he was doing. The **waiter** came back to ask if everything was okay, and we said it was wonderful. He **refilled** our water glasses.

For **dessert**, we shared a chocolate cake and two **cups** of coffee. When we finished, my husband asked for the **check**. "Is **service** included?" he asked. The waiter said no, so my husband left a generous **tip**.

We left the **restaurant** feeling full and happy. It was a perfect night. I always **enjoy** good food, but I enjoy good company even more.`,
  },
  {
    id: 'partes-cuerpo',
    unitNumber: 9,
    title: 'Partes del Cuerpo',
    emoji: '🦴',
    category: 'personas-cuerpo',
    sections: [
      {
        title: 'Cabeza (Head)',
        words: [
          { english: 'Head', spanish: 'Cabeza' },
          { english: 'Face', spanish: 'Cara' },
          { english: 'Hair', spanish: 'Cabello' },
          { english: 'Forehead', spanish: 'Frente' },
          { english: 'Eyebrow', spanish: 'Ceja' },
          { english: 'Eyelash', spanish: 'Pestaña' },
          { english: 'Eye', spanish: 'Ojo' },
          { english: 'Eyelid', spanish: 'Párpado' },
          { english: 'Nose', spanish: 'Nariz' },
          { english: 'Nostril', spanish: 'Fosa nasal' },
          { english: 'Cheek', spanish: 'Mejilla' },
          { english: 'Mouth', spanish: 'Boca' },
          { english: 'Lips', spanish: 'Labios' },
          { english: 'Tooth / Teeth', spanish: 'Diente / Dientes' },
          { english: 'Tongue', spanish: 'Lengua' },
          { english: 'Chin', spanish: 'Mentón' },
          { english: 'Jaw', spanish: 'Mandíbula' },
          { english: 'Ear', spanish: 'Oreja' },
          { english: 'Earlobe', spanish: 'Lóbulo de la oreja' },
          { english: 'Skull', spanish: 'Cráneo' },
          { english: 'Brain', spanish: 'Cerebro' },
        ],
      },
      {
        title: 'Tronco (Torso)',
        words: [
          { english: 'Neck', spanish: 'Cuello' },
          { english: 'Throat', spanish: 'Garganta' },
          { english: 'Shoulder', spanish: 'Hombro' },
          { english: 'Chest', spanish: 'Pecho' },
          { english: 'Back', spanish: 'Espalda' },
          { english: 'Stomach / Belly', spanish: 'Estómago / Vientre' },
          { english: 'Waist', spanish: 'Cintura' },
          { english: 'Hip', spanish: 'Cadera' },
          { english: 'Bottom / Buttocks', spanish: 'Trasero / Glúteos' },
        ],
      },
      {
        title: 'Brazos y manos (Arms & hands)',
        words: [
          { english: 'Arm', spanish: 'Brazo' },
          { english: 'Elbow', spanish: 'Codo' },
          { english: 'Forearm', spanish: 'Antebrazo' },
          { english: 'Wrist', spanish: 'Muñeca' },
          { english: 'Hand', spanish: 'Mano' },
          { english: 'Palm', spanish: 'Palma' },
          { english: 'Finger', spanish: 'Dedo' },
          { english: 'Thumb', spanish: 'Pulgar' },
          { english: 'Index finger', spanish: 'Índice' },
          { english: 'Middle finger', spanish: 'Dedo medio' },
          { english: 'Ring finger', spanish: 'Anular' },
          { english: 'Little finger / Pinky', spanish: 'Meñique' },
          { english: 'Nail', spanish: 'Uña' },
          { english: 'Knuckle', spanish: 'Nudillo' },
        ],
      },
      {
        title: 'Piernas y pies (Legs & feet)',
        words: [
          { english: 'Leg', spanish: 'Pierna' },
          { english: 'Thigh', spanish: 'Muslo' },
          { english: 'Knee', spanish: 'Rodilla' },
          { english: 'Calf', spanish: 'Pantorrilla' },
          { english: 'Shin', spanish: 'Espinilla' },
          { english: 'Ankle', spanish: 'Tobillo' },
          { english: 'Foot / Feet', spanish: 'Pie / Pies' },
          { english: 'Heel', spanish: 'Talón' },
          { english: 'Toe', spanish: 'Dedo del pie' },
          { english: 'Sole', spanish: 'Planta del pie' },
        ],
      },
      {
        title: 'Órganos internos (Internal organs)',
        words: [
          { english: 'Heart', spanish: 'Corazón' },
          { english: 'Lungs', spanish: 'Pulmones' },
          { english: 'Liver', spanish: 'Hígado' },
          { english: 'Kidney', spanish: 'Riñón' },
          { english: 'Stomach', spanish: 'Estómago' },
          { english: 'Intestines', spanish: 'Intestinos' },
          { english: 'Bladder', spanish: 'Vejiga' },
          { english: 'Bones', spanish: 'Huesos' },
          { english: 'Skeleton', spanish: 'Esqueleto' },
          { english: 'Muscle', spanish: 'Músculo' },
          { english: 'Skin', spanish: 'Piel' },
          { english: 'Blood', spanish: 'Sangre' },
          { english: 'Vein', spanish: 'Vena' },
          { english: 'Artery', spanish: 'Arteria' },
          { english: 'Nerve', spanish: 'Nervio' },
        ],
      },
      {
        title: 'Sentidos (Senses)',
        words: [
          { english: 'Sight', spanish: 'Vista' },
          { english: 'Hearing', spanish: 'Oído' },
          { english: 'Smell', spanish: 'Olfato' },
          { english: 'Taste', spanish: 'Gusto' },
          { english: 'Touch', spanish: 'Tacto' },
          { english: 'To see', spanish: 'Ver' },
          { english: 'To hear', spanish: 'Oír' },
          { english: 'To smell', spanish: 'Oler' },
          { english: 'To taste', spanish: 'Saborear' },
          { english: 'To touch', spanish: 'Tocar' },
          { english: 'To feel', spanish: 'Sentir' },
        ],
      },
      {
        title: 'Acciones del cuerpo (Body actions)',
        words: [
          { english: 'To breathe', spanish: 'Respirar' },
          { english: 'To blink', spanish: 'Parpadear' },
          { english: 'To smile', spanish: 'Sonreír' },
          { english: 'To laugh', spanish: 'Reír' },
          { english: 'To cry', spanish: 'Llorar' },
          { english: 'To kiss', spanish: 'Besar' },
          { english: 'To hug', spanish: 'Abrazar' },
          { english: 'To shake hands', spanish: 'Dar la mano' },
          { english: 'To wave', spanish: 'Saludar con la mano' },
          { english: 'To nod', spanish: 'Asentir con la cabeza' },
          { english: 'To shake head', spanish: 'Negar con la cabeza' },
          { english: 'To stretch', spanish: 'Estirarse' },
          { english: 'To bend', spanish: 'Doblar / Inclinarse' },
        ],
      },
    ],
    exampleText: `**A morning at the gym**

I started my morning with a workout. As soon as I walked into the gym, I felt my **heart** beat faster from excitement. I **stretched** my **arms**, **legs**, and **back** before starting.

First, I ran on the treadmill. After ten minutes, my **forehead** was covered in sweat. I could **feel** my **muscles** working — especially in my **thighs** and **calves**. My **lungs** were **breathing** deeply, and I could **hear** my heart pumping.

Then I moved to the weights. I lifted dumbbells, working my **shoulders**, **chest**, and **arms**. My **fingers** were tight around the bars. I could feel the strain in my **wrists** and **elbows**. I bent down to do squats, which strengthen the **legs**, the **knees**, and the **bottom**.

After thirty minutes, my whole **body** was tired. My **face** was red, my **hair** was wet, and my **back** ached a little. I sat down to rest and drink water. I **wiped** my **mouth** with a towel and **smiled** at my reflection in the mirror.

A friend walked in and **waved** at me. We **shook hands**, and he asked how I was. I **nodded** and said, "Tired, but happy." Then we **laughed**.

On the way home, my **feet** were so tired that I could barely walk. My **toes** hurt inside my shoes. But I felt great. Exercise reminds me that the **body** is amazing — every **bone**, every **muscle**, every **nerve** has a purpose.`,
  },
  {
    id: 'apariencia-fisica',
    unitNumber: 10,
    title: 'Apariencia Física',
    emoji: '👁️',
    category: 'personas-cuerpo',
    sections: [
      {
        title: 'Altura y constitución (Height & build)',
        words: [
          { english: 'Tall', spanish: 'Alto' },
          { english: 'Short', spanish: 'Bajo' },
          { english: 'Medium height', spanish: 'Estatura media' },
          { english: 'Thin', spanish: 'Delgado' },
          { english: 'Slim', spanish: 'Esbelto' },
          { english: 'Skinny', spanish: 'Flaco' },
          { english: 'Slender', spanish: 'Esbelto / Estilizado' },
          { english: 'Fat', spanish: 'Gordo' },
          { english: 'Chubby', spanish: 'Regordete' },
          { english: 'Overweight', spanish: 'Con sobrepeso' },
          { english: 'Plump', spanish: 'Llenito' },
          { english: 'Athletic', spanish: 'Atlético' },
          { english: 'Muscular', spanish: 'Musculoso' },
          { english: 'Strong', spanish: 'Fuerte' },
          { english: 'Weak', spanish: 'Débil' },
          { english: 'Fit', spanish: 'En forma' },
          { english: 'Well-built', spanish: 'Bien construido' },
          { english: 'Curvy', spanish: 'Con curvas' },
        ],
      },
      {
        title: 'Edad (Age)',
        words: [
          { english: 'Young', spanish: 'Joven' },
          { english: 'Old', spanish: 'Viejo' },
          { english: 'Elderly', spanish: 'De edad avanzada' },
          { english: 'Middle-aged', spanish: 'De mediana edad' },
          { english: 'Teenage', spanish: 'Adolescente' },
          { english: 'In his/her twenties', spanish: 'Veinteañero/a' },
          { english: 'Senior citizen', spanish: 'Persona mayor' },
        ],
      },
      {
        title: 'Cabello (Hair)',
        words: [
          { english: 'Long hair', spanish: 'Cabello largo' },
          { english: 'Short hair', spanish: 'Cabello corto' },
          { english: 'Straight hair', spanish: 'Cabello liso' },
          { english: 'Curly hair', spanish: 'Cabello rizado' },
          { english: 'Wavy hair', spanish: 'Cabello ondulado' },
          { english: 'Bald', spanish: 'Calvo' },
          { english: 'Blonde', spanish: 'Rubio' },
          { english: 'Brunette', spanish: 'Castaño' },
          { english: 'Redhead', spanish: 'Pelirrojo' },
          { english: 'Black hair', spanish: 'Cabello negro' },
          { english: 'Gray hair', spanish: 'Cabello gris' },
          { english: 'Dyed hair', spanish: 'Cabello teñido' },
          { english: 'Ponytail', spanish: 'Cola de caballo' },
          { english: 'Bun', spanish: 'Moño' },
          { english: 'Braid', spanish: 'Trenza' },
          { english: 'Bangs / Fringe', spanish: 'Flequillo' },
        ],
      },
      {
        title: 'Ojos (Eyes)',
        words: [
          { english: 'Blue eyes', spanish: 'Ojos azules' },
          { english: 'Green eyes', spanish: 'Ojos verdes' },
          { english: 'Brown eyes', spanish: 'Ojos café' },
          { english: 'Hazel eyes', spanish: 'Ojos color avellana' },
          { english: 'Gray eyes', spanish: 'Ojos grises' },
          { english: 'Big eyes', spanish: 'Ojos grandes' },
          { english: 'Small eyes', spanish: 'Ojos pequeños' },
          { english: 'Almond-shaped', spanish: 'En forma de almendra' },
        ],
      },
      {
        title: 'Cara y piel (Face & skin)',
        words: [
          { english: 'Round face', spanish: 'Cara redonda' },
          { english: 'Oval face', spanish: 'Cara ovalada' },
          { english: 'Square face', spanish: 'Cara cuadrada' },
          { english: 'Wrinkle', spanish: 'Arruga' },
          { english: 'Freckles', spanish: 'Pecas' },
          { english: 'Mole', spanish: 'Lunar' },
          { english: 'Scar', spanish: 'Cicatriz' },
          { english: 'Dimple', spanish: 'Hoyuelo' },
          { english: 'Beard', spanish: 'Barba' },
          { english: 'Mustache', spanish: 'Bigote' },
          { english: 'Sideburns', spanish: 'Patillas' },
          { english: 'Stubble', spanish: 'Barba incipiente' },
          { english: 'Pale skin', spanish: 'Piel pálida' },
          { english: 'Tanned', spanish: 'Bronceado' },
          { english: 'Dark skin', spanish: 'Piel oscura' },
          { english: 'Fair skin', spanish: 'Piel clara' },
          { english: 'Olive skin', spanish: 'Piel oliva' },
        ],
      },
      {
        title: 'Adjetivos generales (General adjectives)',
        words: [
          { english: 'Beautiful', spanish: 'Hermoso/a' },
          { english: 'Pretty', spanish: 'Linda' },
          { english: 'Handsome', spanish: 'Guapo' },
          { english: 'Cute', spanish: 'Lindo / Mono' },
          { english: 'Gorgeous', spanish: 'Espectacular' },
          { english: 'Attractive', spanish: 'Atractivo/a' },
          { english: 'Good-looking', spanish: 'Apuesto' },
          { english: 'Plain', spanish: 'Sencillo / Sin atractivo' },
          { english: 'Ugly', spanish: 'Feo' },
          { english: 'Elegant', spanish: 'Elegante' },
          { english: 'Stylish', spanish: 'Con estilo' },
        ],
      },
      {
        title: 'Verbos descriptivos (Descriptive verbs)',
        words: [
          { english: 'To look like', spanish: 'Parecerse a' },
          { english: 'To resemble', spanish: 'Asemejarse' },
          { english: 'To take after', spanish: 'Salir a (parecerse a un familiar)' },
          { english: "To dye one's hair", spanish: 'Teñirse el cabello' },
          { english: 'To grow a beard', spanish: 'Dejarse barba' },
          { english: 'To shave', spanish: 'Afeitarse' },
        ],
      },
    ],
    exampleText: `**My friends are all so different**

I have three best friends, and they all look very different from each other.

Lucas is **tall** and **athletic**. He goes to the gym every day, so he is very **muscular** and **fit**. He has **short**, **dark hair**, **brown eyes**, and a **strong** jaw. He recently started **growing a beard**, but I think he looks better when he **shaves**. He has a small **scar** above his left eyebrow from a soccer accident, and he says it makes him look more interesting.

Emma is the opposite. She is **short** and **slim**, with **long**, **curly**, **blonde hair** that she sometimes ties in a **ponytail** or a **braid**. Her **eyes** are **green**, big and **almond-shaped**. Her skin is **pale**, with lots of **freckles** on her nose. She has the cutest **dimples** when she smiles. Everyone thinks she's very **pretty**, but she's also incredibly smart.

Then there's David, who is **middle-aged** and the oldest of our group. He's **medium height** and a bit **chubby**, with **gray hair** and **wavy** sideburns. His **face** is **round**, and he already has some **wrinkles** around his eyes — but he says they are from laughing too much. He has **olive skin** and a thick **mustache** that he refuses to **shave**.

People often say I **take after** my mother because we both have the same **dark eyes** and the same smile. I'm not as **tall** as Lucas or as **slim** as Emma, but I'm **fit** and **healthy**. My hair is **straight** and **brown**, and I sometimes **dye** it a darker color.

We may look different, but together we make a great team. Real beauty, after all, comes from inside.`,
  },
  {
    id: 'personalidad-caracter',
    unitNumber: 11,
    title: 'Personalidad y Carácter',
    emoji: '😊',
    category: 'personas-cuerpo',
    sections: [
      {
        title: 'Rasgos positivos (Positive traits)',
        words: [
          { english: 'Kind', spanish: 'Amable' },
          { english: 'Friendly', spanish: 'Simpático' },
          { english: 'Nice', spanish: 'Agradable' },
          { english: 'Polite', spanish: 'Educado' },
          { english: 'Generous', spanish: 'Generoso' },
          { english: 'Honest', spanish: 'Honesto' },
          { english: 'Loyal', spanish: 'Leal' },
          { english: 'Trustworthy', spanish: 'Confiable' },
          { english: 'Reliable', spanish: 'Fiable' },
          { english: 'Patient', spanish: 'Paciente' },
          { english: 'Brave', spanish: 'Valiente' },
          { english: 'Confident', spanish: 'Seguro de sí mismo' },
          { english: 'Cheerful', spanish: 'Alegre' },
          { english: 'Optimistic', spanish: 'Optimista' },
          { english: 'Easygoing', spanish: 'Tranquilo / Despreocupado' },
          { english: 'Funny', spanish: 'Divertido' },
          { english: 'Witty', spanish: 'Ingenioso' },
          { english: 'Clever', spanish: 'Listo' },
          { english: 'Smart', spanish: 'Inteligente' },
          { english: 'Intelligent', spanish: 'Inteligente' },
          { english: 'Wise', spanish: 'Sabio' },
          { english: 'Creative', spanish: 'Creativo' },
          { english: 'Hardworking', spanish: 'Trabajador' },
          { english: 'Ambitious', spanish: 'Ambicioso' },
          { english: 'Organized', spanish: 'Organizado' },
          { english: 'Punctual', spanish: 'Puntual' },
          { english: 'Responsible', spanish: 'Responsable' },
          { english: 'Mature', spanish: 'Maduro' },
          { english: 'Humble', spanish: 'Humilde' },
          { english: 'Caring', spanish: 'Atento / Que se preocupa' },
          { english: 'Affectionate', spanish: 'Cariñoso' },
          { english: 'Sociable', spanish: 'Sociable' },
          { english: 'Outgoing', spanish: 'Extrovertido' },
          { english: 'Adventurous', spanish: 'Aventurero' },
          { english: 'Curious', spanish: 'Curioso' },
          { english: 'Open-minded', spanish: 'De mente abierta' },
          { english: 'Tolerant', spanish: 'Tolerante' },
          { english: 'Calm', spanish: 'Tranquilo' },
        ],
      },
      {
        title: 'Rasgos negativos (Negative traits)',
        words: [
          { english: 'Rude', spanish: 'Grosero' },
          { english: 'Mean', spanish: 'Malvado / Mezquino' },
          { english: 'Cruel', spanish: 'Cruel' },
          { english: 'Selfish', spanish: 'Egoísta' },
          { english: 'Greedy', spanish: 'Codicioso' },
          { english: 'Stingy', spanish: 'Tacaño' },
          { english: 'Dishonest', spanish: 'Deshonesto' },
          { english: 'Liar', spanish: 'Mentiroso' },
          { english: 'Lazy', spanish: 'Perezoso' },
          { english: 'Careless', spanish: 'Descuidado' },
          { english: 'Disorganized', spanish: 'Desorganizado' },
          { english: 'Unreliable', spanish: 'Poco fiable' },
          { english: 'Impatient', spanish: 'Impaciente' },
          { english: 'Pessimistic', spanish: 'Pesimista' },
          { english: 'Arrogant', spanish: 'Arrogante' },
          { english: 'Bossy', spanish: 'Mandón' },
          { english: 'Stubborn', spanish: 'Terco' },
          { english: 'Aggressive', spanish: 'Agresivo' },
          { english: 'Bad-tempered', spanish: 'De mal carácter' },
          { english: 'Moody', spanish: 'De humor cambiante' },
          { english: 'Jealous', spanish: 'Celoso' },
          { english: 'Envious', spanish: 'Envidioso' },
          { english: 'Shy', spanish: 'Tímido' },
          { english: 'Insecure', spanish: 'Inseguro' },
          { english: 'Boring', spanish: 'Aburrido' },
          { english: 'Naive', spanish: 'Ingenuo' },
          { english: 'Childish', spanish: 'Infantil' },
          { english: 'Grumpy', spanish: 'Gruñón' },
          { english: 'Nosy', spanish: 'Entrometido' },
          { english: 'Stuck-up', spanish: 'Creído' },
        ],
      },
      {
        title: 'Tipos de personalidad (Personality types)',
        words: [
          { english: 'Introvert', spanish: 'Introvertido' },
          { english: 'Extrovert', spanish: 'Extrovertido' },
          { english: 'Ambivert', spanish: 'Ambivertido' },
          { english: 'Perfectionist', spanish: 'Perfeccionista' },
          { english: 'Workaholic', spanish: 'Adicto al trabajo' },
          { english: 'Daydreamer', spanish: 'Soñador' },
          { english: 'Realist', spanish: 'Realista' },
          { english: 'Idealist', spanish: 'Idealista' },
          { english: 'Leader', spanish: 'Líder' },
          { english: 'Follower', spanish: 'Seguidor' },
          { english: 'Free spirit', spanish: 'Espíritu libre' },
        ],
      },
      {
        title: 'Expresiones útiles (Useful expressions)',
        words: [
          { english: 'He has a good heart', spanish: 'Tiene buen corazón' },
          { english: 'She is a good person', spanish: 'Es una buena persona' },
          { english: 'He gets along with everyone', spanish: 'Se lleva bien con todos' },
          { english: 'She is easy to talk to', spanish: 'Es fácil hablar con ella' },
          { english: 'He has a sense of humor', spanish: 'Tiene sentido del humor' },
          { english: 'She can be difficult', spanish: 'Puede ser difícil' },
          { english: 'He has a strong character', spanish: 'Tiene un carácter fuerte' },
          { english: 'She is set in her ways', spanish: 'Es muy cabezona' },
        ],
      },
    ],
    exampleText: `**The people in my office**

Working in an office means meeting all kinds of personalities. Let me tell you about my coworkers.

My manager, Susan, is one of the most **hardworking** and **organized** people I know. She is also very **patient** and **kind**, which makes her a great **leader**. Even when things go wrong, she stays **calm** and **optimistic**. She's also **funny** and has a great **sense of humor**, which makes the office a nice place to be.

Then there's Mark. He is extremely **smart** and **creative**, but he can be a bit **arrogant**. He thinks he's always right, and he can be quite **stubborn** when others disagree. Still, he is **honest** and **reliable** — if he says he will do something, he does it.

Lucy sits next to me. She's very **shy** and **introverted**, but once you get to know her, she's one of the most **caring** and **affectionate** people in the world. She's a true **perfectionist** — she checks her work three times before sending it. Some say she's a **workaholic** because she's always the last one to leave.

Tom, on the other hand, is **lazy** and **careless**. He's always late — definitely not **punctual** — and he forgets important deadlines. He's also a little **dishonest**: he tells small **lies** about why he didn't finish his work. He's not a bad person, but he can be **unreliable**.

My favorite coworker is Carla. She is **outgoing**, **adventurous**, and a real **free spirit**. She is **open-minded** and **tolerant** of different opinions. She always has a story to tell, and she's never **boring**. She **gets along with everyone**, even with grumpy old Mr. Johnson, who is famous for being **bad-tempered** and **moody**.

Every office is full of different characters. The key is learning to work with all of them — and to be the best version of yourself.`,
  },
  {
    id: 'emociones-sentimientos',
    unitNumber: 12,
    title: 'Emociones y Sentimientos',
    emoji: '❤️',
    category: 'personas-cuerpo',
    sections: [
      {
        title: 'Emociones positivas (Positive emotions)',
        words: [
          { english: 'Happy', spanish: 'Feliz' },
          { english: 'Joyful', spanish: 'Alegre' },
          { english: 'Cheerful', spanish: 'Animado' },
          { english: 'Glad', spanish: 'Contento' },
          { english: 'Excited', spanish: 'Emocionado' },
          { english: 'Thrilled', spanish: 'Entusiasmado' },
          { english: 'Delighted', spanish: 'Encantado' },
          { english: 'Proud', spanish: 'Orgulloso' },
          { english: 'Confident', spanish: 'Seguro' },
          { english: 'Grateful', spanish: 'Agradecido' },
          { english: 'Thankful', spanish: 'Agradecido' },
          { english: 'Hopeful', spanish: 'Esperanzado' },
          { english: 'Relieved', spanish: 'Aliviado' },
          { english: 'Calm', spanish: 'Tranquilo' },
          { english: 'Peaceful', spanish: 'En paz' },
          { english: 'Loved', spanish: 'Amado' },
          { english: 'In love', spanish: 'Enamorado' },
          { english: 'Satisfied', spanish: 'Satisfecho' },
          { english: 'Content', spanish: 'Contento (satisfecho)' },
          { english: 'Amused', spanish: 'Divertido (entretenido)' },
          { english: 'Inspired', spanish: 'Inspirado' },
          { english: 'Motivated', spanish: 'Motivado' },
          { english: 'Surprised', spanish: 'Sorprendido' },
          { english: 'Curious', spanish: 'Curioso' },
          { english: 'Energetic', spanish: 'Enérgico' },
        ],
      },
      {
        title: 'Emociones negativas (Negative emotions)',
        words: [
          { english: 'Sad', spanish: 'Triste' },
          { english: 'Unhappy', spanish: 'Infeliz' },
          { english: 'Depressed', spanish: 'Deprimido' },
          { english: 'Heartbroken', spanish: 'Con el corazón roto' },
          { english: 'Disappointed', spanish: 'Decepcionado' },
          { english: 'Upset', spanish: 'Molesto' },
          { english: 'Angry', spanish: 'Enojado' },
          { english: 'Furious', spanish: 'Furioso' },
          { english: 'Annoyed', spanish: 'Irritado' },
          { english: 'Frustrated', spanish: 'Frustrado' },
          { english: 'Stressed', spanish: 'Estresado' },
          { english: 'Anxious', spanish: 'Ansioso' },
          { english: 'Worried', spanish: 'Preocupado' },
          { english: 'Nervous', spanish: 'Nervioso' },
          { english: 'Afraid', spanish: 'Con miedo' },
          { english: 'Scared', spanish: 'Asustado' },
          { english: 'Terrified', spanish: 'Aterrorizado' },
          { english: 'Lonely', spanish: 'Solitario / Solo' },
          { english: 'Bored', spanish: 'Aburrido' },
          { english: 'Jealous', spanish: 'Celoso' },
          { english: 'Envious', spanish: 'Envidioso' },
          { english: 'Ashamed', spanish: 'Avergonzado' },
          { english: 'Embarrassed', spanish: 'Apenado' },
          { english: 'Guilty', spanish: 'Culpable' },
          { english: 'Confused', spanish: 'Confundido' },
          { english: 'Tired', spanish: 'Cansado' },
          { english: 'Exhausted', spanish: 'Agotado' },
          { english: 'Hurt', spanish: 'Herido (emocionalmente)' },
          { english: 'Offended', spanish: 'Ofendido' },
          { english: 'Disgusted', spanish: 'Asqueado' },
          { english: 'Shocked', spanish: 'Conmocionado' },
          { english: 'Overwhelmed', spanish: 'Abrumado' },
        ],
      },
      {
        title: 'Verbos relacionados (Related verbs)',
        words: [
          { english: 'To feel', spanish: 'Sentir' },
          { english: 'To smile', spanish: 'Sonreír' },
          { english: 'To laugh', spanish: 'Reír' },
          { english: 'To cry', spanish: 'Llorar' },
          { english: 'To shout / yell', spanish: 'Gritar' },
          { english: 'To scream', spanish: 'Chillar' },
          { english: 'To worry', spanish: 'Preocuparse' },
          { english: 'To miss (someone)', spanish: 'Echar de menos / Extrañar' },
          { english: 'To love', spanish: 'Amar' },
          { english: 'To hate', spanish: 'Odiar' },
          { english: 'To enjoy', spanish: 'Disfrutar' },
          { english: 'To suffer', spanish: 'Sufrir' },
          { english: 'To regret', spanish: 'Arrepentirse' },
          { english: 'To forgive', spanish: 'Perdonar' },
          { english: 'To trust', spanish: 'Confiar' },
          { english: 'To care about', spanish: 'Preocuparse por' },
          { english: 'To fall in love', spanish: 'Enamorarse' },
        ],
      },
      {
        title: 'Expresiones útiles (Useful expressions)',
        words: [
          { english: "I'm so happy!", spanish: '¡Estoy muy feliz!' },
          { english: 'I feel great', spanish: 'Me siento genial' },
          { english: "I'm in a good mood", spanish: 'Estoy de buen humor' },
          { english: "I'm in a bad mood", spanish: 'Estoy de mal humor' },
          { english: 'I feel down', spanish: 'Me siento bajón' },
          { english: "I'm fed up", spanish: 'Estoy harto' },
          { english: "I'm sick and tired of...", spanish: 'Estoy harto/a de...' },
          { english: "I can't stand it", spanish: 'No lo soporto' },
          { english: 'It breaks my heart', spanish: 'Me rompe el corazón' },
          { english: "I'm having a blast", spanish: 'Lo estoy pasando genial' },
          { english: "I'm on top of the world", spanish: 'Estoy en la cima del mundo' },
          { english: "I'm freaking out", spanish: 'Me estoy volviendo loco' },
          { english: "I'm a nervous wreck", spanish: 'Soy un manojo de nervios' },
          { english: 'I feel butterflies', spanish: 'Tengo mariposas (en el estómago)' },
          { english: 'It gives me goosebumps', spanish: 'Me pone la piel de gallina' },
        ],
      },
    ],
    exampleText: `**A day full of emotions**

Yesterday was one of the most emotional days of my life.

In the morning, I woke up feeling **anxious** and **nervous** because I had a big job interview. My stomach hurt, and my hands were shaking. I was **worried** that I wasn't prepared enough. As I drove to the office, I felt **stressed** and almost wanted to **cry**.

But when I arrived, the manager smiled at me, and I started to feel a little more **confident**. The interview went well. I was **proud** of how I answered the questions. When she told me I got the job, I was **thrilled** and **delighted**! I felt so **happy** that I wanted to **scream** with joy.

I called my mother right away to share the news. She was **excited** for me and said she was **proud** of her daughter. I felt **loved** and **grateful**.

In the afternoon, however, things changed. My best friend told me she had to move to another country. I was **shocked** and **disappointed**. We have been friends since we were children, and the idea of being far from her made me feel **lonely** and **sad**. My **heart was broken**. I tried not to **cry** in front of her, but I couldn't help it. She **hugged** me and promised we would stay close.

By the evening, I was **exhausted** from so many strong emotions. I sat alone on the couch, feeling **overwhelmed** but also **thankful** for everything that happened. Life can change so much in just one day — one moment you're **furious** or **scared**, and the next, you're **in love** with life again.

Before I went to bed, I felt **calm** and **peaceful**. Whatever tomorrow brings, I know my emotions will always be a part of me.`,
  },
];

import { topics13to30 } from './topics-13-30';

export const allVocabularyTopics: VocabularyTopic[] = [
  ...vocabularyTopics,
  ...topics13to30,
];
