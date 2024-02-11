truffle console --network polygon 
const abi = [const abi = [
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
;
const contractAddress = '0x33445F00C6fd0814ce8FdfDdb5250166Ae42cf5a';

const contract = new web3.eth.Contract(abi, contractAddress);
contract.methods.registrar('contenido a registrar').send({from: 'tu dirección aquí'})
.then(function(receipt) {
  console.log(receipt);
});
contract.methods.consultarRegistro('dirección del usuario').call()
.then(function(registro) {
  console.log('Registro encontrado:', registro);
});

