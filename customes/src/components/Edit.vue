<template>
  <div class="edit container">
   <Alert v-if="alert" :message="alert"></Alert>
   <h1 class="page-hearder">用户编辑</h1>
   <form @submit="updataCustomers">
   	<div class="well">
   		<h4>用户信息</h4>
   		<div class="form-group">
   			<label>姓名</label>
   			<input type="text" class="form-control" placeholder="name" v-model="customer.name">
   		</div>
   		<div class="form-group">
   			<label>电话</label>
   			<input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
   		</div>
   		<div class="form-group">
   			<label>邮箱</label>
   			<input type="text" class="form-control" placeholder="email" v-model="customer.email">
   		</div>
   		<div class="form-group">
   			<label>学历</label>
   			<input type="text" class="form-control" placeholder="education" v-model="customer.education">
   		</div>
   		<div class="form-group">
   			<label>毕业学校</label>
   			<input type="text" class="form-control" placeholder="educationschool" v-model="customer.educationschool">
   		</div>
   		<div class="form-group">
   			<label>职业</label>
   			<input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
   		</div>
   		<div class="form-group">
   			<label>个人简介</label>
   			<textarea rows="10" class="form-control" v-model="customer.profile"></textarea>	
   		</div>
   		<button type="submit" class="btn btn-primary">修改</button>
   	</div>
   </form>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
export default {
  name: 'edit',
  data () {
    return {
      customer:{},
      alert:""
    }
  },
  methods:{
  	updataCustomers(e){
  		if(!this.customer.name || !this.customer.phone || !this.customer.email){
  			this.alert = "请输入用户信息";
  		}else{
  			let newCustomer = {
  				name : this.customer.name,
  				phone : this.customer.phone,
  				email : this.customer.email,
  				education : this.customer.education,
  				educationschool : this.customer.educationschool,
  				profession : this.customer.profession,
  				profile : this.customer.profile
  			}
		axios.put("http://localhost:3000/users/"+this.$route.params.id,newCustomer).then(respone=>{
			this.$router.push({path:'/',query:{alert:"用户信息更新成功"}});
			})
	   	e.preventDefault();
			}
  		e.preventDefault();
    }
  },
  created(){
    axios.get("http://localhost:3000/users/"+this.$route.params.id).then(response=>{
        this.customer = response.data
      })
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
