package com.dev.paymentsdemo.category;

import com.dev.paymentsdemo.payment.Payment;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "CATEGORIES")
public class Category {

    @Id
    @Column(name = "CATEGORY_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "CATEGORY_NAME")
    private String name;

    @Column(name = "CATEGORY_DESCRIPTION")
    private String description;

    @OneToMany(
            mappedBy = "category",
            cascade = CascadeType.PERSIST,
            orphanRemoval = true
    )
    private List<Payment> payments = new ArrayList<>();

}
