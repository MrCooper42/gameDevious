import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GamesService } from './games.service';
export var GamesComponent = (function () {
    function GamesComponent(gamesService) {
        this.gamesService = gamesService;
    }
    GamesComponent.prototype.seachGame = function () {
        var _this = this;
        var game = this.searchGameForm.value.game;
        console.log(game, 'game comp');
        this.gamesService.getGame(game)
            .subscribe(function (data) {
            console.log(data.body, 'returned data');
            _this.games = data.body;
        }, function (error) { return console.error(error); });
        this.searchGameForm.reset();
    };
    GamesComponent.prototype.ngOnInit = function () {
        this.searchGameForm = new FormGroup({
            game: new FormControl(null, Validators.required),
        });
    };
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
    return GamesComponent;
}());
//# sourceMappingURL=games.component.js.map