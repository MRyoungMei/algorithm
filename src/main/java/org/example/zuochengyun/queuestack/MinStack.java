package org.example.zuochengyun.queuestack;

import java.util.Objects;
import java.util.Stack;


public class MinStack {
    private Stack<Integer> valueStack;
    private Stack<Integer> minStack;

    public MinStack(Stack<Integer> valueStack,Stack<Integer> minStack){
        this.valueStack=new Stack<>();
        this.minStack=new Stack<>();
    }
    private Integer push(Integer value) {
        if(minStack.empty())
            minStack.push(value);
        else if(minStack.peek()>value){
            minStack.push(value);
        }
        return valueStack.push(value);
    }

    private Integer pop(){
        if(valueStack.isEmpty())
            throw new RuntimeException("Stack is empty!");
        Integer value = valueStack.pop();
        Integer minValue = minStack.peek();
        if(Objects.equals(value, minValue)){
            minStack.pop();
        }
        return value;
    }

    private Integer getMin(){
        if(minStack.isEmpty())
            throw new RuntimeException("Stack is empty");
        return minStack.peek();
    }
}
