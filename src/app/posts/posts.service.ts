interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
providedIn: 'root'
})
export class PostsService{
    constructor(private http: HttpClient) {
    }
    getPosts():Observable<Post[]>{
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
}