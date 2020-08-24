import { Injectable } from "@angular/core";
import { of, Observable, BehaviorSubject, Subject } from "rxjs";

export interface Entity {
  id: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class EntityService {
  entity$ = new BehaviorSubject<Entity>(null);

  constructor() {}

  fetchEntity() {
    of({
      id: 1,
      name: "name",
    }).subscribe((e) => this.entity$.next(e));
  }

  saveEntity(payload: Entity) {
    console.log(payload);
    of(payload).subscribe((e) => this.entity$.next(e));
  }
}
