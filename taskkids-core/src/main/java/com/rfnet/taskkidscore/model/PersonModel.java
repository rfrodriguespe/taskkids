package com.rfnet.taskkidscore.model;

public class PersonModel {
    private String name;
    private int age;

    public PersonModel(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public PersonModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
