export default function Section({ title, children, ...myprops }) {
    return (
       <section {...myprops}> {/*The id prop is not automatically passed to the section element. Check css #id selector*/}
        <h2>{title}</h2>
        {children}
      </section>
    );
}