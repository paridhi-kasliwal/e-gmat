import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../../shared/constants/app.constant';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() graph_type: any;
  @Input() q_current: any;
  @Input() q_target: any;
  @Input() v_current: any;
  @Input() v_target: any;
  max_total: number;
  current_total: number;
  target_total: number;
  current_percent: number;
  target_percent: number;
  show = false;
  constants = Constants;

  constructor() { }

  /**
   * @method ngOnInit
   * @desc calculate scores and percentage of current and target score
   */
  ngOnInit() {
    let t_percrnt: any;
    switch (this.graph_type) {
      case 'Total Score':
        this.max_total = Constants.max_total_score;

        if (this.q_current !== undefined && this.v_current !== undefined) {
          this.current_total = 200 + (this.q_current + this.v_current) * 5;
        }

        if (this.q_target !== undefined && this.v_target !== undefined) {
          this.target_total = 200 + (this.q_target + this.v_target) * 5;
        }
        break;

      case 'Quant Score':
        this.max_total = Constants.max_qa_va_score;
        this.current_total = this.q_current;
        this.target_total = this.q_target;
        break;

      case 'Verbal Score':
        this.max_total = Constants.max_qa_va_score;
        this.current_total = this.v_current;
        this.target_total = this.v_target;
        break;
    }

    this.current_percent = Math.round((this.current_total * 100) / this.max_total);
    t_percrnt = Math.round((this.target_total * 100) / this.max_total);
    this.target_percent = t_percrnt - this.current_percent;

    this.show = true;
  }
}
