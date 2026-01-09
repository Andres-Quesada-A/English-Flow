import { Unit, Lesson, Exercise } from '@/lib/types';

const lesson1: Lesson = {
  id: 'b2-u8-l1',
  unitId: 'b2-u8',
  title: 'Wish + Past Simple (Present Wishes)',
  description: 'Learn to express wishes about present situations',
  order: 1,
  xpReward: 20,
  grammarPoint: 'Use "I wish + past simple" to express wishes about present situations that are not true or not possible.',
  vocabularyWords: ['wish', 'reality', 'unreal', 'dissatisfaction', 'desire', 'situation', 'different', 'opposite'],
  exercises: [
    {
      id: 'b2-u8-l1-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence expresses a wish about the present?',
      options: [
        'I wish I lived near the beach.',
        'I wish I will live near the beach.',
        'I wish I live near the beach.',
        'I wish I am living near the beach.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "I wish + past simple" to express wishes about present situations. "I wish I lived" = I don\'t live there now, but I want to.'
    },
    {
      id: 'b2-u8-l1-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence with the correct form',
      question: 'I wish I ___ (speak) Spanish fluently.',
      correctAnswer: 'spoke',
      points: 10,
      explanation: 'After "I wish" use the past simple form. "I wish I spoke" means I don\'t speak Spanish fluently now.'
    },
    {
      id: 'b2-u8-l1-e3',
      type: 'multiple-choice',
      instruction: 'What is the reality?',
      question: '"I wish I had more free time." What is true?',
      options: [
        'I don\'t have much free time.',
        'I have a lot of free time.',
        'I will have more free time.',
        'I had more free time before.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'When we say "I wish I had...", the reality is the opposite: I don\'t have much free time now.'
    },
    {
      id: 'b2-u8-l1-e4',
      type: 'word-order',
      instruction: 'Put the words in the correct order',
      words: ['I', 'wish', 'knew', 'I', 'the answer'],
      correctOrder: [0, 1, 3, 2, 4],
      points: 10,
      explanation: 'Structure: I wish + subject + past simple verb. "I wish I knew the answer" = I don\'t know it now.'
    },
    {
      id: 'b2-u8-l1-e5',
      type: 'translation',
      instruction: 'Translate this sentence to English',
      question: 'Desearía tener un coche nuevo.',
      correctAnswer: 'I wish I had a new car',
      points: 10,
      explanation: 'Use "I wish + past simple" for present wishes. "I wish I had" = I don\'t have one now.'
    },
    {
      id: 'b2-u8-l1-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake in this sentence',
      sentence: 'I wish I have more money.',
      correctAnswer: 'I wish I had more money.',
      points: 10,
      explanation: 'After "I wish", use past simple, not present. "I wish I had" (not "have").'
    },
    {
      id: 'b2-u8-l1-e7',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'She wishes she ___ (be) taller.',
      correctAnswer: 'was',
      points: 10,
      explanation: 'After "wish", use past simple. With "be", you can use "was" or "were" (more formal). "She wishes she was/were taller."'
    },
    {
      id: 'b2-u8-l1-e8',
      type: 'true-false',
      instruction: 'Is this statement correct?',
      statement: '"I wish I lived in Paris" means I currently live in Paris.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "I wish I lived in Paris" means I DON\'T live in Paris now, but I want to.'
    },
    {
      id: 'b2-u8-l1-e9',
      type: 'matching',
      instruction: 'Match the wish with the reality',
      pairs: [
        { left: 'I wish I could cook well.', right: 'I can\'t cook well.' },
        { left: 'I wish I had a dog.', right: 'I don\'t have a dog.' },
        { left: 'I wish I knew his name.', right: 'I don\'t know his name.' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l1-e10',
      type: 'context-completion',
      instruction: 'Complete the sentence appropriately',
      context: 'I live in a small apartment. I wish I ___.',
      options: ['lived in a bigger house', 'live in a bigger house', 'will live in a bigger house'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use past simple after "I wish" for present wishes. "I wish I lived..." expresses desire for a different present situation.'
    }
  ]
};

const lesson2: Lesson = {
  id: 'b2-u8-l2',
  unitId: 'b2-u8',
  title: 'Wish + Past Perfect (Past Regrets)',
  description: 'Learn to express regrets about the past',
  order: 2,
  xpReward: 20,
  grammarPoint: 'Use "I wish + past perfect" to express regrets about past actions or situations that cannot be changed.',
  vocabularyWords: ['regret', 'mistake', 'past', 'should have', 'opportunity', 'missed', 'differently', 'hindsight'],
  exercises: [
    {
      id: 'b2-u8-l2-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which sentence expresses regret about the past?',
      options: [
        'I wish I had studied harder.',
        'I wish I studied harder.',
        'I wish I study harder.',
        'I wish I will study harder.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "I wish + past perfect (had + past participle)" to express regrets about the past.'
    },
    {
      id: 'b2-u8-l2-e2',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'I wish I ___ (go) to the party last night.',
      correctAnswer: 'had gone',
      points: 10,
      explanation: 'For past regrets, use "wish + had + past participle". "I wish I had gone" = I didn\'t go, and I regret it.'
    },
    {
      id: 'b2-u8-l2-e3',
      type: 'matching',
      instruction: 'Match the regret with what actually happened',
      pairs: [
        { left: 'I wish I had saved more money.', right: 'I didn\'t save enough money.' },
        { left: 'I wish I hadn\'t said that.', right: 'I said something I regret.' },
        { left: 'I wish I had listened to you.', right: 'I didn\'t listen to you.' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l2-e4',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['I', 'wish', 'I', 'had', 'taken', 'that job'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: 'Structure: I wish + I + had + past participle. This expresses regret about not taking a job in the past.'
    },
    {
      id: 'b2-u8-l2-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá hubiera estudiado medicina.',
      correctAnswer: 'I wish I had studied medicine',
      points: 10,
      explanation: 'For past regrets, use "I wish + had + past participle".'
    },
    {
      id: 'b2-u8-l2-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I didn\'t buy that car.',
      correctAnswer: 'I wish I hadn\'t bought that car.',
      points: 10,
      explanation: 'For past regrets, use past perfect (had + past participle), not past simple.'
    },
    {
      id: 'b2-u8-l2-e7',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'She wishes she ___ (not quit) her job last year.',
      correctAnswer: 'hadn\'t quit',
      points: 10,
      explanation: 'Negative past regret: wish + hadn\'t + past participle. "She wishes she hadn\'t quit" = she quit and regrets it.'
    },
    {
      id: 'b2-u8-l2-e8',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I had been more careful" means I was very careful.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "I wish I had been more careful" means I WASN\'T careful enough, and I regret it.'
    },
    {
      id: 'b2-u8-l2-e9',
      type: 'categorization',
      instruction: 'Categorize these wishes',
      categories: ['Present Wish', 'Past Regret'],
      items: [
        { text: 'I wish I lived closer', category: 'Present Wish' },
        { text: 'I wish I had called him', category: 'Past Regret' },
        { text: 'I wish I knew the answer', category: 'Present Wish' },
        { text: 'I wish I hadn\'t lied', category: 'Past Regret' }
      ],
      points: 10,
      explanation: 'Past simple = present wish. Past perfect = past regret.'
    },
    {
      id: 'b2-u8-l2-e10',
      type: 'context-completion',
      instruction: 'Complete appropriately',
      context: 'I failed the exam. I wish I ___.',
      options: ['had studied harder', 'studied harder', 'study harder'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Since the exam is in the past, use past perfect: "I wish I had studied harder."'
    }
  ]
};

const lesson3: Lesson = {
  id: 'b2-u8-l3',
  unitId: 'b2-u8',
  title: 'Wish + Would (Future Wishes/Annoyance)',
  description: 'Learn to express wishes about future or annoying behaviors',
  order: 3,
  xpReward: 20,
  grammarPoint: 'Use "I wish + would" to express wishes about future situations or complaints about annoying habits (usually about other people).',
  vocabularyWords: ['annoyance', 'irritation', 'behavior', 'habit', 'complaint', 'change', 'stop', 'future'],
  exercises: [
    {
      id: 'b2-u8-l3-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which expresses annoyance about someone\'s behavior?',
      options: [
        'I wish he would stop smoking.',
        'I wish he stopped smoking.',
        'I wish he stops smoking.',
        'I wish he had stopped smoking.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "I wish + would" to complain about annoying habits or behaviors, usually of other people.'
    },
    {
      id: 'b2-u8-l3-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish it ___ (stop) raining.',
      correctAnswer: 'would stop',
      points: 10,
      explanation: 'Use "wish + would + base verb" for situations we want to change. "I wish it would stop raining."'
    },
    {
      id: 'b2-u8-l3-e3',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: 'We can use "I wish I would" to talk about our own habits.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. We typically use "wish + would" for OTHER people\'s behavior, not our own. For ourselves, use "wish + past simple" or "wish + could".'
    },
    {
      id: 'b2-u8-l3-e4',
      type: 'word-order',
      instruction: 'Arrange the words correctly',
      words: ['I', 'wish', 'you', 'would', 'listen', 'to me'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: 'Structure: I wish + subject + would + base verb. Used to express annoyance or desire for change.'
    },
    {
      id: 'b2-u8-l3-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá dejara de llover.',
      correctAnswer: 'I wish it would stop raining',
      points: 10,
      explanation: 'For situations we want to change, use "I wish + would + verb".'
    },
    {
      id: 'b2-u8-l3-e6',
      type: 'matching',
      instruction: 'Match the wish with its meaning',
      pairs: [
        { left: 'I wish she would call me.', right: 'I want her to call me (but she doesn\'t).' },
        { left: 'I wish he wouldn\'t be so rude.', right: 'His rudeness annoys me.' },
        { left: 'I wish they would arrive.', right: 'I want them to arrive (they\'re late).' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l3-e7',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish my neighbors ___ (not make) so much noise at night.',
      correctAnswer: 'wouldn\'t make',
      points: 10,
      explanation: 'Negative: wish + wouldn\'t + base verb. Used to complain about annoying behavior.'
    },
    {
      id: 'b2-u8-l3-e8',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish she will help me.',
      correctAnswer: 'I wish she would help me.',
      points: 10,
      explanation: 'After "wish", use "would" (not "will") for future wishes or requests.'
    },
    {
      id: 'b2-u8-l3-e9',
      type: 'categorization',
      instruction: 'What type of wish is this?',
      categories: ['Complaint/Annoyance', 'Present Wish', 'Past Regret'],
      items: [
        { text: 'I wish he would be quiet', category: 'Complaint/Annoyance' },
        { text: 'I wish I had more time', category: 'Present Wish' },
        { text: 'I wish I had known', category: 'Past Regret' }
      ],
      points: 10,
      explanation: '"Wish + would" is typically used for complaints or wishes about changeable situations.'
    },
    {
      id: 'b2-u8-l3-e10',
      type: 'context-completion',
      instruction: 'Choose the best completion',
      context: 'My brother plays loud music every night. I wish he ___.',
      options: ['would turn it down', 'turned it down', 'had turned it down'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For complaints about annoying behavior, use "wish + would". "I wish he would turn it down."'
    }
  ]
};

const lesson4: Lesson = {
  id: 'b2-u8-l4',
  unitId: 'b2-u8',
  title: 'If Only for Emphasis',
  description: 'Learn to use "if only" to express strong wishes and regrets',
  order: 4,
  xpReward: 20,
  grammarPoint: '"If only" has the same meaning as "I wish" but is more emphatic and emotional. Use the same tenses: past simple (present), past perfect (past regret), would (future/annoyance).',
  vocabularyWords: ['emphasis', 'stronger', 'emotional', 'dramatic', 'intense', 'heartfelt', 'deep regret', 'longing'],
  exercises: [
    {
      id: 'b2-u8-l4-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'What is the difference between "I wish" and "if only"?',
      options: [
        '"If only" is more emphatic and emotional.',
        '"If only" is less formal.',
        '"If only" is for the future only.',
        'They have completely different meanings.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: '"If only" means the same as "I wish" but expresses stronger emotion and emphasis.'
    },
    {
      id: 'b2-u8-l4-e2',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'If only I ___ (be) rich!',
      correctAnswer: 'was',
      points: 10,
      explanation: 'For present wishes, use "if only + past simple". "If only I was/were rich!" (same as "I wish I was rich" but stronger).'
    },
    {
      id: 'b2-u8-l4-e3',
      type: 'matching',
      instruction: 'Match equivalent expressions',
      pairs: [
        { left: 'I wish I knew', right: 'If only I knew' },
        { left: 'I wish I had gone', right: 'If only I had gone' },
        { left: 'I wish he would stop', right: 'If only he would stop' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l4-e4',
      type: 'translation',
      instruction: 'Translate to English using "if only"',
      question: '¡Si tan solo hubiera sabido!',
      correctAnswer: 'If only I had known',
      points: 10,
      explanation: 'For past regrets with emphasis, use "if only + past perfect".'
    },
    {
      id: 'b2-u8-l4-e5',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['if', 'only', 'I', 'could', 'fly'],
      correctOrder: [0, 1, 2, 3, 4],
      points: 10,
      explanation: 'Structure: If only + subject + verb. "If only I could fly!" expresses a strong wish about ability.'
    },
    {
      id: 'b2-u8-l4-e6',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'If only I ___ (not say) that! Now everyone is angry.',
      correctAnswer: 'hadn\'t said',
      points: 10,
      explanation: 'For strong past regrets, use "if only + past perfect". "If only I hadn\'t said that!"'
    },
    {
      id: 'b2-u8-l4-e7',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"If only" can only be used for past regrets.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "If only" can be used for present wishes, past regrets, and future/behavioral complaints, just like "I wish".'
    },
    {
      id: 'b2-u8-l4-e8',
      type: 'categorization',
      instruction: 'What time does this refer to?',
      categories: ['Present', 'Past', 'Future/Behavior'],
      items: [
        { text: 'If only I lived there', category: 'Present' },
        { text: 'If only I had known', category: 'Past' },
        { text: 'If only it would stop', category: 'Future/Behavior' }
      ],
      points: 10,
      explanation: 'Past simple = present, past perfect = past, would = future or behavior.'
    },
    {
      id: 'b2-u8-l4-e9',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'If only I have more time!',
      correctAnswer: 'If only I had more time!',
      points: 10,
      explanation: 'For present wishes, use past simple after "if only". "If only I had" (not "have").'
    },
    {
      id: 'b2-u8-l4-e10',
      type: 'context-completion',
      instruction: 'Choose the most emphatic expression',
      context: 'I really regret not going to university. ___!',
      options: ['If only I had gone', 'I wish I had gone', 'I should have gone'],
      correctAnswer: 0,
      points: 10,
      explanation: '"If only" is the most emphatic and emotional way to express regret.'
    }
  ]
};

const lesson5: Lesson = {
  id: 'b2-u8-l5',
  unitId: 'b2-u8',
  title: 'Wishes About Abilities',
  description: 'Learn to express wishes about abilities using "could"',
  order: 5,
  xpReward: 20,
  grammarPoint: 'Use "I wish I could" for present abilities and "I wish I could have" for past missed opportunities.',
  vocabularyWords: ['ability', 'capability', 'skill', 'talent', 'limitation', 'impossible', 'dream', 'aspiration'],
  exercises: [
    {
      id: 'b2-u8-l5-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which expresses a wish about a present ability?',
      options: [
        'I wish I could speak Chinese.',
        'I wish I can speak Chinese.',
        'I wish I could have spoken Chinese.',
        'I wish I will speak Chinese.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "I wish I could" to express wishes about abilities you don\'t have now.'
    },
    {
      id: 'b2-u8-l5-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish I ___ (can) play the guitar.',
      correctAnswer: 'could',
      points: 10,
      explanation: 'After "wish", use "could" (not "can") to talk about abilities. "I wish I could play."'
    },
    {
      id: 'b2-u8-l5-e3',
      type: 'matching',
      instruction: 'Match the wish with the reality',
      pairs: [
        { left: 'I wish I could swim.', right: 'I can\'t swim.' },
        { left: 'I wish I could have helped.', right: 'I couldn\'t help (in the past).' },
        { left: 'I wish I could fly.', right: 'I can\'t fly.' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l5-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá pudiera hablar francés.',
      correctAnswer: 'I wish I could speak French',
      points: 10,
      explanation: 'For wishes about present abilities, use "I wish I could + verb".'
    },
    {
      id: 'b2-u8-l5-e5',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'I wish I ___ (can) have attended the meeting yesterday.',
      correctAnswer: 'could',
      points: 10,
      explanation: 'For past missed opportunities, use "wish + could have + past participle". "I wish I could have attended."'
    },
    {
      id: 'b2-u8-l5-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I can drive.',
      correctAnswer: 'I wish I could drive.',
      points: 10,
      explanation: 'After "wish", use "could" (not "can"). "I wish I could drive."'
    },
    {
      id: 'b2-u8-l5-e7',
      type: 'word-order',
      instruction: 'Put the words in order',
      words: ['if', 'only', 'I', 'could', 'have', 'been there'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: 'For emphatic past regrets about ability: "If only I could have been there."'
    },
    {
      id: 'b2-u8-l5-e8',
      type: 'categorization',
      instruction: 'Categorize these wishes',
      categories: ['Present Ability', 'Past Opportunity'],
      items: [
        { text: 'I wish I could dance', category: 'Present Ability' },
        { text: 'I wish I could have helped', category: 'Past Opportunity' },
        { text: 'I wish I could see the future', category: 'Present Ability' }
      ],
      points: 10,
      explanation: '"Could" alone = present ability wish. "Could have" = past opportunity regret.'
    },
    {
      id: 'b2-u8-l5-e9',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I could have gone" means I went.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "I wish I could have gone" means I DIDN\'T go, and I regret not being able to.'
    },
    {
      id: 'b2-u8-l5-e10',
      type: 'context-completion',
      instruction: 'Complete appropriately',
      context: 'I don\'t have time to help you right now. I wish I ___.',
      options: ['could help', 'can help', 'could have helped'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For present inability, use "I wish I could + verb". "I wish I could help."'
    }
  ]
};

const lesson6: Lesson = {
  id: 'b2-u8-l6',
  unitId: 'b2-u8',
  title: 'Wishes About Situations',
  description: 'Learn to express wishes about general situations and circumstances',
  order: 6,
  xpReward: 20,
  grammarPoint: 'Use "I wish" with various tenses to express dissatisfaction with current situations or regret about past circumstances.',
  vocabularyWords: ['circumstance', 'situation', 'condition', 'state', 'environment', 'position', 'predicament', 'dilemma'],
  exercises: [
    {
      id: 'b2-u8-l6-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'I\'m stuck in traffic. Which wish is appropriate?',
      options: [
        'I wish there wasn\'t so much traffic.',
        'I wish there isn\'t so much traffic.',
        'I wish there won\'t be traffic.',
        'I wish there hadn\'t been traffic.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'For present situations, use "I wish + past simple". "I wish there wasn\'t..."'
    },
    {
      id: 'b2-u8-l6-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish the weather ___ (be) better today.',
      correctAnswer: 'was',
      points: 10,
      explanation: 'For present situations, use past simple. "I wish the weather was better."'
    },
    {
      id: 'b2-u8-l6-e3',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá no estuviera lloviendo.',
      correctAnswer: 'I wish it wasn\'t raining',
      points: 10,
      explanation: 'For current situations, use "I wish + past continuous" for actions in progress. "I wish it wasn\'t raining."'
    },
    {
      id: 'b2-u8-l6-e4',
      type: 'matching',
      instruction: 'Match the wish with the situation',
      pairs: [
        { left: 'I wish it was Friday.', right: 'It\'s only Tuesday.' },
        { left: 'I wish I wasn\'t so tired.', right: 'I\'m exhausted.' },
        { left: 'I wish there was more time.', right: 'Time is running out.' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l6-e5',
      type: 'word-order',
      instruction: 'Arrange correctly',
      words: ['I', 'wish', 'things', 'were', 'different'],
      correctOrder: [0, 1, 2, 3, 4],
      points: 10,
      explanation: 'General wish about a situation: "I wish things were different."'
    },
    {
      id: 'b2-u8-l6-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish the situation is better.',
      correctAnswer: 'I wish the situation was better.',
      points: 10,
      explanation: 'After "wish", use past simple (not present) for present situations.'
    },
    {
      id: 'b2-u8-l6-e7',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I wish we ___ (not have) to work on weekends.',
      correctAnswer: 'didn\'t have',
      points: 10,
      explanation: 'Negative present wish: "I wish we didn\'t have to..." (present obligation we don\'t like).'
    },
    {
      id: 'b2-u8-l6-e8',
      type: 'categorization',
      instruction: 'What does each wish express?',
      categories: ['Dissatisfaction', 'Regret', 'Complaint'],
      items: [
        { text: 'I wish I was happier', category: 'Dissatisfaction' },
        { text: 'I wish I had tried harder', category: 'Regret' },
        { text: 'I wish he would be quiet', category: 'Complaint' }
      ],
      points: 10,
      explanation: 'Different wish structures express different emotions.'
    },
    {
      id: 'b2-u8-l6-e9',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I was on vacation" means I am currently on vacation.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "I wish I was on vacation" means I\'m NOT on vacation, but I want to be.'
    },
    {
      id: 'b2-u8-l6-e10',
      type: 'context-completion',
      instruction: 'Complete the wish',
      context: 'The office is too cold. I wish ___.',
      options: ['it was warmer', 'it is warmer', 'it will be warmer'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For present situations, use "I wish + past simple".'
    }
  ]
};

const lesson7: Lesson = {
  id: 'b2-u8-l7',
  unitId: 'b2-u8',
  title: 'Wishes About Other People\'s Behavior',
  description: 'Learn to express wishes and complaints about how others act',
  order: 7,
  xpReward: 20,
  grammarPoint: 'Use "I wish + would/wouldn\'t" to express annoyance or desires about other people\'s behavior.',
  vocabularyWords: ['behavior', 'conduct', 'actions', 'manners', 'inconsiderate', 'thoughtless', 'annoying', 'frustrating'],
  exercises: [
    {
      id: 'b2-u8-l7-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'How do you complain about someone\'s annoying habit?',
      options: [
        'I wish he would stop doing that.',
        'I wish he stops doing that.',
        'I wish he stopped doing that.',
        'I wish he had stopped doing that.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "I wish + would" to complain about someone\'s behavior. "I wish he would stop."'
    },
    {
      id: 'b2-u8-l7-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish my roommate ___ (clean) up after himself.',
      correctAnswer: 'would clean',
      points: 10,
      explanation: 'To express annoyance about behavior: "I wish + subject + would + verb".'
    },
    {
      id: 'b2-u8-l7-e3',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá dejaran de hacer tanto ruido.',
      correctAnswer: 'I wish they would stop making so much noise',
      points: 10,
      explanation: 'For complaints about behavior, use "I wish + would + verb".'
    },
    {
      id: 'b2-u8-l7-e4',
      type: 'matching',
      instruction: 'Match the complaint with the behavior',
      pairs: [
        { left: 'I wish he wouldn\'t interrupt me.', right: 'He keeps interrupting.' },
        { left: 'I wish she would call more often.', right: 'She rarely calls.' },
        { left: 'I wish they wouldn\'t be so loud.', right: 'They\'re very noisy.' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l7-e5',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish he will listen to me.',
      correctAnswer: 'I wish he would listen to me.',
      points: 10,
      explanation: 'After "wish", use "would" (not "will") for wishes about behavior.'
    },
    {
      id: 'b2-u8-l7-e6',
      type: 'word-order',
      instruction: 'Put in order',
      words: ['I', 'wish', 'you', 'wouldn\'t', 'lie', 'to me'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: 'Negative complaint: "I wish + subject + wouldn\'t + verb".'
    },
    {
      id: 'b2-u8-l7-e7',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I wish my boss ___ (not micromanage) everything I do.',
      correctAnswer: 'wouldn\'t micromanage',
      points: 10,
      explanation: 'Complaint about behavior: "I wish + subject + wouldn\'t + verb".'
    },
    {
      id: 'b2-u8-l7-e8',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I would exercise more" is the correct way to talk about your own habits.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. We typically don\'t use "I wish I would" for our own behavior. Use "I wish I could" or "I wish I exercised" instead.'
    },
    {
      id: 'b2-u8-l7-e9',
      type: 'categorization',
      instruction: 'Is this about self or others?',
      categories: ['About Self', 'About Others'],
      items: [
        { text: 'I wish I was taller', category: 'About Self' },
        { text: 'I wish he would help', category: 'About Others' },
        { text: 'I wish I could sing', category: 'About Self' },
        { text: 'I wish they would stop', category: 'About Others' }
      ],
      points: 10,
      explanation: '"Wish + would" is typically used for other people\'s behavior, not our own.'
    },
    {
      id: 'b2-u8-l7-e10',
      type: 'context-completion',
      instruction: 'Complete the complaint',
      context: 'My colleague always arrives late. I wish ___.',
      options: ['he would be on time', 'he will be on time', 'he was on time'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For complaints about repeated behavior, use "I wish + would".'
    }
  ]
};

const lesson8: Lesson = {
  id: 'b2-u8-l8',
  unitId: 'b2-u8',
  title: 'Wish vs Hope',
  description: 'Learn the difference between "wish" and "hope"',
  order: 8,
  xpReward: 20,
  grammarPoint: 'Use "wish" for unreal or unlikely situations. Use "hope" for possible future situations. Different grammar patterns apply.',
  vocabularyWords: ['hope', 'optimism', 'expectation', 'possibility', 'likelihood', 'realistic', 'achievable', 'attainable'],
  exercises: [
    {
      id: 'b2-u8-l8-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is correct for a possible future event?',
      options: [
        'I hope it will be sunny tomorrow.',
        'I wish it will be sunny tomorrow.',
        'I wish it would be sunny tomorrow.',
        'I hope it was sunny tomorrow.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'Use "hope" (not "wish") for possible future events. "I hope it will be sunny."'
    },
    {
      id: 'b2-u8-l8-e2',
      type: 'categorization',
      instruction: 'Should this use "wish" or "hope"?',
      categories: ['Wish', 'Hope'],
      items: [
        { text: 'I ___ I was taller (impossible)', category: 'Wish' },
        { text: 'I ___ you pass the exam (possible)', category: 'Hope' },
        { text: 'I ___ I lived in Paris (not true now)', category: 'Wish' },
        { text: 'I ___ to see you soon (likely)', category: 'Hope' }
      ],
      points: 10,
      explanation: 'Wish = unreal/unlikely. Hope = possible/likely.'
    },
    {
      id: 'b2-u8-l8-e3',
      type: 'fill-blank',
      instruction: 'Choose wish or hope',
      question: 'I ___ you have a great time at the party! (It\'s possible.)',
      correctAnswer: 'hope',
      points: 10,
      explanation: 'For possible future events, use "hope" (not "wish").'
    },
    {
      id: 'b2-u8-l8-e4',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish you will have a good day.',
      correctAnswer: 'I hope you have a good day.',
      points: 10,
      explanation: 'For wishes to others about possible events, use "hope" (not "wish").'
    },
    {
      id: 'b2-u8-l8-e5',
      type: 'matching',
      instruction: 'Match the sentence with the correct verb',
      pairs: [
        { left: 'I ___ I could fly (impossible)', right: 'wish' },
        { left: 'I ___ to travel next year (possible)', right: 'hope' },
        { left: 'I ___ I had studied harder (past regret)', right: 'wish' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l8-e6',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"Hope" is followed by past simple, like "wish".',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "Hope" is followed by present or future tenses. "Wish" uses past tenses for unreal situations.'
    },
    {
      id: 'b2-u8-l8-e7',
      type: 'fill-blank',
      instruction: 'Complete with wish or hope',
      question: 'I ___ I had more money. (I don\'t have enough.)',
      correctAnswer: 'wish',
      points: 10,
      explanation: 'For unreal present situations, use "wish" + past simple.'
    },
    {
      id: 'b2-u8-l8-e8',
      type: 'translation',
      instruction: 'Translate using the correct verb',
      question: 'Espero que vengas a la fiesta. (Es posible.)',
      correctAnswer: 'I hope you come to the party',
      points: 10,
      explanation: 'For possible events, use "hope". "I hope you come..."'
    },
    {
      id: 'b2-u8-l8-e9',
      type: 'word-order',
      instruction: 'Put in order',
      words: ['I', 'hope', 'we', 'can', 'meet', 'soon'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: 'Hope for possible future: "I hope we can meet soon."'
    },
    {
      id: 'b2-u8-l8-e10',
      type: 'context-completion',
      instruction: 'Choose the appropriate verb',
      context: 'I\'m taking an exam tomorrow. I ___ I pass.',
      options: ['hope', 'wish', 'wished'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For possible future outcomes, use "hope". "I hope I pass."'
    }
  ]
};

const lesson9: Lesson = {
  id: 'b2-u8-l9',
  unitId: 'b2-u8',
  title: 'I Wish I Could/Would',
  description: 'Learn the nuances of using "could" and "would" with wishes',
  order: 9,
  xpReward: 20,
  grammarPoint: 'Use "I wish I could" for abilities and possibilities. Use "I wish I would" is less common (for behavior change), but "I wish someone would" is common for complaints.',
  vocabularyWords: ['ability', 'possibility', 'potential', 'capacity', 'willingness', 'determination', 'self-control', 'discipline'],
  exercises: [
    {
      id: 'b2-u8-l9-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which is correct for expressing a wish about your own ability?',
      options: [
        'I wish I could speak Japanese.',
        'I wish I would speak Japanese.',
        'I wish I will speak Japanese.',
        'I wish I can speak Japanese.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'For wishes about your own abilities, use "I wish I could" (not "would").'
    },
    {
      id: 'b2-u8-l9-e2',
      type: 'fill-blank',
      instruction: 'Complete with could or would',
      question: 'I wish I ___ help you, but I\'m too busy. (ability)',
      correctAnswer: 'could',
      points: 10,
      explanation: 'For wishes about ability or possibility, use "could".'
    },
    {
      id: 'b2-u8-l9-e3',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I would exercise more" is commonly used for personal habits.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. "I wish I would" is less natural for personal habits. Better: "I wish I could exercise more" or "I wish I exercised more".'
    },
    {
      id: 'b2-u8-l9-e4',
      type: 'categorization',
      instruction: 'Which modal is more natural?',
      categories: ['Could', 'Would'],
      items: [
        { text: 'I wish I ___ fly (ability)', category: 'Could' },
        { text: 'I wish he ___ call me (other\'s action)', category: 'Would' },
        { text: 'I wish I ___ afford it (possibility)', category: 'Could' },
        { text: 'I wish they ___ be quiet (complaint)', category: 'Would' }
      ],
      points: 10,
      explanation: 'Could = ability/possibility. Would = actions/behavior (usually others).'
    },
    {
      id: 'b2-u8-l9-e5',
      type: 'error-correction',
      instruction: 'Correct if necessary',
      sentence: 'I wish I would understand this better.',
      correctAnswer: 'I wish I could understand this better.',
      points: 10,
      explanation: 'For wishes about your own understanding/ability, use "could" (not "would").'
    },
    {
      id: 'b2-u8-l9-e6',
      type: 'matching',
      instruction: 'Match the wish with its focus',
      pairs: [
        { left: 'I wish I could go', right: 'Ability/permission' },
        { left: 'I wish he would go', right: 'His action' },
        { left: 'I wish I could have gone', right: 'Past missed opportunity' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l9-e7',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá pudiera ayudarte. (pero no puedo)',
      correctAnswer: 'I wish I could help you',
      points: 10,
      explanation: 'For wishes about ability, use "I wish I could".'
    },
    {
      id: 'b2-u8-l9-e8',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I wish somebody ___ explain this to me. (wanting someone to do something)',
      correctAnswer: 'would',
      points: 10,
      explanation: 'When wishing for someone else to do something, use "would".'
    },
    {
      id: 'b2-u8-l9-e9',
      type: 'word-order',
      instruction: 'Arrange correctly',
      words: ['I', 'wish', 'I', 'could', 'have', 'seen', 'that'],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      points: 10,
      explanation: 'Past regret about missed opportunity: "I wish I could have seen that."'
    },
    {
      id: 'b2-u8-l9-e10',
      type: 'context-completion',
      instruction: 'Choose the best option',
      context: 'I don\'t have enough money to buy it. I wish I ___.',
      options: ['could afford it', 'would afford it', 'will afford it'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For wishes about possibility/ability, use "could".'
    }
  ]
};

const lesson10: Lesson = {
  id: 'b2-u8-l10',
  unitId: 'b2-u8',
  title: 'If Only I Had Known',
  description: 'Learn to express regrets about lack of knowledge in the past',
  order: 10,
  xpReward: 20,
  grammarPoint: 'Use "if only I had known" and similar structures to express strong regret about not having information in the past.',
  vocabularyWords: ['hindsight', 'ignorance', 'unaware', 'information', 'knowledge', 'warning', 'foresight', 'consequences'],
  exercises: [
    {
      id: 'b2-u8-l10-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which expresses strong regret about not knowing something?',
      options: [
        'If only I had known!',
        'If only I knew!',
        'If only I know!',
        'If only I will know!'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'For past regrets about knowledge, use "if only + past perfect". "If only I had known!"'
    },
    {
      id: 'b2-u8-l10-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'If only I ___ (know) the truth earlier!',
      correctAnswer: 'had known',
      points: 10,
      explanation: 'Past regret: "If only + subject + had + past participle".'
    },
    {
      id: 'b2-u8-l10-e3',
      type: 'matching',
      instruction: 'Match the regret with what would have been different',
      pairs: [
        { left: 'If only I had known it was today', right: 'I would have prepared' },
        { left: 'If only I had realized', right: 'I would have acted differently' },
        { left: 'If only someone had told me', right: 'I wouldn\'t have made that mistake' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l10-e4',
      type: 'translation',
      instruction: 'Translate to English',
      question: '¡Si tan solo lo hubiera sabido!',
      correctAnswer: 'If only I had known',
      points: 10,
      explanation: 'Strong past regret about knowledge: "If only I had known!"'
    },
    {
      id: 'b2-u8-l10-e5',
      type: 'word-order',
      instruction: 'Put in correct order',
      words: ['if', 'only', 'I', 'had', 'been', 'more', 'careful'],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      points: 10,
      explanation: 'Past regret with emphasis: "If only I had been more careful."'
    },
    {
      id: 'b2-u8-l10-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'If only I knew about this yesterday!',
      correctAnswer: 'If only I had known about this!',
      points: 10,
      explanation: 'For past regrets, use past perfect (had known), not past simple (knew).'
    },
    {
      id: 'b2-u8-l10-e7',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I wish I ___ (realize) how important it was at the time.',
      correctAnswer: 'had realized',
      points: 10,
      explanation: 'Past regret about awareness: "I wish I had realized."'
    },
    {
      id: 'b2-u8-l10-e8',
      type: 'context-completion',
      instruction: 'Choose the best completion',
      context: 'I lost money on that investment. If only I ___!',
      options: ['had been more careful', 'was more careful', 'am more careful'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For strong past regrets, use "if only + past perfect".'
    },
    {
      id: 'b2-u8-l10-e9',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"If only I had known" can be followed by what you would have done differently.',
      correctAnswer: true,
      points: 10,
      explanation: 'True. "If only I had known, I would have..." explains the consequence of the knowledge.'
    },
    {
      id: 'b2-u8-l10-e10',
      type: 'categorization',
      instruction: 'What time period?',
      categories: ['Past Regret', 'Present Wish'],
      items: [
        { text: 'If only I had known', category: 'Past Regret' },
        { text: 'If only I knew', category: 'Present Wish' },
        { text: 'I wish I had realized', category: 'Past Regret' },
        { text: 'I wish I understood', category: 'Present Wish' }
      ],
      points: 10,
      explanation: 'Past perfect = past regret. Past simple = present wish.'
    }
  ]
};

const lesson11: Lesson = {
  id: 'b2-u8-l11',
  unitId: 'b2-u8',
  title: 'Regrets About Past Decisions',
  description: 'Learn to express regrets about choices and decisions made in the past',
  order: 11,
  xpReward: 20,
  grammarPoint: 'Use "I wish + past perfect" to express regret about past decisions and choices.',
  vocabularyWords: ['decision', 'choice', 'judgment', 'selection', 'option', 'alternative', 'crossroads', 'turning point'],
  exercises: [
    {
      id: 'b2-u8-l11-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'You regret choosing your major at university. What do you say?',
      options: [
        'I wish I had chosen a different major.',
        'I wish I chose a different major.',
        'I wish I choose a different major.',
        'I wish I will choose a different major.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'For regrets about past decisions, use "I wish + past perfect".'
    },
    {
      id: 'b2-u8-l11-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I wish I ___ (not sell) my old car. It was reliable.',
      correctAnswer: 'hadn\'t sold',
      points: 10,
      explanation: 'Negative past regret: "I wish I hadn\'t + past participle".'
    },
    {
      id: 'b2-u8-l11-e3',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá hubiera aceptado ese trabajo.',
      correctAnswer: 'I wish I had accepted that job',
      points: 10,
      explanation: 'Past regret about a decision: "I wish I had accepted..."'
    },
    {
      id: 'b2-u8-l11-e4',
      type: 'matching',
      instruction: 'Match the regret with the decision',
      pairs: [
        { left: 'I wish I hadn\'t quit my job', right: 'I quit and regret it' },
        { left: 'I wish I had bought that house', right: 'I didn\'t buy it and regret it' },
        { left: 'I wish I had listened to my parents', right: 'I didn\'t listen and regret it' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l11-e5',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I didn\'t take that decision.',
      correctAnswer: 'I wish I hadn\'t made that decision.',
      points: 10,
      explanation: 'For past regrets, use past perfect. Also, we "make" decisions, not "take" them in English.'
    },
    {
      id: 'b2-u8-l11-e6',
      type: 'word-order',
      instruction: 'Put in order',
      words: ['if', 'only', 'I', 'had', 'made', 'a different', 'choice'],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      points: 10,
      explanation: 'Strong regret about a decision: "If only I had made a different choice."'
    },
    {
      id: 'b2-u8-l11-e7',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I wish I ___ (invest) in that company. I would be rich now!',
      correctAnswer: 'had invested',
      points: 10,
      explanation: 'Past regret with present consequence: "I wish I had invested..."'
    },
    {
      id: 'b2-u8-l11-e8',
      type: 'context-completion',
      instruction: 'Express the regret',
      context: 'I moved to this city, but I\'m not happy here. I wish ___.',
      options: ['I hadn\'t moved here', 'I didn\'t move here', 'I don\'t move here'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Regret about a past decision: "I wish I hadn\'t moved here."'
    },
    {
      id: 'b2-u8-l11-e9',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: 'We can use "wish + past perfect" to blame ourselves for past choices.',
      correctAnswer: true,
      points: 10,
      explanation: 'True. We often use this structure to express regret and self-criticism about past decisions.'
    },
    {
      id: 'b2-u8-l11-e10',
      type: 'categorization',
      instruction: 'Type of regret?',
      categories: ['Decision Regret', 'Knowledge Regret', 'Ability Regret'],
      items: [
        { text: 'I wish I had chosen medicine', category: 'Decision Regret' },
        { text: 'I wish I had known the truth', category: 'Knowledge Regret' },
        { text: 'I wish I could have helped', category: 'Ability Regret' }
      ],
      points: 10,
      explanation: 'Different structures express different types of regrets.'
    }
  ]
};

const lesson12: Lesson = {
  id: 'b2-u8-l12',
  unitId: 'b2-u8',
  title: 'Complaints with Wish',
  description: 'Learn to use wish structures to complain politely',
  order: 12,
  xpReward: 20,
  grammarPoint: 'Use "I wish + would/wouldn\'t" to make polite complaints about situations and behaviors.',
  vocabularyWords: ['complaint', 'grievance', 'dissatisfaction', 'frustration', 'irritation', 'nuisance', 'bother', 'inconvenience'],
  exercises: [
    {
      id: 'b2-u8-l12-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'How do you politely complain about noisy neighbors?',
      options: [
        'I wish they wouldn\'t make so much noise.',
        'I wish they didn\'t make so much noise.',
        'I wish they don\'t make so much noise.',
        'I wish they hadn\'t made so much noise.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: 'For complaints about ongoing behavior, use "I wish + would/wouldn\'t".'
    },
    {
      id: 'b2-u8-l12-e2',
      type: 'fill-blank',
      instruction: 'Complete the complaint',
      question: 'I wish the weather ___ (improve). It\'s been raining for weeks!',
      correctAnswer: 'would improve',
      points: 10,
      explanation: 'Complaint about a situation: "I wish + would + verb".'
    },
    {
      id: 'b2-u8-l12-e3',
      type: 'translation',
      instruction: 'Translate this complaint',
      question: 'Ojalá dejara de quejarse tanto.',
      correctAnswer: 'I wish he would stop complaining so much',
      points: 10,
      explanation: 'Complaint about behavior: "I wish + subject + would + verb".'
    },
    {
      id: 'b2-u8-l12-e4',
      type: 'matching',
      instruction: 'Match the complaint with the situation',
      pairs: [
        { left: 'I wish he would listen', right: 'He never pays attention' },
        { left: 'I wish it would stop raining', right: 'The rain won\'t stop' },
        { left: 'I wish they wouldn\'t argue', right: 'They argue constantly' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l12-e5',
      type: 'word-order',
      instruction: 'Put in order',
      words: ['I', 'wish', 'my', 'boss', 'wouldn\'t', 'micromanage', 'everything'],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      points: 10,
      explanation: 'Complaint about behavior: "I wish + subject + wouldn\'t + verb".'
    },
    {
      id: 'b2-u8-l12-e6',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish the traffic will get better.',
      correctAnswer: 'I wish the traffic would get better.',
      points: 10,
      explanation: 'After "wish", use "would" (not "will") for complaints about situations.'
    },
    {
      id: 'b2-u8-l12-e7',
      type: 'fill-blank',
      instruction: 'Complete the complaint',
      question: 'I wish people ___ (not drop) litter in the park.',
      correctAnswer: 'wouldn\'t drop',
      points: 10,
      explanation: 'Complaint about general behavior: "I wish people wouldn\'t..."'
    },
    {
      id: 'b2-u8-l12-e8',
      type: 'context-completion',
      instruction: 'Express the complaint',
      context: 'The wifi keeps disconnecting. I wish ___.',
      options: ['it would work properly', 'it worked properly', 'it works properly'],
      correctAnswer: 0,
      points: 10,
      explanation: 'For complaints about situations you want to change, use "wish + would".'
    },
    {
      id: 'b2-u8-l12-e9',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: 'Using "I wish" to complain is more polite than direct criticism.',
      correctAnswer: true,
      points: 10,
      explanation: 'True. "I wish you wouldn\'t..." is more indirect and polite than "Stop doing that!"'
    },
    {
      id: 'b2-u8-l12-e10',
      type: 'categorization',
      instruction: 'What is being complained about?',
      categories: ['Behavior', 'Situation', 'Past Event'],
      items: [
        { text: 'I wish he would stop talking', category: 'Behavior' },
        { text: 'I wish it would stop raining', category: 'Situation' },
        { text: 'I wish I hadn\'t gone there', category: 'Past Event' }
      ],
      points: 10,
      explanation: 'Different wish structures for different types of complaints.'
    }
  ]
};

const lesson13: Lesson = {
  id: 'b2-u8-l13',
  unitId: 'b2-u8',
  title: 'Would Rather and Would Prefer',
  description: 'Learn related structures for expressing preferences',
  order: 13,
  xpReward: 20,
  grammarPoint: 'Use "would rather" and "would prefer" to express preferences. These are related to wish structures but have different grammar.',
  vocabularyWords: ['preference', 'choice', 'favor', 'inclination', 'rather', 'instead', 'alternative', 'option'],
  exercises: [
    {
      id: 'b2-u8-l13-e1',
      type: 'multiple-choice',
      instruction: 'Select the correct answer',
      question: 'Which structure expresses preference?',
      options: [
        'I\'d rather stay home tonight.',
        'I wish I stay home tonight.',
        'I hope I stay home tonight.',
        'I must stay home tonight.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: '"Would rather" (I\'d rather) expresses preference for one option over another.'
    },
    {
      id: 'b2-u8-l13-e2',
      type: 'fill-blank',
      instruction: 'Complete the sentence',
      question: 'I would rather ___ (eat) Italian food than Chinese food.',
      correctAnswer: 'eat',
      points: 10,
      explanation: 'After "would rather", use the base form of the verb (without "to").'
    },
    {
      id: 'b2-u8-l13-e3',
      type: 'matching',
      instruction: 'Match equivalent expressions',
      pairs: [
        { left: 'I\'d rather go', right: 'I prefer to go' },
        { left: 'I\'d rather not', right: 'I prefer not to' },
        { left: 'I\'d rather he came', right: 'I prefer him to come' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l13-e4',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I\'d rather to stay here.',
      correctAnswer: 'I\'d rather stay here.',
      points: 10,
      explanation: 'After "would rather", use the base form without "to". "I\'d rather stay."'
    },
    {
      id: 'b2-u8-l13-e5',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Preferiría quedarme en casa.',
      correctAnswer: 'I\'d rather stay home',
      points: 10,
      explanation: 'Express preference with "I\'d rather + base verb".'
    },
    {
      id: 'b2-u8-l13-e6',
      type: 'word-order',
      instruction: 'Put in order',
      words: ['I', 'would', 'prefer', 'to', 'wait', 'here'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      points: 10,
      explanation: '"Would prefer" is followed by "to + infinitive": "I would prefer to wait."'
    },
    {
      id: 'b2-u8-l13-e7',
      type: 'fill-blank',
      instruction: 'Complete appropriately',
      question: 'I\'d rather you ___ (not tell) anyone about this.',
      correctAnswer: 'didn\'t tell',
      points: 10,
      explanation: 'For preferences about others, use "would rather + subject + past simple". "I\'d rather you didn\'t tell."'
    },
    {
      id: 'b2-u8-l13-e8',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"Would rather" and "would prefer" are always interchangeable.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. The grammar differs: "would rather + base verb" but "would prefer + to + infinitive".'
    },
    {
      id: 'b2-u8-l13-e9',
      type: 'categorization',
      instruction: 'Which structure is used?',
      categories: ['Would Rather', 'Would Prefer', 'Wish'],
      items: [
        { text: 'I\'d rather not go', category: 'Would Rather' },
        { text: 'I\'d prefer to stay', category: 'Would Prefer' },
        { text: 'I wish I was there', category: 'Wish' }
      ],
      points: 10,
      explanation: 'Different structures for preferences and wishes.'
    },
    {
      id: 'b2-u8-l13-e10',
      type: 'context-completion',
      instruction: 'Express the preference',
      context: 'Coffee or tea? I ___ coffee, please.',
      options: ['\'d rather have', 'wish I had', 'hope to have'],
      correctAnswer: 0,
      points: 10,
      explanation: 'To express immediate preference, use "I\'d rather have".'
    }
  ]
};

const lesson14: Lesson = {
  id: 'b2-u8-l14',
  unitId: 'b2-u8',
  title: 'Common Mistakes',
  description: 'Learn to avoid common errors with wish and if only structures',
  order: 14,
  xpReward: 20,
  grammarPoint: 'Common mistakes include: using present tense instead of past, confusing wish/hope, using "will" instead of "would", and incorrect use of "would" for self.',
  vocabularyWords: ['error', 'mistake', 'confusion', 'incorrect', 'wrong', 'misuse', 'common', 'frequent'],
  exercises: [
    {
      id: 'b2-u8-l14-e1',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I can speak English fluently.',
      correctAnswer: 'I wish I could speak English fluently.',
      points: 10,
      explanation: 'After "wish", use "could" (not "can") for abilities.'
    },
    {
      id: 'b2-u8-l14-e2',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish you will come to the party.',
      correctAnswer: 'I hope you will come to the party.',
      points: 10,
      explanation: 'For possible future events, use "hope" (not "wish"). Or: "I wish you would come" (less likely).'
    },
    {
      id: 'b2-u8-l14-e3',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I have more time yesterday.',
      correctAnswer: 'I wish I had had more time yesterday.',
      points: 10,
      explanation: 'For past regrets, use past perfect: "I wish I had had more time."'
    },
    {
      id: 'b2-u8-l14-e4',
      type: 'multiple-choice',
      instruction: 'Which is WRONG?',
      question: 'Which sentence contains an error?',
      options: [
        'I wish I would be rich.',
        'I wish I was rich.',
        'I wish I could be rich.',
        'If only I were rich.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: '"I wish I would be rich" is wrong. Use "I wish I was/were rich" or "I wish I could be rich".'
    },
    {
      id: 'b2-u8-l14-e5',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'If only I will know the answer!',
      correctAnswer: 'If only I knew the answer!',
      points: 10,
      explanation: 'For present wishes, use past simple (not "will"). "If only I knew!"'
    },
    {
      id: 'b2-u8-l14-e6',
      type: 'categorization',
      instruction: 'Is this correct or incorrect?',
      categories: ['Correct', 'Incorrect'],
      items: [
        { text: 'I wish I had more money', category: 'Correct' },
        { text: 'I wish I would be taller', category: 'Incorrect' },
        { text: 'I wish he would stop', category: 'Correct' },
        { text: 'I hope I was there', category: 'Incorrect' }
      ],
      points: 10,
      explanation: 'Don\'t use "would" for permanent states about yourself. "Hope" doesn\'t use past tenses.'
    },
    {
      id: 'b2-u8-l14-e7',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish I would have studied harder.',
      correctAnswer: 'I wish I had studied harder.',
      points: 10,
      explanation: 'For past regrets, use past perfect (had + past participle), not "would have".'
    },
    {
      id: 'b2-u8-l14-e8',
      type: 'true-false',
      instruction: 'Is this correct?',
      statement: '"I wish I would exercise more" is good English.',
      correctAnswer: false,
      points: 10,
      explanation: 'False. Don\'t use "I wish I would" for your own habits. Better: "I wish I exercised more" or "I wish I could exercise more".'
    },
    {
      id: 'b2-u8-l14-e9',
      type: 'error-correction',
      instruction: 'Correct the mistake',
      sentence: 'I wish you have a nice day.',
      correctAnswer: 'I hope you have a nice day.',
      points: 10,
      explanation: 'For well-wishes about possible events, use "hope" (not "wish").'
    },
    {
      id: 'b2-u8-l14-e10',
      type: 'matching',
      instruction: 'Match the error with the correction',
      pairs: [
        { left: 'I wish I live in Paris', right: 'I wish I lived in Paris' },
        { left: 'I hope I was rich', right: 'I wish I was rich' },
        { left: 'I wish I would be smarter', right: 'I wish I was smarter' }
      ],
      points: 10
    }
  ]
};

const lesson15: Lesson = {
  id: 'b2-u8-l15',
  unitId: 'b2-u8',
  title: 'Comprehensive Review',
  description: 'Review all wish and if only structures',
  order: 15,
  xpReward: 20,
  grammarPoint: 'Master all forms: wish + past simple (present), wish + past perfect (past regret), wish + would (behavior/future), if only (emphatic), wish vs hope, would rather.',
  vocabularyWords: ['review', 'summary', 'overview', 'comprehensive', 'consolidation', 'mastery', 'proficiency', 'fluency'],
  exercises: [
    {
      id: 'b2-u8-l15-e1',
      type: 'categorization',
      instruction: 'What type of wish?',
      categories: ['Present', 'Past Regret', 'Future/Behavior'],
      items: [
        { text: 'I wish I lived there', category: 'Present' },
        { text: 'I wish I had gone', category: 'Past Regret' },
        { text: 'I wish he would call', category: 'Future/Behavior' },
        { text: 'I wish I knew', category: 'Present' }
      ],
      points: 10,
      explanation: 'Recognize the three main wish structures by their verb forms.'
    },
    {
      id: 'b2-u8-l15-e2',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'I wish I ___ (be) there with you now. (present)',
      correctAnswer: 'was',
      points: 10,
      explanation: 'Present wish: wish + past simple. "I wish I was there."'
    },
    {
      id: 'b2-u8-l15-e3',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'I wish I ___ (not spend) all my money last week. (past regret)',
      correctAnswer: 'hadn\'t spent',
      points: 10,
      explanation: 'Past regret: wish + past perfect. "I wish I hadn\'t spent."'
    },
    {
      id: 'b2-u8-l15-e4',
      type: 'fill-blank',
      instruction: 'Complete with the correct form',
      question: 'I wish it ___ (stop) raining! (complaint)',
      correctAnswer: 'would stop',
      points: 10,
      explanation: 'Complaint about situation: wish + would + verb.'
    },
    {
      id: 'b2-u8-l15-e5',
      type: 'multiple-choice',
      instruction: 'Which is more emphatic?',
      question: 'Which expresses stronger emotion?',
      options: [
        'If only I had known!',
        'I wish I had known.',
        'I should have known.',
        'I didn\'t know.'
      ],
      correctAnswer: 0,
      points: 10,
      explanation: '"If only" is more emphatic and emotional than "I wish".'
    },
    {
      id: 'b2-u8-l15-e6',
      type: 'matching',
      instruction: 'Match the situation with the correct structure',
      pairs: [
        { left: 'Regret about past', right: 'wish + past perfect' },
        { left: 'Dissatisfaction with present', right: 'wish + past simple' },
        { left: 'Complaint about behavior', right: 'wish + would' },
        { left: 'Possible future event', right: 'hope + present/future' }
      ],
      points: 10
    },
    {
      id: 'b2-u8-l15-e7',
      type: 'translation',
      instruction: 'Translate to English',
      question: 'Ojalá pudiera hablar perfectamente inglés.',
      correctAnswer: 'I wish I could speak English perfectly',
      points: 10,
      explanation: 'Wish about ability: wish + could + verb.'
    },
    {
      id: 'b2-u8-l15-e8',
      type: 'error-correction',
      instruction: 'Correct any mistakes',
      sentence: 'I hope I was rich and I wish you will come to my party.',
      correctAnswer: 'I wish I was rich and I hope you will come to my party.',
      points: 10,
      explanation: 'Unreal = wish. Possible = hope. "I wish I was rich, I hope you will come."'
    },
    {
      id: 'b2-u8-l15-e9',
      type: 'word-order',
      instruction: 'Create a past regret',
      words: ['if', 'only', 'I', 'had', 'listened', 'to', 'you'],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      points: 10,
      explanation: 'Emphatic past regret: "If only I had listened to you."'
    },
    {
      id: 'b2-u8-l15-e10',
      type: 'context-completion',
      instruction: 'Choose the best option',
      context: 'I don\'t like my job. I ___ a different career.',
      options: ['wish I had chosen', 'wish I chose', 'hope I chose'],
      correctAnswer: 0,
      points: 10,
      explanation: 'Regret about past decision: "I wish I had chosen a different career."'
    }
  ]
};

export const unit8: Unit = {
  id: 'b2-u8',
  levelId: 'b2',
  title: 'Wish and If Only',
  description: 'Express wishes, regrets, and desires for different situations',
  icon: '⭐',
  order: 8,
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
