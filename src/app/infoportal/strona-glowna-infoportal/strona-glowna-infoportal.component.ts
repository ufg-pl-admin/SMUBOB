import {Component, OnInit, Renderer2} from '@angular/core';
import {catchError, take} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorService} from "../../core/service/error.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-strona-glowna-infoportal',
  templateUrl: './strona-glowna-infoportal.component.html',
  styleUrls: ['./strona-glowna-infoportal.component.scss']
})
export class StronaGlownaInfoportalComponent implements OnInit {

  public form!: FormGroup;
  public isObywatel: boolean = true;
  constructor(
              private renderer: Renderer2,
              private title: Title) {
  this.title.setTitle("Infoportal - Strona główna")
    this.renderer.addClass(document.body, 'obywatel');
  }


  ngOnInit(): void {

  }





}
