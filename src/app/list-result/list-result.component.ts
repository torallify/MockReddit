import { Component, OnInit } from '@angular/core';
import { RedditAwwService } from '../reddit-aww.service';
import { Posts,  Post} from '../interfaces/posts';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {
  posts:Posts;
  constructor(private awwService:RedditAwwService) { }

  ngOnInit(): void {
    this.awwService.getPosts().subscribe(
      (data: Posts) => this.posts = { ...data }, 
      error => console.error(error)
    );
  }

}
