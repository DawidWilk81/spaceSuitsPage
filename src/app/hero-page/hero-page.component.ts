import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { faEnvelope, faCheckSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})

export class HeroPageComponent implements AfterViewInit {
  //navigation li
  @ViewChild('homeNav') homeNav:any;
  @ViewChild('about') about:any;
  @ViewChild('recom') recom:any;

  //components
  @ViewChild('home') home:any;
  @ViewChild('start') start:any;
  @ViewChild('recommendations') recommendations:any;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY < this.start.nativeElement.offsetTop/1.5){
      this._renderer.setStyle(this.homeNav.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0.8)');
      this._renderer.setStyle(this.about.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
      this._renderer.setStyle(this.recom.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
    }else if(window.scrollY < this.recommendations.nativeElement.offsetTop/1.5){
      this._renderer.setStyle(this.homeNav.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
      this._renderer.setStyle(this.about.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0.8)');
      this._renderer.setStyle(this.recom.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
    }else if(window.scrollY >= this.recommendations.nativeElement.offsetTop/1.5){
      this._renderer.setStyle(this.homeNav.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
      this._renderer.setStyle(this.about.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0)');
      this._renderer.setStyle(this.recom.nativeElement, 'backgroundColor', 'rgba(105, 97, 97, 0.8)');
    }
    console.log(this.start.nativeElement.offsetTop)
  }

  check = faCheckSquare;
  mail = faEnvelope;
  star = faStar;
  reco=0;
  mainScroll = scrollY

  constructor(private _renderer:Renderer2) { }

  ngAfterViewInit(): void {
    console.log(this.start.nativeElement.offsetHeight);
  }

  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }
}
