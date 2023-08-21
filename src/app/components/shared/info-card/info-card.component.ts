import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() studyTitle = '';
  @Input() studyId = '';
  @Input() studyName = '';
  @Input() studyPhase = '';
  @Input() studyScenerios = '';
  @Input() studyDeadline = '';
  constructor() {}
}
