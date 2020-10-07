import React, { useCallback, useEffect } from "react";
import { Categories, PizzaBlock, Sort, PizzaLoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
// import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
	{ name: "популярности", type: "popular", order: "desc" },
	{ name: "цене", type: "price", order: "desc" },
	{ name: "алфавиту", type: "name", order: "asc" }
];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const cartItems = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);
	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]); // eslint-disable-line react-hooks/exhaustive-deps

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const onClickSortType = useCallback((item) => {
		dispatch(setSortBy(item));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const onСlickAddPizza = (obj) => {
		dispatch(addPizzaToCart(obj));
	};

	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories
						activeCategory={category}
						onClickCategory={onSelectCategory}
						items={categoryNames}
					/>
					<Sort
						items={sortItems}
						activeSortType={sortBy.type}
						onClickSortType={onClickSortType}
					/>
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{isLoaded
						? items.map((item) => {
								return (
									<PizzaBlock
										{...item}
										key={item.id}
										onClickAddPizza={onСlickAddPizza}
										addedCount={
											cartItems[item.id] &&
											cartItems[item.id].items.length
										}
									/>
								);
						  })
						: Array(10)
								.fill(0)
								.map((i, index) => <PizzaLoadingBlock key={index} />)}
				</div>
			</div>
		</div>
	);
}

export default Home;
