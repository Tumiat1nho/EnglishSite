import { ExerciseSet } from "../types";
import { exercisesA1 } from "./a1";
import { exercisesA2 } from "./a2";
import { exercisesB1 } from "./b1";
import { exercisesB2 } from "./b2";

export type { ExerciseSet };

export const exerciseSets: ExerciseSet[] = [
  ...exercisesA1,
  ...exercisesA2,
  ...exercisesB1,
  ...exercisesB2,
];

export const exercisesByLevel: Record<string, ExerciseSet[]> = {
  A1: exercisesA1,
  A2: exercisesA2,
  B1: exercisesB1,
  B2: exercisesB2,
};
