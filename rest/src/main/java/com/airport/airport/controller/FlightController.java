package com.airport.airport.controller;

import com.airport.airport.dto.FlightFilterRequestModel;
import com.airport.airport.manager.FlightManager;
import com.airport.airport.entity.Flight;
import com.airport.airport.manager.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flight")
public class FlightController {

    @Autowired
    private FlightManager fligthManager;


    @GetMapping
    public List<Flight> getAll(){
        return fligthManager.getAll();
    }


    @PostMapping("/search")
    public List<Flight> getFlightsByPort(@RequestBody FlightFilterRequestModel filter){
        return fligthManager.getAll();
    }
}
