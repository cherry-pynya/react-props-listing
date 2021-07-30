import { PropTypes } from 'prop-types';

export default function Item({item}) {
    const { url, MainImage, title, currency_code, price,  quantity , state } = item;
    if (state !== 'active') {
        return false;
    }
    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img  src={MainImage.url_fullxfull} alt={title} />
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{ title.length > 50 ? `${title.slice(0, 59)}...`
                : title}</p>
                <p className='item-price'>{currency_code === 'USD' ? '$' 
                : currency_code === 'EUR' ? '€' 
                : currency_code}
                {price}
                </p>
                <p className={
                    quantity < 10 ? 'item-quantity level-low' 
                    : quantity < 20 ? 'item-quantity level-medium' 
                    : 'item-quantity level-high'
                }>{quantity} left</p>
            </div>
        </div>
    );
}

Item.propTypes = {
    items: PropTypes.object.isRequired,
}

Item.defaultProps = {
    items: {},
}
