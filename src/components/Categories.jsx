import React from "react";

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? "active" : ""}
					onClick={() => onClickCategory(null)}
				>
					Все
				</li>
				{items &&
					items.map((item, index) => {
						return (
							<li
								className={activeCategory === index ? "active" : ""}
								onClick={() => onClickCategory(index)}
								key={index}
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
