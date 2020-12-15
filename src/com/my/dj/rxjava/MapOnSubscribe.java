package com.my.dj.rxjava;



public class MapOnSubscribe<T,R> implements Observable.OnSubscribe<R> {
    // 相当于create 创建
    final Observable<T> sourece;
    final Observable.Transformer <? super T,?extends R> transformer;
    public MapOnSubscribe(Observable<T> source,Observable.Transformer <? super T,?extends R> transformer){
        this.sourece=source;
        this.transformer=transformer;
    }

    @Override
    public void call(Subscriber<? super R> subscriber) {
        sourece.subscribe(new MapSubscriber(subscriber,transformer));
    }
}
