package com.malm.spring.jwt.mongodb.repository;

import com.malm.spring.jwt.mongodb.models.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends MongoRepository<Order, String> {
List<Order> findByUsername(String username);
}
