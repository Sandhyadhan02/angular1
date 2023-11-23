import { Component, Input } from '@angular/core';
import { Category } from '../models/models';

@Component({
  selector: 'app-suggestedproduct',
  templateUrl: './suggestedproduct.component.html',
  styleUrls: ['./suggestedproduct.component.css']
})
export class SuggestedproductComponent {
  @Input()  category:Category ={
    id:0,
    category:'',
    subcategory:'',
  };
  @Input() count: number =3;
  constructor(){}
  ngOnInit(): void{}

}
