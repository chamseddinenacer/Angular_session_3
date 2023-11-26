import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  private members:any[]=[


    { id: 1, firstname: 'chamseddine', lastname: 'nacer',role:'responsable dev',phone:12345678,email:'chams@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' },
    { id: 2, firstname: 'cherif', lastname: 'khalifa' ,role:'responsable iot',phone:34543245,email:'cherif@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 3, firstname: 'firas', lastname: 'firas' ,role:'president MTC',phone:12324565,email:'firas@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 4, firstname: 'fadwa', lastname: 'fadwa' ,role:'president IOT ',phone:10998877,email:'fadwa@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 5, firstname: 'ghofran', lastname: 'ghofran' ,role:'finances',phone:12344455,email:'ghofran@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 6, firstname: 'ranya', lastname: 'ranya' ,role:'RH',phone:5566778,email:'ranya@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 7, firstname: 'sarra', lastname: 'sarra' ,role:'member actif',phone:12435678,email:'sarra@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 8, firstname: 'hiba', lastname: 'hiba' ,role:'Secrétaire général',phone:12345678,email:'hiba@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 9, firstname: 'minyar', lastname: 'minyar' ,role:'chef RH',phone:45625453,email:'minyar@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 10, firstname: 'Rihab', lastname: 'Rihab' ,role:'member actif',phone:45625453,email:'Rihab@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},

 
]


GetMember(){
  return this.members
}


}
