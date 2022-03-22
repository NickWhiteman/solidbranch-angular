type Person = {
  first: string
  last: string
}

export type Data = {
  _id: string
  amount: string
  type: string
  name: Person,
  company: string
  email: string
  phone: string
  address: string
}

export interface ResponseQuery {
  total: number
  data: Data[]
}