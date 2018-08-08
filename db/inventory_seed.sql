create table inventory(
itemID serial primary key,
imageURL varchar(500),
name varchar(100),
price integer,
stock integer,
cat varchar(50),
type varchar(100)
)