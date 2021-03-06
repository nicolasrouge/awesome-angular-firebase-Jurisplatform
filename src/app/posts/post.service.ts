import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'

import { Post } from './post'
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref/*.where('category', '==', 'blockchain')*/.orderBy('published', 'desc'))
  }

  //oh my god le pipe fallait le trouver :/
  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }));
  }

  filterBy(categoriaToFilter: string) {
    this.postsCollection = this.afs.collection('posts', ref => ref.where('category', '==', categoriaToFilter).orderBy('published', 'desc'))
    return this.postsCollection ;
};

getPostsFilter(categoriaToFilter: string) {
  return this.afs.collection('posts', ref => ref.where('category', '==', categoriaToFilter).orderBy('published', 'desc')).snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Post
      const id = a.payload.doc.id
      return { id, ...data }
    })
  }));
}
  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }
  getPost(id: string) {
    return this.postDoc = this.afs.doc<Post>(`posts/${id}`)

  }

  delete(id: string) {
    return this.getPost(id).delete()
  }
  update(id: string, formData) {
    return this.getPost(id).update(formData)
  }
}