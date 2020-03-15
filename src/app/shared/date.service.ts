import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";

// Глобальный сервис для работы с датой
@Injectable({
  providedIn: "root"
})
export class DateService {
  // Публичная, реактивная переменная
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  changeMonth(dir: number) {
    // Добавляем либо вычитаем 1 месяц
    const value = this.date.value.add(dir, "month");
    this.date.next(value);
  }
}
