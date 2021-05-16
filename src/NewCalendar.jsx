import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

    const NewCalendar = ({ input, meta: { touched, error } }) => (

        function formatDateForInput(storedDate) {
            // the returned value will be available as `input.value`
            return moment(pickedDate).format('right format for your input')
          }(
          
          function parseDateForStore(pickedDate) {
            // the returned value will be stored in the redux store
            return moment(storedDate).format('desired format for storage')
          }
          

      <div>
                  <Field
            component={ MyDatePicker }
            format={ formatDateForInput }
            parse={ parseDateForStore }
          />,
        {
          touched && error &&
          <span className="error">
            {error}
          </span>
        }
      </div>
    );

    NewCalendar.propTypes = {
      input: PropTypes.shape().isRequired,
      meta: PropTypes.shape().isRequired
    };

    export default NewCalendar;