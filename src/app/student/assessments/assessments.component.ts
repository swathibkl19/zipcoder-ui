import { Component, Input, OnInit } from '@angular/core';

import { Assessment } from './../../assessment/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  style: ''
})
export class AssessmentsComponent implements OnInit {

  @Input assessments: Assessment[] = [];
}
