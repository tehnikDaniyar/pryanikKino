export const xFrameBypass = () => {
	return (
		customElements.define('x-frame-bypass', class extends HTMLIFrameElement {
			constructor() {
				super()
			}
			connectedCallback() {
				this.load(this.src)
				this.src = ''
				this.sandbox = '' + this.sandbox || 'allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation' // all except allow-top-navigation
			}
			load(url, options) {
				if (!url || !url.startsWith('http'))
					throw new Error(`X-Frame-Bypass src ${url} does not start with http(s)://`)
				console.log('X-Frame-Bypass loading:', url)
				this.srcdoc = `<html>
		<head>
			<style>
			.loader {
				position: absolute;
				top: calc(50% - 25px);
				left: calc(50% - 25px);
				width: 50px;
				height: 50px;
				background-color: #333;
				border-radius: 50%;  
				animation: loader 1s infinite ease-in-out;
			}
			@keyframes loader {
				0% {
				transform: scale(0);
				}
				100% {
				transform: scale(1);
				opacity: 0;
				}
			}
			</style>
		</head>
		<body>
			<div class="loader"></div>
		</body>
		</html>`
				this.fetchProxy(url, options, 0).then(res => res.text()).then(data => {
					if (data)
						this.srcdoc = data.replace(/<head([^>]*)>/i, `<head$1>
			<base href="${url}">
			<script>
			// X-Frame-Bypass navigation event handlers
			document.addEventListener('click', e => {
				if (frameElement && document.activeElement && document.activeElement.href) {
					e.preventDefault()
					frameElement.load(document.activeElement.href)
				}
			})
			document.addEventListener('submit', e => {
				if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {
					e.preventDefault()
					if (document.activeElement.form.method === 'post')
						frameElement.load(document.activeElement.form.action, {method: 'post', body: new FormData(document.activeElement.form)})
					else
						frameElement.load(document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form)))
				}
			})
			</script>`)
				}).catch(e => console.error('Cannot load X-Frame-Bypass:', e))
			}
			fetchProxy(url, options, i) {
				const proxy = [
					'https://cors.io/?',
					'https://jsonp.afeld.me/?url=',
					'https://cors-anywhere.herokuapp.com/'
				]
				return fetch(proxy[i] + url, options).then(res => {
					if (!res.ok)
						throw new Error(`${res.status} ${res.statusText}`);
					return res
				}).catch(error => {
					if (i === proxy.length - 1)
						throw error
					return this.fetchProxy(url, options, i + 1)
				})
			}
		}, { extends: 'iframe' })
	)
}

export const customElementBuiltin = () => {
	return !function (P, H, k) { "use strict"; if (1 == P.importNode.length && !H.get("ungap-li")) { var D = "extends"; try { var e = { extends: "li" }, t = HTMLLIElement, n = function () { return Reflect.construct(t, [], n) }; if (n.prototype = k.create(t.prototype), H.define("ungap-li", n, e), !/is="ungap-li"/.test((new n).outerHTML)) throw e } catch (e) { !function () { var l = "attributeChangedCallback", n = "connectedCallback", r = "disconnectedCallback", e = Element.prototype, i = k.assign, t = k.create, o = k.defineProperties, a = k.getOwnPropertyDescriptor, s = k.setPrototypeOf, u = H.define, c = H.get, f = H.upgrade, p = H.whenDefined, v = t(null), d = new WeakMap, g = { childList: !0, subtree: !0 }; Reflect.ownKeys(self).filter(function (e) { return "string" == typeof e && /^HTML(?!Element)/.test(e) }).forEach(function (e) { function t() { } var n = self[e]; s(t, n), (t.prototype = n.prototype).constructor = t, (n = {})[e] = { value: t }, o(self, n) }), new MutationObserver(m).observe(P, g), O(Document.prototype, "importNode"), O(Node.prototype, "cloneNode"), o(H, { define: { value: function (e, t, n) { if (e = e.toLowerCase(), n && D in n) { v[e] = i({}, n, { Class: t }); for (var e = n[D] + '[is="' + e + '"]', r = P.querySelectorAll(e), o = 0, a = r.length; o < a; o++)A(r[o]) } else u.apply(H, arguments) } }, get: { value: function (e) { return e in v ? v[e].Class : c.call(H, e) } }, upgrade: { value: function (e) { var t = L(e); !t || e instanceof t.Class ? f.call(H, e) : N(e, t) } }, whenDefined: { value: function (e) { return e in v ? Promise.resolve() : p.call(H, e) } } }); var h = P.createElement; o(P, { createElement: { value: function (e, t) { e = h.call(P, e); return t && "is" in t && (e.setAttribute("is", t.is), H.upgrade(e)), e } } }); var b = a(e, "attachShadow").value, y = a(e, "innerHTML"); function m(e) { for (var t = 0, n = e.length; t < n; t++) { for (var r = e[t], o = r.addedNodes, a = r.removedNodes, i = 0, l = o.length; i < l; i++)A(o[i]); for (i = 0, l = a.length; i < l; i++)C(a[i]) } } function w(e) { for (var t = 0, n = e.length; t < n; t++) { var r = e[t], o = r.attributeName, a = r.oldValue, i = r.target, r = i.getAttribute(o); l in i && (a != r || null != r) && i[l](o, a, i.getAttribute(o), null) } } function C(e) { var t; 1 === e.nodeType && ((t = L(e)) && e instanceof t.Class && r in e && d.get(e) !== r && (d.set(e, r), Promise.resolve(e).then(T)), E(e, C)) } function L(e) { e = e.getAttribute("is"); return e && (e = e.toLowerCase()) in v ? v[e] : null } function M(e) { e[n]() } function T(e) { e[r]() } function N(e, t) { var t = t.Class, n = t.observedAttributes || []; if (s(e, t.prototype), n.length) { new MutationObserver(w).observe(e, { attributes: !0, attributeFilter: n, attributeOldValue: !0 }); for (var r = [], o = 0, a = n.length; o < a; o++)r.push({ attributeName: n[o], oldValue: null, target: e }); w(r) } } function A(e) { var t; 1 === e.nodeType && ((t = L(e)) && (e instanceof t.Class || N(e, t), n in e && e.isConnected && d.get(e) !== n && (d.set(e, n), Promise.resolve(e).then(M))), E(e, A)) } function E(e, t) { for (var n = e.content, r = (n && 11 == n.nodeType ? n : e).querySelectorAll("[is]"), o = 0, a = r.length; o < a; o++)t(r[o]) } function O(e, t) { var n = e[t], r = {}; r[t] = { value: function () { var e = n.apply(this, arguments); switch (e.nodeType) { case 1: case 11: E(e, A) }return e } }, o(e, r) } o(e, { attachShadow: { value: function () { var e = b.apply(this, arguments); return new MutationObserver(m).observe(e, g), e } }, innerHTML: { get: y.get, set: function (e) { y.set.call(this, e), /\bis=("|')?[a-z0-9_-]+\1/i.test(e) && E(this, A) } } }) }() } } }(document, customElements, Object);
}