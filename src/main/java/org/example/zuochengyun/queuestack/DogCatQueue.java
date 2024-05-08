package org.example.zuochengyun.queuestack;

import java.util.LinkedList;
import java.util.Queue;

public class DogCatQueue {
    private final Queue<PetEnterQueue> dogQ;
    private final Queue<PetEnterQueue> catQ;
    private long count;

    public DogCatQueue() {
        this.dogQ = new LinkedList<>();
        this.catQ = new LinkedList<>();
    }

    public void add(Pet pet) {
        if (pet.getType().equals("dog")) {
            dogQ.add(new PetEnterQueue(pet, count++));
        } else if (pet.getType().equals("cat")) {
            catQ.add(new PetEnterQueue(pet, count++));
        } else {
            throw new RuntimeException("err, not dog or cat");
        }
    }
    public Pet pollAll(){
        if(!dogQ.isEmpty()&&!catQ.isEmpty()){
            PetEnterQueue peekDog = dogQ.peek();
            PetEnterQueue peekCat = catQ.peek();
            if (peekDog.getCount()<peekCat.getCount())
                return dogQ.poll().getPet();
            else
                return catQ.poll().getPet();
        } else if (!dogQ.isEmpty()) {
            return dogQ.poll().getPet();
        } else if(!catQ.isEmpty())
            return catQ.remove().getPet();
        else
            throw new RuntimeException("empty queue");
    }

    public Dog pollDog(){
        if(!dogQ.isEmpty())
            return (Dog) dogQ.poll().getPet();
        else
            throw new RuntimeException("empty queue");
    }
    public Cat pollCat(){
        if(!dogQ.isEmpty())
            return (Cat) catQ.poll().getPet();
        else
            throw new RuntimeException("empty queue");
    }
}

class PetEnterQueue {
    private Pet pet;
    private long count;

    public PetEnterQueue(Pet pet, long count) {
        this.pet = pet;
        this.count = count;
    }

    public Pet getPet() {
        return pet;
    }

    public long getCount() {
        return count;
    }
}

class Pet {
    private String type;

    public Pet(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}

class Dog extends Pet {
    public Dog() {
        super("dog");
    }
}

class Cat extends Pet {
    public Cat() {
        super("cat");
    }
}
