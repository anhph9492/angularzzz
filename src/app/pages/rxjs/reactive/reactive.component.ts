import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Subject, merge } from 'rxjs';
import { catchError, scan, takeUntil } from 'rxjs/operators';
interface Post {
    sourceURL: string;
    creator: string;
    title: string;
    link: string;
    pubDate: string;
    sortDate: number;
    contentSnippet: string;
    categories: string;
}
@Component({
    selector: 'app-reactive',
    templateUrl: 'reactive.component.html'
})
export class ReactiveComponent implements OnInit {
    posts$: Observable<any>;
    unsubscribe: Subject<void> = new Subject();
    constructor(private http: HttpClient) { }
    ngOnInit(): void { }
    load(): any {
        const medium = this.http.get(environment.reactiveEndpoint + '/medium').pipe(
            catchError((err) => {
                throw new Error('error in source observable. Message: ' + err.message);
            })
        );
        const devto = this.http.get(environment.reactiveEndpoint + '/devto').pipe(
            catchError((err) => {
                throw new Error('error in source observable. Message: ' + err.message);
            })
        );
        const wordpress = this.http
            .get(environment.reactiveEndpoint + '/wordpress')
            .pipe(
                catchError((err) => {
                    throw new Error('error in source observable. Message: ' + err.message);
                })
            );
        const manualEntries = this.http.get(environment.manualEntries).pipe(
            catchError((err) => {
                throw new Error('error in source observable. Message: ' + err.message);
            })
        );
        this.posts$ = merge(medium, wordpress, devto, manualEntries).pipe(
            scan((output: Post[], response: []) => {
                response.forEach((post: Post) => {
                    const inputDate = new Date(post.pubDate);
                    post.pubDate = inputDate.toLocaleDateString('en-us') + ' at ' + inputDate.toLocaleTimeString('en-us');
                    post.sortDate = inputDate.getTime();
                    if (post.sourceURL === 'https://blog.angularindepth.com/feed') {
                        post.sourceURL = 'Angular-In-Depth';
                    } else if (post.sourceURL === 'https://itnext.io/feed') {
                        post.sourceURL = 'ITNext';
                    } else if (post.sourceURL === 'https://medium.com/feed/@Andrew_Evans') {
                        post.sourceURL = 'Medium';
                    } else if (post.sourceURL === 'https://rhythmandbinary.com/feed') {
                        post.sourceURL = 'Rhythm and Binary';
                    } else if (post.sourceURL === 'https://dev.to/feed/andrewevans0102') {
                        post.sourceURL = 'DEV.TO';
                    }
                    output.push(post);
                });
                output.sort((a: any, b: any) => {
                    return b.sortDate - a.sortDate;
                });
                return output;
            }, []),
            catchError((err) => {
                throw new Error('error in source observable. Message: ' + err.message);
            }),
            takeUntil(this.unsubscribe)
        );
    }
    clear(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.posts$ = null;
    }
}
