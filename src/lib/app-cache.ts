import NodeCache from 'node-cache';

const ttl = 1000 * 60 * 20;
console.log('Creating app cache', ttl);

const AppCache = {
  _cache: new NodeCache({ stdTTL: ttl }),

  set(slug: string, data: {}): void {
    this._cache.set(slug, data, ttl);
  },

  get<T>(slug: string): T | undefined {
    // console.log('GET K', this._cache);
    return this._cache.get<T>(slug);
  },
}

export default AppCache;
