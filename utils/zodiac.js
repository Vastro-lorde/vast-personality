// sign getter.
const {nameSign} = require('./sign.js');

const {AstrologyService, AspectService, 
    EphemerisJSONRepository, OrbJSONRepository, 
    TrigonometricUtilities,HouseSystemFactory,
    TimeConversions, WorldTimezoneRepository, 
    ZodiacFactory, GeodeticLocation, HouseSystemType,
    RetrogradesService} = require("@goldenius/hades-js");
const moment = require('moment-timezone');

let timeConversions = new TimeConversions();
let retrogradesService = new RetrogradesService();
let ephemerisJSONRepository = new EphemerisJSONRepository(timeConversions,retrogradesService);
let worldTimezoneRepository = new WorldTimezoneRepository();
let orbRepository = new OrbJSONRepository();
let aspectService = new AspectService(orbRepository);
let trigonometricUtilities = new TrigonometricUtilities();
let zodiacFactory = new ZodiacFactory();
let houseSystemFactory = new HouseSystemFactory(trigonometricUtilities,zodiacFactory);


let astrologyService = new AstrologyService(ephemerisJSONRepository, 
                                        timeConversions, 
                                        worldTimezoneRepository,
                                        aspectService,
                                        houseSystemFactory);


// let location = new GeodeticLocation('49.09','-123.02');
// let bYear = 1995;
// let bMonth = 03;
// let bDay = 06;
// let bHour = 03;
// let bMinute = 30;
// let bSecond = 00; 

// let timezone = '';




// America/Argentina/Buenos_Aires
let calculatedAspects = testAspects(celestialBodiesAndTime.CelestialBodies);
let calculatedHouses = testHouseCalculation(HouseSystemType.Placidus);


// console.log(sunSign);
// console.log(celestialBodiesAndTime);
// console.log(JSON.stringify(calculatedAspects));
// console.log(calculatedHouses);

                                        
function testPlanetCalculation()
{
    return astrologyService.CalculateCelestialBodiesAndTime(date, timezone, location);
}

function testAspects(celestialBodies)
{
    return astrologyService.CalculateAspects(celestialBodies);
}

function testHouseCalculation(houseSystemType)
{
    return astrologyService.CalculateHouseSystem(houseSystemType, date, timezone, location);
}





exports.natalAspect = (year, month, day, hour, minute, second)=>{

    let date = moment(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
    let celestialBodiesAndTime = testPlanetCalculation();
    let chartDetails = [];
    for(let i = 0; i < 11; i++){
        let planet = celestialBodiesAndTime.CelestialBodies[i].Name
        let sign = nameSign(celestialBodiesAndTime.CelestialBodies[i].TotalDegree);
        let aspect ={ planet,sign}
        chartDetails.push(aspect);
    }

    return chartDetails;

}