package com.example.springboottestdb.models;

import javax.persistence.*;

@Entity
@Table(name = "romanceBooks")

public class Romance {

	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long romanceId;

	@Column(unique = true)
    private String romanceBookName;

	@Column
    private String romanceBookAuthor;

	@Column
	private Double romanceBookPrice;

	public Romance(){}

	public Long getRomanceId() {
		return romanceId;
	}

	public void setRomanceId(Long romanceId) {
		this.romanceId = romanceId;
	}

	public String getRomanceBookName() {
		return romanceBookName;
	}

	public void setRomanceBookName(String romanceBookName) {
		this.romanceBookName = romanceBookName;
	}

	public void setRomanceBookAuthor(String romanceBookAuthor) {
		this.romanceBookAuthor = romanceBookAuthor;
	}

	public String getRomanceBookAuthor() {
		return romanceBookAuthor;
	}

	public void setRomanceBookPrice(Double romanceBookPrice) {
		this.romanceBookPrice = romanceBookPrice;
	}

	public Double getRomanceBookPrice() {
		return romanceBookPrice;
	}
}
