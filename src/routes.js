import aluno from './controller/alunoController.js'
import ator from './controller/atorController.js'
import turma from './controller/turma.controller.js'

export default function adicionarRotas(servidor) {
  servidor.use(aluno);
  servidor.use(ator);
  servidor.use(turma);
}
