package com.example.springboottestdb.controller;


import com.example.springboottestdb.models.Romance;
import com.example.springboottestdb.service.RomanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/romance")
public class RomanceController {

	@Autowired
	RomanceService romanceService;

	@PostMapping
	public Romance createRomance(@RequestBody Romance romanceParam) {
		return romanceService.createRomance(romanceParam);
	}

	@GetMapping
	public Iterable<Romance> findAll() {
		return romanceService.listUsers();
	}

	@GetMapping("/checkRomanceBook/{bookNameParam}/{authorNameParam}")
	public Romance checkRomanceBook(@PathVariable String bookNameParam,
	                                @PathVariable String authorNameParam) {
		return romanceService.checkRomanceBook(bookNameParam, authorNameParam);
	}

	@GetMapping("/getRomanceBookID/{bookNameParam}/{authorNameParam}")
	public Long getRomanceBookID(@PathVariable String bookNameParam,
	                             @PathVariable String authorNameParam) {
		return romanceService.checkRomanceBook(bookNameParam, authorNameParam).getRomanceId();
	}

	@DeleteMapping("/{romanceID}")
	public HttpStatus deleteRomanceBook(@PathVariable Long romanceID) {
		return romanceService.deleteRomanceBook(romanceID);
	}
}
