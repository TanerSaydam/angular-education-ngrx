import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;
  count2: number = 0;

  constructor(
    private store: Store<{count: number}>
  ){
    this.count$ = store.select("count");

    store.select("count").subscribe(res=>{
      this.count2 = res;
    });
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
