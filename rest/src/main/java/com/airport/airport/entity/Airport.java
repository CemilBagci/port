package com.airport.airport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "airport")
public class Airport {

    @Id
    @GeneratedValue
    private Long id;

    @Column (name="name")
    private String name;

    @Column (name="code")
    private String code;

    @JoinColumn(name="city")
    @ManyToOne(fetch = FetchType.EAGER)
    private City city;

    @JoinColumn(name="country")
    @ManyToOne(fetch = FetchType.EAGER)
    private Country country;



}