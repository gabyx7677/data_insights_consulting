// Guarda snapshot actual y hace que futuros pushes se registren en window.__DL_LOG
window.__DL_LOG = window.dataLayer ? window.dataLayer.slice() : [];
if(window.dataLayer && !window.__DL_HOOKED){
  (function(){
    const orig = window.dataLayer.push;
    window.dataLayer.push = function() {
      window.__DL_LOG.push.apply(window.__DL_LOG, Array.from(arguments));
      return orig.apply(this, arguments);
    };
    window.__DL_HOOKED = true;
  })();
}
console.log('DL snapshot length:', window.__DL_LOG.length);

// Muestra una variable creada con la variable especifica almacenada como variable global y entrega el json 
const detalleProducto = window.dataLayer.find(e => e.event === 'productDetail');
console.log(detalleProducto);


// 1. Ver todo el contenido actual del dataLayer
console.log('Todo el contenido del dataLayer:', window.dataLayer);

// 2. Ver todos los nombres únicos de eventos registrados en dataLayer
const eventos = window.dataLayer.map(e => e.event).filter(Boolean);
console.log('Eventos únicos en dataLayer:', [...new Set(eventos)]);

// 3. Filtrar eventos que contienen la palabra "page" (para detectar pageviews)
console.log('Eventos relacionados con "page":',
  window.dataLayer.filter(e => e.event && e.event.toLowerCase().includes('page'))
);

// 4. Filtrar eventos que contienen la palabra "click" (para eventos de clics)
console.log('Eventos relacionados con "click":',
  window.dataLayer.filter(e => e.event && e.event.toLowerCase().includes('click'))
);

// 5. Filtrar eventos relacionados con añadir al carrito (addToCart, add, cart)
console.log('Eventos relacionados con añadir al carrito:',
  window.dataLayer.filter(e => {
    const ev = e.event ? e.event.toLowerCase() : '';
    return ev === 'addtocart' || ev === 'add' || ev.includes('cart');
  })
);

// 6. Filtrar eventos que contienen la propiedad 'ecommerce' para revisar datos ecommerce
console.log('Eventos con datos ecommerce:',
  window.dataLayer.filter(e => e.ecommerce)
);

// 7. Ver el último evento registrado en dataLayer (última acción)6
console.log('Último evento registrado:', window.dataLayer[window.dataLayer.length - 1]);

// 8. Filtrar eventos que contienen la palabra "product" (eventos con productos)
console.log('Eventos relacionados con "product":',
  window.dataLayer.filter(e => e.event && e.event.toLowerCase().includes('product'))
);

// BONUS: Interceptar y mostrar en consola nuevos eventos que se agregan a dataLayer en tiempo real
window.dataLayer.push = new Proxy(window.dataLayer.push, {
  apply: function(target, thisArg, argumentsList) {
    console.log('Nuevo evento dataLayer:', argumentsList[0]);
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
