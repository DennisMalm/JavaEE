package com.malm.spring.jwt.mongodb;

import com.malm.spring.jwt.mongodb.security.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ApplicationRunner implements CommandLineRunner {

    @Autowired
    ProductService productService;

    @Override
    public void run(String... args) throws Exception {
       /* System.out.println("CommandLineRunner Starting");
        productService.saveProduct(new Product("Hamburger", 30, "Yummy!"));
        productService.saveProduct(new Product("Shirt", 50, "Looks good."));
        productService.saveProduct(new Product("Cat", 90, "Cuddly."));
        productService.saveProduct(new Product("Car", 4000, "Goes fast."));
        productService.saveProduct(new Product("Somthing", 99, "Could be anything!"));
*/
    }
}
