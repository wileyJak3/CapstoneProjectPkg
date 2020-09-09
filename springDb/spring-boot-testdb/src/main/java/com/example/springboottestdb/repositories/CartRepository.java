package com.example.springboottestdb.repositories;

import com.example.springboottestdb.models.Cart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart,Long> {
	@Query("FROM Cart c WHERE c.cartName = ?1 and c.cartOwner = ?2")
    public Cart checkCartItem (String cartName, String cartOwner);
}

