import { AfterViewInit, Component } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [],
})
export class BaseComponent implements AfterViewInit {
  public color: ThemePalette = 'primary';

  constructor() {}

  ngAfterViewInit() {}
}
