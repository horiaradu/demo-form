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
  serverState = {
    id: 1,
    name: "name",
  };

  constructor() {}

  fetchEntity() {
    of(this.serverState).subscribe((e) => this.entity$.next(e));
  }

  saveLocally(entity: Entity) {
    this.entity$.next(entity);
  }

  saveEntity(payload: Entity) {
    this.serverState = { ...payload };
    of(payload).subscribe((e) => this.entity$.next(e));
  }

  refresh() {
    this.entity$.next(this.serverState);
  }
}
