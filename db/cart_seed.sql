create table cart (
id serial primary key,
productID int,
userID int,
quantity int,
foreign key (productID) references inventory(itemID),
foreign key (userID) references users(userid)
)