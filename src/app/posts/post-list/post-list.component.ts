import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
    console.log("HELLO")
  }
  delete(id: string) {
    console.log("DELETE method")
    this.postService.delete(id)
  }
}
