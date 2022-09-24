import { InputName, InputText } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeActionFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleItemFilter = e => {
    dispatch(changeActionFilter(e.target.value))
  }
  return (
    <>
      <InputName>
        Find contacts
        <InputText
          type="text"
          value={filter}
          onChange={handleItemFilter}
        />
      </InputName>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
