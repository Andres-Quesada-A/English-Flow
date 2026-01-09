import type { Unit, LevelId } from '@/lib/types';
import { unit1 } from './unit-01-present-perfect-continuous';
import { unit2 } from './unit-02-past-perfect';
import { unit3 } from './unit-03-past-perfect-continuous';
import { unit4 } from './unit-04-third-conditional';
import { unit5 } from './unit-05-mixed-conditionals';
import { unit6 } from './unit-06-modal-verbs-advanced';
import { unit7 } from './unit-07-causative-have-get';
import { unit8 } from './unit-08-wish-if-only';
import { unit9 } from './unit-09-advanced-relative-clauses';
import { unit10 } from './unit-10-inversion';
import { unit11 } from './unit-11-gerunds-infinitives';
import { unit12 } from './unit-12-emphasis-cleft-sentences';

export const b2Units: Unit[] = [
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

export const b2Level = {
  id: 'b2' as LevelId,
  name: 'B2',
  fullName: 'Upper Intermediate',
  description: 'Achieve fluency. Master advanced grammar, express complex ideas, and communicate naturally.',
  color: 'var(--level-b2)',
  units: b2Units,
};
