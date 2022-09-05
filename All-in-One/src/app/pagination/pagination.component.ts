import { Component, OnInit } from '@angular/core';
import { UserPaginationServiceService } from '../user-pagination-service.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private ups: UserPaginationServiceService) { }

  ngOnInit(): void {
    this.get_all_data();
  }

  POSTS: any;
  pageNo: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  get_all_data(): void {
      this.ups.get_All_Data().subscribe(
        result=> {
          this.POSTS = result;
          console.log(this.POSTS);
        }, error=> {
          console.log(error)
        }   
      )
  }

// ======================  : Pagination Controls : ======================

// ======================  : Table Size Controls : ==================
  on_table_data_change(event: any) {
      this.pageNo = event;
      this.get_all_data();
  }

//  =====================  : Page Number Controls : ==================
  on_table_size_change(event: any) {
      this.tableSize = event.target.value;
      this.pageNo = 1;
      this.get_all_data();
  }
  
  
}
