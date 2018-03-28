import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('pdf1') pdf1: ElementRef;
  @ViewChild('pdf2') pdf2: ElementRef;
  @ViewChild('pdf3') pdf3: ElementRef;
  @ViewChild('pdf4') pdf4: ElementRef;
  @ViewChild('pdf5') pdf5: ElementRef;

  public context: CanvasRenderingContext2D;

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.pdf1.nativeElement).getContext('2d');
    console.log(this.context);
    const img = new Image;
    img.src = '/assets/Arctic_big.svg';
    img.onload = () => {
      console.log('height: ' + img.height);
      console.log('width: ' + img.width);
      this.context.canvas.height = img.height;
      this.context.canvas.width = img.width;
      this.context.drawImage(img, 0, 0);
    };

  }

  public canvasing() {}
}
