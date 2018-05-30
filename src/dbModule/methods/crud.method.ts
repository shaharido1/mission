import { ErrorHandler } from '../../logs/errorHandler';
import { LogHandler } from '../../logs/logHandler';

export class CrudMethod {
  mongoModel;

  constructor(mongoModel) {
    this.mongoModel = mongoModel
  }


  add(entityToAdd : any): Promise<any>   {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.create(entityToAdd, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("added mission: " + entityReturn.id);
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }


  get(entityId : any): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.findOne(entityId, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            if (entityReturn) {
                LogHandler.saveLog("got mission: " + entityReturn.id);
            }
            else {
              LogHandler.saveLog("mission id:" + entityId + "doesn't exist");
              entityReturn = {}
            }
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }

  getAll() : Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.find({}, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("got all missions");
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }

  remove(entityId : any): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.remove({_id : entityId}, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("remove mission: " + entityReturn.id);
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }

  update(updatedEntity : any): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.findByIdAndUpdate({_id: updatedEntity._id}, updatedEntity, {new: true}, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("update mission: " + entityReturn.id);
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }

  updateField(entityId, updatedField): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.findByIdAndUpdate({_id: entityId}, {"$set" : updatedField}, {new: true}, (err, entityReturn) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("update mission: " + entityReturn.id);
            return resolve(entityReturn)
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }

  removeAll() {
    return new Promise((resolve, reject) => {
      try {
        this.mongoModel.remove({}, (err) => {
          if (err) {
            ErrorHandler.toConsole(err);
            return reject(err)
          }
          else {
            LogHandler.saveLog("remove all: ");
            return resolve()
          }
        })
      }
      catch (e) {
        ErrorHandler.toConsole(e);
        return reject(e)
      }
    })
  }
}

