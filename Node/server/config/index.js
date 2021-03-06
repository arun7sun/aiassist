import './lib';

const {
    APP_PORT,
    COSMOS_DB_ENDPOINT,
    COSMOS_DB_KEY,
    COSMOS_DB,
    SQL_DB_SERVER,
    SQL_DB_USER,
    SQL_DB_PASS,
    SQL_DB,
    DEPLOYMENT_TYPE,
    USE_CACHE,
    TOKEN_EXPIRATION,
    TOKEN_SECRET,
    TOKEN_EXPIRATION_TYPE,
    REDIRECT_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    LOG_ENABLED
} = process.env;

export default {
    APP_PORT: APP_PORT || 7070,
    COSMOS_DB: COSMOS_DB || "",
    COSMOS_DB_ENDPOINT: COSMOS_DB_ENDPOINT || "",
    COSMOS_DB_KEY: COSMOS_DB_KEY || "",
    SQL_DB_SERVER: SQL_DB_SERVER || "",
    SQL_DB_USER: SQL_DB_USER || "",
    SQL_DB_PASS: SQL_DB_PASS || "",
    SQL_DB: SQL_DB || "",
    DEPLOYMENT_TYPE:DEPLOYMENT_TYPE || "DEV",
    USE_CACHE:USE_CACHE || false,
    TOKEN_EXPIRATION,
    TOKEN_SECRET,
    TOKEN_EXPIRATION_TYPE,
    REDIRECT_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    LOG_ENABLED
};