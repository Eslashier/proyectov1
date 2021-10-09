<template>
<div>
  <Header />
  
  <section class="proy" id="proy">
		<div class="overlay">
			<h2 class="proy_header">GAM<span class="lixon">MAN</span></h2>
      <h3 class="proy_header2">Gestor de proyectos</h3>
		</div>
	</section>

  <br>
  <br>
	<section class="logo-home">
		<img src="../assets/1632184721717.png" alt="">
	</section>
  <br>
  <Footer />
</div>  
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{
    Header,
    Footer,
  },
}
</script>
