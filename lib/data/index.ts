import type { Unit, Lesson, Exercise, LevelId } from '@/lib/types';
import { a1Units } from './levels/a1';
import { a2Units } from './levels/a2';

// All units by level
const unitsByLevel: Record<LevelId, Unit[]> = {
  a1: a1Units,
  a2: a2Units,
  b1: [], // TODO: Add B1 units
  b2: [], // TODO: Add B2 units
};

/**
 * Get all units for a level
 */
export function getUnitsForLevel(levelId: LevelId): Unit[] {
  return unitsByLevel[levelId] || [];
}

/**
 * Get a specific unit by ID
 */
export function getUnitById(unitId: string): Unit | undefined {
  for (const levelUnits of Object.values(unitsByLevel)) {
    const unit = levelUnits.find(u => u.id === unitId);
    if (unit) return unit;
  }
  return undefined;
}

/**
 * Get a specific lesson by unit ID and lesson ID
 */
export function getLessonById(unitId: string, lessonId: string): Lesson | undefined {
  const unit = getUnitById(unitId);
  if (!unit) return undefined;

  // lessonId could be 'l1', 'l2', etc. or the full id like 'a1-u1-l1'
  const lessonNumber = lessonId.replace('l', '');

  return unit.lessons.find(l => {
    const lessonIdParts = l.id.split('-');
    const lNum = lessonIdParts[lessonIdParts.length - 1].replace('l', '');
    return lNum === lessonNumber || l.id === lessonId;
  });
}

/**
 * Get exercises for a specific lesson
 */
export function getExercisesForLesson(unitId: string, lessonId: string): Exercise[] {
  const lesson = getLessonById(unitId, lessonId);
  return lesson?.exercises || [];
}

/**
 * Get lesson info (title, description, etc.) without exercises
 */
export function getLessonInfo(unitId: string, lessonId: string): Omit<Lesson, 'exercises'> | undefined {
  const lesson = getLessonById(unitId, lessonId);
  if (!lesson) return undefined;

  const { exercises, ...lessonInfo } = lesson;
  return lessonInfo;
}

// Re-export for convenience
export { a1Units } from './levels/a1';
export { a2Units } from './levels/a2';
