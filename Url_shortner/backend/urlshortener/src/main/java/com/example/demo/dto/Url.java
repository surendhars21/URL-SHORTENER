package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Url {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(nullable=false)
	private String oldur;
	@Column(nullable=false)
	private String newurl;
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name="user_id")
	private User user;
	@Column(nullable=false)
	private int count;
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOldur() {
		return oldur;
	}
	public void setOldur(String oldur) {
		this.oldur = oldur;
	}
	public String getNewurl() {
		return newurl;
	}
	public void setNewurl(String newurl) {
		this.newurl = newurl;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
