import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anusha';

  scrollTo(id:HTMLElement){

    id.scrollIntoView({behavior:"smooth"})
  }
}

