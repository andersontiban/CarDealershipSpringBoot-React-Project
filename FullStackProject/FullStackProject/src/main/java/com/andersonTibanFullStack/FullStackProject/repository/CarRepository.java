package com.andersonTibanFullStack.FullStackProject.repository;

import com.andersonTibanFullStack.FullStackProject.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>{
    List<Car> findByCarType(String carType);

    List<Car> findByCarPriceLessThanEqual(int carPrice);

    List<Car> findByCarTypeLikeAndCarPriceLessThanEqual(String carType, int carPrice);

}
