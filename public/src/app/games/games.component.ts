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

  games: Array<any>;

  noGames: Boolean;

  constructor(private gamesService: GamesService) { }

  seachGame() {
      let game = this.searchGameForm.value.game;
      this.gamesService.getGame(game)
        .subscribe(
        data => {
          data = JSON.parse(data.body)
          this.games = data;
          if (data.length < 1) {
            this.noGames = true;
          } else {
            this.noGames = false;
          }
        },
        error => console.error(error));
      this.searchGameForm.reset();

  }

  ngOnInit() {
    this.noGames = false;
    this.searchGameForm = new FormGroup({
      game: new FormControl(null, Validators.required),
    });
  }

}
