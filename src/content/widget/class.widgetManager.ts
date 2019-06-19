import Widget from './widget.svelte';

export default class WidgetManager {
    public initWidget (): void {
        let div = $.parseHTML('<div style="z-index: 102; position: absolute" class="widget-prepend-block"></div>');

        $(document.body).prepend(div);

        const widget = new Widget({
           target: document.querySelector('.widget-prepend-block')
        });
    }
}