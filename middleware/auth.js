import Auth from '../utils/auth'
export default function({app, store, route, redirect}) {
    if(!Auth.userIsLogged()){
      return  redirect('/login')
    }
}