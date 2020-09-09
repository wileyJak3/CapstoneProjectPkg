package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Romance;
import org.springframework.http.HttpStatus;

public interface RomanceService {
	public Iterable<Romance> listUsers();
    public Romance createRomance(Romance romance);
    public Romance checkRomanceBook(String bookName, String authorName);
    public Long getRomanceBookID(String bookName, String authorName);
    public HttpStatus deleteRomanceBook(Long RomanceID);
}

