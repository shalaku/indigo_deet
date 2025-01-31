
import en from './en';
import zh_cn from './zh_cn';
import zh_tw from './zh_tw';
import ja from'./ja'

export interface ILanguageResources {
  [key: string]: string | ILanguageResources;
}

const messages: Record<string, ILanguageResources> = {
  ...en,
  ...zh_cn,
  ...zh_tw,
  ...ja,
};

export default messages;
