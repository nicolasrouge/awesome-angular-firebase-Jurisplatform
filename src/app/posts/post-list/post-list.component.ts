import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //posts: Observable<Post[]>
  posts: any;

  constructor(private postService: PostService, public auth: AuthService) { }

    // unwrapped arrays from firebase
    filteredPosts: any;
  
    //filter-able properties
    category: string;
  
    // Active filter rules
    filters = {}

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  filtrarData(categoriaToFilter: string) {
    this.posts = this.postService.getPostsFilter(categoriaToFilter)
}

  /// removes filter
  removeFilter(property: string) {
    this.posts = this.postService.getPosts()
  }

  delete(id: string) {
    console.log("DELETE method")
    this.postService.delete(id)
  }
}