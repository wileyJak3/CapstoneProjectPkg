package com.example.springboottestdb.repositories;

import com.example.springboottestdb.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface InventoryRepository extends CrudRepository <Inventory,Long> {
	@Query("FROM Inventory i WHERE i.inventoryName = ?1 and i.inventoryImg = ?2")
    public Inventory checkInventory (String fantasyBookName, String fantasyBookAuthor);
}
