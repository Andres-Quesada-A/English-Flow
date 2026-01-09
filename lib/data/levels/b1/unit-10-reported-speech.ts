import { Unit } from '@/lib/types';

export const unit10: Unit = {
  id: 'b1-u10',
  levelId: 'b1',
  title: 'Reported Speech',
  description: 'Report what others said using tense changes and reporting verbs',
  order: 10,
  totalLessons: 15,
  icon: '💬',
  lessons: [
    {
      id: 'b1-u10-l1',
      unitId: 'b1-u10',
      title: 'Introduction: Direct vs Reported',
      description: 'Learn the difference between direct and reported speech',
      order: 1,
      xpReward: 20,
      grammarPoint: 'Direct speech uses exact words in quotes. Reported speech tells what someone said without quotes, often with tense changes.',
      vocabularyWords: ['direct speech', 'reported speech', 'quotation marks', 'say', 'tell', 'quote', 'report', 'statement', 'conversation', 'paraphrase'],
      exercises: [
        {
          id: 'b1-u10-l1-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct definition of direct speech.',
          question: 'What is direct speech?',
          options: [
            'The exact words someone said in quotation marks',
            'A summary of what someone said',
            'Translating from one language to another',
            'Writing a formal letter'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u10-l1-e2',
          type: 'multiple-choice',
          instruction: 'Identify the direct speech example.',
          question: 'Which sentence is direct speech?',
          options: [
            'She said that she was tired',
            'He told me he would come later',
            'She said, "I am tired"',
            'They mentioned being busy'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l1-e3',
          type: 'multiple-choice',
          instruction: 'Identify the reported speech example.',
          question: 'Which sentence is reported speech?',
          options: [
            'John said, "I love pizza"',
            '"Where are you going?" she asked',
            'Mary said, "I will call you tomorrow"',
            'He said that he loved pizza'
          ],
          correctAnswer: 3,
          points: 10
        },
        {
          id: 'b1-u10-l1-e4',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'Reported speech always uses quotation marks.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l1-e5',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'Direct speech shows the exact words someone said.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l1-e6',
          type: 'matching',
          instruction: 'Match each term with its correct definition.',
          pairs: [
            { left: 'Direct speech', right: 'Uses quotation marks' },
            { left: 'Reported speech', right: 'Uses "that" clause' },
            { left: 'Quote', right: 'Exact words' },
            { left: 'Paraphrase', right: 'Restate in own words' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l1-e7',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct word.',
          question: 'In ___ speech, we use quotation marks around the exact words.',
          correctAnswer: 'direct',
          acceptableAnswers: ['direct'],
          points: 10
        },
        {
          id: 'b1-u10-l1-e8',
          type: 'fill-blank',
          instruction: 'Complete the sentence with the correct word.',
          question: 'In ___ speech, we tell what someone said without using their exact words.',
          correctAnswer: 'reported',
          acceptableAnswers: ['reported', 'indirect'],
          points: 10
        },
        {
          id: 'b1-u10-l1-e9',
          type: 'word-order',
          instruction: 'Arrange the words to form a correct sentence about direct speech.',
          words: ['said', 'She', 'am', 'I', 'happy', '"', '"'],
          correctOrder: [1, 0, 5, 3, 2, 4, 6],
          points: 10
        },
        {
          id: 'b1-u10-l1-e10',
          type: 'multiple-choice',
          instruction: 'Choose what changes when converting to reported speech.',
          question: 'What typically changes when we convert direct speech to reported speech?',
          options: [
            'Only the punctuation',
            'Verb tenses, pronouns, and time expressions',
            'Only the verb tenses',
            'Nothing changes'
          ],
          correctAnswer: 1,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l2',
      unitId: 'b1-u10',
      title: 'Reporting Verbs: Say and Tell',
      description: 'Master the use of "say" and "tell" in reported speech',
      order: 2,
      xpReward: 20,
      grammarPoint: 'Use "say" without an object (He said that...). Use "tell" with an object (He told me that...). Never use "say me".',
      vocabularyWords: ['say', 'tell', 'told', 'said', 'mention', 'inform', 'object', 'indirect object', 'recipient', 'speaker'],
      exercises: [
        {
          id: 'b1-u10-l2-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct reporting verb.',
          question: 'She ___ that she was happy.',
          options: ['said', 'told', 'said to', 'tell'],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u10-l2-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct reporting verb.',
          question: 'He ___ me that he would arrive at 5pm.',
          options: ['said', 'say', 'told', 'tell'],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l2-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She said me that she was tired.',
          correctAnswer: 'She told me that she was tired.',
          points: 10
        },
        {
          id: 'b1-u10-l2-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'He told that he was busy.',
          correctAnswer: 'He said that he was busy.',
          points: 10
        },
        {
          id: 'b1-u10-l2-e5',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'We can say "He said me the truth".',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l2-e6',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: '"Tell" always needs an object (person) after it.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l2-e7',
          type: 'fill-blank',
          instruction: 'Complete with "said" or "told".',
          question: 'They ___ us that the meeting was cancelled.',
          correctAnswer: 'told',
          acceptableAnswers: ['told'],
          points: 10
        },
        {
          id: 'b1-u10-l2-e8',
          type: 'fill-blank',
          instruction: 'Complete with "said" or "told".',
          question: 'She ___ that she would call me later.',
          correctAnswer: 'said',
          acceptableAnswers: ['said'],
          points: 10
        },
        {
          id: 'b1-u10-l2-e9',
          type: 'matching',
          instruction: 'Match each verb with its correct usage pattern.',
          pairs: [
            { left: 'say', right: 'Used without object' },
            { left: 'tell', right: 'Used with object' },
            { left: 'said that', right: 'Correct pattern' },
            { left: 'told me that', right: 'Correct pattern' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l2-e10',
          type: 'word-order',
          instruction: 'Arrange the words to form a correct reported speech sentence.',
          words: ['told', 'She', 'me', 'that', 'she', 'was', 'leaving'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l3',
      unitId: 'b1-u10',
      title: 'Tense Changes: Present to Past',
      description: 'Learn how present tenses change in reported speech',
      order: 3,
      xpReward: 20,
      grammarPoint: 'Present Simple becomes Past Simple. Present Continuous becomes Past Continuous. Present Perfect becomes Past Perfect.',
      vocabularyWords: ['tense shift', 'backshift', 'present simple', 'past simple', 'present continuous', 'past continuous', 'present perfect', 'past perfect', 'transformation', 'conversion'],
      exercises: [
        {
          id: 'b1-u10-l3-e1',
          type: 'multiple-choice',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I work in London." Reported: He said ___',
          options: [
            'he works in London',
            'he worked in London',
            'he is working in London',
            'he has worked in London'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l3-e2',
          type: 'multiple-choice',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I am studying English." Reported: She said ___',
          options: [
            'she is studying English',
            'she studies English',
            'she was studying English',
            'she studied English'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l3-e3',
          type: 'multiple-choice',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I have finished my homework." Reported: He said ___',
          options: [
            'he has finished his homework',
            'he finished his homework',
            'he had finished his homework',
            'he finishes his homework'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l3-e4',
          type: 'fill-blank',
          instruction: 'Complete the reported speech with the correct tense.',
          question: 'Direct: "I like coffee." Reported: She said she ___ coffee.',
          correctAnswer: 'liked',
          acceptableAnswers: ['liked'],
          points: 10
        },
        {
          id: 'b1-u10-l3-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported speech with the correct tense.',
          question: 'Direct: "We are going to the beach." Reported: They said they ___ to the beach.',
          correctAnswer: 'were going',
          acceptableAnswers: ['were going'],
          points: 10
        },
        {
          id: 'b1-u10-l3-e6',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "I love this movie." (He said)',
          correctAnswer: 'He said he loved that movie.',
          acceptableAnswers: ['He said he loved that movie', 'He said that he loved that movie'],
          points: 10
        },
        {
          id: 'b1-u10-l3-e7',
          type: 'error-correction',
          instruction: 'Correct the tense error in this reported speech.',
          sentence: 'She said she is tired.',
          correctAnswer: 'She said she was tired.',
          points: 10
        },
        {
          id: 'b1-u10-l3-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'In reported speech, present simple changes to past simple.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l3-e9',
          type: 'matching',
          instruction: 'Match the direct speech tense with its reported speech form.',
          pairs: [
            { left: 'Present Simple', right: 'Past Simple' },
            { left: 'Present Continuous', right: 'Past Continuous' },
            { left: 'Present Perfect', right: 'Past Perfect' },
            { left: 'am/is/are', right: 'was/were' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l3-e10',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['said', 'She', 'that', 'she', 'was', 'happy'],
          correctOrder: [1, 0, 2, 3, 4, 5],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l4',
      unitId: 'b1-u10',
      title: 'Tense Changes: Past to Past Perfect',
      description: 'Learn how past tenses change in reported speech',
      order: 4,
      xpReward: 20,
      grammarPoint: 'Past Simple becomes Past Perfect. Past Continuous becomes Past Perfect Continuous. Will becomes would, can becomes could.',
      vocabularyWords: ['past simple', 'past perfect', 'past continuous', 'past perfect continuous', 'modal verbs', 'would', 'could', 'might', 'should', 'had'],
      exercises: [
        {
          id: 'b1-u10-l4-e1',
          type: 'multiple-choice',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I went to Paris." Reported: She said ___',
          options: [
            'she went to Paris',
            'she had gone to Paris',
            'she goes to Paris',
            'she has gone to Paris'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l4-e2',
          type: 'multiple-choice',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I was watching TV." Reported: He said ___',
          options: [
            'he was watching TV',
            'he is watching TV',
            'he had been watching TV',
            'he watched TV'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l4-e3',
          type: 'multiple-choice',
          instruction: 'Convert the modal verb to reported speech.',
          question: 'Direct: "I will help you." Reported: She said ___',
          options: [
            'she will help me',
            'she would help me',
            'she helps me',
            'she helped me'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l4-e4',
          type: 'multiple-choice',
          instruction: 'Convert the modal verb to reported speech.',
          question: 'Direct: "I can swim." Reported: He said ___',
          options: [
            'he can swim',
            'he swims',
            'he could swim',
            'he swam'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l4-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported speech with the correct tense.',
          question: 'Direct: "I bought a new car." Reported: She said she ___ a new car.',
          correctAnswer: 'had bought',
          acceptableAnswers: ['had bought'],
          points: 10
        },
        {
          id: 'b1-u10-l4-e6',
          type: 'fill-blank',
          instruction: 'Complete the reported speech with the correct modal verb.',
          question: 'Direct: "I will come tomorrow." Reported: He said he ___ come the next day.',
          correctAnswer: 'would',
          acceptableAnswers: ['would'],
          points: 10
        },
        {
          id: 'b1-u10-l4-e7',
          type: 'error-correction',
          instruction: 'Correct the tense error in this reported speech.',
          sentence: 'He said he visited the museum yesterday.',
          correctAnswer: 'He said he had visited the museum the day before.',
          points: 10
        },
        {
          id: 'b1-u10-l4-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'In reported speech, "will" changes to "would".',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l4-e9',
          type: 'matching',
          instruction: 'Match the direct speech form with its reported speech form.',
          pairs: [
            { left: 'Past Simple', right: 'Past Perfect' },
            { left: 'will', right: 'would' },
            { left: 'can', right: 'could' },
            { left: 'may', right: 'might' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l4-e10',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "I lost my keys." (She said)',
          correctAnswer: 'She said she had lost her keys.',
          acceptableAnswers: ['She said she had lost her keys', 'She said that she had lost her keys'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l5',
      unitId: 'b1-u10',
      title: 'Pronoun and Time Changes',
      description: 'Learn how pronouns and time expressions change',
      order: 5,
      xpReward: 20,
      grammarPoint: 'Pronouns change perspective (I→he/she, you→I/they). Time words change: today→that day, tomorrow→the next day, yesterday→the day before, now→then.',
      vocabularyWords: ['pronoun', 'time expression', 'this', 'that', 'here', 'there', 'today', 'that day', 'tomorrow', 'yesterday'],
      exercises: [
        {
          id: 'b1-u10-l5-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct pronoun change.',
          question: 'Direct: "I am happy." (Tom said) Reported: Tom said ___ was happy.',
          options: ['I', 'he', 'you', 'she'],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l5-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct time expression.',
          question: 'Direct: "I will call you tomorrow." Reported: She said she would call me ___',
          options: ['tomorrow', 'the next day', 'yesterday', 'that day'],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l5-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct time expression.',
          question: 'Direct: "I saw him yesterday." Reported: She said she had seen him ___',
          options: ['yesterday', 'tomorrow', 'the day before', 'the next day'],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l5-e4',
          type: 'fill-blank',
          instruction: 'Complete with the correct pronoun.',
          question: 'Direct: "My car is red." (John said) Reported: John said ___ car was red.',
          correctAnswer: 'his',
          acceptableAnswers: ['his'],
          points: 10
        },
        {
          id: 'b1-u10-l5-e5',
          type: 'fill-blank',
          instruction: 'Complete with the correct time expression.',
          question: 'Direct: "I am busy today." Reported: She said she was busy ___',
          correctAnswer: 'that day',
          acceptableAnswers: ['that day'],
          points: 10
        },
        {
          id: 'b1-u10-l5-e6',
          type: 'matching',
          instruction: 'Match the direct speech time expression with its reported speech form.',
          pairs: [
            { left: 'today', right: 'that day' },
            { left: 'tomorrow', right: 'the next day' },
            { left: 'yesterday', right: 'the day before' },
            { left: 'now', right: 'then' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l5-e7',
          type: 'error-correction',
          instruction: 'Correct the pronoun error in this reported speech.',
          sentence: 'Mary said I was tired.',
          correctAnswer: 'Mary said she was tired.',
          points: 10
        },
        {
          id: 'b1-u10-l5-e8',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "I will see you tomorrow." (He said to me)',
          correctAnswer: 'He said he would see me the next day.',
          acceptableAnswers: ['He said he would see me the next day', 'He told me he would see me the next day', 'He said that he would see me the next day'],
          points: 10
        },
        {
          id: 'b1-u10-l5-e9',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'In reported speech, "this" often changes to "that".',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l5-e10',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['said', 'She', 'that', 'she', 'would', 'leave', 'the', 'next', 'day'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6, 7, 8],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l6',
      unitId: 'b1-u10',
      title: 'Reporting Statements',
      description: 'Practice reporting declarative statements',
      order: 6,
      xpReward: 20,
      grammarPoint: 'Use "that" to introduce reported statements. The word "that" is optional but recommended for clarity.',
      vocabularyWords: ['statement', 'declare', 'affirm', 'assert', 'claim', 'mention', 'announce', 'remark', 'comment', 'observe'],
      exercises: [
        {
          id: 'b1-u10-l6-e1',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "I love chocolate." (She said)',
          correctAnswer: 'She said she loved chocolate.',
          acceptableAnswers: ['She said she loved chocolate', 'She said that she loved chocolate'],
          points: 10
        },
        {
          id: 'b1-u10-l6-e2',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "We are going to Spain." (They told me)',
          correctAnswer: 'They told me they were going to Spain.',
          acceptableAnswers: ['They told me they were going to Spain', 'They told me that they were going to Spain'],
          points: 10
        },
        {
          id: 'b1-u10-l6-e3',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "I have never been to Japan." (He said)',
          correctAnswer: 'He said he had never been to Japan.',
          acceptableAnswers: ['He said he had never been to Japan', 'He said that he had never been to Japan'],
          points: 10
        },
        {
          id: 'b1-u10-l6-e4',
          type: 'multiple-choice',
          instruction: 'Choose the correctly reported statement.',
          question: 'Direct: "I don\'t like coffee."',
          options: [
            'She said she doesn\'t like coffee',
            'She said she didn\'t like coffee',
            'She said I don\'t like coffee',
            'She says she didn\'t like coffee'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l6-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported speech.',
          question: 'Direct: "The movie was great." Reported: He said the movie ___ great.',
          correctAnswer: 'had been',
          acceptableAnswers: ['had been', 'was'],
          points: 10
        },
        {
          id: 'b1-u10-l6-e6',
          type: 'error-correction',
          instruction: 'Correct the error in this reported speech.',
          sentence: 'She said that I am hungry.',
          correctAnswer: 'She said that she was hungry.',
          points: 10
        },
        {
          id: 'b1-u10-l6-e7',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'The word "that" is always required in reported statements.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l6-e8',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['told', 'He', 'me', 'that', 'he', 'had', 'finished', 'his', 'work'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6, 7, 8],
          points: 10
        },
        {
          id: 'b1-u10-l6-e9',
          type: 'multiple-choice',
          instruction: 'Choose the correctly reported statement.',
          question: 'Direct: "I can speak three languages."',
          options: [
            'She said she can speak three languages',
            'She said she could speak three languages',
            'She said I can speak three languages',
            'She says she can speak three languages'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l6-e10',
          type: 'translation',
          instruction: 'Convert this direct speech to reported speech.',
          question: 'Direct: "My sister lives in New York." (John told me)',
          correctAnswer: 'John told me his sister lived in New York.',
          acceptableAnswers: ['John told me his sister lived in New York', 'John told me that his sister lived in New York'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l7',
      unitId: 'b1-u10',
      title: 'Reporting Questions (Yes/No)',
      description: 'Learn to report yes/no questions',
      order: 7,
      xpReward: 20,
      grammarPoint: 'Use "if" or "whether" to report yes/no questions. Change word order to statement form. Use "asked" instead of "said".',
      vocabularyWords: ['yes/no question', 'if', 'whether', 'ask', 'inquire', 'wonder', 'question mark', 'interrogative', 'query', 'request information'],
      exercises: [
        {
          id: 'b1-u10-l7-e1',
          type: 'multiple-choice',
          instruction: 'Convert the yes/no question to reported speech.',
          question: 'Direct: "Are you tired?" Reported: She asked me ___',
          options: [
            'if am I tired',
            'if I was tired',
            'that I was tired',
            'am I tired'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l7-e2',
          type: 'multiple-choice',
          instruction: 'Convert the yes/no question to reported speech.',
          question: 'Direct: "Do you like pizza?" Reported: He asked me ___',
          options: [
            'do I like pizza',
            'if do I like pizza',
            'whether I liked pizza',
            'that I liked pizza'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l7-e3',
          type: 'translation',
          instruction: 'Convert this direct question to reported speech.',
          question: 'Direct: "Can you help me?" (She asked)',
          correctAnswer: 'She asked if I could help her.',
          acceptableAnswers: ['She asked if I could help her', 'She asked whether I could help her', 'She asked if I could help'],
          points: 10
        },
        {
          id: 'b1-u10-l7-e4',
          type: 'translation',
          instruction: 'Convert this direct question to reported speech.',
          question: 'Direct: "Have you finished your homework?" (Mom asked)',
          correctAnswer: 'Mom asked if I had finished my homework.',
          acceptableAnswers: ['Mom asked if I had finished my homework', 'Mom asked whether I had finished my homework'],
          points: 10
        },
        {
          id: 'b1-u10-l7-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported question.',
          question: 'Direct: "Is it raining?" Reported: He asked ___ it was raining.',
          correctAnswer: 'if',
          acceptableAnswers: ['if', 'whether'],
          points: 10
        },
        {
          id: 'b1-u10-l7-e6',
          type: 'error-correction',
          instruction: 'Correct the error in this reported question.',
          sentence: 'She asked me if was I hungry.',
          correctAnswer: 'She asked me if I was hungry.',
          points: 10
        },
        {
          id: 'b1-u10-l7-e7',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'Reported questions use question marks.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l7-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'We use "if" or "whether" to report yes/no questions.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l7-e9',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['asked', 'She', 'me', 'if', 'I', 'was', 'ready'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u10-l7-e10',
          type: 'matching',
          instruction: 'Match the direct question with its reported form.',
          pairs: [
            { left: '"Are you happy?"', right: 'asked if I was happy' },
            { left: '"Did you see the movie?"', right: 'asked if I had seen the movie' },
            { left: '"Will you come?"', right: 'asked if I would come' },
            { left: '"Can you swim?"', right: 'asked if I could swim' }
          ],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l8',
      unitId: 'b1-u10',
      title: 'Reporting Questions (Wh-)',
      description: 'Learn to report wh- questions',
      order: 8,
      xpReward: 20,
      grammarPoint: 'Use the wh- word (what, where, when, why, who, how) to introduce reported questions. Change word order to statement form.',
      vocabularyWords: ['wh-question', 'what', 'where', 'when', 'why', 'who', 'how', 'which', 'whose', 'information question'],
      exercises: [
        {
          id: 'b1-u10-l8-e1',
          type: 'multiple-choice',
          instruction: 'Convert the wh- question to reported speech.',
          question: 'Direct: "Where do you live?" Reported: She asked me ___',
          options: [
            'where do I live',
            'where I lived',
            'where did I live',
            'if I lived'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l8-e2',
          type: 'multiple-choice',
          instruction: 'Convert the wh- question to reported speech.',
          question: 'Direct: "What are you doing?" Reported: He asked me ___',
          options: [
            'what am I doing',
            'what I am doing',
            'what was I doing',
            'what I was doing'
          ],
          correctAnswer: 3,
          points: 10
        },
        {
          id: 'b1-u10-l8-e3',
          type: 'translation',
          instruction: 'Convert this direct question to reported speech.',
          question: 'Direct: "When will you arrive?" (She asked)',
          correctAnswer: 'She asked when I would arrive.',
          acceptableAnswers: ['She asked when I would arrive', 'She asked me when I would arrive'],
          points: 10
        },
        {
          id: 'b1-u10-l8-e4',
          type: 'translation',
          instruction: 'Convert this direct question to reported speech.',
          question: 'Direct: "Why are you late?" (The teacher asked)',
          correctAnswer: 'The teacher asked why I was late.',
          acceptableAnswers: ['The teacher asked why I was late', 'The teacher asked me why I was late'],
          points: 10
        },
        {
          id: 'b1-u10-l8-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported question.',
          question: 'Direct: "How old are you?" Reported: She asked me ___ I was.',
          correctAnswer: 'how old',
          acceptableAnswers: ['how old'],
          points: 10
        },
        {
          id: 'b1-u10-l8-e6',
          type: 'error-correction',
          instruction: 'Correct the error in this reported question.',
          sentence: 'He asked me what did I want.',
          correctAnswer: 'He asked me what I wanted.',
          points: 10
        },
        {
          id: 'b1-u10-l8-e7',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['asked', 'She', 'where', 'I', 'had', 'bought', 'the', 'book'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6, 7],
          points: 10
        },
        {
          id: 'b1-u10-l8-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'In reported wh- questions, we keep the question word order.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l8-e9',
          type: 'matching',
          instruction: 'Match the direct question with its reported form.',
          pairs: [
            { left: '"Where is the station?"', right: 'asked where the station was' },
            { left: '"What time is it?"', right: 'asked what time it was' },
            { left: '"Who called?"', right: 'asked who had called' },
            { left: '"How much does it cost?"', right: 'asked how much it cost' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l8-e10',
          type: 'translation',
          instruction: 'Convert this direct question to reported speech.',
          question: 'Direct: "Which book did you choose?" (He asked me)',
          correctAnswer: 'He asked me which book I had chosen.',
          acceptableAnswers: ['He asked me which book I had chosen', 'He asked which book I had chosen'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l9',
      unitId: 'b1-u10',
      title: 'Reporting Commands and Requests',
      description: 'Learn to report imperatives and requests',
      order: 9,
      xpReward: 20,
      grammarPoint: 'Use "tell/ask/order + object + (not) to + infinitive" for commands and requests. Positive: told me to go. Negative: told me not to go.',
      vocabularyWords: ['command', 'request', 'imperative', 'order', 'tell', 'ask', 'advise', 'warn', 'remind', 'infinitive'],
      exercises: [
        {
          id: 'b1-u10-l9-e1',
          type: 'multiple-choice',
          instruction: 'Convert the command to reported speech.',
          question: 'Direct: "Close the door!" Reported: She told me ___',
          options: [
            'close the door',
            'to close the door',
            'that close the door',
            'closing the door'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l9-e2',
          type: 'multiple-choice',
          instruction: 'Convert the request to reported speech.',
          question: 'Direct: "Please help me." Reported: He asked me ___',
          options: [
            'to help him',
            'help him',
            'that help him',
            'helping him'
          ],
          correctAnswer: 0,
          points: 10
        },
        {
          id: 'b1-u10-l9-e3',
          type: 'translation',
          instruction: 'Convert this command to reported speech.',
          question: 'Direct: "Sit down!" (The teacher told us)',
          correctAnswer: 'The teacher told us to sit down.',
          acceptableAnswers: ['The teacher told us to sit down'],
          points: 10
        },
        {
          id: 'b1-u10-l9-e4',
          type: 'translation',
          instruction: 'Convert this negative command to reported speech.',
          question: 'Direct: "Don\'t be late!" (Mom told me)',
          correctAnswer: 'Mom told me not to be late.',
          acceptableAnswers: ['Mom told me not to be late'],
          points: 10
        },
        {
          id: 'b1-u10-l9-e5',
          type: 'fill-blank',
          instruction: 'Complete the reported command.',
          question: 'Direct: "Open your books." Reported: The teacher told us ___ our books.',
          correctAnswer: 'to open',
          acceptableAnswers: ['to open'],
          points: 10
        },
        {
          id: 'b1-u10-l9-e6',
          type: 'fill-blank',
          instruction: 'Complete the reported negative command.',
          question: 'Direct: "Don\'t touch that!" Reported: She told me ___ touch that.',
          correctAnswer: 'not to',
          acceptableAnswers: ['not to'],
          points: 10
        },
        {
          id: 'b1-u10-l9-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this reported command.',
          sentence: 'He told me that close the window.',
          correctAnswer: 'He told me to close the window.',
          points: 10
        },
        {
          id: 'b1-u10-l9-e8',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['asked', 'She', 'me', 'to', 'wait', 'for', 'her'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6],
          points: 10
        },
        {
          id: 'b1-u10-l9-e9',
          type: 'matching',
          instruction: 'Match the direct command with its reported form.',
          pairs: [
            { left: '"Be quiet!"', right: 'told me to be quiet' },
            { left: '"Don\'t run!"', right: 'told me not to run' },
            { left: '"Please wait."', right: 'asked me to wait' },
            { left: '"Don\'t forget!"', right: 'told me not to forget' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l9-e10',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'For negative commands, we use "not to" before the infinitive.',
          correctAnswer: true,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l10',
      unitId: 'b1-u10',
      title: 'Other Reporting Verbs',
      description: 'Expand your range of reporting verbs',
      order: 10,
      xpReward: 20,
      grammarPoint: 'Use specific reporting verbs: suggest (+ -ing/that), offer (+ to), refuse (+ to), promise (+ to), admit (+ -ing), deny (+ -ing).',
      vocabularyWords: ['suggest', 'offer', 'refuse', 'promise', 'admit', 'deny', 'agree', 'complain', 'explain', 'insist'],
      exercises: [
        {
          id: 'b1-u10-l10-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct reporting verb pattern.',
          question: 'Direct: "Let\'s go to the cinema." Reported: She ___',
          options: [
            'suggested to go to the cinema',
            'suggested going to the cinema',
            'suggested go to the cinema',
            'suggested went to the cinema'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l10-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct reporting verb pattern.',
          question: 'Direct: "I\'ll help you." Reported: He ___',
          options: [
            'offered helping me',
            'offered help me',
            'offered to help me',
            'offered that help me'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l10-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct reporting verb pattern.',
          question: 'Direct: "I won\'t do it!" Reported: She ___',
          options: [
            'refused doing it',
            'refused to do it',
            'refused do it',
            'refused that do it'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l10-e4',
          type: 'translation',
          instruction: 'Convert using the verb "promise".',
          question: 'Direct: "I will call you tomorrow." (He promised)',
          correctAnswer: 'He promised to call me the next day.',
          acceptableAnswers: ['He promised to call me the next day', 'He promised he would call me the next day'],
          points: 10
        },
        {
          id: 'b1-u10-l10-e5',
          type: 'translation',
          instruction: 'Convert using the verb "admit".',
          question: 'Direct: "I broke the window." (He admitted)',
          correctAnswer: 'He admitted breaking the window.',
          acceptableAnswers: ['He admitted breaking the window', 'He admitted that he had broken the window'],
          points: 10
        },
        {
          id: 'b1-u10-l10-e6',
          type: 'fill-blank',
          instruction: 'Complete with the correct form.',
          question: 'She denied ___ the money. (steal)',
          correctAnswer: 'stealing',
          acceptableAnswers: ['stealing'],
          points: 10
        },
        {
          id: 'b1-u10-l10-e7',
          type: 'fill-blank',
          instruction: 'Complete with the correct form.',
          question: 'They agreed ___ us with the project. (help)',
          correctAnswer: 'to help',
          acceptableAnswers: ['to help'],
          points: 10
        },
        {
          id: 'b1-u10-l10-e8',
          type: 'matching',
          instruction: 'Match the reporting verb with its pattern.',
          pairs: [
            { left: 'suggest', right: '+ -ing or that clause' },
            { left: 'offer', right: '+ to + infinitive' },
            { left: 'refuse', right: '+ to + infinitive' },
            { left: 'admit', right: '+ -ing or that clause' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l10-e9',
          type: 'error-correction',
          instruction: 'Correct the error in this reported speech.',
          sentence: 'She suggested to go shopping.',
          correctAnswer: 'She suggested going shopping.',
          points: 10
        },
        {
          id: 'b1-u10-l10-e10',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'The verb "suggest" is followed by "to + infinitive".',
          correctAnswer: false,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l11',
      unitId: 'b1-u10',
      title: 'No Tense Change Situations',
      description: 'Learn when tenses don\'t change in reported speech',
      order: 11,
      xpReward: 20,
      grammarPoint: 'No tense change needed when: 1) reporting immediately, 2) statement is still true, 3) talking about general truths, 4) using present simple in reporting verb.',
      vocabularyWords: ['general truth', 'scientific fact', 'permanent situation', 'still true', 'immediate reporting', 'present reporting', 'timeless', 'universal', 'factual', 'current'],
      exercises: [
        {
          id: 'b1-u10-l11-e1',
          type: 'multiple-choice',
          instruction: 'Choose the correct reported speech for a general truth.',
          question: 'Direct: "The sun rises in the east." Reported: She said ___',
          options: [
            'the sun rose in the east',
            'the sun rises in the east',
            'the sun had risen in the east',
            'the sun will rise in the east'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l11-e2',
          type: 'multiple-choice',
          instruction: 'Choose the correct reported speech for something still true.',
          question: 'Direct: "I live in London." (still lives there) Reported: He said ___',
          options: [
            'he lived in London',
            'he lives in London',
            'he had lived in London',
            'either A or B'
          ],
          correctAnswer: 3,
          points: 10
        },
        {
          id: 'b1-u10-l11-e3',
          type: 'multiple-choice',
          instruction: 'Choose the correct form with present tense reporting verb.',
          question: 'Direct: "I am busy." Reported: She says ___',
          options: [
            'she was busy',
            'she is busy',
            'she has been busy',
            'she had been busy'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l11-e4',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'When reporting general truths, we must change the tense.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l11-e5',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'If we use "says" (present) instead of "said" (past), we don\'t change tenses.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l11-e6',
          type: 'translation',
          instruction: 'Report this general truth.',
          question: 'Direct: "Water boils at 100°C." (The teacher said)',
          correctAnswer: 'The teacher said water boils at 100°C.',
          acceptableAnswers: ['The teacher said water boils at 100°C', 'The teacher said that water boils at 100°C'],
          points: 10
        },
        {
          id: 'b1-u10-l11-e7',
          type: 'fill-blank',
          instruction: 'Complete with the correct tense.',
          question: 'She says she ___ tired. (be - no tense change needed)',
          correctAnswer: 'is',
          acceptableAnswers: ['is'],
          points: 10
        },
        {
          id: 'b1-u10-l11-e8',
          type: 'matching',
          instruction: 'Match the situation with the tense rule.',
          pairs: [
            { left: 'General truth', right: 'No tense change' },
            { left: 'Still true now', right: 'Optional tense change' },
            { left: 'Present reporting verb', right: 'No tense change' },
            { left: 'Immediate reporting', right: 'No tense change' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l11-e9',
          type: 'error-correction',
          instruction: 'Correct the error (scientific fact).',
          sentence: 'The teacher said that the Earth revolved around the Sun.',
          correctAnswer: 'The teacher said that the Earth revolves around the Sun.',
          points: 10
        },
        {
          id: 'b1-u10-l11-e10',
          type: 'multiple-choice',
          instruction: 'Choose the correct reported speech.',
          question: 'Direct: "I don\'t eat meat." (still true) Reported: She told me ___',
          options: [
            'she didn\'t eat meat (only)',
            'she doesn\'t eat meat (only)',
            'either is correct',
            'neither is correct'
          ],
          correctAnswer: 2,
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l12',
      unitId: 'b1-u10',
      title: 'Reporting Offers and Suggestions',
      description: 'Learn to report offers and suggestions',
      order: 12,
      xpReward: 20,
      grammarPoint: 'Offers: "Shall I...?" → offered to do. Suggestions: "Shall we...?" → suggested doing / suggested that we. "Why don\'t we...?" → suggested doing.',
      vocabularyWords: ['offer', 'suggestion', 'propose', 'recommend', 'advise', 'shall', 'why don\'t we', 'let\'s', 'how about', 'what about'],
      exercises: [
        {
          id: 'b1-u10-l12-e1',
          type: 'multiple-choice',
          instruction: 'Convert the offer to reported speech.',
          question: 'Direct: "Shall I carry your bag?" Reported: He ___',
          options: [
            'offered carry my bag',
            'offered to carry my bag',
            'suggested carrying my bag',
            'suggested to carry my bag'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l12-e2',
          type: 'multiple-choice',
          instruction: 'Convert the suggestion to reported speech.',
          question: 'Direct: "Shall we go to the beach?" Reported: She ___',
          options: [
            'suggested to go to the beach',
            'offered to go to the beach',
            'suggested going to the beach',
            'offered going to the beach'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l12-e3',
          type: 'translation',
          instruction: 'Convert this offer to reported speech.',
          question: 'Direct: "Shall I open the window?" (He offered)',
          correctAnswer: 'He offered to open the window.',
          acceptableAnswers: ['He offered to open the window'],
          points: 10
        },
        {
          id: 'b1-u10-l12-e4',
          type: 'translation',
          instruction: 'Convert this suggestion to reported speech.',
          question: 'Direct: "Why don\'t we watch a movie?" (She suggested)',
          correctAnswer: 'She suggested watching a movie.',
          acceptableAnswers: ['She suggested watching a movie', 'She suggested that we watch a movie'],
          points: 10
        },
        {
          id: 'b1-u10-l12-e5',
          type: 'fill-blank',
          instruction: 'Complete with the correct form.',
          question: 'He offered ___ me with my homework. (help)',
          correctAnswer: 'to help',
          acceptableAnswers: ['to help'],
          points: 10
        },
        {
          id: 'b1-u10-l12-e6',
          type: 'fill-blank',
          instruction: 'Complete with the correct form.',
          question: 'They suggested ___ for a walk. (go)',
          correctAnswer: 'going',
          acceptableAnswers: ['going'],
          points: 10
        },
        {
          id: 'b1-u10-l12-e7',
          type: 'error-correction',
          instruction: 'Correct the error in this reported speech.',
          sentence: 'She suggested to have lunch together.',
          correctAnswer: 'She suggested having lunch together.',
          points: 10
        },
        {
          id: 'b1-u10-l12-e8',
          type: 'matching',
          instruction: 'Match the direct speech with its reported form.',
          pairs: [
            { left: '"Shall I help?"', right: 'offered to help' },
            { left: '"Shall we leave?"', right: 'suggested leaving' },
            { left: '"Let\'s eat out."', right: 'suggested eating out' },
            { left: '"I\'ll pay."', right: 'offered to pay' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l12-e9',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: '"Shall I...?" questions are reported with "offered to".',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l12-e10',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['suggested', 'She', 'that', 'we', 'take', 'a', 'break'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l13',
      unitId: 'b1-u10',
      title: 'Common Mistakes',
      description: 'Identify and correct common errors in reported speech',
      order: 13,
      xpReward: 20,
      grammarPoint: 'Common mistakes: using "say me", wrong tense backshift, keeping question word order, forgetting pronoun changes, not changing time expressions.',
      vocabularyWords: ['mistake', 'error', 'correction', 'common error', 'word order', 'tense error', 'pronoun error', 'time expression', 'avoid', 'incorrect'],
      exercises: [
        {
          id: 'b1-u10-l13-e1',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'He said me that he was tired.',
          correctAnswer: 'He told me that he was tired.',
          points: 10
        },
        {
          id: 'b1-u10-l13-e2',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'She asked me where do I live.',
          correctAnswer: 'She asked me where I lived.',
          points: 10
        },
        {
          id: 'b1-u10-l13-e3',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'They said they will come tomorrow.',
          correctAnswer: 'They said they would come the next day.',
          points: 10
        },
        {
          id: 'b1-u10-l13-e4',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'Mary said I am happy.',
          correctAnswer: 'Mary said she was happy.',
          points: 10
        },
        {
          id: 'b1-u10-l13-e5',
          type: 'multiple-choice',
          instruction: 'Identify the error in this sentence.',
          question: 'What is wrong with: "He told that he was busy"?',
          options: [
            'Wrong tense',
            'Missing object after "told"',
            'Wrong pronoun',
            'Nothing is wrong'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l13-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            'She asked if was I ready',
            'She asked if I was ready',
            'She asked was I ready',
            'She asked if am I ready'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l13-e7',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: '"He said me" is correct English.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l13-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'In reported questions, we keep the question word order.',
          correctAnswer: false,
          points: 10
        },
        {
          id: 'b1-u10-l13-e9',
          type: 'matching',
          instruction: 'Match the error type with its example.',
          pairs: [
            { left: 'Wrong verb', right: 'He said me' },
            { left: 'Wrong word order', right: 'She asked where do I live' },
            { left: 'Wrong tense', right: 'He said he will come' },
            { left: 'Wrong pronoun', right: 'Mary said I am happy' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l13-e10',
          type: 'error-correction',
          instruction: 'Correct the error in this sentence.',
          sentence: 'He suggested to go swimming.',
          correctAnswer: 'He suggested going swimming.',
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l14',
      unitId: 'b1-u10',
      title: 'News and Gossip',
      description: 'Practice reporting news and gossip in real contexts',
      order: 14,
      xpReward: 20,
      grammarPoint: 'Use reported speech to pass on information: news reports, rumors, conversations. Mix different reporting verbs and structures for natural communication.',
      vocabularyWords: ['news', 'gossip', 'rumor', 'hear', 'announce', 'claim', 'according to', 'apparently', 'supposedly', 'report'],
      exercises: [
        {
          id: 'b1-u10-l14-e1',
          type: 'translation',
          instruction: 'Report this news.',
          question: 'News: "The Prime Minister will resign tomorrow." (The BBC reported)',
          correctAnswer: 'The BBC reported that the Prime Minister would resign the next day.',
          acceptableAnswers: ['The BBC reported that the Prime Minister would resign the next day', 'The BBC reported the Prime Minister would resign the next day'],
          points: 10
        },
        {
          id: 'b1-u10-l14-e2',
          type: 'translation',
          instruction: 'Report this gossip.',
          question: 'Gossip: "Sarah is dating Tom." (I heard)',
          correctAnswer: 'I heard that Sarah was dating Tom.',
          acceptableAnswers: ['I heard that Sarah was dating Tom', 'I heard Sarah was dating Tom'],
          points: 10
        },
        {
          id: 'b1-u10-l14-e3',
          type: 'multiple-choice',
          instruction: 'Choose the best way to report this announcement.',
          question: 'Direct: "The company will hire 100 new employees next month."',
          options: [
            'They announced they hire 100 new employees',
            'They announced hiring 100 new employees next month',
            'They announced that they would hire 100 new employees the following month',
            'They announce they will hire 100 new employees'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l14-e4',
          type: 'fill-blank',
          instruction: 'Complete with the correct reported speech.',
          question: 'She claimed that she ___ the winner. (be)',
          correctAnswer: 'was',
          acceptableAnswers: ['was'],
          points: 10
        },
        {
          id: 'b1-u10-l14-e5',
          type: 'fill-blank',
          instruction: 'Complete with the correct reported speech.',
          question: 'According to the news, the prices ___ next week. (increase)',
          correctAnswer: 'would increase',
          acceptableAnswers: ['would increase', 'will increase'],
          points: 10
        },
        {
          id: 'b1-u10-l14-e6',
          type: 'word-order',
          instruction: 'Arrange the words to form a news report.',
          words: ['reported', 'The', 'newspaper', 'that', 'the', 'accident', 'had', 'injured', 'five', 'people'],
          correctOrder: [1, 2, 0, 3, 4, 5, 6, 7, 8, 9],
          points: 10
        },
        {
          id: 'b1-u10-l14-e7',
          type: 'multiple-choice',
          instruction: 'Choose the correct way to report a rumor.',
          question: 'How do we report: "The store is closing down" (rumor)?',
          options: [
            'They say the store closes down',
            'They say the store is closing down',
            'They said the store closed down',
            'They say the store closed down'
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 'b1-u10-l14-e8',
          type: 'true-false',
          instruction: 'Determine if the statement is true or false.',
          statement: 'When reporting news, we should use past tense reporting verbs.',
          correctAnswer: true,
          points: 10
        },
        {
          id: 'b1-u10-l14-e9',
          type: 'matching',
          instruction: 'Match the reporting context with the appropriate verb.',
          pairs: [
            { left: 'Official news', right: 'announced' },
            { left: 'Informal gossip', right: 'heard' },
            { left: 'Doubtful information', right: 'claimed' },
            { left: 'Media report', right: 'reported' }
          ],
          points: 10
        },
        {
          id: 'b1-u10-l14-e10',
          type: 'translation',
          instruction: 'Report this conversation.',
          question: 'John: "I can\'t come to the party." (John told me)',
          correctAnswer: 'John told me he couldn\'t come to the party.',
          acceptableAnswers: ['John told me he couldn\'t come to the party', 'John told me that he couldn\'t come to the party'],
          points: 10
        }
      ]
    },
    {
      id: 'b1-u10-l15',
      unitId: 'b1-u10',
      title: 'Comprehensive Review',
      description: 'Review all aspects of reported speech',
      order: 15,
      xpReward: 20,
      grammarPoint: 'Master all reported speech forms: statements, questions, commands, requests, offers, suggestions. Use appropriate tense changes, pronouns, and time expressions.',
      vocabularyWords: ['comprehensive', 'review', 'practice', 'consolidate', 'master', 'apply', 'variety', 'mixed practice', 'all forms', 'summary'],
      exercises: [
        {
          id: 'b1-u10-l15-e1',
          type: 'translation',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "I have never been to Australia." (She said)',
          correctAnswer: 'She said she had never been to Australia.',
          acceptableAnswers: ['She said she had never been to Australia', 'She said that she had never been to Australia'],
          points: 10
        },
        {
          id: 'b1-u10-l15-e2',
          type: 'translation',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "Where did you buy that dress?" (She asked me)',
          correctAnswer: 'She asked me where I had bought that dress.',
          acceptableAnswers: ['She asked me where I had bought that dress', 'She asked where I had bought that dress'],
          points: 10
        },
        {
          id: 'b1-u10-l15-e3',
          type: 'translation',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "Don\'t forget to call me!" (Mom told me)',
          correctAnswer: 'Mom told me not to forget to call her.',
          acceptableAnswers: ['Mom told me not to forget to call her'],
          points: 10
        },
        {
          id: 'b1-u10-l15-e4',
          type: 'translation',
          instruction: 'Convert to reported speech.',
          question: 'Direct: "Let\'s have pizza for dinner." (He suggested)',
          correctAnswer: 'He suggested having pizza for dinner.',
          acceptableAnswers: ['He suggested having pizza for dinner', 'He suggested that we have pizza for dinner'],
          points: 10
        },
        {
          id: 'b1-u10-l15-e5',
          type: 'multiple-choice',
          instruction: 'Choose the correctly reported speech.',
          question: 'Direct: "Can you speak Spanish?" Reported: She asked me ___',
          options: [
            'can I speak Spanish',
            'if I can speak Spanish',
            'if I could speak Spanish',
            'could I speak Spanish'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l15-e6',
          type: 'multiple-choice',
          instruction: 'Choose the correctly reported speech.',
          question: 'Direct: "I will help you tomorrow." Reported: He said ___',
          options: [
            'he will help me tomorrow',
            'he would help me tomorrow',
            'he would help me the next day',
            'he will help me the next day'
          ],
          correctAnswer: 2,
          points: 10
        },
        {
          id: 'b1-u10-l15-e7',
          type: 'error-correction',
          instruction: 'Correct all errors in this sentence.',
          sentence: 'She said me that she can\'t come to the party tomorrow.',
          correctAnswer: 'She told me that she couldn\'t come to the party the next day.',
          points: 10
        },
        {
          id: 'b1-u10-l15-e8',
          type: 'fill-blank',
          instruction: 'Complete with the correct reported speech.',
          question: 'Direct: "I am learning French." Reported: He said he ___ French.',
          correctAnswer: 'was learning',
          acceptableAnswers: ['was learning'],
          points: 10
        },
        {
          id: 'b1-u10-l15-e9',
          type: 'word-order',
          instruction: 'Arrange the words to form correct reported speech.',
          words: ['asked', 'She', 'me', 'if', 'I', 'had', 'seen', 'her', 'keys'],
          correctOrder: [1, 0, 2, 3, 4, 5, 6, 7, 8],
          points: 10
        },
        {
          id: 'b1-u10-l15-e10',
          type: 'matching',
          instruction: 'Match each direct speech type with its reported form.',
          pairs: [
            { left: 'Statement', right: 'said that + clause' },
            { left: 'Yes/No question', right: 'asked if/whether' },
            { left: 'Command', right: 'told + object + to' },
            { left: 'Wh- question', right: 'asked + wh-word' }
          ],
          points: 10
        }
      ]
    }
  ]
};
