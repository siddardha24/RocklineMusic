package com.rocklinemusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.*;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

import com.rocklinemusic.dao.*;
import com.rocklinemusic.model.*;
@SpringBootApplication(scanBasePackages={"com.rocklinemusic"}
)
@EnableJpaRepositories("com.rocklinemusic.dao")
public class RocklineMusicApplication implements CommandLineRunner {

	
	@Autowired
	DataSource dataSource;
	public static void main(String[] args) {
		SpringApplication.run(RocklineMusicApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}

}