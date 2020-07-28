import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCayegoria () {
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  } 

  export default CadastroCayegoria;