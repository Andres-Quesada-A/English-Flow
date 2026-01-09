import { Unit } from '@/lib/types';

export const unit11: Unit = {
  id: 'b1-u11',
  levelId: 'b1',
  title: 'Phrasal Verbs',
  description: 'Master common phrasal verbs used in everyday English',
  order: 11,
  totalLessons: 15,
  icon: '🧩',
  lessons: [
    {
      id: 'b1-u11-l1',
      unitId: 'b1-u11',
      title: 'Introduction to phrasal verbs',
      description: 'Learn what phrasal verbs are and how they work in English',
      order: 1,
      xpReward: 20,
      grammarPoint: 'A phrasal verb is a combination of a verb and a preposition or adverb (or both) that creates a new meaning different from the original verb.',
      vocabularyWords: ['look up', 'give up', 'turn on', 'turn off', 'pick up', 'put down', 'take off', 'bring back'],
      exercises: [
        {
          id: 'b1-u11-l1-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning of the phrasal verb.',
          question: 'What does "turn on" mean?',
          options: [
            'To switch off',
            'To start or activate',
            'To rotate',
            'To reject'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l1-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning of the phrasal verb.',
          question: 'What does "give up" mean?',
          options: [
            'To continue',
            'To donate',
            'To stop trying',
            'To lift'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l1-e3',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I need to ___ this word in the dictionary.',
          correctAnswer: 'look up',
          acceptableAnswers: ['look up'],
          points: 10
        },
        {
          id: 'b1-u11-l1-e4',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'turn on', right: 'start a device' },
            { left: 'turn off', right: 'stop a device' },
            { left: 'pick up', right: 'collect or lift' },
            { left: 'put down', right: 'place something' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l1-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'A phrasal verb is a verb combined with a preposition or adverb that creates a new meaning.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l1-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb to complete the sentence.',
          question: 'Please ___ your shoes before entering.',
          options: [
            'take off',
            'take on',
            'take in',
            'take up'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u11-l1-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Can you ___ me ___ at the airport tomorrow?',
          correctAnswer: 'pick up',
          acceptableAnswers: ['pick up', 'pick me up'],
          points: 10
        },
        {
          id: 'b1-u11-l1-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['I', 'gave', 'up', 'smoking', 'last', 'year'],
          correctOrder: [0, 1, 2, 3, 4, 5],
          points: 10
        },
        {
          id: 'b1-u11-l1-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'Please turn the light on off when you leave.',
          correctAnswer: 'Please turn the light off when you leave.',
          points: 10
        },
        {
          id: 'b1-u11-l1-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Necesito buscar esta información.',
          correctAnswer: 'I need to look up this information.',
          acceptableAnswers: ['I need to look this information up.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l2',
      unitId: 'b1-u11',
      title: 'Separable vs inseparable',
      description: 'Understand which phrasal verbs can be separated and which cannot',
      order: 2,
      xpReward: 20,
      grammarPoint: 'Separable phrasal verbs can have an object between the verb and particle (turn it on). Inseparable phrasal verbs keep the verb and particle together (look after someone).',
      vocabularyWords: ['turn on/off (separable)', 'look after (inseparable)', 'put on (separable)', 'look for (inseparable)', 'call off (separable)', 'run into (inseparable)', 'fill out (separable)', 'get over (inseparable)'],
      exercises: [
        {
          id: 'b1-u11-l2-e1',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'The phrasal verb "look after" can be separated (e.g., "look the children after").',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u11-l2-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            'She turned the TV on.',
            'She turned on the TV.',
            'Both are correct',
            'Neither is correct'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l2-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            'I ran my old teacher into.',
            'I ran into my old teacher.',
            'Both are correct',
            'Neither is correct'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l2-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence correctly.',
          question: 'Please fill ___ this form.',
          correctAnswer: 'out',
          acceptableAnswers: ['out'],
          points: 10
        },
        {
          id: 'b1-u11-l2-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She looks the children after every weekend.',
          correctAnswer: 'She looks after the children every weekend.',
          points: 10
        },
        {
          id: 'b1-u11-l2-e6',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their type.',
          pairs: [
            { left: 'turn on', right: 'separable' },
            { left: 'look after', right: 'inseparable' },
            { left: 'put on', right: 'separable' },
            { left: 'run into', right: 'inseparable' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l2-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence with a pronoun object.',
          question: 'Which is correct when using "it" with "turn on"?',
          options: [
            'Turn on it.',
            'Turn it on.',
            'Both are correct',
            'Neither is correct'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l2-e8',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form.',
          question: 'They called ___ the meeting.',
          correctAnswer: 'off',
          acceptableAnswers: ['off'],
          points: 10
        },
        {
          id: 'b1-u11-l2-e9',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['She', 'is', 'looking', 'for', 'her', 'keys'],
          correctOrder: [0, 1, 2, 3, 4, 5],
          points: 10
        },
        {
          id: 'b1-u11-l2-e10',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'When the object is a pronoun, separable phrasal verbs MUST be separated.',
          correctAnswer: true,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l3',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with GET',
      description: 'Master common phrasal verbs using the verb GET',
      order: 3,
      xpReward: 20,
      grammarPoint: 'GET is one of the most common verbs in phrasal verbs. It combines with many particles to create different meanings.',
      vocabularyWords: ['get up', 'get on', 'get off', 'get over', 'get along', 'get through', 'get back', 'get away'],
      exercises: [
        {
          id: 'b1-u11-l3-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "get up" mean?',
          options: [
            'To go to sleep',
            'To rise from bed',
            'To climb',
            'To understand'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l3-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I usually ___ at 7 AM.',
          correctAnswer: 'get up',
          acceptableAnswers: ['get up'],
          points: 10
        },
        {
          id: 'b1-u11-l3-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'get on', right: 'enter transport' },
            { left: 'get off', right: 'leave transport' },
            { left: 'get over', right: 'recover from' },
            { left: 'get away', right: 'escape' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l3-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'She needs time to ___ her cold.',
          options: [
            'get up',
            'get on',
            'get over',
            'get away'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l3-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Do you ___ well with your neighbors?',
          correctAnswer: 'get along',
          acceptableAnswers: ['get along', 'get on'],
          points: 10
        },
        {
          id: 'b1-u11-l3-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Get on" can mean both to enter transport and to have a good relationship.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l3-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['We', 'need', 'to', 'get', 'through', 'this', 'together'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l3-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'I ___ the bus at the next stop.',
          options: [
            'get on',
            'get off',
            'get up',
            'get back'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l3-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'I need to get back to home before 10 PM.',
          correctAnswer: 'I need to get back home before 10 PM.',
          points: 10
        },
        {
          id: 'b1-u11-l3-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Me llevo bien con mis compañeros de trabajo.',
          correctAnswer: 'I get along with my coworkers.',
          acceptableAnswers: ['I get on with my coworkers.', 'I get along well with my coworkers.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l4',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with TAKE',
      description: 'Learn phrasal verbs formed with the verb TAKE',
      order: 4,
      xpReward: 20,
      grammarPoint: 'TAKE combines with different particles to express actions related to removing, accepting, understanding, and beginning.',
      vocabularyWords: ['take off', 'take on', 'take up', 'take back', 'take out', 'take after', 'take away', 'take down'],
      exercises: [
        {
          id: 'b1-u11-l4-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "take off" mean when talking about a plane?',
          options: [
            'To land',
            'To depart/leave the ground',
            'To crash',
            'To board'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l4-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'He ___ his jacket because it was hot.',
          correctAnswer: 'took off',
          acceptableAnswers: ['took off'],
          points: 10
        },
        {
          id: 'b1-u11-l4-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'take on', right: 'accept responsibility' },
            { left: 'take up', right: 'start a hobby' },
            { left: 'take after', right: 'resemble family' },
            { left: 'take back', right: 'return something' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l4-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'She ___ yoga last year.',
          options: [
            'took off',
            'took on',
            'took up',
            'took down'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l4-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'You really ___ your mother; you look just like her.',
          correctAnswer: 'take after',
          acceptableAnswers: ['take after'],
          points: 10
        },
        {
          id: 'b1-u11-l4-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Take on" can mean to accept new responsibilities or work.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l4-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['The', 'plane', 'took', 'off', 'on', 'time'],
          correctOrder: [0, 1, 2, 3, 4, 5],
          points: 10
        },
        {
          id: 'b1-u11-l4-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'Please ___ this information; it is important.',
          options: [
            'take down',
            'take off',
            'take up',
            'take after'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u11-l4-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'He took the project on too many at once.',
          correctAnswer: 'He took on too many projects at once.',
          points: 10
        },
        {
          id: 'b1-u11-l4-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Ella se parece a su padre.',
          correctAnswer: 'She takes after her father.',
          acceptableAnswers: ['She takes after her dad.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l5',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with LOOK',
      description: 'Explore phrasal verbs using the verb LOOK',
      order: 5,
      xpReward: 20,
      grammarPoint: 'LOOK combines with particles to express various ways of seeing, searching, and examining.',
      vocabularyWords: ['look after', 'look for', 'look up', 'look forward to', 'look into', 'look out', 'look up to', 'look down on'],
      exercises: [
        {
          id: 'b1-u11-l5-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "look after" mean?',
          options: [
            'To search for',
            'To take care of',
            'To investigate',
            'To admire'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l5-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I am ___ my keys. Have you seen them?',
          correctAnswer: 'looking for',
          acceptableAnswers: ['looking for'],
          points: 10
        },
        {
          id: 'b1-u11-l5-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'look up', right: 'search for information' },
            { left: 'look into', right: 'investigate' },
            { left: 'look forward to', right: 'anticipate with pleasure' },
            { left: 'look up to', right: 'admire' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l5-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'I really ___ my older brother.',
          options: [
            'look after',
            'look for',
            'look up to',
            'look down on'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l5-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I am really ___ to the vacation.',
          correctAnswer: 'looking forward',
          acceptableAnswers: ['looking forward'],
          points: 10
        },
        {
          id: 'b1-u11-l5-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Look into" means to investigate or examine something carefully.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l5-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['Can', 'you', 'look', 'after', 'my', 'dog', 'tomorrow'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l5-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'You should ___ this word in the dictionary.',
          options: [
            'look after',
            'look for',
            'look up',
            'look into'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l5-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She is looking forward the party.',
          correctAnswer: 'She is looking forward to the party.',
          points: 10
        },
        {
          id: 'b1-u11-l5-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Cuido a mi hermana pequeña los fines de semana.',
          correctAnswer: 'I look after my little sister on weekends.',
          acceptableAnswers: ['I look after my younger sister on weekends.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l6',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with TURN',
      description: 'Learn common phrasal verbs with the verb TURN',
      order: 6,
      xpReward: 20,
      grammarPoint: 'TURN combines with particles to express rotation, activation, rejection, and transformation.',
      vocabularyWords: ['turn on', 'turn off', 'turn up', 'turn down', 'turn into', 'turn out', 'turn around', 'turn back'],
      exercises: [
        {
          id: 'b1-u11-l6-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "turn down" mean when talking about an offer?',
          options: [
            'To accept',
            'To reject',
            'To consider',
            'To negotiate'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l6-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Please ___ the TV ___; it is too loud.',
          correctAnswer: 'turn down',
          acceptableAnswers: ['turn down'],
          points: 10
        },
        {
          id: 'b1-u11-l6-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'turn on', right: 'activate' },
            { left: 'turn off', right: 'deactivate' },
            { left: 'turn into', right: 'transform' },
            { left: 'turn out', right: 'result' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l6-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'The caterpillar will ___ a butterfly.',
          options: [
            'turn on',
            'turn off',
            'turn into',
            'turn down'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l6-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'The party ___ to be a great success.',
          correctAnswer: 'turned out',
          acceptableAnswers: ['turned out'],
          points: 10
        },
        {
          id: 'b1-u11-l6-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Turn up" can mean both to increase volume and to arrive somewhere.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l6-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['Please', 'turn', 'off', 'the', 'lights'],
          correctOrder: [0, 1, 2, 3, 4],
          points: 10
        },
        {
          id: 'b1-u11-l6-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'He ___ the job offer because the salary was too low.',
          options: [
            'turned on',
            'turned down',
            'turned up',
            'turned into'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l6-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'Can you turn the music up down a bit?',
          correctAnswer: 'Can you turn the music down a bit?',
          points: 10
        },
        {
          id: 'b1-u11-l6-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Por favor enciende la luz.',
          correctAnswer: 'Please turn on the light.',
          acceptableAnswers: ['Please turn the light on.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l7',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with PUT',
      description: 'Master phrasal verbs formed with the verb PUT',
      order: 7,
      xpReward: 20,
      grammarPoint: 'PUT combines with particles to express actions related to placing, postponing, tolerating, and extinguishing.',
      vocabularyWords: ['put on', 'put off', 'put up', 'put down', 'put away', 'put out', 'put up with', 'put forward'],
      exercises: [
        {
          id: 'b1-u11-l7-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "put off" mean?',
          options: [
            'To wear',
            'To postpone',
            'To extinguish',
            'To tolerate'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l7-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'It is cold outside, so ___ your jacket.',
          correctAnswer: 'put on',
          acceptableAnswers: ['put on'],
          points: 10
        },
        {
          id: 'b1-u11-l7-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'put off', right: 'postpone' },
            { left: 'put out', right: 'extinguish' },
            { left: 'put up with', right: 'tolerate' },
            { left: 'put away', right: 'store' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l7-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'The firefighters ___ the fire quickly.',
          options: [
            'put on',
            'put off',
            'put out',
            'put away'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l7-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I cannot ___ his rude behavior anymore.',
          correctAnswer: 'put up with',
          acceptableAnswers: ['put up with'],
          points: 10
        },
        {
          id: 'b1-u11-l7-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Put up" can mean to accommodate someone or to display something.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l7-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['We', 'decided', 'to', 'put', 'off', 'the', 'meeting'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l7-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'Please ___ your toys when you finish playing.',
          options: [
            'put on',
            'put away',
            'put out',
            'put off'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l7-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She put her idea forward on the meeting.',
          correctAnswer: 'She put her idea forward at the meeting.',
          points: 10
        },
        {
          id: 'b1-u11-l7-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Pospusimos la reunión hasta el próximo lunes.',
          correctAnswer: 'We put off the meeting until next Monday.',
          acceptableAnswers: ['We put the meeting off until next Monday.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l8',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with GIVE',
      description: 'Learn phrasal verbs using the verb GIVE',
      order: 8,
      xpReward: 20,
      grammarPoint: 'GIVE combines with particles to express actions related to surrendering, distributing, and returning.',
      vocabularyWords: ['give up', 'give in', 'give away', 'give back', 'give out', 'give off', 'give up on', 'give over to'],
      exercises: [
        {
          id: 'b1-u11-l8-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "give up" mean?',
          options: [
            'To continue',
            'To stop trying',
            'To distribute',
            'To return'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l8-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Do not ___ on your dreams!',
          correctAnswer: 'give up',
          acceptableAnswers: ['give up'],
          points: 10
        },
        {
          id: 'b1-u11-l8-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'give away', right: 'donate' },
            { left: 'give back', right: 'return' },
            { left: 'give out', right: 'distribute' },
            { left: 'give in', right: 'surrender' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l8-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'She ___ all her old clothes to charity.',
          options: [
            'gave up',
            'gave in',
            'gave away',
            'gave back'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l8-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Please ___ my book when you finish reading it.',
          correctAnswer: 'give back',
          acceptableAnswers: ['give back', 'give it back'],
          points: 10
        },
        {
          id: 'b1-u11-l8-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Give in" means to surrender or yield to pressure or demands.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l8-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['I', 'never', 'give', 'up', 'easily'],
          correctOrder: [0, 1, 2, 3, 4],
          points: 10
        },
        {
          id: 'b1-u11-l8-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'The teacher ___ the exam papers to the students.',
          options: [
            'gave up',
            'gave out',
            'gave away',
            'gave off'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l8-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'He finally gave in up smoking.',
          correctAnswer: 'He finally gave up smoking.',
          points: 10
        },
        {
          id: 'b1-u11-l8-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'No te rindas, lo estás haciendo bien.',
          correctAnswer: 'Do not give up, you are doing well.',
          acceptableAnswers: ["Don't give up, you're doing well.", "Don't give up, you are doing great."],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l9',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with COME',
      description: 'Explore phrasal verbs formed with the verb COME',
      order: 9,
      xpReward: 20,
      grammarPoint: 'COME combines with particles to express movement, occurrence, discovery, and recovery.',
      vocabularyWords: ['come back', 'come in', 'come out', 'come up', 'come across', 'come up with', 'come down with', 'come along'],
      exercises: [
        {
          id: 'b1-u11-l9-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "come up with" mean?',
          options: [
            'To return',
            'To think of an idea',
            'To become ill',
            'To find by chance'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l9-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'When will you ___ from your trip?',
          correctAnswer: 'come back',
          acceptableAnswers: ['come back'],
          points: 10
        },
        {
          id: 'b1-u11-l9-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'come in', right: 'enter' },
            { left: 'come out', right: 'be published' },
            { left: 'come across', right: 'find by chance' },
            { left: 'come along', right: 'progress' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l9-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'I ___ an old photo while cleaning my room.',
          options: [
            'came back',
            'came in',
            'came across',
            'came up'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l9-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'She ___ a great solution to the problem.',
          correctAnswer: 'came up with',
          acceptableAnswers: ['came up with'],
          points: 10
        },
        {
          id: 'b1-u11-l9-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Come down with" means to become ill with a disease.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l9-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['The', 'new', 'book', 'comes', 'out', 'next', 'month'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l9-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'Several issues ___ during the meeting.',
          options: [
            'came back',
            'came up',
            'came in',
            'came out'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l9-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'I came down to a cold last week.',
          correctAnswer: 'I came down with a cold last week.',
          points: 10
        },
        {
          id: 'b1-u11-l9-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Necesitamos encontrar una solución.',
          correctAnswer: 'We need to come up with a solution.',
          acceptableAnswers: ['We need to think of a solution.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l10',
      unitId: 'b1-u11',
      title: 'Phrasal verbs with GO',
      description: 'Master phrasal verbs using the verb GO',
      order: 10,
      xpReward: 20,
      grammarPoint: 'GO combines with particles to express movement, continuation, examination, and various states of being.',
      vocabularyWords: ['go on', 'go out', 'go over', 'go through', 'go back', 'go off', 'go up', 'go down'],
      exercises: [
        {
          id: 'b1-u11-l10-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "go over" mean?',
          options: [
            'To continue',
            'To review',
            'To return',
            'To decrease'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l10-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Let us ___ these notes before the exam.',
          correctAnswer: 'go over',
          acceptableAnswers: ['go over'],
          points: 10
        },
        {
          id: 'b1-u11-l10-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'go on', right: 'continue' },
            { left: 'go out', right: 'leave for social activity' },
            { left: 'go through', right: 'experience' },
            { left: 'go back', right: 'return' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l10-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'The alarm clock ___ at 6 AM.',
          options: [
            'went on',
            'went out',
            'went off',
            'went over'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l10-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'She has ___ a lot of difficult times.',
          correctAnswer: 'gone through',
          acceptableAnswers: ['gone through'],
          points: 10
        },
        {
          id: 'b1-u11-l10-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Go up" means to increase in price, level, or amount.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l10-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['Prices', 'have', 'gone', 'up', 'this', 'year'],
          correctOrder: [0, 1, 2, 3, 4, 5],
          points: 10
        },
        {
          id: 'b1-u11-l10-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'Do you want to ___ for dinner tonight?',
          options: [
            'go on',
            'go out',
            'go over',
            'go back'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l10-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'The meeting went on for three hours long.',
          correctAnswer: 'The meeting went on for three hours.',
          points: 10
        },
        {
          id: 'b1-u11-l10-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Volvamos a revisar el plan.',
          correctAnswer: 'Let us go over the plan again.',
          acceptableAnswers: ["Let's go over the plan again.", 'Let us review the plan again.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l11',
      unitId: 'b1-u11',
      title: 'Three-word phrasal verbs',
      description: 'Learn phrasal verbs with three words (verb + two particles)',
      order: 11,
      xpReward: 20,
      grammarPoint: 'Three-word phrasal verbs consist of a verb plus two particles. They are always inseparable and usually informal.',
      vocabularyWords: ['look forward to', 'put up with', 'come up with', 'get along with', 'run out of', 'look up to', 'look down on', 'get away with'],
      exercises: [
        {
          id: 'b1-u11-l11-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "run out of" mean?',
          options: [
            'To escape from',
            'To exhaust the supply',
            'To think of',
            'To tolerate'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l11-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'We have ___ milk. Can you buy some?',
          correctAnswer: 'run out of',
          acceptableAnswers: ['run out of'],
          points: 10
        },
        {
          id: 'b1-u11-l11-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'put up with', right: 'tolerate' },
            { left: 'come up with', right: 'think of' },
            { left: 'look up to', right: 'admire' },
            { left: 'get along with', right: 'have good relationship' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l11-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'I cannot ___ his constant complaining.',
          options: [
            'look forward to',
            'put up with',
            'come up with',
            'run out of'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l11-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I am really ___ the weekend.',
          correctAnswer: 'looking forward to',
          acceptableAnswers: ['looking forward to'],
          points: 10
        },
        {
          id: 'b1-u11-l11-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'Three-word phrasal verbs are always inseparable.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l11-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['Do', 'you', 'get', 'along', 'with', 'your', 'boss'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l11-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'He ___ a brilliant solution to the problem.',
          options: [
            'looked forward to',
            'ran out of',
            'came up with',
            'looked down on'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l11-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'I look up my older sister to.',
          correctAnswer: 'I look up to my older sister.',
          points: 10
        },
        {
          id: 'b1-u11-l11-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Se nos acabó el tiempo.',
          correctAnswer: 'We ran out of time.',
          acceptableAnswers: ['We have run out of time.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l12',
      unitId: 'b1-u11',
      title: 'Phrasal verbs in context: daily life',
      description: 'Practice using phrasal verbs in everyday situations',
      order: 12,
      xpReward: 20,
      grammarPoint: 'Phrasal verbs are extremely common in everyday English conversation. Learning them in context helps you use them naturally.',
      vocabularyWords: ['wake up', 'get up', 'get dressed', 'tidy up', 'hang out', 'chill out', 'clean up', 'work out'],
      exercises: [
        {
          id: 'b1-u11-l12-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb for this daily routine.',
          question: 'I usually ___ at 7 AM every morning.',
          options: [
            'wake up',
            'give up',
            'put on',
            'turn on'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u11-l12-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'After breakfast, I need to ___ the kitchen.',
          correctAnswer: 'clean up',
          acceptableAnswers: ['clean up', 'tidy up'],
          points: 10
        },
        {
          id: 'b1-u11-l12-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their daily life contexts.',
          pairs: [
            { left: 'wake up', right: 'in the morning' },
            { left: 'work out', right: 'at the gym' },
            { left: 'hang out', right: 'with friends' },
            { left: 'chill out', right: 'after work' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l12-e4',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['I', 'like', 'to', 'hang', 'out', 'with', 'friends'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l12-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'I ___ at the gym three times a week.',
          correctAnswer: 'work out',
          acceptableAnswers: ['work out'],
          points: 10
        },
        {
          id: 'b1-u11-l12-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'After school, we like to ___ at the mall.',
          options: [
            'give up',
            'hang out',
            'put off',
            'turn down'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l12-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'I need to tidy the room up my before guests arrive.',
          correctAnswer: 'I need to tidy up my room before guests arrive.',
          points: 10
        },
        {
          id: 'b1-u11-l12-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Chill out" is an informal way to say "relax".',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l12-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'On weekends, I just want to ___ and watch movies.',
          options: [
            'work out',
            'chill out',
            'run out',
            'come out'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l12-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Me levanto, me visto y desayuno.',
          correctAnswer: 'I get up, get dressed, and have breakfast.',
          acceptableAnswers: ['I get up, get dressed, and eat breakfast.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l13',
      unitId: 'b1-u11',
      title: 'Phrasal verbs in context: work',
      description: 'Learn phrasal verbs commonly used in professional settings',
      order: 13,
      xpReward: 20,
      grammarPoint: 'Many phrasal verbs are used in business and professional contexts. Understanding them is essential for workplace communication.',
      vocabularyWords: ['carry out', 'hand in', 'take on', 'deal with', 'call off', 'set up', 'bring up', 'work on'],
      exercises: [
        {
          id: 'b1-u11-l13-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct meaning.',
          question: 'What does "carry out" mean in a work context?',
          options: [
            'To transport outside',
            'To complete or execute',
            'To cancel',
            'To submit'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l13-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Please ___ your report by Friday.',
          correctAnswer: 'hand in',
          acceptableAnswers: ['hand in', 'submit'],
          points: 10
        },
        {
          id: 'b1-u11-l13-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their work-related meanings.',
          pairs: [
            { left: 'set up', right: 'arrange' },
            { left: 'deal with', right: 'handle' },
            { left: 'call off', right: 'cancel' },
            { left: 'take on', right: 'accept' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l13-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'We need to ___ a meeting for next Tuesday.',
          options: [
            'set up',
            'give up',
            'run out',
            'come across'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u11-l13-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'She is very good at ___ difficult clients.',
          correctAnswer: 'dealing with',
          acceptableAnswers: ['dealing with'],
          points: 10
        },
        {
          id: 'b1-u11-l13-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: '"Bring up" in a meeting means to mention or raise a topic for discussion.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l13-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['I', 'am', 'working', 'on', 'a', 'new', 'project'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l13-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'Unfortunately, we have to ___ the conference.',
          options: [
            'take on',
            'call off',
            'hand in',
            'work on'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l13-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She brought the issue up in the meeting.',
          correctAnswer: 'She brought up the issue in the meeting.',
          points: 10
        },
        {
          id: 'b1-u11-l13-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Necesitamos llevar a cabo la investigación pronto.',
          correctAnswer: 'We need to carry out the research soon.',
          acceptableAnswers: ['We need to carry the research out soon.'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l14',
      unitId: 'b1-u11',
      title: 'Common mistakes',
      description: 'Learn to avoid typical errors when using phrasal verbs',
      order: 14,
      xpReward: 20,
      grammarPoint: 'Common mistakes include: separating inseparable phrasal verbs, using wrong particles, literal translations from other languages, and incorrect word order with pronouns.',
      vocabularyWords: ['depend on (not "depend of")', 'listen to (not "listen")', 'wait for (not "wait")', 'agree with (not "agree to" a person)', 'arrive at/in (not "arrive to")', 'look for (not "look")', 'belong to (not "belong")', 'consist of (not "consist")'],
      exercises: [
        {
          id: 'b1-u11-l14-e1',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'I am waiting you at the station.',
          correctAnswer: 'I am waiting for you at the station.',
          points: 10
        },
        {
          id: 'b1-u11-l14-e2',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'It depends of the weather.',
          correctAnswer: 'It depends on the weather.',
          points: 10
        },
        {
          id: 'b1-u11-l14-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            'I am looking my keys.',
            'I am looking for my keys.',
            'I am looking to my keys.',
            'I am looking at my keys for.'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l14-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'We arrived to London yesterday.',
          correctAnswer: 'We arrived in London yesterday.',
          points: 10
        },
        {
          id: 'b1-u11-l14-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'The correct form is "listen to music," not "listen music."',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l14-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which is correct when using a pronoun?',
          options: [
            'Turn on it.',
            'Turn it on.',
            'Both are correct',
            'Neither is correct'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u11-l14-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'This book belongs me.',
          correctAnswer: 'This book belongs to me.',
          points: 10
        },
        {
          id: 'b1-u11-l14-e8',
          type: 'fill-blank',
          instruction: 'Complete with the correct preposition.',
          question: 'I do not agree ___ you on this matter.',
          correctAnswer: 'with',
          acceptableAnswers: ['with'],
          points: 10
        },
        {
          id: 'b1-u11-l14-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'The team consists from five members.',
          correctAnswer: 'The team consists of five members.',
          points: 10
        },
        {
          id: 'b1-u11-l14-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            'She looks her children after.',
            'She looks after her children.',
            'Both are correct',
            'Neither is correct'
          ],
          correctAnswer: 1,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u11-l15',
      unitId: 'b1-u11',
      title: 'Comprehensive review',
      description: 'Review all phrasal verbs learned in this unit',
      order: 15,
      xpReward: 20,
      grammarPoint: 'This lesson reviews all the phrasal verbs and concepts covered in Unit 11. Practice using them correctly in various contexts.',
      vocabularyWords: ['separable phrasal verbs', 'inseparable phrasal verbs', 'three-word phrasal verbs', 'literal meaning', 'idiomatic meaning', 'particle', 'transitive', 'intransitive'],
      exercises: [
        {
          id: 'b1-u11-l15-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'I need to ___ this information in the dictionary.',
          options: [
            'look after',
            'look for',
            'look up',
            'look into'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u11-l15-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'Do not ___ smoking. Keep trying!',
          correctAnswer: 'give up',
          acceptableAnswers: ['give up'],
          points: 10
        },
        {
          id: 'b1-u11-l15-e3',
          type: 'matching',
          instruction: 'Match the phrasal verbs with their meanings.',
          pairs: [
            { left: 'take off', right: 'depart' },
            { left: 'put off', right: 'postpone' },
            { left: 'get over', right: 'recover from' },
            { left: 'run into', right: 'meet by chance' }
          ],
          points: 10
        },
        {
          id: 'b1-u11-l15-e4',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          words: ['She', 'came', 'up', 'with', 'a', 'great', 'idea'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u11-l15-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'Please turn the TV on off before leaving.',
          correctAnswer: 'Please turn off the TV before leaving.',
          points: 10
        },
        {
          id: 'b1-u11-l15-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          statement: 'When a separable phrasal verb has a pronoun object, the pronoun must come between the verb and particle.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u11-l15-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct phrasal verb.',
          question: 'We need to ___ a solution to this problem.',
          options: [
            'come up with',
            'put up with',
            'look forward to',
            'run out of'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u11-l15-e8',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct phrasal verb.',
          question: 'The meeting has been ___ until next week.',
          correctAnswer: 'put off',
          acceptableAnswers: ['put off', 'called off'],
          points: 10
        },
        {
          id: 'b1-u11-l15-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          question: 'Me llevo bien con todos mis compañeros de clase.',
          correctAnswer: 'I get along with all my classmates.',
          acceptableAnswers: ['I get on with all my classmates.', 'I get along well with all my classmates.'],
          points: 10
        },
        {
          id: 'b1-u11-l15-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence correctly uses a three-word phrasal verb?',
          options: [
            'I look to my teacher up.',
            'I look up to my teacher.',
            'I look my teacher up to.',
            'I up to look my teacher.'
          ],
          correctAnswer: 1,
          points: 10
        }
      ]
    }
  ]
};
