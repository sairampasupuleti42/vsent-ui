import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'vs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: any = {
  };

  constructor(private adminSvc: AdminService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.adminSvc.fetchStats().subscribe((response: any) => {
      if (response.data) {
        this.stats = response.data
      }
    });
  }

}
