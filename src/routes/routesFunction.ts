import { paths } from './paths';
import { RoutesManager } from './routesManager';
import { MissionMethods } from '../dbModule/methods/mission.method';
import { Mission } from '../dbModule/schemas/mission.schema';

const missionMethods = new MissionMethods(Mission);
const routesManager = new RoutesManager(missionMethods, 'mission');

export function routes(app){

  app.get(paths.test, routesManager.test);
  app.post(paths.addMission, (req,res )=> routesManager.add(req, res));
  app.get(paths.getMissionById, routesManager.getById);



}