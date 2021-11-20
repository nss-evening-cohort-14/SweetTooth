import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import getMoods from '../../helpers/data/MoodData';

const MoodModal = ({
  id,
  modalStatus, modalToggle
}) => {
  const [moodObj, setMoodObj] = useState({
    id: 'hfjdksjfhjdkjsi',
    name: 'Fiesty',
    softDelete: false
  });

  const [moodsArray, setMoodsArray] = useState([]);
  useEffect(() => {
    getMoods().then(setMoodsArray);
    console.warn('moodsArray', moodsArray);
  }, []);

  const handleInputChange = (e) => {
    setMoodObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modalToggle();
    // if () {
    //   //addMood
    // } else {
    //   //updateMood
    // }
  };
  return (
    <Modal
      id={id}
      size='md'
      isOpen={modalStatus}
      toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>Select Your Mood!</ModalHeader>
      <ModalBody>
        <Form
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label for="mood">I&apos;m feeling...</Label>
            <Input
              id='moodId'
              type='select'
              name='moodId'
              placeholder=''
              value={moodObj.id}
              onChange={handleInputChange}
            >
              <option value=''>Please select a snack mood</option>
              {moodsArray.map((mood) => (
                <option
                  key={mood.id}
                  value={mood.id}
                >{mood.name}</option>
              ))}
            </Input>
          </FormGroup>
          <Button type='submit'>Let&apos;s get snackin&apos;</Button>
          <Button onClick={modalToggle}>Postpone</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default MoodModal;

MoodModal.propTypes = {
  id: PropTypes.string,
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func
};
