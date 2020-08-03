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
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWExMXFRUTFRgYGBYXGhgXFxUXGRoYFRoYICgjGB4lGxcXITEiJSorLi4uFx82ODMtNygtLisBCgoKDg0OFQ8PFS0dFR0tLS0tLS0rLS0tLS0rLSstLS0tKy0tLS03LS0tLS0rKzctLTgtLS0rLTc3LS0tNzI3Mf/AABEIAJMBVwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABGEAABAwIDBAgCBwYEBAcAAAABAAIDBBEFEiEGMUFRBxMiMmFxgZGhsRRCUmJyksEjM4KistFEwuHwU2OT0hUWVHODpLP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQEBAQADAQAAAAAAAAAAAAAAEQESMUEh/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFxc8Deg5IuGfkD8v9Viz1Eg0/ZMPDM8n4ZR80Gai0M5xBx/YzUduTopXH3bKPktJWDaBp7LqJzfutkuPQ6+10E5RVqcaxYEh1RRtI0IMcgI8CDYhc24xip/xNH/0pD+qsSrHRV/HjuJgay0LjzMc7fk5ZEe1NaLZo6N/PLPJHfyDo3W90ipwiiLNspB36Nx59VPTSewe9hPssqHbejuBK6SmceE8b4x+e2T+ZSCSIuqmqGSND43tew6hzSHAjwI0K7UBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFxe8AXJAHM6IOS4TTNaLuNgtZW47G0HIc7vDd6nj6KC7ZbZspI+smOeV1+qivYuI4n7LBxPoNUE2xLaKCFhlmkEUYOUX1c93BrGi5cTyaCSoVinSDUPJFLE2nZ/xJhnkPiI2mzfNziebVROOY7PVyGWokL3bmgaNY3fljb9UbvE8bldFPi07O5M8DlmzD2dcKotmrrJptZ6mol8DK6Nv5IcjfcFR+uooHytaIo94BOUEm+puTqdP1UZpdrqhujgyTzGU+7dPgsyj2gb1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',
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
