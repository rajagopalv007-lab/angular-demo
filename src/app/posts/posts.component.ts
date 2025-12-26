import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: `./posts.component.html`,
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postsService: PostsService) {

  }
  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }


}
