/**
 * Created by Roc on 2017/9/18.
 */
function dropdownMenu() {
    var b = document.getElementsByClassName("dropdown");
        var a = b[0].getElementsByTagName("a");
        a[0].onclick = function () {
            var menu = b[0].getElementsByTagName("button")[0];
            var i = a[0].firstChild.nodeValue;
            menu.firstChild.nodeValue = i;
        }
        a[1].onclick = function () {
            var menu = b[0].getElementsByTagName("button")[0];
            var i = a[1].firstChild.nodeValue;
            menu.firstChild.nodeValue = i;
        }
    var c = b[1].getElementsByTagName("a");
    c[0].onclick = function () {
        var menu = b[1].getElementsByTagName("button")[0];
        var i = c[0].firstChild.nodeValue;
        menu.firstChild.nodeValue = i;
    }
    c[1].onclick = function () {
        var menu = b[1].getElementsByTagName("button")[0];
        var i = c[1].firstChild.nodeValue;
        menu.firstChild.nodeValue = i;
    }
    var d = b[2].getElementsByTagName("a");
    d[0].onclick = function () {
        var menu = b[2].getElementsByTagName("button")[0];
        var i = d[0].firstChild.nodeValue;
        menu.firstChild.nodeValue = i;
    }
    d[1].onclick = function () {
        var menu = b[2].getElementsByTagName("button")[0];
        var i = d[1].firstChild.nodeValue;
        menu.firstChild.nodeValue = i;
    }
}
window.onload = dropdownMenu;