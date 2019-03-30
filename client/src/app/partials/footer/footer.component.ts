// Created by: professor

// this file footer component which is displayed in every page

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
