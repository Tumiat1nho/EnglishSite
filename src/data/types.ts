export interface Lesson {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: {
    introduction: string;
    dialogue: { speaker: string; english: string; portuguese: string }[];
    vocabulary: {
      english: string;
      portuguese: string;
      phonetic: string;
      example: string;
    }[];
    grammarTip: { title: string; explanation: string };
    miniExercise: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
  };
}

export interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: {
    explanation: string;
    examples: { english: string; portuguese: string; highlight: string }[];
    commonMistakes: { wrong: string; correct: string; explanation: string }[];
    tip: string;
  };
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
