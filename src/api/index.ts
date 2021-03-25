import typeArango, { LogLevel } from 'type-arango'

export * from './User'

export const routerInit = typeArango({
	getAuthorizedRoles(){ return ['admin'] },
	logLevel: LogLevel.Debug
});
