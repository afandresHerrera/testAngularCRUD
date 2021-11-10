import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListEmpleadosService } from './list-empleados.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListEmpleadosComponent implements OnInit {

  public listEmpleados: any
  public form: FormGroup;
  public formSearch: FormGroup;
  public viewError: Boolean = false;
  public index: number = 0
  public action: number = 0
  public modalTitle: string = ''

  constructor(private _listEmpleadosService: ListEmpleadosService, private fb: FormBuilder) {
    this.formSearch = this.fb.group({
      buscar: [''],
    });
    this.form = this.fb.group({
      Email: [null, [Validators.required, Validators.email]],
      nombres: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      apellidos: [null, [Validators.required]],
      id: [0],
      Activo: [false, [Validators.required]],
    });

  }

  ngOnInit(): void {
    console.log(this._listEmpleadosService.listarUsuarios());
    this.listEmpleados = this._listEmpleadosService.listarUsuarios();

  }
  listarTabla() {
    console.log(this.form);
    this.viewError = true
  }
  cleanFilter() {
    this.form.reset();
  }
  edit(item: any, index: number, title: string, action: number) {
    this.modalTitle = title
    this.action = action
    this.index = index
    this.form.enable();
    if (item && action === 1) {
      this.form.patchValue(item)
    }
    if (action === 2) {
      this.form.patchValue(item)
      this.form.disable();
    }
    if (action === 3) {
      this.form.reset();
    }

  }
  editAndSave() {
    console.log(this.form.value);
    this.viewError = true
    if (this.action === 1) {
      if (this.form.valid) {
        this.listEmpleados = []
        var obj = this._listEmpleadosService.edit(this.form.value, this.index)
        //se agrega este segundo por la velocidad de mapeo es ta rapida q no refresca el obj con un servicio normal y una peticion hhttp no pasaria 
        setTimeout(() => {
          this.listEmpleados = obj
        }, 1000);
        document.getElementById('btnClose')?.click()
      }
    } else if (this.action == 3) {
      if (this.form.valid) {
        this.listEmpleados = []
        var cont = 0
        this.form.controls['id'].setValue(cont++)
        var objNew = this._listEmpleadosService.add(this.form.value, this.index)
        // objNew.push(this.form.value)
        setTimeout(() => {
          this.listEmpleados = objNew
        }, 1000);
        document.getElementById('btnClose')?.click()
      }
    }

  }

}
