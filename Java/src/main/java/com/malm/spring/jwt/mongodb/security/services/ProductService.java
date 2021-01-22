package com.malm.spring.jwt.mongodb.security.services;

import com.malm.spring.jwt.mongodb.models.Product;
import com.malm.spring.jwt.mongodb.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
