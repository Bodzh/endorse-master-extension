import '../style/content.scss';
import WidgetManagerClass from './widget/class.widgetManager.ts';

const WidgetManager = new WidgetManagerClass();

$(function () {
    WidgetManager.initWidget();
});