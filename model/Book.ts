export type BookResponse = {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Book[];
  subjects: Subject[];
};

export type Book = {
  key: string;
  title: string;
  cover_id: number;
  cover_edition_key: string;
  subject: string[];
  author: Author[];
};

export type Author = {
  key: string;
  name: string;
};

export type Subject = {
  key: string;
  name: string;
  count: number;
};

export type BookOrder = {
  customer: string;
  books: Book[];
  schedule_pickup: Date;
};
