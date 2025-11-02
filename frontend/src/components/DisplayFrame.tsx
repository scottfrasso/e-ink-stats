/**
 * DisplayFrame - Container component for 7.3" e-ink display
 * Fixed dimensions: 800x480 pixels
 */

interface DisplayFrameProps {
	children: React.ReactNode
	showBorder?: boolean
	backgroundColor?: string
}

export const DISPLAY_WIDTH = 800
export const DISPLAY_HEIGHT = 480

export function DisplayFrame({
	children,
	showBorder = true,
	backgroundColor = "white",
}: DisplayFrameProps) {
	return (
		<div
			style={{
				width: `${DISPLAY_WIDTH}px`,
				height: `${DISPLAY_HEIGHT}px`,
				backgroundColor,
				border: showBorder ? "2px solid #333" : "none",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{children}
		</div>
	)
}
