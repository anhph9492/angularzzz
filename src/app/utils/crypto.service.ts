import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({ providedIn: 'root' })
export class CryptoService {
    test = 'crypto ok !!';
    token = ': Compiled successfully.';
    key = CryptoJS.enc.Utf8.parse(this.token);
    iv = CryptoJS.enc.Utf8.parse(this.token);
    constructor() { }
    encrypt(request): string {
        const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(request), this.key, {
            keySize: 16,
            iv: this.iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    decrypt(request): any {
        return CryptoJS.AES.decrypt(
            request, this.key, {
            keySize: 16,
            iv: this.iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
    }
}

