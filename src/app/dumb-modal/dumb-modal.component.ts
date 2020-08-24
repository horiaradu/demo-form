import { Component, OnInit, Input } from "@angular/core";
import { Entity } from '../entity-service.service';

@Component({
  selector: "app-dumb-modal",
  templateUrl: "./dumb-modal.component.html",
  styleUrls: ["./dumb-modal.component.scss"],
})
export class DumbModalComponent implements OnInit {
  @Input("") entity: Entity;
  constructor() {}

  ngOnInit() {}
}
