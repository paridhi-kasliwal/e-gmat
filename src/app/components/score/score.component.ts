import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  quant_score_current: any;
  quant_score_target: any;
  verbal_score_current: any;
  verbal_score_target: any;
  isFormSubmitted = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {}

  onSubmit() {
    this.isFormSubmitted = true;
  }

  onChange(e, type) {
    console.log(e);
    if (e !== '') {
      if (e > 60) {
        if (type === 'quant_score_current') {
          this.quant_score_current = 0;
        } else if (type === 'quant_score_target') {
          this.quant_score_target = 0;
        } else if (type === 'verbal_score_current') {
          this.verbal_score_current = 0;
        } else if (type === 'verbal_score_target') {
          this.verbal_score_target = 0;
        }
        this.toastr.error('Please enter value less than 60.', 'Error');
      } else {
        if (type === 'quant_score_current') {
          this.quant_score_current = parseInt(this.quant_score_current);
        } else if (type === 'quant_score_target') {
          this.quant_score_target = parseInt(this.quant_score_target);
        } else if (type === 'verbal_score_current') {
          this.verbal_score_current = parseInt(this.verbal_score_current);
        } else if (type === 'verbal_score_target') {
          this.verbal_score_target = parseInt(this.verbal_score_target);
        }
      }
    }
    this.isFormSubmitted = false;
  }
}
