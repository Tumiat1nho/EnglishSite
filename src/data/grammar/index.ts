import { GrammarTopic } from "../types";
import { grammarA1 } from "./a1";
import { grammarA2 } from "./a2";
import { grammarB1 } from "./b1";
import { grammarB2 } from "./b2";

export type { GrammarTopic };

export const grammarTopics: GrammarTopic[] = [
  ...grammarA1,
  ...grammarA2,
  ...grammarB1,
  ...grammarB2,
];

export const grammarByLevel: Record<string, GrammarTopic[]> = {
  A1: grammarA1,
  A2: grammarA2,
  B1: grammarB1,
  B2: grammarB2,
};
