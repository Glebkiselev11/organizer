import { Component, OnInit } from "@angular/core";
import { DateService } from "../shared/date.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-organizer",
  templateUrl: "./organizer.component.html",
  styleUrls: ["./organizer.component.scss"]
})
export class OrganizerComponent implements OnInit {
  form: FormGroup;
  constructor(public dateService: DateService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required)
    });
  }

  submit() {
    // Вытаскиваем из формы значение
    const { title } = this.form.value;
    console.log(title);
  }
}
