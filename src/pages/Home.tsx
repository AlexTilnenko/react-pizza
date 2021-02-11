import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, PizzaBlock, Sort, PizzaLoadingBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { getPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import { RootState } from "../redux/reducers";
import { AddedPizza, SortBy } from "../redux/actions/types";

export type SortItem = { name: string; type: string; order: string };
const categoryNames: Array<string> = ["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"];
const sortItems: Array<SortItem> = [
	{ name: "популярности", type: "popular", order: "desc" },
	{ name: "цене", type: "price", order: "desc" },
	{ name: "алфавиту", type: "name", order: "asc" }
];

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const { items, isLoaded } = useSelector(({ pizzas }: RootState) => pizzas);
	const cartItems = useSelector(({ cart }: RootState) => cart.items);
	const { category, sortBy } = useSelector(({ filters }: RootState) => filters);
	useEffect(() => {
		dispatch(getPizzas({ ...sortBy, category }));
	}, [category, sortBy]); // eslint-disable-line react-hooks/exhaustive-deps

	const onSelectCategory = useCallback(
		(categoryIndex: number): void => {
			dispatch(setCategory(categoryIndex));
		},
		[category] // eslint-disable-line react-hooks/exhaustive-deps
	);

	const onClickSortType = useCallback(
		(item: SortBy): void => {
			dispatch(setSortBy(item));
		},
		[sortBy] // eslint-disable-line react-hooks/exhaustive-deps
	);

	const onСlickAddPizza = (obj: AddedPizza) => {
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
						? items.map((item: any) => {
								return (
									<PizzaBlock
										{...item}
										key={item.id}
										onClickAddPizza={onСlickAddPizza}
										addedCount={
											cartItems[item.id] ? cartItems[item.id].items.length : null
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
};

export default Home;
