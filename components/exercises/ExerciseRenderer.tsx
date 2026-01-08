'use client';

import type { Exercise } from '@/lib/types';
import { MultipleChoice } from './MultipleChoice';
import { FillInBlank } from './FillInBlank';
import { WordOrder } from './WordOrder';
import { Matching } from './Matching';
import { TrueFalse } from './TrueFalse';
import { Translation } from './Translation';
import { ErrorCorrection } from './ErrorCorrection';
import { ContextCompletion } from './ContextCompletion';
import { Categorization } from './Categorization';
import { DialogueCompletion } from './DialogueCompletion';

interface ExerciseRendererProps {
  exercise: Exercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function ExerciseRenderer({ exercise, onAnswer, disabled = false }: ExerciseRendererProps) {
  switch (exercise.type) {
    case 'multiple-choice':
      return (
        <MultipleChoice
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'fill-blank':
      return (
        <FillInBlank
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'word-order':
      return (
        <WordOrder
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'matching':
      return (
        <Matching
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'true-false':
      return (
        <TrueFalse
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'translation':
      return (
        <Translation
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'error-correction':
      return (
        <ErrorCorrection
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'context-completion':
      return (
        <ContextCompletion
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'categorization':
      return (
        <Categorization
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    case 'dialogue-completion':
      return (
        <DialogueCompletion
          exercise={exercise}
          onAnswer={onAnswer}
          disabled={disabled}
        />
      );

    default:
      return (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error">
          Unknown exercise type
        </div>
      );
  }
}

export default ExerciseRenderer;
