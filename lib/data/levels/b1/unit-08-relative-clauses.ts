import { Unit } from '@/lib/types';

export const unit8: Unit = {
  id: 'b1-u8',
  levelId: 'b1',
  title: 'Relative Clauses',
  description: 'Connect ideas and add information using who, which, where, and other relative pronouns',
  order: 8,
  totalLessons: 15,
  icon: '🔗',
  lessons: [
    {
      id: 'b1-u8-l1',
      unitId: 'b1-u8',
      title: 'Introduction to Relative Clauses',
      description: 'Learn what relative clauses are and how they connect ideas',
      order: 1,
      xpReward: 20,
      grammarPoint: 'Relative clauses give extra information about nouns. They connect two ideas using relative pronouns like who, which, that, where, when, and whose.',
      vocabularyWords: ['clause', 'relative pronoun', 'antecedent', 'modify', 'connect', 'reference'],
      exercises: [
        {
          id: 'b1-u8-l1-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'A relative clause is used to:',
          options: [
            'Give extra information about a noun',
            'Start a new sentence',
            'End a conversation',
            'Ask a question'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u8-l1-e2',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'Relative clauses always come at the end of a sentence.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l1-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which word is a relative pronoun?',
          options: [
            'Because',
            'Who',
            'And',
            'But'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l1-e4',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The person ___ helped me was very kind.',
          correctAnswer: 'who',
          acceptableAnswers: ['who', 'that']
        },
        {
          id: 'b1-u8-l1-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'In the sentence "The book that I bought is interesting," what does the relative clause modify?',
          options: [
            'The book',
            'I bought',
            'Is interesting',
            'The sentence'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u8-l1-e6',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'Relative pronouns connect a clause to a noun in the main sentence.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l1-e7',
          type: 'matching',
          instruction: 'Match the relative pronouns with what they refer to.',
          points: 10,
          pairs: [
            { left: 'who', right: 'people' },
            { left: 'which', right: 'things' },
            { left: 'where', right: 'places' },
            { left: 'when', right: 'times' }
          ]
        },
        {
          id: 'b1-u8-l1-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The house ___ we visited was beautiful.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l1-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence contains a relative clause?',
          options: [
            'I like coffee.',
            'The coffee is hot.',
            'The coffee that I made is hot.',
            'I made coffee and tea.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l1-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'La mujer que vive aquí es mi vecina. (Spanish)',
          correctAnswer: 'The woman who lives here is my neighbor.',
          acceptableAnswers: ['The woman who lives here is my neighbor.', 'The woman who lives here is my neighbour.', 'The woman that lives here is my neighbor.']
        }
      ]
    },
    {
      id: 'b1-u8-l2',
      unitId: 'b1-u8',
      title: 'Who for People',
      description: 'Use "who" to give information about people',
      order: 2,
      xpReward: 20,
      grammarPoint: 'Use "who" to introduce a relative clause about people. Example: The teacher who taught me was excellent. "Who" refers to the teacher.',
      vocabularyWords: ['colleague', 'neighbor', 'stranger', 'relative', 'expert', 'professional'],
      exercises: [
        {
          id: 'b1-u8-l2-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The man ___ called you is my brother.',
          correctAnswer: 'who',
          acceptableAnswers: ['who']
        },
        {
          id: 'b1-u8-l2-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'The doctor ___ treated me was very professional.',
          options: [
            'which',
            'who',
            'where',
            'whose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l2-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The woman which helped me was kind.',
          correctAnswer: 'The woman who helped me was kind.'
        },
        {
          id: 'b1-u8-l2-e4',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'person', 'who', 'won', 'is', 'happy'],
          correctOrder: [0, 1, 2, 3, 4, 5]
        },
        {
          id: 'b1-u8-l2-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'I know a girl ___ speaks five languages.',
          correctAnswer: 'who',
          acceptableAnswers: ['who', 'that']
        },
        {
          id: 'b1-u8-l2-e6',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"Who" can only be used for people, not for animals or things.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l2-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: The students ___ passed the exam are celebrating.',
          options: [
            'which',
            'where',
            'who',
            'when'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l2-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'She is the teacher ___ everyone respects.',
          correctAnswer: 'who',
          acceptableAnswers: ['who', 'that', 'whom']
        },
        {
          id: 'b1-u8-l2-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'L\'homme qui travaille ici est mon ami. (French)',
          correctAnswer: 'The man who works here is my friend.',
          acceptableAnswers: ['The man who works here is my friend.', 'The man that works here is my friend.']
        },
        {
          id: 'b1-u8-l2-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The people which live next door are friendly.',
          correctAnswer: 'The people who live next door are friendly.'
        }
      ]
    },
    {
      id: 'b1-u8-l3',
      unitId: 'b1-u8',
      title: 'Which for Things',
      description: 'Use "which" to give information about things and animals',
      order: 3,
      xpReward: 20,
      grammarPoint: 'Use "which" to introduce a relative clause about things and animals. Example: The car which I bought is red. "Which" refers to the car.',
      vocabularyWords: ['device', 'equipment', 'tool', 'vehicle', 'furniture', 'appliance'],
      exercises: [
        {
          id: 'b1-u8-l3-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The book ___ is on the table belongs to me.',
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that']
        },
        {
          id: 'b1-u8-l3-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'The phone ___ I lost was expensive.',
          options: [
            'who',
            'which',
            'where',
            'whose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l3-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The car who broke down is mine.',
          correctAnswer: 'The car which broke down is mine.'
        },
        {
          id: 'b1-u8-l3-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"Which" is used for things and animals, but not for people.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l3-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The movie ___ we watched was interesting.',
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that']
        },
        {
          id: 'b1-u8-l3-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'laptop', 'which', 'she', 'uses', 'is', 'new'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l3-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: The dog ___ bit me ran away.',
          options: [
            'who',
            'which',
            'where',
            'when'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l3-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The documents ___ you need are in the folder.',
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that']
        },
        {
          id: 'b1-u8-l3-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Das Buch, das ich lese, ist spannend. (German)',
          correctAnswer: 'The book which I am reading is exciting.',
          acceptableAnswers: ['The book which I am reading is exciting.', 'The book that I am reading is exciting.', 'The book I am reading is exciting.']
        },
        {
          id: 'b1-u8-l3-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The computer who I use is old.',
          correctAnswer: 'The computer which I use is old.'
        }
      ]
    },
    {
      id: 'b1-u8-l4',
      unitId: 'b1-u8',
      title: 'That (People and Things)',
      description: 'Use "that" as a versatile relative pronoun',
      order: 4,
      xpReward: 20,
      grammarPoint: '"That" can be used instead of "who" or "which" in defining relative clauses. It is common in spoken English. Example: The person that called (= who called), The book that I read (= which I read).',
      vocabularyWords: ['versatile', 'alternative', 'informal', 'common', 'substitute', 'interchangeable'],
      exercises: [
        {
          id: 'b1-u8-l4-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The song ___ I heard was beautiful.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l4-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is correct?',
          options: [
            'That can replace who and which',
            'That can only replace who',
            'That can only replace which',
            'That cannot be used in relative clauses'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u8-l4-e3',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"That" is more common in formal writing than "which."',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l4-e4',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The girl ___ won the prize is my sister.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'who']
        },
        {
          id: 'b1-u8-l4-e5',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'movie', 'that', 'I', 'saw', 'was', 'great'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l4-e6',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The house what I bought is beautiful.',
          correctAnswer: 'The house that I bought is beautiful.'
        },
        {
          id: 'b1-u8-l4-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: This is the best pizza ___ I have ever eaten.',
          options: [
            'who',
            'that',
            'where',
            'whose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l4-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'She is the only person ___ understands me.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'who']
        },
        {
          id: 'b1-u8-l4-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'È la cosa migliore che ho mai visto. (Italian)',
          correctAnswer: 'It is the best thing that I have ever seen.',
          acceptableAnswers: ['It is the best thing that I have ever seen.', 'It\'s the best thing that I\'ve ever seen.', 'It is the best thing I have ever seen.']
        },
        {
          id: 'b1-u8-l4-e10',
          type: 'matching',
          instruction: 'Match the sentences with their correct relative pronoun.',
          points: 10,
          pairs: [
            { left: 'The man ___ lives here', right: 'that/who' },
            { left: 'The car ___ is red', right: 'that/which' },
            { left: 'The best book ___ I read', right: 'that' },
            { left: 'Everything ___ happened', right: 'that' }
          ]
        }
      ]
    },
    {
      id: 'b1-u8-l5',
      unitId: 'b1-u8',
      title: 'Where for Places',
      description: 'Use "where" to give information about places',
      order: 5,
      xpReward: 20,
      grammarPoint: 'Use "where" to introduce a relative clause about places. Example: The restaurant where we ate was expensive. "Where" = in which, at which, to which.',
      vocabularyWords: ['location', 'venue', 'destination', 'site', 'establishment', 'premises'],
      exercises: [
        {
          id: 'b1-u8-l5-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The city ___ I was born is beautiful.',
          correctAnswer: 'where',
          acceptableAnswers: ['where']
        },
        {
          id: 'b1-u8-l5-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'The hotel ___ we stayed was comfortable.',
          options: [
            'which',
            'who',
            'where',
            'when'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l5-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The place which I work is downtown.',
          correctAnswer: 'The place where I work is downtown.'
        },
        {
          id: 'b1-u8-l5-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"Where" can replace "in which", "at which", or "to which" when talking about places.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l5-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'This is the school ___ my children study.',
          correctAnswer: 'where',
          acceptableAnswers: ['where']
        },
        {
          id: 'b1-u8-l5-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'park', 'where', 'we', 'met', 'is', 'closed'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l5-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: That\'s the restaurant ___ they serve great food.',
          options: [
            'which',
            'where',
            'who',
            'whose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l5-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'I want to visit the country ___ my grandmother lived.',
          correctAnswer: 'where',
          acceptableAnswers: ['where']
        },
        {
          id: 'b1-u8-l5-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'C\'est l\'endroit où nous nous sommes rencontrés. (French)',
          correctAnswer: 'This is the place where we met.',
          acceptableAnswers: ['This is the place where we met.', 'That is the place where we met.', 'This is where we met.']
        },
        {
          id: 'b1-u8-l5-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The building who I work is very modern.',
          correctAnswer: 'The building where I work is very modern.'
        }
      ]
    },
    {
      id: 'b1-u8-l6',
      unitId: 'b1-u8',
      title: 'When for Times',
      description: 'Use "when" to give information about times',
      order: 6,
      xpReward: 20,
      grammarPoint: 'Use "when" to introduce a relative clause about time. Example: I remember the day when we first met. "When" = on which, in which, at which (for time).',
      vocabularyWords: ['moment', 'period', 'occasion', 'era', 'season', 'decade'],
      exercises: [
        {
          id: 'b1-u8-l6-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'Do you remember the day ___ we met?',
          correctAnswer: 'when',
          acceptableAnswers: ['when']
        },
        {
          id: 'b1-u8-l6-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Summer is the time ___ we go on vacation.',
          options: [
            'where',
            'which',
            'when',
            'who'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l6-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The year where I graduated was 2020.',
          correctAnswer: 'The year when I graduated was 2020.'
        },
        {
          id: 'b1-u8-l6-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"When" is used only for specific dates, not for general time periods.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l6-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'I love the spring ___ flowers bloom.',
          correctAnswer: 'when',
          acceptableAnswers: ['when']
        },
        {
          id: 'b1-u8-l6-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'moment', 'when', 'I', 'saw', 'her', 'was', 'special'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u8-l6-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: That was the period ___ everything changed.',
          options: [
            'who',
            'which',
            'when',
            'whose'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l6-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The 1960s was the decade ___ rock music became popular.',
          correctAnswer: 'when',
          acceptableAnswers: ['when']
        },
        {
          id: 'b1-u8-l6-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'El momento cuando lo vi fue inolvidable. (Spanish)',
          correctAnswer: 'The moment when I saw him was unforgettable.',
          acceptableAnswers: ['The moment when I saw him was unforgettable.', 'The moment I saw him was unforgettable.']
        },
        {
          id: 'b1-u8-l6-e10',
          type: 'matching',
          instruction: 'Match the relative pronouns with their uses.',
          points: 10,
          pairs: [
            { left: 'where', right: 'places' },
            { left: 'when', right: 'times' },
            { left: 'who', right: 'people' },
            { left: 'which', right: 'things' }
          ]
        }
      ]
    },
    {
      id: 'b1-u8-l7',
      unitId: 'b1-u8',
      title: 'Whose for Possession',
      description: 'Use "whose" to show possession in relative clauses',
      order: 7,
      xpReward: 20,
      grammarPoint: 'Use "whose" to show possession. It replaces his, her, their, its in relative clauses. Example: The man whose car broke down called for help. (= His car broke down)',
      vocabularyWords: ['possession', 'ownership', 'belonging', 'property', 'belongings', 'possessor'],
      exercises: [
        {
          id: 'b1-u8-l7-e1',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The woman ___ dog bit me apologized.',
          correctAnswer: 'whose',
          acceptableAnswers: ['whose']
        },
        {
          id: 'b1-u8-l7-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'I met a girl ___ brother is famous.',
          options: [
            'who',
            'which',
            'whose',
            'where'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l7-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The man who\'s car is red lives here.',
          correctAnswer: 'The man whose car is red lives here.'
        },
        {
          id: 'b1-u8-l7-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"Whose" and "who\'s" mean the same thing.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l7-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The company ___ CEO resigned is struggling.',
          correctAnswer: 'whose',
          acceptableAnswers: ['whose']
        },
        {
          id: 'b1-u8-l7-e6',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'student', 'whose', 'project', 'won', 'is', 'happy'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l7-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: She is the author ___ books are bestsellers.',
          options: [
            'who',
            'whose',
            'which',
            'that'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l7-e8',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The family ___ house burned down received help.',
          correctAnswer: 'whose',
          acceptableAnswers: ['whose']
        },
        {
          id: 'b1-u8-l7-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Der Mann, dessen Auto gestohlen wurde, war wütend. (German)',
          correctAnswer: 'The man whose car was stolen was angry.',
          acceptableAnswers: ['The man whose car was stolen was angry.', 'The man whose car got stolen was angry.']
        },
        {
          id: 'b1-u8-l7-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The teacher which students all passed is excellent.',
          correctAnswer: 'The teacher whose students all passed is excellent.'
        }
      ]
    },
    {
      id: 'b1-u8-l8',
      unitId: 'b1-u8',
      title: 'Defining Relative Clauses',
      description: 'Learn about essential information in relative clauses',
      order: 8,
      xpReward: 20,
      grammarPoint: 'Defining relative clauses give essential information about the noun. Without them, the sentence is incomplete or unclear. No commas are used. Example: The book that I need is on the shelf. (Which book? The one that I need)',
      vocabularyWords: ['essential', 'define', 'identify', 'specify', 'necessary', 'crucial'],
      exercises: [
        {
          id: 'b1-u8-l8-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'A defining relative clause:',
          options: [
            'Gives extra, non-essential information',
            'Gives essential information to identify the noun',
            'Always uses commas',
            'Cannot be removed from the sentence'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l8-e2',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'Defining relative clauses use commas to separate them from the main clause.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l8-e3',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The students ___ studied hard passed the exam.',
          correctAnswer: 'who',
          acceptableAnswers: ['who', 'that']
        },
        {
          id: 'b1-u8-l8-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The car, that I bought, is blue.',
          correctAnswer: 'The car that I bought is blue.'
        },
        {
          id: 'b1-u8-l8-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence has a defining relative clause?',
          options: [
            'My car, which is red, is fast.',
            'The car that I bought is red.',
            'My brother, who lives in London, is a doctor.',
            'London, which is the capital, is big.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l8-e6',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'People ___ exercise regularly are healthier.',
          correctAnswer: 'who',
          acceptableAnswers: ['who', 'that']
        },
        {
          id: 'b1-u8-l8-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'job', 'that', 'I', 'wanted', 'was', 'filled'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l8-e8',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'In defining relative clauses, you can use "that" instead of "who" or "which".',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l8-e9',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The information ___ you gave me was helpful.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l8-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'La persona que me ayudó fue muy amable. (Spanish)',
          correctAnswer: 'The person who helped me was very kind.',
          acceptableAnswers: ['The person who helped me was very kind.', 'The person that helped me was very kind.']
        }
      ]
    },
    {
      id: 'b1-u8-l9',
      unitId: 'b1-u8',
      title: 'Non-defining Relative Clauses',
      description: 'Learn about extra, non-essential information in relative clauses',
      order: 9,
      xpReward: 20,
      grammarPoint: 'Non-defining relative clauses give extra information that is not essential. They are separated by commas. You cannot use "that" in non-defining clauses. Example: My sister, who lives in Paris, is a teacher.',
      vocabularyWords: ['additional', 'parenthetical', 'supplementary', 'non-essential', 'extra', 'incidental'],
      exercises: [
        {
          id: 'b1-u8-l9-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Non-defining relative clauses:',
          options: [
            'Give essential information',
            'Give extra, non-essential information',
            'Never use commas',
            'Can use "that"'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l9-e2',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'Non-defining relative clauses must be separated by commas.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l9-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'My brother who lives in London is a doctor.',
          correctAnswer: 'My brother, who lives in London, is a doctor.'
        },
        {
          id: 'b1-u8-l9-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence has a non-defining relative clause?',
          options: [
            'The car that I bought is red.',
            'My car, which is red, is fast.',
            'The book that I need is here.',
            'People who exercise are healthy.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l9-e5',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'You can use "that" in non-defining relative clauses.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l9-e6',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'My father, ___ is 65, still works.',
          correctAnswer: 'who',
          acceptableAnswers: ['who']
        },
        {
          id: 'b1-u8-l9-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'London that is the capital of England is big.',
          correctAnswer: 'London, which is the capital of England, is big.'
        },
        {
          id: 'b1-u8-l9-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: My car, ___ I bought last year, is reliable.',
          options: [
            'that',
            'which',
            'what',
            'who'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l9-e9',
          type: 'matching',
          instruction: 'Match the clause type with its characteristics.',
          points: 10,
          pairs: [
            { left: 'Defining clause', right: 'Essential, no commas' },
            { left: 'Non-defining clause', right: 'Extra info, with commas' },
            { left: 'Can use "that"', right: 'Defining clause' },
            { left: 'Cannot use "that"', right: 'Non-defining clause' }
          ]
        },
        {
          id: 'b1-u8-l9-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Mon ami, qui habite à Paris, est médecin. (French)',
          correctAnswer: 'My friend, who lives in Paris, is a doctor.',
          acceptableAnswers: ['My friend, who lives in Paris, is a doctor.']
        }
      ]
    },
    {
      id: 'b1-u8-l10',
      unitId: 'b1-u8',
      title: 'Omitting Relative Pronouns',
      description: 'Learn when you can leave out relative pronouns',
      order: 10,
      xpReward: 20,
      grammarPoint: 'You can omit the relative pronoun (who, which, that) when it is the object of the relative clause. Example: The book (that) I read was good. You cannot omit it when it is the subject: The book that won the prize is famous.',
      vocabularyWords: ['omit', 'optional', 'subject', 'object', 'remove', 'leave out'],
      exercises: [
        {
          id: 'b1-u8-l10-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'When can you omit the relative pronoun?',
          options: [
            'Always',
            'Never',
            'When it is the object of the clause',
            'When it is the subject of the clause'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l10-e2',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'In the sentence "The book I read was good," the relative pronoun has been omitted.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l10-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'In which sentence can you omit the relative pronoun?',
          options: [
            'The man who called you is here.',
            'The book that I bought is good.',
            'The woman who lives here is nice.',
            'The dog which barked is big.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l10-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The person I spoke was helpful.',
          correctAnswer: 'The person I spoke to was helpful.'
        },
        {
          id: 'b1-u8-l10-e5',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The movie ___ won the award was excellent. (Cannot be omitted)',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l10-e6',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'You can omit the relative pronoun in "The woman who helped me was kind."',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l10-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete: The song ___ is very popular. (Which cannot be omitted)',
          options: [
            'I heard',
            'that is playing',
            'we listened to',
            'you recommended'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l10-e8',
          type: 'matching',
          instruction: 'Match the sentences with whether the pronoun can be omitted.',
          points: 10,
          pairs: [
            { left: 'The book I read...', right: 'Can omit' },
            { left: 'The book that won...', right: 'Cannot omit' },
            { left: 'The man I met...', right: 'Can omit' },
            { left: 'The man who called...', right: 'Cannot omit' }
          ]
        },
        {
          id: 'b1-u8-l10-e9',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'job', 'I', 'wanted', 'was', 'filled'],
          correctOrder: [0, 1, 2, 3, 4, 5]
        },
        {
          id: 'b1-u8-l10-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'El libro que leí era interesante. (Spanish)',
          correctAnswer: 'The book I read was interesting.',
          acceptableAnswers: ['The book I read was interesting.', 'The book that I read was interesting.', 'The book which I read was interesting.']
        }
      ]
    },
    {
      id: 'b1-u8-l11',
      unitId: 'b1-u8',
      title: 'Prepositions in Relative Clauses',
      description: 'Learn how to use prepositions with relative pronouns',
      order: 11,
      xpReward: 20,
      grammarPoint: 'Prepositions can come at the end of relative clauses (informal) or before the relative pronoun (formal). Example: The person (who) I spoke to. (informal) / The person to whom I spoke. (formal)',
      vocabularyWords: ['preposition', 'formal', 'informal', 'placement', 'structure', 'position'],
      exercises: [
        {
          id: 'b1-u8-l11-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is more informal?',
          options: [
            'The person to whom I spoke',
            'The person I spoke to',
            'The person with whom I work',
            'The person for whom I wait'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l11-e2',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The house ___ I live in is old. (informal)',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l11-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The person which I work with is nice.',
          correctAnswer: 'The person I work with is nice.'
        },
        {
          id: 'b1-u8-l11-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'Putting the preposition at the end is more common in spoken English.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l11-e5',
          type: 'matching',
          instruction: 'Match the informal version with the formal version.',
          points: 10,
          pairs: [
            { left: 'The person I spoke to', right: 'The person to whom I spoke' },
            { left: 'The house I live in', right: 'The house in which I live' },
            { left: 'The topic we talked about', right: 'The topic about which we talked' },
            { left: 'The friend I study with', right: 'The friend with whom I study' }
          ]
        },
        {
          id: 'b1-u8-l11-e6',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The company ___ I work for is international.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l11-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Complete formally: The problem ___ we are dealing is serious.',
          options: [
            'with which',
            'that with',
            'which with',
            'with that'
          ],
          correctAnswer: 0
        },
        {
          id: 'b1-u8-l11-e8',
          type: 'word-order',
          instruction: 'Put the words in the correct order (informal style).',
          points: 10,
          words: ['The', 'person', 'I', 'talked', 'to', 'was', 'helpful'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l11-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English (informal style).',
          points: 10,
          question: 'La persona con la que hablé era amable. (Spanish)',
          correctAnswer: 'The person I spoke with was kind.',
          acceptableAnswers: ['The person I spoke with was kind.', 'The person I spoke to was kind.', 'The person that I spoke with was kind.']
        },
        {
          id: 'b1-u8-l11-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The project I\'m working is challenging.',
          correctAnswer: 'The project I\'m working on is challenging.'
        }
      ]
    },
    {
      id: 'b1-u8-l12',
      unitId: 'b1-u8',
      title: 'Combining Sentences',
      description: 'Practice combining sentences using relative clauses',
      order: 12,
      xpReward: 20,
      grammarPoint: 'Use relative clauses to combine two sentences into one. Example: I met a woman. She works at the hospital. → I met a woman who works at the hospital.',
      vocabularyWords: ['combine', 'merge', 'join', 'connect', 'unify', 'integrate'],
      exercises: [
        {
          id: 'b1-u8-l12-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Combine: "I have a friend. He lives in Paris." Which is correct?',
          options: [
            'I have a friend which lives in Paris.',
            'I have a friend who lives in Paris.',
            'I have a friend where lives in Paris.',
            'I have a friend when lives in Paris.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l12-e2',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['I', 'bought', 'a', 'car', 'that', 'was', 'expensive'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6]
        },
        {
          id: 'b1-u8-l12-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Combine: "She works in a building. It is very modern."',
          options: [
            'She works in a building who is very modern.',
            'She works in a building which is very modern.',
            'She works in a building where is very modern.',
            'She works in a building when is very modern.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l12-e4',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'I visited the museum. It was built in 1850. → I visited the museum ___ was built in 1850.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l12-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'I know a place it has great coffee.',
          correctAnswer: 'I know a place that has great coffee.'
        },
        {
          id: 'b1-u8-l12-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Combine: "The woman called me. Her car broke down."',
          options: [
            'The woman who car broke down called me.',
            'The woman whose car broke down called me.',
            'The woman which car broke down called me.',
            'The woman that car broke down called me.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l12-e7',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'I remember the day. We first met. → I remember the day ___ we first met.',
          correctAnswer: 'when',
          acceptableAnswers: ['when']
        },
        {
          id: 'b1-u8-l12-e8',
          type: 'matching',
          instruction: 'Match the sentence pairs with the correct relative pronoun to combine them.',
          points: 10,
          pairs: [
            { left: 'The man + He helped me', right: 'who/that' },
            { left: 'The book + It was stolen', right: 'which/that' },
            { left: 'The city + I was born there', right: 'where' },
            { left: 'The woman + Her dog bit me', right: 'whose' }
          ]
        },
        {
          id: 'b1-u8-l12-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'Tengo un amigo que habla inglés. (Spanish)',
          correctAnswer: 'I have a friend who speaks English.',
          acceptableAnswers: ['I have a friend who speaks English.', 'I have a friend that speaks English.']
        },
        {
          id: 'b1-u8-l12-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The restaurant we ate there was excellent.',
          correctAnswer: 'The restaurant where we ate was excellent.'
        }
      ]
    },
    {
      id: 'b1-u8-l13',
      unitId: 'b1-u8',
      title: 'Who vs Whom',
      description: 'Understand the difference between who and whom',
      order: 13,
      xpReward: 20,
      grammarPoint: '"Who" is used as the subject. "Whom" is used as the object (more formal). Example: The man who called (subject) vs. The man whom I called (object). In modern English, "who" is often used instead of "whom".',
      vocabularyWords: ['subject', 'object', 'formal', 'distinction', 'grammatical', 'case'],
      exercises: [
        {
          id: 'b1-u8-l13-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is correct in formal English? "The person ___ I met was nice."',
          options: [
            'who',
            'whom',
            'which',
            'whose'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l13-e2',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"Whom" is more common in spoken English than "who".',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l13-e3',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The woman ___ answered the phone was polite. (subject)',
          correctAnswer: 'who',
          acceptableAnswers: ['who']
        },
        {
          id: 'b1-u8-l13-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is more formal? "The person ___ I spoke to."',
          options: [
            'who',
            'whom',
            'that',
            'which'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l13-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence (make it formal).',
          points: 10,
          sentence: 'The man who I saw was tall.',
          correctAnswer: 'The man whom I saw was tall.'
        },
        {
          id: 'b1-u8-l13-e6',
          type: 'matching',
          instruction: 'Match the function with the correct pronoun.',
          points: 10,
          pairs: [
            { left: 'Subject of clause', right: 'who' },
            { left: 'Object of clause (formal)', right: 'whom' },
            { left: 'Modern spoken English', right: 'who (for both)' },
            { left: 'After preposition (formal)', right: 'whom' }
          ]
        },
        {
          id: 'b1-u8-l13-e7',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'To ___ should I address this letter? (formal)',
          correctAnswer: 'whom',
          acceptableAnswers: ['whom']
        },
        {
          id: 'b1-u8-l13-e8',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'In modern informal English, "who" can replace "whom" as the object.',
          correctAnswer: true
        },
        {
          id: 'b1-u8-l13-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is correct formally? "The person with ___ I work is kind."',
          options: [
            'who',
            'whom',
            'that',
            'which'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l13-e10',
          type: 'translation',
          instruction: 'Translate this sentence to English (formal style).',
          points: 10,
          question: 'La persona a quien llamé no respondió. (Spanish)',
          correctAnswer: 'The person whom I called did not answer.',
          acceptableAnswers: ['The person whom I called did not answer.', 'The person whom I called didn\'t answer.', 'The person who I called did not answer.']
        }
      ]
    },
    {
      id: 'b1-u8-l14',
      unitId: 'b1-u8',
      title: 'Common Mistakes',
      description: 'Learn to avoid common errors with relative clauses',
      order: 14,
      xpReward: 20,
      grammarPoint: 'Common mistakes include: using "what" instead of relative pronouns, double subjects, wrong pronoun choice, and incorrect comma usage. Always identify the noun you are referring to.',
      vocabularyWords: ['mistake', 'error', 'common', 'avoid', 'incorrect', 'correction'],
      exercises: [
        {
          id: 'b1-u8-l14-e1',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The thing what I need is here.',
          correctAnswer: 'The thing that I need is here.'
        },
        {
          id: 'b1-u8-l14-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence is INCORRECT?',
          options: [
            'The man who lives here is nice.',
            'The man that lives here is nice.',
            'The man what lives here is nice.',
            'The man living here is nice.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l14-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The woman who she helped me was kind.',
          correctAnswer: 'The woman who helped me was kind.'
        },
        {
          id: 'b1-u8-l14-e4',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: '"What" can be used as a relative pronoun to refer to a specific noun.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l14-e5',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The book, that I read, was good.',
          correctAnswer: 'The book that I read was good.'
        },
        {
          id: 'b1-u8-l14-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which is INCORRECT?',
          options: [
            'The car which I bought is red.',
            'The car I bought is red.',
            'The car what I bought is red.',
            'The car that I bought is red.'
          ],
          correctAnswer: 2
        },
        {
          id: 'b1-u8-l14-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'I know a place where sells great coffee.',
          correctAnswer: 'I know a place that sells great coffee.'
        },
        {
          id: 'b1-u8-l14-e8',
          type: 'matching',
          instruction: 'Match the common mistakes with their corrections.',
          points: 10,
          pairs: [
            { left: 'The thing what I want', right: 'The thing that I want' },
            { left: 'The man who he came', right: 'The man who came' },
            { left: 'London, that is big', right: 'London, which is big' },
            { left: 'The place where sells', right: 'The place that sells' }
          ]
        },
        {
          id: 'b1-u8-l14-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'The person which I met was friendly.',
          correctAnswer: 'The person I met was friendly.'
        },
        {
          id: 'b1-u8-l14-e10',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'It is correct to say: "The woman who she lives here is my friend."',
          correctAnswer: false
        }
      ]
    },
    {
      id: 'b1-u8-l15',
      unitId: 'b1-u8',
      title: 'Comprehensive Review',
      description: 'Review all concepts about relative clauses',
      order: 15,
      xpReward: 20,
      grammarPoint: 'Relative clauses connect ideas and give information about nouns. Use who (people), which (things), that (both), where (places), when (times), and whose (possession). Remember defining vs. non-defining clauses.',
      vocabularyWords: ['comprehensive', 'review', 'consolidate', 'practice', 'mastery', 'proficiency'],
      exercises: [
        {
          id: 'b1-u8-l15-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'The teacher ___ class I attend is excellent.',
          options: [
            'who',
            'whose',
            'which',
            'where'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l15-e2',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The city ___ I grew up has changed a lot.',
          correctAnswer: 'where',
          acceptableAnswers: ['where']
        },
        {
          id: 'b1-u8-l15-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'My sister, that lives in London, is a doctor.',
          correctAnswer: 'My sister, who lives in London, is a doctor.'
        },
        {
          id: 'b1-u8-l15-e4',
          type: 'matching',
          instruction: 'Match the relative pronouns with their uses.',
          points: 10,
          pairs: [
            { left: 'who', right: 'people' },
            { left: 'where', right: 'places' },
            { left: 'whose', right: 'possession' },
            { left: 'when', right: 'times' }
          ]
        },
        {
          id: 'b1-u8-l15-e5',
          type: 'true-false',
          instruction: 'Is this statement true or false?',
          points: 10,
          statement: 'You can omit the relative pronoun when it is the subject of the clause.',
          correctAnswer: false
        },
        {
          id: 'b1-u8-l15-e6',
          type: 'fill-blank',
          instruction: 'Fill in the blank with the correct word.',
          points: 10,
          question: 'The book ___ won the prize is famous.',
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which']
        },
        {
          id: 'b1-u8-l15-e7',
          type: 'word-order',
          instruction: 'Put the words in the correct order.',
          points: 10,
          words: ['The', 'person', 'whose', 'car', 'was', 'stolen', 'called', 'police'],
          correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
          id: 'b1-u8-l15-e8',
          type: 'multiple-choice',
          instruction: 'Choose the correct answer.',
          points: 10,
          question: 'Which sentence has a non-defining relative clause?',
          options: [
            'The car that I bought is red.',
            'My car, which is red, is fast.',
            'The book I read was good.',
            'People who exercise are healthy.'
          ],
          correctAnswer: 1
        },
        {
          id: 'b1-u8-l15-e9',
          type: 'translation',
          instruction: 'Translate this sentence to English.',
          points: 10,
          question: 'C\'est le moment où tout a changé. (French)',
          correctAnswer: 'This is the moment when everything changed.',
          acceptableAnswers: ['This is the moment when everything changed.', 'That is the moment when everything changed.', 'This is when everything changed.']
        },
        {
          id: 'b1-u8-l15-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          points: 10,
          sentence: 'Everything what you said was true.',
          correctAnswer: 'Everything that you said was true.'
        }
      ]
    }
  ]
};
