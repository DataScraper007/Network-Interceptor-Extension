const n = {};
chrome.action.onClicked.addListener(function (e) {
    if (n[e.id]) chrome.windows.update(n[e.id], {
        focused: !0
    });
    else {
        const d = Math.round(e.width * .65),
            i = Math.round(e.height * .8),
            o = Math.round(e.width / 2 - d / 2),
            r = Math.round(e.height / 2 - i / 2);
        chrome.windows.create({
            url: `src/pages/panel/index.html?tabId=${e.id}&tabURL=${e.url}`,
            type: "popup",
            width: d,
            height: i,
            top: r,
            left: o
        })
    }
});
chrome.windows.onRemoved.addListener(function (e) {
    const d = Object.keys(n).find(i => n[i] === e);
    d && delete n[d]
});
