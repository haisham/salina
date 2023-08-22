import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

export interface ScenerioElement {
  id: string;
  scenerios: string;
  countries: string;
  sites: string;
  predictedEndDate: string;
  enrolmentRate: string;
  retentionRate: string;
  lastEdited: string;
  status: string;
}

const ELEMENT_DATA: ScenerioElement[] = [
  {
    id: '',
    scenerios: 'No constraints',
    countries: '12',
    sites: '123',
    predictedEndDate: 'xx-xx-xxxx',
    enrolmentRate: '12.34',
    retentionRate: '12.34%',
    lastEdited: 'ABCD/xx-xx-xxxx',
    status: 'Completed',
  },
];

@Component({
  selector: 'app-study-details',
  templateUrl: './study-details.component.html',
  styleUrls: ['./study-details.component.scss'],
})
export class StudyDetailsComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'december',
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 250, 300, 350, 400, 500, 650, 700, 1250],
        label: 'Patients',
        fill: true,
        tension: 0.1,
        borderColor: 'rgba(38,60,123,0.9)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        pointBackgroundColor: 'rgba(38,60,123,0.9)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  displayedColumns: string[] = [
    'id',
    'scenerios',
    'countries',
    'sites',
    'predictedEndDate',
    'enrolmentRate',
    'retentionRate',
    'lastEdited',
    'status',
  ];
  dataSource = ELEMENT_DATA;
}
