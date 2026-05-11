import type { VocabularyTopic } from './index';

export const topics31to33: VocabularyTopic[] = [
  {
    id: 'direcciones-transporte',
    unitNumber: 31,
    title: 'Direcciones y Cómo Moverse',
    emoji: '🗺️',
    category: 'lugares-entorno',
    sections: [
      {
        title: 'Pedir direcciones (Asking for directions)',
        words: [
          { english: 'Excuse me, where is...?', spanish: 'Disculpe, ¿dónde está...?', example: 'Excuse me, where is the nearest pharmacy?' },
          { english: 'How do I get to...?', spanish: '¿Cómo llego a...?', example: 'How do I get to the train station?' },
          { english: 'Is it far from here?', spanish: '¿Está lejos de aquí?', example: 'Is the museum far from here?' },
          { english: 'Can you show me on the map?', spanish: '¿Puede mostrarme en el mapa?', example: 'Can you show me on the map where we are?' },
          { english: "I'm lost", spanish: 'Estoy perdido/a', example: "I'm lost — can you help me find this address?" },
          { english: 'Go straight', spanish: 'Siga recto / Vaya derecho', example: 'Go straight for two blocks and then turn left.' },
          { english: 'Turn left', spanish: 'Gire a la izquierda', example: 'Turn left at the traffic light.' },
          { english: 'Turn right', spanish: 'Gire a la derecha', example: 'Turn right after the school.' },
          { english: 'Turn around', spanish: 'Dé la vuelta / Regrese', example: 'Turn around — you are going the wrong way.' },
          { english: 'Take the first left', spanish: 'Tome la primera a la izquierda', example: 'Take the first left after the roundabout.' },
          { english: 'Take the second right', spanish: 'Tome la segunda a la derecha', example: 'Take the second right and the hotel is there.' },
          { english: "It's on the left", spanish: 'Está a la izquierda', example: "The post office is on the left, just past the bank." },
          { english: "It's on the right", spanish: 'Está a la derecha', example: "The café is on the right side of the street." },
          { english: 'Keep walking', spanish: 'Siga caminando', example: 'Keep walking for about five minutes.' },
          { english: "You can't miss it", spanish: 'No tiene pérdida', example: "Turn left and you'll see a big red building — you can't miss it." },
        ],
      },
      {
        title: 'Referencias y puntos de interés (Landmarks & references)',
        words: [
          { english: 'Corner', spanish: 'Esquina', example: 'The bakery is on the corner of Main Street.' },
          { english: 'Block', spanish: 'Cuadra / Manzana', example: 'Walk two blocks and turn right.' },
          { english: 'Traffic light', spanish: 'Semáforo', example: 'Stop at the traffic light and then cross.' },
          { english: 'Crossroads / Intersection', spanish: 'Cruce / Intersección', example: 'At the crossroads, go straight.' },
          { english: 'Roundabout', spanish: 'Rotonda / Glorieta', example: 'Take the third exit at the roundabout.' },
          { english: 'Opposite', spanish: 'Enfrente de / Al otro lado', example: "The pharmacy is opposite the supermarket." },
          { english: 'Next to', spanish: 'Al lado de', example: 'The bank is next to the post office.' },
          { english: 'Near', spanish: 'Cerca de', example: 'Is there a bus stop near here?' },
          { english: 'Far from', spanish: 'Lejos de', example: 'The airport is far from the city center.' },
          { english: 'Between', spanish: 'Entre', example: "The hotel is between the park and the museum." },
          { english: 'In front of', spanish: 'Enfrente de / Frente a', example: 'I will wait for you in front of the cinema.' },
          { english: 'Behind', spanish: 'Detrás de', example: "The parking lot is behind the shopping mall." },
          { english: 'Past', spanish: 'Pasando / Más allá de', example: 'Walk past the church and you will see it.' },
          { english: 'At the end of', spanish: 'Al final de', example: 'The office is at the end of the corridor.' },
          { english: 'Straight ahead', spanish: 'Todo recto / Derecho', example: 'Go straight ahead until you reach the river.' },
        ],
      },
      {
        title: 'Transporte y navegación (Transport & navigation)',
        words: [
          { english: 'On foot', spanish: 'A pie', example: 'It is only ten minutes on foot.' },
          { english: 'By car', spanish: 'En coche / En auto', example: 'It takes thirty minutes by car.' },
          { english: 'By bus', spanish: 'En autobús', example: 'You can get there easily by bus.' },
          { english: 'By train', spanish: 'En tren', example: 'The fastest way is by train.' },
          { english: 'By subway / metro', spanish: 'En metro', example: 'Take the subway to the city center.' },
          { english: 'By bike', spanish: 'En bicicleta', example: 'I go to work by bike every day.' },
          { english: 'GPS', spanish: 'GPS', example: 'My GPS says to turn left here.' },
          { english: 'Map', spanish: 'Mapa', example: 'Can I borrow your map?' },
          { english: 'Address', spanish: 'Dirección', example: 'What is the address of the restaurant?' },
          { english: 'North', spanish: 'Norte', example: 'Head north for three kilometers.' },
          { english: 'South', spanish: 'Sur', example: 'The beach is to the south of the city.' },
          { english: 'East', spanish: 'Este', example: 'Drive east on Highway 5.' },
          { english: 'West', spanish: 'Oeste', example: 'The sunset is in the west.' },
          { english: 'Route', spanish: 'Ruta', example: 'Which route do you recommend?' },
          { english: 'Distance', spanish: 'Distancia', example: 'What is the distance from here to the airport?' },
          { english: 'Traffic', spanish: 'Tráfico / Tránsito', example: 'There is a lot of traffic on this road.' },
          { english: 'Shortcut', spanish: 'Atajo', example: 'I know a shortcut through the park.' },
        ],
      },
    ],
    exampleText: `**Lost in the City**

Last Saturday, I arrived in a new city and quickly realized I was completely **lost**. I had no internet on my phone, so my **GPS** was useless. I pulled out my **map**, but the streets were confusing.

I stopped a woman on the **corner** and said, "*Excuse me, how do I get to the National Museum?*"

She smiled and said, "*Sure! Go **straight ahead** for two **blocks**, then **turn left** at the **traffic light**. Walk **past** the big park and the museum will be on your **right**. You **can't miss it**.*"

"*Is it **far from** here?*" I asked.

"*Not at all — it is only about ten minutes **on foot**!*"

I thanked her and followed her instructions. At the **intersection**, I turned left. I walked **past** a beautiful old church. Then I saw the museum — it was **in front of** a large fountain, **next to** a café.

Later, I needed to get **back** to my hotel. A man at the café told me to take the **subway** — two stops going **north**. He showed me the **route** on his phone. "*The station is just **behind** that building, **at the end of** this street,*" he said.

Thanks to those kind people, I explored the whole city — **by foot**, **by subway**, and even **by bike** for a while. Getting **lost** turned out to be the best adventure of my trip.`,
  },
  {
    id: 'celebraciones-fiestas',
    unitNumber: 32,
    title: 'Celebraciones y Fiestas',
    emoji: '🎉',
    category: 'ocio-cultura',
    sections: [
      {
        title: 'Celebraciones y eventos (Celebrations & events)',
        words: [
          { english: 'Birthday', spanish: 'Cumpleaños', example: 'Her birthday is on the 15th of March.' },
          { english: 'Party', spanish: 'Fiesta', example: 'We are throwing a surprise party for him.' },
          { english: 'Wedding', spanish: 'Boda', example: 'Their wedding was beautiful.' },
          { english: 'Anniversary', spanish: 'Aniversario', example: 'They celebrated their tenth wedding anniversary.' },
          { english: 'Graduation', spanish: 'Graduación', example: 'Her graduation ceremony is next Friday.' },
          { english: 'Baby shower', spanish: 'Baby shower / Fiesta prenatal', example: 'We organized a baby shower for my sister.' },
          { english: 'Engagement', spanish: 'Compromiso / Prometida', example: 'They announced their engagement last night.' },
          { english: 'Ceremony', spanish: 'Ceremonia', example: 'The opening ceremony was very impressive.' },
          { english: 'Reception', spanish: 'Recepción / Banquete', example: 'The wedding reception is at the Grand Hotel.' },
          { english: 'Toast', spanish: 'Brindis', example: 'Let us make a toast to the happy couple!' },
          { english: 'Guest', spanish: 'Invitado/a', example: 'We had over fifty guests at the party.' },
          { english: 'Host', spanish: 'Anfitrión/a', example: 'She is always a wonderful host.' },
          { english: 'Invitation', spanish: 'Invitación', example: 'Did you receive the invitation to the party?' },
          { english: 'Decoration', spanish: 'Decoración', example: 'The decorations looked amazing.' },
          { english: 'Balloon', spanish: 'Globo', example: 'The room was full of colorful balloons.' },
          { english: 'Candle', spanish: 'Vela', example: 'She blew out all the candles in one breath.' },
          { english: 'Confetti', spanish: 'Confeti', example: 'They threw confetti when the couple kissed.' },
          { english: 'Surprise', spanish: 'Sorpresa', example: 'It was a complete surprise — I had no idea!' },
        ],
      },
      {
        title: 'Festividades y días festivos (Holidays & special dates)',
        words: [
          { english: 'Christmas', spanish: 'Navidad', example: 'We spend Christmas with the whole family.' },
          { english: "New Year's Eve", spanish: 'Nochevieja / Víspera de Año Nuevo', example: "We watched the fireworks on New Year's Eve." },
          { english: "New Year's Day", spanish: 'Año Nuevo', example: "New Year's Day is a public holiday." },
          { english: 'Easter', spanish: 'Pascua / Semana Santa', example: 'The children hunt for Easter eggs in the garden.' },
          { english: 'Halloween', spanish: 'Halloween', example: 'Kids dress up in costumes for Halloween.' },
          { english: 'Thanksgiving', spanish: 'Acción de Gracias', example: 'Thanksgiving is celebrated in November in the US.' },
          { english: "Valentine's Day", spanish: 'Día de San Valentín', example: "He gave her roses on Valentine's Day." },
          { english: "Mother's Day", spanish: 'Día de la Madre', example: "We took Mom out to dinner on Mother's Day." },
          { english: "Father's Day", spanish: 'Día del Padre', example: "I always call my dad on Father's Day." },
          { english: 'Independence Day', spanish: 'Día de la Independencia', example: 'There are fireworks on Independence Day.' },
          { english: 'National holiday', spanish: 'Día festivo nacional', example: 'The 4th of July is a national holiday in the US.' },
          { english: 'Public holiday', spanish: 'Día feriado / Festivo', example: 'The banks are closed on public holidays.' },
          { english: 'Long weekend', spanish: 'Fin de semana largo', example: 'We are going to the beach for the long weekend.' },
          { english: 'Fireworks', spanish: 'Fuegos artificiales', example: 'The fireworks lit up the whole sky.' },
          { english: 'Parade', spanish: 'Desfile', example: 'Thousands of people watched the parade.' },
        ],
      },
      {
        title: 'Regalos y felicitaciones (Gifts & greetings)',
        words: [
          { english: 'Gift / Present', spanish: 'Regalo', example: 'What a beautiful gift — thank you so much!' },
          { english: 'Gift wrap', spanish: 'Papel de regalo / Envoltorio', example: 'Can you gift wrap it for me, please?' },
          { english: 'Greeting card', spanish: 'Tarjeta de felicitación', example: 'I wrote a greeting card for her birthday.' },
          { english: 'Wish', spanish: 'Deseo / Buen deseo', example: 'Make a wish before you blow out the candles.' },
          { english: 'Happy Birthday!', spanish: '¡Feliz cumpleaños!', example: 'Happy Birthday! I hope your day is amazing.' },
          { english: 'Congratulations!', spanish: '¡Felicitaciones! / ¡Enhorabuena!', example: 'Congratulations on your promotion!' },
          { english: 'Happy New Year!', spanish: '¡Feliz Año Nuevo!', example: 'Happy New Year! May this year bring you joy.' },
          { english: 'Merry Christmas!', spanish: '¡Feliz Navidad!', example: 'Merry Christmas to you and your family!' },
          { english: 'Happy Anniversary!', spanish: '¡Feliz aniversario!', example: 'Happy Anniversary — twenty years together!' },
          { english: 'Best wishes', spanish: 'Los mejores deseos', example: 'Best wishes for your new job!' },
          { english: 'Many happy returns', spanish: 'Que cumplas muchos más', example: 'Many happy returns of the day!' },
          { english: 'Cheers!', spanish: '¡Salud! / ¡Brindemos!', example: 'Cheers! Here is to a great year ahead.' },
          { english: 'Enjoy your special day', spanish: 'Disfruta tu día especial', example: 'Enjoy your special day — you deserve it!' },
        ],
      },
    ],
    exampleText: `**A Surprise Birthday Party**

Last Saturday, my friends organized a **surprise party** for my 30th **birthday**. I had absolutely no idea — it was a complete **surprise**.

My best friend Ana sent the **invitations** by email two weeks before. She told everyone to arrive at 7 p.m. and to stay quiet. The apartment was full of colorful **balloons**, streamers, and **decorations**. There was a big chocolate **cake** with thirty **candles**.

When I walked through the door, everyone shouted "**Happy Birthday**!" I was shocked and laughed out loud. Ana gave me a beautifully **gift wrapped** box — inside was a camera I had always wanted. I read the **greeting card** and almost started crying.

My colleague David made a **toast**: "*Cheers! Here is to thirty amazing years and many more to come!*" Everyone clapped and raised their glasses.

We danced, laughed, and ate all night. Before midnight, Ana turned off the lights and carried the cake toward me. Everyone sang **Happy Birthday**, and when I closed my eyes to make a **wish**, I thought about how lucky I was to have such wonderful people around me. I blew out all the candles in one breath — my **wish** came true, apparently!

A few days earlier, I had also attended my cousin's **graduation ceremony**. She finished her degree in medicine, and the whole family was there. Her parents gave a **toast** at the **reception** dinner afterward. Next month is also my parents' **anniversary** — twenty-five years of **marriage**. We are planning a big family dinner to celebrate. There is always something to celebrate when you are surrounded by the people you love.`,
  },
  {
    id: 'tiempo-la-hora',
    unitNumber: 33,
    title: 'El Tiempo y La Hora',
    emoji: '🕐',
    category: 'tiempo-clima',
    sections: [
      {
        title: 'Decir la hora (Telling the time)',
        words: [
          { english: "O'clock", spanish: 'En punto', example: "The meeting starts at nine o'clock." },
          { english: 'Half past', spanish: 'Y media', example: 'It is half past three — we are late!' },
          { english: 'Quarter past', spanish: 'Y cuarto', example: 'Lunch is at quarter past one.' },
          { english: 'Quarter to', spanish: 'Menos cuarto', example: 'It is quarter to eight — hurry up!' },
          { english: 'A.M.', spanish: 'De la madrugada / De la mañana', example: 'The flight leaves at 6 a.m.' },
          { english: 'P.M.', spanish: 'De la tarde / De la noche', example: 'The show starts at 8 p.m.' },
          { english: 'Noon', spanish: 'Mediodía', example: 'We meet at noon for lunch.' },
          { english: 'Midnight', spanish: 'Medianoche', example: 'The party goes until midnight.' },
          { english: 'What time is it?', spanish: '¿Qué hora es?', example: 'Excuse me, what time is it?' },
          { english: "It's three o'clock", spanish: 'Son las tres en punto', example: "It's three o'clock — time for a coffee break." },
          { english: "It's half past two", spanish: 'Son las dos y media', example: "It's half past two, so we have thirty minutes." },
          { english: 'Clock', spanish: 'Reloj de pared / Reloj', example: 'The clock on the wall shows the wrong time.' },
          { english: 'Watch', spanish: 'Reloj de pulsera', example: 'She checked her watch and stood up.' },
          { english: 'Alarm', spanish: 'Alarma / Despertador', example: 'I set my alarm for 7 a.m.' },
          { english: 'Timer', spanish: 'Temporizador', example: 'Set the timer for twenty minutes.' },
          { english: 'Schedule', spanish: 'Horario / Agenda', example: 'Check the schedule to see when the bus leaves.' },
        ],
      },
      {
        title: 'Expresiones de tiempo (Time expressions)',
        words: [
          { english: 'On time', spanish: 'A tiempo / Puntual', example: 'Please arrive on time — the meeting starts at 9.' },
          { english: 'In time', spanish: 'A tiempo (con anticipación)', example: 'We got there just in time to catch the train.' },
          { english: 'Early', spanish: 'Temprano / Con anticipación', example: 'She always arrives early to class.' },
          { english: 'Late', spanish: 'Tarde / Con retraso', example: 'Sorry I am late — the traffic was terrible.' },
          { english: 'Right now', spanish: 'Ahora mismo', example: 'I need your help right now.' },
          { english: 'Soon', spanish: 'Pronto', example: 'Dinner will be ready soon.' },
          { english: 'Later', spanish: 'Más tarde / Después', example: 'Can we talk later? I am busy now.' },
          { english: 'Eventually', spanish: 'Con el tiempo / Eventualmente', example: 'He eventually learned to speak English fluently.' },
          { english: 'Immediately', spanish: 'Inmediatamente / De inmediato', example: 'Please call me immediately if there is a problem.' },
          { english: 'Meanwhile', spanish: 'Mientras tanto', example: 'Cook the pasta. Meanwhile, prepare the sauce.' },
          { english: 'Already', spanish: 'Ya', example: 'Have you already finished your homework?' },
          { english: 'Still', spanish: 'Todavía / Aún', example: 'Are you still working on that project?' },
          { english: 'Yet', spanish: 'Todavía / Aún (en negativas)', example: "I haven't finished yet — give me five minutes." },
          { english: 'Lately', spanish: 'Últimamente', example: "I haven't been sleeping well lately." },
          { english: 'Recently', spanish: 'Recientemente', example: 'I recently started going to the gym.' },
          { english: 'A while ago', spanish: 'Hace un rato / Hace algún tiempo', example: 'She called a while ago but you were out.' },
          { english: 'In a moment', spanish: 'En un momento', example: "I'll be with you in a moment." },
          { english: 'Just', spanish: 'Justo / Acabar de', example: 'I just finished my coffee.' },
        ],
      },
      {
        title: 'Adverbios de frecuencia (Frequency adverbs)',
        words: [
          { english: 'Always', spanish: 'Siempre', example: 'She always brushes her teeth before bed.' },
          { english: 'Usually', spanish: 'Generalmente / Normalmente', example: 'I usually have coffee in the morning.' },
          { english: 'Often', spanish: 'A menudo / Frecuentemente', example: 'Do you often go to the cinema?' },
          { english: 'Sometimes', spanish: 'A veces', example: 'Sometimes I walk to work instead of taking the bus.' },
          { english: 'Occasionally', spanish: 'Ocasionalmente / De vez en cuando', example: 'I occasionally eat fast food, but not often.' },
          { english: 'Rarely', spanish: 'Raramente / Rara vez', example: 'He rarely misses a day of work.' },
          { english: 'Seldom', spanish: 'Pocas veces / Casi nunca', example: 'I seldom watch television these days.' },
          { english: 'Never', spanish: 'Nunca', example: "I have never been to Japan, but I want to go." },
          { english: 'Every day', spanish: 'Todos los días', example: 'I exercise every day for thirty minutes.' },
          { english: 'Once a week', spanish: 'Una vez a la semana', example: 'We have a team meeting once a week.' },
          { english: 'Twice a month', spanish: 'Dos veces al mes', example: 'I go to the dentist twice a year.' },
          { english: 'Every other day', spanish: 'Cada dos días', example: 'She washes her hair every other day.' },
          { english: 'From time to time', spanish: 'De vez en cuando', example: 'From time to time, I enjoy cooking something new.' },
          { english: 'Now and then', spanish: 'De vez en cuando / A ratos', example: 'Now and then, we go for a drive in the country.' },
        ],
      },
    ],
    exampleText: `**A Day in the Life of a Very Punctual Person**

My name is Carlos and I am very careful about **time**. My **alarm** goes off every morning at exactly six **o'clock**. I never ignore it. I am **always** up by quarter past six, which gives me plenty of time before work.

I **usually** have breakfast at **half past** six — eggs and toast with coffee. I check my **schedule** on my phone while I eat. Today it shows a team meeting at nine **a.m.** sharp, and a client call at **noon**.

I leave the house at **quarter to** eight. I **often** walk to work because it only takes twenty minutes **on foot**. I like to arrive **early** — at least ten minutes before everyone else. Being **late** makes me very nervous. My boss says I am **always on time**, which is one of my best qualities.

At the office, things were busy. The client called a bit **late** — it was **already** half past twelve. But we solved everything **immediately**. My colleague Sara asked me to review a report. "*Can you do it **right now**?*" she said. "*I need it **soon**!*"

"*Give me **a moment**,*" I told her, "*I **just** finished lunch.*"

**Meanwhile**, the rest of the team was having coffee. I **rarely** take long breaks — I prefer to finish my work **on time** and leave **early** when I can.

In the evenings, I **sometimes** go to the gym — not every day, but **occasionally**. I **never** stay up past midnight on workdays. Before bed, I set my **alarm** and think about the next day.

Life runs smoother when you respect **time** — your own and everyone else's.`,
  },
];
