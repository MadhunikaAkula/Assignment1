import { Component, OnInit } from '@angular/core';
import { RaceSubscriber } from 'rxjs/internal/observable/race';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 items=[{
   name:"book",image:"https://miro.medium.com/max/10944/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"Cooker",image:"https://rukminim1.flixcart.com/image/352/352/pressure-cooker/q/8/b/cb40-hawkins-original-imaejy6xbvz3sk8r.jpeg?q=70",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"Friz",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7xjXKkV-QuVQ8_YbBXn3yhStxuoS-EkR1-g&usqp=CAU",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"stick",image:"https://images-na.ssl-images-amazon.com/images/I/61IMr0xjToL._SY879_.jpg",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"mug",image:"https://c-static.smartphoto.com/structured/repositoryimage/productcategory/fun_ideas/magic_mug/material/0002/image/material.jpg",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"makeup",image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-1296x728-header.jpg?w=1155&h=1528",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"pens",image:"https://cdn.thewirecutter.com/wp-content/uploads/2018/07/pens-2x1-0025.jpg",description:"reading is imp for health and mind reset",price:"Rs.200"},{
   name:"cloth",image:"https://images-na.ssl-images-amazon.com/images/I/81wUWVAiWDL._SX425_.jpg",description:"reading is imp for health and mind reset",price:"Rs.200"}
 ]
}
