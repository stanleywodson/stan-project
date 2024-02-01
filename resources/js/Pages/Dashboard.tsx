// src/CadastroForm.js
import React, { useState } from 'react';

const CadastroForm = () => {
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const [endereco, setEndereco] = useState({
    rua: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const handleChangeDadosPessoais = (e) => {
    const { name, value } = e.target;
    setDadosPessoais((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleChangeEndereco = (e) => {
    const { name, value } = e.target;
    setEndereco((prevEndereco) => ({
      ...prevEndereco,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode realizar a lógica para enviar os dados para o backend, por exemplo.
    console.log('Dados Pessoais:', dadosPessoais);
    console.log('Endereço:', endereco);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cadastro Pessoal</h2>

      {/* Dados Pessoais */}
      <div className="mb-4">
        <label htmlFor="nome" className="block text-sm font-semibold text-gray-600">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={dadosPessoais.nome}
          onChange={handleChangeDadosPessoais}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={dadosPessoais.email}
          onChange={handleChangeDadosPessoais}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telefone" className="block text-sm font-semibold text-gray-600">
          Telefone:
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={dadosPessoais.telefone}
          onChange={handleChangeDadosPessoais}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">Endereço</h2>

      {/* Endereço */}
      <div className="mb-4">
        <label htmlFor="rua" className="block text-sm font-semibold text-gray-600">
          Rua:
        </label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={endereco.rua}
          onChange={handleChangeEndereco}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cidade" className="block text-sm font-semibold text-gray-600">
          Cidade:
        </label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={endereco.cidade}
          onChange={handleChangeEndereco}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="estado" className="block text-sm font-semibold text-gray-600">
          Estado:
        </label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={endereco.estado}
          onChange={handleChangeEndereco}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep" className="block text-sm font-semibold text-gray-600">
          CEP:
        </label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={endereco.cep}
          onChange={handleChangeEndereco}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default CadastroForm;
