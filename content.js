if (!document.getElementById("sticky-sidebar")) {
    const iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL("sidebar.html");
    iframe.id = "sticky-sidebar";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.right = "0";
    iframe.style.width = "100%";
    iframe.style.height = "30%";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    document.body.appendChild(iframe);
} else {
    const sidebar = document.getElementById("sticky-sidebar");
    sidebar.remove();
}