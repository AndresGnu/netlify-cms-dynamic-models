export namespace MyContext {
  export interface Home {
    info: {
      title: string;
      icon: string;
    };
  }
  export interface Blog {
    blogs: {
      title: string;
      url: string;
      abstract: {
        title: string;
        description: string;
      };
    }[];
  }
}
