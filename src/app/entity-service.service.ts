import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

export interface Entity {
  id: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class EntityService {
  constructor() {}

  fetchEntity(): Observable<Entity> {
    return of({
      id: 1,
      name: "name",
    });
  }

  saveEntity(payload: Entity): Observable<Entity> {
    console.log(payload);
    return of(payload);
  }
}
