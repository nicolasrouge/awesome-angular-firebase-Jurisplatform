import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {

  selected = 'None';

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

