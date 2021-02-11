import React from "react";

interface ICategoriesProps {
	items: Array<{}>;
	onClickCategory: (categoryIndex: number) => void;
	activeCategory: number;
}

const Categories: React.FC<ICategoriesProps> = React.memo(function Categories({
	items,
	onClickCategory,
	activeCategory
}) {
	return (
		<div className='categories'>
			<ul>
				<li className={activeCategory === 0 ? "active" : ""} onClick={() => onClickCategory(0)}>
					Все
				</li>
				{items &&
					items.map((item, index) => {
						return (
							<li
								className={activeCategory === index + 1 ? "active" : ""}
								onClick={() => onClickCategory(index + 1)}
								key={index + 1}
							>
								{item}
							</li>
						);
					})}
			</ul>
		</div>
	);
});

export default Categories;
