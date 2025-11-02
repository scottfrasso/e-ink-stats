import type { Meta, StoryObj } from "@storybook/react"
import { DisplayFrame } from "./DisplayFrame"
import { MetricCard } from "./MetricCard"

const meta = {
	title: "E-Ink/MetricCard",
	component: MetricCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		width: { control: "number" },
		height: { control: "number" },
	},
} satisfies Meta<typeof MetricCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: "Active Users",
		value: 1234,
	},
}

export const WithUnit: Story = {
	args: {
		title: "Revenue",
		value: 45.2,
		unit: "K",
	},
}

export const CustomSize: Story = {
	args: {
		title: "Conversion Rate",
		value: 3.4,
		unit: "%",
		width: 400,
		height: 250,
	},
}

export const SmallCard: Story = {
	args: {
		title: "Views",
		value: 892,
		width: 200,
		height: 150,
	},
}

export const InDisplayFrame: Story = {
	args: {
		title: "Active Users",
		value: 1234,
	},
	decorators: [
		(Story) => (
			<DisplayFrame>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
					}}
				>
					<Story />
				</div>
			</DisplayFrame>
		),
	],
}
