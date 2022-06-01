// component/comboBox/comboBox.ts
Component({
    /**
     * Component properties
     */
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

    /**
     * Component initial data
     */
    data: {
        showItemsList: false,
    },

    /**
     * Component methods
     */
    methods: {
        raiseValueChanged: function () {
            this.triggerEvent("ComboBoxValueChanged", { selectedIndex: this.data.selectedIndex });
        },

        onSelectChanged: function (e: { detail: { selectedIndex: number } }) {
            this.setData({
                selectedIndex: e.detail.selectedIndex,
            });
            this.setData({
                showItemsList: false,
            });
            this.raiseValueChanged();
        },

        showItemsList: function () {
            this.setData({
                showItemsList: !this.data.showItemsList,
            });
        },
    },
});
