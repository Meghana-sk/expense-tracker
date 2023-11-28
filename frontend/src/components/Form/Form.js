import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button';
import { useGlobalContext } from '../../context/globalContext';
import { plus } from '../../utils/icon';

function Form() {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });
  const { title, amount, date, category, description } = inputState;
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addIncome(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className='input-control'>
        <input
          type='text'
          value={title}
          name={'title'}
          placeholder='Salary Title'
          onChange={handleInput('title')}
        />
      </div>
      <div className='input-control'>
        <input
          type='text'
          value={amount}
          name={'amount'}
          placeholder='Amount'
          onChange={handleInput('amount')}
        />
      </div>
      <div className='input-control'>
        <DatePicker
          id='date'
          placeholderText='Enter date'
          selected={date}
          dateFormat={'dd/MM/yyyy'}
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className='selects input-control'>
        <select
          required
          value={category}
          name='category'
          id='category'
          onChange={handleInput('category')}
        >
          <option value='' disabled>
            Select Option
          </option>
          <option value='salary'>Salary</option>
          <option value='rent'>Rent</option>
          <option value='house'>House</option>
          <option value='stocks'>Stocks</option>
          <option value='medicine'>Medicine</option>
          <option value='food'>Food</option>
          <option value='travel'>Travel</option>
          <option value='shopping'>Shopping</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div className='input-control'>
        <textarea
          name='description'
          value={description}
          placeholder='Add A Reference'
          id='description'
          cols='30'
          rows='4'
          onChange={handleInput('description')}
        ></textarea>
      </div>
      <div className='submit-btn'>
        <Button
          name={'Add Income'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form``;

export default Form;
