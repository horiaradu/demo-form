import { Component, OnInit, Input } from "@angular/core";
import { Entity, EntityService } from "../entity-service.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.scss"],
})
export class DemoFormComponent implements OnInit {
  @Input() entity: Entity;

  form: FormGroup;

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.entity.name),
    });
  }

  save() {
    this.entityService.saveEntity({
      id: this.entity.id,
      ...this.form.getRawValue(),
    });
  }
}
