import { Component, OnInit, Input} from '@angular/core';
import { dataMock } from '../../data/mockDataFake'


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  imageUrl:string = "";
  title:string = "";
  description:string = "";
  @Input() id:string | null = "0";

  constructor() { }

  ngOnInit(): void {
    this.setBigCardContent(this.id);
  }

  setBigCardContent(id: string | null) {
    const result = dataMock.filter(article => article.id.toString() == id)[0]
    this.imageUrl = result.picture;
    this.title = result.title;
    this.description = result.description;
  }

}


