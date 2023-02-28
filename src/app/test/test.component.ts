import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(
    private store: Store<{count: number}>
  ){}

  reset(){
    this.store.dispatch(reset());
  }
}
