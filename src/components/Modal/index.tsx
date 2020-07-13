import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { FormHandles } from '@unform/core';

import Input from '../Input';

import api from '../../services/api';

import { useModal } from '../../hooks/modal';
import { Title, FormCreate } from './styles';

interface TransactionFormData {
  title: string;
  category: string;
  value: number;
  type: 'income' | 'outcome';
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#ededeede',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const TransitionsModal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const classes = useStyles();
  const { open, handleClose } = useModal();
  const [selectedType, setSelectedType] = useState('');

  function handleSelectedType(event: ChangeEvent<HTMLSelectElement>): void {
    const type = event.target.value;

    setSelectedType(type);
  }

  const handleSubmit = useCallback(
    async (data: TransactionFormData) => {
      await api.post('/transactions', {
        title: data.title,
        value: data.value,
        type: selectedType,
        category: data.category,
      });
      handleClose();
    },
    [selectedType, handleClose],
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Title id="transition-modal-title">Criar transação</Title>
            <FormCreate ref={formRef} onSubmit={handleSubmit}>
              <span>
                <Input name="title" type="text" placeholder="Digite o título" />
                <select onChange={handleSelectedType}>
                  <option value="0">Selecione o tipo</option>
                  <option value="income">Income</option>
                  <option value="outcome">Outcome</option>
                </select>
                <Input
                  name="category"
                  type="text"
                  placeholder="Digite a categoria"
                />
                <Input name="value" type="value" placeholder="Digite o valor" />
              </span>
              <button type="submit"> Adicionar </button>
            </FormCreate>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
