import { Story, Meta } from '@storybook/react/types-6-0';
import Buttom from '.';

export default {
    title: 'Buttom',
    component: Buttom
} as Meta;

export const Basic: Story = (args) => <Buttom {...args} />;
