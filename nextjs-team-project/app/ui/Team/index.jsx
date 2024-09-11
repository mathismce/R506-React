import Card from "./Card.jsx";


export default function Team() {
  
  return (
    <section className="text-foreground m-auto max-w-6xl p-4 text-center">
      <header>
        <h2>Notre équipe</h2>
        <h1 className="mt-3 text-4xl font-bold">Notre équipe</h1>
      </header>
      <div>
        <p className="max-w-ch text-foreground mx-auto mb-8 mt-4 leading-8 text-opacity-70">
          Petite description
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          Nos employes
        </ul>
      </div>
    </section>
  );
}
