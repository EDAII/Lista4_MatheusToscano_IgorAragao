import React, { Component } from 'react'
import { insertSort, bubbleSort, selectionSort } from './sorting'
import { resultados } from './rodadas'
import '../App.css'

let b = [22, 31, 3, 21, 84, 29, 9]

let team = [
    {
        nome: 'Buffon',
        posicao: 'G',
        forca: 90,
        selected: false,
    },
    {
        nome: 'Neuer',
        posicao: 'G',
        forca: 93,
        selected: false
    },
    {
        nome: 'Alisson',
        posicao: 'G',
        forca: 96,
        selected: false
    },
    {
        nome: 'Pique',
        posicao: 'D',
        forca: 87,
        selected: false
    },
    {
        nome: 'Ramos',
        posicao: 'D',
        forca: 88,
        selected: false
    },
    {
        nome: 'Marcelo',
        posicao: 'D',
        forca: 90,
        selected: false
    },
    {
        nome: 'Chiellini',
        posicao: 'D',
        forca: 91,
        selected: false
    },
    {
        nome: 'Kroos',
        posicao: 'M',
        forca: 91,
        selected: false
    },
    {
        nome: 'Modric',
        posicao: 'M',
        forca: 89,
        selected: false
    },
    {
        nome: 'Ozil',
        posicao: 'M',
        forca: 82,
        selected: false
    },
    {
        nome: 'Cristiano Ronaldo',
        posicao: 'A',
        forca: 99,
        selected: false
    },
    {
        nome: 'Lionel Messi',
        posicao: 'A',
        forca: 99,
        selected: false
    },
    {
        nome: 'Neymar',
        posicao: 'A',
        forca: 96,
        selected: false
    },
    {
        nome: 'Mbappe',
        posicao: 'A',
        forca: 95,
        selected: false
    },
    {
        nome: 'Lewandovski',
        posicao: 'A',
        forca: 91,
        selected: false
    },
    {
        nome: 'Firmino',
        posicao: 'A',
        forca: 92,
        selected: false
    },
    {
        nome: 'Salah',
        posicao: 'A',
        forca: 92,
        selected: false
    },

];

let result = '';

export default class search extends Component {

    linear() {
        let n = team.length
        let a = []
        let k = String(prompt('Digite o nome do jogador que deseja encontrar: '))
        for (let i = 0; i < team.length; i++) {
            if (k === team[i].nome) {
                result = 'Jogador ' + team[i].nome + ' está na posição ' + i + ' força:  ' + team[i].forca
                team[i].selected = true
                setTimeout(function () {
                    this.forceUpdate()
                    team[i].selected = false
                }.bind(this), 800)
                break;
            } else if (i === (team.length - 1) && k !== team[i].nome) {
                result = 'Jogador não encontrado!'
                this.forceUpdate()
            }
        }
    }

    insertion() {
        insertSort(team)
        this.forceUpdate()
    }

    selection(){
        selectionSort(resultados)
        this.forceUpdate()
    }


    render() {
        return (
            <div className="container">
                <h1 className="titulo">EDAFOOT 98</h1>
                <div className="info_time">
                    <div className="info_time_1">
                        <div className="info_position">
                            <h3 className="infos_time">Vasco da Gama</h3>
                            <h3 className="infos"> Primeira divisão</h3>
                            <h3 className="infos">Dinheiro em caixa: R$ 2.000.000.00</h3>
                        </div>
                        <div className="plantel">
                            {team.map(player => {
                                return <li style={!player.selected ? {} : { backgroundColor: '#a22' }}><span style={{ marginRight: 20 }}>{player.posicao}</span>{player.nome}<span style={{ marginLeft: player.forca + 100 }}>{player.forca}</span></li>
                            })}
                        </div>
                    </div>
                    <div className="info_time_2">
                        <div className="cont_botoes">
                            <button className="botao" onClick={() => this.linear()}>Pesquisar</button>
                            <button className="botao" onClick={() => this.insertion()}>Escalar Melhores</button>
                            <button className="botao" onClick={() => this.selection()}>Atualizar Tabela</button>
                        </div>
                        <p className="resultado_busca">{result}</p>
                        <div className="tabelas">
                            {resultados.map(tabela => {
                                return (
                                    <div style={{ display: 'flex', backgroundColor: tabela.color.bg, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <span style={{color: tabela.color.letra, padding: 3}}>{tabela.time.toUpperCase()}</span>
                                        <span style={{marginRight: 10, color: tabela.color.letra}}>{tabela.pontos}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
