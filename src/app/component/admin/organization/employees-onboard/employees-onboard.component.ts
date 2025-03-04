import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-onboard',
  templateUrl: './employees-onboard.component.html',
  styleUrls: ['./employees-onboard.component.css']
})
export class EmployeeOnboardComponent {
  employeeForm: FormGroup;
  step2form: FormGroup;
  vacancyForm!: FormGroup;
  waform: FormGroup;
  selectedZones: string[] = [];
  selectedRegions: string[] = [];
  selectedHeadquarters: string[] = [];
  isExistingEmployee: boolean = false;
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
  showReportingOfficer = false; // Flag to control visibility
  isZoneMultiSelect = false;
  isRegionMultiSelect = false;
  isHeadquarterMultiSelect = false;
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
  // Dropdown options
  divisions = [
    { value: 'division1', label: 'division1' },
    { value: 'division2', label: 'division2' },
    { value: 'division3', label: 'division3' }
  ];

  designations = [
    { value: 'CEO', label: 'CEO' },
    { value: 'ABM', label: 'ABM' },
    { value: 'RBM', label: 'RBM' },
    { value: 'MR', label: 'MR' }
  ];

  reportingOfficers = [
    { value: 'transfer', label: 'Officer 1' },
    { value: 'promotion', label: 'Officer 2' },
    { value: 'demotion', label: 'Officer 3' }
  ];
  showBottomCard: boolean = false;
  reportingOfficerFlag: boolean = false;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeType: [''],
      vacancyType: [''],
      vacancyDetails: [''],

      createVacancy: [false],
    
      reportingOfficer: [''],
      zone: [[]],
      region: [[]],
      headquarters: [[]],
      reportingHQ: ['']
    });
    this.step2form = this.fb.group({
      division: ['', Validators.required],
      designation: ['', Validators.required],
      joiningThrough: ['', Validators.required],
      zone: [''],
      region: [''],
      headquarter: ['']
    });
    this.waform = this.fb.group({

      zone: [''],
      region: [''],
      headquarter: ['']
    });
    this.vacancyForm = this.fb.group({
      vacancyType: ['', Validators.required],
      vacancySelection: [''], // Only required if "Existing Vacancy" is selected
      importCustomers: [false],
      vacancyCode: ['']
    });
    this.vacancyForm.get('vacancyType')?.valueChanges.subscribe(value => {
      if (value === 'existing') {
        this.vacancyForm.get('vacancySelection')?.setValidators(Validators.required);
      } else {
        this.vacancyForm.get('vacancySelection')?.clearValidators();
      }
      this.vacancyForm.get('vacancySelection')?.updateValueAndValidity();
    });

    this.step2form.get('designation')?.valueChanges.subscribe((designation) => {
      this.updateSelectionMode(designation);
    });
    // Listen for division changes
    this.step2form.get('designation')?.valueChanges.subscribe(value => {
      this.showReportingOfficer = value !== 'CEO'; // Hide Reporting Officer if CEO is selected
    });

  }
  updateSelectionMode(designation: string): void {
    this.isZoneMultiSelect = designation === 'CEO' || designation === 'ABM';
    this.isRegionMultiSelect = designation === 'RBM';
    this.isHeadquarterMultiSelect = designation === 'MR';
  }
  isInvalid(field: string): boolean {
    return this.step2form.get(field)?.invalid && this.step2form.get(field)?.touched;
  }
  onEmployeeTypeChange() {
    const selectedType = this.employeeForm.get('employeeType')?.value;
    this.isExistingEmployee = selectedType === 'existingEmployee';

    if (!this.isExistingEmployee) {
      this.employeeForm.patchValue({
        forText: '',
        createVacancy: false
      });
    }
  }
  addSelection(event: any, type: string) {
    const selectedValue = event.target.value;
    const selectedText = event.target.options[event.target.selectedIndex].text; // Get selected name

    if (!selectedValue) return;

    switch (type) {
      case 'zone':
        this.selectedZones.push(selectedText);
        break;
      case 'region':
        this.selectedRegions.push(selectedText);
        break;
      case 'headquarter':
        this.selectedHeadquarters.push(selectedText);
        break;
    }

    // Reset dropdown selection
    event.target.value = "";
  }


  removeSelection(item: string, type: string) {
    switch (type) {
      case 'zone':
        const zoneIndex = this.selectedZones.indexOf(item);
        if (zoneIndex !== -1) this.selectedZones.splice(zoneIndex, 1);
        break;
      case 'region':
        const regionIndex = this.selectedRegions.indexOf(item);
        if (regionIndex !== -1) this.selectedRegions.splice(regionIndex, 1);
        break;
      case 'headquarter':
        const hqIndex = this.selectedHeadquarters.indexOf(item);
        if (hqIndex !== -1) this.selectedHeadquarters.splice(hqIndex, 1);
        break;
    }
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
