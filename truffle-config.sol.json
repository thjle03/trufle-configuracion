// Importar Web3.js
const Web3 = require('web3');

// Configurar proveedor de nodo de Polygon (Matic)
const provider = new Web3.providers.HttpProvider('https://rpc-mainnet.maticvigil.com');

// Crear una instancia de Web3
const web3 = new Web3(provider);

// ABI (Interfaz del contrato)
const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "contenido",
        "type": "string"
      }
    ],
    "name": "registrar",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "cuenta",
        "type": "address"
      }
    ],
    "name": "consultarRegistro",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// Dirección del contrato inteligente en la red de Polygon
const contractAddress = '0x33445F00C6fd0814ce8FdfDdb5250166Ae42cf5a';

// Crear una instancia del contrato inteligente
const contract = new web3.eth.Contract(abi, contractAddress);

// Registra un nuevo contenido
contract.methods.registrar('contenido a registrar').send({ from: 'tu dirección aquí' })
.then(function(receipt) {
  console.log('Transacción enviada:', receipt.transactionHash);
});

// Consulta el registro
contract.methods.consultarRegistro('0x33445F00C6fd0814ce8FdfDdb5250166Ae42cf5a').call()
.then(function(registro) {
  console.log('Registro encontrado:', registro);
});
