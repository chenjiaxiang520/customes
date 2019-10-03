<template>
  <div class="detail container">
  	<router-link to="/" class="btn btn-default">返回</router-link>
   <h1 class="page-header">
   	{{customer.name}}
   	<span class="pull-right">
   		<router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
		<button class="btn btn-danger" @click="del(customer.id)">删除</button>
   	</span>
   </h1>
   <ul class="list-group">
		<li class="list-group-item">
			<span class="glyphicon glyphicon-phone"> 
			 {{customer.phone}}
			</span>
		</li>
		<li class="list-group-item">
			<span class="glyphicon glyphicon-envelope"> 
			 {{customer.email}}
			</span>
		</li>
   </ul>
   <ul class="list-group">
		<li class="list-group-item">
			<span class="glyphicon glyphicon-list-alt"> 
			 {{customer.education}}
			</span>
		</li>
		<li class="list-group-item">
			<span class="glyphicon glyphicon-book">
			 {{customer.educationschool}}
			</span>
		</li>
		<li class="list-group-item">
			<span class="glyphicon glyphicon-phone">
			 {{customer.profession}}
			</span>
		</li>
		<li class="list-group-item">
			<span class="glyphicon glyphicon-file">
			 {{customer.profile}}
			</span>
		</li>
   </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CustomerDetails',
  data () {
    return {
      customer:""
    }
  },
  methods:{
  	fetchCustomers(id){
  		axios.get("http://localhost:3000/users/"+id).then(response=>{
  			console.log(response)
  			this.customer = response.data
  		})
  	},
  	del(id){
  		axios.delete("http://localhost:3000/users/"+id).then(response=>{
  			this.$router.push({path:'/',query:{alert:"用户删除成功"}});
  		})
  	}
  },
  created(){
  	this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
