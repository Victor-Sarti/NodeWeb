import aluno from './controller/alunoController.js'
import ator from './controller/atorController.js'

export default function adicionarRotas(servidor) {
  servidor.use(aluno);
  servidor.use(ator);
}
