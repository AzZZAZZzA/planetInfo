import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ModalService } from '../shared/modal.service';
import {WorkPlaceComponent} from '../work-place/work-place.component'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  display$:Observable<'open'|'close'>

  constructor( private modalService: ModalService,public workPlaceComponent:WorkPlaceComponent) {}

  ngOnInit(): void {
    this.display$= this.modalService.watch()


  }
  close(){
    this.modalService.close()
  }

}
