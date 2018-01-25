import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  timeline: TimelineElement[];
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;

  constructor() {
    this.content1 = 'COMP 1001: Introduction to Computational Thinking for Arts and Social Science Students';
    this.content2 = 'MATH 1007: Elementary Calculus';
    this.content3 = 'STAT 2507: Introduction to Statistical Modeling';
    this.content4 = 'Relative Techniques: Python, Django, Angular, Typescript, Unit tests, PowerBI';
    this.content5 = 'COMP 1405: Introduction to Computer Science';

    this.timeline = [
      { caption: '01 Sep',
        date: new Date(2016, 8, 1),
        selected: true,
        title: 'Teaching Assistant - Carleton University',
        content: this.content1 },
      { caption: '01 Jan',
        date: new Date(2016, 12, 1),
        title: 'Teaching Assistant - Carleton University',
        content: this.content2 },
      { caption: '01 Apr',
        date: new Date(2017, 3, 1),
        title: 'Teaching Assistant - Carleton University',
        content: this.content3 },
      { caption: '01 May',
        date: new Date(2017, 4, 1),
        title: 'Web Developer & Tester - Giatec Scientific Inc.',
        content: this.content4 },
      { caption: '01 Jan',
        date: new Date(2017, 12, 1),
        title: 'Teaching Assistant - Carleton University',
        content: this.content5 },
    ];
  }

  ngOnInit() {
  }

}
