import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import styles from './movies.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!searchQuery) {
      alert('please enter');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmitForm}>
      <button type="submit" className={styles.searchForm_button}>
        <ImSearch />
      </button>
      <label>
        <input
          className={styles.searchForm_input}
          type="text"
          placeholder=""
          name="search"
          value={searchQuery || ''}
          onChange={e => setSearchQuery(e.target.value.toLocaleLowerCase())}
        />
      </label>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
