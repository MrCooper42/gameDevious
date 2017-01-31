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
        this.gamesService.getGame(game)
            .subscribe(function (data) {
            data = JSON.parse(data.body);
            _this.games = data;
            if (data.length < 1) {
                _this.noGames = true;
            }
            else {
                _this.noGames = false;
            }
        }, function (error) { return console.error(error); });
        this.searchGameForm.reset();
    };
    GamesComponent.prototype.ngOnInit = function () {
        this.noGames = false;
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