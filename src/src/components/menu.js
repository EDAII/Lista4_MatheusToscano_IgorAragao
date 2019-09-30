import React, { Component } from 'react'
import '../App.css'

export default class menu extends Component {
    render() {
        return (
            <div className="containerMenu">
                <h1 className="titulo">EDAFOOT 98</h1>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-around', marginLeft: 250}}>
                    <div>
                        <p className="textYellow">por Matheus Toscano e Igor Aragão</p>
                        <p className="textYellow">&copy;EDA 2 2019-2 Todos os direitos reservados</p>
                        <p style={{color: 'white', width: 270, fontSize: 13}}>Jogo criado para a disciplina de estruturas de dados e algoritmos II da UnB, ao longo do semestre
                            vai sendo adicionado novos algoritmos de acordo com as aulas ministradas segundas e sextas.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 180 }}>
                        <button className="botao" onClick={() => this.props.sceneFunction('Plantel')}>Ok</button>
                        <button className="botao">Carregar</button>
                    </div>
                </div>
                <div style={{padding: 6}}>
                    <h3 className="textYellow">Registro para Aluno</h3>
                </div>
            </div>
        )
    }
}
