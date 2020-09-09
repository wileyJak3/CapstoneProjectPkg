package com.example.springboottestdb.models;

import javax.persistence.*;

@Entity
@Table(name = "horrorBooks")

public class Horror {

	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long horrorId;

	@Column(unique = true)
    private String horrorBookName;

	@Column
    private String horrorBookAuthor;

	@Column
	private Double horrorBookPrice;

	private Horror(){}

	public Long getHorrorId() {
		return horrorId;
	}

	public void setHorrorId(Long horrorId) {
		this.horrorId = horrorId;
	}

	public String getHorrorBookName() {
		return horrorBookName;
	}

	public void setHorrorBookName(String horrorBookName) {
		this.horrorBookName = horrorBookName;
	}

	public String getHorrorBookAuthor() {
		return horrorBookAuthor;
	}

	public void setHorrorBookAuthor(String horrorBookAuthor) {
		this.horrorBookAuthor = horrorBookAuthor;
	}

	public Double getHorrorBookPrice() {
		return horrorBookPrice;
	}

	public void setHorrorBookPrice(Double horrorBookPrice) {
		this.horrorBookPrice = horrorBookPrice;
	}
}
