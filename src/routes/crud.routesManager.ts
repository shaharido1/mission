import { CrudMethod } from '../dbModule/methods/crud.method';


export class CrudRoutesManager {
  crudMethods : CrudMethod;
  entityName: string;
  constructor(entityMethods, entityName) {
    this.crudMethods = entityMethods;
    this.entityName = entityName
  }

  test(req, res) {
    return res.status(200).send('hello')
  }

  getById(req, res) {
    this.crudMethods.get(req.query[this.entityName + 'Id'])
  }

  add(req, res) {
    this.crudMethods.add(req.body[this.entityName]).then(entity => {
      res.status(200).send(entity)
    })

  }



}