import {Component} from "@angular/core";

@Component({
  selector: 'caret-up',
  template: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="{{style}}" fill='#009aa9'>
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
                  d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
      </svg>
  `
})
export class CaretUpComponent {
  style = {
    height: '26px',
    padding: '7px 8px',
    color: 'black',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'space-between',
    fontWeight: '300'
  };
}
