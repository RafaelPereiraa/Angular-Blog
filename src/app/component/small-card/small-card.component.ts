import { Component, Input, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/mockDataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  imageUrl:string = "";
  title:string = "";
  @Input() id:string | null = "0";

  constructor() { }

  ngOnInit(): void {
    this.setSmallCardContent(this.id)
  }

  setSmallCardContent(id: string | null) {
    const result = dataMock.filter(article => article.id.toString() == id)[0]

    this.imageUrl = result.picture;
    this.title = result.title;
  }

}
