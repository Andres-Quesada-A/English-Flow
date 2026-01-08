import type { Exercise } from '@/lib/types';

// Sample exercises for A1 - Unit 1 - Lesson 1: Hello and Goodbye
export const sampleExercises: Exercise[] = [
  {
    id: 'a1-u1-l1-e1',
    type: 'multiple-choice',
    instruction: 'Select the correct answer',
    question: 'How do you say "Hola" in English?',
    options: ['Goodbye', 'Hello', 'Good night', 'Thank you'],
    correctAnswer: 1,
    points: 10,
    explanation: '"Hello" is the most common greeting in English, equivalent to "Hola" in Spanish.',
  },
  {
    id: 'a1-u1-l1-e2',
    type: 'matching',
    instruction: 'Match the English greeting with its Spanish translation',
    pairs: [
      { left: 'Hello', right: 'Hola' },
      { left: 'Goodbye', right: 'Adiós' },
      { left: 'Good morning', right: 'Buenos días' },
      { left: 'Good night', right: 'Buenas noches' },
    ],
    points: 10,
  },
  {
    id: 'a1-u1-l1-e3',
    type: 'fill-blank',
    instruction: 'Complete the greeting',
    question: 'Good ___!',
    correctAnswer: 'morning',
    acceptableAnswers: ['afternoon', 'evening', 'night'],
    hint: 'Think about what you say at different times of day',
    points: 10,
  },
  {
    id: 'a1-u1-l1-e4',
    type: 'true-false',
    instruction: 'Is this statement correct?',
    statement: '"Bye" is a short form of "Goodbye"',
    correctAnswer: true,
    explanation: 'Yes! "Bye" is the informal, shortened version of "Goodbye".',
    points: 10,
  },
  {
    id: 'a1-u1-l1-e5',
    type: 'translation',
    instruction: 'Translate to English',
    question: 'Buenos días',
    correctAnswer: 'Good morning',
    acceptableAnswers: ['good morning'],
    points: 10,
  },
  {
    id: 'a1-u1-l1-e6',
    type: 'word-order',
    instruction: 'Put the words in the correct order to form a greeting',
    words: ['morning', 'Good', '!'],
    correctOrder: [1, 0, 2],
    points: 10,
  },
  {
    id: 'a1-u1-l1-e7',
    type: 'dialogue-completion',
    instruction: 'Complete the conversation',
    dialogue: [
      { speaker: 'A', text: 'Hello!' },
      { speaker: 'B', text: '___', isBlank: true },
      { speaker: 'A', text: 'How are you?' },
    ],
    options: ['Goodbye!', 'Hi!', 'Good night!', 'Thank you!'],
    correctAnswer: 1,
    points: 10,
    explanation: 'When someone says "Hello", we respond with a greeting like "Hi".',
  },
  {
    id: 'a1-u1-l1-e8',
    type: 'categorization',
    instruction: 'Put each word in the correct category',
    categories: ['Greetings (Hello)', 'Farewells (Goodbye)'],
    items: [
      { text: 'Hello', category: 'Greetings (Hello)' },
      { text: 'Bye', category: 'Farewells (Goodbye)' },
      { text: 'Hi', category: 'Greetings (Hello)' },
      { text: 'Goodbye', category: 'Farewells (Goodbye)' },
      { text: 'Good morning', category: 'Greetings (Hello)' },
      { text: 'See you later', category: 'Farewells (Goodbye)' },
    ],
    points: 10,
  },
  {
    id: 'a1-u1-l1-e9',
    type: 'multiple-choice',
    instruction: 'Choose the best option',
    question: "It's 10 PM and you're going to sleep. What do you say?",
    options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    correctAnswer: 3,
    explanation: 'We say "Good night" when going to sleep or saying goodbye late at night.',
    points: 10,
  },
  {
    id: 'a1-u1-l1-e10',
    type: 'context-completion',
    instruction: 'Complete the text with the correct words',
    context: 'In the morning, we say ___. In the afternoon, we say ___. At night, before sleeping, we say ___.',
    options: ['Good morning', 'Good afternoon', 'Good night'],
    correctAnswer: 0,
    points: 10,
  },
];

// Export a function to get exercises for a specific lesson
export function getExercisesForLesson(lessonId: string): Exercise[] {
  // For now, return sample exercises for the first lesson
  // In Phase 3, this will be replaced with actual lesson data
  if (lessonId.includes('l1')) {
    return sampleExercises;
  }

  // Return a subset for other lessons (placeholder)
  return sampleExercises.slice(0, 5);
}
