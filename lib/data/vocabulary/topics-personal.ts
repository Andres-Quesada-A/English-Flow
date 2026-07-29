import type { VocabularyTopic } from './index';

export const personalTopics: VocabularyTopic[] = [
  {
    id: 'reuniones-llamadas-trabajo',
    unitNumber: 34,
    title: 'Reuniones y Llamadas de Trabajo',
    emoji: '💻',
    category: 'mi-vocabulario',
    level: 'B2',
    sections: [
      {
        title: 'Empezar la llamada (Starting the call)',
        words: [
          { english: 'Can you hear me?', spanish: '¿Me escuchan?', example: 'Hi everyone, can you hear me okay?' },
          { english: 'Can you see my screen?', spanish: '¿Ven mi pantalla?', example: "Can you see my screen now that I'm sharing?" },
          { english: "You're on mute", spanish: 'Tienes el micrófono apagado / Estás en silencio', example: "We can't hear you — you're on mute." },
          { english: "You're breaking up", spanish: 'Te estás cortando', example: "Sorry, you're breaking up. Can you repeat that?" },
          { english: 'Let me share my screen', spanish: 'Déjame compartir mi pantalla', example: "Let me share my screen so you can see the error." },
          { english: "I'll drop the link in the chat", spanish: 'Voy a dejar el enlace en el chat', example: "I'll drop the link in the chat for everyone." },
          { english: 'Sorry, I joined a bit late', spanish: 'Perdón, me conecté un poco tarde', example: 'Sorry, I joined a bit late — did I miss anything?' },
          { english: 'Can you speak up a little?', spanish: '¿Puedes hablar un poco más fuerte?', example: 'Can you speak up a little? The audio is very low.' },
          { english: 'My connection is a bit unstable', spanish: 'Mi conexión está un poco inestable', example: 'My connection is a bit unstable today, sorry in advance.' },
          { english: "Let's wait a couple of minutes for everyone to join", spanish: 'Esperemos un par de minutos a que todos se conecten', example: "Let's wait a couple of minutes for everyone to join." },
          { english: "Let's get started", spanish: 'Empecemos', example: "Okay, everyone's here. Let's get started." },
        ],
      },
      {
        title: 'Daily standup y avances (Standup & updates)',
        words: [
          { english: 'Yesterday I worked on...', spanish: 'Ayer trabajé en...', example: 'Yesterday I worked on the login bug and the API refactor.' },
          { english: "Today I'm going to focus on...", spanish: 'Hoy me voy a enfocar en...', example: "Today I'm going to focus on the payment integration." },
          { english: 'I have a blocker', spanish: 'Tengo un impedimento / bloqueo', example: "I have a blocker — I'm waiting for access to the database." },
          { english: 'No blockers on my side', spanish: 'No tengo impedimentos', example: 'No blockers on my side, everything is on track.' },
          { english: "I'm still working on it", spanish: 'Todavía estoy en eso', example: "I'm still working on it, but it's almost done." },
          { english: "I'll have it ready by end of day", spanish: 'Lo tendré listo al final del día', example: "I'll have it ready by end of day, no worries." },
          { english: 'I need a hand with...', spanish: 'Necesito ayuda con...', example: 'I need a hand with the deployment config.' },
          { english: 'Let me give you a quick update', spanish: 'Déjame darte una actualización rápida', example: 'Let me give you a quick update on the migration.' },
          { english: 'Where do we stand on...?', spanish: '¿Cómo vamos con...?', example: 'Where do we stand on the new dashboard?' },
          { english: "I'm waiting on the review", spanish: 'Estoy esperando la revisión', example: "I'm waiting on the review before I can merge." },
          { english: 'I picked up the ticket', spanish: 'Tomé el ticket', example: 'I picked up the ticket about the slow queries.' },
        ],
      },
      {
        title: 'Proyectos y tareas (Projects & tasks)',
        words: [
          { english: "Let's break this down into smaller tasks", spanish: 'Dividamos esto en tareas más pequeñas', example: "This is huge — let's break this down into smaller tasks." },
          { english: "What's the priority here?", spanish: '¿Cuál es la prioridad aquí?', example: "We can't do it all. What's the priority here?" },
          { english: 'This is high priority', spanish: 'Esto es de alta prioridad', example: 'The security fix is high priority, do it first.' },
          { english: "Let's move this to the next sprint", spanish: 'Pasemos esto al siguiente sprint', example: "We ran out of time — let's move this to the next sprint." },
          { english: "We're behind schedule", spanish: 'Vamos atrasados', example: "We're behind schedule, so we need to cut some features." },
          { english: "What's the deadline?", spanish: '¿Cuál es la fecha límite?', example: "What's the deadline for this release?" },
          { english: "That's out of scope", spanish: 'Eso está fuera del alcance', example: "That's out of scope for this sprint, let's park it." },
          { english: "Let's circle back to that", spanish: 'Volvamos a eso más tarde', example: "Good point, but let's circle back to that later." },
          { english: "Let's take that offline", spanish: 'Hablemos eso aparte / después', example: "This is a long topic — let's take that offline." },
          { english: "Who's the owner of this task?", spanish: '¿Quién es el responsable de esta tarea?', example: "Who's the owner of this task? I need someone to follow up." },
          { english: "I'll take care of it", spanish: 'Yo me encargo', example: "Don't worry about the tests, I'll take care of it." },
          { english: "Let's sync up later", spanish: 'Coordinemos más tarde', example: "Let's sync up later to align on the details." },
        ],
      },
      {
        title: 'Código y desarrollo (Code & dev talk)',
        words: [
          { english: 'Can you review my pull request?', spanish: '¿Puedes revisar mi pull request?', example: 'Can you review my pull request when you have a minute?' },
          { english: 'I left some comments on your PR', spanish: 'Dejé algunos comentarios en tu PR', example: 'I left some comments on your PR, nothing major.' },
          { english: 'It works on my machine', spanish: 'Funciona en mi máquina', example: "Weird, it works on my machine but fails in CI." },
          { english: "I can't reproduce the bug", spanish: 'No puedo reproducir el error', example: "I can't reproduce the bug — can you share the steps?" },
          { english: "I'll push my changes", spanish: 'Voy a subir mis cambios', example: "I'll push my changes and let you know." },
          { english: 'There is a merge conflict', spanish: 'Hay un conflicto de fusión', example: 'There is a merge conflict in the config file.' },
          { english: 'We need to refactor this', spanish: 'Necesitamos refactorizar esto', example: 'This function is a mess, we need to refactor this.' },
          { english: "It's a workaround for now", spanish: 'Es una solución temporal por ahora', example: "It's not perfect — it's a workaround for now." },
          { english: "Let's roll back the deploy", spanish: 'Revirtamos el despliegue', example: "Production is down — let's roll back the deploy." },
          { english: 'The build is broken', spanish: 'El build está roto', example: 'The build is broken on main, please check it.' },
          { english: "It's failing in production", spanish: 'Está fallando en producción', example: "It's failing in production but not in staging." },
          { english: 'Did you pull the latest changes?', spanish: '¿Bajaste los últimos cambios?', example: 'Did you pull the latest changes before running it?' },
          { english: 'Let me walk you through the code', spanish: 'Déjame explicarte el código paso a paso', example: 'Let me walk you through the code real quick.' },
        ],
      },
      {
        title: 'Opinar, acordar y discrepar (Opinions & agreeing)',
        words: [
          { english: 'I see your point, but...', spanish: 'Entiendo tu punto, pero...', example: "I see your point, but I think we should test it first." },
          { english: 'That makes sense', spanish: 'Eso tiene sentido', example: 'That makes sense, let\'s go with your approach.' },
          { english: "I'm not so sure about that", spanish: 'No estoy tan seguro de eso', example: "I'm not so sure about that — it could break other things." },
          { english: 'I have to disagree', spanish: 'Tengo que discrepar', example: 'I have to disagree, I think the old design was cleaner.' },
          { english: 'It depends', spanish: 'Depende', example: "It depends on how much traffic we expect." },
          { english: 'From my point of view...', spanish: 'Desde mi punto de vista...', example: 'From my point of view, we should ship it now.' },
          { english: "Correct me if I'm wrong", spanish: 'Corrígeme si me equivoco', example: "Correct me if I'm wrong, but this endpoint is deprecated." },
          { english: 'What do you think?', spanish: '¿Qué opinas?', example: "That's my take. What do you think?" },
          { english: 'Fair enough', spanish: 'Me parece justo / Está bien', example: "Fair enough, let's do it your way." },
          { english: "Let's find a middle ground", spanish: 'Busquemos un punto medio', example: "We both have good points — let's find a middle ground." },
          { english: 'To be honest...', spanish: 'Para ser honesto...', example: "To be honest, I think we're overcomplicating this." },
        ],
      },
      {
        title: 'Pedir aclaración y ayuda (Clarification & help)',
        words: [
          { english: 'Sorry, could you repeat that?', spanish: 'Perdón, ¿podrías repetir eso?', example: "Sorry, could you repeat that? I didn't catch it." },
          { english: 'What do you mean by that?', spanish: '¿A qué te refieres con eso?', example: 'What do you mean by that? Can you give an example?' },
          { english: 'Just to clarify...', spanish: 'Solo para aclarar...', example: "Just to clarify, you want it done today, right?" },
          { english: 'Let me make sure I understand', spanish: 'Déjame asegurarme de que entiendo', example: 'Let me make sure I understand what you need.' },
          { english: 'Does that make sense?', spanish: '¿Tiene sentido?', example: "So we split it in two services. Does that make sense?" },
          { english: "I'm not following", spanish: 'No te sigo / No entiendo', example: "Sorry, I'm not following. Can you go slower?" },
          { english: 'Could you explain that again?', spanish: '¿Podrías explicarlo de nuevo?', example: 'Could you explain that again? I got a bit lost.' },
          { english: 'Bear with me for a second', spanish: 'Dame un segundo / Ten paciencia', example: 'Bear with me for a second while I find the file.' },
          { english: 'Can you break that down?', spanish: '¿Puedes desglosarlo?', example: "That's complex — can you break that down for me?" },
        ],
      },
      {
        title: 'Cerrar la reunión (Wrapping up)',
        words: [
          { english: "Let's wrap up", spanish: 'Vamos cerrando / terminando', example: "We're almost out of time, so let's wrap up." },
          { english: 'To sum up...', spanish: 'En resumen...', example: 'To sum up, we ship Friday and review Monday.' },
          { english: 'What are the next steps?', spanish: '¿Cuáles son los siguientes pasos?', example: 'Great meeting. What are the next steps?' },
          { english: "Let's follow up on this", spanish: 'Le damos seguimiento a esto', example: "Let's follow up on this next week." },
          { english: "I'll send a recap", spanish: 'Enviaré un resumen', example: "I'll send a recap with the action items." },
          { english: 'Thanks everyone for your time', spanish: 'Gracias a todos por su tiempo', example: 'Thanks everyone for your time, this was helpful.' },
          { english: 'Any questions before we finish?', spanish: '¿Alguna pregunta antes de terminar?', example: 'Any questions before we finish the call?' },
          { english: "Let's touch base tomorrow", spanish: 'Nos ponemos al día mañana', example: "Let's touch base tomorrow to check progress." },
          { english: "I'll keep you posted", spanish: 'Te mantengo al tanto', example: "I'll keep you posted once the deploy is done." },
          { english: "That's all from me", spanish: 'Eso es todo de mi parte', example: "That's all from me. Thanks, everyone!" },
        ],
      },
    ],
    exampleText: `**A regular standup call**

*— Hi everyone, can you hear me okay? Let me share my screen.*
*— We can't hear you, Andrés — you're on mute.*
*— Oops, sorry! Better now? Okay, let me give you a quick update.*
*— Go ahead.*
*— Yesterday I worked on the login bug, and today I'm going to focus on the payment integration. I have a blocker, though — I'm waiting on the review of my pull request.*
*— No problem, I'll take care of it after the call.*
*— Thanks. From my point of view, we're a bit behind schedule, so maybe we should move the reports feature to the next sprint.*
*— Fair enough. Let's take that offline and sync up later.*
*— Sounds good. That's all from me.*
*— Great. Any questions before we finish? No? Then let's wrap up — thanks everyone for your time. I'll send a recap with the next steps.*`,
  },
  {
    id: 'charla-chismes-oficina',
    unitNumber: 35,
    title: 'Charla Casual y Chismes de Oficina',
    emoji: '☕',
    category: 'mi-vocabulario',
    level: 'B2',
    sections: [
      {
        title: 'Romper el hielo (Breaking the ice / small talk)',
        words: [
          { english: 'How was your weekend?', spanish: '¿Cómo estuvo tu fin de semana?', example: "Morning! How was your weekend? Did you do anything fun?" },
          { english: 'Any plans for the weekend?', spanish: '¿Tienes planes para el fin de semana?', example: 'Any plans for the weekend, or just resting?' },
          { english: "How's it going?", spanish: '¿Cómo va todo?', example: "Hey, how's it going? Busy week?" },
          { english: 'What have you been up to?', spanish: '¿Qué has estado haciendo?', example: "Long time no chat! What have you been up to?" },
          { english: 'Did you catch the game last night?', spanish: '¿Viste el partido anoche?', example: 'Did you catch the game last night? What a finish!' },
          { english: 'I need more coffee', spanish: 'Necesito más café', example: "I can't focus yet, I need more coffee." },
          { english: 'Happy Friday!', spanish: '¡Feliz viernes!', example: 'Happy Friday! Almost the weekend.' },
          { english: 'The weather is crazy today', spanish: 'El clima está loco hoy', example: 'The weather is crazy today — sunny and raining at once.' },
          { english: "How's work treating you?", spanish: '¿Cómo te va en el trabajo?', example: "Hey, how's work treating you these days?" },
        ],
      },
      {
        title: 'Empezar un chisme (Starting the gossip)',
        words: [
          { english: 'Did you hear about...?', spanish: '¿Escuchaste sobre...?', example: 'Did you hear about the new manager? Crazy story.' },
          { english: 'Have you heard the news?', spanish: '¿Ya te enteraste?', example: 'Have you heard the news? You will not believe it.' },
          { english: 'Guess what!', spanish: '¡Adivina qué!', example: 'Guess what! They cancelled the whole project.' },
          { english: "You didn't hear this from me, but...", spanish: 'No te lo dije yo, pero...', example: "You didn't hear this from me, but they might do layoffs." },
          { english: 'Between you and me...', spanish: 'Entre tú y yo...', example: "Between you and me, I don't think he did the work." },
          { english: 'Keep this to yourself', spanish: 'Que quede entre nosotros', example: 'Keep this to yourself, okay? It is not official yet.' },
          { english: 'Off the record...', spanish: 'En confianza... / Extraoficialmente...', example: "Off the record, the boss is not happy with the team." },
          { english: 'Can you keep a secret?', spanish: '¿Puedes guardar un secreto?', example: 'Can you keep a secret? I have some juicy news.' },
          { english: 'I heard through the grapevine...', spanish: 'Me llegó el rumor de que... / Un pajarito me contó...', example: 'I heard through the grapevine that she got promoted.' },
          { english: 'Spill the tea', spanish: 'Suelta el chisme / Cuéntame todo', example: 'Okay, spill the tea — what actually happened?' },
          { english: "What's the latest?", spanish: '¿Cuál es el último chisme?', example: "So, what's the latest? Anything new around here?" },
          { english: 'There is a rumor going around', spanish: 'Hay un rumor por ahí', example: 'There is a rumor going around that they are merging teams.' },
        ],
      },
      {
        title: 'Reaccionar al chisme (Reacting)',
        words: [
          { english: 'No way!', spanish: '¡No puede ser!', example: 'No way! He really said that in the meeting?' },
          { english: "You're kidding!", spanish: '¡Estás bromeando!', example: "You're kidding! They gave him the promotion?" },
          { english: 'Are you serious?', spanish: '¿En serio?', example: 'Are you serious? I did not see that coming.' },
          { english: "I can't believe it", spanish: 'No lo puedo creer', example: "I can't believe it, that is so unfair." },
          { english: "That's crazy", spanish: 'Qué locura', example: "That's crazy. How did nobody notice?" },
          { english: 'Tell me everything', spanish: 'Cuéntame todo', example: "Wait, start from the beginning — tell me everything." },
          { english: 'I saw that coming', spanish: 'Lo veía venir', example: 'Honestly, I saw that coming a mile away.' },
          { english: "I'm not surprised", spanish: 'No me sorprende', example: "I'm not surprised, he always cuts corners." },
          { english: 'My lips are sealed', spanish: 'No diré nada / Mis labios están sellados', example: "Don't worry, my lips are sealed." },
          { english: 'Wait, what?', spanish: 'Espera, ¿qué?', example: 'Wait, what? Say that again, slowly.' },
        ],
      },
      {
        title: 'Quejarse y desahogarse (Venting & complaining)',
        words: [
          { english: "It's driving me crazy", spanish: 'Me está volviendo loco', example: "This ticket has been reopened three times, it's driving me crazy." },
          { english: "I'm so done with this", spanish: 'Ya no aguanto más esto', example: "I'm so done with this legacy code." },
          { english: 'He gets on my nerves', spanish: 'Me saca de quicio', example: 'He interrupts everyone — he really gets on my nerves.' },
          { english: "I'm fed up", spanish: 'Estoy harto', example: "I'm fed up with these last-minute changes." },
          { english: "It's not my problem", spanish: 'No es mi problema', example: "Honestly, it's not my problem if they missed the deadline." },
          { english: "I'm just venting", spanish: 'Solo me estoy desahogando', example: "Ignore me, I'm just venting for a minute." },
          { english: 'What a mess', spanish: 'Qué desastre', example: 'The whole database is a mess. What a mess.' },
          { english: "This is ridiculous", spanish: 'Esto es ridículo', example: 'Four meetings about one button? This is ridiculous.' },
          { english: "I'm burned out", spanish: 'Estoy quemado / agotado', example: "I've worked every weekend, I'm burned out." },
          { english: 'Give me a break', spanish: 'Dame un respiro / Ya basta', example: "Another urgent request? Give me a break." },
        ],
      },
      {
        title: 'Hablar de la gente (Talking about people)',
        words: [
          { english: "He's such a show-off", spanish: 'Es un presumido', example: "He's such a show-off, always bragging about his code." },
          { english: "She's really down to earth", spanish: 'Es muy sencilla / con los pies en la tierra', example: "The new lead is really down to earth, very easy to talk to." },
          { english: "He's kind of two-faced", spanish: 'Es medio hipócrita / falso', example: "Be careful, he's kind of two-faced." },
          { english: 'He always takes the credit', spanish: 'Siempre se lleva el crédito', example: 'We did the work, but he always takes the credit.' },
          { english: 'She threw me under the bus', spanish: 'Me echó la culpa / me traicionó', example: 'In the meeting she threw me under the bus in front of the boss.' },
          { english: "He's a bit of a slacker", spanish: 'Es medio flojo / vago', example: "He's a bit of a slacker, he never finishes his tickets." },
          { english: "They don't get along", spanish: 'No se llevan bien', example: "Those two don't get along at all." },
          { english: 'There is tension between them', spanish: 'Hay tensión entre ellos', example: 'You can feel there is tension between them lately.' },
          { english: "He's brown-nosing the boss", spanish: 'Le está lambiendo / adulando al jefe', example: "He's brown-nosing the boss to get the promotion." },
          { english: "He can't keep his mouth shut", spanish: 'No sabe quedarse callado', example: "Don't tell him anything, he can't keep his mouth shut." },
        ],
      },
    ],
    exampleText: `**Coffee break gossip**

*— Hey, how was your weekend? Any plans for next one?*
*— It was fine, thanks. But listen... can you keep a secret?*
*— Of course, my lips are sealed. Spill the tea!*
*— Okay, between you and me, I heard through the grapevine that they are going to reorganize the whole team.*
*— No way! Are you serious?*
*— Off the record, yeah. And you didn't hear this from me, but apparently our manager is leaving.*
*— That's crazy. Honestly, though, I'm not surprised — he and the director don't get along at all.*
*— Exactly. There's a lot of tension between them.*
*— Well, it's driving me crazy that nobody tells us anything officially.*
*— Same here. Anyway, keep this to yourself, okay?*
*— Don't worry. My lips are sealed.*`,
  },
  {
    id: 'mis-palabras',
    unitNumber: 36,
    title: 'Mis Palabras',
    emoji: '⭐',
    category: 'mi-vocabulario',
    level: 'B2',
    sections: [
      {
        title: 'Describir cosas y situaciones (Describing things)',
        words: [
          { english: 'weird', spanish: 'raro / extraño', example: "That's weird, the code worked perfectly yesterday." },
          { english: 'odd', spanish: 'raro / extraño (también: impar)', example: "It's odd that the server keeps crashing at night. (an odd number = un número impar)" },
          { english: 'creepy', spanish: 'espeluznante / que da mala espina', example: 'That new guy gives me a creepy vibe.' },
          { english: 'annoying', spanish: 'molesto / fastidioso', example: 'This bug is really annoying, it comes back every time.' },
          { english: 'whole', spanish: 'entero / todo', example: 'I spent the whole day debugging one function.' },
          { english: 'stuff', spanish: 'cosas', example: 'I still have a lot of stuff to finish before Friday.' },
          { english: 'headache', spanish: 'dolor de cabeza (también: algo complicado)', example: 'This legacy code is a real headache to maintain.' },
          { english: 'quint', spanish: 'quintillizo (uno de cinco hermanos)', example: "The famous quints just turned five. (escribiste 'quint'; ¿quizás 'quaint' = pintoresco/con encanto?)" },
        ],
      },
      {
        title: 'Actitudes y conflictos (Attitudes & conflict)',
        words: [
          { english: 'trolling', spanish: 'troleando / provocando (en internet)', example: "Ignore him, he's just trolling in the group chat." },
          { english: 'teasing', spanish: 'bromeando / burlándose (en broma)', example: "Relax, I'm just teasing you — no offense." },
          { english: 'harassing', spanish: 'acosando / hostigando', example: 'Stop harassing him about the deadline, he gets it.' },
          { english: 'nerves', spanish: 'nervios', example: 'He interrupts everyone and it really gets on my nerves. (get on my nerves = sacar de quicio)' },
          { english: 'behave', spanish: 'comportarse', example: 'The app behaves strangely under heavy load. / Behave yourself in the meeting.' },
          { english: 'treat', spanish: 'tratar (a alguien) / invitar', example: "You should treat your teammates with respect. / Lunch is on me, it's my treat. (yo invito)" },
          { english: 'apologize', spanish: 'disculparse / pedir perdón', example: 'You should apologize for that comment, it was rude.' },
        ],
      },
      {
        title: 'Pruebas, ideas y expresiones (Proof, ideas & more)',
        words: [
          { english: 'proof', spanish: 'prueba / evidencia (sustantivo)', example: "Do you have any proof that it's a backend issue?" },
          { english: 'prove', spanish: 'probar / demostrar (verbo)', example: 'I can prove the bug is in the API, look at the logs.' },
          { english: 'quote', spanish: 'cita / presupuesto (también: citar)', example: 'Can you send me a quote for the project? / He quoted a line from the docs.' },
          { english: 'thought', spanish: 'idea / pensamiento (también: pensé, pasado de "think")', example: "That's a good thought, let's try it. / I thought so." },
          { english: 'otherwise', spanish: 'de lo contrario / si no', example: 'Fix the failing tests, otherwise the build stays broken.' },
          { english: 'slipped', spanish: 'resbaló / se escapó (pasado de "slip")', example: 'It slipped my mind to reply to your email. (se me olvidó) / He slipped on the wet floor.' },
          { english: 'sear', spanish: 'dorar / sellar (carne); abrasar, chamuscar', example: 'Sear the meat on high heat for two minutes. (Nota: ¿quizás quisiste "swear" = jurar / decir groserías?)' },
        ],
      },
      {
        title: 'Palabras informales y fuertes (Informal & strong words)',
        words: [
          { english: 'damn', spanish: 'maldito / maldición (informal, palabrota suave)', example: 'Damn, that deploy broke everything again.' },
          { english: 'dumbass', spanish: 'idiota / tonto (vulgar, ofensivo)', example: "Don't be a dumbass, just read the documentation. (¡ojo! es vulgar, úsala solo con amigos de confianza)" },
        ],
      },
      {
        title: 'Describir y comunicar (Describing & communicating)',
        words: [
          { english: 'struggles', spanish: 'dificultades / luchas', example: 'We all have our struggles with the legacy code.' },
          { english: 'charge', spanish: 'cobrar / cargar', example: "How much do they charge for the license? / My phone won't charge." },
          { english: 'aware', spanish: 'consciente / al tanto', example: 'Are you aware of the new deadline?' },
          { english: 'gestures', spanish: 'gestos / ademanes', example: 'He talks with a lot of hand gestures.' },
          { english: 'loud', spanish: 'ruidoso / fuerte (de volumen)', example: 'The office is too loud today, I can\'t focus.' },
          { english: 'gist', spanish: 'la idea general / lo esencial', example: "I didn't read it all, but I got the gist." },
          { english: 'bunch', spanish: 'montón / grupo', example: 'I have a bunch of emails to answer.' },
          { english: 'acronym', spanish: 'acrónimo / sigla', example: 'API is an acronym for Application Programming Interface.' },
          { english: 'huge', spanish: 'enorme', example: "That's a huge improvement in performance." },
          { english: 'either', spanish: 'o... o / tampoco / cualquiera de los dos', example: "You can use either Chrome or Firefox. / I don't like it either." },
          { english: 'unpleasant', spanish: 'desagradable', example: 'The meeting had an unpleasant tone.' },
          { english: 'unbothered', spanish: 'sin inmutarse / al que no le afecta', example: 'He stayed unbothered even when the demo crashed.' },
        ],
      },
      {
        title: 'Sensaciones y cuerpo (Sensations & body)',
        words: [
          { english: 'dizzy', spanish: 'mareado', example: 'I feel dizzy after staring at the screen all day.' },
          { english: 'numb', spanish: 'entumecido / adormecido / sin sensibilidad', example: 'My hand went numb from typing all morning.' },
          { english: 'squeeze', spanish: 'apretar / exprimir', example: 'Squeeze the lemon into the glass. / Can you squeeze this task into today?' },
          { english: 'gripping', spanish: 'cautivador / que atrapa (también: agarrando)', example: "The show was so gripping I couldn't stop watching." },
          { english: 'sunburned', spanish: 'quemado por el sol', example: 'I got sunburned at the beach this weekend.' },
          { english: 'scalp', spanish: 'cuero cabelludo', example: 'The sun burned my scalp because I forgot a hat.' },
          { english: 'balding', spanish: 'quedándose calvo', example: "He's balding a little, but he doesn't mind." },
          { english: 'tough', spanish: 'duro / difícil', example: "This was a tough sprint. (escribiste 'tought'; ¿quizás 'taught' = enseñó?)" },
        ],
      },
      {
        title: 'Comida y sabores (Food & flavors)',
        words: [
          { english: 'flavor', spanish: 'sabor', example: 'This coffee has a really strong flavor.' },
          { english: 'oatmeal', spanish: 'avena', example: 'I have oatmeal for breakfast almost every day.' },
          { english: 'almond', spanish: 'almendra', example: 'I like almond milk in my coffee.' },
          { english: 'nougat', spanish: 'turrón', example: 'This chocolate bar has nougat inside.' },
          { english: 'licorice', spanish: 'regaliz', example: "I don't really like the taste of licorice." },
          { english: 'delight', spanish: 'deleite / encanto', example: 'The dessert was an absolute delight.' },
          { english: 'starve to death', spanish: 'morir de hambre', example: "Let's get lunch, I'm starving to death." },
          { english: 'spicy', spanish: 'picante', example: "This sauce is really spicy. (escribiste 'spitzy'; creo que es 'spicy')" },
        ],
      },
      {
        title: 'Naturaleza, lugares y objetos (Nature, places & things)',
        words: [
          { english: 'cacti', spanish: 'cactus (plural)', example: 'There are many cacti in the desert.' },
          { english: 'cactuses', spanish: 'cactus (plural, forma alternativa)', example: "Both 'cacti' and 'cactuses' are correct plurals." },
          { english: 'cliff', spanish: 'acantilado / precipicio', example: 'We hiked all the way to the top of the cliff.' },
          { english: 'fridge', spanish: 'refrigeradora / nevera', example: "There's some cake in the fridge if you want it." },
          { english: 'bumpy', spanish: 'con baches / lleno de baches (también: turbulento)', example: 'The road was really bumpy. / It was a bumpy flight.' },
          { english: 'trippy', spanish: 'alucinante / psicodélico', example: 'That animation looks really trippy.' },
          { english: 'spatula', spanish: 'espátula', example: "Use a spatula to flip it. (escribiste 'spatcal'; ¿quizás 'spatula'?)" },
          { english: 'stash', spanish: 'reserva / escondite (guardar algo)', example: "He keeps a secret stash of snacks in his desk. (escribiste 'stach'; ¿o 'stache' = bigote?)" },
        ],
      },
      {
        title: 'Expresiones informales (Informal expressions)',
        words: [
          { english: 'cuz', spanish: 'porque (informal, forma escrita de "because")', example: "I'm staying home cuz I'm tired." },
          { english: 'goodness', spanish: 'bondad; ¡Dios mío! (my goodness / oh my goodness)', example: 'Oh my goodness, the build finally passed!' },
          { english: 'stan', spanish: 'ser fan acérrimo / idolatrar (slang)', example: "I totally stan that band. / He's a huge stan of the show." },
          { english: 'hangout', spanish: 'lugar para pasar el rato (también: hang out = pasar el rato)', example: "This café is our usual hangout. / Let's hang out after work." },
        ],
      },
      {
        title: 'Comida y cocina (Food & cooking)',
        words: [
          { english: 'picky eater', spanish: 'quisquilloso para comer', example: 'My son is such a picky eater, he only eats pasta.' },
          { english: 'cinnamon', spanish: 'canela', example: 'I like a bit of cinnamon in my coffee.' },
          { english: 'quiche', spanish: 'quiche (tarta salada)', example: 'We had quiche and salad for lunch.' },
          { english: 'meatloaf', spanish: 'pastel de carne', example: 'My grandma makes the best meatloaf.' },
          { english: 'mushy', spanish: 'blando / pastoso (también: cursi, meloso)', example: 'The vegetables were overcooked and mushy. / That movie was too mushy for me.' },
          { english: 'dry', spanish: 'seco', example: 'The cake was a bit dry. / My throat is dry from talking all day.' },
          { english: 'spoiled', spanish: 'echado a perder (comida); malcriado (persona)', example: 'The milk is spoiled, throw it out. / That kid is really spoiled.' },
          { english: 'powder', spanish: 'polvo', example: 'Add two spoons of the protein powder.' },
          { english: 'crumble', spanish: 'desmoronarse / desmenuzar', example: 'The cookie started to crumble in my hand. / The old plan crumbled under pressure.' },
          { english: 'puff', spanish: 'bocanada / soplo (también: inflarse, hincharse)', example: 'He took a puff of his vape. / Puff pastry is my favorite.' },
        ],
      },
      {
        title: 'Objetos, lugares y animales (Objects, places & animals)',
        words: [
          { english: 'blankets', spanish: 'cobijas / mantas', example: "It's cold tonight, grab a couple of blankets." },
          { english: 'crane', spanish: 'grúa (también: grulla, el ave)', example: 'A crane lifted the beams onto the roof. / A crane is also a tall bird.' },
          { english: 'brick', spanish: 'ladrillo', example: 'The wall is made of red brick.' },
          { english: 'jail', spanish: 'cárcel', example: 'He spent a night in jail after the fight.' },
          { english: 'belt', spanish: 'cinturón', example: 'I need a new belt for these pants.' },
          { english: 'sheep', spanish: 'oveja (plural igual: one sheep, two sheep)', example: 'The farmer has a hundred sheep.' },
          { english: 'dump', spanish: 'botar / tirar; vertedero; dejar (a la pareja)', example: "Don't dump your trash here. / She dumped him last week." },
        ],
      },
      {
        title: 'Movimiento y cuerpo (Movement & body)',
        words: [
          { english: 'dive', spanish: 'clavado / zambullirse (también: bucear)', example: "He did a perfect dive into the pool. / Let's dive into the code." },
          { english: 'crawl', spanish: 'gatear / arrastrarse (también: avanzar muy lento)', example: "The baby learned to crawl. / Traffic is crawling today. (escribiste 'craw'; creo que es 'crawl')" },
          { english: 'pimple', spanish: 'grano / espinilla', example: 'I woke up with a huge pimple on my chin.' },
          { english: 'nasty', spanish: 'asqueroso / desagradable', example: "There's a nasty smell in the fridge. / He left a nasty comment on my PR." },
          { english: 'ick', spanish: 'asco / repelús ("the ick" = repulsión repentina)', example: 'Ew, ick! / She caught the ick and stopped liking him.' },
          { english: 'harm', spanish: 'daño / hacer daño', example: "It won't do any harm to try. / Don't harm yourself." },
        ],
      },
      {
        title: 'Personalidad y conducta (Personality & behavior)',
        words: [
          { english: 'accurate', spanish: 'preciso / exacto', example: 'The estimate was surprisingly accurate.' },
          { english: 'blunt', spanish: 'directo / sin rodeos (también: desafilado)', example: 'Sorry to be blunt, but this code is a mess.' },
          { english: 'immature', spanish: 'inmaduro', example: 'His reaction in the meeting was really immature.' },
          { english: 'wise', spanish: 'sabio', example: 'That was a wise decision.' },
          { english: 'silly', spanish: 'tonto / bobo', example: 'It was a silly mistake, easy to fix.' },
          { english: 'flaws', spanish: 'defectos / fallas', example: 'Every plan has its flaws.' },
          { english: 'misunderstandings', spanish: 'malentendidos', example: "Let's talk it through to avoid misunderstandings." },
          { english: 'swear', spanish: 'jurar / decir groserías', example: "I swear I fixed that bug. / Try not to swear in the meeting. (esto confirma tu 'sear' de antes)" },
          { english: 'cheat', spanish: 'engañar / hacer trampa', example: "He cheated on the test. / Don't try to cheat the system." },
          { english: 'yap', spanish: 'parlotear / hablar mucho (también: ladrar)', example: "He won't stop yapping about his new car." },
          { english: 'idk', spanish: 'no sé ("I don\'t know", abreviatura de chat)', example: 'idk, maybe we should ask the team first.' },
          { english: 'greed', spanish: 'codicia / avaricia', example: 'Greed is probably his biggest flaw.' },
        ],
      },
      {
        title: 'Cuerpo y apariencia (Body & appearance)',
        words: [
          { english: 'cheek', spanish: 'mejilla (también: descaro / atrevimiento)', example: 'She kissed him on the cheek. / What a cheek! He took my seat.' },
          { english: 'dimples', spanish: 'hoyuelos', example: 'She has cute dimples when she smiles.' },
          { english: 'itching', spanish: 'picazón / comezón (también: itching to = morirse de ganas)', example: "My arm is itching from the bite. / I'm itching to start the new project." },
        ],
      },
      {
        title: 'Calle, objetos y materiales (Street, objects & materials)',
        words: [
          { english: 'kerb', spanish: 'bordillo / cordón de la acera (inglés británico)', example: 'Mind the kerb when you step off the sidewalk.' },
          { english: 'curb', spanish: 'bordillo (EE. UU.); también: refrenar / controlar', example: 'The car hit the curb. / We need to curb our spending.' },
          { english: 'camber', spanish: 'peralte / curvatura (de una carretera o superficie)', example: 'The road has a slight camber so the rain drains off.' },
          { english: 'cane', spanish: 'bastón; caña (sugar cane = caña de azúcar)', example: 'My grandfather walks with a cane. / Sugar cane grows here.' },
          { english: 'sails', spanish: 'velas (de un barco)', example: "The boat's sails caught the wind." },
          { english: 'nail', spanish: 'uña; clavo (también: "nail it" = clavarla / lograrlo perfecto)', example: 'I broke a nail. / Hammer the nail into the wall. / You totally nailed the presentation!' },
          { english: 'aid', spanish: 'ayuda / auxilio (first aid = primeros auxilios)', example: 'The Red Cross sent aid. / Do you have a first aid kit?' },
        ],
      },
      {
        title: 'Naturaleza y animales (Nature & animals)',
        words: [
          { english: 'bark', spanish: 'ladrar / ladrido (también: corteza de un árbol)', example: "The dog wouldn't stop barking. / The bark of the tree was rough." },
          { english: 'eagle', spanish: 'águila', example: 'An eagle flew over the mountains.' },
          { english: 'nun', spanish: 'monja (¡ojo! suena igual que "none" = ninguno)', example: 'The nun taught at the local school.' },
        ],
      },
      {
        title: 'Slang y expresiones (Slang & expressions)',
        words: [
          { english: 'swag', spanish: 'estilo / actitud cool (slang); artículos promocionales gratis', example: 'He walks around with so much swag. / We got free swag at the conference.' },
          { english: 'hang out', spanish: 'pasar el rato / juntarse (verbo)', example: "Let's hang out this weekend. / We used to hang out after class." },
          { english: 'glide', spanish: 'deslizarse / planear', example: "The skater glided across the ice. (escribiste 'glaid'; creo que es 'glide')" },
          { english: 'syllable', spanish: 'sílaba', example: "The word 'banana' has three syllables. (escribiste 'silable' = syllable)" },
          { english: 'sarcasm', spanish: 'sarcasmo', example: 'He said it with a lot of sarcasm.' },
        ],
      },
    ],
    exampleText: `**Using my words at work**

It was one of those **weird** days. I spent the **whole** morning fixing an **annoying** bug, and honestly it gave me a **headache**. There was so much random **stuff** in the codebase that it felt **odd** that anything worked at all.

In the team chat, one guy was just **trolling** everyone, and another kept **teasing** me about my old commits. It was all in good fun, but a third person was almost **harassing** me about a deadline, and that really got on my **nerves**.

I asked him to **behave** and to **treat** people with a bit more respect. He didn't want to **apologize** at first, but later he did.

Then my manager asked for **proof** that the outage was not our fault. Luckily, I could **prove** it with the logs. "That's a good **thought**," she said. "Send me the report today, **otherwise** the client will complain." I told her a reply had **slipped** my mind, but I would send a **quote** for the extra work right away.

By the end, I just said, "**Damn**, what a day," closed my laptop, and went home before I said something worse and called someone a **dumbass**.`,
  },
];
