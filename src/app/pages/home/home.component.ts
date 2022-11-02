import { Component, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/mockDataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataMock = dataMock;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataMock)
  }
}
