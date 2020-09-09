package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Inventory;
import com.example.springboottestdb.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService {

	@Autowired
	private InventoryRepository inventoryRepository;


	@Override
	public Iterable<Inventory> listUsers() {
		return inventoryRepository.findAll();

	}

	@Override
	public Inventory createInventory(Inventory inventory) {
		return inventoryRepository.save(inventory);
	}

	@Override
	public Inventory checkInventory(String inventoryName, String inventoryImg) {
		return inventoryRepository.checkInventory(inventoryName,inventoryImg);
	}

	@Override
	public Long getInventoryID(String inventoryName, String inventoryImg) {
		return inventoryRepository.checkInventory(inventoryName,inventoryImg).getInventoryId();
	}


	@Override
	public HttpStatus deleteUser(Long inventoryID) {
		inventoryRepository.deleteById(inventoryID);
		return HttpStatus.OK;
	}
//
//	@Override
//	public HttpStatus deleteUserByName(inventoryID ,String inventoryName) {
//		inventoryRepository.findAllById()
//		return  HttpStatus.OK;
//	}
}
