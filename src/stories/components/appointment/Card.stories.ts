import { ref } from 'vue'
import Card from '../../../appointment/components/Card.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Location } from '../../../appointment/types';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {

  }
}

const Template = (args: any) => ({
  components: { Card },
  setup() {
    const location = ref<Location>({
      id: 10998878976097,
      title: 'Dom Severino',
      content: 'Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI',
      opened: true,
      mask: 'required',
      towel: 'required',
      fountain: 'partial',
      locker_room: 'allowed',
      schedules: [
        {
          weekdays: 'Seg. à Sex.',
          hour: '06h às 22h'
        },
        {
          weekdays: 'Sáb.',
          hour: 'Fechada'
        },
        {
          weekdays: 'Dom.',
          hour: 'Fechada'
        }
      ]
    })
    return {...args, location }
  },
  template: `<Card v-bind="args" :location="location" :label="'Email'" />`
});

export const Main = Template.bind({})

export default meta;