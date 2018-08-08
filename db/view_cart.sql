select * from cart
join inventory 
on inventory.itemid = cart.productid
where cart.userid = $1
order by inventory.name;
-- return *
