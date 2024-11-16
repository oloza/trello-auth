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
========
tap no daña el flujo se ejecuta antes de las subscripcion
utilizar guardianes  guards para controlar los accesos
tipo CanActivate
el guard se utiliza en el routing.module

=======
donde guardar los tokens
========
en web tenemos 4 formas
localStorage ( menos segura no recomendable)
sessionStorage(volatil cuando el usuario cierre la pestaña se elimina)
webSequal(acceder datos no para guar)
cookies(recomendale dentro de una cookie), 

la sesion por cookies variable httponly solo modificable en el backend, solo si se maneja desede el backend

cookies desde el servidor  se transmiten entre ida y venida de solicitudes
debilidad esa cookie hay que manterla en el servidor, con escalamiento horizontal no 
jwt es statelees no guarda la sesion en el backend, genere un token con las llaves

las cookies solo funcionan en web
para android ios se debe usar jwt

¿dónde guardar el token?
se va guardar en una cookie desde el lado del browser
implementar un interceptor donde pida validacion
instalar la libreria 
	npm i typescript-cookie

la cookie tiene su propiedad de expiración al igual que el JWT

=======
Redirects para recuperar sesión
========
otra forma es usando guards
se hace redirect cuando el usaurio esta logeado

=======
obteniendo users
========
los endpoint se debe consultar con el accessToken
se puede usar un DataSource generico
cargar el token del tipo Bearer

=======
obtener perfil
========
done

=======
reactividad en profile
========
user?.name , ? maneja los nulos
para no hacer muchos request podemos usar un observable  user$
en layout se suscribe al observable
todo observable necesita un estado inicial