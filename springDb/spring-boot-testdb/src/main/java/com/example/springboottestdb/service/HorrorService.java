package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Horror;
import org.springframework.http.HttpStatus;

public interface HorrorService {
	public Iterable<Horror> listUsers();
    public Horror createHorror(Horror horror);
    public Horror checkHorrorBook(String bookName, String authorName);
    public Long getHorrorBookID(String bookName, String authorName);
    public HttpStatus deleteHorrorBook(Long HorrorID);
}
