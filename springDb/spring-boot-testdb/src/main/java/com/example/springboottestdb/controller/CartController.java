package com.example.springboottestdb.controller;

import com.example.springboottestdb.models.Cart;
import com.example.springboottestdb.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/cart")

public class CartController {

	@Autowired
	CartService cartService;

	@PostMapping
	public Cart createCart(@RequestBody Cart cartParam) {
		return cartService.createCart(cartParam);

	}
	@GetMapping
	public Iterable<Cart> findAll() {
		return cartService.listUsers();
	}

	@GetMapping("/checkCartItem/{cartNameParam}/{cartOwnerParam}")
	public Cart checkCartBook(@PathVariable String cartNameParam,
	                                @PathVariable String cartOwnerParam) {
		return cartService.checkCartItem(cartNameParam, cartOwnerParam);
	}

	@GetMapping("/getCartItemID/{cartNameParam}/{cartOwnerParam}")
	public Long getCartBookID(@PathVariable String cartNameParam,
	                             @PathVariable String cartOwnerParam) {
		return cartService.checkCartItem(cartNameParam, cartOwnerParam).getCartId();
	}
	@GetMapping("/getCartByID/{cartIDParam}")
	public Cart getCartByID(@PathVariable Long cartIDParam) {
		return cartService.getCartById(cartIDParam);
	}

	@GetMapping("/cartTotal")
	public Double cartTotal() {
		return cartService.cartTotal();
	}

	@DeleteMapping("/{cartID}")
	public HttpStatus deleteRomanceBook(@PathVariable Long cartID) {
		return cartService.deleteCartItem(cartID);
	}
}
