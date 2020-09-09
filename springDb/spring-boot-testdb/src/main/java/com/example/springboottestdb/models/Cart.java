package com.example.springboottestdb.models;

import javax.persistence.*;

@Entity
@Table(name = "cart")

public class Cart {

//	private Double cartTotal = 0.0;

	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cartId;

	@Column(unique = false)
	private String cartName;

	@Column
    private String cartOwner;

	@Column
	private Double cartPrice;

	@Column
	private String cartImg ;

//	public Double getCartTotal() {
//		return cartTotal;
//	}

	public Long getCartId() {
		return cartId;
	}

	public String getCartName() {
		return cartName;
	}

	public String getCartOwner() {
		return cartOwner;
	}

	public Double getCartPrice() {
		return cartPrice;
	}

	public String getCartImg() {
		return cartImg;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	public void setCartName(String cartName) {
		this.cartName = cartName;
	}

	public void setCartOwner(String cartOwner) {
		this.cartOwner = cartOwner;
	}

	public void setCartPrice(Double cartPrice) {
		this.cartPrice = cartPrice;
	}

	public void setCartImg(String cartImg) {
		this.cartImg = cartImg;
	}

	//	public void setCartTotal(Double cartTotal) {
//		this.cartTotal = cartTotal;
//	}
}
