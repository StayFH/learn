package com.my.dj.rxjava;

public abstract class Subscriber<T> implements Observer<T> {
    public void onStart() {
      System.out.println("statr");
    }

    ;
}
