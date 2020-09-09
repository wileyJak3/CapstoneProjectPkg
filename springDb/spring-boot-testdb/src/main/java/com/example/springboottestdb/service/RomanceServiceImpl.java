package com.example.springboottestdb.service;

import com.example.springboottestdb.models.Romance;
import com.example.springboottestdb.repositories.RomanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class RomanceServiceImpl implements RomanceService {

	@Autowired
	private RomanceRepository romanceRepository;

	@Override
	public Iterable<Romance> listUsers() {
		return romanceRepository.findAll();
	}

	@Override
	public Romance createRomance(Romance romance) {
		return romanceRepository.save(romance);
	}

	@Override
	public Romance checkRomanceBook(String bookName, String authorName) {
		return romanceRepository.checkRomanceBook(bookName,authorName);
	}

	@Override
	public Long getRomanceBookID(String bookName, String authorName) {
		return romanceRepository.checkRomanceBook(bookName,authorName).getRomanceId();
	}

	@Override
	public HttpStatus deleteRomanceBook(Long RomanceID) {
		romanceRepository.deleteById(RomanceID);
		return HttpStatus.OK;
	}
}
