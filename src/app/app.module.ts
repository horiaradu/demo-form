import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { DumbModalComponent } from './dumb-modal/dumb-modal.component';

@NgModule({
  declarations: [AppComponent, DemoFormComponent, DumbModalComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
