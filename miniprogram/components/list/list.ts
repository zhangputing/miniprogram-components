Component({
    properties: {
        items: {
            type: Array,
            value: [],
        },
        selectedIndex: {
            type: Number,
            value: -1,
        },
    },

    methods: {
        raiseValueChanged: function () {
            this.triggerEvent("ListValueChanged", { selectedIndex: this.data.selectedIndex });
        },

        onItemClick: function (e: { currentTarget: { dataset: { index: number } } }) {
            this.setData({
                selectedIndex: e.currentTarget.dataset.index,
            });
            this.raiseValueChanged();
        },
    },
});
