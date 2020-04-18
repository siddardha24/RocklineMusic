package com.rocklinemusic.service;
import java.util.*;
import com.rocklinemusic.model.Track;
import com.rocklinemusic.dao.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrackService implements ITrackService{
	 
	@Autowired
	private SongRepository songRepository;
	
	public List<Track> findAll(){
		return (List<Track>) songRepository.findAll();
	}

	@Override
	public List<Track> findTracksMatchingTitle(String  title) {
		
		return songRepository.findTracksMatchingTitle(title);
	}
}
