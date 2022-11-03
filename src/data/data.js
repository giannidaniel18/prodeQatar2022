export const paises = {
  grupoA: [
    {
      id: "01_GA",
      name: "Qatar",
    },
    {
      id: "02_GA",
      name: "Ecuador",
    },
    {
      id: "03_GA",
      name: "Senegal",
    },
    {
      id: "04_GA",
      name: "P. Bajos",
    },
  ],
  grupoB: [
    {
      id: "01_GB",
      name: "Inglaterra",
    },
    {
      id: "02_GB",
      name: "Iran",
    },
    {
      id: "03_GB",
      name: "EEUU",
    },
    {
      id: "04_GB",
      name: "Gales",
    },
  ],
  grupoC: [
    {
      id: "01_GC",
      name: "Argentina",
    },
    {
      id: "02_GC",
      name: "Arabia Saudita",
    },
    {
      id: "03_GC",
      name: "Mexico",
    },
    {
      id: "04_GC",
      name: "Polonia",
    },
  ],
  grupoD: [
    {
      id: "01_GD",
      name: "Francia",
    },
    {
      id: "02_GD",
      name: "Australia",
    },
    {
      id: "03_GD",
      name: "Dinamarca",
    },
    {
      id: "04_GD",
      name: "Tunez",
    },
  ],
  grupoE: [
    {
      id: "01_GE",
      name: "España",
    },
    {
      id: "02_GE",
      name: "Costa Rica",
    },
    {
      id: "03_GE",
      name: "Alemania",
    },
    {
      id: "04_GE",
      name: "Japon",
    },
  ],
  grupoF: [
    {
      id: "01_GF",
      name: "Belgica",
    },
    {
      id: "02_GF",
      name: "Canada",
    },
    {
      id: "03_GF",
      name: "Marruecos",
    },
    {
      id: "04_GF",
      name: "Croacia",
    },
  ],
  grupoG: [
    {
      id: "01_GG",
      name: "Brasil",
    },
    {
      id: "02_GG",
      name: "Serbia",
    },
    {
      id: "03_GG",
      name: "Suiza",
    },
    {
      id: "04_GG",
      name: "Camerun",
    },
  ],
  grupoH: [
    {
      id: "01_GH",
      name: "Portugal",
    },
    {
      id: "02_GH",
      name: "Ghana",
    },
    {
      id: "03_GH",
      name: "Uruguay",
    },
    {
      id: "04_GH",
      name: "Corea.S",
    },
  ],
};

export const grupos = [
  {
    id_grupo: "1",
    name_grupo: "Grupo A",
    enfrentamientos: [
      {
        fecha: "18/05/2022",
        horario: "18:00",
        id: "p1A",
        local: paises.grupoA[0].name,
        visitante: paises.grupoA[1].name,
        resultado: "vistante",
      },
      {
        id: "p2A",
        local: paises.grupoA[2].name,
        visitante: paises.grupoA[3].name,
        resultado: "",
      },
      {
        id: "p3A",
        local: paises.grupoA[0].name,
        visitante: paises.grupoA[2].name,
        resultado: "",
      },
      {
        id: "p4A",
        local: paises.grupoA[3].name,
        visitante: paises.grupoA[1].name,
        resultado: "",
      },
      {
        id: "p5A",
        local: paises.grupoA[3].name,
        visitante: paises.grupoA[0].name,
        resultado: "",
      },
      {
        id: "p6A",
        local: paises.grupoA[1].name,
        visitante: paises.grupoA[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "2",
    name_grupo: "Grupo B",
    enfrentamientos: [
      {
        id: "p1B",
        local: paises.grupoB[0].name,
        visitante: paises.grupoB[1].name,
        resultado: "",
      },
      {
        id: "p2B",
        local: paises.grupoB[2].name,
        visitante: paises.grupoB[3].name,
        resultado: "",
      },
      {
        id: "p3B",
        local: paises.grupoB[0].name,
        visitante: paises.grupoB[2].name,
        resultado: "",
      },
      {
        id: "p4B",
        local: paises.grupoB[3].name,
        visitante: paises.grupoB[1].name,
        resultado: "",
      },
      {
        id: "p5B",
        local: paises.grupoB[3].name,
        visitante: paises.grupoB[0].name,
        resultado: "",
      },
      {
        id: "p6B",
        local: paises.grupoB[1].name,
        visitante: paises.grupoB[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: " 3",
    name_grupo: "Grupo C",
    enfrentamientos: [
      {
        id: "p1C",
        local: paises.grupoC[0].name,
        visitante: paises.grupoC[1].name,
        resultado: "",
      },
      {
        id: "p2C",
        local: paises.grupoC[2].name,
        visitante: paises.grupoC[3].name,
        resultado: "",
      },
      {
        id: "p3C",
        local: paises.grupoC[0].name,
        visitante: paises.grupoC[2].name,
        resultado: "",
      },
      {
        id: "p4C",
        local: paises.grupoC[3].name,
        visitante: paises.grupoC[1].name,
        resultado: "",
      },
      {
        id: "p5C",
        local: paises.grupoC[3].name,
        visitante: paises.grupoC[0].name,
        resultado: "",
      },
      {
        id: "p6C",
        local: paises.grupoC[1].name,
        visitante: paises.grupoC[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "4",
    name_grupo: "Grupo D",
    enfrentamientos: [
      {
        id: "p1D",
        local: paises.grupoD[0].name,
        visitante: paises.grupoD[1].name,
        resultado: "",
      },
      {
        id: "p2D",
        local: paises.grupoD[2].name,
        visitante: paises.grupoD[3].name,
        resultado: "",
      },
      {
        id: "p3D",
        local: paises.grupoD[0].name,
        visitante: paises.grupoD[2].name,
        resultado: "",
      },
      {
        id: "p4D",
        local: paises.grupoD[3].name,
        visitante: paises.grupoD[1].name,
        resultado: "",
      },
      {
        id: "p5D",
        local: paises.grupoD[3].name,
        visitante: paises.grupoD[0].name,
        resultado: "",
      },
      {
        id: "p6D",
        local: paises.grupoD[1].name,
        visitante: paises.grupoD[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "5",
    name_grupo: "Grupo E",
    enfrentamientos: [
      {
        id: "p1E",
        local: paises.grupoE[0].name,
        visitante: paises.grupoE[1].name,
        resultado: "",
      },
      {
        id: "p2E",
        local: paises.grupoE[2].name,
        visitante: paises.grupoE[3].name,
        resultado: "",
      },
      {
        id: "p3E",
        local: paises.grupoE[0].name,
        visitante: paises.grupoE[2].name,
        resultado: "",
      },
      {
        id: "p4E",
        local: paises.grupoE[3].name,
        visitante: paises.grupoE[1].name,
        resultado: "",
      },
      {
        id: "p5E",
        local: paises.grupoE[3].name,
        visitante: paises.grupoE[0].name,
        resultado: "",
      },
      {
        id: "p6E",
        local: paises.grupoE[1].name,
        visitante: paises.grupoE[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "6",
    name_grupo: "Grupo F",
    enfrentamientos: [
      {
        id: "p1F",
        local: paises.grupoF[0].name,
        visitante: paises.grupoF[1].name,
        resultado: "",
      },
      {
        id: "p2F",
        local: paises.grupoF[2].name,
        visitante: paises.grupoF[3].name,
        resultado: "",
      },
      {
        id: "p3F",
        local: paises.grupoF[0].name,
        visitante: paises.grupoF[2].name,
        resultado: "",
      },
      {
        id: "p4F",
        local: paises.grupoF[3].name,
        visitante: paises.grupoF[1].name,
        resultado: "",
      },
      {
        id: "p5F",
        local: paises.grupoF[3].name,
        visitante: paises.grupoF[0].name,
        resultado: "",
      },
      {
        id: "p6F",
        local: paises.grupoF[1].name,
        visitante: paises.grupoF[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "7",
    name_grupo: "Grupo G",
    enfrentamientos: [
      {
        id: "p1G",
        local: paises.grupoG[0].name,
        visitante: paises.grupoG[1].name,
        resultado: "",
      },
      {
        id: "p2G",
        local: paises.grupoG[2].name,
        visitante: paises.grupoG[3].name,
        resultado: "",
      },
      {
        id: "p3G",
        local: paises.grupoG[0].name,
        visitante: paises.grupoG[2].name,
        resultado: "",
      },
      {
        id: "p4G",
        local: paises.grupoG[3].name,
        visitante: paises.grupoG[1].name,
        resultado: "",
      },
      {
        id: "p5G",
        local: paises.grupoG[3].name,
        visitante: paises.grupoG[0].name,
        resultado: "",
      },
      {
        id: "p6G",
        local: paises.grupoG[1].name,
        visitante: paises.grupoG[2].name,
        resultado: "",
      },
    ],
  },
  {
    id_grupo: "8",
    name_grupo: "Grupo H",
    enfrentamientos: [
      {
        id: "p1H",
        local: paises.grupoH[0].name,
        visitante: paises.grupoH[1].name,
        resultado: "",
      },
      {
        id: "p2H",
        local: paises.grupoH[2].name,
        visitante: paises.grupoH[3].name,
        resultado: "",
      },
      {
        id: "p3H",
        local: paises.grupoH[0].name,
        visitante: paises.grupoH[2].name,
        resultado: "",
      },
      {
        id: "p4H",
        local: paises.grupoH[3].name,
        visitante: paises.grupoH[1].name,
        resultado: "",
      },
      {
        id: "p5H",
        local: paises.grupoH[3].name,
        visitante: paises.grupoH[0].name,
        resultado: "",
      },
      {
        id: "p6H",
        local: paises.grupoH[1].name,
        visitante: paises.grupoH[2].name,
        resultado: "",
      },
    ],
  },
];

export const predicciones = [
  {
    userID: "dani",
    predicciones: [
      { partido: "p1A", resultado: "visitante" },
      { partido: "p2A", resultado: "visitante" },
      { partido: "p3A", resultado: "visitante" },
    ],
  },
];
