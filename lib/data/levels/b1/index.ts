import type { Unit, LevelId } from '@/lib/types';
import { unit1 } from './unit-01-present-perfect';
import { unit2 } from './unit-02-present-perfect-vs-past';
import { unit3 } from './unit-03-past-continuous';
import { unit4 } from './unit-04-used-to';
import { unit5 } from './unit-05-future-forms';
import { unit6 } from './unit-06-first-conditional';
import { unit7 } from './unit-07-second-conditional';
import { unit8 } from './unit-08-relative-clauses';
import { unit9 } from './unit-09-passive-voice';
import { unit10 } from './unit-10-reported-speech';
import { unit11 } from './unit-11-phrasal-verbs';
import { unit12 } from './unit-12-linking-words';

export const b1Units: Unit[] = [
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6,
  unit7,
  unit8,
  unit9,
  unit10,
  unit11,
  unit12,
];

export const b1Level = {
  id: 'b1' as LevelId,
  name: 'B1',
  fullName: 'Intermediate',
  description: 'Expand your skills. Master complex tenses, conditionals, and express opinions confidently.',
  color: 'var(--level-b1)',
  units: b1Units,
};
