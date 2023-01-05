
type streetType = {
    title: string
}
type addressType = {
    number: number
    street: streetType
}
type housesType = {
    buildedAt: number
    repaired: boolean
    address: addressType
}
type streetgovernmentBuildingsType = {
    street: streetType
}
type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: streetgovernmentBuildingsType

}

export type CityType = {
    title: string,
    houses: Array<housesType>,
    governmentBuildings: Array<governmentBuildingsType>,
    citizensNumber: number,
}