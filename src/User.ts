import faker from 'faker'
import { Mappable } from './CustomMap'

// Using the 'implements <Interface>'  is optional but it helps us pinpoint which file needs to satisfy a specific interface(show us errors in the correct locations) and help us understand what's going on

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `<h3>User Name: ${this.name}</h3>`
  }
}