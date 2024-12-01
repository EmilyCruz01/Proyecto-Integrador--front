self.onmessage = (event) => {
    const { maduros, verdes } = event.data;
  
    const procesadosMaduros = maduros.map((item) => ({
      ...item,
      inspected: true, 
    }));
  
    const procesadosVerdes = verdes.map((item) => ({
      ...item,
      inspected: true,
    }));
  
    postMessage({ maduros: procesadosMaduros, verdes: procesadosVerdes });
  };
  