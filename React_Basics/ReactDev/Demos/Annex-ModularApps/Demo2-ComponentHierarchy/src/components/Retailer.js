import ProductList from './ProductList'
import ShopList from './ShopList'
import '../../stylesheets/styles.css'

function Retailer({retailerName, products, shops}) {
    return (
		<fieldset id={retailerName}>        
			<legend>{retailerName}</legend>
			<ProductList title="Catalog" items={products} />
			<ShopList title="Shops" items={shops} />
		</fieldset>
	)
}

Retailer.displayName = 'Retailer'

export default Retailer
