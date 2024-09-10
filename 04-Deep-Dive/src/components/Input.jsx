export function Input({type, ...props}){  
    return (
        !type? <textarea {...props} /> : <input type='text' {...props} />
    );
}
