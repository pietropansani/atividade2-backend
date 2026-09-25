let conta = {
    usuario: "eduardo",
    senha: "1234",
    nome: "Eduardo Silva",
    email: "eduardo@email.com",
    nivel: "administrador",
    curso: "Desenvolvimento de Sistemas",
    turma: "DS 2",
    idade: 18
};

console.log("Nome do usuário: " + conta.usuario);
console.log("Nome completo: " + conta.nome);
console.log("E-mail: " + conta.email);
console.log("Curso: " + conta.curso);
console.log("Turma: " + conta.turma);
console.log("Idade: " + conta.idade);
console.log("Nível de acesso: " + conta.nivel);
console.log("Senha: " + conta.senha);

console.log("O usuário " + conta.usuario + ", de " + conta.idade + 
" anos, está matriculado no curso de " + conta.curso + 
", turma " + conta.turma + 
". Seu nível de acesso é " + conta.nivel + 
" e seu e-mail é " + conta.email + 
". A senha cadastrada é " + conta.senha + ".");
