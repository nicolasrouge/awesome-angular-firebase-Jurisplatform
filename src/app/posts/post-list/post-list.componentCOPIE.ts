import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //posts: Observable<Post[]>

  constructor(private postService: PostService, public auth: AuthService, private db: AngularFireDatabase) { }

  // unwrapped arrays from firebase
  posts: any;
  filteredPosts: any;

  //filter-able properties
  category: string;

  // Active filter rules
  filters = {}


  ngOnInit() {
    this.db.list('/posts').valueChanges()
    .subscribe(posts => {
      this.posts = posts;
      this.applyFilters()
    })
    //this.posts = this.postService.getPosts()
    //console.log(this)
  }

  private applyFilters() {
    this.filteredPosts = _.filter(this.posts, _.conforms(this.filters) )
  }

    /// filter property by equality to rule
    filterExact(property: string, rule: any) {
      this.filters[property] = (val: any) => val == rule
      this.applyFilters()
    }
  
    /// filter  numbers greater than rule
    filterGreaterThan(property: string, rule: number) {
      this.filters[property] = (val: number) => val > rule
      this.applyFilters()
    }
  
    /// filter properties that resolve to true
    filterBoolean(property: string, rule: boolean) {
      if (!rule) this.removeFilter(property)
      else {
        this.filters[property] = (val: any) => val
        this.applyFilters()
      }
    }

      /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
}
