package com.airport.airport.manager;

import com.airport.airport.entity.Flight;

import java.util.List;

public interface FlightManager {

    List<Flight> getAll();

    Flight findById(Long flightId);
}
