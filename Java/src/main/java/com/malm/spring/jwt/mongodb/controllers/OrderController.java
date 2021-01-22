package com.malm.spring.jwt.mongodb.controllers;

import com.malm.spring.jwt.mongodb.models.Order;
import com.malm.spring.jwt.mongodb.repository.OrderRepository;
import com.malm.spring.jwt.mongodb.security.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderService orderService;

    @PostMapping("/insert")
    public void addOrder(@RequestBody Order order){

        Order _order = new Order(order.getUsername(), order.getTotalPrice(), order.getItems());
        System.out.println(_order);

        orderRepository.save(_order);

    }

    @GetMapping("/retrieve/{username}")
    public ResponseEntity<?> getOrders(@PathVariable String username) {
        List<Order> orders = orderService.getOrderByUser(username);
        System.out.println(orders);
        return ResponseEntity.ok(orders);
    }

}
