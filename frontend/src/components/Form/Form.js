import React, { useState } from 'react';
import styled from 'styled-components';

function Form() {
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });
  const { title, amount, date, category, description } = inputState;
  return (
    <FormStyled>
      <div className='input-control'>
        <input type='text' value={title} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form``;

export default Form;
