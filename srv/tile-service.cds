using { sap.ui.riskmanagement as my } from '../db/schema';


@path: 'tiles'
service TileService {

  entity TeamMembers as projection on my.Members;
  entity Customer as projection on my.Customers;
  entity Systems as projection on my.Systems;
  entity Incidents as projection on my.Incidents;

 
 
}

@protocol: 'rest'
@path: 'dynamicTiles'

service DynamicTile {
   @open
    type object {};

    action   MyAction(input : object)       returns object;
    function TileFunction(category: Integer ) returns object;


}