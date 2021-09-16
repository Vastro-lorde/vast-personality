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

let location = new GeodeticLocation('49.09','-123.02');
let bYear = 1995;
let bMonth = 03;
let bDay = 06;
let bHour = 03;
let bMinute = 30;
let bSecond = 00; 
let date = moment(`${bYear}-${bMonth}-${bDay} ${bHour}:${bMinute}:${bSecond}`);
let timezone = '';
// America/Argentina/Buenos_Aires
let celestialBodiesAndTime = testPlanetCalculation();
let calculatedAspects = testAspects(celestialBodiesAndTime.CelestialBodies);
let calculatedHouses = testHouseCalculation(HouseSystemType.Placidus);
    for(let i = 0; i < 18; i++){
        let planet = celestialBodiesAndTime.CelestialBodies[i].Name
        let sign = nameSign(celestialBodiesAndTime.CelestialBodies[i].TotalDegree);
        let aspect ={ planet,sign}
        console.log(aspect);
    }
// console.log(sunSign);
// console.log(celestialBodiesAndTime);
// console.log(JSON.stringify(calculatedAspects));
// console.log(JSON.stringify(calculatedHouses));

                                        
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








///////////////////////////////////Last Resort////////////////////////////////////
// const zodiac = require('zodiac-signs')();

// // Returns the zodiac sign's information of the actual day
// // console.log(zodiac.getSignByDate());
// // Returns the zodiac sign's information of the 22 of June
// console.log(zodiac.getSignByDate({ day: 06, month: 3, year: 1995 }));
// // Overload the default language (format xx-YY sets (format xx)
// console.log(zodiac.getSignByDate({ day: 22, month: 6 }, 'fr'));






/////////////////////////////////NO////////////////////////////////////////////////////////////

//   const tellSign = require('sign-teller'); // import signTeller from 'sign-teller' if you use ES6 modules
//   const dateOfBirth = { day: 6, month: 3 , year: 1995 };
//   const signDetails = tellSign(dateOfBirth);
//   console.log(`Happy birthday, ${signDetails.sign}!`);


//////////////////////////////////////////////////////////


// const swisseph = require ('swisseph');
// const assert = require('assert');


// // Test date
// var date = {year: 2012, month: 1, day: 1, hour: 0};
// console.log ('Test date:', date);

// var flag = swisseph.SEFLG_SPEED;

// // path to ephemeris data
// swisseph.swe_set_ephe_path (__dirname + '/../ephe');

// // Julian day
// swisseph.swe_julday (date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL, function (julday_ut) {
// 	assert.equal (julday_ut, 2455927.5);
// 	console.log ('Julian UT day for date:', julday_ut);

// 	// Sun position
// 	swisseph.swe_calc_ut (julday_ut, swisseph.SE_SUN, flag, function (body) {
// 		assert(!body.error, body.error);
// 		console.log ('Sun position:', body);
// 	});

// 	// Moon position
// 	swisseph.swe_calc_ut (julday_ut, swisseph.SE_MOON, flag, function (body) {
// 		assert (!body.error, body.error);
// 		console.log ('Moon position:', body);
// 	});

// });

