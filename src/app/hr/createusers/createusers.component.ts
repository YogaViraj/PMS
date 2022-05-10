import { Component, OnInit } from '@angular/core';
import { User} from 'Models/user';
@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {
  createusers:any;

  constructor() { }
  user:User={
    userId: '',
    fullName:'',
    email: '',
    userName: '',
    password: '',
    genderId: '',
    mobileNumber: 0,
    mobileNumberId: '',
    organizationId: '',
    designationId: '',
    reportingPerson:'',
  }

  ngOnInit(): void {
  }
  public data:User[]=[
    
  ];

  Gender: any=[{
    id: 1,
    gender:'male'
  },
  {
    id: 2,
    gender:'female'
  },
  {
    id: 3,
    gender:'others'
  }
  ]

  Organization: any=[{
    id: 1,
    organizationName: 'Development'
  },
  {
    id: 2,
    organizationName: 'Testing'
  },
  {
    id: 3,
    organizationName: 'UI/UX'
  }

]
 Designation: any=[{
   id: 1,
   designationName:'SSE'
 },
 {
  id: 2,
  designationName:'TL'
},
{
  id: 3,
  designationName:'PM'
}
]

Mobilenumber: any=[{
  id:1,
  number: '+91'

},
{
  id:2,
  number: '+98'

},
{
  id:3,
  number: '+414'

}
]
userdata(){
  console.log(this.user)
}
    
}
