import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-initial-section',
  templateUrl: './initial-section.component.html',
  styleUrls: ['./initial-section.component.scss'],
  imports: [
    CommonModule,
    MatIconModule
  ]
})

export class InitialSectionComponent { }
