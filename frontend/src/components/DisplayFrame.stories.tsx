import type { Meta, StoryObj } from "@storybook/react"
import { DisplayFrame } from "./DisplayFrame"
import { MetricCard } from "./MetricCard"

const meta = {
	title: "E-Ink/DisplayFrame",
	component: DisplayFrame,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DisplayFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
	args: {
		children: (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
					fontFamily: "monospace",
					color: "#666",
				}}
			>
				800x480 Display Frame
			</div>
		),
	},
}

export const WithSingleMetric: Story = {
	args: {
		children: (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
				}}
			>
				<MetricCard title="Active Users" value={1234} />
			</div>
		),
	},
}

export const WithMultipleMetrics: Story = {
	args: {
		children: (
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gridTemplateRows: "1fr 1fr",
					gap: "16px",
					padding: "16px",
					height: "100%",
				}}
			>
				<MetricCard title="Active Users" value={1234} />
				<MetricCard title="Revenue" value={45.2} unit="K" />
				<MetricCard title="Conversion" value={3.4} unit="%" />
				<MetricCard title="Page Views" value={8920} />
			</div>
		),
	},
}

export const FullWidthMetric: Story = {
	args: {
		children: (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
					padding: "32px",
				}}
			>
				<MetricCard
					title="Total Revenue"
					value={125.7}
					unit="K"
					width={736}
					height={416}
				/>
			</div>
		),
	},
}
