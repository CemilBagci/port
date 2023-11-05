package com.airport.airport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "flight")
public class Flight {

    @Id
    @GeneratedValue
    private Long id;

    @JoinColumn(name="originAirport")
    @ManyToOne(fetch = FetchType.EAGER)
    private Airport originAirport;

    @JoinColumn(name="destinationAirport")
    @ManyToOne(fetch = FetchType.EAGER)
    private Airport destinationAirport;

    @Column (name="departureDateTime")
    private Date departureDateTime;

    @Column (name="arrivalDateTime")
    private Date arrivalDateTime;

    @Column (name="flightDuration")
    private Long flightDuration;


}