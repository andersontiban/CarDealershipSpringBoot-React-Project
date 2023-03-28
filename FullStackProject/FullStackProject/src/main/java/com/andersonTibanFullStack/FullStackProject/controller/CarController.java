package com.andersonTibanFullStack.FullStackProject.controller;

import com.andersonTibanFullStack.FullStackProject.exception.CarNotFoundException;
import com.andersonTibanFullStack.FullStackProject.model.Car;
import com.andersonTibanFullStack.FullStackProject.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//allows for crud operations
@CrossOrigin("http://localhost:3000")
@RequestMapping("/dealership")
public class CarController {

    @Autowired//inject repository
    private CarRepository carRepository;

    @GetMapping("/inventory")//get all cars
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }

    @GetMapping("/inventory/car/{id}")//get car based on id
    Car getCarById(@PathVariable Long id){
        return carRepository.findById(id)
                .orElseThrow(()-> new CarNotFoundException(id));
    }

    @GetMapping("/inventory/{carType}")//get cars based on type
    public ResponseEntity<List<Car>> getCarByType(@PathVariable String carType){
        return new ResponseEntity<List<Car>>(carRepository.findByCarType(carType), HttpStatus.OK);
    }

    @GetMapping("inventory/price/{carPrice}")//get cars based on price
    public ResponseEntity<List<Car>> getCarsLessThanPrice(@PathVariable int carPrice){
        return new ResponseEntity<List<Car>>(carRepository.findByCarPriceLessThanEqual(carPrice), HttpStatus.OK);
    }

    @PostMapping("/car")//add new car
    public Car newCar(@RequestBody Car newCar){
        return carRepository.save(newCar);
    }

    @PutMapping("/inventory/{id}")//update car using id
    public Car updateCar(@PathVariable Long id, @RequestBody Car updatedCar){
        updatedCar.setId(id);
        return carRepository.save(updatedCar);
    }
    @DeleteMapping("/inventory/{id}")//delete car/record using path id
    public String deleteCar(@PathVariable Long id){
        carRepository.deleteById(id);
        return"Car has been deleted";
    }



}
