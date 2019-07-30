package com.dev.paymentsdemo.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    public Category getById(Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public Category getByName(String name) {
        return categoryRepository.findByName(name).orElse(null);
    }

    public void update(Category category, Integer updatingId) {
        Category updatingCategory = categoryRepository.findById(updatingId).
                orElseThrow(() -> new RuntimeException("Can not find category in dataBase"));
        updatingCategory.setName(category.getName());
        updatingCategory.setDescription(category.getDescription());
    }

    public Category add(Category category) {
        return categoryRepository.save(category);
    }

    public void delete(Integer id) {
        categoryRepository.delete(categoryRepository.findById(id).
                orElseThrow(
                        () -> new RuntimeException("Can not delete category in Database")
                ));
    }
}
