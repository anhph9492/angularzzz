import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DynamicScriptAndStyleLoaderService {
    private scripts: any = [];
    private styles: any = [];
    constructor(@Inject(DOCUMENT) private document: HTMLDocument) { }
    loadAllStyles(...styleUrls: string[]): Promise<any[]> {
        styleUrls.forEach((url: string) => {
            this.styles.push({
                loaded: false,
                url
            });
        });
        const promises: any[] = [];
        styleUrls.forEach((url) => {
            promises.push(this.loadStyle(url));
        });
        return Promise.all(promises);
    }
    loadStyle(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const style = this.styles.find(o => o.url === url);
            if (!style.loaded) {
                const styleElement = document.createElement('link');
                styleElement.href = style.url;
                styleElement.rel = 'stylesheet';
                styleElement.type = 'text/css';
                styleElement.onload = () => {
                    style.loaded = true;
                    resolve({ url, loaded: true });
                };
                styleElement.onerror = (error: any) => resolve({ url: { url }, loaded: false });
                this.document.getElementsByTagName('head')[0].appendChild(styleElement);
            } else {
                resolve({ url: { url }, loaded: true });
            }
        });
    }
}
