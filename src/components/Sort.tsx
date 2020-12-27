import React, { useState, useEffect, useRef } from "react";
import { SortItem } from "../pages/Home";
import { SortBy } from "../redux/actions/types";

interface ISortProps {
   items: Array<SortItem>
   onClickSortType: (item: SortBy) => void
   activeSortType: string
}


const Sort: React.FC<ISortProps> = React.memo(function Sort({ items, activeSortType, onClickSortType }) {
	const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
   const sortRef = useRef<HTMLDivElement>(null);
	let activeLabel: string = items.find(obj => obj.type === activeSortType)!.name;

	useEffect(() => {
      document.body.addEventListener("click", outsideClickHandle);
      return () => document.body.removeEventListener("click", outsideClickHandle);
	}, []);

	const outsideClickHandle = (e: any): void => {
      const path = e.path || (e.composedPath && e.composedPath());
		if (!path.includes(sortRef.current)) {
			setVisiblePopup(false);
		}
	};

	const toggleVisiblePopup = (): void => {
		setVisiblePopup(!visiblePopup);
	};

	const onSelectItem = (item: SortBy): void => {
		onClickSortType(item);
		setVisiblePopup(false);
	};

	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<i>
					<svg
						className={visiblePopup ? "active" : ""}
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
							fill='#2C2C2C'
						/>
					</svg>
					<b>Сортировка по:</b>
				</i>
				<span onClick={toggleVisiblePopup}>{activeLabel}</span>
			</div>
			{visiblePopup && (
				<div className='sort__popup'>
					<ul>
						{items.map((item, index) => (
							<li
								key={`${item.type}_${index}`}
								className={activeSortType === item.type ? "active" : ""}
								onClick={() => onSelectItem(item)}
							>
								{item.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
});

export default Sort;
