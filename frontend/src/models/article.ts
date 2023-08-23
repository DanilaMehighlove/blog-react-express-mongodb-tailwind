export interface IArticle {
  ID: number;
  title: string;
  text: string;
}

export class Article {
  private _ID: number;
  get ID() { return this._ID; }

  private _title: string;
  get title() { return this._title; }
  
  private _text: string;
  get text() { return this._text; }

  constructor(obj: IArticle) {
    this._ID = obj.ID;
    this._title = obj.title;
    this._text = obj.text;
  }
}