export interface ApiEnvironment {
  name: string;
  APP_ID: string;
  PORT: string;
  LOG_LEVEL: string;
  REQUEST_LIMIT: string;
  SESSION_SECRET: string;
  SWAGGER_API_SPEC: string;
  KEYSTORE: string;
  USERCERT: string;
  ORGCERT: string;
  NETWORKPROFILE: string;
  CHANNEL: string;
  CHAINCODE: string;
  COUCHDBVIEW: string;
  COUCHDB_PORT: string;
  COUCHDB_HOST: string;
  COUCHDB_PROTOCOL: string;
}
