import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor ( private router: Router){}

}
