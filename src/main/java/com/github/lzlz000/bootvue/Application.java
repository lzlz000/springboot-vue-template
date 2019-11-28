package com.github.lzlz000.bootvue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @GetMapping("hello")
    public HelloMessage hello(){
        return new HelloMessage("hello world0 😄",1);
    }

    @PostMapping("hello")
    public HelloMessage hello1(){
        return new HelloMessage("hello world1 😄",1);
    }
}
