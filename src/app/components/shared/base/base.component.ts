import { Component, OnInit } from '@angular/core';

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
export class BaseComponent implements OnInit {
  public color: ThemePalette = 'primary';
  breakpoint: number;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 600 ? 1 : 3;
  }

  handleSize(event: any) {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 3;
  }
}
