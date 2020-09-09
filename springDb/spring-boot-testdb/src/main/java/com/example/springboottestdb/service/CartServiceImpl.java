package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Cart;
import com.example.springboottestdb.repositories.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepository;

	@Override
	public Iterable<Cart> listUsers() {
		return cartRepository.findAll();
	}

	@Override
	public Cart createCart(Cart cart) {
//		cart.setCartTotal(cart.getCartTotal() + cart.getCartBookPrice());
		return cartRepository.save(cart);
	}

	@Override
	public Cart checkCartItem(String cartName, String cartOwner) {
		return cartRepository.checkCartItem(cartName, cartOwner);
	}

	@Override
	public Long getCartItemID(String cartName, String cartOwner) {
		return cartRepository.checkCartItem(cartName, cartOwner).getCartId();
	}

	@Override
	public HttpStatus deleteCartItem(Long CartID) {
		cartRepository.deleteById(CartID);
		return HttpStatus.OK;
	}

	@Override
	public Cart getCartById(Long ID) {
		if( cartRepository.findById(ID).isPresent()){
			return cartRepository.findById(ID).get();
		}
		return null;
	}

	@Override
	public Double cartTotal() {
		double total = 0;
		for (Cart cartTemp : listUsers()) {
			total = total + cartTemp.getCartPrice();

		}
		return total;
	}

//	@Override
//	public Double cartTotal() {
//		return null;
//	}
}
