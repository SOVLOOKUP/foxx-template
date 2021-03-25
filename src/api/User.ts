import { Collection, Entities, Route, RouteArg } from "type-arango";
import { User } from '../model/User';

@Collection(of => User)
@Route.GET()
export default class Users extends Entities {
	@Route.GET('/')
	static GET_CUSTOM({param,error}: RouteArg){
		const user = Users.findOne(param.user);
		if(!user) return error('not found');
		return user;
	}
}