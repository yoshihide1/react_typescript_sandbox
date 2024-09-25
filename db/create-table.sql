GRANT CREATE ON DATABASE sandbox TO developer;

CREATE TABLE todo
(
    id serial PRIMARY KEY,
    task text NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);
