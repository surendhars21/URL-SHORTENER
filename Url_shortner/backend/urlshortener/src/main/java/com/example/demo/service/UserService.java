package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserDao;
import com.example.demo.dto.ResponseStructure;
import com.example.demo.dto.User;

@Service
public class UserService {
 
	@Autowired
	private UserDao userDao;
	
	public ResponseStructure<User> saveUser(User user) {
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setData(userDao.saveUser(user));
		structure.setMessage("User saved successfully.......");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return structure;
	}
	
	public ResponseStructure<User> updateUser(User user){
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=userDao.findById(user.getId());
		if(recUser.isPresent()) {
			User userdb=recUser.get();
			userdb.setEmail(user.getEmail());
			userdb.setName(user.getName());
			userdb.setPassword(user.getPassword());
			userdb.setPhone(user.getPhone());
			userdb.setConpassword(user.getConpassword());
			structure.setData(userDao.saveUser(userdb));
			structure.setMessage("Updated successfully.....");
			structure.setStatuscode(HttpStatus.ACCEPTED.value());
			return structure;
		}
		structure.setMessage("Invalid user id....");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return structure;
	}
	public ResponseStructure<User> findById(int id){
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=userDao.findById(id);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User found .......");
			structure.setStatuscode(HttpStatus.OK.value());
			return structure;
		}
		structure.setMessage("Invalid User id .......");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return structure;
	}
	
	public ResponseStructure<User> verifyPhone(long phone,String password){
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=userDao.verifyPhone(phone, password);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User found");
			structure.setStatuscode(HttpStatus.OK.value());
			return structure;
		}
		structure.setMessage("Invalid phone and password..........");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return structure;
	}
	
	public ResponseStructure<User> verifyEmail(String email,String password){
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=userDao.verifyEmail(email, password);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User found");
			structure.setStatuscode(HttpStatus.OK.value());
			return structure;
		}
		structure.setMessage("Invalid email and password..........");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return structure;
	}
	
	public ResponseStructure<List<User>> findAll(){
		ResponseStructure<List<User>> structure=new ResponseStructure<>();
		structure.setData(userDao.findAll());
		structure.setMessage("List of all Users......");
		structure.setStatuscode(HttpStatus.OK.value());
		return structure;
		
	}
}




