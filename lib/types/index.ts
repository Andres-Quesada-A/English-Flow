// ===== Exercise Types =====

export type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'word-order'
  | 'matching'
  | 'true-false'
  | 'translation'
  | 'error-correction'
  | 'context-completion'
  | 'categorization'
  | 'dialogue-completion';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  instruction: string;
  hint?: string;
  explanation?: string;
  points: number;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill-blank';
  question: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
}

export interface WordOrderExercise extends BaseExercise {
  type: 'word-order';
  words: string[];
  correctOrder: number[];
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface TrueFalseExercise extends BaseExercise {
  type: 'true-false';
  statement: string;
  correctAnswer: boolean;
}

export interface TranslationExercise extends BaseExercise {
  type: 'translation';
  question: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
}

export interface ErrorCorrectionExercise extends BaseExercise {
  type: 'error-correction';
  sentence: string;
  correctAnswer: string;
  errorExplanation?: string;
}

export interface ContextCompletionExercise extends BaseExercise {
  type: 'context-completion';
  context: string;
  options: string[];
  correctAnswer: number;
}

export interface CategoryItem {
  text: string;
  category: string;
}

export interface CategorizationExercise extends BaseExercise {
  type: 'categorization';
  categories: string[];
  items: CategoryItem[];
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  text: string;
  isBlank?: boolean;
}

export interface DialogueCompletionExercise extends BaseExercise {
  type: 'dialogue-completion';
  dialogue: DialogueLine[];
  options: string[];
  correctAnswer: number;
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | WordOrderExercise
  | MatchingExercise
  | TrueFalseExercise
  | TranslationExercise
  | ErrorCorrectionExercise
  | ContextCompletionExercise
  | CategorizationExercise
  | DialogueCompletionExercise;

// ===== Lesson Types =====

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  exercises: Exercise[];
  vocabularyWords?: string[];
  grammarPoint?: string;
}

// ===== Unit Types =====

export interface Unit {
  id: string;
  levelId: LevelId;
  title: string;
  description: string;
  order: number;
  totalLessons: number;
  lessons: Lesson[];
  icon?: string;
}

// ===== Level Types =====

export type LevelId = 'a1' | 'a2' | 'b1' | 'b2';

export interface Level {
  id: LevelId;
  name: string;
  fullName: string;
  description: string;
  color: string;
  units: Unit[];
}

// ===== Progress Types =====

export interface ExerciseAttempt {
  exerciseId: string;
  lessonId: string;
  correct: boolean;
  attempts: number;
  timestamp: number;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  score: number;
  exercisesCompleted: number;
  totalExercises: number;
  perfectScore: boolean;
  completedAt?: number;
}

export interface UnitProgress {
  unitId: string;
  lessonsCompleted: number;
  totalLessons: number;
  completed: boolean;
}

export interface LevelProgress {
  levelId: LevelId;
  unitsCompleted: number;
  totalUnits: number;
  completed: boolean;
}

export interface Streak {
  current: number;
  longest: number;
  lastActivityDate: string;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  hasCompletedOnboarding: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
}

export interface UserProgress {
  currentLevel: LevelId;
  currentUnit: string | null;
  currentLesson: string | null;
  totalXP: number;
  streak: Streak;
  achievements: string[];
  lessons: Record<string, LessonProgress>;
  failedExercises: ExerciseAttempt[];
  settings: UserSettings;
  createdAt: number;
  lastUpdated: number;
}

// ===== UI Types =====

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'error';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'primary' | 'a1' | 'a2' | 'b1' | 'b2';

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}
