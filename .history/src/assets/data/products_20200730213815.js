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
    name: 'Benz 2018',
    description: 'Show your style with your new car',
    price: 44.99,
    size: 'large',
    type: 'benz',
    img:
      'data:image/jpeg;base64,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',
  },
  {
    id: 9,
    name: 'Benz',
    description: 'Affordable Benz for family',
    price: 28.99,
    size: 'large',
    type: 'benz',
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
      'https://img-ik.cars.co.za/images/2020/3/Porsche-911T/tr:n-news_500x/Porsche-911T-3.jpeg',
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
