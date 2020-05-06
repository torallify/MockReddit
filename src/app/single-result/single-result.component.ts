import { Component, OnInit, Input } from '@angular/core';
import { RedditAwwService} from '../reddit-aww.service';
import { Post } from '../interfaces/posts';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {
  @Input() myPost:Post;

  constructor(private awwService:RedditAwwService) { }

  ngOnInit(): void {

  }

}
