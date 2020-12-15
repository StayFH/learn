package com.my.dj.rxjava;

public class Observable<T> {

    final OnSubscribe<T> onSubscribe;

    private Observable(OnSubscribe<T> onSubscribe) {
        this.onSubscribe = onSubscribe;
    }
    // 这是构造方法传入
    public static <T> Observable<T> create(OnSubscribe<T> onSubscribe){
        return new Observable<T>(onSubscribe);
    }
    public void  subscribe(Subscriber<? super T> subscriber){
//        subscriber.onStart();
        System.out.println(onSubscribe.getClass().toString());
        onSubscribe.call(subscriber);
    }

    public interface OnSubscribe<T> {
        void call(Subscriber<? super T> subscriber);
    }


    public Observable<T> subscribeOn(Scheduler scheduler){
        return Observable.create(new OnSubscribe<T>() {
            @Override
            public void call(Subscriber<? super T> subscriber) {
                subscriber.onStart();
                scheduler.createWork().schedule(new Runnable() {
                    @Override
                    public void run() {
                        Observable.this.onSubscribe.call(subscriber);
                    }
                });
            }
        });
    }

     public <R> Observable <R> map(Transformer<? super T,?extends R>transformer){
        return  create(new MapOnSubscribe(this,transformer ));
     }

//    public <R> Observable<R> map(Transformer<? super T, ? extends R> transformer) {
//        return create(subscriber -> Observable.this.subscribe(new Subscriber<T>() {
//            @Override
//            public void onCompleted() {
//                subscriber.onCompleted();
//            }
//
//            @Override
//            public void onError(Throwable t) {
//                subscriber.onError(t);
//            }
//
//            @Override
//            public void onNext(T var1) {
//                // 将上层的onSubscribe发送过来的Event，通过转换和处理，转发给目标的subscriber
//                subscriber.onNext(transformer.call(var1));
//            }
//        }));
//    }
    public interface Transformer <T,R>{
        R call(T from);
    }
}
