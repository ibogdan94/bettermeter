// @todo will be used for real API
// import client, {API_ROUTES} from 'http-client';
import {SiteI} from '../interfaces';
import {v4} from 'uuid';

const activeSites: Array<SiteI> = [
  {
    id: v4(),
    shortName: 'GL',
    fullName: 'Glyphy',
    rating: 6648,
  },
  {
    id: v4(),
    shortName: 'DS',
    fullName: 'DesignStripe',
    rating: 1374,
  },
  {
    id: v4(),
    shortName: 'DV',
    fullName: 'DesignValley',
    rating: 20748,
  },
  {
    id: v4(),
    shortName: 'DK',
    fullName: 'Neueubel',
    rating: 32884,
  },
  {
    id: v4(),
    shortName: 'DS',
    fullName: 'Last Year',
    rating: 182874,
  },
];

export const getMostActiveSites = (): Promise<Array<SiteI>> => {
  return new Promise<Array<SiteI>>((resolve) =>
    setTimeout(() => {
      return resolve(activeSites);
    }, 500),
  );
};

const mostVisited: Array<SiteI> = [
  {
    id: v4(),
    shortName: 'DK',
    fullName: 'Drawkit',
    rating: 6648,
  },
  {
    id: v4(),
    shortName: '4/10',
    fullName: 'Yesterday',
    rating: 1374,
  },
  {
    id: v4(),
    shortName: '1-7',
    fullName: 'Last Week',
    rating: 20748,
  },
  {
    id: v4(),
    shortName: 'Sep',
    fullName: 'Last Month',
    rating: 32884,
  },
  {
    id: v4(),
    shortName: '2019',
    fullName: 'Last Year',
    rating: 182874,
  },
];

export const getMostVisitedSites = (): Promise<Array<SiteI>> => {
  return new Promise<Array<SiteI>>((resolve) =>
    setTimeout(() => {
      return resolve(mostVisited);
    }, 500),
  );
};
