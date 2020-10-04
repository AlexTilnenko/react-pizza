import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
   return (
		<ContentLoader
			speed={2}
			width={310}
			height={525}
			viewBox='0 0 315 525'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<circle cx='140' cy='125' r='125' />
			<rect x='0' y='273' rx='4' ry='4' width='280' height='24' />
			<rect x='-1' y='312' rx='4' ry='4' width='280' height='85' />
			<rect x='0' y='418' rx='4' ry='4' width='100' height='34' />
			<rect x='130' y='412' rx='25' ry='25' width='150' height='46' />
		</ContentLoader>
   )
}

export default LoadingBlock
