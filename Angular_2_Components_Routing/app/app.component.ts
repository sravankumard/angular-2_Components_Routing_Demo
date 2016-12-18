
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
               <a routerLink="First">First</a> |
               <a routerLink="Second">Second</a> |
               <a routerLink="Third">Third</a> |
               <a routerLink="Fourth">Fourth</a> |
<br/>
<div>
<router-outlet></router-outlet>
</div>
`
})
export class AppComponent { }
