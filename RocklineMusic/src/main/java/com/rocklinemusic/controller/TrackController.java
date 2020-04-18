package com.rocklinemusic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

import javax.websocket.server.PathParam;

import com.rocklinemusic.model.*;
import com.rocklinemusic.service.*;

@RestController
public class TrackController {

	@Autowired
	private ITrackService iTrackService;
	
	@GetMapping("/showSongs/{title}")
	public List<Track> findSongs(@PathVariable("title") String  title) {
		System.out.println("Title: " + title);
		List<Track> songs = (List<Track>) iTrackService.findTracksMatchingTitle(title);
		return songs;
	}
}
