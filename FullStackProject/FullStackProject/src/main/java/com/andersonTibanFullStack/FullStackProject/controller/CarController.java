package com.andersonTibanFullStack.FullStackProject.controller;

import com.andersonTibanFullStack.FullStackProject.model.Car;
import com.andersonTibanFullStack.FullStackProject.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//allows for crud operations
@CrossOrigin("http://localhost:3000")
@RequestMapping("/dealership")
public class CarController {
    //reference variable to service
    private final CarService carService;

    @Autowired//inject dependency into class
    public CarController(CarService carService){
        this.carService = carService;
    }

    @GetMapping("/inventory")//get all cars
    public List<Car> getCars(){
        return carService.getAllCars();
    }

    @GetMapping("/inventory/car/{id}")//get car based on id
    public Car getCarById(@PathVariable Long id){
        return carService.getCar(id);
    }

    @GetMapping("/inventory/{carType}/{price}")//get cars based on type and price
    public ResponseEntity<List<Car>> getCarByTypeAndPrice(@PathVariable String carType, @PathVariable int price){
        return carService.getCarByTypeAndPrice(carType, price);
    }

    @GetMapping("inventory/price/{carPrice}")//get cars based on price
    public ResponseEntity<List<Car>> getCarsLessThanPrice(@PathVariable int carPrice){
        return carService.getCarsLessThanPrice(carPrice);
    }

    @PostMapping("/car")//add new car
    public Car addCar(@RequestBody Car newCar){
        return carService.newCar(newCar);
    }

    @PutMapping("/inventory/{id}")//update car using id
    public Car updateCar(@PathVariable Long id, @RequestBody Car updatedCar){
        return carService.updateCar(id, updatedCar);
    }
    @DeleteMapping("/inventory/{id}")//delete car/record using path id
    public String deleteCar(@PathVariable Long id){
        return carService.deleteCar(id);
    }



}
