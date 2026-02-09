import { VocabularyCategory } from "../types";
import { vocabularyA1 } from "./a1";
import { vocabularyA2 } from "./a2";
import { vocabularyB1 } from "./b1";
import { vocabularyB2 } from "./b2";

export type { VocabularyCategory };

export const vocabularyCategories: VocabularyCategory[] = [
  ...vocabularyA1,
  ...vocabularyA2,
  ...vocabularyB1,
  ...vocabularyB2,
];

export const vocabularyByLevel: Record<string, VocabularyCategory[]> = {
  A1: vocabularyA1,
  A2: vocabularyA2,
  B1: vocabularyB1,
  B2: vocabularyB2,
};
