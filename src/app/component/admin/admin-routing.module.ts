import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';
import { CompanyComponent } from './organization/company/company.component';
import { DivisionComponent } from './organization/division/division.component';
import { GeographyComponent } from './organization/geography/geography.component';
import { CompanyroleComponent } from './organization/companyrole/companyrole.component';
import { EmployeesComponent } from './organization/employees/employees.component';
import { EmpDivisonMapComponent } from './organization/emp-divison-map/emp-divison-map.component';
import { AddCompanyComponent } from './organization/add-company/add-company.component';
import { Leave1Component } from './organization/leave1/leave1.component';
import { Leave2Component } from './organization/leave2/leave2.component';
import { CompanyLevelConfigComponent } from './organization/company-level-config/company-level-config.component';
import { DivisonLevelConfigComponent } from './organization/divison-level-config/divison-level-config.component';
import { MtpTourPlanComponent } from './organization/mtp-tour-plan/mtp-tour-plan.component';
import { MtpTourPlanUpdateComponent } from './organization/mtp-tour-plan-update/mtp-tour-plan-update.component';
import { MtpTourPlanViewComponent } from './organization/mtp-tour-plan-view/mtp-tour-plan-view.component';
import { StpTourPlanComponent } from './organization/stp-tour-plan/stp-tour-plan.component';
import { StpTourUpdateComponent } from './organization/stp-tour-update/stp-tour-update.component';
import { StpTourViewComponent } from './organization/stp-tour-view/stp-tour-view.component';
import { MtpTourApprovalComponent } from './organization/mtp-tour-approval/mtp-tour-approval.component';
import { MtpApprovalUpdateComponent } from './organization/mtp-approval-update/mtp-approval-update.component';
import { MtpTourLockUnlockComponent } from './organization/mtp-tour-lock-unlock/mtp-tour-lock-unlock.component';
import { TourPlanComponent } from './organization/tour-plan/tour-plan.component';
import { ViewCompanyComponent } from './organization/view-company/view-company.component';
import { EditCompanyComponent } from './organization/edit-company/edit-company.component';
import { AddEmployeeComponent } from './organization/add-employee/add-employee.component';
import { EditEmployeeComponent } from './organization/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './organization/view-employee/view-employee.component';
import { PermissioncategoryComponent } from './master/permissioncategory/permissioncategory.component';
import { AddDivisionComponent } from './organization/add-division/add-division.component';
import { PermissionComponent } from './master/permission/permission.component';
import { TasksComponent } from './master/tasks/tasks.component';
import { AddTasksComponent } from './master/add-tasks/add-tasks.component';
import { EditTasksComponent } from './master/edit-tasks/edit-tasks.component';
import { CreateMenuComponent } from './master/create-menu/create-menu.component';
import { AddMenuComponent } from './master/add-menu/add-menu.component';
import { EditMenuComponent } from './master/edit-menu/edit-menu.component';
import { RolesComponent } from './master/roles/roles.component';
import { AddRolesComponent } from './master/add-roles/add-roles.component';
import { EditRolesComponent } from './master/edit-roles/edit-roles.component';
import { FamilydetailsComponent } from './organization/familydetails/familydetails.component';
import { ViewTasksComponent } from './master/view-tasks/view-tasks.component';
import { ViewMenuComponent } from './master/view-menu/view-menu.component';
import { ViewRolesComponent } from './master/view-roles/view-roles.component';
import { ProductUserComponent } from './master/product-user/product-user.component'; 
import { CreateProductUserComponent } from './master/create-product-user/create-product-user.component';
import { ViewProductUserComponent } from './master/view-product-user/view-product-user.component';
import { EditProductUserComponent } from './master/edit-product-user/edit-product-user.component';
import { BroadcastComponent } from './master/broadcast/broadcast.component';
import { AddBroadcastComponent } from './master/add-broadcast/add-broadcast.component';
import { EditBroadcastComponent } from './master/edit-broadcast/edit-broadcast.component';
import { ViewBroadcastComponent } from './master/view-broadcast/view-broadcast.component';
import { UserProfileComponent } from './master/user-profile/user-profile.component';
import { UserPasswordComponent } from './master/user-password/user-password.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'division', component: DivisionComponent },
  { path: 'companyrole', component: CompanyroleComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'empdivisonmap', component: EmpDivisonMapComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'view-company', component: ViewCompanyComponent },
  { path: 'edit-company', component: EditCompanyComponent },
  { path: 'leave1', component: Leave1Component },
  { path: 'leave2', component: Leave2Component },
  { path: 'companylevelconfig', component: CompanyLevelConfigComponent},
  { path: 'divisionlevelconfig', component: DivisonLevelConfigComponent},
  { path: 'mtptourplan', component: MtpTourPlanComponent},
  { path:  'mtptourplanupdate', component: MtpTourPlanUpdateComponent},
  { path: 'mtptourplanview', component: MtpTourPlanViewComponent},
  { path: 'stptourplan', component: StpTourPlanComponent},
  { path: 'stptourupdate', component: StpTourUpdateComponent},
  { path: 'stptourview', component: StpTourViewComponent},
  { path: 'mtptourapproval', component: MtpTourApprovalComponent},
  { path: 'mtpapprovalupdate', component: MtpApprovalUpdateComponent},
  { path: 'mtptourlockunlock', component: MtpTourLockUnlockComponent},
  { path: 'tourplan', component: TourPlanComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'edit-employee', component: EditEmployeeComponent},
  { path: 'view-employee', component: ViewEmployeeComponent},
  { path: 'permissioncategory', component: PermissioncategoryComponent},
  { path: 'add-division', component: AddDivisionComponent},
  { path: 'permission', component: PermissionComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'add-tasks', component: AddTasksComponent},
  { path: 'edit-tasks', component: EditTasksComponent},
  { path: 'create-menu', component: CreateMenuComponent},
  { path: 'add-menu', component: AddMenuComponent},
  { path: 'edit-menu', component: EditMenuComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'add-roles', component: AddRolesComponent},
  { path: 'edit-roles', component: EditRolesComponent},
  { path: 'familydetails', component: FamilydetailsComponent},
  { path: 'view-tasks', component: ViewTasksComponent},
  { path: 'view-menu', component: ViewMenuComponent},
  { path: 'view-roles', component: ViewRolesComponent},
  { path: 'productuser', component: ProductUserComponent},
  { path: 'create-product-user', component: CreateProductUserComponent},
  { path: 'view-product-user', component: ViewProductUserComponent},
  { path: 'edit-product-user', component: EditProductUserComponent},
  { path: 'broadcast', component: BroadcastComponent},
  { path: 'add-broadcast', component: AddBroadcastComponent},
  { path: 'edit-broadcast', component: EditBroadcastComponent},
  { path: 'view-broadcast', component: ViewBroadcastComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-password', component: UserPasswordComponent},
  { path: 'dashboards', loadChildren: () => import('../../pages/dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('../../pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'crypto', loadChildren: () => import('../../pages/crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('../../pages/email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('../../pages/invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('../../pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('../../pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('../../pages/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'blog', loadChildren: () => import('../../pages/blog/blog.module').then(m => m.BlogModule) },
  { path: 'pages', loadChildren: () => import('../../pages/utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('../../pages/ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('../../pages/form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('../../pages/tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('../../pages/icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('../../pages/chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('../../pages/maps/maps.module').then(m => m.MapsModule) },
  { path: 'jobs', loadChildren: () => import('../../pages/jobs/jobs.module').then(m => m.JobsModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
