document.querySelector("body").innerHTML = `
<h1>TITULO PARA EJERCICIO DE PRACTICA</h1>
<h2>Detalles</h2>

<ol>
    <li>Musica</li>
    <li>
        <details>
            <summary>Rock And Roll</summary>
            <p>Los Redondos</p>
    </li>
    </details>
    <li>
        <details>
            <summary>Cancion de los Redondos</summary>
            <iframe width="800" height="550" src="https://www.youtube.com/embed/ovFvceUm3wk"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    </li>
    </details>
</ol>

<h3>Otro Titulo</h3>
<ul>
    <li>
        <details>
            <summary>Los Musicos</summary>
            <img src="Los-Redondos-vieja-1920.jpg" alt="" srcset="" width="800" height="550">
    </li>
    </details>
    <li>
        <p>parrafo infinito</p>
    </li>
    <li>
        <a href="https://redondossubtitulados.com/">Pagina Oficial</a>
    </li>
    </ul>`