import { Component } from '@angular/core';
// import { CommentComponent } from './comment/components/index'

@Component({
  selector: 'my-app',
  template: `
        <h1>Comments</h1>
        
        <comment-widget></comment-widget>
        `,

})
export class AppComponent { }
