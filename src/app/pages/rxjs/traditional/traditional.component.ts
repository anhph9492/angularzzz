import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-traditional',
    templateUrl: 'traditional.component.html'
})


export class TraditionalComponent implements OnInit {
    posts = [];
    showSpinner: boolean;
    constructor(private httpClient: HttpClient) {
        this.showSpinner = false;
    }
    ngOnInit(): void { }
    async load(): Promise<any> {
        // show spinner while fetching posts
        this.showSpinner = true;
        // retrieve the posts by calling the endpoint that uses promise.all for fetching
        // all of the rss feeds and waiting (synchronously) for them to complete
        this.posts = [];
        const response = await axios.get(environment.traditionalEndpoint);
        response.data.forEach(o => {
            const inputDate = new Date(o.pubDate);
            o.pubDate =
                inputDate.toLocaleDateString('en-us') + ' at ' +
                inputDate.toLocaleTimeString('en-us');
            this.posts.push({
                ...o,
                sortDate: inputDate.getTime()
            });
        });

        // retrieve the manual entries
        const manualEntries: any = await axios.get(environment.manualEntries);
        manualEntries.data.forEach((entry: any) => {
            const inputDate = new Date(entry.pubDate);
            entry.pubDate =
                inputDate.toLocaleDateString('en-us') +
                ' at ' +
                inputDate.toLocaleTimeString('en-us');
            if (entry.contentSnippet.length > 200) {
                entry.contentSnippet = entry.contentSnippet.substring(0, 200);
            }

            this.posts.push({
                ...entry,
                sortDate: inputDate.getTime(),
            });
        });

        // sort by date here
        this.posts.sort((a: any, b: any) => {
            return b.sortDate - a.sortDate;
        });

        // stop showing spinner when fetch completes
        this.showSpinner = false;
    }
    clear(): void {
        this.posts = [];
        this.showSpinner = false;
    }
}
