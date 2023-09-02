import { DOMElement } from "react";

declare class DateRangePicker {
  constructor(element: HTMLElement | null, options?: object);
}

declare class Datepicker {
  constructor(
    element: HTMLElement | null,
    options?: object,
    picker?: DateRangePicker
  );
}

export { Datepicker, DateRangePicker };
