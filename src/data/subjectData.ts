export interface SubjectLink {
  title: string;
  url: string;
  description?: string;
}

export interface ChapterData {
  chapterNumber: number;
  chapterName: string;
  notes?: SubjectLink[];
  classes?: SubjectLink[];
}

export interface SubjectUrls {
  syllabus?: string;
  markedBooks?: string;
  chapterClasses?: string;
  chapterNotes?: string;
}

export interface SubjectData {
  id: string;
  name: string;
  mainSubject: string;
  paper: string;
  syllabus?: SubjectLink[];
  markedBooks?: SubjectLink[];
  chapters?: ChapterData[];
  urls?: SubjectUrls;
}

export const subjectDatabase: Record<string, SubjectData> = {
  bangla_1st: {
    id: 'bangla_1st',
    name: 'Bangla 1st Paper',
    mainSubject: 'Bangla',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/bangla1st',
      markedBooks: 'https://your-books-url.com/bangla1st',
      chapterClasses: 'https://your-classes-url.com/bangla1st',
      chapterNotes: 'https://your-notes-url.com/bangla1st',
    },
  },

  bangla_2nd: {
    id: 'bangla_2nd',
    name: 'Bangla 2nd Paper',
    mainSubject: 'Bangla',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/bangla2nd',
      markedBooks: 'https://your-books-url.com/bangla2nd',
      chapterClasses: 'https://your-classes-url.com/bangla2nd',
      chapterNotes: 'https://your-notes-url.com/bangla2nd',
    },
  },

  english_1st: {
    id: 'english_1st',
    name: 'English 1st Paper',
    mainSubject: 'English',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/english1st',
      markedBooks: 'https://your-books-url.com/english1st',
      chapterClasses: 'https://your-classes-url.com/english1st',
      chapterNotes: 'https://your-notes-url.com/english1st',
    },
  },

  english_2nd: {
    id: 'english_2nd',
    name: 'English 2nd Paper',
    mainSubject: 'English',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/english2nd',
      markedBooks: 'https://your-books-url.com/english2nd',
      chapterClasses: 'https://your-classes-url.com/english2nd',
      chapterNotes: 'https://your-notes-url.com/english2nd',
    },
  },

  ict: {
    id: 'ict',
    name: 'ICT',
    mainSubject: 'ICT',
    paper: '',
    urls: {
      syllabus: 'https://your-syllabus-url.com/ict',
      markedBooks: 'https://your-books-url.com/ict',
      chapterClasses: 'https://your-classes-url.com/ict',
      chapterNotes: 'https://your-notes-url.com/ict',
    },
  },

  physics_1st: {
    id: 'physics_1st',
    name: 'Physics 1st Paper',
    mainSubject: 'Physics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/physics1st',
      markedBooks: 'https://your-books-url.com/physics1st',
      chapterClasses: 'https://your-classes-url.com/physics1st',
      chapterNotes: 'https://your-notes-url.com/physics1st',
    },
  },

  physics_2nd: {
    id: 'physics_2nd',
    name: 'Physics 2nd Paper',
    mainSubject: 'Physics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/physics2nd',
      markedBooks: 'https://your-books-url.com/physics2nd',
      chapterClasses: 'https://your-classes-url.com/physics2nd',
      chapterNotes: 'https://your-notes-url.com/physics2nd',
    },
  },

  chemistry_1st: {
    id: 'chemistry_1st',
    name: 'Chemistry 1st Paper',
    mainSubject: 'Chemistry',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/chemistry1st',
      markedBooks: 'https://your-books-url.com/chemistry1st',
      chapterClasses: 'https://your-classes-url.com/chemistry1st',
      chapterNotes: 'https://your-notes-url.com/chemistry1st',
    },
  },

  chemistry_2nd: {
    id: 'chemistry_2nd',
    name: 'Chemistry 2nd Paper',
    mainSubject: 'Chemistry',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/chemistry2nd',
      markedBooks: 'https://your-books-url.com/chemistry2nd',
      chapterClasses: 'https://your-classes-url.com/chemistry2nd',
      chapterNotes: 'https://your-notes-url.com/chemistry2nd',
    },
  },

  biology_1st: {
    id: 'biology_1st',
    name: 'Biology 1st Paper',
    mainSubject: 'Biology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/biology1st',
      markedBooks: 'https://your-books-url.com/biology1st',
      chapterClasses: 'https://your-classes-url.com/biology1st',
      chapterNotes: 'https://your-notes-url.com/biology1st',
    },
  },

  biology_2nd: {
    id: 'biology_2nd',
    name: 'Biology 2nd Paper',
    mainSubject: 'Biology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/biology2nd',
      markedBooks: 'https://your-books-url.com/biology2nd',
      chapterClasses: 'https://your-classes-url.com/biology2nd',
      chapterNotes: 'https://your-notes-url.com/biology2nd',
    },
  },

  higher_math_1st: {
    id: 'higher_math_1st',
    name: 'Higher Math 1st Paper',
    mainSubject: 'Higher Math',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/highermath1st',
      markedBooks: 'https://your-books-url.com/highermath1st',
      chapterClasses: 'https://your-classes-url.com/highermath1st',
      chapterNotes: 'https://your-notes-url.com/highermath1st',
    },
  },

  higher_math_2nd: {
    id: 'higher_math_2nd',
    name: 'Higher Math 2nd Paper',
    mainSubject: 'Higher Math',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/highermath2nd',
      markedBooks: 'https://your-books-url.com/highermath2nd',
      chapterClasses: 'https://your-classes-url.com/highermath2nd',
      chapterNotes: 'https://your-notes-url.com/highermath2nd',
    },
  },

  statistics_1st: {
    id: 'statistics_1st',
    name: 'Statistics 1st Paper',
    mainSubject: 'Statistics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/statistics1st',
      markedBooks: 'https://your-books-url.com/statistics1st',
      chapterClasses: 'https://your-classes-url.com/statistics1st',
      chapterNotes: 'https://your-notes-url.com/statistics1st',
    },
  },

  statistics_2nd: {
    id: 'statistics_2nd',
    name: 'Statistics 2nd Paper',
    mainSubject: 'Statistics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/statistics2nd',
      markedBooks: 'https://your-books-url.com/statistics2nd',
      chapterClasses: 'https://your-classes-url.com/statistics2nd',
      chapterNotes: 'https://your-notes-url.com/statistics2nd',
    },
  },

  economics_1st: {
    id: 'economics_1st',
    name: 'Economics 1st Paper',
    mainSubject: 'Economics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/economics1st',
      markedBooks: 'https://your-books-url.com/economics1st',
      chapterClasses: 'https://your-classes-url.com/economics1st',
      chapterNotes: 'https://your-notes-url.com/economics1st',
    },
  },

  economics_2nd: {
    id: 'economics_2nd',
    name: 'Economics 2nd Paper',
    mainSubject: 'Economics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/economics2nd',
      markedBooks: 'https://your-books-url.com/economics2nd',
      chapterClasses: 'https://your-classes-url.com/economics2nd',
      chapterNotes: 'https://your-notes-url.com/economics2nd',
    },
  },

  accounting_1st: {
    id: 'accounting_1st',
    name: 'Accounting 1st Paper',
    mainSubject: 'Accounting',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/accounting1st',
      markedBooks: 'https://your-books-url.com/accounting1st',
      chapterClasses: 'https://your-classes-url.com/accounting1st',
      chapterNotes: 'https://your-notes-url.com/accounting1st',
    },
  },

  accounting_2nd: {
    id: 'accounting_2nd',
    name: 'Accounting 2nd Paper',
    mainSubject: 'Accounting',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/accounting2nd',
      markedBooks: 'https://your-books-url.com/accounting2nd',
      chapterClasses: 'https://your-classes-url.com/accounting2nd',
      chapterNotes: 'https://your-notes-url.com/accounting2nd',
    },
  },

  management_1st: {
    id: 'management_1st',
    name: 'Management 1st Paper',
    mainSubject: 'Management',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/management1st',
      markedBooks: 'https://your-books-url.com/management1st',
      chapterClasses: 'https://your-classes-url.com/management1st',
      chapterNotes: 'https://your-notes-url.com/management1st',
    },
  },

  management_2nd: {
    id: 'management_2nd',
    name: 'Management 2nd Paper',
    mainSubject: 'Management',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/management2nd',
      markedBooks: 'https://your-books-url.com/management2nd',
      chapterClasses: 'https://your-classes-url.com/management2nd',
      chapterNotes: 'https://your-notes-url.com/management2nd',
    },
  },

  finance_banking_1st: {
    id: 'finance_banking_1st',
    name: 'Finance 1st Paper',
    mainSubject: 'Finance',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/finance1st',
      markedBooks: 'https://your-books-url.com/finance1st',
      chapterClasses: 'https://your-classes-url.com/finance1st',
      chapterNotes: 'https://your-notes-url.com/finance1st',
    },
  },

  finance_banking_2nd: {
    id: 'finance_banking_2nd',
    name: 'Finance 2nd Paper',
    mainSubject: 'Finance',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/finance2nd',
      markedBooks: 'https://your-books-url.com/finance2nd',
      chapterClasses: 'https://your-classes-url.com/finance2nd',
      chapterNotes: 'https://your-notes-url.com/finance2nd',
    },
  },

  marketing_1st: {
    id: 'marketing_1st',
    name: 'Marketing 1st Paper',
    mainSubject: 'Marketing',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/marketing1st',
      markedBooks: 'https://your-books-url.com/marketing1st',
      chapterClasses: 'https://your-classes-url.com/marketing1st',
      chapterNotes: 'https://your-notes-url.com/marketing1st',
    },
  },

  marketing_2nd: {
    id: 'marketing_2nd',
    name: 'Marketing 2nd Paper',
    mainSubject: 'Marketing',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/marketing2nd',
      markedBooks: 'https://your-books-url.com/marketing2nd',
      chapterClasses: 'https://your-classes-url.com/marketing2nd',
      chapterNotes: 'https://your-notes-url.com/marketing2nd',
    },
  },

  // Additional subjects continue with the same pattern...
  geography_1st: {
    id: 'geography_1st',
    name: 'Geography 1st Paper',
    mainSubject: 'Geography',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/geography1st',
      markedBooks: 'https://your-books-url.com/geography1st',
      chapterClasses: 'https://your-classes-url.com/geography1st',
      chapterNotes: 'https://your-notes-url.com/geography1st',
    },
  },

  geography_2nd: {
    id: 'geography_2nd',
    name: 'Geography 2nd Paper',
    mainSubject: 'Geography',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/geography2nd',
      markedBooks: 'https://your-books-url.com/geography2nd',
      chapterClasses: 'https://your-classes-url.com/geography2nd',
      chapterNotes: 'https://your-notes-url.com/geography2nd',
    },
  },

  history_1st: {
    id: 'history_1st',
    name: 'History 1st Paper',
    mainSubject: 'History',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/history1st',
      markedBooks: 'https://your-books-url.com/history1st',
      chapterClasses: 'https://your-classes-url.com/history1st',
      chapterNotes: 'https://your-notes-url.com/history1st',
    },
  },

  history_2nd: {
    id: 'history_2nd',
    name: 'History 2nd Paper',
    mainSubject: 'History',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/history2nd',
      markedBooks: 'https://your-books-url.com/history2nd',
      chapterClasses: 'https://your-classes-url.com/history2nd',
      chapterNotes: 'https://your-notes-url.com/history2nd',
    },
  },

  // Continue with all remaining subjects...
  islamic_history_1st: {
    id: 'islamic_history_1st',
    name: 'Islamic History 1st Paper',
    mainSubject: 'Islamic History',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/islamichistory1st',
      markedBooks: 'https://your-books-url.com/islamichistory1st',
      chapterClasses: 'https://your-classes-url.com/islamichistory1st',
      chapterNotes: 'https://your-notes-url.com/islamichistory1st',
    },
  },

  islamic_history_2nd: {
    id: 'islamic_history_2nd',
    name: 'Islamic History 2nd Paper',
    mainSubject: 'Islamic History',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/islamichistory2nd',
      markedBooks: 'https://your-books-url.com/islamichistory2nd',
      chapterClasses: 'https://your-classes-url.com/islamichistory2nd',
      chapterNotes: 'https://your-notes-url.com/islamichistory2nd',
    },
  },

  islamic_studies_1st: {
    id: 'islamic_studies_1st',
    name: 'Islamic Studies 1st Paper',
    mainSubject: 'Islamic Studies',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/islamicstudies1st',
      markedBooks: 'https://your-books-url.com/islamicstudies1st',
      chapterClasses: 'https://your-classes-url.com/islamicstudies1st',
      chapterNotes: 'https://your-notes-url.com/islamicstudies1st',
    },
  },

  islamic_studies_2nd: {
    id: 'islamic_studies_2nd',
    name: 'Islamic Studies 2nd Paper',
    mainSubject: 'Islamic Studies',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/islamicstudies2nd',
      markedBooks: 'https://your-books-url.com/islamicstudies2nd',
      chapterClasses: 'https://your-classes-url.com/islamicstudies2nd',
      chapterNotes: 'https://your-notes-url.com/islamicstudies2nd',
    },
  },

  // Add any additional subjects following the same pattern...
  psychology_1st: {
    id: 'psychology_1st',
    name: 'Psychology 1st Paper',
    mainSubject: 'Psychology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/psychology1st',
      markedBooks: 'https://your-books-url.com/psychology1st',
      chapterClasses: 'https://your-classes-url.com/psychology1st',
      chapterNotes: 'https://your-notes-url.com/psychology1st',
    },
  },

  psychology_2nd: {
    id: 'psychology_2nd',
    name: 'Psychology 2nd Paper',
    mainSubject: 'Psychology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/psychology2nd',
      markedBooks: 'https://your-books-url.com/psychology2nd',
      chapterClasses: 'https://your-classes-url.com/psychology2nd',
      chapterNotes: 'https://your-notes-url.com/psychology2nd',
    },
  },

  // Additional subjects for complete coverage
  civics_1st: {
    id: 'civics_1st',
    name: 'Civics 1st Paper',
    mainSubject: 'Civics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/civics1st',
      markedBooks: 'https://your-books-url.com/civics1st',
      chapterClasses: 'https://your-classes-url.com/civics1st',
      chapterNotes: 'https://your-notes-url.com/civics1st',
    },
  },

  civics_2nd: {
    id: 'civics_2nd',
    name: 'Civics 2nd Paper',
    mainSubject: 'Civics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/civics2nd',
      markedBooks: 'https://your-books-url.com/civics2nd',
      chapterClasses: 'https://your-classes-url.com/civics2nd',
      chapterNotes: 'https://your-notes-url.com/civics2nd',
    },
  },

  logic_1st: {
    id: 'logic_1st',
    name: 'Logic 1st Paper',
    mainSubject: 'Logic',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/logic1st',
      markedBooks: 'https://your-books-url.com/logic1st',
      chapterClasses: 'https://your-classes-url.com/logic1st',
      chapterNotes: 'https://your-notes-url.com/logic1st',
    },
  },

  logic_2nd: {
    id: 'logic_2nd',
    name: 'Logic 2nd Paper',
    mainSubject: 'Logic',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/logic2nd',
      markedBooks: 'https://your-books-url.com/logic2nd',
      chapterClasses: 'https://your-classes-url.com/logic2nd',
      chapterNotes: 'https://your-notes-url.com/logic2nd',
    },
  },

  social_work_1st: {
    id: 'social_work_1st',
    name: 'Social Work 1st Paper',
    mainSubject: 'Social Work',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/socialwork1st',
      markedBooks: 'https://your-books-url.com/socialwork1st',
      chapterClasses: 'https://your-classes-url.com/socialwork1st',
      chapterNotes: 'https://your-notes-url.com/socialwork1st',
    },
  },

  social_work_2nd: {
    id: 'social_work_2nd',
    name: 'Social Work 2nd Paper',
    mainSubject: 'Social Work',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/socialwork2nd',
      markedBooks: 'https://your-books-url.com/socialwork2nd',
      chapterClasses: 'https://your-classes-url.com/socialwork2nd',
      chapterNotes: 'https://your-notes-url.com/socialwork2nd',
    },
  },

  sociology_1st: {
    id: 'sociology_1st',
    name: 'Sociology 1st Paper',
    mainSubject: 'Sociology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/sociology1st',
      markedBooks: 'https://your-books-url.com/sociology1st',
      chapterClasses: 'https://your-classes-url.com/sociology1st',
      chapterNotes: 'https://your-notes-url.com/sociology1st',
    },
  },

  sociology_2nd: {
    id: 'sociology_2nd',
    name: 'Sociology 2nd Paper',
    mainSubject: 'Sociology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/sociology2nd',
      markedBooks: 'https://your-books-url.com/sociology2nd',
      chapterClasses: 'https://your-classes-url.com/sociology2nd',
      chapterNotes: 'https://your-notes-url.com/sociology2nd',
    },
  },

  agriculture_1st: {
    id: 'agriculture_1st',
    name: 'Agriculture 1st Paper',
    mainSubject: 'Agriculture',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/agriculture1st',
      markedBooks: 'https://your-books-url.com/agriculture1st',
      chapterClasses: 'https://your-classes-url.com/agriculture1st',
      chapterNotes: 'https://your-notes-url.com/agriculture1st',
    },
  },

  agriculture_2nd: {
    id: 'agriculture_2nd',
    name: 'Agriculture 2nd Paper',
    mainSubject: 'Agriculture',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/agriculture2nd',
      markedBooks: 'https://your-books-url.com/agriculture2nd',
      chapterClasses: 'https://your-classes-url.com/agriculture2nd',
      chapterNotes: 'https://your-notes-url.com/agriculture2nd',
    },
  },

  agricultural_education_1st: {
    id: 'agricultural_education_1st',
    name: 'Agricultural Education 1st Paper',
    mainSubject: 'Agricultural Education',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/agriculturaleducation1st',
      markedBooks: 'https://your-books-url.com/agriculturaleducation1st',
      chapterClasses: 'https://your-classes-url.com/agriculturaleducation1st',
      chapterNotes: 'https://your-notes-url.com/agriculturaleducation1st',
    },
  },

  agricultural_education_2nd: {
    id: 'agricultural_education_2nd',
    name: 'Agricultural Education 2nd Paper',
    mainSubject: 'Agricultural Education',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://your-syllabus-url.com/agriculturaleducation2nd',
      markedBooks: 'https://your-books-url.com/agriculturaleducation2nd',
      chapterClasses: 'https://your-classes-url.com/agriculturaleducation2nd',
      chapterNotes: 'https://your-notes-url.com/agriculturaleducation2nd',
    },
  },
};
