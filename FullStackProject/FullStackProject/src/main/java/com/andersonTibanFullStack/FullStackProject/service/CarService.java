package com.andersonTibanFullStack.FullStackProject.service;

import com.andersonTibanFullStack.FullStackProject.exception.CarNotFoundException;
import com.andersonTibanFullStack.FullStackProject.model.Car;
import com.andersonTibanFullStack.FullStackProject.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
//This class performs the business logic for all crud operations,
//will be used by the CarController class
public class CarService {
    //reference variable to repo
    private final CarRepository carRepository;

    @Autowired//inject dependency
    public CarService(CarRepository carRepository){
        this.carRepository = carRepository;
    }

    //get mapping, get all cars
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }

    //get mapping, get car based on id
    public Car getCar(Long id){
        return carRepository.findById(id)
                .orElseThrow(()-> new CarNotFoundException(id));
    }

    //get mapping, get car based on car category and car price
    public ResponseEntity<List<Car>> getCarByTypeAndPrice(String carType, int price){
        return new ResponseEntity<List<Car>>(carRepository.findByCarTypeLikeAndCarPriceLessThanEqual(carType, price), HttpStatus.OK);
    }

    //get mapping, get car based on price
    public ResponseEntity<List<Car>> getCarsLessThanPrice(int carPrice){
        return new ResponseEntity<List<Car>>(carRepository.findByCarPriceLessThanEqual(carPrice), HttpStatus.OK);
    }

    //post mapping, add new car
    public Car newCar(Car newCar){
        return carRepository.save(newCar);
    }

    //put mapping, update existing car
    public Car updateCar(Long id, Car updatedCar){
        updatedCar.setId(id);
        return carRepository.save(updatedCar);
    }

    //delete mapping, delete car
    public String deleteCar(Long id){
        carRepository.deleteById(id);
        return"Car has been deleted";
    }
}
