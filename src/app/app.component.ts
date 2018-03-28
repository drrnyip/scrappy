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
  @ViewChild('pdf6') pdf6: ElementRef;
  @ViewChild('pdf7') pdf7: ElementRef;
  @ViewChild('pdf8') pdf8: ElementRef;
  @ViewChild('pdf9') pdf9: ElementRef;
  @ViewChild('pdf10') pdf10: ElementRef;

  public context1: CanvasRenderingContext2D;
  public context2: CanvasRenderingContext2D;
  public context3: CanvasRenderingContext2D;
  public context4: CanvasRenderingContext2D;
  public context5: CanvasRenderingContext2D;
  public context6: CanvasRenderingContext2D;
  public context7: CanvasRenderingContext2D;
  public context8: CanvasRenderingContext2D;
  public context9: CanvasRenderingContext2D;
  public context10: CanvasRenderingContext2D;

  public pdfs = [];

  ngOnInit() {
    this.canvasing(this.pdf1, this.context1);
    this.canvasing(this.pdf2, this.context2);
    this.canvasing(this.pdf3, this.context3);
    this.canvasing(this.pdf4, this.context4);
    this.canvasing(this.pdf5, this.context5);
    this.canvasing(this.pdf6, this.context6);
    this.canvasing(this.pdf7, this.context7);
    this.canvasing(this.pdf8, this.context8);
    this.canvasing(this.pdf9, this.context9);
    this.canvasing(this.pdf10, this.context10);
  }

  public canvasing(pdfNumber, canvas) {
    canvas = (<HTMLCanvasElement>pdfNumber.nativeElement).getContext('2d');
    console.log(canvas);
    const img = new Image;
    img.src = '/assets/Arctic_big.svg';
    img.onload = () => {
      console.log('height: ' + img.height);
      console.log('width: ' + img.width);
      canvas.canvas.height = img.height;
      canvas.canvas.width = img.width;
      canvas.drawImage(img, 0, 0);
    };
  }
}
