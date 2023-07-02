import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {createServer,Model} from 'miragejs'

createServer({

  models: {
    transaction:Model
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
        id:1,
        title:'Freelance de websites',
        categoria:'Dev',
        type:'deposit',
        valor:200000,
        createdAt:new Date('2023-05-10'),
      },

      {
        id:2,
        title:'Pagamento aluguel',
        categoria:'despesas',
        type:'lifting',
        valor:100000,
        createdAt:new Date('2023-05-20'),
      }
    ]
    })
  },
  routes(){
    this.namespace='api'
    this.get('/transactions',()=>{
      return this.schema.all('transaction');

    }),
    this.post('/transactions',(schema,request)=>{
      const data=JSON.parse(request.requestBody);
      return schema.create('transaction',data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
