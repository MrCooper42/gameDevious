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
      .subscribe((res) => {
        this.news = res.body;
        // news => this.news = news,
      });
   };

  // ngOnInit() {
  // }

}
