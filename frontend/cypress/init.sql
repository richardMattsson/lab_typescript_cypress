DROP TABLE IF EXISTS products;

CREATE TABLE
  products (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL,
    category text,
    description text,
    price INTEGER NOT NULL,
    image text
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