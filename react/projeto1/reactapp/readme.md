React é baseado em componetização

imutabilidade : o conteudo não deve ser alterado mas sim substituido 

key prop : importante usar em loops com geração de componentes dinamicos 
a key deve ser unica

hooks
funções que permitem ligar/conectar os recursos de estado e fluxos de vida do react a partir de componentes funcionais 

async não funciona no useEffect
apenas dentro de uma função


useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

