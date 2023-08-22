import { Component, OnInit } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [],
})
export class BaseComponent implements OnInit {
  public color: ThemePalette = 'primary';
  breakpoint: number = 3;
  constructor() {}

  ngOnInit() {
    this.determineCols(window.innerWidth);
  }

  handleSize(event: any) {
    let windowWidth = event.target.innerWidth;
    this.determineCols(windowWidth);
  }

  determineCols(windowWidth: any) {
    if (windowWidth < 1200 && windowWidth > 768) {
      this.breakpoint = 2;
    } else if (windowWidth < 768) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 3;
    }
  }
}
