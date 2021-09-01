<template>

  <section>

    <cabecalho :valor="titulo"/>

    <div class="container">

      <datadodia :dia="date"/>
      <br>
        <div class="input-group">
            <input @keyup.enter="adicionarTarefa" v-model="novaTarefa" type="text" />
            <span class="input-group-btn">
                <button @click="adicionarTarefa" class="btn btn-primary">
                 Adicionar 
                </button>
            </span>
        </div>

        <ul>
            <li
            v-for="(tarefa,index) in tarefas"
            :key="index"
            :class="{ removed: tarefa.checked }"
            >

            <input type="checkbox" v-model="tarefa.checked" />
            <label> {{ tarefa.titulo }} </label>
            </li>
        </ul>

        <footer>
            <em>Altere a data da sua Lista do Dia: </em>
            <input v-model="date" type="date" />
          <br>
          <br>
            <em>Altere o título da sua Lista do Dia: </em>
            <input v-model="titulo" type="text" />
          <br>
          <br>
            <em>Altere a mensagem do seu Rodapé: </em>
            <input v-model="mensagem" type="text" />
        </footer>

    </div>

    <rodape :mensagem="mensagem" />

  </section>
  
</template>





<script>
import cabecalho from "@/components/cabecalho";
import rodape from "@/components/rodape";
import datadodia from "@/components/datadodia";




export default {
  name: "App-doDia",
  components: { cabecalho, rodape, datadodia},
    data() {
    return {
      mensagem: "marialauraviana@hotmail.com - JOINVILLE/SC",
      date: "(2021-09-01)",
      titulo: "Lista do Dia: Quarta-feira",
      novaTarefa: "",
      tarefas: [
        { titulo: "Ler livro do Harry Potter", checked: false},
        { titulo: "Revisar os simulados", checked: false},
        { titulo: "Fazer exercícios", checked: false},
        { titulo: "Andar de bike", checked: false},
        { titulo: "Visitar a vó", checked: false},
        { titulo: "Limpar o quintal no começo da manhã", checked: false},
        { titulo: "Assistir um filme", checked: false},
      ],
    };
  },
  methods: {
    adicionarTarefa() {
      this.tarefas.push({
        titulo: this.novaTarefa,
        checked: false,
      });
      this.novaTarefa = "";
    },
  },    
};
</script>
 




<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
  
}
.container footer input{
  width: 50%;
  
}
.input-group {
  text-align: center;
}
.input-group input {
  width: 82%;
}

ul li {
  list-style:none;
}

.removed {
  color: gray;
}

.removed label {
  text-decoration: line-through;
}



</style>