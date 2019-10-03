<template>
  <div class="customers container">
  	<Alert v-if="alert" :message="alert"></Alert>
   <h1 class="page-header">用户管理系统</h1>
   <input type="text" placeholder="搜索" class="form-control" v-model="filterInput">
   <br/>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>姓名</th>
				<th>电话</th>
				<th>邮箱</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(customer,index) in filterby(customer,filterInput)" :key="index">
				<th>{{customer.name}}</th>
				<th>{{customer.phone}}</th>
				<th>{{customer.email}}</th>
				<th><router-link class="btn btn-default" :to="'/coustome/'+customer.id">详情</router-link></th>
			</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customer:[],
      alert:"",
      filterInput:""
    }
  },
  methods:{
  	fetchCustomers(){
  		axios.get("http://localhost:3000/users").then(response=>{
  			this.customer = response.data
  		})
  	},
    filterby(customer,value){
      return customer.filter(function(customer) {
        return customer.name.match(value);
      });
    }
  },
  created(){
  	if(this.$route.query.alert){
  		this.alert = this.$route.query.alert;
  		console.log(this.alert);  	}
  	this.fetchCustomers();
  },
  update(){
  	this.fetchCustomers();
  },
  components:{
  	Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
