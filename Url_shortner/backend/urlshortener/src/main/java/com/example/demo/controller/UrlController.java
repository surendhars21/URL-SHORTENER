package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ResponseStructure;
import com.example.demo.dto.Url;
import com.example.demo.service.UrlService;

@RestController
@RequestMapping("url")
@CrossOrigin(origins="*")
public class UrlController {

	@Autowired
	private UrlService service;
	
	@PostMapping("/{user_id}")
	public ResponseStructure<Url> saveUrl(@RequestBody Url url,@PathVariable(name="user_id") int user_id){
		return service.saveUrl(url,user_id);
	}
	
	@PutMapping
	public ResponseStructure<Url> updateUrl(@RequestBody Url url){
		return service.updateUrl(url);
	}
	@GetMapping("/{id}")
	public ResponseStructure<Url> findById(@PathVariable(name="id") int id){
		return service.findById(id);
	}
	
	@GetMapping("by-user/{user_id}")
	public ResponseStructure<List<Url>> findByUserBy(@PathVariable(name="user_id") int user_id){
		return service.findByUserId(user_id);
	}
	
	@GetMapping
	public ResponseStructure<List<Url>> findAll(){
		return service.findAll();
	}
}
