export interface ITunesData {
  feed: Feed;
}

interface Label {
  label: string;
  attributes?: Attributes;
}

interface Feed {
  author: Label;
  uri: Label;
  icon: Label;
  id: Label;
  rights: Label;
  title: Label;
  updated: Label;
  entry: Entry[];
}

interface Entry {
  id: Label;
  category: Category;
  "im:artist": Label;
  "im:contentType": ContentType;
  "im:image": Label[];
  "im:itemCount": Label;
  "im:name": Label;
  "im:price": Label;
  "im:releaseDate": Label;
  link: Label;
  rights: Label;
  title: Label;
}

interface Category {
  attributes: Attributes;
}

interface Attributes {
  "im:id": string;
  label?: string;
  scheme?: string;
  term?: string;
  href?: string;
  height?: string;
  amount?: string;
  currency?: string;
}

interface ContentType extends Label {
  "im:contentType": ContentType;
}
