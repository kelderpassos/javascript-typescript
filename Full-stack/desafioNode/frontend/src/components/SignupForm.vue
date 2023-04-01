<template>
      <form @submit.prevent="submitForm" class="signup-form">
        <h3 v-if="newStatus">{{newStatus}}</h3>
        <div class="signup-info">
            <label for="">Nome:</label>
            <input type="text" required name="nome" v-model="personalInfo.name" placeholder="Primeiro Nome">
            
            <label for="">Sobrenome:</label>
            <input type="text" required name="Sobrenome" v-model="personalInfo.lastName" placeholder="Sobrenome completo">
          
            <label for="">Idade:</label>
            <input type="number" required name="idade" v-model="personalInfo.age" placeholder="Idade">
          
            <label for="">CPF:</label>
            <input type="text" required name="cpf" v-model="personalInfo.cpf" placeholder="Somente números">
            
            <label for="">E-mail:</label>
            <input type="email" required name="e-mail" v-model="personalInfo.email" placeholder="Insira seu e-mail">
            
            <label for="">Senha:</label>
            <input type="password" required name="senha" v-model="personalInfo.password" placeholder="Senha com mais de 7 characteres">
            <p v-if="shortPassword">{{shortPassword}}</p>
            
            <label for="">Nome da mãe</label>
            <input type="text" required name="nomeNae" v-model="personalInfo.motherName" placeholder="Nome da mãe">
            
            <label for="">Nome do pai</label>
            <input type="text" required name="nomePai" v-model="personalInfo.fatherName" placeholder="Nome do pai">
          <hr>
          <label for="">CEP</label>
          <input type="number" maxlength="8" required name="CEP" v-model="personalInfo.address.zipCode" @keyup="getCep" placeholder="somente números">
       
          <label for="">Endereço</label>
          <input type="text" required name="endereço" v-model="personalInfo.address.addressName" placeholder="Endereço">
          
          <label for="">Número</label>
          <input type="number" required name="numero" v-model="personalInfo.address.addressNumber">
       
          <label for="">Tipo</label>
            <select required v-model="personalInfo.address.addressType">
              <option value="Rua">Rua</option>
              <option value="Avenida">Avenida</option>
            </select>
        
          <label for="">Bairro</label>
          <input type="text" required name="bairro" v-model="personalInfo.address.neighborhood" placeholder="Bairro">
      
          <label for="">Complemento</label>
          <input type="text" name="complemento" v-model="personalInfo.address.complement" placeholder="Complemento">
      
          <label for="">Cidade</label>
          <input type="text" required name="cidade" v-model="personalInfo.address.city" placeholder="Cidade">

          <label for="">Estado</label>
          <input type="text" required name="estado" v-model="personalInfo.address.state" placeholder="Estado">
    
        </div>
        <div class="signup-buttons">
          <button>Enviar</button>
          <router-link :to="{ name: 'LoginForm' }">
            <button>Voltar</button>
          </router-link>
        </div>
      </form>
</template>

<script>
  import axios from 'axios';
import baseUrl from '../utils/baseUrl';

  export default {
    props: {
      updateDetails: Boolean,
      params: String,
      number: Number
    },

    data() {
      return {        
        personalInfo: {
          name: '',
          lastName: '',
          age: '',
          cpf: '',
          email: '',
          password: '',
          motherName: '',
          fatherName: '',
          address: {
            zipCode: '',
            addressName: '',
            addressNumber: '',
            addressType: '',     
            neighborhood: '',
            complement: '',
            city: '',
            state: '',
            country: 'Brazil'
          },
        },
        shortPassword: '',
        userCreated: '',
        userUpdated: '',
        newStatus: '',
        viaCepURL: 'https://viacep.com.br/ws/'
      }
    },
    methods: {
      async getCep() {
        const URL = `${this.viaCepURL}${this.personalInfo.address.zipCode}/json/`;
        const { data } = await axios(URL);
        const { logradouro, bairro, localidade, uf } = data;
        this.personalInfo.address.addressName = logradouro;     
        this.personalInfo.address.neighborhood = bairro;        
        this.personalInfo.address.city = localidade;
        this.personalInfo.address.state = uf;
      },

      async updateUser() {
        axios.put(`${baseUrl}/users/${this.params}`, this.personalInfo)
        .then((res) => res.data)
        .then((data) => this.user = data).then((data) => {
          if (data) {
            this.newStatus = 'Informações atualizadas';
          }
        })
        .catch(error => console.log(error.message))
      },
      
      async submitForm() {
        this.shortPassword = this.personalInfo.password.length > 7 ? '' : 'A senha deve conter mais que 7 characteres'
        
        if(this.updateDetails === true) {
          this.updateUser();          
          return
        }
        
        await axios.post(`${baseUrl}/signup`, this.personalInfo)
          .then(({ status }) => {
            if (status === 201) this.newStatus = 'Usuário criado';
          });
        
          this.personalInfo = {
            name: '',
            lastName: '',
            age: '',
            cpf: '',
            email: '',
            password: '',
            motherName: '',
            fatherName: '',
            address: {
              zipCode: '',
              addressName: '',
              addressNumber: '',
              addressType: '',     
              neighborhood: '',
              complement: '',
              city: '',
              state: '',
              country: 'Brazil'
            },
          };          
        },
    }
  }
</script>

<style>
  .signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

  }

  .signup-form h3 {
    color: blue;
    margin-bottom: 1rem;   
    margin-top: 2rem;  
  }

  .signup-form hr {
    border: rgb(124, 126, 131) solid 1px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 50vh;
  }

  .signup-form input {
    padding-left: 5px;
  }

  .signup-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .signup-info label {
    font-weight: bold;
    margin-bottom: 0.45rem;
    margin-top: 0.45rem;
  }

  .signup-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
  }

  .signup-buttons button {
    border: none;
    border-radius: 2px;

    height: 2rem;
    width: 10rem;
    margin-top: 1rem;

    font-weight: bold;
  }

  .signup-buttons button:hover {
  cursor: pointer;
  transition: background-color 0.1s;
  }
</style>