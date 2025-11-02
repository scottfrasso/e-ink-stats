interface MetricCardProps {
	title: string
	value: string | number
	unit?: string
	width?: number
	height?: number
}

export function MetricCard({
	title,
	value,
	unit,
	width = 360,
	height = 216,
}: MetricCardProps) {
	return (
		<div
			style={{
				width: `${width}px`,
				height: `${height}px`,
				border: "2px solid black",
				padding: "16px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
				fontFamily: "monospace",
			}}
		>
			<div
				style={{
					fontSize: "14px",
					fontWeight: "bold",
					marginBottom: "8px",
					textTransform: "uppercase",
				}}
			>
				{title}
			</div>
			<div
				style={{
					fontSize: "48px",
					fontWeight: "bold",
				}}
			>
				{value}
				{unit && (
					<span style={{ fontSize: "24px", marginLeft: "4px" }}>{unit}</span>
				)}
			</div>
		</div>
	)
}
