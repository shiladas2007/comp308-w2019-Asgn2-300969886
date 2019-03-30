import { Component, OnInit } from '@angular/core';
import { ContactmeListService } from 'src/app/services/contactme-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Contactme } from 'src/app/models/contactme';


@Component({
  selector: 'app-contactme-details',
  templateUrl: './contactme-details.component.html',
  styleUrls: ['./contactme-details.component.css']
})
export class ContactmeDetailsComponent implements OnInit {
  title: string;
  contactme: Contactme;
  constructor(private activatedRoute: ActivatedRoute,
              private flashMessage: FlashMessagesService,
              private contactmeListService: ContactmeListService,
              private router: Router) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contactme = new Contactme();
  }
  onDetailsPageSubmit(): void {
      this.contactmeListService.addContactme(this.contactme).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contactme/contactme-list']);
        } else {
          this.flashMessage.show('Add Contact me Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contactme/contactme-list']);
        }
      });
  }

}
