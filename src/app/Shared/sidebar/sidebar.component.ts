import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { label: 'Home', icon: 'pi pi-home mr-2' },
    { label: 'Pacientes', icon: 'pi pi-users mr-2'},
    { label: 'Solicitações', icon: 'pi pi-calendar-plus mr-2' },
    { label: 'Atendimentos', icon: 'pi pi-briefcase mr-2' },
    { label: 'Dashboards', icon: 'pi pi-cog mr-2' }
];

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }
  sidebarVisible: boolean = true;
}
