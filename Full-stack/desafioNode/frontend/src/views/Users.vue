<template>
  <div class="main-div">
    <main class="users-container">
      <h2>Todos os usuários</h2>
      <div class="list-container">
        <ul v-for="user in users" :key="user.id">
          <li>{{ user.name }} {{ user.lastName }}</li>
          <li>{{ user.email }}</li>
          <div>
            <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">
              <button>Detalhes do usuário</button>
            </router-link>
            <button :id=user.id @click="deleteUser">Deletar usuário</button>
          </div>
        </ul>
      </div>
      <h3 v-if="userDeleted">{{userDeleted}}</h3>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      userDeleted: '',
    }
  },
  mounted() {
    this.getUsers();    
  },
  methods: {
    getUsers() {
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: {
          authorization: token
        },
      }
    axios(`${baseUrl}/users`, config)
      .then((res) => this.users = res.data)
      .catch(error => console.error(error.message));
    },
    deleteUser({ target }) { 
      axios.delete(`${baseUrl}/users/${target.id}`)
        .then(({ status }) => {
          if (status === 200) {
            this.userDeleted = 'Usuário deletado';
            this.getUsers();
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
  .main-div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.5rem;
  }

  .users-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

    width: 50rem;
    margin-top: 1rem ;
    margin-bottom: 2rem ;
  }

  .users-container h2 {
    margin-top: 1rem;
  }

  .users-container h3 {
    margin-bottom: 1rem ;
    color: red;
  }

  .list-container ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem 0;
    width: 30rem;

    border-radius: 10px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .list-container li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    margin: 0.15rem 0;
  }

  .list-container div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25rem;

    margin: 0.75rem 0;
  }

  .list-container div button {
    border: none;
    border-radius: 2px;

    height: 2rem;
    width: 10rem;
    margin-top: 1rem;

    font-weight: bold;
  }

  .list-container div button:hover {
    cursor: pointer;
    transition: background-color 0.1s;
  }

</style>