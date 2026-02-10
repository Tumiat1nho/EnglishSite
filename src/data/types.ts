export interface LessonDialogueLine {
  speaker: string;
  english: string;
  portuguese: string;
}

export interface LessonVocabularyItem {
  english: string;
  portuguese: string;
  phonetic: string;
  example: string;
}

export interface LessonGrammarTip {
  title: string;
  explanation: string;
}

export interface LessonMiniExercise {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContent {
  introduction: string;
  dialogue: LessonDialogueLine[];
  vocabulary: LessonVocabularyItem[];
  grammarTip: LessonGrammarTip;
  miniExercise: LessonMiniExercise;
}

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: LessonContent;
}

export interface GrammarExample {
  english: string;
  portuguese: string;
  highlight: string;
}

export interface GrammarCommonMistake {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface GrammarContent {
  explanation: string;
  examples: GrammarExample[];
  commonMistakes: GrammarCommonMistake[];
  tip: string;
}

export interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: GrammarContent;
}

export interface VocabularyWord {
  english: string;
  portuguese: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
}

export interface VocabularyCategory {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  words: VocabularyWord[];
}

export interface QuizQuestion {
  type: "quiz";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FillInQuestion {
  type: "fill-in-the-blank";
  sentence: string;
  answer: string;
  hint?: string;
  explanation: string;
}

export interface WordOrderQuestion {
  type: "word-order";
  words: string[];
  correctOrder: string[];
  translation: string;
}

export type ExerciseQuestion = QuizQuestion | FillInQuestion | WordOrderQuestion;

export interface ExerciseSet {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  type: "quiz" | "fill-in-the-blank" | "word-order" | "mixed";
  questions: ExerciseQuestion[];
}
