package com.example.springboottestdb.repositories;

import com.example.springboottestdb.models.Horror;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface HorrorRepository extends CrudRepository<Horror,Long> {
	@Query("FROM Horror h WHERE h.horrorBookName = ?1 and h.horrorBookAuthor = ?2")
    public Horror checkHorrorBook (String horrorBookName, String horrorBookAuthor);
}


