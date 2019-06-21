export default class LocationListener {
    onHrefChanged (callback: Function): void {
        let locationHref = window.location.href;

        setInterval(function () {
            if (locationHref !== window.location.href) {
                locationHref = window.location.href;

                callback(locationHref);
            }
        }, 100);
    }
}