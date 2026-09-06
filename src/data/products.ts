export type Product = {
  id: string
  name: string
  price: number
  category: 'dress' | 'top' | 'skirt'
  blurb: string
  accent: string
  dressType: 'balloon' | 'tea' | 'sun' | 'ruffle' | 'overall' | 'wrap'
}

export const products: Product[] = [
  {
    id: 'cloud-puff',
    name: 'Cloud Puff Dress',
    price: 68,
    category: 'dress',
    blurb: 'A floaty pink balloon skirt with soft petal sleeves.',
    accent: '#FF8FB8',
    dressType: 'balloon',
  },
  {
    id: 'cherry-tea',
    name: 'Cherry Tea Dress',
    price: 72,
    category: 'dress',
    blurb: 'Classic tea length with candy-button details.',
    accent: '#FF5C9A',
    dressType: 'tea',
  },
  {
    id: 'sunshine-swirl',
    name: 'Sunshine Swirl',
    price: 54,
    category: 'dress',
    blurb: 'A breezy sundress for park walks and picnic laughs.',
    accent: '#FFB4D0',
    dressType: 'sun',
  },
  {
    id: 'ruffle-ribbon',
    name: 'Ruffle Ribbon',
    price: 76,
    category: 'dress',
    blurb: 'Stacked ruffles and a big bow that steals the scene.',
    accent: '#FF7AAD',
    dressType: 'ruffle',
  },
  {
    id: 'berry-overall',
    name: 'Berry Overall Skirt',
    price: 48,
    category: 'skirt',
    blurb: 'Playful overall silhouette with cartoon berry pockets.',
    accent: '#F45C8A',
    dressType: 'overall',
  },
  {
    id: 'petal-wrap',
    name: 'Petal Wrap Top',
    price: 42,
    category: 'top',
    blurb: 'A soft wrap blouse that pairs with every pink bottom.',
    accent: '#FF9EC4',
    dressType: 'wrap',
  },
]
