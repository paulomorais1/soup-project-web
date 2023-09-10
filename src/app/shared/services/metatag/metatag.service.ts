import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import type Metatag from './metatag.model';

@Injectable({
  providedIn: 'root'
})

export class MetatagService {
  constructor(private meta: Meta, private title: Title) { }

  updateMetatags(metatag: Metatag): void {
    const tagsToUpdate = {
      description: metatag.description,
      'og:title': metatag.title,
      'og:description': metatag.description,
    };

    this.title.setTitle(metatag.title);
    this.meta.updateTag(tagsToUpdate);
  }
}
