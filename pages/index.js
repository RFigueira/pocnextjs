import React from 'react';
import Link from 'next/link';

import 'isomorphic-fetch';

const Home = ({ repos }) => (
    <div>
        <Link href="/conteudo">
            <a>Outra pagina</a>
        </Link>
        {repos.map(repo => (
            <h1 key={repo.id}>{repo.name}</h1>
        ))}
    </div>
);

Home.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/users/RFigueira/repos');
    const repos = await response.json();
    console.log('veja onde carregou!')

    return { repos };
};

export default Home;