import connection from "./connection.js";

export async function inserir(turma) {
    const comando = 
        `INSERT INTO tb_turma(nm_turma, ds_curso, nr_ano_letivo,
                qtd_capacidade, bt_ativo, dt_inclusao) 
                    VALUES (?, ?, ?, ?, ?, ?) `
    
    let [info] = await connection.query(comando, [turma.nome, turma.desc, turma.anoletivo, turma.capacidade, turma.bt, turma.data]);
    return info.insertId
    
}

export async function alterar(id, turma) {
const comando = `UPDATE tb_turma 
                    SET nm_turma = ?,
                       ds_curso = ?,
                       nr_ano_letivo = ?,
                       qtd_capacidade = ?,
                       bt_ativo = ?,
                       dt_inclusao = ? 
                WHERE id_turma = ?`;

let [info] = await connection.query(comando, [turma.nome, turma.desc, turma.anoletivo, turma.capacidade, turma.bt, turma.data, id]);
 return info.affectedRows   
}

export async function remover(id) {
    const comando = 
    ` DELETE FROM tb_turma 
      WHERE id_turma = ?`
    let [info] = await connection.query(comando, [id]);
     return info.affectedRows   
    }

    export async function listar() {
        const comando = `SELECT id_turma as id,
                               nm_turma as nome,
                               ds_curso as ds,
                               nr_ano_letivo as letivo,
                               qtd_capacidade as capacidade,
                               bt_ativo as bt,
                               dt_inclusao as inclusao
                        FROM tb_turma`;
        
        let [info] = await connection.query(comando);
        return info; 
    }

    export async function findByYear(ano) {
        const comando = `SELECT id_turma as id,
                                nm_turma as nm_turma,
                                ds_curso as ds,
                                nr_ano_letivo as letivo,
                                qtd_capacidade as capacidade,
                                bt_ativo as bt,
                                dt_inclusao as inclusao
                         FROM tb_turma 
                         WHERE YEAR(dt_inclusao) = ?`;
    
        let [resp] = await connection.query(comando, [ano]);
        return resp;
}

export async function findByCourseAndYear(year, course){
    const comando = `SELECT id_turma as id,
                                nm_turma as nm_turma,
                                ds_curso as ds,
                                nr_ano_letivo as letivo,
                                qtd_capacidade as capacidade,
                                bt_ativo as bt,
                                dt_inclusao as inclusao
                         FROM tb_turma 
                         WHERE ds_curso = ? AND YEAR(dt_inclusao) = ?`;

    let resp = await connection.query(comando, [course, year]);
    return resp;
}