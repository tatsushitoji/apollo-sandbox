const {
  NODE_ENV,
  REACT_APP_DEV_API_URL,
  REACT_APP_DEV_API_REGION,
  REACT_APP_DEV_API_AUTHTYPE,
  REACT_APP_DEV_API_KEY,
  REACT_APP_PROD_API_URL,
  REACT_APP_PROD_API_REGION,
  REACT_APP_PROD_API_AUTHTYPE,
  REACT_APP_PROD_API_KEY,
} = process.env;

const isProduction = NODE_ENV === 'production';

const nodeEnv = NODE_ENV || '';
const apiUrl = isProduction ? REACT_APP_PROD_API_URL : REACT_APP_DEV_API_URL;
const apiRegion = isProduction
  ? REACT_APP_PROD_API_REGION
  : REACT_APP_DEV_API_REGION;
const apiAuthType = isProduction
  ? REACT_APP_PROD_API_AUTHTYPE
  : REACT_APP_DEV_API_AUTHTYPE;
const apiKey = isProduction ? REACT_APP_PROD_API_KEY : REACT_APP_DEV_API_KEY;

export const appSyncConfig = {
  url: apiUrl || '',
  region: apiRegion || '',
  auth: {
    type: apiAuthType || 'API_KEY',
    apiKey: apiKey || '',
  },
};
