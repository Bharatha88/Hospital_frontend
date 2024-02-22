import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { EditDoctorComponent } from './pages/edit-doctor/edit-doctor.component';
import { NameComponent } from './common/name/name.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { EditAdminComponent } from './pages/edit-admin/edit-admin.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { BillComponent } from './pages/bill/bill.component';
import { BillListComponent } from './pages/bill-list/bill-list.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { ElementComponent } from './pages/element/element.component';
import { ElementListComponent } from './pages/element-list/element-list.component';
import { EditElementComponent } from './pages/edit-element/edit-element.component';
import { PrescriptionComponent } from './pages/prescription/prescription.component';
import { PrescriptionListComponent } from './pages/prescription-list/prescription-list.component';
import { EditPrescriptionComponent } from './pages/edit-prescription/edit-prescription.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { SpecializationComponent } from './pages/specialization/specialization.component';
import { SpecializationListComponent } from './pages/specialization-list/specialization-list.component';
import { EditSpecializationComponent } from './pages/edit-specialization/edit-specialization.component';
import { ReviewComponent } from './pages/review/review.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { EditReviewComponent } from './pages/edit-review/edit-review.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    DoctorComponent,
    DoctorListComponent,
    EditDoctorComponent,
    NameComponent,
    AppointmentComponent,
    AppointmentListComponent,
    EditAppointmentComponent,
    AdminComponent,
    AdminListComponent,
    EditAdminComponent,
    PatientComponent,
    PatientListComponent,
    EditPatientComponent,
    BillComponent,
    BillListComponent,
    EditBillComponent,
    ElementComponent,
    ElementListComponent,
    EditElementComponent,
    PrescriptionComponent,
    PrescriptionListComponent,
    EditPrescriptionComponent,
    ItemComponent,
    ItemListComponent,
    EditItemComponent,
    SpecializationComponent,
    SpecializationListComponent,
    EditSpecializationComponent,
    ReviewComponent,
    ReviewListComponent,
    EditReviewComponent,
    AboutComponent,
    ResourceComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
