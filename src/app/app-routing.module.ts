import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { EditDoctorComponent } from './pages/edit-doctor/edit-doctor.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { EditAdminComponent } from './pages/edit-admin/edit-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { BillListComponent } from './pages/bill-list/bill-list.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { BillComponent } from './pages/bill/bill.component';
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

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "view-doctor",
    component: DoctorListComponent
  },
  {
    path: "doctor",
    component: DoctorComponent
  },
  {
    path:"edit-doctor/:id",
    component: EditDoctorComponent
  },
  {
    path:"appointment",
    component:AppointmentComponent
  },
  {
    path:"view-appointment",
    component:AppointmentListComponent
  },
  {
    path:"edit-appointment/:id",
    component:EditAppointmentComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"view-admin",
    component:AdminListComponent
  },
  {
    path:"edit-admin/:id",
    component:EditAdminComponent
  },
  {
    path:"patient",
    component:PatientComponent
  },
  {
    path:"view-patient",
    component:PatientListComponent
  },
  {
    path:"edit-patient/:id",
    component:EditPatientComponent
  },
  {
    path:"bill",
    component:BillComponent
  },
  {
    path:"view-bill",
    component:BillListComponent
  },
  {
    path:"edit-bill/:id",
    component:EditBillComponent
  },
  {
    path:"element",
    component:ElementComponent
  },
  {
    path:"view-element",
    component:ElementListComponent
  },
  {
    path:"edit-element/:id",
    component:EditElementComponent
  },
  {
    path:"prescription",
    component:PrescriptionComponent
  },
  {
    path:"view-prescription",
    component:PrescriptionListComponent
  },
  {
    path:"edit-prescription/:id",
    component:EditPrescriptionComponent
  },
  {
    path:"item",
    component:ItemComponent
  },
  {
    path:"view-item",
    component:ItemListComponent
  },
  {
    path:"edit-item/:id",
    component:EditItemComponent
  },
  {
    path:"specialization",
    component:SpecializationComponent
  },
  {
    path:"view-specialization",
    component:SpecializationListComponent
  },
  {
    path:"edit-specialization/:id",
    component:EditSpecializationComponent
  },
  {
    path:"review",
    component:ReviewComponent
  },
  {
    path:"view-review",
    component:ReviewListComponent
  },
  {
    path:"edit-review/:id",
    component:EditReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
