import { Draggable } from '@shopify/draggable';

const container = document.querySelector('#app')

const droppable = new Draggable.Droppable(container, {
  draggable: '#hedgehog',
  droppable: '#hedgehog'
});

droppable.on('drag:start', () => console.log('drag:start'));
droppable.on('droppable:over', () => console.log('droppable:over'));
droppable.on('droppable:out', () => console.log('droppable:out'));