export type navigation = {
  name: string;
  href: string;
};

export type themeType = {
  name: string;
  themeType: string;
  icon: any;
};

export type ListItems = {
  name: string;
  href: string;
  icon: any;
};

export type AcordinType = {
  title: string;
  body: string;
};

export type ScriptType = {
  data: {
    title: string;
    body: string;
    link: string;
    image: string;
    scriptLang: string;
    author: string;
    uid: string;
  };

  id: string;
};

export type Langtype = {
  value: string;
};

export type contactsType = {
  name: string;
  link: string;
  icon: any;
};
