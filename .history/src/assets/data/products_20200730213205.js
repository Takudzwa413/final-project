const products = [
  {
    id: 1,
    name: 'Toyota Corolla',
    description: 'Diseal Toyota corolla 2019',
    price: 260000.99,
    size: 'small',
    type: 'toyota',
    img:
      'https://images.hgmsites.net/med/2020-toyota-corolla-le-cvt-se-angular-front-exterior-view_100703250_m.jpg',
  },
  {
    id: 2,
    name: 'Toyota Hilux',
    description: 'Toyota Hilux 2018',
    price: 74024.99,
    size: 'medium',
    type: 'toyota',
    img:
      'https://live-media.toy-backend.co.za/images/ranges/0101020114.front.png',
  },
  {
    id: 3,
    name: 'Toyota Rush',
    description: 'Be whereever you want with the Rush 2020',
    price: 445674.99,
    size: 'small',
    type: 'toyota',
    img:
      'https://live-media.toy-backend.co.za/images/ranges/0101010250.front.png',
  },
  {
    id: 4,
    name: 'Benz GLC',
    description: 'Perfect Comfort Car',
    price: 99345.0,
    size: 'small',
    type: 'benz',
    img:
      'https://www.mercedes-benz.co.za/passengercars/mercedes-benz-cars/models/glc/suv-x253/_jcr_content/image.MQ6.2.2x.20191009083631.png',
  },
  {
    id: 5,
    name: 'Benz GLC coupe',
    description: 'Good for family',
    price: 23044.99,
    size: 'medium',
    type: 'benz',
    img:
      'https://www.nationwidevehiclecontracts.co.uk/m/4/mercedes-benz-glc-coup-sport-1.jpg',
  },
  {
    id: 6,
    name: 'Benz AMG 2020',
    description: 'sport car',
    price: 19.99,
    size: 'small',
    type: 'benz',
    img:
      'https://www.benzelbusch.com/sites/default/files/vehicles/2019/Mercedes-Benz/GLC/cc_2019MBS890001_03_640_040.jpg',
  },
  {
    id: 7,
    name: 'Benz C-class',
    description: 'Luxuary car to go',
    price: 96.0,
    size: 'small',
    type: 'benz',
    img:
      'https://www.benzelbusch.com/sites/default/files/vehicles/2019/Mercedes-Benz/GLC/2019MBS890001_640_01.jpg',
  },
  {
    id: 8,
    name: 'Porshe 2018',
    description: 'Show your style with your new car',
    price: 44.99,
    size: 'large',
    type: 'porshe',
    img:
      'data:image/jpeg;base64,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',
  },
  {
    id: 9,
    name: 'Long Grey Dress Women',
    description: 'Grey Dress for Women',
    price: 28.99,
    size: 'large',
    type: 'dress',
    img:
      'https://d1c3e1089465e74eb489-edfa7ad07a8b3a01545458d1d7772ca8.ssl.cf1.rackcdn.com/WDC0J8JB9KF563943/280ce50142d23eddebb265c937f1f92d.jpg',
  },
  {
    id: 10,
    name: 'Porshe',
    description: 'Beautiful Flowy Top',
    price: 128.99,
    size: 'small',
    type: 'top',
    img:
      'https://files.porsche.com/filestore/image/multimedia/none/970-g2-4hy-modelimage-sideshot/model/75bba5f4-6044-11e9-80c4-005056bbdc38/porsche-model.png',
  },
  {
    id: 11,
    name: 'White Top',
    description: 'Beautiful Lace Top',
    price: 58.99,
    size: 'medium',
    type: 'top',
    img:
      'https://www.swap.com/i/blouse-white-house-black-market-regular-4-polyester-spring-summer-fall-winter-good-condition-hand-w/7580084185-1-500.jpg',
  },
  {
    id: 12,
    name: 'Stripe Top',
    description: 'Blue and White Top',
    price: 28.99,
    size: 'small',
    type: 'top',
    img:
      'https://www.swap.com/i/shirt-white-house-black-market-regular-xs-polyester-rayon-spandex-spring-summer-fall-winter-bluenav/7641945285-1-500.jpg',
  },
  {
    id: 13,
    name: 'Floral Skirt',
    description: 'Perfect for autumn',
    price: 68.99,
    size: 'large',
    type: 'bottom',
    img:
      'https://www.swap.com/i/floral-skirt-ann-taylor-loft-10-24-polyester-spring-summer-black-good-condition-grown-ups-m-8-10-sh/5168104803-1-500.jpg',
  },
  {
    id: 14,
    name: 'Blue Floral Skirt',
    description: 'Very luxurious',
    price: 198.99,
    size: 'small',
    type: 'bottom',
    img:
      'https://www.swap.com/i/skirt-ted-baker-regular-2-25-silk-spring-summer-brown-good-condition-dry-clean-only-grown-ups/7809536429-1-500.jpg',
  },
  {
    id: 15,
    name: 'Red Sexy Skirt',
    description: 'Very playful skirt',
    price: 298.99,
    size: 'small',
    type: 'bottom',
    img:
      'https://www.swap.com/i/skirt-cecilia-prado-regular-s-26-acrylic-cotton-polyester-viscose-spring-summer-maroon-like-new-han/7813858474-1-500.jpg',
  },
];

export default products;
