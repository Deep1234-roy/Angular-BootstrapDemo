import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  closeResult = '';
  progressbar:any;
  alertrequired=false;
  progressBarRequired = false;
  constructor(private modalService: NgbModal) {
    this.progressbar = 0;
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SaveData(){
    this.progressBarRequired=true;
    new Observable(item=>{
      setTimeout(()=>{
        item.next(30);
      },1000);
      setTimeout(()=>{
        item.next(60);
      },3000);
      setTimeout(()=>{
        item.next(100);
        this.alertrequired=true;
        this.progressBarRequired=false;
      },4000);
    }).subscribe(result => {
      this.progressbar = result;
    })
  }
}


