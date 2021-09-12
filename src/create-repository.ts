import hash from 'object-hash';

interface RepositoryOptions<TArgs extends unknown[] = []> {
    toCacheKey?: (...args: Partial<TArgs>) => string;
    logger?: (message: string) => void;
}

export function createRepository<TReturn, TArgs extends unknown[] = []>(
    fetcher: (...args: TArgs) => Promise<TReturn>,
    options?: RepositoryOptions<TArgs>
) {
    let cache: Record<string, TReturn> = {};
    return {
        read: (...args: TArgs): TReturn => {
            const generateCacheKey = options?.toCacheKey ?? hash;
            const cacheKey = args ? generateCacheKey(args) : 'default';
            const cacheMissed = cache[cacheKey] === undefined;

            if (options?.logger) options.logger(`Requested ${cacheKey}, cache: ${ cacheMissed ? 'miss' : 'hit' }, loading from ${ cacheMissed ? 'network' : 'cache' }`)

            if (cacheMissed) throw fetcher(...args).then(value => (cache[cacheKey] = value));
            else return cache[cacheKey];
        }
    }
}
