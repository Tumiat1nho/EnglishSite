import { Lesson } from "../types";
import { lessonsA1 } from "./a1";
import { lessonsA2 } from "./a2";
import { lessonsB1 } from "./b1";
import { lessonsB2 } from "./b2";

export type { Lesson };

export const lessons: Lesson[] = [
  ...lessonsA1,
  ...lessonsA2,
  ...lessonsB1,
  ...lessonsB2,
];

export const lessonsByLevel: Record<string, Lesson[]> = {
  A1: lessonsA1,
  A2: lessonsA2,
  B1: lessonsB1,
  B2: lessonsB2,
};
