Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@kapilverma994
easylearningbd
/
laravel-vue
1
7
33
Code
Issues
Pull requests
16
Actions
Projects
Wiki
Security
Insights
laravel-vue/resources/js/components/auth/login.vue
@easylearningbd
easylearningbd first commit
Latest commit 4c4990f on May 24, 2020
 History
 1 contributor
105 lines (90 sloc)  2.82 KB



<template>
	<div>
		<div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                  </div>
      <form class="user" @submit.prevent="login">
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
            placeholder="Enter Email Address" v-model="form.email">
    <small class="text-danger" v-if="errors.email"> {{ errors.email[0] }} </small>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password">
 <small class="text-danger" v-if="errors.password"> {{ errors.password[0] }} </small>
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
            <input type="checkbox" class="custom-control-input" id="customCheck">
            <label class="custom-control-label" for="customCheck">Remember
              Me</label>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Login </button>
        </div>
        <hr>

      </form>
                  <hr>
                  <div class="text-center">
 <router-link to="/register" class="font-weight-bold small">Create an Account!</router-link>
                  </div>
                  <div class="text-center">
    <router-link to="/forget" class="font-weight-bold small">Forget Password</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>

</template>



<script type="text/javascript">

  export default {
    created(){
      if (User.loggedIn()) {
        this.$router.push({name: 'home'})
      }
    },
    data(){
    return {
      form:{
        email: null,
        password: null
      },
      errors:{}
    }
  },
  methods:{
    login(){
      axios.post('/api/auth/login',this.form)
      .then(res => {
        User.responseAfterLogin(res)
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        this.$router.push({ name: 'home'})
      })
       .catch(error =>this.errors = error.response.data.errors)
       .catch(
            Toast.fire({
              icon: 'warning',
              title: 'Invalid Email or Password'
            })
        )
    }
  }
  }
</script>


<style type="text/css">

</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
