<template>
    <div>
		<div class='header2'> 
			<router-link class="btn btn-primary" to="/" role="button" color="#ffffff">
            <i class="fa fa-home fa2"></i></router-link> 
		</div>


    <br>    
      <h2>Registro</h2>
      <div class="container-grid">
        <div class="row">
          <div class="col-lg-5 info-contact">
          </div> 
					
          <form class="formulario">
            <div class="col-lg-10">
                <div class="form-control">  
								
                  <label for="Nombre"><b>Nombre</b></label>
                  <input type="text" placeholder="Nombre" name="Nombre" v-model="name" required>

                  <label for="Apellido"><b>Apellido</b></label>
                  <input type="text" placeholder="Apellido" name="Apellido" v-model="lastname" required>
								
                  <label for="email"><b>Correo electronico</b></label>
                  <input type="text" placeholder="Correo electronico" name="email" v-model="email" required>	
								
                  <label for="telefono"><b>Teléfono</b></label>
                  <input type="text" placeholder="Teléfono" name="telefono" v-model="telephone" required>
							
                  <label for="Contraseña"><b>Contraseña</b></label>
                  <input type="password" placeholder="Contraseña" name="password" v-model="password"  required>
															
                  <label for="Contraseña2"><b>Repetir contraseña</b></label>
                  <input type="password" placeholder="Repetir contraseña" name="password2" required>
																		
                  <label>
                  <input type="checkbox" checked="checked" name="remember" required> Aceptar terminos y condiciones
                  </label>
						
                  <button v-on:click="signup">Iniciar sesión</button>
                </div>              
            </div> 
          </form>
        </div>
      </div>

        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>
        <br>    


        <div class="copyright">&copy;2021-G5-82</div>			
    </div>
</template>


<script>
import axios   from 'axios'
export default ({
  name:'Register',
  data(){
    return{
      name:'',
      lastname:'',
      email:'',
      telephone:'',
      password:'',
    }
  },
  methods:{
    async signup()
    {
      if(this.name === "" || this.lastname === "" || this.email === "" || this.telephone === "" || this.password === ""){  
      alert("Complete todos los datos");}
      else{
      let result = await axios.post("http://localhost:3000/user",{
        name:this.name,
        lastname:this.lastname,
        email:this.email,
        telephone:this.telephone,
        password:this.password,
      });

      console.warn(result);
      if(result.status==201)
      {
        alert("Registro Completo");
        this.$router.push({name:'Login'})
      }
      }
    }
    }
  })
</script>



<style scoped>
.button {
  background-color: #A6E56E;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

input[type=text], input[type=password], input[type=email]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #A6E56E;
  color: white;
  padding:14px;
  margin:8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container5 {
  padding: 16px;
}

span a{
	text-decoration: none;
	text-align: right;
	float: right;
	padding-top: 0px;
	font-size: 15px
}

span.rgt {
    text-align: right;
	float: right;
    padding-top: 8px;
	font-size: 15px
		
		
}

.rememberme{
    font-size: 12px;

}

.container-grid{
    width: 100%;
    margin:auto;
}

.row{
    display: flex;  
    width: 100%;
    text-align: left;  
    flex-wrap: wrap; 
    justify-content: left;
}

.col-sm-1 {width: 8.33%;}
.col-sm-2 {width: 16.66%;}
.col-sm-3 {width: 25%;}
.col-sm-4 {width: 33.33%;}
.col-sm-5 {width: 25%;}
.col-sm-6 {width: 50%;}
.col-sm-7 {width: 58.33%;}
.col-sm-8 {width: 66.66%;}
.col-sm-9 {width: 75%;}
.col-sm-10 {width: 83.33%;}
.col-sm-11 {width: 91.66%;}
.col-sm-12 {width: 100%;}

@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-lg-1 {width: 8.33%;}
    .col-lg-2 {width: 16.66%;}
    .col-lg-3 {width: 25%;}
    .col-lg-4 {width: 33.33%;}
    .col-lg-5 {width: 37.5%;}
    .col-lg-6 {width: 50%;}
    .col-lg-7 {width: 58.33%;}
    .col-lg-8 {width: 66.66%;}
    .col-lg-9 {width: 75%;}
    .col-lg-10 {width: 83.33%;}
    .col-lg-11 {width: 91.66%;}
    .col-lg-12 {width: 100%;}
  }

.card col-md-7 mx-auto mt-4{
	background-color: #A6E56E;
}


.formulario {width: 30%;
}

.header2 {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 45px;
	margin: auto;
	background-color: #AD6EE5;
    color: #AD6EE5;
}

.fa2 {
  padding: 10px;
  width: 100px;
  height: 20px;	
  text-align: center;
  text-decoration: none;
  margin: 0px 0px;
  color: #ffffff;
}



.copyright {
	text-align: center;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #000000;
	color: #FFFFFF;
	text-transform: uppercase;
	font-weight: 100;
	letter-spacing: 2px;
	border-top-width: 2px;
	font-size: 12px;
}

</style>