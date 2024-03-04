package com.example.demo.dto;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
@Column(nullable=false)
private String name;
@Column(nullable=false,unique=true)
private long phone;
@Column(nullable=false,unique=true)
private String email;
@Column(nullable=false)
private String password;
@Column(nullable=false)
private String conpassword;
@OneToMany(mappedBy="user")
private List<Url> url;

public List<Url> getUrl() {
	return url;
}
public void setUrl(List<Url> url) {
	this.url = url;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public long getPhone() {
	return phone;
}
public void setPhone(long phone) {
	this.phone = phone;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getConpassword() {
	return conpassword;
}
public void setConpassword(String conpassword) {
	this.conpassword = conpassword;
}
}
