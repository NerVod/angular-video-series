import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

cocktailName$!: string
cocktailIngredient1$!: string
cocktailIngredient2$!: string
cocktailIngredient3$!: string
cocktailIngredient4$!: string
cocktailIngredient5$!: string
cocktailIngredient6$!: string
cocktailIngredient7$!: string




  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    // this.dataService.getData().subscribe( (res) => {
    //   console.log(res)
    //   console.log('entries : ',Object.entries(res)[0][1][17]['strDrink'])
    // })
  }

  getCocktail() {
    const nombre = Math.floor(Math.random()*25);
    this.dataService.getData().subscribe( (res: Object) => {
      this.cocktailName$=(Object.entries(res)[0][1][nombre]['strDrink']);
      this.cocktailIngredient1$=(Object.entries(res)[0][1][nombre]['strIngredient1'])
      this.cocktailIngredient2$=(Object.entries(res)[0][1][nombre]['strIngredient2'])
      this.cocktailIngredient3$=(Object.entries(res)[0][1][nombre]['strIngredient3'])
      this.cocktailIngredient4$=(Object.entries(res)[0][1][nombre]['strIngredient4'])
      this.cocktailIngredient4$=(Object.entries(res)[0][1][nombre]['strIngredient5'])
      this.cocktailIngredient4$=(Object.entries(res)[0][1][nombre]['strIngredient6'])
      this.cocktailIngredient4$=(Object.entries(res)[0][1][nombre]['strIngredient7'])
    })
  }

}
