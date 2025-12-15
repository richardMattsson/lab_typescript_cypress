--
-- PostgreSQL database dump
--

\restrict dm9Qg1Muelp9DxhAOrCvGEyuliZH4aKcwqgdLRHbYDR935RqRADkUDXtGZqQsnY

-- Dumped from database version 17.7 (Debian 17.7-3.pgdg12+1)
-- Dumped by pg_dump version 17.7 (Ubuntu 17.7-3.pgdg24.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: trygghetskollen_db_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO trygghetskollen_db_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    address text NOT NULL,
    cart jsonb NOT NULL,
    delivery text NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.orders OWNER TO trygghetskollen_db_user;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    category text,
    description text,
    price integer NOT NULL,
    image text,
    quantity integer DEFAULT 1
);


ALTER TABLE public.products OWNER TO trygghetskollen_db_user;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: quotes; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.quotes (
    id integer NOT NULL,
    name text NOT NULL,
    quote text NOT NULL
);


ALTER TABLE public.quotes OWNER TO trygghetskollen_db_user;

--
-- Name: quotes_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.quotes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quotes_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: quotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.quotes_id_seq OWNED BY public.quotes.id;


--
-- Name: reportedlinks; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.reportedlinks (
    id integer NOT NULL,
    link text NOT NULL,
    report_count integer DEFAULT 1,
    last_reported timestamp without time zone DEFAULT now(),
    freetext text,
    user_id integer
);


ALTER TABLE public.reportedlinks OWNER TO trygghetskollen_db_user;

--
-- Name: reportedlinks_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.reportedlinks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reportedlinks_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: reportedlinks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.reportedlinks_id_seq OWNED BY public.reportedlinks.id;


--
-- Name: reportedphonenumbers; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.reportedphonenumbers (
    id integer NOT NULL,
    phone_number text NOT NULL,
    report_count integer DEFAULT 1,
    freetext text,
    user_id integer
);


ALTER TABLE public.reportedphonenumbers OWNER TO trygghetskollen_db_user;

--
-- Name: reportedphonenumbers_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.reportedphonenumbers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reportedphonenumbers_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: reportedphonenumbers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.reportedphonenumbers_id_seq OWNED BY public.reportedphonenumbers.id;


--
-- Name: testquestion; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.testquestion (
    id integer NOT NULL,
    question text NOT NULL
);


ALTER TABLE public.testquestion OWNER TO trygghetskollen_db_user;

--
-- Name: testquestion_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.testquestion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.testquestion_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: testquestion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.testquestion_id_seq OWNED BY public.testquestion.id;


--
-- Name: testquestionphone; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.testquestionphone (
    id integer NOT NULL,
    question text NOT NULL
);


ALTER TABLE public.testquestionphone OWNER TO trygghetskollen_db_user;

--
-- Name: testquestionphone_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.testquestionphone_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.testquestionphone_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: testquestionphone_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.testquestionphone_id_seq OWNED BY public.testquestionphone.id;


--
-- Name: testresults; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.testresults (
    id integer NOT NULL,
    user_id integer,
    suspect_details text,
    result integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.testresults OWNER TO trygghetskollen_db_user;

--
-- Name: testresults_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.testresults_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.testresults_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: testresults_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.testresults_id_seq OWNED BY public.testresults.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO trygghetskollen_db_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: wallposts; Type: TABLE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE TABLE public.wallposts (
    id integer NOT NULL,
    report_count integer DEFAULT 1,
    phone_number text NOT NULL,
    free_text text NOT NULL,
    severity text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.wallposts OWNER TO trygghetskollen_db_user;

--
-- Name: wallposts_id_seq; Type: SEQUENCE; Schema: public; Owner: trygghetskollen_db_user
--

CREATE SEQUENCE public.wallposts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.wallposts_id_seq OWNER TO trygghetskollen_db_user;

--
-- Name: wallposts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: trygghetskollen_db_user
--

ALTER SEQUENCE public.wallposts_id_seq OWNED BY public.wallposts.id;


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: quotes id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.quotes ALTER COLUMN id SET DEFAULT nextval('public.quotes_id_seq'::regclass);


--
-- Name: reportedlinks id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedlinks ALTER COLUMN id SET DEFAULT nextval('public.reportedlinks_id_seq'::regclass);


--
-- Name: reportedphonenumbers id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedphonenumbers ALTER COLUMN id SET DEFAULT nextval('public.reportedphonenumbers_id_seq'::regclass);


--
-- Name: testquestion id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testquestion ALTER COLUMN id SET DEFAULT nextval('public.testquestion_id_seq'::regclass);


--
-- Name: testquestionphone id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testquestionphone ALTER COLUMN id SET DEFAULT nextval('public.testquestionphone_id_seq'::regclass);


--
-- Name: testresults id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testresults ALTER COLUMN id SET DEFAULT nextval('public.testresults_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: wallposts id; Type: DEFAULT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.wallposts ALTER COLUMN id SET DEFAULT nextval('public.wallposts_id_seq'::regclass);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.orders (id, address, cart, delivery, name, price, created_at) FROM stdin;
1	aa	[{"name": "Fralla Sesam", "price": 9, "quantity": 1}]	2025-12-20	aa	9	2025-12-15 13:10:44.484135
2	Some address	[{"name": "Fralla Naturell", "price": 8, "quantity": 1}]	2025-12-31	Richard	8	2025-12-15 14:18:52.889158
3	Some address	[{"name": "Fralla Naturell", "price": 8, "quantity": 1}]	2025-12-31	Richard	8	2025-12-15 14:28:52.355759
4	Some address	[{"name": "Fralla Naturell", "price": 8, "quantity": 1}]	2025-12-31	Richard	8	2025-12-15 14:38:35.469224
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.products (id, name, category, description, price, image, quantity) FROM stdin;
1	Fralla Naturell	frallor	Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.	8	/images/fralla-naturell.jpg	1
2	Fralla Sesam	frallor	Mjuk fralla toppad med sesamfrön. Mild smak och krispig yta.	9	/images/fralla-naturell.jpg	1
3	Baguette Klassisk	baguetter	Fransk baguette med spröd skorpa och mjukt inre. Perfekt som tillbehör eller smörgås.	18	/images/fralla-naturell.jpg	1
4	Fralla Fullkorn	frallor	Näringsrik fullkornsfralla med mjuk insida och rustik smak. Gott val till frukost eller mellanmål.	10	/images/fralla-fullkorn.jpg	1
5	Ostfralla	frallor	Nygräddad fralla toppad med smält ost som ger en krispig och smakrik yta.	12	/images/fralla-ost.jpg	1
6	Baguette Rustik	baguetter	Rustik baguette med kraftigare smak och extra krispig skorpa. Passar utmärkt till soppor och grytor.	20	/images/baguette-rustik.jpg	1
\.


--
-- Data for Name: quotes; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.quotes (id, name, quote) FROM stdin;
1	Albert Einstein	Life is like riding a bicycle. To keep your balance, you must keep moving.
2	Oscar Wilde	Be yourself; everyone else is already taken.
14	Peter	Hej
15	Ronny	gagaga
18	test	test
19	test3	test3
\.


--
-- Data for Name: reportedlinks; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.reportedlinks (id, link, report_count, last_reported, freetext, user_id) FROM stdin;
1	www.scam.com	1	2025-11-16 20:52:06.264553	internetbedrägeri	\N
\.


--
-- Data for Name: reportedphonenumbers; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.reportedphonenumbers (id, phone_number, report_count, freetext, user_id) FROM stdin;
1	077-8137813	1	Använde kivra	\N
\.


--
-- Data for Name: testquestion; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.testquestion (id, question) FROM stdin;
1	Innehöll meddelandet en länk som du uppmanades att klicka på?
2	Bad meddelandet dig att logga in, lämna personuppgifter eller uppge kortinformation?
3	Kom meddelandet oväntat eller från någon du inte känner?
4	Stod det att något brådskande skulle hända om du inte agerade direkt (t.ex. att ditt konto skulle spärras eller ett paket skulle gå förlorat)?
5	Verkade avsändarens nummer eller e-postadress konstig (t.ex. felstavad, ovanlig domän eller ett vanligt mobilnummer istället för en officiell kontakt)?
\.


--
-- Data for Name: testquestionphone; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.testquestionphone (id, question) FROM stdin;
1	Presenterade sig personen som någon från en bank, myndighet eller ett företag utan att du själv kontaktat dem först?
2	Bad personen dig att lämna personliga uppgifter, kortnummer, BankID eller annan känslig information under samtalet?
3	Lät personen stressad, hotfull eller försökte skapa panik för att få dig att agera snabbt (t.ex. "någon försöker ta dina pengar just nu!")?
4	Sa personen att du behövde ladda ner en app, logga in på din bank eller dela en kod för att lösa ett problem?
5	Verkade numret misstänkt t.ex. dolt, ovanligt långt eller liknade ett svenskt nummer men inte exakt (ex. +46701 i stället för 0701)?
\.


--
-- Data for Name: testresults; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.testresults (id, user_id, suspect_details, result, created_at) FROM stdin;
1	1	077-8137813	13	2025-11-16 20:52:06.264553
3	1	\N	10	2025-11-18 23:19:32.564518
4	1	\N	10	2025-11-18 23:19:48.983533
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.users (id, username, password, created_at) FROM stdin;
1	Jane Doe	password	2025-11-16 20:52:06.264553
2	Adam Pålsson	1234	2025-11-16 20:52:06.264553
3	Hugo Larsson	secret	2025-11-16 20:52:06.264553
\.


--
-- Data for Name: wallposts; Type: TABLE DATA; Schema: public; Owner: trygghetskollen_db_user
--

COPY public.wallposts (id, report_count, phone_number, free_text, severity, created_at) FROM stdin;
1	1	077-8137813	Svara inte på detta numret!!!	red	2025-11-16 20:52:06.264553
2	1	071-121212	Ringer hela tiden	yellow	2025-11-16 20:52:06.264553
3	1	08-121212	Påstår sig komma från Kivra	red	2025-11-16 20:52:06.264553
4	1	08-121212	Påstår sig komma från Kivra nr2	orange	2025-11-16 20:52:06.264553
\.


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.orders_id_seq', 4, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.products_id_seq', 6, true);


--
-- Name: quotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.quotes_id_seq', 22, true);


--
-- Name: reportedlinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.reportedlinks_id_seq', 1, true);


--
-- Name: reportedphonenumbers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.reportedphonenumbers_id_seq', 1, true);


--
-- Name: testquestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.testquestion_id_seq', 5, true);


--
-- Name: testquestionphone_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.testquestionphone_id_seq', 5, true);


--
-- Name: testresults_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.testresults_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: wallposts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: trygghetskollen_db_user
--

SELECT pg_catalog.setval('public.wallposts_id_seq', 4, true);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_name_key; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: quotes quotes_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.quotes
    ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);


--
-- Name: reportedlinks reportedlinks_link_key; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedlinks
    ADD CONSTRAINT reportedlinks_link_key UNIQUE (link);


--
-- Name: reportedlinks reportedlinks_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedlinks
    ADD CONSTRAINT reportedlinks_pkey PRIMARY KEY (id);


--
-- Name: reportedphonenumbers reportedphonenumbers_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedphonenumbers
    ADD CONSTRAINT reportedphonenumbers_phone_number_key UNIQUE (phone_number);


--
-- Name: reportedphonenumbers reportedphonenumbers_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedphonenumbers
    ADD CONSTRAINT reportedphonenumbers_pkey PRIMARY KEY (id);


--
-- Name: testquestion testquestion_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testquestion
    ADD CONSTRAINT testquestion_pkey PRIMARY KEY (id);


--
-- Name: testquestionphone testquestionphone_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testquestionphone
    ADD CONSTRAINT testquestionphone_pkey PRIMARY KEY (id);


--
-- Name: testresults testresults_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testresults
    ADD CONSTRAINT testresults_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: wallposts wallposts_pkey; Type: CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.wallposts
    ADD CONSTRAINT wallposts_pkey PRIMARY KEY (id);


--
-- Name: testresults_user_id; Type: INDEX; Schema: public; Owner: trygghetskollen_db_user
--

CREATE INDEX testresults_user_id ON public.testresults USING btree (user_id);


--
-- Name: reportedlinks reportedlinks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedlinks
    ADD CONSTRAINT reportedlinks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: reportedphonenumbers reportedphonenumbers_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.reportedphonenumbers
    ADD CONSTRAINT reportedphonenumbers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: testresults testresults_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: trygghetskollen_db_user
--

ALTER TABLE ONLY public.testresults
    ADD CONSTRAINT testresults_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO trygghetskollen_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO trygghetskollen_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO trygghetskollen_db_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO trygghetskollen_db_user;


--
-- PostgreSQL database dump complete
--

\unrestrict dm9Qg1Muelp9DxhAOrCvGEyuliZH4aKcwqgdLRHbYDR935RqRADkUDXtGZqQsnY

