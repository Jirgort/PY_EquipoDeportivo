import { Component } from '@angular/core';
import { SportService } from '../../../../services/sport.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sport-management-update',
  templateUrl: './sport-management-update.component.html',
  styleUrls: ['./sport-management-update.component.css']
})
export class SportManagementUpdateComponent {
  sports: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  sportToUpdate: any = ['trainer'];

  constructor(
    private formBuilder: FormBuilder,
    private sportService:SportService,
    private modalService: NgbModal
  ) {}

  updateForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.sportService.getSports().subscribe({
      next: (response: any) => {
        console.log('hello');
        this.sports = response;
        console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  test(name: string) {
    console.log('BUTTON WAS CLICKED FOR: ' + name);
  }

  updateSport() {
    console.log('BUTTON WAS CLICKED FOR: ' + this.sportToUpdate._id);
    let testForm = JSON.stringify(this.updateForm.value);
    console.log('THE DATA TO PASS IS: ' + this.updateForm.value);
    this.sportService
      .updateSport(this.sportToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('********** SPORT UPDATED **********');
          this.sports = response;
          console.log(this.sports);
        },
        error: (err) => {
          console.log('********** ERR: SPORT NOT UPDATED **********');
          console.log(err);
        },
      });
  }

  open(content: any, trainer: any) {
    this.sportToUpdate = trainer;
    this.autoFillForm(trainer);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private autoFillForm(sport: any) {
    // Autofills the form with the coach to update.
    this.updateForm.setValue({
      name: sport.name,
    });
  }
}
