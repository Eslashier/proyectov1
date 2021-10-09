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

    <div>
      <h2 class="mt-5">Gestor de Proyectos</h2>
    </div>

  <table>
  <tr v-for="item in projects" :key="item.id">
  <td>{{item.name}}</td>
  </tr>
  </table>
  </div>
</template>


<script>
import axios from 'axios';

export default{
  name:'Main',
  data(){
    return{
      projects:[],
    }
  },

  async mounted(){
    let result = await axios.get("http://localhost:3000/projects");
    console.warn(result)
    this.projects=result.data;
  },

  methods:{
    logout()
    {
      localStorage.clear();
      this.$router.push({name:'Login'})
    },
  }
}

</script>
