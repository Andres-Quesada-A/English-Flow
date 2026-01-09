import type { Unit, Lesson } from '@/lib/types';

export const unit6: Unit = {
  id: 'b1-u6',
  levelId: 'b1',
  title: 'First Conditional',
  description: 'Learn to talk about real possibilities and likely future situations',
  order: 6,
  totalLessons: 15,
  icon: '🎯',
  lessons: [
    {
      id: 'b1-u6-l1',
      unitId: 'b1-u6',
      title: 'Introduction to Conditionals',
      description: 'Learn what conditional sentences are and their basic structure',
      order: 1,
      xpReward: 20,
      grammarPoint: 'Conditional sentences express situations that depend on a condition. The first conditional is used for real and possible situations in the future.',
      vocabularyWords: ['condition', 'result', 'clause', 'possible', 'real', 'future', 'depend', 'express'],
      exercises: [
        {
          id: 'b1-u6-l1-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'What is a conditional sentence?',
          options: [
            'A sentence that talks about the past',
            'A sentence where one thing depends on another',
            'A sentence with two verbs',
            'A sentence that asks a question'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l1-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'The first conditional is used for:',
          options: [
            'Impossible situations',
            'Past situations',
            'Real and possible future situations',
            'Imaginary situations'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l1-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'The first conditional talks about things that are possible in the future.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l1-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'A conditional sentence usually has how many parts?',
          options: [
            'One part',
            'Two parts',
            'Three parts',
            'Four parts'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l1-e5',
          type: 'matching',
          instruction: 'Match the terms with their meanings.',
          points: 10,
          pairs: [
            { left: 'Condition', right: 'The "if" part of the sentence' },
            { left: 'Result', right: 'What happens if the condition is true' },
            { left: 'First conditional', right: 'Used for real future possibilities' },
            { left: 'Clause', right: 'A part of a sentence' }
          ]
        },
        {
          id: 'b1-u6-l1-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'Conditional sentences always start with "if".',
          correctAnswer: false
        },
        {
          id: 'b1-u6-l1-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which word typically introduces the condition?',
          options: [
            'Because',
            'If',
            'When',
            'But'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l1-e8',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'A conditional sentence shows that one thing ___ on another.',
          correctAnswer: 'depends',
          acceptableAnswers: ['depends']
        },
        {
          id: 'b1-u6-l1-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is conditional?',
          options: [
            'I went to the store yesterday.',
            'If it rains, I will stay home.',
            'She is reading a book.',
            'They played football.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l1-e10',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'The first conditional describes situations that are completely impossible.',
          correctAnswer: false
        }
      ]
    },
    {
      id: 'b1-u6-l2',
      unitId: 'b1-u6',
      title: 'If + Present Simple, Will + Infinitive',
      description: 'Master the basic structure of first conditional sentences',
      order: 2,
      xpReward: 20,
      grammarPoint: 'First conditional structure: If + present simple, will + infinitive (base form). Example: If it rains, I will take an umbrella.',
      vocabularyWords: ['structure', 'present simple', 'infinitive', 'umbrella', 'arrive', 'call', 'pass', 'miss'],
      exercises: [
        {
          id: 'b1-u6-l2-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If she ___ hard, she will pass the exam.',
          options: [
            'study',
            'studies',
            'will study',
            'studied'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l2-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'I ___ you if I arrive late.',
          options: [
            'call',
            'called',
            'will call',
            'calling'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l2-e3',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'rains', 'it', 'will', 'stay', 'I', 'home'],
          correctOrder: [0, 2, 1, 5, 3, 4, 6]
        },
        {
          id: 'b1-u6-l2-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If they ___ the bus, they will be late.',
          correctAnswer: 'miss',
          acceptableAnswers: ['miss']
        },
        {
          id: 'b1-u6-l2-e5',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If he will come, we will start the meeting.',
          correctAnswer: 'If he comes, we will start the meeting.'
        },
        {
          id: 'b1-u6-l2-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If we ___ early, we ___ good seats.',
          options: [
            'arrive / will get',
            'will arrive / get',
            'arrives / will get',
            'arrive / get'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l2-e7',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si llueve, llevaré un paraguas.',
          correctAnswer: 'If it rains, I will take an umbrella.',
          acceptableAnswers: [
            'If it rains, I will take an umbrella.',
            'If it rains, I will bring an umbrella.',
            'If it rains, I\'ll take an umbrella.',
            'If it rains, I\'ll bring an umbrella.'
          ]
        },
        {
          id: 'b1-u6-l2-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'In the "if" clause, we use the present simple tense.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l2-e9',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['she', 'works', 'hard', 'If', 'will', 'she', 'succeed'],
          correctOrder: [3, 0, 1, 2, 4, 5, 6]
        },
        {
          id: 'b1-u6-l2-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you heat water to 100°C, it ___ boil.',
          correctAnswer: 'will',
          acceptableAnswers: ['will']
        }
      ]
    },
    {
      id: 'b1-u6-l3',
      unitId: 'b1-u6',
      title: 'Real Possibilities',
      description: 'Use the first conditional to talk about realistic future situations',
      order: 3,
      xpReward: 20,
      grammarPoint: 'The first conditional is used for situations that are real and possible in the future. We believe they can happen. Example: If I save enough money, I will buy a car.',
      vocabularyWords: ['realistic', 'save', 'enough', 'afford', 'probably', 'plan', 'opportunity', 'achieve'],
      exercises: [
        {
          id: 'b1-u6-l3-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which situation is a real possibility?',
          options: [
            'If I were a bird, I would fly.',
            'If I study hard, I will pass.',
            'If I had studied, I would have passed.',
            'If I could fly, I would travel.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l3-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If I save enough money, I ___ buy a new phone.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', 'can', '\'ll']
        },
        {
          id: 'b1-u6-l3-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'The first conditional is used for situations we think can really happen.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l3-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If they ___ us, we will go to the party.',
          options: [
            'invite',
            'invites',
            'will invite',
            'invited'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l3-e5',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'the', 'job', 'I', 'get', 'will', 'I', 'celebrate'],
          correctOrder: [0, 3, 4, 1, 2, 5, 6, 7]
        },
        {
          id: 'b1-u6-l3-e6',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si tengo tiempo, te ayudaré.',
          correctAnswer: 'If I have time, I will help you.',
          acceptableAnswers: [
            'If I have time, I will help you.',
            'If I have time, I\'ll help you.',
            'If I\'ve got time, I will help you.',
            'If I\'ve got time, I\'ll help you.'
          ]
        },
        {
          id: 'b1-u6-l3-e7',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If she will have money, she will buy it.',
          correctAnswer: 'If she has money, she will buy it.'
        },
        {
          id: 'b1-u6-l3-e8',
          type: 'matching',
          instruction: 'Match the conditions with their realistic results.',
          points: 10,
          pairs: [
            { left: 'If it rains tomorrow', right: 'I will take an umbrella' },
            { left: 'If I finish my work early', right: 'I will go to the cinema' },
            { left: 'If they don\'t hurry', right: 'They will miss the train' },
            { left: 'If she practices more', right: 'She will improve' }
          ]
        },
        {
          id: 'b1-u6-l3-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If the weather is nice this weekend, we ___ to the beach.',
          options: [
            'go',
            'goes',
            'will go',
            'went'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l3-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you work hard, you ___ achieve your goals.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', 'can', '\'ll']
        }
      ]
    },
    {
      id: 'b1-u6-l4',
      unitId: 'b1-u6',
      title: 'Unless = If Not',
      description: 'Learn how to use "unless" as an alternative to "if not"',
      order: 4,
      xpReward: 20,
      grammarPoint: '"Unless" means "if not". Example: Unless you hurry, you will be late. = If you don\'t hurry, you will be late. We don\'t use "not" with "unless".',
      vocabularyWords: ['unless', 'hurry', 'improve', 'apologize', 'complain', 'accept', 'cancel', 'fail'],
      exercises: [
        {
          id: 'b1-u6-l4-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Unless you study, you ___ pass the exam.',
          options: [
            'will',
            'won\'t',
            'don\'t',
            'not'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l4-e2',
          type: 'matching',
          instruction: 'Match the "unless" sentences with their "if not" equivalents.',
          points: 10,
          pairs: [
            { left: 'Unless it rains, we will go.', right: 'If it doesn\'t rain, we will go.' },
            { left: 'Unless you hurry, you\'ll be late.', right: 'If you don\'t hurry, you\'ll be late.' },
            { left: 'Unless she calls, I won\'t know.', right: 'If she doesn\'t call, I won\'t know.' },
            { left: 'Unless they agree, we can\'t start.', right: 'If they don\'t agree, we can\'t start.' }
          ]
        },
        {
          id: 'b1-u6-l4-e3',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'Unless you don\'t hurry, you will miss the bus.',
          correctAnswer: 'Unless you hurry, you will miss the bus.'
        },
        {
          id: 'b1-u6-l4-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: '___ you practice more, you won\'t improve.',
          correctAnswer: 'Unless',
          acceptableAnswers: ['Unless']
        },
        {
          id: 'b1-u6-l4-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'We can use "not" together with "unless".',
          correctAnswer: false
        },
        {
          id: 'b1-u6-l4-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['Unless', 'apologizes', 'he', 'won\'t', 'I', 'forgive', 'him'],
          correctOrder: [0, 2, 1, 3, 4, 5, 6]
        },
        {
          id: 'b1-u6-l4-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence has the same meaning? "If you don\'t leave now, you will be late."',
          options: [
            'Unless you leave now, you will be late.',
            'Unless you don\'t leave now, you will be late.',
            'Unless you will leave now, you will be late.',
            'Unless you left now, you will be late.'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l4-e8',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'A menos que estudies, no aprobarás.',
          correctAnswer: 'Unless you study, you won\'t pass.',
          acceptableAnswers: [
            'Unless you study, you won\'t pass.',
            'Unless you study, you will not pass.',
            'Unless you study, you will fail.',
            'You won\'t pass unless you study.'
          ]
        },
        {
          id: 'b1-u6-l4-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'We will cancel the trip ___ the weather improves.',
          correctAnswer: 'unless',
          acceptableAnswers: ['unless']
        },
        {
          id: 'b1-u6-l4-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Unless she ___ the offer, they will ask someone else.',
          options: [
            'accept',
            'accepts',
            'will accept',
            'doesn\'t accept'
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 'b1-u6-l5',
      unitId: 'b1-u6',
      title: 'When vs If',
      description: 'Understand the difference between "when" and "if" in conditional sentences',
      order: 5,
      xpReward: 20,
      grammarPoint: 'Use "when" when you are certain something will happen. Use "if" when you are not sure. Example: When I finish work, I will call you. (certain) / If it rains, I will stay home. (not certain)',
      vocabularyWords: ['certain', 'definite', 'doubt', 'guarantee', 'eventually', 'graduate', 'definitely'],
      exercises: [
        {
          id: 'b1-u6-l5-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: '___ I get home, I will call you. (I am certain I will get home)',
          options: [
            'If',
            'When',
            'Unless',
            'Before'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l5-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: '___ it rains tomorrow, we will cancel the picnic. (Maybe it will rain)',
          options: [
            'When',
            'Unless',
            'If',
            'After'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l5-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'We use "when" when we are certain something will happen.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l5-e4',
          type: 'matching',
          instruction: 'Match the situations with "when" or "if".',
          points: 10,
          pairs: [
            { left: 'The sun will rise tomorrow', right: 'When (certain)' },
            { left: 'It might rain later', right: 'If (not certain)' },
            { left: 'I will finish this book eventually', right: 'When (certain)' },
            { left: 'I might win the lottery', right: 'If (not certain)' }
          ]
        },
        {
          id: 'b1-u6-l5-e5',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: '___ I see her tomorrow, I will tell her. (Maybe I will see her)',
          correctAnswer: 'If',
          acceptableAnswers: ['If']
        },
        {
          id: 'b1-u6-l5-e6',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: '___ you finish your homework, you can watch TV. (I expect you to finish)',
          correctAnswer: 'When',
          acceptableAnswers: ['When']
        },
        {
          id: 'b1-u6-l5-e7',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If the sun rises tomorrow, I will go for a walk.',
          correctAnswer: 'When the sun rises tomorrow, I will go for a walk.'
        },
        {
          id: 'b1-u6-l5-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: '___ she graduates, she will look for a job. (She will definitely graduate)',
          options: [
            'If',
            'When',
            'Unless',
            'Before'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l5-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Cuando termine el trabajo, te llamaré.',
          correctAnswer: 'When I finish work, I will call you.',
          acceptableAnswers: [
            'When I finish work, I will call you.',
            'When I finish work, I\'ll call you.',
            'When I finish the work, I will call you.',
            'When I finish the work, I\'ll call you.'
          ]
        },
        {
          id: 'b1-u6-l5-e10',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'time', 'I', 'have', 'will', 'I', 'help', 'you'],
          correctOrder: [0, 2, 3, 1, 4, 5, 6, 7]
        }
      ]
    },
    {
      id: 'b1-u6-l6',
      unitId: 'b1-u6',
      title: 'As Soon As, Before, After, Until',
      description: 'Use time connectors in conditional sentences',
      order: 6,
      xpReward: 20,
      grammarPoint: 'Time connectors in first conditional: as soon as (immediately when), before (earlier than), after (later than), until (up to the time). Use present simple after these words, not future. Example: I will call you as soon as I arrive.',
      vocabularyWords: ['as soon as', 'immediately', 'meanwhile', 'prior', 'subsequent', 'await', 'notify', 'confirm'],
      exercises: [
        {
          id: 'b1-u6-l6-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'I will call you as soon as I ___.',
          options: [
            'will arrive',
            'arrive',
            'arrived',
            'arriving'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l6-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'We will eat dinner after he ___ home.',
          options: [
            'will get',
            'gets',
            'got',
            'getting'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l6-e3',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'I will wait until she will arrive.',
          correctAnswer: 'I will wait until she arrives.'
        },
        {
          id: 'b1-u6-l6-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'Please turn off the lights ___ you leave.',
          correctAnswer: 'before',
          acceptableAnswers: ['before', 'when']
        },
        {
          id: 'b1-u6-l6-e5',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['as', 'soon', 'as', 'I', 'will', 'tell', 'you', 'know', 'I'],
          correctOrder: [4, 5, 6, 0, 1, 2, 8, 7]
        },
        {
          id: 'b1-u6-l6-e6',
          type: 'matching',
          instruction: 'Match the time connectors with their meanings.',
          points: 10,
          pairs: [
            { left: 'As soon as', right: 'Immediately when something happens' },
            { left: 'Before', right: 'Earlier than something' },
            { left: 'After', right: 'Later than something' },
            { left: 'Until', right: 'Up to the time when' }
          ]
        },
        {
          id: 'b1-u6-l6-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'She will stay here until we ___ back.',
          options: [
            'come',
            'will come',
            'came',
            'coming'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l6-e8',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Te llamaré tan pronto como llegue.',
          correctAnswer: 'I will call you as soon as I arrive.',
          acceptableAnswers: [
            'I will call you as soon as I arrive.',
            'I\'ll call you as soon as I arrive.',
            'I will call you as soon as I get there.',
            'I\'ll call you as soon as I get there.'
          ]
        },
        {
          id: 'b1-u6-l6-e9',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'After time connectors like "as soon as", "before", "after", and "until", we use the present simple, not the future.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l6-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'I will send you the document ___ I finish it.',
          correctAnswer: 'after',
          acceptableAnswers: ['after', 'when', 'once']
        }
      ]
    },
    {
      id: 'b1-u6-l7',
      unitId: 'b1-u6',
      title: 'Warnings and Threats',
      description: 'Use the first conditional to give warnings and make threats',
      order: 7,
      xpReward: 20,
      grammarPoint: 'The first conditional is commonly used for warnings and threats. Warning: If you don\'t wear a coat, you will catch a cold. Threat: If you tell anyone, I will be very angry.',
      vocabularyWords: ['warning', 'threat', 'consequences', 'catch a cold', 'regret', 'punish', 'damage', 'careful'],
      exercises: [
        {
          id: 'b1-u6-l7-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you don\'t study, you ___ the exam. (warning)',
          options: [
            'pass',
            'will pass',
            'won\'t pass',
            'passing'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l7-e2',
          type: 'matching',
          instruction: 'Match the warnings with their situations.',
          points: 10,
          pairs: [
            { left: 'If you touch that, you will burn yourself.', right: 'Hot stove' },
            { left: 'If you don\'t hurry, you will miss the bus.', right: 'Running late' },
            { left: 'If you eat too much, you will feel sick.', right: 'At a buffet' },
            { left: 'If you don\'t save money, you will have problems.', right: 'Financial advice' }
          ]
        },
        {
          id: 'b1-u6-l7-e3',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you don\'t be careful, you ___ have an accident.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', '\'ll', 'might', 'may']
        },
        {
          id: 'b1-u6-l7-e4',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'The first conditional can be used to give warnings about negative consequences.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l7-e5',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'tell', 'you', 'anyone', 'will', 'I', 'be', 'angry'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u6-l7-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you ___ a coat, you will get cold. (warning)',
          options: [
            'wear',
            'don\'t wear',
            'will wear',
            'won\'t wear'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l7-e7',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si no tienes cuidado, tendrás un accidente.',
          correctAnswer: 'If you are not careful, you will have an accident.',
          acceptableAnswers: [
            'If you are not careful, you will have an accident.',
            'If you\'re not careful, you will have an accident.',
            'If you\'re not careful, you\'ll have an accident.',
            'If you are not careful, you\'ll have an accident.'
          ]
        },
        {
          id: 'b1-u6-l7-e8',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will do that again, I will tell the teacher.',
          correctAnswer: 'If you do that again, I will tell the teacher.'
        },
        {
          id: 'b1-u6-l7-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is a warning?',
          options: [
            'If it rains, we will stay home.',
            'If you touch that wire, you will get a shock.',
            'If I see her, I will say hello.',
            'If they come early, we will start.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l7-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you don\'t stop that, you ___ regret it!',
          correctAnswer: 'will',
          acceptableAnswers: ['will', '\'ll']
        }
      ]
    },
    {
      id: 'b1-u6-l8',
      unitId: 'b1-u6',
      title: 'Promises and Negotiations',
      description: 'Use the first conditional to make promises and negotiate',
      order: 8,
      xpReward: 20,
      grammarPoint: 'The first conditional is used for promises and negotiations. Promise: If you help me, I will help you. Negotiation: If you give me a discount, I will buy two.',
      vocabularyWords: ['promise', 'negotiate', 'discount', 'deal', 'offer', 'exchange', 'agreement', 'guarantee'],
      exercises: [
        {
          id: 'b1-u6-l8-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you help me today, I ___ help you tomorrow. (promise)',
          options: [
            'help',
            'helped',
            'will help',
            'helping'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l8-e2',
          type: 'matching',
          instruction: 'Match the conditional sentences with their functions.',
          points: 10,
          pairs: [
            { left: 'If you finish early, I will buy you ice cream.', right: 'Promise' },
            { left: 'If you lower the price, I will buy it.', right: 'Negotiation' },
            { left: 'If you come to my party, I will come to yours.', right: 'Exchange' },
            { left: 'If you keep the secret, I will trust you.', right: 'Deal' }
          ]
        },
        {
          id: 'b1-u6-l8-e3',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you give me a discount, I ___ buy three items.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', '\'ll']
        },
        {
          id: 'b1-u6-l8-e4',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'you', 'lend', 'me', 'money', 'will', 'I', 'pay', 'back', 'tomorrow'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          id: 'b1-u6-l8-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'The first conditional can be used to make promises about future actions.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l8-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you ___ quiet, I will tell you a secret.',
          options: [
            'keep',
            'keeps',
            'will keep',
            'kept'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l8-e7',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si me ayudas, te ayudaré.',
          correctAnswer: 'If you help me, I will help you.',
          acceptableAnswers: [
            'If you help me, I will help you.',
            'If you help me, I\'ll help you.',
            'If you help me, I\'ll help you back.',
            'If you help me, I will help you back.'
          ]
        },
        {
          id: 'b1-u6-l8-e8',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will finish your homework, I will let you play.',
          correctAnswer: 'If you finish your homework, I will let you play.'
        },
        {
          id: 'b1-u6-l8-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence shows negotiation?',
          options: [
            'If it rains, I will stay home.',
            'If you reduce the price, I will buy two.',
            'If you don\'t hurry, you will be late.',
            'If I see her, I will say hello.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l8-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you come to my birthday party, I ___ come to yours.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', '\'ll']
        }
      ]
    },
    {
      id: 'b1-u6-l9',
      unitId: 'b1-u6',
      title: 'Modal Verbs in First Conditional',
      description: 'Use modal verbs (can, may, might) instead of "will" in first conditional',
      order: 9,
      xpReward: 20,
      grammarPoint: 'Instead of "will", we can use modal verbs in the result clause: can (ability/permission), may/might (possibility). Example: If you finish early, you can leave. If it rains, we might stay home.',
      vocabularyWords: ['modal verb', 'ability', 'permission', 'possibility', 'borrow', 'allow', 'perhaps', 'likely'],
      exercises: [
        {
          id: 'b1-u6-l9-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you finish your homework, you ___ watch TV. (permission)',
          options: [
            'will',
            'can',
            'must',
            'should'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l9-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If it rains, we ___ cancel the picnic. (possibility)',
          options: [
            'will',
            'can',
            'might',
            'must'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l9-e3',
          type: 'matching',
          instruction: 'Match the modal verbs with their meanings in first conditional.',
          points: 10,
          pairs: [
            { left: 'can', right: 'ability or permission' },
            { left: 'may', right: 'possibility (formal)' },
            { left: 'might', right: 'possibility (less certain)' },
            { left: 'will', right: 'certainty about the result' }
          ]
        },
        {
          id: 'b1-u6-l9-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you pass the test, you ___ get a certificate.',
          correctAnswer: 'will',
          acceptableAnswers: ['will', 'can', 'may', 'might', '\'ll']
        },
        {
          id: 'b1-u6-l9-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'We can use modal verbs like "can", "may", and "might" in the result clause of first conditional.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l9-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'you', 'need', 'help', 'can', 'you', 'ask', 'me'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u6-l9-e7',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If she will call, I might answer.',
          correctAnswer: 'If she calls, I might answer.'
        },
        {
          id: 'b1-u6-l9-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you don\'t understand, you ___ ask questions. (permission/ability)',
          options: [
            'must',
            'can',
            'might',
            'should'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l9-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si terminas temprano, puedes salir.',
          correctAnswer: 'If you finish early, you can leave.',
          acceptableAnswers: [
            'If you finish early, you can leave.',
            'If you finish early, you can go.',
            'If you finish early, you may leave.',
            'You can leave if you finish early.'
          ]
        },
        {
          id: 'b1-u6-l9-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If the weather is bad, they ___ not come. (possibility)',
          correctAnswer: 'may',
          acceptableAnswers: ['may', 'might', 'will']
        }
      ]
    },
    {
      id: 'b1-u6-l10',
      unitId: 'b1-u6',
      title: 'Imperative in Result Clause',
      description: 'Use imperatives (commands) in the result clause',
      order: 10,
      xpReward: 20,
      grammarPoint: 'We can use the imperative (command form) instead of "will" in the result clause. Example: If you see John, tell him to call me. If you feel tired, take a rest.',
      vocabularyWords: ['imperative', 'command', 'instruction', 'advice', 'suggestion', 'remind', 'inform', 'notify'],
      exercises: [
        {
          id: 'b1-u6-l10-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you see Sarah, ___ her to call me.',
          options: [
            'tell',
            'tells',
            'will tell',
            'told'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l10-e2',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'tired', 'you', 'feel', 'take', 'a', 'rest'],
          correctOrder: [0, 2, 3, 1, 4, 5, 6]
        },
        {
          id: 'b1-u6-l10-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'We can use the imperative form in the result clause of first conditional sentences.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l10-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you have any problems, ___ me know.',
          correctAnswer: 'let',
          acceptableAnswers: ['let']
        },
        {
          id: 'b1-u6-l10-e5',
          type: 'matching',
          instruction: 'Match the conditions with appropriate imperatives.',
          points: 10,
          pairs: [
            { left: 'If you go to the store', right: 'buy some milk' },
            { left: 'If you see a doctor', right: 'ask about your symptoms' },
            { left: 'If you finish early', right: 'help your classmates' },
            { left: 'If you don\'t understand', right: 'ask questions' }
          ]
        },
        {
          id: 'b1-u6-l10-e6',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will see him, to tell him the news.',
          correctAnswer: 'If you see him, tell him the news.'
        },
        {
          id: 'b1-u6-l10-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you need help, ___ hesitate to ask.',
          options: [
            'not',
            'don\'t',
            'won\'t',
            'doesn\'t'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l10-e8',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si ves a Juan, dile que me llame.',
          correctAnswer: 'If you see John, tell him to call me.',
          acceptableAnswers: [
            'If you see John, tell him to call me.',
            'If you see Juan, tell him to call me.',
            'If you see John, ask him to call me.',
            'Tell John to call me if you see him.'
          ]
        },
        {
          id: 'b1-u6-l10-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If the phone rings, ___ it.',
          correctAnswer: 'answer',
          acceptableAnswers: ['answer', 'get', 'pick']
        },
        {
          id: 'b1-u6-l10-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence correctly uses an imperative in the result clause?',
          options: [
            'If you finish, you will go home.',
            'If you finish, go home.',
            'If you finish, you going home.',
            'If you finish, to go home.'
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 'b1-u6-l11',
      unitId: 'b1-u6',
      title: 'First Conditional Questions',
      description: 'Form questions using the first conditional',
      order: 11,
      xpReward: 20,
      grammarPoint: 'To form questions with first conditional: If + present simple, will + subject + infinitive? Example: If it rains, will you stay home? OR: Will you stay home if it rains?',
      vocabularyWords: ['question form', 'inversion', 'respond', 'inquiry', 'wonder', 'curious', 'clarify', 'confirm'],
      exercises: [
        {
          id: 'b1-u6-l11-e1',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'rains', 'it', 'will', 'you', 'stay', 'home', '?'],
          correctOrder: [0, 2, 1, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u6-l11-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If she comes early, ___ help us?',
          options: [
            'will she',
            'she will',
            'does she',
            'she does'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l11-e3',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will see him, you will tell me?',
          correctAnswer: 'If you see him, will you tell me?'
        },
        {
          id: 'b1-u6-l11-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If they don\'t come, ___ we cancel the meeting?',
          correctAnswer: 'will',
          acceptableAnswers: ['will', 'should']
        },
        {
          id: 'b1-u6-l11-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'In first conditional questions, we use inversion in the result clause (will + subject).',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l11-e6',
          type: 'matching',
          instruction: 'Match the questions with appropriate short answers.',
          points: 10,
          pairs: [
            { left: 'If it rains, will you stay home?', right: 'Yes, I will.' },
            { left: 'Will you help me if I need you?', right: 'Of course I will.' },
            { left: 'If she calls, will you answer?', right: 'Yes, probably.' },
            { left: 'Will they come if we invite them?', right: 'I think so.' }
          ]
        },
        {
          id: 'b1-u6-l11-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['Will', 'you', 'go', 'if', 'invites', 'he', 'you', '?'],
          correctOrder: [0, 1, 2, 3, 5, 4, 6, 7]
        },
        {
          id: 'b1-u6-l11-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'What ___ if the train is late?',
          options: [
            'will you do',
            'you will do',
            'do you will',
            'you do will'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u6-l11-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si él viene, ¿me ayudarás?',
          correctAnswer: 'If he comes, will you help me?',
          acceptableAnswers: [
            'If he comes, will you help me?',
            'Will you help me if he comes?',
            'If he comes, can you help me?',
            'Can you help me if he comes?'
          ]
        },
        {
          id: 'b1-u6-l11-e10',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If I lend you the money, when ___ you pay me back?',
          correctAnswer: 'will',
          acceptableAnswers: ['will', 'can']
        }
      ]
    },
    {
      id: 'b1-u6-l12',
      unitId: 'b1-u6',
      title: 'Mixed Time Expressions',
      description: 'Combine different time expressions with first conditional',
      order: 12,
      xpReward: 20,
      grammarPoint: 'We can use various time expressions with first conditional: tomorrow, next week, later, soon, etc. Example: If you call me tomorrow, I will be free. The result can refer to a different time than the condition.',
      vocabularyWords: ['tomorrow', 'next week', 'later', 'soon', 'eventually', 'meanwhile', 'afterwards', 'immediately'],
      exercises: [
        {
          id: 'b1-u6-l12-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you call me tomorrow, I ___ available.',
          options: [
            'am',
            'was',
            'will be',
            'have been'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l12-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If she starts studying now, she will finish ___ tonight.',
          correctAnswer: 'later',
          acceptableAnswers: ['later', 'tonight', 'soon']
        },
        {
          id: 'b1-u6-l12-e3',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'I', 'see', 'him', 'next', 'week', 'will', 'I', 'tell', 'him'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          id: 'b1-u6-l12-e4',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'In first conditional, the condition and the result must always refer to the same time.',
          correctAnswer: false
        },
        {
          id: 'b1-u6-l12-e5',
          type: 'matching',
          instruction: 'Match the time expressions with their meanings.',
          points: 10,
          pairs: [
            { left: 'Tomorrow', right: 'The next day' },
            { left: 'Soon', right: 'In a short time' },
            { left: 'Later', right: 'At some future time' },
            { left: 'Next week', right: 'The following week' }
          ]
        },
        {
          id: 'b1-u6-l12-e6',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will come tomorrow, I will be here.',
          correctAnswer: 'If you come tomorrow, I will be here.'
        },
        {
          id: 'b1-u6-l12-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If they leave now, they will arrive ___.',
          options: [
            'yesterday',
            'last week',
            'soon',
            'ago'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l12-e8',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si la veo mañana, le diré.',
          correctAnswer: 'If I see her tomorrow, I will tell her.',
          acceptableAnswers: [
            'If I see her tomorrow, I will tell her.',
            'If I see her tomorrow, I\'ll tell her.',
            'I will tell her if I see her tomorrow.',
            'I\'ll tell her if I see her tomorrow.'
          ]
        },
        {
          id: 'b1-u6-l12-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you start working on it now, you will finish it ___ this afternoon.',
          correctAnswer: 'later',
          acceptableAnswers: ['later', 'by']
        },
        {
          id: 'b1-u6-l12-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If I don\'t hear from you ___, I will assume you\'re busy.',
          options: [
            'yesterday',
            'last night',
            'soon',
            'ago'
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 'b1-u6-l13',
      unitId: 'b1-u6',
      title: 'Common Mistakes',
      description: 'Learn to avoid common errors with first conditional',
      order: 13,
      xpReward: 20,
      grammarPoint: 'Common mistakes: 1) Using "will" in the if-clause (wrong: If you will come...), 2) Using past tense instead of present (wrong: If he came...), 3) Forgetting subject-verb agreement (wrong: If she don\'t...).',
      vocabularyWords: ['mistake', 'error', 'incorrect', 'avoid', 'confuse', 'mix up', 'overlook', 'remember'],
      exercises: [
        {
          id: 'b1-u6-l13-e1',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If you will study hard, you will pass.',
          correctAnswer: 'If you study hard, you will pass.'
        },
        {
          id: 'b1-u6-l13-e2',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If she don\'t come, we will leave.',
          correctAnswer: 'If she doesn\'t come, we will leave.'
        },
        {
          id: 'b1-u6-l13-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is correct?',
          options: [
            'If it will rain, I will stay home.',
            'If it rains, I will stay home.',
            'If it rained, I will stay home.',
            'If it rain, I will stay home.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l13-e4',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If he came tomorrow, I will talk to him.',
          correctAnswer: 'If he comes tomorrow, I will talk to him.'
        },
        {
          id: 'b1-u6-l13-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'It is correct to say: "If you will help me, I will help you."',
          correctAnswer: false
        },
        {
          id: 'b1-u6-l13-e6',
          type: 'matching',
          instruction: 'Match the incorrect sentences with their corrections.',
          points: 10,
          pairs: [
            { left: 'If you will come, I will be happy.', right: 'If you come, I will be happy.' },
            { left: 'If she don\'t call, I will leave.', right: 'If she doesn\'t call, I will leave.' },
            { left: 'If they came, we will start.', right: 'If they come, we will start.' },
            { left: 'If he go, I will go too.', right: 'If he goes, I will go too.' }
          ]
        },
        {
          id: 'b1-u6-l13-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is WRONG?',
          options: [
            'If it rains, I will take an umbrella.',
            'If she comes, we will start.',
            'If you will help me, I will be grateful.',
            'If they leave now, they will be on time.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u6-l13-e8',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If we will go to the park, we will have fun.',
          correctAnswer: 'If we go to the park, we will have fun.'
        },
        {
          id: 'b1-u6-l13-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If she ___ (not come) soon, we will start without her.',
          correctAnswer: 'doesn\'t come',
          acceptableAnswers: ['doesn\'t come', 'does not come']
        },
        {
          id: 'b1-u6-l13-e10',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'In the if-clause of first conditional, we always use the present simple tense, never "will".',
          correctAnswer: true
        }
      ]
    },
    {
      id: 'b1-u6-l14',
      unitId: 'b1-u6',
      title: 'Real-Life Situations',
      description: 'Apply first conditional to everyday scenarios',
      order: 14,
      xpReward: 20,
      grammarPoint: 'First conditional is very common in daily life: making plans, discussing possibilities, giving advice, making predictions, talking about consequences. Example: If we miss the train, we can take a taxi.',
      vocabularyWords: ['scenario', 'everyday', 'practical', 'apply', 'situation', 'consequence', 'outcome', 'backup plan'],
      exercises: [
        {
          id: 'b1-u6-l14-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If we miss the bus, we ___ take a taxi.',
          options: [
            'must',
            'can',
            'should',
            'All of the above'
          ],
          correctAnswer: 3
        },
        {
          id: 'b1-u6-l14-e2',
          type: 'matching',
          instruction: 'Match the situations with appropriate first conditional sentences.',
          points: 10,
          pairs: [
            { left: 'Making plans', right: 'If the weather is nice, we\'ll go to the beach.' },
            { left: 'Giving advice', right: 'If you feel sick, you should see a doctor.' },
            { left: 'Making predictions', right: 'If you study hard, you will succeed.' },
            { left: 'Discussing possibilities', right: 'If I save enough, I might buy a car.' }
          ]
        },
        {
          id: 'b1-u6-l14-e3',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'the', 'restaurant', 'is', 'full', 'we', 'can', 'try', 'another', 'one'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          id: 'b1-u6-l14-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you need a ride, I ___ give you a lift.',
          correctAnswer: 'can',
          acceptableAnswers: ['can', 'will', '\'ll']
        },
        {
          id: 'b1-u6-l14-e5',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si perdemos el tren, podemos tomar un taxi.',
          correctAnswer: 'If we miss the train, we can take a taxi.',
          acceptableAnswers: [
            'If we miss the train, we can take a taxi.',
            'If we miss the train, we can get a taxi.',
            'We can take a taxi if we miss the train.',
            'We can get a taxi if we miss the train.'
          ]
        },
        {
          id: 'b1-u6-l14-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'First conditional is commonly used when making plans and discussing future possibilities.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l14-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If you don\'t feel well, you ___ take the day off.',
          options: [
            'must',
            'should',
            'can',
            'All of the above'
          ],
          correctAnswer: 3
        },
        {
          id: 'b1-u6-l14-e8',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If the store will be closed, we will go tomorrow.',
          correctAnswer: 'If the store is closed, we will go tomorrow.'
        },
        {
          id: 'b1-u6-l14-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you don\'t understand the instructions, ___ me and I\'ll explain.',
          correctAnswer: 'ask',
          acceptableAnswers: ['ask', 'tell', 'call']
        },
        {
          id: 'b1-u6-l14-e10',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['If', 'you', 'need', 'help', 'just', 'let', 'me', 'know'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
        }
      ]
    },
    {
      id: 'b1-u6-l15',
      unitId: 'b1-u6',
      title: 'Comprehensive Review',
      description: 'Review all aspects of first conditional',
      order: 15,
      xpReward: 20,
      grammarPoint: 'First conditional review: If + present simple, will/can/may/might + infinitive OR imperative. Used for real future possibilities. Remember: no "will" in if-clause, use present simple with correct subject-verb agreement.',
      vocabularyWords: ['comprehensive', 'review', 'summary', 'consolidate', 'reinforce', 'master', 'proficient', 'fluent'],
      exercises: [
        {
          id: 'b1-u6-l15-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If she ___ the exam, she will be very happy.',
          options: [
            'pass',
            'passes',
            'will pass',
            'passed'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l15-e2',
          type: 'error-correction',
          instruction: 'Correct the error in the sentence.',
          points: 10,
          sentence: 'If they will arrive early, we can start the meeting.',
          correctAnswer: 'If they arrive early, we can start the meeting.'
        },
        {
          id: 'b1-u6-l15-e3',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['Unless', 'you', 'practice', 'won\'t', 'you', 'improve'],
          correctOrder: [0, 1, 2, 3, 4, 5]
        },
        {
          id: 'b1-u6-l15-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you see John, ___ him I said hello.',
          correctAnswer: 'tell',
          acceptableAnswers: ['tell']
        },
        {
          id: 'b1-u6-l15-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'If it ___ tomorrow, will you stay home?',
          options: [
            'rain',
            'rains',
            'will rain',
            'rained'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u6-l15-e6',
          type: 'matching',
          instruction: 'Match the sentence halves correctly.',
          points: 10,
          pairs: [
            { left: 'If you need help', right: 'I will assist you' },
            { left: 'Unless she hurries', right: 'she will miss the train' },
            { left: 'When you finish', right: 'you can leave' },
            { left: 'If they invite us', right: 'we might go' }
          ]
        },
        {
          id: 'b1-u6-l15-e7',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Si estudias mucho, aprobarás el examen.',
          correctAnswer: 'If you study hard, you will pass the exam.',
          acceptableAnswers: [
            'If you study hard, you will pass the exam.',
            'If you study hard, you\'ll pass the exam.',
            'If you study a lot, you will pass the exam.',
            'If you study a lot, you\'ll pass the exam.'
          ]
        },
        {
          id: 'b1-u6-l15-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false.',
          points: 10,
          statement: 'In first conditional, we use present simple in the if-clause and will + infinitive in the result clause.',
          correctAnswer: true
        },
        {
          id: 'b1-u6-l15-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the missing word.',
          points: 10,
          question: 'If you ___ (not study), you won\'t pass the test.',
          correctAnswer: 'don\'t study',
          acceptableAnswers: ['don\'t study', 'do not study']
        },
        {
          id: 'b1-u6-l15-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is correct?',
          options: [
            'If you will come, I will be happy.',
            'If you come, I will be happy.',
            'If you came, I will be happy.',
            'If you coming, I will be happy.'
          ],
          correctAnswer: 1
        }
      ]
    }
  ]
};
