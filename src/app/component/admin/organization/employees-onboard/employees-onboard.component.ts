import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees-onboard',
  templateUrl: './employees-onboard.component.html',
  styleUrls: ['./employees-onboard.component.css']
})
export class EmployeeOnboardComponent {
  employeeForm: FormGroup;
  showJoiningThrough = false;
  showDesignationSection = false;
  showCreateVacancy = false;
  hideReportingOfficer = true;
  hideRegions = true;
  hideHeadquarters = true;  // Initially hidden
  hideZones = true;
  hideReportingHQ = true;  // Initially hidden
  showVacancyDetails = false;
  showVacancyType = false;
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];
  zones = [
    { id: 'zone1', name: 'Zone 1' },
    { id: 'zone2', name: 'Zone 2' },
    { id: 'zone3', name: 'Zone 3' },
    { id: 'zone4', name: 'Zone 4' }
  ];

  regions = [
    { id: 'region1', name: 'Region 1' },
    { id: 'region2', name: 'Region 2' },
    { id: 'region3', name: 'Region 3' }
  ];

  headquarters = [
    { id: 'hq1', name: 'Headquarters 1' },
    { id: 'hq2', name: 'Headquarters 2' },
    { id: 'hq3', name: 'Headquarters 3' }
  ];
  showBottomCard: boolean = false;
  reportingOfficerFlag: boolean = false;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeType: [''],
      vacancyType: [''],
      vacancyDetails: [''],
      joiningThrough: [''],
      createVacancy: [false],
      designation: [''],
      division: [''],
      reportingOfficer: [''],
      zone: [[]],
      region: [[]],
      headquarters: [[]],
      reportingHQ: ['']
    });
  }

  onEmployeeTypeChange(): void {
    const employeeType = this.employeeForm.get('employeeType')?.value;
    
    this.showJoiningThrough = employeeType === 'existingEmployee';
    this.showCreateVacancy = employeeType === 'existingEmployee';
    // this.showVacancyType = !!employeeType;

    this.showDesignationSection = true;
    this.showVacancyDetails = false;
    this.employeeForm.patchValue({ vacancyType: '', vacancyDetails: '' });
  }

  onVacancyTypeChange(): void {
    const vacancyType = this.employeeForm.get('vacancyType')?.value;

    this.showDesignationSection = vacancyType === 'newVacancy' || vacancyType === 'existingVacancy';
    this.showVacancyDetails = vacancyType === 'existingVacancy';
    // if (designation) {
      this.showBottomCard = true;
    // }
  }

  onDesignationChange(): void {
    this.showVacancyType = true;
    this.reportingOfficerFlag = true
    const designation = this.employeeForm.get('designation')?.value;
    // this.hideHeadquarters = !designation; // Show only when a designation is selected
    // this.hideReportingHQ = !designation; // Show only when a designation is selected

    // this.hideReportingOfficer = designation === 'RBM' || designation === 'MR';
    // this.hideZones = designation === 'RBM' || designation === 'MR';
    // this.hideRegions = designation === 'MR';
  }
}
