GRANT CREATE ON DATABASE sandbox TO developer;

CREATE TABLE todo
(
    id serial PRIMARY KEY,
    value text NOT NULL,
    created_date timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
