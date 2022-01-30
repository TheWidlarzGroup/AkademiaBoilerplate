import {
  AccountRoutes,
  DashboardRoutes,
  HomeRoutes,
  RootRoutes,
  UnauthorizedRoutes,
} from 'Navigation/routes'

export type UnauthorizedNavigatorParamList = {}

export type AuthorizedNavigatorParamList = {}

export type DashboardNavigatorParamList = {}

export type HomeNavigatorParamList = {}

export type AccountNavigatorParamList = {}

export type AvailableRoutes =
  | UnauthorizedRoutes
  | AccountRoutes
  | RootRoutes
  | HomeRoutes
  | DashboardRoutes

export type AvailableParamLists = {
  authorized: AuthorizedNavigatorParamList
  unauthorized: UnauthorizedNavigatorParamList
  dashboard: DashboardNavigatorParamList
  account: AccountNavigatorParamList
  home: HomeNavigatorParamList
}
