import config from '../../../config';
let redis = config.tokenStoreType === 'redis' ? require('redis') : null;
let RedisClient = null;

if (config.tokenStoreType === 'redis') {
  RedisClient = redis.createClient({
    host: config.db.fullHost || `redis://:${config.db.redisPassword}@${config.db.redisHost}:${config.db.redisPort}`,
    db: config.db.redisDb,
  });
}

module.exports = RedisClient;
