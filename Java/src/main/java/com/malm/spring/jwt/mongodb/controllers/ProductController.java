package com.malm.spring.jwt.mongodb.controllers;

import com.malm.spring.jwt.mongodb.models.Product;
import com.malm.spring.jwt.mongodb.repository.ProductRepository;
import com.malm.spring.jwt.mongodb.security.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/retrieve")
    public ResponseEntity<?> getProducts(){
        List<Product> products = productService.getAllProducts();
        System.out.println(productRepository.findAll());

        return ResponseEntity.ok(products);


    }

}
