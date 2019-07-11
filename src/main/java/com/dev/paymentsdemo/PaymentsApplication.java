package com.dev.paymentsdemo;

import com.dev.paymentsdemo.category.Category;
import com.dev.paymentsdemo.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootApplication
public class PaymentsApplication implements CommandLineRunner {

    @Autowired
    CategoryRepository categoryRepository;

    public static void main(String[] args) {
        SpringApplication.run(PaymentsApplication.class, args);

    }

    @Transactional
    @Override
    public void run(String... args) {
        List<Category> categories = categoryRepository.findAll();
        categories.forEach(category -> System.out.println(category.getName()));
    }
}
