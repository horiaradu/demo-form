import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Entity, EntityService } from "../entity-service.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.scss"],
})
export class DemoFormComponent implements OnInit, OnChanges {
  @Input() entity: Entity;

  form: FormGroup;

  constructor(private entityService: EntityService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.entity.name),
    });

    this.form.valueChanges.subscribe((formValues) => {
      this.entityService.saveLocally({ id: this.entity.id, ...formValues });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { name } = changes.entity.currentValue;
    this.form && this.form.patchValue({ name });
  }

  save() {
    this.entityService.saveEntity({
      id: this.entity.id,
      ...this.form.getRawValue(),
    });
  }
}
