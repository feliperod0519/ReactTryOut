// export default function Card({ name,mailto,textMail,children}) {
//     return (<div>
//                <h3>{name}</h3> 
//                 <p>
//                     {children}
//                 </p>
//                 <p>
//                     <a href='mailto:{mailto}'>{textMail}</a>
//                 </p>
//             </div>
//            );
// }

export default function Card({ name, children }) {
    return (
      <article className="card">
        <h2>{name}</h2>
        {children}
      </article>
    );
  }