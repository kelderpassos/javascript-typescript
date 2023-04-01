<template>
  <div class="user-container">
    <div>
      <div>
        <section class="user-card">
          <h2>{{user.name}} {{user.lastName}}</h2>
          <h3>E-mail</h3>
          <p>{{user.email}}</p>
          <h3>Idade</h3>
          <p>{{user.age}}</p>
          <h3>CPF</h3>
          <p>{{user.cpf}}</p>
          <h3>Nome da mãe</h3>
          <p>{{user.motherName}}</p>
          <h3>Nome do pai</h3>
          <p>{{user.fatherName}}</p>
        </section>
        <section class="user-card" v-for="address in addresses" :key="address.id">
          <h2>Endereço</h2>
          <h3>{{address.addressType}}</h3>
          <p>{{address.addressName}}</p>
          <h3>Numero</h3>
          <p>{{address.addressNumber}}</p>
          <h3>Complemento</h3>
          <p>{{address.complement}}</p>
          <h3>Bairro</h3>
          <p>{{address.neighborhood}}</p>
          <h3>CEP</h3>
          <p>{{address.zipCode}}</p>
          <h3>Cidade</h3>
          <p>{{address.city}}</p>
          <h3>Estado</h3>
          <p>{{address.state}}</p>
          <h3>País</h3>
          <p>{{address.country}}</p>
        </section>
        <div class="update-button">
          <button class="update-info" @click.prevent="renderSignupForm">Atualizar informações</button>
        </div>
      </div>
        
      <div v-if="isUpdate">
        <SignupFormVue :updateDetails=true :params="params" :number="key" v-bind:is="SignupFormVue" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import axios from 'axios'
import SignupFormVue from '../components/SignupForm.vue'
import baseUrl from '../utils/baseUrl'

export default {
  components: {
    SignupFormVue
  },
  props: ['id'],
  data() {
    return {
      route: useRoute(),
      user: {},
      addresses: {},
      isUpdate: false,
      params: this.$route.params.id,
      key: 0
    }
  },
  mounted() {
    axios(`${baseUrl}/users/${this.$route.params.id}`)
      .then((res) => res.data)
      .then((data) => {
        this.user = data
        this.addresses = data.address;
      })
      .then(() => console.log(this.addresses))
      .catch(error => console.log(error.message))
  },
  methods: {
    renderSignupForm() {
      if (this.isUpdate) {
        this.isUpdate = false;
      } else {
        this.isUpdate = true;
      }
    },    
  }
}
</script>

<style>
  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user-card {
    border-radius: 10px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.5rem;
    padding: 3rem;    
  }

  .user-card h2 {
    margin-bottom: 1.5rem;
    margin-top: -2rem;
  }
  .user-card p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 18px;
    text-align: center;
  }

  .update-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .update-info {
    height: 2rem;
    width: 10rem;
    margin: 3rem 0;

    font-weight: bold;
  }
  .updateInfo:hover {
    cursor: pointer;
    transition: background-color 0.1s;
  }
   
  @media (max-width: 1500px) { 
    .user-card h2 {
      margin-bottom: 0.5rem;
      margin-top: -1rem;
      font-size: 14px;
    }

    .user-card h3 {
      margin-top: 0.5rem;
      font-size: 14px;
    }

    .user-card p {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      font-size: 14px;
      text-align: center;
    }
    .user-card button {
      height: 3.5rem;
      width: 10rem;
      font-size: 12px;

      font-weight: bold;
      margin-bottom: 1rem;
    }
  }


</style>