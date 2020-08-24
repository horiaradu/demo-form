import { Component } from "@angular/core";
import { EntityService, Entity } from "./entity-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo-form";
  e: Entity;

  showModal = false;

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    this.entityService.fetchEntity().subscribe((e: Entity) => (this.e = e));
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
