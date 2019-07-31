package com.dev.paymentsdemo.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAll() {
        return categoryService.getAll();
    }

    @GetMapping("/categories/{id}")
    public Category getById(@PathVariable Integer id) {
        return categoryService.getById(id);
    }

    @PostMapping("/categories")
    public Category createCategory(@Valid @RequestBody Category category) {
        return categoryService.add(category);
    }

    @PutMapping("/categories/{id}")
    public void updateCategory(@PathVariable("id") Integer id, @RequestBody Category category) {
        categoryService.update(category, id);
    }

    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable("id") Integer id) {
        categoryService.delete(id);
    }
}
