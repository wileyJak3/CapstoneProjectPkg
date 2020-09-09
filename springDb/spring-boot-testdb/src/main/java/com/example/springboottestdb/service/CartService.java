package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Cart;
import org.springframework.http.HttpStatus;
import java.util.Optional;

public interface CartService {
	public Iterable<Cart> listUsers();
    public Cart createCart(Cart cart);
    public Cart checkCartItem(String cartName, String cartOwner);
    public Long getCartItemID(String cartName, String cartOwner);
    public HttpStatus deleteCartItem(Long CartID);
    public Cart getCartById(Long ID);
    public Double cartTotal();

}
