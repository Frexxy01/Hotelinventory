import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'hotelinventoryapp-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule, MatIconModule, MatCheckboxModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  constructor(

    private fb: FormBuilder,
    private bookingSevice: BookingService,
    private route: ActivatedRoute
  ) {}

 

  bookingForm !: FormGroup

  get guests() {
    return this.bookingForm.get('guests') as FormArray
  }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId')
    console.log(roomId)
    this.bookingForm = this.fb.group({
      bookingId:  [''],
      roomId: new FormControl({
        value: roomId || '',
         disabled: true
      }),
      guestEmail: ['', {
        updateOn: 'blur',
        validators:  [Validators.required, Validators.email]
      }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', {
        updatedOn: 'blur',
        validators: [Validators.required]
      }],
      guestName: ['', [Validators.minLength(5), CustomValidator.ValidateName,CustomValidator.ValidateSpecialChar('*')]  ],
      guestAddress: [''],
      tnc: [false, [Validators.requiredTrue]],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        City: ['', [Validators.required]],
        State: [''],
        Country: [''],
        ZipCode: ['', [Validators.required]],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: ['', [Validators.required]],
        age: new FormControl(''),
      })])
    }, {
      updateOn: 'change', validators: [CustomValidator.ValidateDate]
    })
    this.getBookingData()

    // this.bookingForm.valueChanges.subscribe( (data)=> {
    //   this.bookingSevice.bookRoom(data).subscribe((data) => { })
    // })

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingSevice.bookRoom(data))
    ).subscribe((data) => {
      console.log(data)
    })
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue())
    console.log(this.bookingForm.get('address'));

    // this.bookingSevice.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
    //   console.log(data)
    // })

    // this.bookingForm.reset({
    //   bookingId: '',
    //   roomId:  '',
    //   guestEmail: '',
    //   checkinDate:  '',
    //   checkoutDate:  '',
    //   bookingStatus:  '',
    //   bookingAmount:  '',
    //   bookingDate:  '',
    //   mobileNumber:  '',
    //   guestName:  '',
    //   guestAddress:  '',
    //   tnc: false, 
    //   address: this.fb.group({
    //     addressLine1:  '',
    //     addressLine2:  '',
    //     City:  '',
    //     State:  '',
    //     Country:  '',
    //     ZipCode:  '',
    //   }),
    //   guests: this.fb.array([this.fb.group({
    //     guestName: ['', [Validators.required]],
    //     age: new FormControl(''),
    //   })])
    // }
    // )
  }

  getBookingData() {
    this.bookingForm.patchValue({
      bookingId: '',
      guestEmail: 'test@gmail.com',
      checkinDate:  new Date('10-Feb-2020'),
      checkoutDate:  '',
      bookingStatus:  '',
      bookingAmount:  444,
      bookingDate:  '',
      mobileNumber:  '',
      guestName:  '',
      guestAddress:  '',
      tnc: false, 
      address: {
        addressLine1:  'Birmingan state',
        addressLine2:  '',
        City:  '',
        State:  '',
        Country:  '',
        ZipCode:  '',
      },
      guests: [{
        guestName: 'John',
        age: 20,
      }]
    })
  }



  addGuest() {
      console.log(this.guests.controls)      

      this.guests.push(
        this.fb.group({
          guestName: ['', [Validators.required]],
          age: new FormControl(''),
        })
      )
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''))
  }
  deletePassport() {
    this.bookingForm.removeControl('passport')
  }

  removeGuest(i: number) {
    this.guests.removeAt(i)
  }
}