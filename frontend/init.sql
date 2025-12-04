DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS orders;

CREATE TABLE
  products (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL,
    category text,
    description text,
    price INTEGER NOT NULL,
    image text
  );

CREATE TABLE
  orders (
    id serial PRIMARY KEY,
    address text NOT NULL,
    cart JSONB NOT NULL,
    delivery text NOT NULL,
    name text NOT NULL,
    price INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW ()
  );

INSERT INTO
  orders (address, cart, delivery, name, price)
VALUES
  (
    'Majorna, Göteborg',
    '[
     {
       "name": "Hamburgare", 
       "price": 129
     },
     {
       "name": "Pommes", 
       "price": 39
     }
   ]'::jsonb,
    '2025-12-31',
    'Some name',
    100
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Fralla Naturell',
    'frallor',
    'Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.',
    8,
    '/images/fralla-naturell.jpg'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Fralla Sesam',
    'frallor',
    'Mjuk fralla toppad med sesamfrön. Mild smak och krispig yta.',
    9,
    '/images/fralla-naturell.jpg'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Baguette Klassisk',
    'baguetter',
    'Fransk baguette med spröd skorpa och mjukt inre. Perfekt som tillbehör eller smörgås.',
    18,
    '/images/fralla-naturell.jpg'
  );