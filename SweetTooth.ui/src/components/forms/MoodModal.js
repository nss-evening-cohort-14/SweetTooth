import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import { getMoodById, getMoods } from '../../helpers/data/MoodData';
import { updateUser } from '../../helpers/data/userData';

const MoodModal = ({
  id,
  modalStatus, modalToggle,
  userMood, setUserMood,
  user, setUser
}) => {
  const [moodsArray, setMoodsArray] = useState([]);
  useEffect(() => {
    getMoods().then(setMoodsArray);
  }, []);

  const [tempUserMood, setTempUserMood] = useState(userMood);
  const handleInputChange = (e) => {
    getMoodById(e.target.value).then(setTempUserMood);
  };
  const postpone = () => {
    setTempUserMood({});
    modalToggle();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.warn('tempUserMood', tempUserMood);
    // console.warn('userMood', userMood);
    getMoodById(tempUserMood.id).then(setUserMood);
    // why is userMood not resetting?
    const userObj = user;
    userObj.moodId = tempUserMood.id;
    updateUser(user.id, userObj).then(setUser);
    modalToggle();
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
            <Label for="mood">I&apos;m feeling... </Label>
            <Input
              id='moodId'
              type='select'
              name='id'
              placeholder=''
              value={tempUserMood.id}
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
          <Button onClick={postpone}>Postpone</Button>
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
  userMood: PropTypes.any,
  setUserMood: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func
};
