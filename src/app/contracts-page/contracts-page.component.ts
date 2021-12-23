import { Component, OnInit } from '@angular/core';

export interface Contractor {
  name: string;
  contractType: string;
  startDate: number;
  amount: {
    amount: number;
    code: string;
  };
  status: string;
}

const TRADITIONAL = 'Traditional';

const ELEMENT_DATA: { position: number; contractor: Contractor }[] = [
  {
    position: 1,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 1.0079,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 2,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 4.0026,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'signature pending',
    },
  },
  {
    position: 3,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 6.941,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'signature pending',
    },
  },
  {
    position: 4,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 9.0122,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 5,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 10.811,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 6,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 12.0107,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 7,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 14.0067,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 8,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 15.9994,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 9,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 18.9984,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
  {
    position: 10,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 20.1797,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: 'active',
    },
  },
];

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.scss'],
})
export class ContractsPageComponent implements OnInit {
  searchString: string = '';
  statusList: {
    value: string;
    viewValue: string;
  }[] = [
    { value: 'AVAILABLE', viewValue: 'Available' },
    { value: 'UNAVAILABLE', viewValue: 'Unavailable' },
  ];

  contractor: {
    name: string;
  } = { name: 'John Dev' };

  contractTypes: {
    value: string;
    viewValue: string;
  }[] = [{ value: 'FREELANCE', viewValue: 'Freelance' }];
  displayedColumns: string[] = [
    'startMargin',
    'name',
    'type',
    'startDate',
    'amount',
    'status',
    'actions',
    'endMargin',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
