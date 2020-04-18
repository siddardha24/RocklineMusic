package com.rocklinemusic.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rocklinemusic.model.*;

@Repository
public interface SongRepository extends CrudRepository<Track, Long> {
	
	@Query("SELECT p FROM Track p WHERE LOWER(p.trackName) LIKE LOWER(concat('%',:title, '%'))")
	List<Track> findTracksMatchingTitle(@Param("title") String title);
	
}