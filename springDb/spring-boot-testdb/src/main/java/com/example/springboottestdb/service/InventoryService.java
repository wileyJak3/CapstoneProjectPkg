package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Inventory;
import org.springframework.http.HttpStatus;

public interface InventoryService {
	public Iterable<Inventory> listUsers();
    public Inventory createInventory(Inventory inventory);
    public Inventory checkInventory(String inventoryName, String inventoryImg);
    public Long getInventoryID(String inventoryName, String inventoryImg);
    public HttpStatus deleteUser(Long inventoryID);
//    public HttpStatus deleteUserByName(String inventoryName);
//    public HttpStatus getInventoryByName(Long inventoryID,String inventoryName);
}
