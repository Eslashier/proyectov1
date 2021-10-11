<template>
  <div>
    <header> 
      <router-link to="/Main" class="logo" >
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
      <h2 class="mt-5">Ingresa los datos de tu proyecto</h2>
    </div>

  <div style="text-align:center;" class="formularioadd">
    <div><label for="pid"><b float="center" text-align="center">Id del proyecto</b></label></div>
    <div><input placeholder="Id proyecto" type="text" id="projecti" name="projecti" v-model="projecti" required></div>
    <div><label for="pid"><b float="center" text-align="center">Nombre del proyecto</b></label></div>
    <div><input placeholder="Nombre del proyecto" type="text" id="pname" name="pname" v-model="pname" required></div>
    <div><label for="pid"><b float="center" text-align="center">Lider del proyecto</b></label></div>
    <div><input placeholder="Lider" type="text" id="leader" name="leader" v-model="leader" required></div>
    <div><label for="pid"><b float="center" text-align="center">Duración proyecto</b></label></div>
    <div><input placeholder="Duración" type="text" id="time" name="time" v-model="time" required></div>
    <div><label for="pid"><b float="center" text-align="center">Fecha limite del proyecto</b></label></div>
    <div><input placeholder="Fecha limite" type="date" id="deadline" name="deadline" v-model="deadline" required></div>
    <div><label for="pid"><b float="center" text-align="center">Descripción</b></label></div>
    <div><input placeholder="Descripción" type="text" id="summary" name="summary" v-model="summary" required></div>
    <br>
    <button class="newp" v-on:click="newproject">Agregar proyecto</button>
  </div>
  </div>
  <Footer />
  </div>
</template>


<script>

import axios from 'axios';
import Footer from '../components/Footer.vue'

export default({
  name:'Add',
  data(){
    return{
      projects:{
      userid:'',
      projecti:'',
      pname:'',
      summary:'',
      leader:'',
      time:'',
      deadline:'',
      }
    }
  },

  async mounted(){
    let name=localStorage.getItem('user-info');
    if(!name)
    {
      this.$router.push({name:'Login'})
    }
    let id=localStorage.getItem('user-info');
    this.id=JSON.parse(id).id;
  },

  methods:{
    logout()
    {
      localStorage.clear();
      this.$router.push({name:'Login'})
    },
    async newproject()
    {
      if(this.projecti === "" || this.pname === "" || this.leader === "" || this.time === "" || this.deadline === ""){  
      alert("Complete todos los datos");}
      else{
      let result = await axios.post("http://localhost:3000/projects",{
        userid:this.id,
        projecti:this.projecti,
        pname:this.pname,
        summary:this.summary,
        leader:this.leader,
        time:this.time,
        deadline:this.deadline,
      });

      console.warn(result);
      if(result.status==201)
      {
        alert("Nuevo proyecto agregado");
        this.$router.push({name:'Main'})
      }
      else{
        alert("error");
      }
      }
    }
    },
  components:{
    Footer,
  }
})

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
    height:840px;
  }

.visibleBorder { border-width: 2px; }
.hiddenBorder { border-width: 0; }


li:hover a {
	color: #A6E56E; /* Color botones de navegación al poner el puntero */
}


input[type=text] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=date] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

form.formularioadd{
  text-align: center;
}

.newp { 
  width: 20%;}

</style>