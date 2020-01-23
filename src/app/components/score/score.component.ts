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

  /**
   * @method onSubmit
   * @desc submit scores on button click
   */
  onSubmit() {
    if (this.quant_score_current != undefined && this.quant_score_target != undefined && this.verbal_score_current != undefined && this.verbal_score_target != undefined ) {
      this.isFormSubmitted = true;
    } else {
      this.toastr.error('Please enter values. ', 'Error');
    }
  }

  /**
   * @method onChange
   * @desc when value changes and validate input values
   */
  onChange(e, type) {
      if (e < 1 || e > 60 || e % 1 !== 0) {
        if (type === 'quant_score_current') {
          this.quant_score_current = 1;
        } else if (type === 'quant_score_target') {
          this.quant_score_target = 1;
        } else if (type === 'verbal_score_current') {
          this.verbal_score_current = 1;
        } else if (type === 'verbal_score_target') {
          this.verbal_score_target = 1;
        }
        this.toastr.error('Please enter value between 1 to 60.', 'Error');
      } else {
        this.isFormSubmitted = false;
      }
  }
}
