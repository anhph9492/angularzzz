import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../utils/crypto.service';
import { DestroyableComponent} from '../../utils/destroyable.component';
@Component({
    selector: 'app-global-cache',
    templateUrl: 'global-cache.component.html'
})

export class GlobalCacheComponent extends DestroyableComponent {
    constructor(private crypto: CryptoService) {
        super();
    }
}
