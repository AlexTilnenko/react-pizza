import React from "react";
import { Categories, PizzaCard, Sort } from "../components";
import PropTypes from "prop-types";

function Home({ items }) {
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories items={["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]} />
					<Sort
						items={[
							{ name: "популярности", type: "popular" },
							{ name: "цене", type: "price" },
							{ name: "алфавиту", type: "alphabet" }
						]}
					/>
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{items.map((item) => {
						return <PizzaCard {...item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

Home.defaultProps = {
	items: {}
};

export default Home;
