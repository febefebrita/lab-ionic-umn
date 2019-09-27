import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  constructor(private modalCtrl: ModalController,
    private loadingCtrl: LoadingController, private bookingSrvc: BookingService) { }
  
  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
  }

  onBookPlace(){
    this.loadingCtrl.create({
      keyboardClose:true,
      message:'Booking the place...'
  })
  .then(loadingEl => {
    loadingEl.present();
    setTimeout(() =>{
      loadingEl.dismiss();
      this.modalCtrl.dismiss({message: 'booked!'}, 'confirm');
    },2000);
  });
  }

  onBookMyPlace(){
    this.modalCtrl.dismiss({message: 'This is a dummy message!'},'confirm');
    this.bookingSrvc.addToMyBookings(this.selectedPlace);
  }

}
