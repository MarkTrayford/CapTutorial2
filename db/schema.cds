namespace sap.ui.riskmanagement;
using { managed } from '@sap/cds/common';

  entity Risks : managed {
    key ID      : UUID  @(Core.Computed : true);
    title       : String(100);
    prio        : String(5);
    descr       : String;
    miti        : Association to Mitigations;
    impact      : Integer;
    criticality : Integer;
  }

  entity Mitigations : managed {
    key ID       : UUID  @(Core.Computed : true);
    description  : String;
    owner        : String;
    timeline     : String;
    risks        : Association to many Risks on risks.miti = $self;
  }

  entity Members {
    key ID : String;
    firstname : String; 
    surname : String;
    role : String;
  }


  entity Customers {
    key customerID : String;
    description : String;
  }

  entity Systems {
    key customer : String;
    key landscape : String;
    key sysid : String;
    key client : String;
    userId : String; 
    password : String;
  }

  entity Incidents {
    key ID : String;
    customer : String;
    description : String;
    status : String;
    assignedTo : String;
  }


