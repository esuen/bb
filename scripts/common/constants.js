const REDIS_KEY_PREFIX = 'sq-badminton-bot_';

module.exports = {
  REDIS_KEY_PREFIX,
  PLAYERS_REDIS_KEY: `${REDIS_KEY_PREFIX}PLAYERS`,
  COURTS_REDIS_KEY: `${REDIS_KEY_PREFIX}COURTS`,
  SESSION_REDIS_KEY: `${REDIS_KEY_PREFIX}SESSION`,
};