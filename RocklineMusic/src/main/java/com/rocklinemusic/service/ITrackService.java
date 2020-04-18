package com.rocklinemusic.service;
import com.rocklinemusic.model.Track;
import java.util.*;

public interface ITrackService {

	List<Track> findAll();

	List<Track> findTracksMatchingTitle(String title);
}
