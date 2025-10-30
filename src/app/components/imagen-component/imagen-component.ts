import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imagen-component',
  imports: [FormsModule],
  templateUrl: './imagen-component.html',
  styleUrl: './imagen-component.css',
})
export class ImagenComponent {
  urlBase: string = "https://picsum.photos/id/";
  url: string = "https://picsum.photos/id/237/400/300";
  id: number | null = null;

  modificarUrl(): void {
    if (this.id !== null) {
      this.url = this.urlBase + this.id + "/400/300";
      // console.log(this.url);
    }
  }
}
