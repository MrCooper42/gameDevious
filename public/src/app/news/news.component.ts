import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  public news: Array<NewsComponent> = [];

  constructor(newsService: NewsService) {

    newsService.getPulse()
      .subscribe((data) => {
        data = JSON.parse(data.body).filter(pulse => pulse.image != undefined);
        this.news = data;
        console.log(data[7].image, "data");
      });
   };

  // ngOnInit() {
  // }

}
