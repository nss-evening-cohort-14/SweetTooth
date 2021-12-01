import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, Container
} from 'reactstrap';
import { addSnackMood } from '../../helpers/data/SnackMood';

function SnackMoodForm({
  moods, snacks, setSnackMoods
}) {
  const [snackMoodObj, setSnackMoodObj] = useState({
    MoodId: '',
    SnackId: ''
  });

  const handleInputChange = (e) => {
    setSnackMoodObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addSnackMood(snackMoodObj).then(setSnackMoods);
  };

  return (
    <Container>
      Add a New SnackMood
      <Form autoComplete='off' onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id='moodName'
            type='select'
            name='MoodId'
            placeholder=''
            required
            onChange={handleInputChange}
          >
            <option value=''>Select a Mood</option>
            {moods.map((mood) => (
              <option
                key={mood.id}
                value={mood.id}
              >{mood.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            id='snackName'
            type='select'
            name='SnackId'
            placeholder=''
            required
            onChange={handleInputChange}
          >
            <option value=''>Select a Snack</option>
            {snacks.map((snack) => (
              <option
                key={snack.id}
                value={snack.id}
              >{snack.name}</option>
            ))}
          </Input>
        </FormGroup>
        <Button type='submit' className="btn btn-outline-success btn-sm">Add</Button>
      </Form>
    </Container >
  );
}

export default SnackMoodForm;

SnackMoodForm.propTypes = {
  moods: PropTypes.array,
  snacks: PropTypes.array,
  setSnackMoods: PropTypes.func
};
