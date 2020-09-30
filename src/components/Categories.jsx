import React, { useState } from "react";

function Categories({ items }) {
	const [activeItem, setActiveItem] = useState(null);

   const onSelectItem = (index) => {
      setActiveItem(index);
   }
   return (
		<div className='categories'>
			<ul>
				<li className={activeItem === null ? "active" : ""} onClick={() => onSelectItem(null)}>
					Все
				</li>
				{items.map((item, index) => {
					return (
						<li
							className={activeItem === index ? "active" : ""}
							onClick={() => onSelectItem(index)}
							key={index}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Categories;
