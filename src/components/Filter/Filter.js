import { InputName, InputText } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeActionFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  
  return (
    <>
      <InputName>
        Find contacts
        <InputText
          type="text"
          name='filter'
          value={filter}
          onChange={(e) => dispatch(changeActionFilter(e.target.value))}
        />
      </InputName>
    </>
  );
};

