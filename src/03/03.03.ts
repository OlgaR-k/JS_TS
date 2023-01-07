import {governmentBuildingsType, housesType} from "../02/0202";

export const addMoneyToBudget = (props: governmentBuildingsType, sum: number) => props.budget += sum;

export const repairHouse = (house: housesType) => house.repaired = true;

export const toFireStaff = (governmentBuilding: governmentBuildingsType, count: number) => {
    return governmentBuilding.staffCount -= count;
};

export const toHireStaff = (governmentBuilding: governmentBuildingsType, count: number) => {
    return governmentBuilding.staffCount += count;
}