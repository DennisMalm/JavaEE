package com.malm.spring.jwt.mongodb.repository;

import com.malm.spring.jwt.mongodb.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProductRepository extends MongoRepository<Product, String> {
}
