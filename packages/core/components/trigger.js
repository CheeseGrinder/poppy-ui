var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TriggerController_instances, _TriggerController_destroy, _TriggerController_getEvent;
class TriggerController {
    constructor() {
        _TriggerController_instances.add(this);
        _TriggerController_destroy.set(this, void 0);
    }
    /**
     * Removes the click listener from the trigger element.
     */
    removeListener() {
        __classPrivateFieldGet(this, _TriggerController_destroy, "f")?.call(this);
        __classPrivateFieldSet(this, _TriggerController_destroy, undefined, "f");
    }
    /**
     * Adds a click listener to the trigger element.
     * Presents the overlay when the trigger is clicked.
     *
     * @param overlay The overlay element.
     * @param trigger The ID of the element to add a click listener to.
     */
    addListener(overlay, trigger, action = 'click') {
        this.removeListener();
        const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;
        if (!triggerEl) {
            console.warn(`[Poppy Warning]: A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, overlay);
            return;
        }
        const configureTriggerInteraction = (targetEl, overlayEl) => {
            const openOverlay = (ev) => {
                ev.preventDefault();
                overlayEl.present();
            };
            targetEl.addEventListener(__classPrivateFieldGet(this, _TriggerController_instances, "m", _TriggerController_getEvent).call(this, action), openOverlay);
            return () => {
                targetEl.removeEventListener(__classPrivateFieldGet(this, _TriggerController_instances, "m", _TriggerController_getEvent).call(this, action), openOverlay);
            };
        };
        __classPrivateFieldSet(this, _TriggerController_destroy, configureTriggerInteraction(triggerEl, overlay), "f");
    }
    static create() {
        return new TriggerController();
    }
}
_TriggerController_destroy = new WeakMap(), _TriggerController_instances = new WeakSet(), _TriggerController_getEvent = function _TriggerController_getEvent(action) {
    const triggers = {
        click: 'click',
        hover: 'mouseenter',
        'context-menu': 'contextmenu',
    };
    return triggers[action];
};

export { TriggerController as T };

//# sourceMappingURL=trigger.js.map