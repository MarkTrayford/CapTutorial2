const cds = require('@sap/cds')

/**
 * Implementation for Risk Management service defined in ./risk-service.cds
 */



module.exports = cds.service.impl(async function() {
    

    this.on('MyAction', async(req)=>{
        req.data["AdditionalField"] = "AdditionalFieldValue";
        return req.data;
    })

    this.on('TileFunction', async(req)=>{
        let result = {};
        console.log("hello " + req.user.id)
        switch (req.data.category) {
            case 1:
                result.d = {"icon":"sap-icon://travel-expense", 
                        "number":"287",
                        "numberState": "Critical",
                         "stateArrow": "Up",
                        "subtitle": "Quarterly overview",
                        "infoState": "Negative"
}
                return result;
                break;
            case 2:
                                
                const {Members} = cds.entities
                //console.log(Members);
                
                //let tiles = await cds.connect.to('DynamicTile')
                // let query = SELECT.from(Members)
                let query = SELECT.from(Members)
                result1 = await cds.run (query)
                //console.log(result1)
                //console.log(result1.length);
                
                result.d = {"icon":"sap-icon://group", 
                        "title":"Development Team",
                        "number":result1.length,
                        "numberFactor":"",
                        "numberUnit":"",
                        "numberState": "Positive",
                         "stateArrow": "",
                        "subtitle": "Team Members",
                        "infoState": "",
                        "info": "Goto Team Details" 
                    }
                return result;
                break;
        
            default:
                result.d = {"icon":"sap-icon://travel-expense", 
                        "number":"1",
                        "numberState": "Critical",
                         "stateArrow": "Up",
                        "subtitle": "Unknown Category",
                        "infoState": "Negative"
}
                return result;
                break;
        }
        
    })

});