package com.example.kurly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class KurlyApplication {

	public static void main(String[] args) {
		SpringApplication.run(KurlyApplication.class, args);
	}

}
