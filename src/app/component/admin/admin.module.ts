import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LightboxModule } from 'ngx-lightbox';
import { SimplebarAngularModule } from 'simplebar-angular';


// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';


// dropzone
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

// bootstrap module
import { NgxSliderModule } from 'ngx-slider-v2';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AddBroadcastComponent } from './master/add-broadcast/add-broadcast.component';
import { AddMenuComponent } from './master/add-menu/add-menu.component';
import { AddRolesComponent } from './master/add-roles/add-roles.component';
import { AddTasksComponent } from './master/add-tasks/add-tasks.component';
import { BroadcastComponent } from './master/broadcast/broadcast.component';
import { AddCfaComponent } from './master/cfa/add-cfa/add-cfa.component';
import { CfaComponent } from './master/cfa/cfa/cfa.component';
import { EditCfaComponent } from './master/cfa/edit-cfa/edit-cfa.component';
import { ViewCfaComponent } from './master/cfa/view-cfa/view-cfa.component';
import { AddChemistComponent } from './master/chemist/add-chemist/add-chemist.component';
import { ChemistComponent } from './master/chemist/chemist/chemist.component';
import { EditChemistComponent } from './master/chemist/edit-chemist/edit-chemist.component';
import { ViewChemistComponent } from './master/chemist/view-chemist/view-chemist.component';
import { CreateMenuComponent } from './master/create-menu/create-menu.component';
import { CreateProductUserComponent } from './master/create-product-user/create-product-user.component';
import { AddDoctorComponent } from './master/doctor/add-doctor/add-doctor.component';
import { DoctorComponent } from './master/doctor/doctor/doctor.component';
import { EditDoctorComponent } from './master/doctor/edit-doctor/edit-doctor.component';
import { ViewDoctorComponent } from './master/doctor/view-doctor/view-doctor.component';
import { EditBroadcastComponent } from './master/edit-broadcast/edit-broadcast.component';
import { EditMenuComponent } from './master/edit-menu/edit-menu.component';
import { EditProductUserComponent } from './master/edit-product-user/edit-product-user.component';
import { EditRolesComponent } from './master/edit-roles/edit-roles.component';
import { EditTasksComponent } from './master/edit-tasks/edit-tasks.component';
import { PermissionComponent } from './master/permission/permission.component';
import { PermissioncategoryComponent } from './master/permissioncategory/permissioncategory.component';
import { ProductUserComponent } from './master/product-user/product-user.component';
import { AddRetailerComponent } from './master/retailer/add-retailer/add-retailer.component';
import { EditRetailerComponent } from './master/retailer/edit-retailer/edit-retailer.component';
import { RetailerComponent } from './master/retailer/retailer/retailer.component';
import { ViewRetailerComponent } from './master/retailer/view-retailer/view-retailer.component';
import { RolesComponent } from './master/roles/roles.component';
import { AddStockistComponent } from './master/stockist/add-stockist/add-stockist.component';
import { EditStockistComponent } from './master/stockist/edit-stockist/edit-stockist.component';
import { StockistComponent } from './master/stockist/stockist/stockist.component';
import { ViewStockistComponent } from './master/stockist/view-stockist/view-stockist.component';
import { TasksComponent } from './master/tasks/tasks.component';
import { UserPasswordComponent } from './master/user-password/user-password.component';
import { UserProfileComponent } from './master/user-profile/user-profile.component';
import { ViewBroadcastComponent } from './master/view-broadcast/view-broadcast.component';
import { ViewMenuComponent } from './master/view-menu/view-menu.component';
import { ViewProductUserComponent } from './master/view-product-user/view-product-user.component';
import { ViewRolesComponent } from './master/view-roles/view-roles.component';
import { ViewTasksComponent } from './master/view-tasks/view-tasks.component';
import { AddCompanyComponent } from './organization/add-company/add-company.component';
import { AddDivisionComponent } from './organization/add-division/add-division.component';
import { AddEmployeeComponent } from './organization/add-employee/add-employee.component';
import { CompanyLevelConfigComponent } from './organization/company-level-config/company-level-config.component';
import { CompanyComponent } from './organization/company/company.component';
import { CompanyroleComponent } from './organization/companyrole/companyrole.component';
import { DivisionComponent } from './organization/division/division.component';
import { DivisonLevelConfigComponent } from './organization/divison-level-config/divison-level-config.component';
import { EditCompanyComponent } from './organization/edit-company/edit-company.component';
import { EditEmployeeComponent } from './organization/edit-employee/edit-employee.component';
import { EmpDivisonMapComponent } from './organization/emp-divison-map/emp-divison-map.component';
import { EmployeeOnboardComponent } from './organization/employees-onboard/employees-onboard.component';
import { EmployeesComponent } from './organization/employees/employees.component';
import { FamilydetailsComponent } from './organization/familydetails/familydetails.component';
import { GeographyComponent } from './organization/geography/geography.component';
import { Leave1Component } from './organization/leave1/leave1.component';
import { Leave2Component } from './organization/leave2/leave2.component';
import { MtpApprovalUpdateComponent } from './organization/mtp-approval-update/mtp-approval-update.component';
import { MtpTourApprovalComponent } from './organization/mtp-tour-approval/mtp-tour-approval.component';
import { MtpTourLockUnlockComponent } from './organization/mtp-tour-lock-unlock/mtp-tour-lock-unlock.component';
import { MtpTourPlanUpdateComponent } from './organization/mtp-tour-plan-update/mtp-tour-plan-update.component';
import { MtpTourPlanViewComponent } from './organization/mtp-tour-plan-view/mtp-tour-plan-view.component';
import { MtpTourPlanComponent } from './organization/mtp-tour-plan/mtp-tour-plan.component';
import { StpTourPlanComponent } from './organization/stp-tour-plan/stp-tour-plan.component';
import { StpTourUpdateComponent } from './organization/stp-tour-update/stp-tour-update.component';
import { StpTourViewEditComponent } from './organization/stp-tour-view-edit/stp-tour-view-edit.component';
import { StpTourViewComponent } from './organization/stp-tour-view/stp-tour-view.component';
import { TourPlanComponent } from './organization/tour-plan/tour-plan.component';
import { ViewCompanyComponent } from './organization/view-company/view-company.component';
import { ViewEmployeeComponent } from './organization/view-employee/view-employee.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
        // Change this to your upload POST address:
        url: 'https://httpbin.org/post',
        maxFilesize: 50,
        acceptedFiles: 'image/*'
};
@NgModule(
        {
                declarations: [CompanyComponent, DivisionComponent, GeographyComponent, CompanyroleComponent,EmployeeOnboardComponent, EmployeesComponent, EmpDivisonMapComponent,AddCompanyComponent, Leave1Component, CompanyLevelConfigComponent, DivisonLevelConfigComponent, MtpTourPlanComponent, MtpTourPlanUpdateComponent, MtpTourPlanViewComponent, StpTourPlanComponent, StpTourViewComponent, StpTourUpdateComponent, StpTourViewEditComponent, MtpTourApprovalComponent, MtpTourLockUnlockComponent, MtpApprovalUpdateComponent, TourPlanComponent, ViewCompanyComponent, EditCompanyComponent, AddEmployeeComponent, EditEmployeeComponent, ViewEmployeeComponent, PermissioncategoryComponent, AddDivisionComponent, PermissionComponent, TasksComponent, AddTasksComponent, EditTasksComponent, CreateMenuComponent, AddMenuComponent, EditMenuComponent, RolesComponent, AddRolesComponent, EditRolesComponent, FamilydetailsComponent, ViewTasksComponent, ViewMenuComponent, ViewRolesComponent, ProductUserComponent, CreateProductUserComponent, EditProductUserComponent, ViewProductUserComponent, BroadcastComponent, AddBroadcastComponent, EditBroadcastComponent, ViewBroadcastComponent, UserProfileComponent, UserPasswordComponent,

                        EditCfaComponent,
                        CfaComponent,
                        ViewCfaComponent,
                        AddCfaComponent,

                        EditChemistComponent,
                        AddChemistComponent,
                        ChemistComponent,
                        ViewChemistComponent,

                        DoctorComponent,
                        AddDoctorComponent,
                        ViewDoctorComponent,
                        EditDoctorComponent,

                        StockistComponent,
                        AddStockistComponent,
                        ViewStockistComponent,
                        EditStockistComponent,

                        RetailerComponent,
                        AddRetailerComponent,
                        ViewRetailerComponent,
                        EditRetailerComponent,
                ],
                imports: [
                        FormsModule,
                        CommonModule,
                        BsDropdownModule.forRoot(),
                        ModalModule.forRoot(),
                        AdminRoutingModule,
                        NgApexchartsModule,
                        ReactiveFormsModule,
                        FullCalendarModule,
                        TabsModule.forRoot(),
                        TooltipModule.forRoot(),
                        CollapseModule.forRoot(),
                        AlertModule.forRoot(),
                        SimplebarAngularModule,
                        LightboxModule,
                        PickerModule,
                        TabsModule.forRoot(),
                        ModalModule.forRoot(),
                        FormsModule,
                        SlickCarouselModule,
                        BsDropdownModule.forRoot(),
                        ReactiveFormsModule,
                        NgxSliderModule,
                        NgSelectModule,
                        PaginationModule.forRoot(),
                        BsDatepickerModule.forRoot(),
                        DropzoneModule,
                        PagetitleComponent,
                        Leave2Component
                ],
                providers: [provideHttpClient(withInterceptorsFromDi()),
                        DatePipe, BsDropdownConfig,
                {
                        provide: DROPZONE_CONFIG,
                        useValue: DEFAULT_DROPZONE_CONFIG,

                }
                ]
        })
export class AdminModule { }
