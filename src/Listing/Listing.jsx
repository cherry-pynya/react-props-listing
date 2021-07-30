import { PropTypes } from 'prop-types';
import Item from './Item/Item';

export default function Listing({items}) {
    return (
        <div className='item-list'>
            {items.map((el) => <Item item={el} key={el.listing_id} />)}
        </div>
    );
}

Listing.propTypes = {
    items: PropTypes.array.isRequired,
}

Listing.defaultProps = {
    items: [],
}
