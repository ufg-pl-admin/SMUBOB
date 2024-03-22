import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import FileUtils from "../../utils/file-utils";
import {AlertService} from "../../../core/service/alert.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {SortEvent} from "@common/model/common";

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnChanges {

  @Input() maximumAttachmentsParam: number = 15;
  @Input() zalaczniki!: File[];

  @Output() obsluzDodanieZalacznika: EventEmitter<File> = new EventEmitter<File>();
  @Output() obsluzUsuniecieZalacznika: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('buttonElement') ref!: ElementRef;

  public dopuszczalnyRozmiarZalacznikow: number = 25;
  public displayedColumns: string[] = ['file', 'size', 'remove'];
  private allowedExtension = ['jpg', 'png', 'avi', 'mp4', 'mp3', 'wav', 'doc', 'docx', 'odt', 'csv', 'xls', 'xlsx', 'pdf',
    'xml', 'txt', 'rtf', 'ppt', 'pptx', 'zip', 'jpeg', 'xps', 'ods', 'odp'];
  public dataSource: any = new MatTableDataSource<File>([]);
  public pokazLoader: boolean = false;

  constructor(
    public alertService: AlertService,
    private liveAnnouncer: LiveAnnouncer
  ) {
  }


  ngOnChanges(changes: SimpleChanges): void {
        if(changes?.zalaczniki !== undefined) {
          this.dataSource = new MatTableDataSource<File>(this.zalaczniki);
        }
    }

  /**
   * Wywołuje się w momencie załączenia pliku
   * @param event zdarzenie załączenia pliku
   */
  public onFileChange(event: any) {
      this.pokazLoader = true;
      let files: FileList = event.target.files;
      this.handleFileInput(files);
      event.target.value = null;
  }

  /**
   * Wywołuje się w momencie wykrycia zdarzenia sortowania
   * @param event zdarzenie sortowania
   */
  public sortujDane(sort: SortEvent): void {
    switch (sort.direction) {
      case '':
        this.liveAnnouncer.announce('Pole nazwa posortowane domyślnie');
        break;
      case 'asc':
        this.liveAnnouncer.announce('Pole nazwa posortowane rosnąco');
        break;
      case 'desc':
        this.liveAnnouncer.announce('Pole nazwa posortowane malejąco');
        break;
    }
  }

  private getExtension(filename: string): undefined | string {
    if (filename.indexOf('.') === -1) {
      return undefined;
    }
    return filename.split('.').pop();
  }

  private handleFileInput(pliki: FileList) {

    if (pliki.item(0) instanceof File) {
      const ext = this.getExtension(pliki.item(0)!.name);
      if (this.allowedExtension.indexOf(ext!.toLowerCase()) === -1) {
        this.pokazLoader = false;
        this.alertService.error('Wybrany plik jest niedozwolonego formatu.');
        return;
      } else if (this.sprawdzCzyPrzekraczaDopuszczalnaSume(pliki.item(0)!.size)) {
        this.pokazLoader = false;
        this.alertService.error('Suma rozmiarów plików jest zbyt duża. Dopuszczalna maksymalna suma wielkości plików to 25 MB.');
        return;
      } else if (pliki.item(0)!.name.length > 50) {
        this.pokazLoader = false;
        this.alertService.error('Nazwa załącznika nie może przekraczać 50 znaków.');
        return;
      } else if (this.zalaczniki?.some((f: any) => f.file === pliki.item(0)!.name)) {
        this.pokazLoader = false;
        this.alertService.error('Brak możliwości dodania pliku o takiej samej nazwie i formacie.');
        return;
      }
    }
      const plikDoDodania: File = pliki.item(0) as File;
      this.obsluzDodanieZalacznika.emit(plikDoDodania);

  }

  /**
   * Wywoływane w momencie usunięcia załącznika
   * @param nazwa
   */
  public onUsunZalacznik(nazwa: string): void {
    this.obsluzUsuniecieZalacznika.emit(nazwa);
  }

  /**
   * Sprawdza czy można dodać załącznik
   */
  public canAddAttachment(): boolean {
    return this.zalaczniki?.length >= this.maximumAttachmentsParam;
  }

  public sizeToMB(bytes: number) {
    return FileUtils.sizeToMB(bytes);
  }

  private sprawdzCzyPrzekraczaDopuszczalnaSume(rozmiar: number): boolean {
    return FileUtils.sprawdzCzyPrzekraczaDopuszczalnaSume(this.zalaczniki, rozmiar, this.dopuszczalnyRozmiarZalacznikow)
  }
}
