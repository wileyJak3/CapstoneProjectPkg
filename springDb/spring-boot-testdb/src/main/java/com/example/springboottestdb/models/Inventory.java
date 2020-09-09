package com.example.springboottestdb.models;

import javax.persistence.*;
@Entity
@Table(name = "inventory")

public class Inventory {

	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long inventoryId;

	@Column(unique = true)
    private String inventoryName;

	@Column
    private String inventoryImg;

	@Column
	private Double inventoryPrice;

	public Inventory(){}

	public Inventory(String inventoryName, String inventoryImg, double inventoryPrice ){
		this.inventoryName = inventoryName;
		this.inventoryImg = inventoryImg;
		this.inventoryPrice = inventoryPrice;
	}

	public Long getInventoryId() {
		return inventoryId;
	}

	public String getInventoryName() {
		return inventoryName;
	}

	public String getInventoryImg() {
		return inventoryImg;
	}

	public Double getInventoryPrice() {
		return inventoryPrice;
	}

	public void setInventoryId(Long inventoryId) {
		this.inventoryId = inventoryId;
	}

	public void setInventoryName(String inventoryName) {
		this.inventoryName = inventoryName;
	}

	public void setInventoryImg(String inventoryImg) {
		this.inventoryImg = inventoryImg;
	}

	public void setInventoryPrice(Double inventoryPrice) {
		this.inventoryPrice = inventoryPrice;
	}
}
