import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts:any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // this.postsService.getAllposts().subscribe(posts => {
    //   this.posts = posts;
    // });
    this.posts = this.postsService.getAllposts()
  }


}
