import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  leftMenu = [
    {
      displayName: 'Menu1',
      route: 'menu1',
      subModules: [
        { displayName: 'SubMenu1.1', route: 'menu1/submenu1.1' },
        { displayName: 'SubMenu1.2', route: 'menu1/submenu1.2' },
      ],
    },
    {
      displayName: 'Menu2',
      route: 'menu2',
      subModules: [
        { displayName: 'SubMenu2.1', route: 'menu2/submenu2.1' },
        { displayName: 'SubMenu2.2', route: 'menu2/submenu2.2' },
      ],
    },
  ];

  selectedMenu: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  menuClick(menu: string, subMenu?: string) {
    const menuIndex = this.selectedMenu.indexOf(menu);

    // If the clicked menu is not selected, select it
    if (menuIndex === -1) {
      this.selectedMenu.push(menu);
    } else {
      // If the menu is already selected, check for submenu
      if (subMenu) {
        const subMenuIndex = this.selectedMenu.indexOf(subMenu);
        if (subMenuIndex === -1) {
          this.selectedMenu.push(subMenu); // Select the submenu
        } else {
          this.selectedMenu.splice(subMenuIndex, 1); // Deselect the submenu
        }
      } else {
        this.selectedMenu.splice(menuIndex, 1); // Deselect the main menu
      }
    }

    // Navigate to the correct route
    if (subMenu) {
      this.router.navigate([`/menu/${menu}/${subMenu.split('/').pop()}`]); // Navigate to submenu
    } else {
      this.router.navigate([`/menu/${menu}`]); // Navigate to main menu
    }

    console.log(this.selectedMenu); // Log the current state
  }
}
