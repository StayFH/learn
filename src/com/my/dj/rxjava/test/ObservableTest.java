package com.my.dj.rxjava.test;

import com.my.dj.rxjava.*;

public class ObservableTest {
    public static void main(String[] args) {
//        Observable.create(new Observable.OnSubscribe<Integer>() {
//            @Override
//            public void call(Subscriber<? super Integer> subscriber) {
//                for (int i = 0; i < 10; i++) {
//                    subscriber.onNext(i);
//                }
//            }
//        })
//                .subscribe(new Subscriber<Integer>() {
//                    @Override
//                    public void onCompleted() {
//                        System.out.println("1");
//                    }
//
//                    @Override
//                    public void onError(Throwable t) {
//                        System.out.println(t);
//                    }
//
//                    @Override
//                    public void onNext(Integer var) {
//
//                    }
//
//                });

        // 第一个onSubscribe
        Observable.create(new Observable.OnSubscribe<Integer>() {
            @Override
            public void call(Subscriber<? super Integer> subscriber) {
                for (int i = 0; i < 10; i++) {
                    subscriber.onNext(i);
                }
            }
            //MapOnSubscribe
        }).map(new Observable.Transformer<Integer, String>() {
            @Override
            public String call(Integer from) {
                return "call" + from;
            }
        }).subscribeOn(Schedulers.io()).subscribe(new Subscriber<String>() {
            @Override
            public void onCompleted() {

            }

            @Override
            public void onError(Throwable t) {

            }

            @Override
            public void onNext(String var) {
                System.out.println("Subscriber@ " + Thread.currentThread().getName());
                System.out.println(var);
            }
        });
//        Observable.create((Observable.OnSubscribe<Integer>) subscriber -> {
//            for (int i = 0; i < 10; i++) {
//                subscriber.onNext(i);
//            }
//        }).map(from -> "call"+from).subscribe(new Subscriber<String>() {
//            @Override
//            public void onCompleted() {
//
//            }
//
//            @Override
//            public void onError(Throwable t) {
//
//            }
//
//            @Override
//            public void onNext(String var) {
//                System.out.println(var);
//
//            }
//        });
    }
}
