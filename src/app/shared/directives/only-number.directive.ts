import { Directive, ElementRef, HostListener} from '@angular/core';
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {
  el : any;
  ctrl : any;

  constructor(private _elemRef: ElementRef, private control : NgControl) {
    this.el = this._elemRef;
    this.ctrl = this.control;
  }
  
  @HostListener('drop', ['$event']) blockDrop(event) {
    this.blockData(event)
  }

  @HostListener('paste', ['$event']) blockPaste(event) {
    this.blockData(event)
  }
  /**
  *@desc - to block values after paste / drop value 
  */
  blockData(event) {
    setTimeout(()=>{
      let newValue : any = "";
      let valueToTransform = this.el.nativeElement.value;

      if(valueToTransform == "."){
        newValue = valueToTransform.replace(".", "");
      }else{
        newValue = valueToTransform.replace(/[^0-9\.]+/g,'').replace(/(\..*)\./g, '$1').replace(/(\d+\.+\d{2})(\d+)/g,'$1');
        if(newValue){
          newValue = parseFloat(newValue);
        }
      }
      this.ctrl.control.setValue(newValue);
      return true;
      
    }, 100);
  }

  /**
   *@desc - restrcit user to type only number with two decimal places 
   */
  @HostListener('input', ['$event']) onInput(event) {
    let newValue : any = "";
    let valueToTransform = this.el.nativeElement.value;
    if(valueToTransform == "."){
      newValue = valueToTransform.replace(".", "");
    }else{
      newValue = valueToTransform.replace(/[^0-9\.]+/g,'').replace(/(\..*)\./g, '$1').replace(/(\d+\.+\d{2})(\d+)/g,'$1');
    }
    this.ctrl.control.setValue(newValue);
    return true;
  }
}
