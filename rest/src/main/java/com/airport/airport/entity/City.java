package com.airport.airport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue
    private Long id;

    @Column (name="name")
    private String name;

    @Column (name="code")
    private String code;

    @JoinColumn(name="country")
    @ManyToOne(fetch = FetchType.EAGER)
    private Country country;


}