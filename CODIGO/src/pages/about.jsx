export default function About() {
  return (
    <main className="mx-auto max-w-7xl my-4 p-4 sm:px-6 lg:px-8">
      <img
        className="w-full sm:h-96"
        src="/gifs/pikachu-suprised.gif"
        alt="pokemon gif"
      />
      <div className="mt-5">
        <h1 className="text-2xl text-slate-800">Olá Dev!</h1>
        <p className="mt-2 sm:text-xl text-slate-700">
        Criei esta Pokédex usando Next.js e Tailwind CSS. Para preencher a Pokédex com dados, utilizei a API PokeAPI. Com a PokeAPI, consegui obter todas as informações necessárias para cada Pokémon, incluindo nome, tipo e estatísticas. Esses dados foram organizados e exibidos na página da Pokédex, permitindo aos usuários navegar facilmente e aprender mais sobre cada Pokémon. No geral, construir uma Pokédex com Next.js e Tailwind CSS foi um projeto divertido e gratificante. Ele me permitiu demonstrar minhas habilidades de desenvolvimento web enquanto satisfazia minha curiosidade e paixão por Pokémon. 😎
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <a href="https://github.com/kevinLyf" target="_blank">
          <img src="/images/github.svg" alt="github do criador" />
        </a>
        <a href="https://github.com/VILHALVA" target="_blank">
          <img src="/images/github.svg" alt="github do editor" />
        </a>
      </div>
    </main>
  );
}
