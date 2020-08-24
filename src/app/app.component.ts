import { Component } from "@angular/core";
import { EntityService, Entity } from "./entity-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo-form";

  showModal = false;

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    this.entityService.fetchEntity();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  refresh() {
    this.entityService.refresh();
  }

  get e() {
    return this.entityService.entity$;
  }
}
