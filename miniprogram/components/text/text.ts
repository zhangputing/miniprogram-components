// components/text.ts
Component({
    /**
     * Component properties
     */
    properties: {
        text: {
            type: String,
            value: "",
        },
        tapEventName: {
            type: String,
            value: "TextTap",
        },
    },

    methods: {
        onClick: function () {
            this.triggerEvent("TextClicked", this.data.tapEventName);
        },
    },
});
