import { Component } from '@angular/core';

import { contacts, navigationItems, socialMedias } from '@shared/mocks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  contacts = contacts.slice(0, 3);
  navigationItems = navigationItems;
  socialMedias = socialMedias;
}
