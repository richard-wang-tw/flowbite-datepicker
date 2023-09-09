declare class DateRangePicker {
  constructor(
    element: HTMLElement | null,
    options?: {
      onChange?: (dates: { start: Date; end: Date }) => void;
      /**
       * custom date format such as `yyyy-mm-dd`,
       */
      format?: string;
    }
  );
}

declare class Datepicker {
  constructor(
    element: HTMLElement | null,
    options?: object,
    picker?: DateRangePicker
  );
}

export { Datepicker, DateRangePicker };
