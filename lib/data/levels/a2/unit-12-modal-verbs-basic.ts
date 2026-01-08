import { Unit, Lesson, Exercise } from '@/lib/types';

const lesson1: Lesson = {
  id: 'a2-u12-l1',
  unitId: 'a2-u12',
  title: 'Introduction to Can',
  description: 'Learn how to use "can" for ability',
  order: 1,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l1-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct sentence',
      question: 'Select the correct sentence:',
      options: ['I can swim.', 'I can to swim.', 'I can swimming.', 'I can swims.'],
      correctAnswer: 0,
      points: 10,
      explanation: 'After "can", we use the base form of the verb (infinitive without "to").'
    },
    {
      id: 'a2-u12-l1-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'She ___ speak three languages.',
      correctAnswer: 'can',
      points: 10,
      explanation: '"Can" is used to express ability. The form is the same for all subjects.'
    },
    {
      id: 'a2-u12-l1-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence shows ability?',
      options: ['I can drive a car.', 'I can tomorrow.', 'I can very well.', 'I can a bicycle.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can" + verb shows what someone is able to do.'
    },
    {
      id: 'a2-u12-l1-e4',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['play', 'he', 'guitar', 'can', 'the'],
      correctOrder: [1, 3, 0, 4, 2],
      points: 10,
      explanation: 'Structure: Subject + can + base verb + object.'
    },
    {
      id: 'a2-u12-l1-e5',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'They ___ cook Italian food very well.',
      correctAnswer: 'can',
      points: 10,
      explanation: 'Use "can" to talk about skills and abilities.'
    },
    {
      id: 'a2-u12-l1-e6',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Can" changes form with different subjects (he cans, she cans).',
      correctAnswer: false,
      points: 10,
      explanation: '"Can" stays the same for all subjects: I can, you can, he can, she can, we can, they can.'
    },
    {
      id: 'a2-u12-l1-e7',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'My brother ___ ride a bike.',
      options: ['can', 'cans', 'can to', 'can is'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can" never changes form. We never say "cans" or "can to".'
    },
    {
      id: 'a2-u12-l1-e8',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Puedo hablar inglés.',
      correctAnswer: 'I can speak English',
      points: 10,
      explanation: '"Can" expresses ability to do something.'
    },
    {
      id: 'a2-u12-l1-e9',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'We ___ see the mountains from here.',
      correctAnswer: 'can',
      points: 10,
      explanation: '"Can" is also used for what is possible in a situation.'
    },
    {
      id: 'a2-u12-l1-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'She can to play tennis.',
      correctAnswer: 'She can play tennis.',
      points: 10,
      explanation: 'We never use "to" after "can". It\'s always "can + base verb".'
    }
  ]
};

const lesson2: Lesson = {
  id: 'a2-u12-l2',
  unitId: 'a2-u12',
  title: 'Can\'t - Negative Form',
  description: 'Learn how to use "can\'t" to express inability',
  order: 2,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l2-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'What is the negative of "I can swim"?',
      options: ['I can\'t swim.', 'I don\'t can swim.', 'I no can swim.', 'I can not\'t swim.'],
      correctAnswer: 0,
      points: 10,
      explanation: 'The negative is "cannot" or "can\'t" (contraction).'
    },
    {
      id: 'a2-u12-l2-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'He ___ drive. He doesn\'t have a license.',
      correctAnswer: 'can\'t',
      points: 10,
      explanation: '"Can\'t" is the contraction of "cannot" and shows inability.'
    },
    {
      id: 'a2-u12-l2-e3',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Cannot" and "can\'t" have the same meaning.',
      correctAnswer: true,
      points: 10,
      explanation: '"Can\'t" is just the contracted form of "cannot". Same meaning, but "can\'t" is more common in speaking.'
    },
    {
      id: 'a2-u12-l2-e4',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'I\'m sorry, I ___ help you right now. I\'m busy.',
      options: ['can\'t', 'don\'t can', 'not can', 'can not\'t'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "can\'t" to say you are not able to do something.'
    },
    {
      id: 'a2-u12-l2-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['can\'t', 'we', 'the door', 'open'],
      correctOrder: [1, 0, 3, 2],
      points: 10,
      explanation: 'Structure: Subject + can\'t + base verb + object.'
    },
    {
      id: 'a2-u12-l2-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'The baby ___ walk yet. She\'s only 6 months old.',
      correctAnswer: 'can\'t',
      points: 10,
      explanation: 'Use "can\'t" for things people are not able to do.'
    },
    {
      id: 'a2-u12-l2-e7',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'No puedo encontrar mis llaves.',
      correctAnswer: 'I can\'t find my keys',
      points: 10,
      explanation: '"Can\'t find" means not able to find/locate something.'
    },
    {
      id: 'a2-u12-l2-e8',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is correct?',
      options: ['She cannot sing.', 'She can not sing.', 'She cann\'t sing.', 'She don\'t can sing.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Cannot" is one word. "Can not" (two words) is rare and usually emphatic.'
    },
    {
      id: 'a2-u12-l2-e9',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'I don\'t can understand this.',
      correctAnswer: 'I can\'t understand this.',
      points: 10,
      explanation: 'We never use "don\'t" with "can". The negative is "can\'t" or "cannot".'
    },
    {
      id: 'a2-u12-l2-e10',
      type: 'context-completion',
      instruction: 'Complete the conversation',
      context: 'A: Do you speak Chinese? B: No, I ___.',
      options: ['do', 'can\'t', 'don\'t speak'],
      correctAnswer: 1,
      points: 10,
      explanation: 'Short answer using "can\'t" to express inability.'
    }
  ]
};

const lesson3: Lesson = {
  id: 'a2-u12-l3',
  unitId: 'a2-u12',
  title: 'Can - Questions',
  description: 'Learn how to ask questions with "can"',
  order: 3,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l3-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'How do we make questions with "can"?',
      options: ['Can + subject + verb', 'Do + subject + can', 'Subject + can + verb?', 'Does + can + subject'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For questions with "can", we put "can" before the subject: Can you swim?'
    },
    {
      id: 'a2-u12-l3-e2',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['can', 'speak', 'you', 'French'],
      correctOrder: [0, 2, 1, 3],
      points: 10,
      explanation: 'Question structure: Can + subject + base verb?'
    },
    {
      id: 'a2-u12-l3-e3',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ she play the piano?',
      correctAnswer: 'Can',
      points: 10,
      explanation: 'Questions start with "Can" followed by the subject.'
    },
    {
      id: 'a2-u12-l3-e4',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'A: Can you drive? B: ___',
      options: ['Yes, I can.', 'Yes, I do.', 'Yes, I am.', 'Yes, I have.'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Short answers with "can": Yes, I can. / No, I can\'t.'
    },
    {
      id: 'a2-u12-l3-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: '¿Puedes ayudarme?',
      correctAnswer: 'Can you help me',
      points: 10,
      explanation: '"Can you...?" is used to ask about ability or to make requests.'
    },
    {
      id: 'a2-u12-l3-e6',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['the children', 'can', 'ice skate'],
      correctOrder: [1, 0, 2],
      points: 10,
      explanation: 'Even with plural subjects: Can + subject + verb?'
    },
    {
      id: 'a2-u12-l3-e7',
      type: 'fill-blank',
      instruction: 'Complete the answer',
      question: 'A: Can Tom cook? B: No, he ___.',
      correctAnswer: 'can\'t',
      points: 10,
      explanation: 'Negative short answer: No, subject + can\'t.'
    },
    {
      id: 'a2-u12-l3-e8',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'Do you can swim?',
      correctAnswer: 'Can you swim?',
      points: 10,
      explanation: 'We don\'t use "do/does" with "can". Just: Can + subject + verb?'
    },
    {
      id: 'a2-u12-l3-e9',
      type: 'multiple-choice',
      instruction: 'Complete the question',
      question: '___ I use your phone?',
      options: ['Can', 'Do can', 'Am can', 'Does can'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can I...?" is used for asking permission politely.'
    },
    {
      id: 'a2-u12-l3-e10',
      type: 'context-completion',
      instruction: 'Complete the question',
      context: 'Asking about ability: "___ your brother ride a motorcycle?"',
      options: ['Does', 'Can', 'Is'],
      correctAnswer: 1,
      points: 10,
      explanation: 'Use "Can + subject" to ask about someone\'s abilities.'
    }
  ]
};

const lesson4: Lesson = {
  id: 'a2-u12-l4',
  unitId: 'a2-u12',
  title: 'Can for Permission & Requests',
  description: 'Learn how to use "can" to ask for permission and make requests',
  order: 4,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l4-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence asks for permission?',
      options: ['Can I borrow your pen?', 'I can borrow your pen.', 'Can you borrow my pen?', 'I can\'t borrow your pen.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can I...?" is used to ask for permission to do something.'
    },
    {
      id: 'a2-u12-l4-e2',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ I sit here? Is this seat free?',
      correctAnswer: 'Can',
      points: 10,
      explanation: '"Can I...?" is a polite way to ask permission.'
    },
    {
      id: 'a2-u12-l4-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is a request for help?',
      options: ['Can you open the window?', 'Can I open the window?', 'I can open the window.', 'You can open the window.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can you...?" is used to request someone to do something.'
    },
    {
      id: 'a2-u12-l4-e4',
      type: 'categorization',
      instruction: 'Classify these sentences',
      categories: ['Permission', 'Request'],
      items: [
        { text: 'Can you pass me the salt?', category: 'Request' },
        { text: 'Can I leave early?', category: 'Permission' },
        { text: 'Can you help me?', category: 'Request' },
        { text: 'Can I use your phone?', category: 'Permission' }
      ],
      points: 10,
      explanation: '"Can you...?" asks someone to do something (request). "Can I...?" asks for permission.'
    },
    {
      id: 'a2-u12-l4-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: '¿Puedo usar tu computadora?',
      correctAnswer: 'Can I use your computer',
      points: 10,
      explanation: '"Can I...?" asks permission to use something.'
    },
    {
      id: 'a2-u12-l4-e6',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ you repeat that, please? I didn\'t hear.',
      correctAnswer: 'Can',
      points: 10,
      explanation: '"Can you...?" is used to politely ask someone to do something.'
    },
    {
      id: 'a2-u12-l4-e7',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'Teacher to student: "You ___ go to the restroom."',
      options: ['can', 'can to', 'cans', 'can\'t not'],
      correctAnswer: 0,
      points: 10,
      explanation: '"You can..." gives permission to someone.'
    },
    {
      id: 'a2-u12-l4-e8',
      type: 'categorization',
      instruction: 'Is this permission or request?',
      categories: ['Permission', 'Request'],
      items: [
        { text: 'Can I leave early today?', category: 'Permission' },
        { text: 'Can you close the door?', category: 'Request' }
      ],
      points: 10,
      explanation: '"Can I...?" is asking permission. "Can you...?" is making a request.'
    },
    {
      id: 'a2-u12-l4-e9',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['I', 'your', 'borrow', 'can', 'dictionary'],
      correctOrder: [3, 0, 2, 1, 4],
      points: 10,
      explanation: 'Asking permission: Can + I + verb + object?'
    },
    {
      id: 'a2-u12-l4-e10',
      type: 'dialogue-completion',
      instruction: 'Complete the conversation',
      dialogue: [
        { speaker: 'A', text: '___ I have the menu, please?', isBlank: true },
        { speaker: 'B', text: 'Of course, here you are.' }
      ],
      options: ['Can', 'Do', 'Am', 'Will'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can I have...?" is a polite way to ask for something.'
    }
  ]
};

const lesson5: Lesson = {
  id: 'a2-u12-l5',
  unitId: 'a2-u12',
  title: 'Introduction to Could',
  description: 'Learn how to use "could" for past ability',
  order: 5,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l5-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Could" is the past form of:',
      options: ['can', 'will', 'do', 'have'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could" is the past tense of "can" for past abilities.'
    },
    {
      id: 'a2-u12-l5-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'When I was young, I ___ run very fast.',
      correctAnswer: 'could',
      points: 10,
      explanation: 'Use "could" for abilities in the past.'
    },
    {
      id: 'a2-u12-l5-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence talks about a past ability?',
      options: ['She could speak Spanish when she was 5.', 'She can speak Spanish.', 'She could speak Spanish tomorrow.', 'She could speaking Spanish.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could" + past time expression shows past ability.'
    },
    {
      id: 'a2-u12-l5-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Podía nadar cuando era niño.',
      correctAnswer: 'I could swim when I was a child',
      points: 10,
      explanation: '"Could" expresses ability in the past.'
    },
    {
      id: 'a2-u12-l5-e5',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'My grandmother ___ cook amazing food when she was alive.',
      correctAnswer: 'could',
      points: 10,
      explanation: 'Use "could" for past abilities that no longer exist.'
    },
    {
      id: 'a2-u12-l5-e6',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['could', 'I', 'remember', 'everything', 'before'],
      correctOrder: [1, 0, 2, 3, 4],
      points: 10,
      explanation: 'Structure: Subject + could + base verb.'
    },
    {
      id: 'a2-u12-l5-e7',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Could" changes form with different subjects (he coulds).',
      correctAnswer: false,
      points: 10,
      explanation: 'Like "can", "could" never changes: I could, he could, they could.'
    },
    {
      id: 'a2-u12-l5-e8',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'Before the accident, he ___ walk without help.',
      correctAnswer: 'could',
      points: 10,
      explanation: '"Could" shows what someone was able to do in the past.'
    },
    {
      id: 'a2-u12-l5-e9',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'The negative of "could" is:',
      options: ['couldn\'t', 'didn\'t could', 'not could', 'could not\'t'],
      correctAnswer: 0,
      points: 10,
      explanation: 'The negative is "could not" or "couldn\'t" (contraction).'
    },
    {
      id: 'a2-u12-l5-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'She could to dance very well.',
      correctAnswer: 'She could dance very well.',
      points: 10,
      explanation: 'Never use "to" after "could". It\'s always "could + base verb".'
    }
  ]
};

const lesson6: Lesson = {
  id: 'a2-u12-l6',
  unitId: 'a2-u12',
  title: 'Could for Polite Requests',
  description: 'Learn how to use "could" to make polite requests',
  order: 6,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l6-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is MORE polite?',
      options: ['Could you help me?', 'Can you help me?', 'Help me!', 'You help me.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could you...?" is more polite and formal than "Can you...?"'
    },
    {
      id: 'a2-u12-l6-e2',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ you please close the door?',
      correctAnswer: 'Could',
      points: 10,
      explanation: '"Could you please...?" is a very polite request.'
    },
    {
      id: 'a2-u12-l6-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'In a formal situation, which is best?',
      options: ['Could I speak to the manager?', 'Can I speak to the manager?', 'I want to speak to the manager.', 'Give me the manager.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could I...?" is more polite and formal than "Can I...?"'
    },
    {
      id: 'a2-u12-l6-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: '¿Podría ayudarme, por favor?',
      correctAnswer: 'Could you help me, please',
      points: 10,
      explanation: '"Could you...please?" is a very polite request form.'
    },
    {
      id: 'a2-u12-l6-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['I', 'could', 'water', 'have', 'a glass of'],
      correctOrder: [1, 0, 3, 4, 2],
      points: 10,
      explanation: '"Could I have...?" is a polite way to ask for something.'
    },
    {
      id: 'a2-u12-l6-e6',
      type: 'categorization',
      instruction: 'Is this about past ability or a polite request?',
      categories: ['Past ability', 'Polite request'],
      items: [
        { text: 'Could you open the window?', category: 'Polite request' },
        { text: 'I could swim when I was young.', category: 'Past ability' }
      ],
      points: 10,
      explanation: 'Without past context, "Could you...?" is usually a polite request.'
    },
    {
      id: 'a2-u12-l6-e7',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ I borrow your umbrella? It\'s raining.',
      correctAnswer: 'Could',
      points: 10,
      explanation: '"Could I...?" is polite for asking permission.'
    },
    {
      id: 'a2-u12-l6-e8',
      type: 'dialogue-completion',
      instruction: 'Complete the conversation',
      dialogue: [
        { speaker: 'A', text: '___ we have the bill, please?', isBlank: true },
        { speaker: 'B', text: 'Of course.' }
      ],
      options: ['Could', 'Can', 'Do', 'Are'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could we have...?" is polite in formal situations like restaurants.'
    },
    {
      id: 'a2-u12-l6-e9',
      type: 'multiple-choice',
      instruction: 'Complete the question',
      question: 'On the phone: "___ I speak to Mr. Smith, please?"',
      options: ['Could', 'Coulds', 'Could to', 'Did could'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could I speak to...?" is the standard polite phone question.'
    },
    {
      id: 'a2-u12-l6-e10',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Could" is only used for past tense.',
      correctAnswer: false,
      points: 10,
      explanation: '"Could" is used for past ability AND polite requests in the present.'
    }
  ]
};

const lesson7: Lesson = {
  id: 'a2-u12-l7',
  unitId: 'a2-u12',
  title: 'Introduction to Must',
  description: 'Learn how to use "must" for strong obligation',
  order: 7,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l7-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Must" is used to express:',
      options: ['strong obligation or necessity', 'ability', 'permission', 'suggestion'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Must" shows that something is necessary or obligatory.'
    },
    {
      id: 'a2-u12-l7-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ wear a seatbelt in a car. It\'s the law.',
      correctAnswer: 'must',
      points: 10,
      explanation: '"Must" is used for rules, laws, and strong obligations.'
    },
    {
      id: 'a2-u12-l7-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence expresses a rule?',
      options: ['Students must be quiet in the library.', 'Students can be quiet.', 'Students will be quiet.', 'Students should be quiet.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Must" expresses rules and strong necessity.'
    },
    {
      id: 'a2-u12-l7-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Debes hacer tu tarea.',
      correctAnswer: 'You must do your homework',
      points: 10,
      explanation: '"Must" expresses obligation - something that is necessary.'
    },
    {
      id: 'a2-u12-l7-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['we', 'leave', 'must', 'now'],
      correctOrder: [0, 2, 1, 3],
      points: 10,
      explanation: 'Structure: Subject + must + base verb.'
    },
    {
      id: 'a2-u12-l7-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I ___ finish this project today. The deadline is tomorrow!',
      correctAnswer: 'must',
      points: 10,
      explanation: '"Must" shows strong personal obligation or necessity.'
    },
    {
      id: 'a2-u12-l7-e7',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Must" changes form with different subjects (he musts).',
      correctAnswer: false,
      points: 10,
      explanation: 'Like other modals, "must" never changes: I must, he must, they must.'
    },
    {
      id: 'a2-u12-l7-e8',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ show your passport at the airport.',
      options: ['must', 'musts', 'must to', 'are must'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Must" + base verb for obligations and requirements.'
    },
    {
      id: 'a2-u12-l7-e9',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'Passengers ___ turn off their phones during the flight.',
      correctAnswer: 'must',
      points: 10,
      explanation: '"Must" is used for official rules and regulations.'
    },
    {
      id: 'a2-u12-l7-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'You must to pay before you leave.',
      correctAnswer: 'You must pay before you leave.',
      points: 10,
      explanation: 'Never use "to" after "must". It\'s always "must + base verb".'
    }
  ]
};

const lesson8: Lesson = {
  id: 'a2-u12-l8',
  unitId: 'a2-u12',
  title: 'Mustn\'t - Prohibition',
  description: 'Learn how to use "mustn\'t" to express prohibition',
  order: 8,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l8-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Mustn\'t" is used to express:',
      options: ['prohibition - something is not allowed', 'no obligation', 'inability', 'suggestion'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Mustn\'t" means something is forbidden or not permitted.'
    },
    {
      id: 'a2-u12-l8-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ smoke in the hospital. It\'s forbidden.',
      correctAnswer: 'mustn\'t',
      points: 10,
      explanation: '"Mustn\'t" is used for rules that prohibit something.'
    },
    {
      id: 'a2-u12-l8-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sign might say "You mustn\'t enter"?',
      options: ['No Entry', 'Welcome', 'Exit', 'Open'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Mustn\'t" expresses prohibition - things that are not allowed.'
    },
    {
      id: 'a2-u12-l8-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'No debes correr junto a la piscina.',
      correctAnswer: 'You mustn\'t run by the pool',
      points: 10,
      explanation: '"Mustn\'t" is used for safety rules and prohibitions.'
    },
    {
      id: 'a2-u12-l8-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['you', 'touch', 'mustn\'t', 'paintings', 'the'],
      correctOrder: [0, 2, 1, 4, 3],
      points: 10,
      explanation: 'Structure: Subject + mustn\'t + base verb.'
    },
    {
      id: 'a2-u12-l8-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'Students ___ cheat on exams. It\'s against the rules.',
      correctAnswer: 'mustn\'t',
      points: 10,
      explanation: '"Mustn\'t" expresses strong prohibition.'
    },
    {
      id: 'a2-u12-l8-e7',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Mustn\'t" and "don\'t have to" have the same meaning.',
      correctAnswer: false,
      points: 10,
      explanation: '"Mustn\'t" = prohibited (not allowed). "Don\'t have to" = not necessary (optional).'
    },
    {
      id: 'a2-u12-l8-e8',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ park here. You\'ll get a ticket!',
      options: ['mustn\'t', 'don\'t must', 'must not to', 'not must'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Mustn\'t" warns that something is not allowed.'
    },
    {
      id: 'a2-u12-l8-e9',
      type: 'categorization',
      instruction: 'Classify these sentences',
      categories: ['Prohibition', 'Obligation'],
      items: [
        { text: 'You mustn\'t be late', category: 'Prohibition' },
        { text: 'You must be on time', category: 'Obligation' }
      ],
      points: 10,
      explanation: '"Mustn\'t" always expresses prohibition - something is not allowed.'
    },
    {
      id: 'a2-u12-l8-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'You don\'t must talk during the test.',
      correctAnswer: 'You mustn\'t talk during the test.',
      points: 10,
      explanation: 'The negative is "mustn\'t" or "must not", never "don\'t must".'
    }
  ]
};

const lesson9: Lesson = {
  id: 'a2-u12-l9',
  unitId: 'a2-u12',
  title: 'Have to - Obligation',
  description: 'Learn how to use "have to" for external obligation',
  order: 9,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l9-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Have to" expresses:',
      options: ['external obligation or necessity', 'ability', 'permission', 'possibility'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Have to" shows obligation, often from external circumstances.'
    },
    {
      id: 'a2-u12-l9-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I ___ to work tomorrow. It\'s not a holiday.',
      correctAnswer: 'have',
      points: 10,
      explanation: '"Have to" shows necessity from external circumstances.'
    },
    {
      id: 'a2-u12-l9-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is correct for he/she?',
      options: ['She has to study.', 'She have to study.', 'She has study.', 'She have study.'],
      correctAnswer: 0,
      points: 10,
      explanation: 'With he/she/it, use "has to". With I/you/we/they, use "have to".'
    },
    {
      id: 'a2-u12-l9-e4',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'He ___ to get up early for work.',
      correctAnswer: 'has',
      points: 10,
      explanation: 'Third person singular (he/she/it) uses "has to".'
    },
    {
      id: 'a2-u12-l9-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Tenemos que comprar comida.',
      correctAnswer: 'We have to buy food',
      points: 10,
      explanation: '"Have to" expresses necessity or obligation.'
    },
    {
      id: 'a2-u12-l9-e6',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['she', 'has', 'uniform', 'a', 'wear', 'to'],
      correctOrder: [0, 1, 5, 4, 3, 2],
      points: 10,
      explanation: 'Structure: Subject + have/has + to + base verb.'
    },
    {
      id: 'a2-u12-l9-e7',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'The negative of "I have to go" is:',
      options: ['I don\'t have to go.', 'I haven\'t to go.', 'I have not to go.', 'I mustn\'t go.'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Negative: don\'t/doesn\'t + have to. "Don\'t have to" = not necessary.'
    },
    {
      id: 'a2-u12-l9-e8',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ have to pay. It\'s free!',
      correctAnswer: 'don\'t',
      points: 10,
      explanation: '"Don\'t have to" means something is not necessary.'
    },
    {
      id: 'a2-u12-l9-e9',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Don\'t have to" means the same as "mustn\'t".',
      correctAnswer: false,
      points: 10,
      explanation: '"Don\'t have to" = not necessary. "Mustn\'t" = prohibited. Very different!'
    },
    {
      id: 'a2-u12-l9-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'She has to goes to school.',
      correctAnswer: 'She has to go to school.',
      points: 10,
      explanation: 'After "have to/has to", use the base form: has to + go (not goes).'
    }
  ]
};

const lesson10: Lesson = {
  id: 'a2-u12-l10',
  unitId: 'a2-u12',
  title: 'Must vs Have to',
  description: 'Learn the difference between "must" and "have to"',
  order: 10,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l10-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which shows INTERNAL obligation (from yourself)?',
      options: ['I must study harder.', 'I have to study harder.', 'I can study harder.', 'I should study harder.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Must" often shows personal, internal obligation (your own decision).'
    },
    {
      id: 'a2-u12-l10-e2',
      type: 'categorization',
      instruction: 'Is this internal or external obligation?',
      categories: ['Internal', 'External'],
      items: [
        { text: 'I have to wear a uniform at work.', category: 'External' },
        { text: 'I must remember my mother\'s birthday.', category: 'Internal' }
      ],
      points: 10,
      explanation: '"Have to" often shows external obligation (rules from others). "Must" shows internal obligation.'
    },
    {
      id: 'a2-u12-l10-e3',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I ___ remember to call my mother. (personal decision)',
      correctAnswer: 'must',
      points: 10,
      explanation: '"Must" is used for personal obligation you feel yourself.'
    },
    {
      id: 'a2-u12-l10-e4',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'Employees ___ to clock in by 9 AM. (company rule)',
      correctAnswer: 'have',
      points: 10,
      explanation: '"Have to" is used for external rules and requirements.'
    },
    {
      id: 'a2-u12-l10-e5',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which can be used in the PAST tense?',
      options: ['have to', 'must', 'both equally', 'neither'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For past obligation, use "had to". "Must" doesn\'t have a past form.'
    },
    {
      id: 'a2-u12-l10-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'Yesterday, I ___ to work late. (past)',
      correctAnswer: 'had',
      points: 10,
      explanation: 'Past tense obligation uses "had to".'
    },
    {
      id: 'a2-u12-l10-e7',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'In everyday speech, "must" and "have to" are often:',
      options: ['used interchangeably', 'never used together', 'opposite in meaning', 'only formal'],
      correctAnswer: 0,
      points: 10,
      explanation: 'In daily conversation, the difference is often not strict.'
    },
    {
      id: 'a2-u12-l10-e8',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: 'We say "I musted go yesterday" for past obligation.',
      correctAnswer: false,
      points: 10,
      explanation: '"Must" has no past form. Use "had to": "I had to go yesterday."'
    },
    {
      id: 'a2-u12-l10-e9',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: 'Do you ___ to work on weekends?',
      correctAnswer: 'have',
      points: 10,
      explanation: 'Questions use "Do/Does + subject + have to..."'
    },
    {
      id: 'a2-u12-l10-e10',
      type: 'matching',
      instruction: 'Match the sentences with their type',
      pairs: [
        { left: 'I must stop smoking.', right: 'Personal decision' },
        { left: 'I have to stop at red lights.', right: 'Traffic rule' },
        { left: 'I had to wait an hour.', right: 'Past obligation' }
      ],
      points: 10
    }
  ]
};

const lesson11: Lesson = {
  id: 'a2-u12-l11',
  unitId: 'a2-u12',
  title: 'Introduction to Should',
  description: 'Learn how to use "should" to give advice',
  order: 11,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l11-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Should" is used to express:',
      options: ['advice and recommendations', 'strong obligation', 'ability', 'permission'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Should" gives advice or suggests what is a good idea.'
    },
    {
      id: 'a2-u12-l11-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ eat more vegetables. They\'re good for you.',
      correctAnswer: 'should',
      points: 10,
      explanation: '"Should" gives friendly advice or recommendations.'
    },
    {
      id: 'a2-u12-l11-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence gives advice?',
      options: ['You should see a doctor.', 'You must see a doctor.', 'You can see a doctor.', 'You will see a doctor.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Should" suggests what is a good idea, not a strict obligation.'
    },
    {
      id: 'a2-u12-l11-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Deberías descansar más.',
      correctAnswer: 'You should rest more',
      points: 10,
      explanation: '"Should" gives advice about what is good or better.'
    },
    {
      id: 'a2-u12-l11-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['should', 'you', 'water', 'more', 'drink'],
      correctOrder: [1, 0, 4, 3, 2],
      points: 10,
      explanation: 'Structure: Subject + should + base verb.'
    },
    {
      id: 'a2-u12-l11-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'She ___ study for the exam. It\'s very important.',
      correctAnswer: 'should',
      points: 10,
      explanation: '"Should" recommends a good course of action.'
    },
    {
      id: 'a2-u12-l11-e7',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Should" is weaker than "must" - it\'s advice, not obligation.',
      correctAnswer: true,
      points: 10,
      explanation: '"Should" is softer than "must". Should = advice, must = obligation.'
    },
    {
      id: 'a2-u12-l11-e8',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You look tired. You ___ go to bed early tonight.',
      options: ['should', 'shoulds', 'should to', 'are should'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Should" + base verb for giving advice.'
    },
    {
      id: 'a2-u12-l11-e9',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'They ___ save money for the future.',
      correctAnswer: 'should',
      points: 10,
      explanation: '"Should" suggests what is sensible or advisable.'
    },
    {
      id: 'a2-u12-l11-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'You should to take an umbrella.',
      correctAnswer: 'You should take an umbrella.',
      points: 10,
      explanation: 'Never use "to" after "should". It\'s always "should + base verb".'
    }
  ]
};

const lesson12: Lesson = {
  id: 'a2-u12-l12',
  unitId: 'a2-u12',
  title: 'Shouldn\'t - Negative Advice',
  description: 'Learn how to use "shouldn\'t" to advise against something',
  order: 12,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l12-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: '"Shouldn\'t" is used to:',
      options: ['advise against something', 'prohibit something', 'express inability', 'give permission'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Shouldn\'t" advises that something is not a good idea.'
    },
    {
      id: 'a2-u12-l12-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ eat so much sugar. It\'s bad for your health.',
      correctAnswer: 'shouldn\'t',
      points: 10,
      explanation: '"Shouldn\'t" advises against doing something.'
    },
    {
      id: 'a2-u12-l12-e3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is advice against something?',
      options: ['You shouldn\'t stay up late.', 'You mustn\'t stay up late.', 'You can\'t stay up late.', 'You don\'t stay up late.'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Shouldn\'t" is advice. "Mustn\'t" is prohibition (stronger).'
    },
    {
      id: 'a2-u12-l12-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'No deberías preocuparte tanto.',
      correctAnswer: 'You shouldn\'t worry so much',
      points: 10,
      explanation: '"Shouldn\'t" advises not to do something.'
    },
    {
      id: 'a2-u12-l12-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['shouldn\'t', 'drive', 'you', 'fast', 'so'],
      correctOrder: [2, 0, 1, 4, 3],
      points: 10,
      explanation: 'Structure: Subject + shouldn\'t + base verb.'
    },
    {
      id: 'a2-u12-l12-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'He ___ spend all his money on video games.',
      correctAnswer: 'shouldn\'t',
      points: 10,
      explanation: '"Shouldn\'t" gives advice against unwise actions.'
    },
    {
      id: 'a2-u12-l12-e7',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Shouldn\'t" and "mustn\'t" have the same strength.',
      correctAnswer: false,
      points: 10,
      explanation: '"Shouldn\'t" = advice (softer). "Mustn\'t" = prohibition (stronger).'
    },
    {
      id: 'a2-u12-l12-e8',
      type: 'categorization',
      instruction: 'Is this a rule/prohibition or advice?',
      categories: ['Rule/Prohibition', 'Advice'],
      items: [
        { text: 'You shouldn\'t skip breakfast', category: 'Advice' },
        { text: 'You mustn\'t smoke here', category: 'Rule/Prohibition' }
      ],
      points: 10,
      explanation: '"Shouldn\'t" gives friendly advice, not strict rules.'
    },
    {
      id: 'a2-u12-l12-e9',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ work too hard. You need to relax.',
      options: ['shouldn\'t', 'should not to', 'don\'t should', 'not should'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Shouldn\'t" or "should not" - never "don\'t should".'
    },
    {
      id: 'a2-u12-l12-e10',
      type: 'dialogue-completion',
      instruction: 'Complete the conversation',
      dialogue: [
        { speaker: 'A', text: 'I have a headache.' },
        { speaker: 'B', text: 'You ___ take some medicine and rest.', isBlank: true }
      ],
      options: ['shouldn\'t', 'should', 'mustn\'t', 'can\'t'],
      correctAnswer: 1,
      points: 10,
      explanation: '"Should" gives advice for what to do.'
    }
  ]
};

const lesson13: Lesson = {
  id: 'a2-u12-l13',
  unitId: 'a2-u12',
  title: 'Modal Verbs in Questions',
  description: 'Learn how to form questions with modal verbs',
  order: 13,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l13-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'How do we form questions with modal verbs?',
      options: ['Modal + subject + verb', 'Do + subject + modal', 'Subject + modal + verb?', 'Have + modal + subject'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Questions: Modal verb goes before the subject.'
    },
    {
      id: 'a2-u12-l13-e2',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['should', 'what', 'I', 'do'],
      correctOrder: [1, 0, 2, 3],
      points: 10,
      explanation: 'WH-questions: WH-word + modal + subject + verb?'
    },
    {
      id: 'a2-u12-l13-e3',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ I open the window? It\'s hot in here.',
      correctAnswer: 'Should',
      points: 10,
      explanation: '"Should I...?" asks for advice or offers to do something.'
    },
    {
      id: 'a2-u12-l13-e4',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['must', 'why', 'we', 'wait'],
      correctOrder: [1, 0, 2, 3],
      points: 10,
      explanation: 'WH-questions with "must": Why/What/Where + must + subject + verb?'
    },
    {
      id: 'a2-u12-l13-e5',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ you play any musical instruments?',
      correctAnswer: 'Can',
      points: 10,
      explanation: '"Can you...?" asks about ability.'
    },
    {
      id: 'a2-u12-l13-e6',
      type: 'multiple-choice',
      instruction: 'Select the correct question',
      question: 'Which is a correct question?',
      options: ['Should we leave now?', 'Do we should leave now?', 'We should leave now?', 'Should we to leave now?'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Questions: Modal + subject + base verb (no "do", no "to").'
    },
    {
      id: 'a2-u12-l13-e7',
      type: 'translation',
      instruction: 'Translate to English',
      question: '¿Qué debo hacer?',
      correctAnswer: 'What should I do',
      points: 10,
      explanation: 'Asking for advice: What should + subject + verb?'
    },
    {
      id: 'a2-u12-l13-e8',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['could', 'how', 'you', 'this', 'do'],
      correctOrder: [1, 0, 2, 4, 3],
      points: 10,
      explanation: 'WH-word + modal + subject + verb + object.'
    },
    {
      id: 'a2-u12-l13-e9',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: 'Where ___ I find the library?',
      correctAnswer: 'can',
      points: 10,
      explanation: '"Where can I...?" asks for directions or locations.'
    },
    {
      id: 'a2-u12-l13-e10',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'Do you must finish today?',
      correctAnswer: 'Must you finish today?',
      points: 10,
      explanation: 'Never use "do/does" with modal verbs. Modal goes first in questions.'
    }
  ]
};

const lesson14: Lesson = {
  id: 'a2-u12-l14',
  unitId: 'a2-u12',
  title: 'Comparing Modal Verbs',
  description: 'Learn the differences between modal verbs',
  order: 14,
  xpReward: 20,
  exercises: [
    {
      id: 'a2-u12-l14-e1',
      type: 'matching',
      instruction: 'Match the modal verb with its main use',
      pairs: [
        { left: 'can', right: 'ability, permission' },
        { left: 'must', right: 'strong obligation' },
        { left: 'should', right: 'advice' },
        { left: 'could', right: 'polite request, past ability' }
      ],
      points: 10
    },
    {
      id: 'a2-u12-l14-e2',
      type: 'categorization',
      instruction: 'Rank from strongest to weakest obligation',
      categories: ['Strongest', 'Medium', 'Weakest'],
      items: [
        { text: 'must', category: 'Strongest' },
        { text: 'should', category: 'Medium' },
        { text: 'can', category: 'Weakest' }
      ],
      points: 10,
      explanation: 'Must = obligation, Should = advice, Can = ability/permission.'
    },
    {
      id: 'a2-u12-l14-e3',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'I ___ swim. (ability)',
      options: ['can', 'must', 'should', 'have to'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can" is used for ability - what you are able to do.'
    },
    {
      id: 'a2-u12-l14-e4',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ drive without a license. (prohibition)',
      options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'don\'t have to'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Mustn\'t" is used for prohibition - things that are not allowed.'
    },
    {
      id: 'a2-u12-l14-e5',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ try this cake. It\'s delicious! (advice)',
      options: ['should', 'must', 'can', 'have to'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Should" gives advice - it\'s a recommendation.'
    },
    {
      id: 'a2-u12-l14-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I ___ to go to the dentist. I have an appointment. (external obligation)',
      correctAnswer: 'have',
      points: 10,
      explanation: '"Have to" shows external obligation (appointments, rules).'
    },
    {
      id: 'a2-u12-l14-e7',
      type: 'multiple-choice',
      instruction: 'Complete the question',
      question: '___ you help me with this? (polite request)',
      options: ['Could', 'Must', 'Should', 'Have to'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Could you...?" is more polite than "Can you...?"'
    },
    {
      id: 'a2-u12-l14-e8',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ come if you don\'t want to. (no obligation)',
      correctAnswer: 'don\'t have to',
      points: 10,
      explanation: '"Don\'t have to" means something is not necessary.'
    },
    {
      id: 'a2-u12-l14-e9',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"Mustn\'t" and "don\'t have to" mean the same thing.',
      correctAnswer: false,
      points: 10,
      explanation: '"Mustn\'t" = prohibited. "Don\'t have to" = not necessary. Very different!'
    },
    {
      id: 'a2-u12-l14-e10',
      type: 'context-completion',
      instruction: 'Complete the conversation',
      context: 'Doctor: "You ___ (advice) stop smoking." Patient: "I know, but I ___ (inability)."',
      options: ['should / can\'t', 'must / shouldn\'t', 'can / mustn\'t'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Should = advice from doctor. Can\'t = inability of patient.'
    }
  ]
};

const lesson15: Lesson = {
  id: 'a2-u12-l15',
  unitId: 'a2-u12',
  title: 'Modal Verbs Review',
  description: 'Review all modal verbs learned in this unit',
  order: 15,
  xpReward: 30,
  exercises: [
    {
      id: 'a2-u12-l15-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which modal verb NEVER changes form?',
      options: ['All of them', 'Only can', 'Only must', 'Only should'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Modal verbs (can, could, must, should) never change: he can, she must, they should.'
    },
    {
      id: 'a2-u12-l15-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I ___ speak English, Spanish, and French. (ability)',
      correctAnswer: 'can',
      points: 10,
      explanation: '"Can" expresses ability - languages you speak.'
    },
    {
      id: 'a2-u12-l15-e3',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ be quiet in the library. (rule)',
      correctAnswer: 'must',
      points: 10,
      explanation: '"Must" is used for rules and strong obligations.'
    },
    {
      id: 'a2-u12-l15-e4',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ eat more fruit. It\'s healthy. (advice)',
      correctAnswer: 'should',
      points: 10,
      explanation: '"Should" gives advice and recommendations.'
    },
    {
      id: 'a2-u12-l15-e5',
      type: 'fill-blank',
      instruction: 'Complete the question',
      question: '___ you please repeat that? (polite request)',
      correctAnswer: 'Could',
      points: 10,
      explanation: '"Could you please...?" is a polite way to ask.'
    },
    {
      id: 'a2-u12-l15-e6',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'You ___ park here. (prohibition - sign says "No Parking")',
      options: ['mustn\'t', 'shouldn\'t', 'don\'t have to', 'can'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Mustn\'t" shows prohibition - it\'s not allowed.'
    },
    {
      id: 'a2-u12-l15-e7',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'When I was young, I ___ run very fast. (past ability)',
      correctAnswer: 'could',
      points: 10,
      explanation: '"Could" is the past form of "can" for abilities.'
    },
    {
      id: 'a2-u12-l15-e8',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'You ___ have to work tomorrow. It\'s a holiday!',
      correctAnswer: 'don\'t',
      points: 10,
      explanation: '"Don\'t have to" = not necessary (you have a choice).'
    },
    {
      id: 'a2-u12-l15-e9',
      type: 'error-correction',
      instruction: 'Find and correct the error',
      sentence: 'She cans play the piano very well.',
      correctAnswer: 'She can play the piano very well.',
      points: 10,
      explanation: 'Modal verbs never take "s" - always "can", never "cans".'
    },
    {
      id: 'a2-u12-l15-e10',
      type: 'dialogue-completion',
      instruction: 'Complete the conversation',
      dialogue: [
        { speaker: 'A', text: '___ I use your phone?', isBlank: true },
        { speaker: 'B', text: 'Of course, you can.' }
      ],
      options: ['Can', 'Do', 'Am', 'Must'],
      correctAnswer: 0,
      points: 10,
      explanation: '"Can I...?" asks permission. "You can" gives permission.'
    },
    {
      id: 'a2-u12-l15-e11',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'No deberías comer tan rápido.',
      correctAnswer: 'You shouldn\'t eat so fast',
      points: 10,
      explanation: '"Shouldn\'t" gives advice against doing something.'
    },
    {
      id: 'a2-u12-l15-e12',
      type: 'multiple-choice',
      instruction: 'Complete the sentence',
      question: 'I ___ go to the meeting yesterday. (past obligation)',
      options: ['had to', 'must', 'have to', 'musted'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For past obligation, use "had to" (must has no past form).'
    },
    {
      id: 'a2-u12-l15-e13',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['what', 'should', 'do', 'we', 'now'],
      correctOrder: [0, 1, 3, 2, 4],
      points: 10,
      explanation: 'WH-questions: WH-word + modal + subject + verb.'
    },
    {
      id: 'a2-u12-l15-e14',
      type: 'categorization',
      instruction: 'What does this show?',
      categories: ['Ability', 'Advice', 'Obligation', 'Permission'],
      items: [
        { text: 'You must wear a helmet', category: 'Obligation' },
        { text: 'You should rest', category: 'Advice' },
        { text: 'I can swim', category: 'Ability' },
        { text: 'You can leave', category: 'Permission' }
      ],
      points: 10,
      explanation: '"Must" expresses obligation - something necessary or required.'
    },
    {
      id: 'a2-u12-l15-e15',
      type: 'matching',
      instruction: 'Match the situation with the correct modal',
      pairs: [
        { left: 'Giving health advice', right: 'should' },
        { left: 'Talking about a law', right: 'must' },
        { left: 'Asking politely', right: 'could' },
        { left: 'Expressing ability', right: 'can' }
      ],
      points: 10
    }
  ]
};

export const unit12: Unit = {
  id: 'a2-u12',
  levelId: 'a2',
  title: 'Modal Verbs: Basic',
  description: 'Learn to use can, could, must, have to, and should',
  icon: '🔧',
  order: 12,
  totalLessons: 15,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    lesson9,
    lesson10,
    lesson11,
    lesson12,
    lesson13,
    lesson14,
    lesson15
  ]
};
