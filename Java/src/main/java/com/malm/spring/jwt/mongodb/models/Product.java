package com.malm.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Document(collection = "products")
public class Product {

    @Id
    private String id;

    @NotBlank
    @Size(max = 30)
    private String name;

    @NotBlank
    private int price;

    @NotBlank
    @Size(max = 120)
    private String desc;

    private int quantity;
    private int total;

    public Product(){
    }

    public Product(@NotBlank @Size(max = 30) String name, @NotBlank int price, @NotBlank @Size(max = 120) String desc, int quantity, int total) {
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.quantity = quantity;
        this.total = total;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
