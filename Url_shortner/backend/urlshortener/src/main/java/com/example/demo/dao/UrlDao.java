package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.Repository.UrlRepository;
import com.example.demo.dto.Url;

@Repository
public class UrlDao {

	@Autowired
	private UrlRepository repository;
	
	public Url saveUrl(Url url) {
		return repository.save(url);
	}
	
	public Optional<Url> findById(int id) {
		return repository.findById(id);
	}
	
	public List<Url> findByUserId(int user_id) {
		return repository.findByUserId(user_id);
	}
	
	public List<Url> findAll(){
		return repository.findAll();
	}
}
