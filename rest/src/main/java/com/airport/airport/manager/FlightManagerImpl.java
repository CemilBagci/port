package com.airport.airport.manager;

import com.airport.airport.entity.Flight;
import com.airport.airport.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightManagerImpl implements FlightManager {

    @Autowired
    private FlightRepository flightRepository;



    @Override
    public List<Flight> getAll() {
        return flightRepository.findAll();
    }

    @Override
    public Flight findById(Long flightId) {
        Flight flight = flightRepository.findById(flightId).orElseThrow(
                ()-> new ResourceNotFoundException("no flight user with id " + flightId));
        return flight ;
    }
}
