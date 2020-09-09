package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Horror;
import com.example.springboottestdb.repositories.HorrorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class HorrorServiceImpl implements HorrorService{

	@Autowired
	private HorrorRepository horrorRepository;

	@Override
	public Iterable<Horror> listUsers() {
		return horrorRepository.findAll();
	}

	@Override
	public Horror createHorror(Horror horror) {
		return horrorRepository.save(horror);
	}

	@Override
	public Horror checkHorrorBook(String bookName, String authorName) {
		return horrorRepository.checkHorrorBook(bookName, authorName);
	}

	@Override
	public Long getHorrorBookID(String bookName, String authorName) {
		return horrorRepository.checkHorrorBook(bookName, authorName).getHorrorId();
	}

	@Override
	public HttpStatus deleteHorrorBook(Long HorrorID) {
		horrorRepository.deleteById(HorrorID);
		return HttpStatus.OK;
	}
}
