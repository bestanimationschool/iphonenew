import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // imports: [NgbDatepickerModule],
})
export class AppComponent {
  title = 'owl';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides: any = [
    { id: 1, img: "https://via.placeholder.com/600/92c952" },
    { id: 2, img: "https://via.placeholder.com/600/771796" },
    { id: 3, img: "https://via.placeholder.com/600/24f355" },
    { id: 4, img: "https://via.placeholder.com/600/d32776" },
    { id: 5, img: "https://via.placeholder.com/600/f66b97" },
    { id: 6, img: "https://via.placeholder.com/600/56a8c2" },
    { id: 7, img: "https://via.placeholder.com/600/b0f7cc" },
    { id: 8, img: "assets/images/ajay.jpg" },
  ];
  //slidesStore: any;

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
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
}

