import { Unit } from '@/lib/types';

export const unit7: Unit = {
  id: 'b1-u7',
  levelId: 'b1',
  title: 'Second Conditional',
  description: 'Express imaginary and hypothetical situations in the present or future',
  order: 7,
  totalLessons: 15,
  icon: '💭',
  lessons: [
    {
      id: 'b1-u7-l1',
      unitId: 'b1-u7',
      title: 'Introduction: Imaginary Situations',
      description: 'Learn how to talk about imaginary and hypothetical situations',
      order: 1,
      xpReward: 20,
      grammarPoint: 'Introduction to the second conditional for imaginary situations',
      vocabularyWords: ['imaginary', 'hypothetical', 'unreal', 'situation', 'condition', 'suppose', 'pretend', 'fantasy'],
      exercises: [
        {
          id: 'b1-u7-l1-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'The second conditional is used to talk about:',
          options: [
            'Real situations in the present',
            'Imaginary or hypothetical situations',
            'Past events that happened',
            'Future plans that are certain'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l1-e2',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The second conditional describes situations that are likely to happen.',
          correctAnswer: false
        },
        {
          id: 'b1-u7-l1-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence uses the second conditional correctly?',
          options: [
            'If I have money, I will buy a car.',
            'If I had money, I would buy a car.',
            'If I would have money, I bought a car.',
            'If I have had money, I would bought a car.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l1-e4',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I ___ a millionaire, I would travel the world.',
          correctAnswer: 'were',
          acceptableAnswers: ['were', 'was']
        },
        {
          id: 'b1-u7-l1-e5',
          type: 'matching',
          instruction: 'Match the sentence beginnings with their endings',
          points: 10,
          pairs: [
            { left: 'If I had time,', right: 'I would learn Spanish.' },
            { left: 'If she knew the answer,', right: 'she would tell us.' },
            { left: 'If they lived closer,', right: 'we would visit them often.' },
            { left: 'If he studied harder,', right: 'he would pass the exam.' }
          ]
        },
        {
          id: 'b1-u7-l1-e6',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The second conditional is about impossible or imaginary situations.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l1-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'What does this sentence mean: "If I won the lottery, I would quit my job"?',
          options: [
            'I won the lottery and quit my job',
            'I am planning to quit my job soon',
            'This is an imaginary situation - I have not won the lottery',
            'I will definitely win the lottery'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l1-e8',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If we ___ a bigger house, we could adopt a dog.',
          correctAnswer: 'had',
          acceptableAnswers: ['had']
        },
        {
          id: 'b1-u7-l1-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I will have superpowers, I would fly.',
          correctAnswer: 'If I had superpowers, I would fly.'
        },
        {
          id: 'b1-u7-l1-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si tuviera un coche, conduciría al trabajo. (Spanish)',
          correctAnswer: 'If I had a car, I would drive to work.',
          acceptableAnswers: ['If I had a car, I would drive to work.', 'If I had a car I would drive to work']
        }
      ]
    },
    {
      id: 'b1-u7-l2',
      unitId: 'b1-u7',
      title: 'If + Past Simple, Would + Infinitive',
      description: 'Master the basic structure of the second conditional',
      order: 2,
      xpReward: 20,
      grammarPoint: 'If + past simple, would + base verb structure',
      vocabularyWords: ['structure', 'form', 'clause', 'result', 'condition', 'infinitive', 'modal', 'auxiliary'],
      exercises: [
        {
          id: 'b1-u7-l2-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which verb form comes after "if" in the second conditional?',
          options: [
            'Present simple',
            'Past simple',
            'Present perfect',
            'Would + infinitive'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l2-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I ___ (know) his number, I would call him.',
          correctAnswer: 'knew',
          acceptableAnswers: ['knew']
        },
        {
          id: 'b1-u7-l2-e3',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['would', 'If', 'buy', 'I', 'had', 'money,', 'a', 'house.', 'I'],
          correctOrder: [1, 3, 4, 5, 0, 6, 7, 8, 2]
        },
        {
          id: 'b1-u7-l2-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If she ___ more free time, she ___ a hobby.',
          options: [
            'has / would take up',
            'had / would take up',
            'would have / took up',
            'have / will take up'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l2-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If they would have more money, they would travel.',
          correctAnswer: 'If they had more money, they would travel.'
        },
        {
          id: 'b1-u7-l2-e6',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'We ___ (go) to the beach if the weather was better.',
          correctAnswer: 'would go',
          acceptableAnswers: ['would go', "'d go"]
        },
        {
          id: 'b1-u7-l2-e7',
          type: 'matching',
          instruction: 'Match the if-clauses with their results',
          points: 10,
          pairs: [
            { left: 'If I lived in Paris,', right: 'I would speak French every day.' },
            { left: 'If he had a car,', right: 'he would drive to work.' },
            { left: 'If we knew the way,', right: 'we would not get lost.' },
            { left: 'If you asked her,', right: 'she would help you.' }
          ]
        },
        {
          id: 'b1-u7-l2-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'In the second conditional, we use "would" in the result clause.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l2-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If it ___ tomorrow, we ___ at home.',
          options: [
            'rains / will stay',
            'rained / would stay',
            'would rain / stayed',
            'rain / would stay'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l2-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si ella supiera la verdad, estaría enfadada. (Spanish)',
          correctAnswer: 'If she knew the truth, she would be angry.',
          acceptableAnswers: ['If she knew the truth, she would be angry.', 'If she knew the truth she would be angry']
        }
      ]
    },
    {
      id: 'b1-u7-l3',
      unitId: 'b1-u7',
      title: 'Hypothetical Present Situations',
      description: 'Use the second conditional to imagine different present situations',
      order: 3,
      xpReward: 20,
      grammarPoint: 'Using second conditional for hypothetical present scenarios',
      vocabularyWords: ['hypothetical', 'scenario', 'imagine', 'suppose', 'pretend', 'reality', 'actual', 'current'],
      exercises: [
        {
          id: 'b1-u7-l3-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If I ___ you, I would apologize.',
          options: [
            'am',
            'was',
            'were',
            'would be'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l3-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If he ___ (live) in this city, we could meet more often.',
          correctAnswer: 'lived',
          acceptableAnswers: ['lived']
        },
        {
          id: 'b1-u7-l3-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The sentence "If I had a million dollars, I would buy a yacht" describes a real present situation.',
          correctAnswer: false
        },
        {
          id: 'b1-u7-l3-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If she is taller, she would play basketball.',
          correctAnswer: 'If she were taller, she would play basketball.'
        },
        {
          id: 'b1-u7-l3-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'What does "If I spoke Chinese, I would work in Beijing" tell us?',
          options: [
            'I speak Chinese and work in Beijing',
            'I do not speak Chinese now',
            'I am learning Chinese',
            'I will speak Chinese soon'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l3-e6',
          type: 'matching',
          instruction: 'Match the hypothetical situations with their results',
          points: 10,
          pairs: [
            { left: 'If I were younger,', right: 'I would learn to surf.' },
            { left: 'If we had more time,', right: 'we would visit more museums.' },
            { left: 'If they owned a restaurant,', right: 'they would serve Italian food.' },
            { left: 'If you lived by the sea,', right: 'you would swim every day.' }
          ]
        },
        {
          id: 'b1-u7-l3-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If we ___ (be) rich, we would donate to charity.',
          correctAnswer: 'were',
          acceptableAnswers: ['were', 'was']
        },
        {
          id: 'b1-u7-l3-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['worked', 'If', 'from', 'home,', 'I', 'save', 'would', 'time.', 'I'],
          correctOrder: [1, 4, 0, 2, 3, 8, 6, 5, 7]
        },
        {
          id: 'b1-u7-l3-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If the weather ___ better, we ___ outside more often.',
          options: [
            'is / would be',
            'was / will be',
            'were / would be',
            'would be / were'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l3-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si tuviéramos un jardín, plantaríamos flores. (Spanish)',
          correctAnswer: 'If we had a garden, we would plant flowers.',
          acceptableAnswers: ['If we had a garden, we would plant flowers.', 'If we had a garden we would plant flowers']
        }
      ]
    },
    {
      id: 'b1-u7-l4',
      unitId: 'b1-u7',
      title: 'Giving Advice: If I Were You...',
      description: 'Learn to give advice using the second conditional',
      order: 4,
      xpReward: 20,
      grammarPoint: 'Using "If I were you" to give advice and suggestions',
      vocabularyWords: ['advice', 'suggestion', 'recommend', 'counsel', 'guidance', 'propose', 'opinion', 'wisdom'],
      exercises: [
        {
          id: 'b1-u7-l4-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If I were you, I ___ to the doctor.',
          options: [
            'will go',
            'would go',
            'went',
            'go'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l4-e2',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: '"If I were you" is commonly used to give advice.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l4-e3',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I were you, I ___ (not worry) about it.',
          correctAnswer: 'would not worry',
          acceptableAnswers: ['would not worry', "wouldn't worry", 'would not worry']
        },
        {
          id: 'b1-u7-l4-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I was you, I will study harder.',
          correctAnswer: 'If I were you, I would study harder.'
        },
        {
          id: 'b1-u7-l4-e5',
          type: 'matching',
          instruction: 'Match the problems with the advice',
          points: 10,
          pairs: [
            { left: "I'm always tired.", right: 'If I were you, I would sleep more.' },
            { left: "I can't find my keys.", right: 'If I were you, I would check my pockets.' },
            { left: "I'm bored.", right: 'If I were you, I would find a new hobby.' },
            { left: 'I have a toothache.', right: 'If I were you, I would see a dentist.' }
          ]
        },
        {
          id: 'b1-u7-l4-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Your friend is unhappy at work. What advice would you give?',
          options: [
            'If I were you, I look for a new job.',
            'If I am you, I would look for a new job.',
            'If I were you, I would look for a new job.',
            'If I was you, I will look for a new job.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l4-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I were you, I ___ (talk) to her about the problem.',
          correctAnswer: 'would talk',
          acceptableAnswers: ['would talk', "'d talk"]
        },
        {
          id: 'b1-u7-l4-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['were', 'If', 'you,', 'I', 'would', 'apologize.', 'I'],
          correctOrder: [1, 6, 0, 2, 3, 4, 5]
        },
        {
          id: 'b1-u7-l4-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence gives advice correctly?',
          options: [
            'If I were you, I will take the job.',
            'If I am you, I would take the job.',
            'If I were you, I would take the job.',
            'If I was you, I take the job.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l4-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si yo fuera tú, aceptaría la oferta. (Spanish)',
          correctAnswer: 'If I were you, I would accept the offer.',
          acceptableAnswers: ['If I were you, I would accept the offer.', 'If I were you I would accept the offer']
        }
      ]
    },
    {
      id: 'b1-u7-l5',
      unitId: 'b1-u7',
      title: 'Were vs Was in Conditionals',
      description: 'Understand when to use "were" and "was" in second conditional',
      order: 5,
      xpReward: 20,
      grammarPoint: 'The difference between "were" and "was" in second conditional sentences',
      vocabularyWords: ['subjunctive', 'formal', 'informal', 'grammar', 'correct', 'traditional', 'modern', 'acceptable'],
      exercises: [
        {
          id: 'b1-u7-l5-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which is more grammatically correct in formal English?',
          options: [
            'If I was rich, I would travel.',
            'If I were rich, I would travel.',
            'Both are equally correct',
            'Neither is correct'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l5-e2',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'In formal English, we always use "were" for all persons in the second conditional.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l5-e3',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct formal form',
          points: 10,
          question: 'If she ___ here, she would help us.',
          correctAnswer: 'were',
          acceptableAnswers: ['were']
        },
        {
          id: 'b1-u7-l5-e4',
          type: 'error-correction',
          instruction: 'Correct this sentence to formal English',
          points: 10,
          sentence: 'If he was older, he would understand.',
          correctAnswer: 'If he were older, he would understand.'
        },
        {
          id: 'b1-u7-l5-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'In informal spoken English, which is acceptable?',
          options: [
            'Only "were" is acceptable',
            'Only "was" is acceptable',
            'Both "were" and "was" are acceptable',
            'Neither is acceptable'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l5-e6',
          type: 'matching',
          instruction: 'Match the formal and informal versions',
          points: 10,
          pairs: [
            { left: 'If I were you... (formal)', right: 'If I was you... (informal)' },
            { left: 'If he were here... (formal)', right: 'If he was here... (informal)' },
            { left: 'If she were taller... (formal)', right: 'If she was taller... (informal)' },
            { left: 'If it were possible... (formal)', right: 'If it was possible... (informal)' }
          ]
        },
        {
          id: 'b1-u7-l5-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If it ___ (be) summer, we could go swimming. (formal)',
          correctAnswer: 'were',
          acceptableAnswers: ['were']
        },
        {
          id: 'b1-u7-l5-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'Using "was" in second conditional is always grammatically wrong.',
          correctAnswer: false
        },
        {
          id: 'b1-u7-l5-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'In which situation should you definitely use "were"?',
          options: [
            'Casual conversation with friends',
            'Text messages',
            'Formal writing or exams',
            'Social media posts'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l5-e10',
          type: 'word-order',
          instruction: 'Put the words in the correct order (formal)',
          points: 10,
          words: ['possible,', 'If', 'it', 'were', 'would', 'I', 'help.'],
          correctOrder: [1, 2, 3, 0, 5, 4, 6]
        }
      ]
    },
    {
      id: 'b1-u7-l6',
      unitId: 'b1-u7',
      title: 'Unlikely Situations',
      description: 'Express unlikely or improbable situations using second conditional',
      order: 6,
      xpReward: 20,
      grammarPoint: 'Using second conditional for unlikely or improbable scenarios',
      vocabularyWords: ['unlikely', 'improbable', 'doubtful', 'remote', 'slim', 'chance', 'possibility', 'probability'],
      exercises: [
        {
          id: 'b1-u7-l6-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If aliens ___ Earth, what ___ they say?',
          options: [
            'visit / will',
            'visited / would',
            'will visit / would',
            'would visit / said'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l6-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I ___ (meet) a famous actor, I would ask for an autograph.',
          correctAnswer: 'met',
          acceptableAnswers: ['met']
        },
        {
          id: 'b1-u7-l6-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The sentence "If I found a million dollars, I would keep it" describes a likely situation.',
          correctAnswer: false
        },
        {
          id: 'b1-u7-l6-e4',
          type: 'matching',
          instruction: 'Match the unlikely situations with their results',
          points: 10,
          pairs: [
            { left: 'If I won the lottery,', right: 'I would buy an island.' },
            { left: 'If dinosaurs came back,', right: 'the world would be chaos.' },
            { left: 'If I could time travel,', right: 'I would visit ancient Rome.' },
            { left: 'If I became invisible,', right: 'I would play pranks on people.' }
          ]
        },
        {
          id: 'b1-u7-l6-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If pigs will fly, I would be surprised.',
          correctAnswer: 'If pigs flew, I would be surprised.'
        },
        {
          id: 'b1-u7-l6-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If you ___ the president, what ___ you do?',
          options: [
            'are / will',
            'were / would',
            'will be / would',
            'would be / did'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l6-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If robots ___ (take) over the world, humans would have to adapt.',
          correctAnswer: 'took',
          acceptableAnswers: ['took']
        },
        {
          id: 'b1-u7-l6-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['lived', 'If', 'I', 'forever,', 'would', 'I', 'learn', 'everything.'],
          correctOrder: [1, 2, 0, 3, 5, 4, 6, 7]
        },
        {
          id: 'b1-u7-l6-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which situation is the most unlikely?',
          options: [
            'If it rained tomorrow',
            'If I met a celebrity',
            'If I found gold in my garden',
            'If I forgot my password'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l6-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si pudiera volar, viajaría por el mundo. (Spanish)',
          correctAnswer: 'If I could fly, I would travel around the world.',
          acceptableAnswers: ['If I could fly, I would travel around the world.', 'If I could fly I would travel around the world']
        }
      ]
    },
    {
      id: 'b1-u7-l7',
      unitId: 'b1-u7',
      title: 'Dreams and Wishes',
      description: 'Express dreams and wishes using the second conditional',
      order: 7,
      xpReward: 20,
      grammarPoint: 'Using second conditional to talk about dreams and wishes',
      vocabularyWords: ['dream', 'wish', 'hope', 'desire', 'aspiration', 'fantasy', 'goal', 'ambition'],
      exercises: [
        {
          id: 'b1-u7-l7-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If I ___ play an instrument, I would join a band.',
          options: [
            'can',
            'could',
            'will',
            'would'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l7-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I ___ (have) more talent, I would become an artist.',
          correctAnswer: 'had',
          acceptableAnswers: ['had']
        },
        {
          id: 'b1-u7-l7-e3',
          type: 'matching',
          instruction: 'Match the dreams with the outcomes',
          points: 10,
          pairs: [
            { left: 'If I could sing well,', right: 'I would perform on stage.' },
            { left: 'If I were more creative,', right: 'I would write novels.' },
            { left: 'If I had more courage,', right: 'I would start my own business.' },
            { left: 'If I were more athletic,', right: 'I would run marathons.' }
          ]
        },
        {
          id: 'b1-u7-l7-e4',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The second conditional is commonly used to express unfulfilled wishes.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l7-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I will be famous, I would help poor people.',
          correctAnswer: 'If I were famous, I would help poor people.'
        },
        {
          id: 'b1-u7-l7-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If she ___ more confident, she ___ public speaking.',
          options: [
            'is / would try',
            'were / would try',
            'will be / tried',
            'would be / tries'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l7-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If we ___ (live) in a different country, we would experience a new culture.',
          correctAnswer: 'lived',
          acceptableAnswers: ['lived']
        },
        {
          id: 'b1-u7-l7-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['could', 'If', 'I', 'dance,', 'would', 'I', 'take', 'lessons.'],
          correctOrder: [1, 2, 0, 3, 5, 4, 6, 7]
        },
        {
          id: 'b1-u7-l7-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'What does "If I had wings, I would fly to the mountains" express?',
          options: [
            'A real possibility',
            'A future plan',
            'An impossible wish',
            'A past regret'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l7-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si tuviera más tiempo, aprendería a tocar el piano. (Spanish)',
          correctAnswer: 'If I had more time, I would learn to play the piano.',
          acceptableAnswers: ['If I had more time, I would learn to play the piano.', 'If I had more time I would learn to play the piano']
        }
      ]
    },
    {
      id: 'b1-u7-l8',
      unitId: 'b1-u7',
      title: 'Could and Might in Second Conditional',
      description: 'Use "could" and "might" instead of "would" for different meanings',
      order: 8,
      xpReward: 20,
      grammarPoint: 'Using modal verbs "could" and "might" in the result clause',
      vocabularyWords: ['possibility', 'ability', 'permission', 'modal', 'alternative', 'option', 'potential', 'capacity'],
      exercises: [
        {
          id: 'b1-u7-l8-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: '"Could" in second conditional expresses:',
          options: [
            'Certainty',
            'Ability or possibility',
            'Obligation',
            'Past action'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l8-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I had more money, I ___ buy a new car.',
          correctAnswer: 'could',
          acceptableAnswers: ['could', 'might', 'would']
        },
        {
          id: 'b1-u7-l8-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: '"Might" suggests less certainty than "would" in second conditional.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l8-e4',
          type: 'matching',
          instruction: 'Match the sentences with their meanings',
          points: 10,
          pairs: [
            { left: 'If I had time, I would help.', right: 'Definite intention' },
            { left: 'If I had time, I could help.', right: 'Ability or possibility' },
            { left: 'If I had time, I might help.', right: 'Less certain possibility' },
            { left: 'If I had time, I should help.', right: 'Moral obligation' }
          ]
        },
        {
          id: 'b1-u7-l8-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If we left now, we ___ catch the train.',
          options: [
            'will',
            'might',
            'can',
            'must'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l8-e6',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If she studied harder, she can pass the exam.',
          correctAnswer: 'If she studied harder, she could pass the exam.'
        },
        {
          id: 'b1-u7-l8-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If they moved to the countryside, they ___ (might) have a quieter life.',
          correctAnswer: 'might',
          acceptableAnswers: ['might', 'could', 'would']
        },
        {
          id: 'b1-u7-l8-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence shows the least certainty?',
          options: [
            'If I won, I would celebrate.',
            'If I won, I could celebrate.',
            'If I won, I might celebrate.',
            'All show equal certainty'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l8-e9',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['had', 'If', 'we', 'a', 'car,', 'could', 'we', 'travel', 'more.'],
          correctOrder: [1, 2, 0, 3, 4, 6, 5, 7, 8]
        },
        {
          id: 'b1-u7-l8-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si hablara francés, podría trabajar en París. (Spanish)',
          correctAnswer: 'If I spoke French, I could work in Paris.',
          acceptableAnswers: ['If I spoke French, I could work in Paris.', 'If I spoke French I could work in Paris']
        }
      ]
    },
    {
      id: 'b1-u7-l9',
      unitId: 'b1-u7',
      title: 'First vs Second Conditional',
      description: 'Distinguish between first and second conditional uses',
      order: 9,
      xpReward: 20,
      grammarPoint: 'Understanding the difference between first and second conditional',
      vocabularyWords: ['distinction', 'difference', 'likelihood', 'probability', 'real', 'unreal', 'contrast', 'compare'],
      exercises: [
        {
          id: 'b1-u7-l9-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which conditional is used for real, possible future situations?',
          options: [
            'Zero conditional',
            'First conditional',
            'Second conditional',
            'Third conditional'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l9-e2',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'The first conditional is more likely to happen than the second conditional.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l9-e3',
          type: 'matching',
          instruction: 'Match the sentences with their conditional types',
          points: 10,
          pairs: [
            { left: 'If it rains, I will stay home.', right: 'First conditional' },
            { left: 'If it rained, I would stay home.', right: 'Second conditional' },
            { left: 'If I have time, I will call you.', right: 'First conditional' },
            { left: 'If I had time, I would call you.', right: 'Second conditional' }
          ]
        },
        {
          id: 'b1-u7-l9-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence describes an unlikely or imaginary situation?',
          options: [
            'If I see her, I will tell her.',
            'If I saw her, I would tell her.',
            'When I see her, I will tell her.',
            'As soon as I see her, I will tell her.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l9-e5',
          type: 'fill-blank',
          instruction: 'Complete with first conditional',
          points: 10,
          question: 'If the weather is nice tomorrow, we ___ (go) to the beach.',
          correctAnswer: 'will go',
          acceptableAnswers: ['will go', "'ll go"]
        },
        {
          id: 'b1-u7-l9-e6',
          type: 'fill-blank',
          instruction: 'Complete with second conditional',
          points: 10,
          question: 'If the weather ___ (be) nice today, we would go to the beach.',
          correctAnswer: 'were',
          acceptableAnswers: ['were', 'was']
        },
        {
          id: 'b1-u7-l9-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I will win the lottery, I would buy a house.',
          correctAnswer: 'If I won the lottery, I would buy a house.'
        },
        {
          id: 'b1-u7-l9-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'I think it might rain. If it rains, I ___ stay home.',
          options: [
            'will',
            'would',
            'can',
            'could'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u7-l9-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'It is very unlikely, but if I ___ the lottery, I ___ quit my job.',
          options: [
            'win / will',
            'won / would',
            'will win / would',
            'would win / will'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l9-e10',
          type: 'word-order',
          instruction: 'Put the words in the correct order (first conditional)',
          points: 10,
          words: ['study,', 'If', 'you', 'will', 'you', 'pass', 'the', 'exam.'],
          correctOrder: [1, 2, 0, 4, 3, 5, 6, 7]
        }
      ]
    },
    {
      id: 'b1-u7-l10',
      unitId: 'b1-u7',
      title: 'What Would You Do If...?',
      description: 'Ask and answer hypothetical questions',
      order: 10,
      xpReward: 20,
      grammarPoint: 'Forming questions with second conditional',
      vocabularyWords: ['question', 'hypothetical', 'scenario', 'situation', 'response', 'answer', 'inquiry', 'pose'],
      exercises: [
        {
          id: 'b1-u7-l10-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'What ___ you do if you won a million dollars?',
          options: [
            'will',
            'would',
            'can',
            'did'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l10-e2',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['would', 'What', 'you', 'do', 'if', 'you', 'were', 'invisible?'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u7-l10-e3',
          type: 'fill-blank',
          instruction: 'Complete the question with the correct form',
          points: 10,
          question: 'Where ___ you live if you could live anywhere?',
          correctAnswer: 'would',
          acceptableAnswers: ['would']
        },
        {
          id: 'b1-u7-l10-e4',
          type: 'matching',
          instruction: 'Match the questions with appropriate answers',
          points: 10,
          pairs: [
            { left: 'What would you do if you met a celebrity?', right: 'I would ask for a photo.' },
            { left: 'Where would you go if you could travel anywhere?', right: 'I would go to Japan.' },
            { left: 'What would you buy if you were rich?', right: 'I would buy a yacht.' },
            { left: 'Who would you invite if you had a party?', right: 'I would invite all my friends.' }
          ]
        },
        {
          id: 'b1-u7-l10-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this question',
          points: 10,
          sentence: 'What will you do if you was the president?',
          correctAnswer: 'What would you do if you were the president?'
        },
        {
          id: 'b1-u7-l10-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'How ___ you feel if you ___ your job?',
          options: [
            'will / lose',
            'would / lost',
            'do / lost',
            'did / would lose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l10-e7',
          type: 'fill-blank',
          instruction: 'Complete the question with the correct form',
          points: 10,
          question: 'What ___ you change if you could change one thing about the world?',
          correctAnswer: 'would',
          acceptableAnswers: ['would']
        },
        {
          id: 'b1-u7-l10-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'In second conditional questions, we use "would" in the question part.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l10-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which question is correctly formed?',
          options: [
            'What you would do if you won?',
            'What would you do if you won?',
            'What would you did if you won?',
            'What will you do if you would won?'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l10-e10',
          type: 'translation',
          instruction: 'Translate this question to English',
          points: 10,
          question: '¿Qué harías si pudieras volar? (Spanish)',
          correctAnswer: 'What would you do if you could fly?',
          acceptableAnswers: ['What would you do if you could fly?', 'What would you do if you could fly']
        }
      ]
    },
    {
      id: 'b1-u7-l11',
      unitId: 'b1-u7',
      title: 'Imagining Different Lives',
      description: 'Use second conditional to imagine alternative life situations',
      order: 11,
      xpReward: 20,
      grammarPoint: 'Expressing imaginary alternative life situations',
      vocabularyWords: ['alternative', 'lifestyle', 'career', 'path', 'choice', 'direction', 'route', 'option'],
      exercises: [
        {
          id: 'b1-u7-l11-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If I ___ a doctor, I would help sick people.',
          options: [
            'am',
            'was',
            'were',
            'will be'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l11-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If she ___ (be) a teacher, she would inspire students.',
          correctAnswer: 'were',
          acceptableAnswers: ['were', 'was']
        },
        {
          id: 'b1-u7-l11-e3',
          type: 'matching',
          instruction: 'Match the imaginary professions with their activities',
          points: 10,
          pairs: [
            { left: 'If I were a chef,', right: 'I would create delicious meals.' },
            { left: 'If I were a pilot,', right: 'I would fly around the world.' },
            { left: 'If I were a musician,', right: 'I would perform concerts.' },
            { left: 'If I were an author,', right: 'I would write bestsellers.' }
          ]
        },
        {
          id: 'b1-u7-l11-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If he will be a lawyer, he would defend people.',
          correctAnswer: 'If he were a lawyer, he would defend people.'
        },
        {
          id: 'b1-u7-l11-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If they ___ in a different country, they ___ a new language.',
          options: [
            'live / will learn',
            'lived / would learn',
            'will live / learned',
            'would live / learn'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l11-e6',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If we ___ (have) our own business, we would be our own bosses.',
          correctAnswer: 'had',
          acceptableAnswers: ['had']
        },
        {
          id: 'b1-u7-l11-e7',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'Second conditional can be used to imagine being someone else or having a different career.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l11-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['were', 'If', 'I', 'a', 'scientist,', 'would', 'I', 'discover', 'cures.'],
          correctOrder: [1, 2, 0, 3, 4, 6, 5, 7, 8]
        },
        {
          id: 'b1-u7-l11-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If you ___ born in another era, which one ___ you choose?',
          options: [
            'are / will',
            'were / would',
            'will be / would',
            'would be / were'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l11-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si viviera en el campo, tendría una granja. (Spanish)',
          correctAnswer: 'If I lived in the countryside, I would have a farm.',
          acceptableAnswers: ['If I lived in the countryside, I would have a farm.', 'If I lived in the countryside I would have a farm']
        }
      ]
    },
    {
      id: 'b1-u7-l12',
      unitId: 'b1-u7',
      title: 'Polite Requests and Suggestions',
      description: 'Use second conditional for polite requests and suggestions',
      order: 12,
      xpReward: 20,
      grammarPoint: 'Making polite requests and suggestions with second conditional',
      vocabularyWords: ['polite', 'courteous', 'request', 'suggestion', 'recommend', 'propose', 'formal', 'respectful'],
      exercises: [
        {
          id: 'b1-u7-l12-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which is more polite?',
          options: [
            'Can you help me?',
            'Would you help me?',
            'Help me!',
            'You must help me.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l12-e2',
          type: 'fill-blank',
          instruction: 'Complete the polite request',
          points: 10,
          question: '___ you mind opening the window?',
          correctAnswer: 'Would',
          acceptableAnswers: ['Would', 'Could']
        },
        {
          id: 'b1-u7-l12-e3',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'Using "would" and "could" makes requests more polite.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l12-e4',
          type: 'matching',
          instruction: 'Match the direct requests with polite versions',
          points: 10,
          pairs: [
            { left: 'Tell me the time.', right: 'Would you tell me the time?' },
            { left: 'Close the door.', right: 'Could you close the door?' },
            { left: 'Give me that book.', right: 'Would you mind giving me that book?' },
            { left: 'Wait for me.', right: 'Could you wait for me?' }
          ]
        },
        {
          id: 'b1-u7-l12-e5',
          type: 'error-correction',
          instruction: 'Make this request more polite',
          points: 10,
          sentence: 'Move your car.',
          correctAnswer: 'Would you mind moving your car?'
        },
        {
          id: 'b1-u7-l12-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: '___ you like some coffee?',
          options: [
            'Do',
            'Will',
            'Would',
            'Can'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l12-e7',
          type: 'fill-blank',
          instruction: 'Complete the polite suggestion',
          points: 10,
          question: 'I ___ recommend the fish. It is excellent.',
          correctAnswer: 'would',
          acceptableAnswers: ['would', "'d"]
        },
        {
          id: 'b1-u7-l12-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['you', 'Could', 'me', 'help', 'with', 'this,', 'please?'],
          correctOrder: [1, 0, 3, 2, 4, 5, 6]
        },
        {
          id: 'b1-u7-l12-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which is the most formal and polite?',
          options: [
            'Can you send me the report?',
            'Send me the report.',
            'Would you mind sending me the report?',
            'You should send me the report.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l12-e10',
          type: 'translation',
          instruction: 'Translate this polite request to English',
          points: 10,
          question: '¿Le importaría cerrar la puerta? (Spanish)',
          correctAnswer: 'Would you mind closing the door?',
          acceptableAnswers: ['Would you mind closing the door?', 'Would you mind closing the door', 'Could you close the door?']
        }
      ]
    },
    {
      id: 'b1-u7-l13',
      unitId: 'b1-u7',
      title: 'Common Mistakes',
      description: 'Identify and avoid common errors with second conditional',
      order: 13,
      xpReward: 20,
      grammarPoint: 'Common mistakes and how to avoid them in second conditional',
      vocabularyWords: ['mistake', 'error', 'incorrect', 'wrong', 'avoid', 'correct', 'common', 'pitfall'],
      exercises: [
        {
          id: 'b1-u7-l13-e1',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I would have money, I would travel.',
          correctAnswer: 'If I had money, I would travel.'
        },
        {
          id: 'b1-u7-l13-e2',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If she will know, she would tell us.',
          correctAnswer: 'If she knew, she would tell us.'
        },
        {
          id: 'b1-u7-l13-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence is INCORRECT?',
          options: [
            'If I were rich, I would travel.',
            'If I was rich, I would travel.',
            'If I would be rich, I would travel.',
            'Both A and B are correct'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l13-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If they had time, they will help.',
          correctAnswer: 'If they had time, they would help.'
        },
        {
          id: 'b1-u7-l13-e5',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'It is correct to use "would" in both parts of the second conditional.',
          correctAnswer: false
        },
        {
          id: 'b1-u7-l13-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which is the correct form?',
          options: [
            'If I would know, I would tell you.',
            'If I knew, I will tell you.',
            'If I knew, I would tell you.',
            'If I know, I would tell you.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l13-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If he studies harder, he would pass.',
          correctAnswer: 'If he studied harder, he would pass.'
        },
        {
          id: 'b1-u7-l13-e8',
          type: 'matching',
          instruction: 'Match the incorrect sentences with their corrections',
          points: 10,
          pairs: [
            { left: 'If I would have...', right: 'If I had...' },
            { left: 'If she will come...', right: 'If she came...' },
            { left: 'If they would be here...', right: 'If they were here...' },
            { left: 'If you have money...', right: 'If you had money...' }
          ]
        },
        {
          id: 'b1-u7-l13-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If we would win, we will celebrate.',
          correctAnswer: 'If we won, we would celebrate.'
        },
        {
          id: 'b1-u7-l13-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'The most common mistake with second conditional is:',
          options: [
            'Using past perfect instead of past simple',
            'Using "would" in the if-clause',
            'Using present simple in the result clause',
            'Using "can" instead of "could"'
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 'b1-u7-l14',
      unitId: 'b1-u7',
      title: 'Creative Scenarios',
      description: 'Practice with creative and fun hypothetical scenarios',
      order: 14,
      xpReward: 20,
      grammarPoint: 'Applying second conditional to creative situations',
      vocabularyWords: ['creative', 'imaginative', 'inventive', 'original', 'scenario', 'situation', 'fantasy', 'fiction'],
      exercises: [
        {
          id: 'b1-u7-l14-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If animals ___ talk, what ___ they say?',
          options: [
            'can / will',
            'could / would',
            'will / would',
            'would / could'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l14-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If I ___ (can) read minds, I would know what people really think.',
          correctAnswer: 'could',
          acceptableAnswers: ['could']
        },
        {
          id: 'b1-u7-l14-e3',
          type: 'matching',
          instruction: 'Match the creative scenarios with outcomes',
          points: 10,
          pairs: [
            { left: 'If chocolate were healthy,', right: 'people would eat it all day.' },
            { left: 'If cars could fly,', right: 'traffic jams would not exist.' },
            { left: 'If books wrote themselves,', right: 'authors would be out of work.' },
            { left: 'If money grew on trees,', right: 'everyone would be a gardener.' }
          ]
        },
        {
          id: 'b1-u7-l14-e4',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['backwards,', 'If', 'time', 'went', 'would', 'we', 'younger.', 'get'],
          correctOrder: [1, 2, 3, 0, 5, 4, 7, 6]
        },
        {
          id: 'b1-u7-l14-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If superheroes ___ real, the world ___ very different.',
          options: [
            'are / will be',
            'were / would be',
            'will be / would be',
            'would be / was'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l14-e6',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If people ___ (live) underwater, they would need gills.',
          correctAnswer: 'lived',
          acceptableAnswers: ['lived']
        },
        {
          id: 'b1-u7-l14-e7',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'Second conditional is perfect for discussing creative and impossible scenarios.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l14-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If the internet ___ exist, how ___ people communicate?',
          options: [
            'does not / will',
            'did not / would',
            'will not / would',
            'would not / did'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l14-e9',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If robots ___ (do) all the work, humans would have more free time.',
          correctAnswer: 'did',
          acceptableAnswers: ['did']
        },
        {
          id: 'b1-u7-l14-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si pudiera hablar con los animales, sería increíble. (Spanish)',
          correctAnswer: 'If I could talk to animals, it would be incredible.',
          acceptableAnswers: ['If I could talk to animals, it would be incredible.', 'If I could talk to animals it would be incredible', 'If I could speak to animals, it would be incredible.']
        }
      ]
    },
    {
      id: 'b1-u7-l15',
      unitId: 'b1-u7',
      title: 'Comprehensive Review',
      description: 'Review all aspects of the second conditional',
      order: 15,
      xpReward: 20,
      grammarPoint: 'Complete review of second conditional structures and uses',
      vocabularyWords: ['review', 'comprehensive', 'summary', 'consolidate', 'practice', 'mastery', 'proficiency', 'fluency'],
      exercises: [
        {
          id: 'b1-u7-l15-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'If I ___ more time, I ___ learn a new language.',
          options: [
            'have / will',
            'had / would',
            'will have / would',
            'would have / learn'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l15-e2',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If she ___ (be) more confident, she would apply for the promotion.',
          correctAnswer: 'were',
          acceptableAnswers: ['were', 'was']
        },
        {
          id: 'b1-u7-l15-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence',
          points: 10,
          sentence: 'If I would know the answer, I will tell you.',
          correctAnswer: 'If I knew the answer, I would tell you.'
        },
        {
          id: 'b1-u7-l15-e4',
          type: 'matching',
          instruction: 'Match the sentence types with examples',
          points: 10,
          pairs: [
            { left: 'Hypothetical situation', right: 'If I had a car, I would drive.' },
            { left: 'Giving advice', right: 'If I were you, I would rest.' },
            { left: 'Polite request', right: 'Would you mind helping me?' },
            { left: 'Imaginary scenario', right: 'If I could fly, I would visit space.' }
          ]
        },
        {
          id: 'b1-u7-l15-e5',
          type: 'word-order',
          instruction: 'Put the words in the correct order',
          points: 10,
          words: ['lived', 'If', 'they', 'closer,', 'would', 'we', 'visit', 'them', 'more.'],
          correctOrder: [1, 2, 0, 3, 5, 4, 6, 7, 8]
        },
        {
          id: 'b1-u7-l15-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'What ___ you do if you ___ the lottery?',
          options: [
            'will / win',
            'would / won',
            'do / won',
            'did / would win'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u7-l15-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct form',
          points: 10,
          question: 'If we ___ (have) enough money, we could buy a house.',
          correctAnswer: 'had',
          acceptableAnswers: ['had']
        },
        {
          id: 'b1-u7-l15-e8',
          type: 'true-false',
          instruction: 'Decide if the statement is true or false',
          points: 10,
          statement: 'Second conditional uses past simple in the if-clause and would + infinitive in the result clause.',
          correctAnswer: true
        },
        {
          id: 'b1-u7-l15-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer',
          points: 10,
          question: 'Which sentence uses second conditional correctly?',
          options: [
            'If I see him, I would tell him.',
            'If I saw him, I will tell him.',
            'If I saw him, I would tell him.',
            'If I would see him, I told him.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u7-l15-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English',
          points: 10,
          question: 'Si tuviera más experiencia, conseguiría el trabajo. (Spanish)',
          correctAnswer: 'If I had more experience, I would get the job.',
          acceptableAnswers: ['If I had more experience, I would get the job.', 'If I had more experience I would get the job']
        }
      ]
    }
  ]
};
