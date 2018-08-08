select * from inventory
where inventory.type = 'cleats' and (inventory.cat = 'men' or inventory.cat='uni') 