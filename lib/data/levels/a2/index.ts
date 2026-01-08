import type { Unit, LevelId } from '@/lib/types';
import { unit1 } from './unit-01-daily-routines';
import { unit2 } from './unit-02-jobs-workplaces';
import { unit3 } from './unit-03-transportation';
import { unit4 } from './unit-04-places-in-town';
import { unit5 } from './unit-05-hobbies-free-time';
import { unit6 } from './unit-06-past-simple-regular';
import { unit7 } from './unit-07-past-simple-irregular';
import { unit8 } from './unit-08-comparatives';
import { unit9 } from './unit-09-superlatives';
import { unit10 } from './unit-10-future-going-to';
import { unit11 } from './unit-11-future-will';
import { unit12 } from './unit-12-modal-verbs-basic';

export const a2Units: Unit[] = [
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

export const a2Level = {
  id: 'a2' as LevelId,
  name: 'A2',
  fullName: 'Elementary',
  description: 'Build on basics. Learn to talk about daily routines, past events, and make comparisons.',
  color: 'var(--level-a2)',
  units: a2Units,
};
