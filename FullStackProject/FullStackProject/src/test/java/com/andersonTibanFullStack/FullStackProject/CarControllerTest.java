package com.andersonTibanFullStack.FullStackProject;

import com.andersonTibanFullStack.FullStackProject.controller.CarController;
import com.andersonTibanFullStack.FullStackProject.model.Car;
import com.andersonTibanFullStack.FullStackProject.service.CarService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;
import org.testcontainers.shaded.org.hamcrest.Matchers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@WebMvcTest(CarController.class)
public class CarControllerTest {

    @MockBean
    private CarService carService;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldCreateMockMvc(){
        assertNotNull(mockMvc);
    }

    //test get mapping of all cars
    @Test
    void shouldReturnListOfCars() throws Exception {
        when(carService.getAllCars())
                .thenReturn(List.of(new Car(1L, "toyota" , "www.image.com", "sport", 10000)));

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/dealership/inventory"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                //.andExpect(MockMvcResultMatchers.jsonPath("$.size()", Matchers.is(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(1L))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carName").value("toyota"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].imageUrl").value("www.image.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carType").value("sport"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carPrice").value(10000));
    }
    //Test to get one individual car
    @Test
    void shouldReturnOneCar() throws Exception{
        when(carService.getCar(1L))
                .thenReturn(new Car(1L, "honda", "www.testGet.com", "sport", 10000));

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/dealership/inventory/car/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1L))
                .andExpect(MockMvcResultMatchers.jsonPath("$.carName").value("honda"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.imageUrl").value("www.testGet.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.carType").value("sport"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.carPrice").value("10000"));
    }

    //Test to get car based on type and price
    @Test
    void shouldReturnCarsBasedOnTypeandPrice() throws Exception{
        List<Car> cars = List.of(new Car(2L, "hyundai", "www.com", "suv", 12000));
        ResponseEntity<List<Car>> expectedResponse = new ResponseEntity<>(cars, HttpStatus.OK);

        when(carService.getCarByTypeAndPrice("suv", 12000))
                .thenReturn(expectedResponse);

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/dealership/inventory/suv/12000"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.[0].id").value(2L))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carName").value("hyundai"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].imageUrl").value("www.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carType").value("suv"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].carPrice").value(12000));
    }

    @Test
    void shouldCreateNewCar() throws Exception {

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/dealership/car")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"carName\" : \"testCar\", \"imageUrl\" : \"www.test.com\" , \"carType\" : \"sport\", \"carPrice\" : \"220\"}")
                )
                .andExpect(MockMvcResultMatchers.status().isCreated());

        verify(carService).newCar(any(Car.class));

    }
}
