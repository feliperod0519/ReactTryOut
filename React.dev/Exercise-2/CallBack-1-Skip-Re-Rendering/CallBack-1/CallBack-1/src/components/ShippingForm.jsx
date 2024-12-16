const { useState } = require("react");

function ShippingForm({submit}){
    const [count,setCount] = useState(1);
    console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }
}