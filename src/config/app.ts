type AppConfigType = {
  name: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
};

export const appConfig: AppConfigType = {
  name: import.meta.env.VITE_APP_NAME ?? "Work Focus",
  github: {
    title: "Pomodoro Timer",
    url: "https://github.com/thefirsthero/pomodoro-timer",
  },
  author: {
    name: "thefirsthero",
    url: "https://github.com/thefirsthero/",
  },
};

export const baseUrl = import.meta.env.VITE_BASE_URL ?? "";
