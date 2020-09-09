package com.example.springboottestdb.repositories;

import com.example.springboottestdb.models.Romance;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RomanceRepository extends CrudRepository<Romance,Long> {
	@Query("FROM Romance r WHERE r.romanceBookName = ?1 and r.romanceBookAuthor = ?2")
    public Romance checkRomanceBook (String romanceBookName, String romanceBookAuthor);
}
