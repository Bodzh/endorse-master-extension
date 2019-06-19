
export default class Actions {
    public getBackground (): object {
        return {
            endorseContacts: 'bg_endorse_contacts',
            changeWidgetPosition: 'bg_change_widget_position',
            getWidgetPosition: 'bg_get_widget_position'
        }
    }

    public getContent (): object {
        return {
            endorseContacts: 'content_endorse_contacts'
        }
    }
}