import { Component, OnInit } from '@angular/core';
import { ContactmeListService } from 'src/app/services/contactme-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Contactme } from 'src/app/models/contactme';

@Component({
  selector: 'app-contactme-list',
  templateUrl: './contactme-list.component.html',
  styleUrls: ['./contactme-list.component.css']
})
export class ContactmeListComponent implements OnInit {
  contactmes: Contactme[];
  constructor(
    private contactmeListService: ContactmeListService,
    private flashMessage: FlashMessagesService,
    private router: Router

  ) { }

  ngOnInit() {
    this.contactmes = new Array<Contactme>();

    this.displayContactmeList();
  }
  displayContactmeList(): void {
    this.contactmeListService.getList().subscribe(data => {
      if(data.success) {
        this.contactmes = data.contactmeList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
