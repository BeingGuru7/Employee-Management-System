package com.guru.ems.service;

import com.guru.ems.model.Employee;
import com.guru.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Employee saveEmployee(Employee emp) {
        return repo.save(emp);
    }

    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }


    public Employee updateEmployee(Long id, Employee emp) {
        Employee existing = repo.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(emp.getName());
            existing.setEmail(emp.getEmail());
            existing.setDepartment(emp.getDepartment());
            return repo.save(existing);
        }
        return null;
    }
}