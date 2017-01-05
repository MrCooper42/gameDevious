import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GamesService } from './games.service';
export class GamesComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    seachGame() {
        let game = this.searchGameForm.value.game;
        console.log(game, "game comp");
        this.gamesService.getGame(game)
            .subscribe(data => {
            console.log(data.body, "returned data");
            this.games = data.body;
        }, error => console.error(error));
        this.searchGameForm.reset();
    }
    ngOnInit() {
        this.searchGameForm = new FormGroup({
            game: new FormControl(null, Validators.required),
        });
    }
}
GamesComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-games',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.css']
            },] },
];
/** @nocollapse */
GamesComponent.ctorParameters = [
    { type: GamesService, },
];
//# sourceMappingURL=games.component.js.map