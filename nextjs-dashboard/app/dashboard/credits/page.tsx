import Image from 'next/image';

export default function Page() {
    return (
        <div>
          <p>Cet examen est l'oeuvre de Mathis Micheau</p>
          <Image
              src="/me.jpg"
              width={100}
              height={100}
              className=""
              alt="C'est moi"
          />
        </div>
      );
  }