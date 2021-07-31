import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  constructor(public indexService: IndexService) { }

  ngOnInit(): void {
    this.getIndex();
  }

  getIndex(){
    this.indexService.getIndex().subscribe(
      res => {
        this.indexService.index = res;
      },
      err => console.error(err)
    );
  }
}
