import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-list-broadcast',
  templateUrl: './page-list-broadcast.component.html',
  styleUrls: ['./page-list-broadcast.component.css']
})
export class PageListBroadcastComponent implements OnInit {
  selectedCategory: string = 'Notification';

  tableData = {
    Notification: [
      { id: 1, title: 'Record Update', description: 'Company division update', date: '01-03-2025', status: 'Unread',icon: 'bx bx-edit' },
      { id: 2, title: 'Navdeep Singh', description: 'New user registered', date: '28-02-2025', status: 'Unread',icon: 'bx bx-user' },
      { id: 3, title: 'Record Update', description: 'New tour update by company', date: '25-02-2025', status: 'Unread',icon: 'bx bx-edit' }
    ],
    Announcement: [
      { id: 1, title: 'Policy Change', description: 'Updated company policies', date: '27-02-2025', status: 'Unread',icon: 'bx bx-edit' },
      { id: 2, title: 'Annual Meeting', description: 'Upcoming company meeting', date: '25-02-2025', status: 'Read',icon: 'bx bx-group' }
    ],
    NewsFeed: [
      { id: 1, title: 'Industry Trends', description: 'Latest market trends', date: '26-02-2025', status: 'Unread',icon: 'bx bx-file' },
      
    ]
  };

  displayedData = this.tableData.Notification;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category && this.tableData[category]) {
        this.changeCategory(category);
      }
    });
  }

  changeCategory(category: string) {
    this.selectedCategory = category;
    this.displayedData = this.tableData[category];
  }

  getTableHeaderClass(): string {
    switch (this.selectedCategory) {
      case 'Notification':
        return 'table-success';
      case 'Announcement':
        return 'table-info';
      case 'NewsFeed':
        return 'table-warning';
      default:
        return '';
    }
  }
}
