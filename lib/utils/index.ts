export * from './storage';

// Shuffle array (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Normalize string for comparison
export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ');
}

// Check if answers match (case-insensitive, punctuation-tolerant)
export function checkAnswer(userAnswer: string, correctAnswer: string, acceptableAnswers?: string[]): boolean {
  const normalized = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);

  if (normalized === normalizedCorrect) {
    return true;
  }

  if (acceptableAnswers) {
    return acceptableAnswers.some(
      (alt) => normalizeAnswer(alt) === normalized
    );
  }

  return false;
}

// Format number with suffix (1st, 2nd, 3rd, etc.)
export function formatOrdinal(n: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Format date as relative time
export function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days === 1 ? 'yesterday' : `${days} days ago`;
  }
  if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }
  if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }
  return 'just now';
}

// Calculate percentage
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

// Clamp number between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Generate unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Delay utility
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get level color class
export function getLevelColorClass(levelId: string): string {
  switch (levelId) {
    case 'a1':
      return 'text-level-a1';
    case 'a2':
      return 'text-level-a2';
    case 'b1':
      return 'text-level-b1';
    case 'b2':
      return 'text-level-b2';
    default:
      return 'text-primary';
  }
}

// Get level gradient class
export function getLevelGradientClass(levelId: string): string {
  switch (levelId) {
    case 'a1':
      return 'gradient-a1';
    case 'a2':
      return 'gradient-a2';
    case 'b1':
      return 'gradient-b1';
    case 'b2':
      return 'gradient-b2';
    default:
      return 'gradient-bg';
  }
}
