import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  abstract ngOnDestroy(): void;

  unsubscribe(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}