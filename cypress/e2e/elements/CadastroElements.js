class CadastroElements {
  btnAcessarCadastro = () => '#__next button.style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child';
  inputNome = () => 'input[name="name"]';
  inputEmail = () => ':nth-child(2) > .input__default';
  inputSenha = () => ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default';
  inputConfirmarSenha = () => ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default';
  checkboxSaldo = () => '#toggleAddBalance';
  btnCadastrar = () => '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0';
  modalSucesso = () => '#modalText';
  btnFecharModal = () => '#btnCloseModal';
}

module.exports = new CadastroElements();
