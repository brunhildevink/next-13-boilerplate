export enum Route {
  Home = '/',
  Vehicles = '/vehicles',
  Rockets = `${Route.Vehicles}/rockets`,
  Ships = `${Route.Vehicles}/ships`,
}
