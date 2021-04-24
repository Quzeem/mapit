import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

// // Bad Code Example
// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)

// With interface
customMap.addMarker(user)
customMap.addMarker(company)