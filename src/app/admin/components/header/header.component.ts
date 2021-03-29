import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/common/token.service';

@Component({
  selector: 'vs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navMenus: any = [];
  tokenData: any;
  constructor(private tokenSvc: TokenService, private router: Router) { }

  ngOnInit() {
    this.tokenData = this.tokenSvc.getUser();
    this.navMenus = [{
      title: "Orders",
      subMenu: true,
      items: [
        { path: "/admin/orders/counter", title: "Counter Order" },
        { path: "/admin/orders/delivery", title: "Delivery Order" },
        { path: "/admin/orders/unpaid", title: "Unpaid Orders" },
        { path: "/admin/orders/daily-report", title: "Daily Report" },
        { path: "/admin/orders", title: "All Orders" }
      ]

    }, {
      title: "Inventory",
      subMenu: true,
      items: [
        { path: "/admin/inventory/products", title: "Products" },
        { path: "/admin/inventory/variants", title: "Variants" },
        { path: "/admin/inventory/commissions", title: "Commissions", hidden: true },
        { path: "/admin/inventory/daily-settings", title: "Daily Settings" },
        { path: "/admin/inventory/inventory-changes", title: "Inventory Changes" },
        { path: "/admin/inventory/update-inventory", title: "Update Inventory" }
      ]
    },
    {
      title: "Manage Users",
      subMenu: true,
      items: [
        { path: "/account/users/list", title: "All Users" },
        { path: "/account/users/register", title: "Add New User" }
      ]
    }
    ]
  }
  logout() {
    this.tokenSvc.signOut();
    this.router.navigate(['/account/login'])
  }

}
