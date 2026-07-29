import type { VocabularyTopic } from './index';

export const studyTopics: VocabularyTopic[] = [
  {
    id: 'sufijos-comunes',
    unitNumber: 37,
    title: 'Sufijos Comunes',
    emoji: '🧩',
    category: 'estudio-idioma',
    level: 'B2',
    sections: [
      {
        title: 'Sufijos de sustantivos (Noun suffixes)',
        words: [
          { english: 'creation', spanish: 'sufijo -tion/-sion: acción o resultado (create → creation = creación)', example: 'The creation of the app took six months.' },
          { english: 'movement', spanish: 'sufijo -ment: acción o resultado (move → movement = movimiento)', example: 'I noticed a small movement in the corner.' },
          { english: 'happiness', spanish: 'sufijo -ness: cualidad o estado (happy → happiness = felicidad)', example: 'Her happiness was obvious to everyone.' },
          { english: 'ability', spanish: 'sufijo -ity: cualidad o estado (able → ability = capacidad)', example: 'He has the ability to solve hard problems.' },
          { english: 'teacher', spanish: 'sufijo -er/-or: persona que hace algo (teach → teacher = profesor)', example: 'My teacher explained it clearly.' },
          { english: 'artist', spanish: 'sufijo -ist: persona (con oficio o creencia) (art → artist = artista)', example: 'She is a talented artist.' },
          { english: 'friendship', spanish: 'sufijo -ship: estado o relación (friend → friendship = amistad)', example: 'Our friendship has lasted ten years.' },
          { english: 'childhood', spanish: 'sufijo -hood: estado o etapa (child → childhood = niñez)', example: 'I had a happy childhood.' },
        ],
      },
      {
        title: 'Sufijos de adjetivos (Adjective suffixes)',
        words: [
          { english: 'helpful', spanish: 'sufijo -ful: lleno de / con (help → helpful = servicial)', example: 'Thanks, that was really helpful.' },
          { english: 'careless', spanish: 'sufijo -less: sin (care → careless = descuidado)', example: 'That was a careless mistake.' },
          { english: 'comfortable', spanish: 'sufijo -able/-ible: que se puede / capaz de (comfort → comfortable = cómodo)', example: 'This chair is very comfortable.' },
          { english: 'dangerous', spanish: 'sufijo -ous: lleno de / que tiene (danger → dangerous = peligroso)', example: 'That road is dangerous at night.' },
          { english: 'creative', spanish: 'sufijo -ive: que tiende a (create → creative = creativo)', example: 'She has a very creative mind.' },
          { english: 'musical', spanish: 'sufijo -al/-ic: relativo a (music → musical = musical)', example: 'He comes from a musical family.' },
          { english: 'childish', spanish: 'sufijo -ish: propio de / algo (child → childish = infantil)', example: 'His reaction was really childish.' },
        ],
      },
      {
        title: 'Sufijos de verbos (Verb suffixes)',
        words: [
          { english: 'organize', spanish: 'sufijo -ize/-ise: hacer o volver (organ → organize = organizar)', example: 'I need to organize my files today.' },
          { english: 'simplify', spanish: 'sufijo -ify: hacer o volver (simple → simplify = simplificar)', example: "Let's simplify this function." },
          { english: 'widen', spanish: 'sufijo -en: hacer o volver (wide → widen = ensanchar)', example: 'They plan to widen the road.' },
          { english: 'activate', spanish: 'sufijo -ate: hacer o causar (active → activate = activar)', example: 'Click here to activate your account.' },
        ],
      },
      {
        title: 'Adverbios y otros (Adverbs & others)',
        words: [
          { english: 'quickly', spanish: 'sufijo -ly: forma adverbios de modo (quick → quickly = rápidamente)', example: 'He finished the task quickly.' },
          { english: 'backward', spanish: 'sufijo -ward(s): dirección (back → backward = hacia atrás)', example: 'Take one step backward.' },
          { english: 'clockwise', spanish: 'sufijo -wise: manera o dirección (clock → clockwise = en sentido horario)', example: 'Turn the knob clockwise.' },
        ],
      },
    ],
    exampleText: `**¿Para qué sirven los sufijos?**

Un **sufijo** es una terminación que se agrega al final de una palabra base para cambiar su significado o su categoría gramatical (de verbo a sustantivo, de sustantivo a adjetivo, etc.).

Si reconoces los sufijos, puedes **adivinar el significado** de palabras nuevas sin buscarlas:

- *happy* (feliz) + **-ness** → *happiness* (felicidad) — un sustantivo.
- *care* (cuidado) + **-less** → *careless* (descuidado) — un adjetivo.
- *simple* (simple) + **-ify** → *simplify* (simplificar) — un verbo.
- *quick* (rápido) + **-ly** → *quickly* (rápidamente) — un adverbio.

Reglas rápidas:
- **-tion, -ment, -ness, -ity, -ship, -hood** → suelen formar **sustantivos**.
- **-ful, -less, -ous, -ive, -al, -able** → suelen formar **adjetivos**.
- **-ize, -ify, -en, -ate** → suelen formar **verbos**.
- **-ly** → normalmente forma **adverbios** de modo.`,
  },
  {
    id: 'fonemas-ingles',
    unitNumber: 38,
    title: 'Fonemas del Inglés (IPA)',
    emoji: '🔊',
    category: 'estudio-idioma',
    level: 'B2',
    sections: [
      {
        title: 'Vocales cortas (Short vowels)',
        words: [
          { english: 'ship', spanish: '/ɪ/ — "i" corta y relajada (no tan cerrada como en español)', example: 'ship, sit, big, this' },
          { english: 'bed', spanish: '/e/ — "e" corta, como en español', example: 'bed, red, ten, said' },
          { english: 'cat', spanish: '/æ/ — entre "a" y "e", boca bien abierta', example: 'cat, bad, man, apple' },
          { english: 'cup', spanish: '/ʌ/ — "a" corta y central', example: 'cup, but, love, money' },
          { english: 'hot', spanish: '/ɒ/ — "o" corta y abierta (inglés británico)', example: 'hot, dog, box, what' },
          { english: 'book', spanish: '/ʊ/ — "u" corta y relajada', example: 'book, good, put, could' },
          { english: 'about', spanish: '/ə/ — "schwa": vocal débil y neutra (sílaba átona)', example: 'about, sofa, teacher, banana' },
        ],
      },
      {
        title: 'Vocales largas (Long vowels)',
        words: [
          { english: 'see', spanish: '/iː/ — "i" larga y tensa', example: 'see, eat, key, machine' },
          { english: 'car', spanish: '/ɑː/ — "a" larga y abierta', example: 'car, father, park, heart' },
          { english: 'door', spanish: '/ɔː/ — "o" larga y abierta', example: 'door, four, saw, thought' },
          { english: 'blue', spanish: '/uː/ — "u" larga y tensa', example: 'blue, food, two, shoe' },
          { english: 'bird', spanish: '/ɜː/ — sonido central largo (entre "e" y "o")', example: 'bird, work, learn, turn' },
        ],
      },
      {
        title: 'Diptongos (Diphthongs)',
        words: [
          { english: 'day', spanish: '/eɪ/ — "ei" (de e hacia i)', example: 'day, name, wait, they' },
          { english: 'my', spanish: '/aɪ/ — "ai" (de a hacia i)', example: 'my, time, high, buy' },
          { english: 'boy', spanish: '/ɔɪ/ — "oi" (de o hacia i)', example: 'boy, coin, noise, enjoy' },
          { english: 'now', spanish: '/aʊ/ — "au" (de a hacia u)', example: 'now, house, out, down' },
          { english: 'go', spanish: '/oʊ/ — "ou" (de o hacia u)', example: 'go, home, know, boat' },
          { english: 'here', spanish: '/ɪə/ — "ia" (de i hacia schwa)', example: 'here, near, ear, beer' },
          { english: 'tour', spanish: '/ʊə/ — "ua" (de u hacia schwa)', example: 'tour, poor, sure, cure' },
        ],
      },
      {
        title: 'Consonantes difíciles (Tricky consonants)',
        words: [
          { english: 'think', spanish: '/θ/ — "th" sorda: lengua entre los dientes, sin voz', example: 'think, three, bath, mouth' },
          { english: 'this', spanish: '/ð/ — "th" sonora: lengua entre los dientes, con voz', example: 'this, that, mother, they' },
          { english: 'she', spanish: '/ʃ/ — "sh": como pedir silencio', example: 'she, shop, fish, nation' },
          { english: 'measure', spanish: '/ʒ/ — como una "y" suave y vibrada', example: 'measure, vision, usual, garage' },
          { english: 'chair', spanish: '/tʃ/ — "ch", como en español', example: 'chair, cheese, watch, match' },
          { english: 'job', spanish: '/dʒ/ — "ch" con voz (como "y" fuerte)', example: 'job, judge, age, giant' },
          { english: 'sing', spanish: '/ŋ/ — "ng" nasal (la lengua atrás, no se oye la g)', example: 'sing, long, thing, running' },
          { english: 'van', spanish: '/v/ — "v" labiodental (dientes sobre el labio; NO como "b")', example: 'van, very, love, five' },
        ],
      },
    ],
    exampleText: `**¿Por qué estudiar los fonemas (IPA)?**

El inglés no se lee como se escribe: la misma letra puede sonar de muchas formas. El **IPA** (Alfabeto Fonético Internacional) le da un símbolo único a cada **sonido**, para que sepas exactamente cómo se pronuncia una palabra aunque nunca la hayas oído.

Los símbolos van entre barras: */kæt/* es "cat".

Sonidos que en español no existen y conviene practicar:
- **/æ/** (cat) — abre bien la boca, entre "a" y "e".
- **/ə/** (about) — el "schwa": la vocal más común del inglés, débil y neutra.
- **/θ/** y **/ð/** (think / this) — la lengua va entre los dientes.
- **/ʃ/** y **/ʒ/** (she / measure).
- **/v/** — dientes sobre el labio inferior; NO es igual a la "b".

Consejo: la longitud importa. */ɪ/* (ship) y */iː/* (sheep) son sonidos distintos y cambian el significado.`,
  },
];
