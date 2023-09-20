const domain = 'http://localhost:3030';

export const createUser = (login: string, password: string): Promise<any> => fetch(`${domain}/user`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify({login, password})
});
export const isUserExist = (login: string, password: string): Promise<any> => fetch(`${domain}/user/isexist/${login}/${password}`);
export const isUserExistByID = (id: string): Promise<any> => fetch(`${domain}/user/${id}`);

export const getArticles = (): Promise<any> => fetch(`${domain}/article`);
export const createArticle = (title: string, text: string): Promise<any> => fetch(`${domain}/article`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify({title, text})
});