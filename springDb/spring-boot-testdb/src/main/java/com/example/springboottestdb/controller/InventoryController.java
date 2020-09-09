package com.example.springboottestdb.controller;

import com.example.springboottestdb.models.Inventory;
import com.example.springboottestdb.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/inventory")
public class InventoryController {

	@Autowired
	InventoryService inventoryService;

	@GetMapping
	public Iterable<Inventory> findAll() {
		return inventoryService.listUsers();
	}

	@PostMapping
	public Inventory createInventory(@RequestBody Inventory inventoryParam) {
		return inventoryService.createInventory(inventoryParam);
	}

	@GetMapping("/checkInventory/{inventoryNameParam}/{inventoryImgParam}")
	public Inventory checkInventory(@PathVariable String inventoryNameParam,
	                                  @PathVariable String inventoryImgParam)
	                           {
		return inventoryService.checkInventory(inventoryNameParam, inventoryImgParam);
	}
	@GetMapping("/getInventory/{inventoryNameParam}/{inventoryImgParam}")
	public Long getInventoryBookID(@PathVariable String inventoryNameParam,
	                          @PathVariable String inventoryImgParam)
	                           {
		return inventoryService.checkInventory(inventoryNameParam, inventoryImgParam).getInventoryId();
	}

	@DeleteMapping("/{inventoryID}")
	public HttpStatus deleteUser(@PathVariable Long inventoryID) {
		return inventoryService.deleteUser(inventoryID);
	}

//	@DeleteMapping("/{inventoryName}")
//	public HttpStatus deleteUserByName(@PathVariable String inventoryName) {
//		return inventoryService.deleteUserByName(inventoryName);
//	}


}
