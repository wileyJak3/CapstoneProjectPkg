package com.example.springboottestdb.controller;

import com.example.springboottestdb.models.Horror;
import com.example.springboottestdb.service.HorrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/horror")
public class HorrorController {

	@Autowired
	HorrorService horrorService;

	@PostMapping
	public Horror createHorror(@RequestBody Horror horrorParam) {
		return horrorService.createHorror(horrorParam);
	}

	@GetMapping
	public Iterable<Horror> findAll() {
		return horrorService.listUsers();
	}

	@GetMapping("/checkHorrorBook/{bookNameParam}/{authorNameParam}")
	public Horror checkHorrorBook(@PathVariable String bookNameParam,
	                              @PathVariable String authorNameParam) {
		return horrorService.checkHorrorBook(bookNameParam, authorNameParam);
	}

	@GetMapping("/getHorrorBookID/{bookNameParam}/{authorNameParam}")
	public Long getHorrorBookID(@PathVariable String bookNameParam,
	                            @PathVariable String authorNameParam) {
		return horrorService.checkHorrorBook(bookNameParam, authorNameParam).getHorrorId();
	}

	@DeleteMapping("/{horrorID}")
	public HttpStatus deleteHorrorBook(@PathVariable Long horrorID) {
		return horrorService.deleteHorrorBook(horrorID);
	}
}





