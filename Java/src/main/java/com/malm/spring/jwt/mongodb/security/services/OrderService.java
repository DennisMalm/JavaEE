package com.malm.spring.jwt.mongodb.security.services;

import com.malm.spring.jwt.mongodb.models.Order;
import com.malm.spring.jwt.mongodb.models.Product;
import com.malm.spring.jwt.mongodb.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public List<Order> getOrderByUser(String username) {
        List<Order> order = orderRepository.findByUsername(username);

        return order;
    }

}
