import ItemList from './ItemList'
import '../../stylesheets/styles.css'

function Retailer({retailerName, products, shops}) {
    return (
		<fieldset id={retailerName}>        
			<legend>{retailerName}</legend>
			<ItemList title="Catalog" items={products} />
			<ItemList title="Shops" items={shops} />
		</fieldset>
	)
}

Retailer.displayName = 'Retailer'

export default Retailer
