import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GamesService } from './games.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  searchGameForm: FormGroup;

  games: any;

  constructor(private gamesService: GamesService) { }

  seachGame() {
      let game = this.searchGameForm.value;
      this.gamesService.getGame(game)
        .subscribe(
        data => {
          console.log(data, "returned data")
          // this.games = data;
        },
        error => console.error(error));
      this.searchGameForm.reset();

  }

  ngOnInit() {
    this.searchGameForm = new FormGroup({
      game: new FormControl(null, Validators.required),
    });
  }

}
