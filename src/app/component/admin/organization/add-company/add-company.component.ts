import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';

import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent  implements OnInit{

  validationForm: UntypedFormGroup; // bootstrap validation form
  tooltipvalidationform: UntypedFormGroup; // bootstrap tooltip validation form
  typeValidationForm: UntypedFormGroup; // type validation form
  rangeValidationForm: UntypedFormGroup; // range validation form
  // Form submition
  submit: boolean;
  formsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  breadCrumbItems: Array<{}>;
  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit() {

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Validation', active: true }];


    this.validationForm = this.formBuilder.group({
      Code: ['', Validators.required],
      FullName: ['', Validators.required],
      ShortName: ['', Validators.required],
      Website: ['', [Validators.required, Validators.pattern('https?://.+')]],
      UploadLogo: ['', Validators.required],
      Description: ['', Validators.required],
      Description11: ['', Validators.required],
      Address: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      TotalExpectedUsers: ['', [Validators.required, Validators.min(1)]],
      ExpectedUsers: ['', [Validators.required, Validators.min(1)]],
      BusinessType: ['', Validators.required],
      Industry: ['', Validators.required],
      AnnualTurnover: ['', Validators.required],

      // Contact Person Details
      Name: ['', Validators.required],
      EmailID: ['', [Validators.required, Validators.email]],
      Mobile1: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Mobile2: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      SPOCDesignation: ['', Validators.required],
      DOB: ['', Validators.required],
      DOA:  ['', Validators.required],

      // Stakeholder Details
      StakeholderName: ['', Validators.required],
      StakeholderEmailID: ['', [Validators.required, Validators.email]],
      StakeholderMobile1: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      StakeholderMobile2: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]]
    });

    this.submit = false;
    this.formsubmit = false;

  }


 /**
   * Returns form
   */
 get form() {
  return this.validationForm.controls;
}

/**
 * Bootsrap validation form submit method
 */
validSubmit() {
  this.submit = true;
}

/**
 * returns tooltip validation form
 */
get formData() {
  return this.tooltipvalidationform.controls;
}

/**
 * Bootstrap tooltip form validation submit method
 */
formSubmit() {
  this.formsubmit = true;
}

/**
 * Returns the type validation form
 */
get type() {
  return this.typeValidationForm.controls;
}

/**
 * Type validation form submit data
 */
typeSubmit() {
  this.typesubmit = true;
}

/**
 * Returns the range validation form
 */
get range() {
  return this.rangeValidationForm.controls;
}

/**
 * range validation submit data
 */
rangeSubmit() {
  this.rangesubmit = true;
}
}
