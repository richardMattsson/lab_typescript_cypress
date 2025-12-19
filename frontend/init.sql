DROP TABLE IF EXISTS products CASCADE;

DROP TABLE IF EXISTS orders CASCADE;

DROP TABLE IF EXISTS users CASCADE;

SET
  client_encoding = 'UTF8';

CREATE TABLE
  products (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL,
    category text,
    description text,
    price INTEGER NOT NULL,
    image text,
    quantity INTEGER DEFAULT 1
  );

CREATE TABLE
  users (
    id serial PRIMARY KEY,
    email text UNIQUE NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    created_at TIMESTAMP DEFAULT NOW ()
  );

CREATE TABLE
  orders (
    id serial PRIMARY KEY,
    user_id INTEGER NOT NULL,
    address text NOT NULL,
    cart JSONB NOT NULL,
    delivery text NOT NULL,
    name text NOT NULL,
    price INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW (),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Fralla Naturell',
    'frallor',
    'Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.',
    8,
    '/images/products/fralla-natural.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Fralla Sesam',
    'frallor',
    'Mjuk fralla toppad med sesamfrön. Mild smak och krispig yta.',
    9,
    '/images/products/fralla-sesam.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Baguette Klassisk',
    'baguetter',
    'Fransk baguette med spröd skorpa och mjukt inre. Perfekt som tillbehör eller smörgås.',
    18,
    '/images/products/baguette-classic.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Fralla Fullkorn',
    'frallor',
    'Näringsrik fullkornsfralla med mjuk insida och rustik smak. Gott val till frukost eller mellanmål.',
    10,
    '/images/products/fralla-fullkorn.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Ostfralla',
    'frallor',
    'Nygräddad fralla toppad med smält ost som ger en krispig och smakrik yta.',
    12,
    '/images/products/fralla-ost.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Baguette Rustik',
    'baguetter',
    'Rustik baguette med kraftigare smak och extra krispig skorpa. Passar utmärkt till soppor och grytor.',
    20,
    '/images/products/baguette-rustik.png'
  );

INSERT INTO
  products (name, category, description, price, image)
VALUES
  (
    'Croissant Klassisk',
    'croissanter',
    'Smörig croissant med fluffig insida och gyllene, frasig yta. Perfekt till morgonkaffet.',
    15,
    '/images/products/croissant-classic.jpg'
  );

SHOW client_encoding;