package com.example.billetter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@ComponentScan(basePackageClasses = HomeController.class)
public class BilletterApplication {

    public static void main(String[] args) {
        SpringApplication.run(BilletterApplication.class, args);
    }

}
