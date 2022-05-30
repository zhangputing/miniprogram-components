// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
    data: {
        listItems: ["item1", "item2", "item3"],
    },

    onTextBlockClicked: function (event: any) {
        console.log(event);
    },

    onListValueChanged: function (event: any) {
        console.log(event);
    }
});
