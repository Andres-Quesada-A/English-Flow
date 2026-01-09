import type { Unit, LevelId } from '@/lib/types';
import { unit1 } from './unit-01-greetings';
import { unit2 } from './unit-02-alphabet-numbers';
import { unit3 } from './unit-03-personal-info';
import { unit4 } from './unit-04-family';
import { unit5 } from './unit-05-colors-adjectives';
import { unit6 } from './unit-06-time';
import { unit7 } from './unit-07-food-drinks';
import { unit8 } from './unit-08-places';
import { unit9 } from './unit-09-weather';
import { unit10 } from './unit-10-body-health';
import { unit11 } from './unit-11-clothes-shopping';
import { unit12 } from './unit-12-daily-activities';
import { unit13 } from './unit-13-colors-numbers';
import { unit14 } from './unit-14-food-drinks';
import { unit15 } from './unit-15-family-home';

export const a1Units: Unit[] = [
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
  unit13,
  unit14,
  unit15,
];

export const a1Level = {
  id: 'a1' as LevelId,
  name: 'A1',
  fullName: 'Beginner',
  description: 'Start from zero. Learn basic greetings, numbers, and simple phrases.',
  color: 'var(--level-a1)',
  units: a1Units,
};
