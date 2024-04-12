function areaPlats (week, startCount = 20){


    // area for one plant
const areaOnePlant = 0.8
// garden are for plants
const area = 3.1415 * 5 * 5
//max quantity for plants
const maxCountPlants = area / areaOnePlant
// initial amount of plants
let countPlantsPerWeek = startCount
// prediction for plant amount per week using switch case
// switch(week){
    //     case 10: 
    //         countPlantsPerWeek *= 2
    //     case 9: 
    //         countPlantsPerWeek *= 2
    //     case 8: 
    //         countPlantsPerWeek *= 2
    //     case 7:
    //         countPlantsPerWeek *= 2 
    //     case 6:
    //         countPlantsPerWeek *= 2
    //     case 5:
    //         countPlantsPerWeek *= 2 
    //     case 4:
    //         countPlantsPerWeek *= 2
    //     case 3: 
    //         countPlantsPerWeek *= 2
    //     case 2:
    //         countPlantsPerWeek *= 2 
    //     case 1:
    //         countPlantsPerWeek *= 2
    //         break
    // }
    

    // loop for - count the amount of plants per week
    for (let i = 0; i < week; i++) {
        countPlantsPerWeek *= 2
    }

    // condition for decision
    if (countPlantsPerWeek <= maxCountPlants * 0.5){
        console.log('Planted')
    } else if (countPlantsPerWeek <= maxCountPlants * 0.8 && countPlantsPerWeek >= maxCountPlants * 0.5){
        console.log('Monitored')
    } else {
        console.log('Pruned')
    }

    // area which will be filled per week
    console.log(`Area for plants per ${week} count : ${countPlantsPerWeek * areaOnePlant}`)

}

areaPlats(1)
areaPlats(2)
areaPlats(3)
areaPlats(10, 100)
