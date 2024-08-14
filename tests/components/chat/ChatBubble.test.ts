import ChatBubble from "@/components/chat/ChatBubble.vue";
import { mount } from "@vue/test-utils";

describe('</ChatBubble />', () => {

    test('renders own message correctly', () => {

        const message = 'Hola Mundo';
        const wrapper = mount(ChatBubble, {
            props: { message, itsMine: true }
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
        expect(wrapper.find('.bg-blue-200').text()).toContain(message);
        expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
    });

    test('render received message correctly', () => {
        const message = '?';
        const wrapper = mount(ChatBubble, {
            props: { message, itsMine: false }
        });

        expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
        expect(wrapper.find('.bg-gray-300').text()).toContain(message);
        expect(wrapper.find('img').exists()).toBe(false);
    });


    test('render received message correctly with image', () => {
        const message = '?';
        const image = 'image.jpg';
        const wrapper = mount(ChatBubble, {
            props: { message, itsMine: false, image }
        });

        expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
        expect(wrapper.find('.bg-gray-300').text()).toContain(message);
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('img').attributes('src')).toBe(image);
    });

});