import beer from '../assets/images/beer-single.svg';
import beerParty from '../assets/images/beer-party.svg';

export default [
  {
    title: 'Casual Drinker',
    imgURL: `${beer}`,
    price: '$19.99',
    specs: [
      'Up to 2 X 6 - pack of beers from a selection of 10 beers',
      'Pick up from your nearest LCBO store',
    ],
  },
  {
    title: 'Celebratray',
    imgURL: `${beerParty}`,
    price: '$39.99',
    specs: [
      'Up to 6 x 6 - pack of beers per from a selection of 100+ beers',
      'Shipped right to your doorstep',
    ],
  },
];
