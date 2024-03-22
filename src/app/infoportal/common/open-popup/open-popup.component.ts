import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-open-popup',
  templateUrl: './open-popup.component.html',
  styleUrls: ['./open-popup.component.scss']
})
export class OpenPopupComponent implements OnInit {
  @Input() src!: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  /**
   * Uruchomienie zamknięcia popup'u bez dodatkowych procesów
   */
  public close(): void {
    this.activeModal.close()
  }
}
