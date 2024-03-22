import {Component, Input, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import {fromEvent, Observable, Subject} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'smubob-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        'show',
        style({opacity: 1, transform: 'translateY(0)'})
      ),
      state(
        'close',
        style({opacity: 0, transform: 'translateY(-200%)'})
      ),
      transition('show => close', animate('700ms ease-in')),
      transition('close => show', animate('700ms ease-out'))
    ]),
    trigger('toggleHr', [
      state(
        'show',
        style({opacity: 0.2, transform: 'translateY(0)'})
      ),
      state(
        'close',
        style({opacity: 0, transform: 'translateY(-100%)'})
      ),
      transition('show => close', animate('700ms ease-in')),
      transition('close => show', animate('700ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit{
  @Input() title!: string;
  @Input() area?: string;
  public showAnimate: boolean = true;

  private unSub$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router,
    private titleService: Title,
    private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'obywatel');
  }

  ngOnInit(): void {
    this.titleService.setTitle('SMUBOB - ' + this.title);
  }


  /**
   * Przekierowanie do poprzedniego adresu
   * @param event
   */
  public goBack(event: any) {
    event.preventDefault();
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

