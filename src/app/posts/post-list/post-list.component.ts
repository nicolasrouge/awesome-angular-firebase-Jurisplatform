import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import * as _ from 'lodash';
import {MatSidenav} from '@angular/material/sidenav';

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
    if(categoriaToFilter != 'all'){
      this.posts = this.postService.getPostsFilter(categoriaToFilter)
    }
    else{
      this.posts = this.postService.getPosts()
    }
    console.log(categoriaToFilter)
    console.log(this.posts)
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