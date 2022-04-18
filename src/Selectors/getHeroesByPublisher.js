import { heroes } from '../Data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} Is not a valid publisher`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}