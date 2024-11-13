# TrelloAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

*********************************************

========

=======
projecto
clonar trello
autenticación
login
recuperar contraseña
registro
guardar token de forma segura
cli angular
login
register
forgot pass
change pass
handle token protect

base project 
platzi/curso-angular-auth

2 maneras git clone
o fork (va a tu espacio personal en github)

========
flujo del login
========

https://fake-trello-api.herokuapp.com/docs

login
 "email": "nicolas@mail.com",
 "password": "changeme"

 give you access_token | refresh_token

 shortCuts  encontrar en tsconfig.json
"paths":{
	"@models/*":["./src/app/models/*"]
}
import from... '@environment/environment' =='../../environment/environment'

========
Conectar login a API
========
login-form-components
importar AuthService
inyectar authService
suscribir authService.login(email,password).subscribe({next: ,error:})

register
 {
  "email": "oloza@mail.com",
  "name": "pruebaolr",
  "password": "prueba123#"
	}
201
	{
	  "name": "pruebaolr",
	  "email": "oloza@mail.com",
	  "avatar": "https://api.lorem.space/image/face?w=480&h=480&r=4290",
	  "id": 5,
	  "creationAt": "2024-11-08T13:36:05.000Z",
	  "updatedAt": "2024-11-08T13:36:05.000Z"
	}

after login
	*access_token
	*refresh_token

maquina de estado
manejar estado con unionType	 'init'|'loading'|'success'|'failed' ='init'
crearlo en un model
export type RequestStatus='init'|'loading'|'success'|'failed'

========
Flujo de registro
========
register  
requestStatus
showMessageError
validación back y front


========
Validar usario
========
mejorar la experiencia del registro
isAvailable

<form[formGroup]="form" novalidate -> no validate le indica que no lo valide a nivel de html, la validaci´n es desde angular

markAllAsTouched  manda los mensajes de error
se puede definir en el servicio que tipo retorna  post<string>

parea enviar un parametro a otro componente puede usar queryParamMap

========
Optimizacion el flujo de registro
========
los observables tiene los maps
tmp los switchmap ngrx lo transforma en un nuevo observable
cancela la solicitud anterior siempre la última es la activa.

========
Flujo de recuperación de contraseñas
========
explicación
genera token y enviarlo por correo
"no se envía el token en el API"
ingresa token y nueva contrañeap ara el cambio


=======
proteger acceso
===========
tap no daña el flujo se ejecuta antes de las subscripcion
utilizar guardianes  guards para controlar los accesos
tipo CanActivate
el guard se utiliza en el routing.module



