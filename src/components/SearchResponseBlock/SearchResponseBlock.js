import './SearchResponseBlock.css';

function SearchResponseBlock({ message }) {

  const searchResponseClasses = message ? 'search-response search-response_visible' : 'search-response';
  
  return (
    <section className={searchResponseClasses}>
      <p className="search-response__text">{message}</p>
    </section>
  );
};

export default SearchResponseBlock;
 