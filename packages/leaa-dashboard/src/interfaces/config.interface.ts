export interface IDotEnv {
  DEMO_MODE: boolean;
  DEBUG_MODE: boolean;
  SITE_NAME: string;
  PRIMARY_ACCOUNT_TYPE: 'email' | 'phone';
  LOGO_BLACK_FILENAME: string;
  LOGO_WHITE_FILENAME: string;
  SERVER_PROTOCOL: 'http' | 'https';
  SERVER_PORT: number;
  SERVER_HOST: string;
  API_URL: string;
  API_VERSION: string;
  ANALYTICS_CODE: string;
}

export interface ISetting {
  name: string;
  slug: string;
  value: string;
}

export interface IBuild {
  MODE: string;
  VERSION: string;
  BUILDTIME: string;
  GIT_VERSION: string;
  VERSION_SLUG: string;
}
