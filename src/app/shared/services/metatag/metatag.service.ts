import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import type Metatags from './metatags.model';

@Injectable({
  providedIn: 'root'
})

export class MetatagService {
  constructor(private meta: Meta) { }

  updateMetatags(metatags: Metatags): void {
    const tagsToUpdate = {
      title: metatags.title,
      description: metatags.description,
      url: metatags.url,
      'og:title': metatags.title,
      'og:description': metatags.description,
      'og:url': metatags.url
    };

    this.meta.updateTag(tagsToUpdate);
  }
}
