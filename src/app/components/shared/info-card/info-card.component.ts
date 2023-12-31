import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
const SUMMARY_ICON = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#061961" width="800px" height="800px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>details-line</title>
    <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M9,14H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-2"></path><path d="M9,18H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-3"></path><path d="M9,22H19a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-4"></path>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>
`;

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
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'summary-icon',
      sanitizer.bypassSecurityTrustHtml(SUMMARY_ICON)
    );
  }
}
