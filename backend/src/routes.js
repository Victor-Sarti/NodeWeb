import aluno from '../src/controller/alunoController.js'
import ator from '../src/controller/atorController.js'
import turma from '../src/controller/turmaController.js'

export default function adicionarRotas(servidor) {
  servidor.use(aluno);
  servidor.use(ator);
  servidor.use(turma);
}
