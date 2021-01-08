import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit(): void {
    this.loggerService.log('... initializing header component from core module.');
  }

}
