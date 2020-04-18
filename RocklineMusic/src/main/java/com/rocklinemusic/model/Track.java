package com.rocklinemusic.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tracks")
public class Track {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int trackId;
	private int trackNumber;
	private String trackName;
	private int albumId;
	private String trackUrl;
	private String image;
	private String albumName;
	private int progress;
	private String playing;
	
	public int getProgress() {
		return progress;
	}

	public void setProgress(int progress) {
		this.progress = progress;
	}

	public String getPlaying() {
		return playing;
	}

	public void setPlaying(String playing) {
		this.playing = playing;
	}

	public String getAlbumName() {
		return albumName;
	}

	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Track() {
		super();
	}

	public int getTrackId() {
		return trackId;
	}

	public void setTrackId(int trackId) {
		this.trackId = trackId;
	}

	public int getTrackNumber() {
		return trackNumber;
	}

	public void setTrackNumber(int trackNumber) {
		this.trackNumber = trackNumber;
	}

	public String getTrackName() {
		return trackName;
	}

	public void setTrackName(String trackName) {
		this.trackName = trackName;
	}

	public int getAlbumId() {
		return albumId;
	}

	public void setAlbumId(int albumId) {
		this.albumId = albumId;
	}

	public String getTrackUrl() {
		return trackUrl;
	}

	public void setTrackUrl(String trackUrl) {
		this.trackUrl = trackUrl;
	}

	@Override
	public String toString() {
		return "Track [trackId=" + trackId + ", trackNumber=" + trackNumber + ", trackName=" + trackName + ", albumId="
				+ albumId + ", trackUrl=" + trackUrl + ", image=" + image + ", albumName=" + albumName + ", progress="
				+ progress + ", playing=" + playing + "]";
	}
	

}
