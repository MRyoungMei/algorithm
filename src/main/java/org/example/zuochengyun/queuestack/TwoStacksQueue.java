package org.example.zuochengyun.queuestack;

import java.util.Stack;

public class TwoStacksQueue {
    private final Stack<Integer> pushStack;
    private final Stack<Integer> popStack;

    public TwoStacksQueue(Stack<Integer> pushStack,Stack<Integer> popStack ){
        this.popStack=popStack;
        this.pushStack=pushStack;
    }

    public void add(Integer value){
        pushStack.push(value);
//        pushToPop();
    }
    public Integer poll(){
        if(pushStack.isEmpty()&&popStack.isEmpty())
            throw new RuntimeException("Empty!");
        pushToPop();
        return popStack.pop();
    }

    public Integer peek(){
        if(pushStack.isEmpty()&&popStack.isEmpty())
            throw new RuntimeException("Empty!");
        pushToPop();
        return popStack.peek();
    }
    private void pushToPop(){
        if(popStack.isEmpty()){
            while (!pushStack.isEmpty())
                popStack.push(pushStack.pop());
        }
    }
}
