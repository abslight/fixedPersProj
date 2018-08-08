create table users(
    userid serial primary key,
    name text,
    email varchar(100),
    authid varchar(500),
    picture text,
    password varchar(200)
)