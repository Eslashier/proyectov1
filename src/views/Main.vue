<template>
  <div>
    <header> 
      <router-link to="/" class="logo" >
        <img src="../assets/icon_g.png" alt="">
      </router-link>

      <nav>
        <ul>
          <li><a v-on:click="logout">Cerrar sesión</a></li>
        </ul>
      </nav>
    </header>

  <div class="space">
    <div>
      <h2 class="mt-5">Hola {{name}}, Bienvenido a tus proyectos.</h2>
    </div>

  <table>
    <tr>
      <th>ID Proyecto</th>
      <th>Nombre del proyecto</th>
      <th>Lider</th>
      <th>Duración</th>
      <th>Fecha limite</th>
      <th>Descripción</th>
      
    </tr>
    <tr v-for="item in projects" :key="item.pid">
      <td>{{item.projecti}}</td>
      <td>{{item.pname}}</td>
      <td>{{item.leader}}</td>
      <td>{{item.time}}</td>
      <td>{{item.deadline}}</td>
      <td>{{item.summary}}</td>
      <td class="hiddenBorder"><div class="btn1">
      <router-link :to="'/Edit/'+item.id" tag="button">Editar</router-link>
      </div></td>
      <td class="hiddenBorder"><div class="btn2">
      <button v-on:click="deletep(item.id)">Borrar</button>
      </div></td>
    </tr> 
    </table>
    <br>
    <div class="btn3">
      <div style="text-align:center;">
      <router-link to="/Add">
      <button>Agregar proyecto</button>
      </router-link>
      </div>
    </div>
  </div>
  <Footer />
  </div>
</template>


<script>

import axios from 'axios';
import Footer from '../components/Footer.vue'

export default{
  name:'Main',
  data(){
    return{
      projects:[],
      id:'',
      name:''
    }
  },

  methods:{
    logout()
    {
      localStorage.clear();
      this.$router.push({name:'Login'})
    },
    async deletep(id){
      let result = await axios.delete("http://18.212.204.173:3000/projects/"+id);
      console.warn(result)
      if(result.status==200)
      {
        this.loadData();
      }
    },
    async loadData(){  
      let id=localStorage.getItem('user-info');
      let name=localStorage.getItem('user-info');
      if(!name)
      {
        this.$router.push({name:'Login'})
      }
      this.id=JSON.parse(id).id;
      this.name=JSON.parse(name).name;
      let result = await axios.get(`http://18.212.204.173:3000/projects?userid=${this.id}`);
      console.warn(result)
      this.projects=result.data;  
    }
  },


  async mounted(){

    this.loadData();
     
  },

  components:{
    Footer,
  }

}

</script>

<style scoped>

header {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 20%;
	margin: auto;
	background-color: #ad6ee581;
}

table{
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

td, th {
  border: 1px solid #AD6EE5;
  padding: 0.5rem;
  text-align: center;
}

th {
  color:#AD6EE5
}

.space{
    display:block;
    height:750px;
  }

.visibleBorder { border-width: 2px; }
.hiddenBorder { border-width: 0; }


li:hover a {
	color: #A6E56E; /* Color botones de navegación al poner el puntero */
}

.btn1 button {
  background-color: #A6E56E; /* Green background */
  border: #aa0404;
  border: 2px solid #A6E56E;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  border-radius: 4px;
}

.btn1 button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn1:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn1 button:hover {
  background-color: #A6E56E;
  border: 2px solid #AD6EE5;
}

.btn2 button {
  background-color: #aa040490; /* Green background */
  border: 2px solid #aa0404;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  border-radius: 4px;
}

.btn2 button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn2:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn2 button:hover {
  background-color: #aa0404;
  border: 2px solid #AD6EE5;
}

input[type=text] {
  width: 10%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=date] {
  width: 10%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.btn3 button {
  background-color: #AD6EE5; /* Green background */
  border: #aa0404;
  border: 2px solid #AD6EE5;
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 4px;
  width: 20%;
}

.btn3 button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn3:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn3 button:hover {
  background-color: #AD6EE5;
  border: 2px solid #AD6EE5;
}
</style>