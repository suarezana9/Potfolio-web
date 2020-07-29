import { Component, OnInit } from '@angular/core';
import { trigger,style,transition, animate,state} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2';


import { NgForm } from '@angular/forms';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations:[
    trigger('enterState',[
      state('void', style({
           transform: 'translateX(-100%)',
           opacity:0
      })),
      transition(':enter',[
        animate(800, style({
          transform:'translatex(0)',
          opacity:1
        }))
      ])
  ]),
]
})

export class ContactoComponent implements OnInit {
  public customer:any;
  public usuarioCreado:any;
  public creado:boolean = false;
  public errorCreado:boolean = false;
  public mensajeApi:string;

  constructor(private formBuilder: FormBuilder, private contactService : ContactService) { 
    
    this.customer = {

      name:null,
      email:null,
      message:null

    }
  }

  ngOnInit() {
   /*=============================================
      VALIDAR FORMULARIO
      =============================================*/

      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Get the forms we want to add validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
    
  }

  /*=============================================
  Recibir formulario login
  =============================================*/

  sendEmail(f: NgForm){

    this.contactService.sendEmail(this.customer)
    .subscribe( result => {
        console.log(result);
        
       if(result["status"] ==200){

          Swal.fire('Excelente...', '¡Mensaje enviado correctamente!', 'success');
       }else{
          Swal.fire('Oops...', '¡Algo salió mal!', 'error');
       }

    });

  }

  }

 
      
