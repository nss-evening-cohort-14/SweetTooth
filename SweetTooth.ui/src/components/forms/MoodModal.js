import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import { getMoodById, getMoods } from '../../helpers/data/MoodData';

const MoodModal = ({
  id,
  modalStatus, modalToggle,
  userMood, setUserMood
}) => {
  console.warn('Modal: UserMood', userMood);
  const [moodObj, setMoodObj] = useState({
    id: userMood ? userMood[0] : '',
    name: userMood ? userMood[1] : '',
    softDelete: userMood ? userMood[2] : false
  });
  console.warn('moodObj', moodObj);

  const [moodsArray, setMoodsArray] = useState([]);
  useEffect(() => {
    getMoods().then(setMoodsArray);
    console.warn('moodsArray', moodsArray);
  }, []);

  const handleInputChange = (e) => {
    getMoodById(e.target.value).then(setMoodObj).then(setUserMood);
    setMoodObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.warn('Modal: moodObj', moodObj);
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
              name='id'
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
  modalToggle: PropTypes.func,
  userMood: PropTypes.array,
  setUserMood: PropTypes.func
};
